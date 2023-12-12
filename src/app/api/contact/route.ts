import nodemailer from "nodemailer";
import { type NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";
import ContactMailTemplate from "@/components/MailTemplate/ContactMailTemplate";

/* 
  setting service as 'gmail' is same as providing these setings:
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  If you want to use a different email provider other than gmail, you need to provide these manually.
  Or you can go use these well known services and their settings at
  https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
*/
export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request: NextRequest) {
  // check if request is json or formdata
  const contentType = request.headers.get("content-type");
  // if json
  let mailOptions: Mail.Options;
  let mailOptionsConfirmation: Mail.Options;
  if (contentType?.includes("application/json")) {
    const { name, email, mobile, note, jobTitle, company, position, cv } =
      await request.json();
    mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "Liên hệ hợp tác",
      text: `Tên: ${name}\nEmail: ${email}\nSố điện thoại: ${mobile}\nGhi chú: ${note}\nVị trí: ${jobTitle}\nCông ty: ${company}`,
      html: ContactMailTemplate(name, email, mobile, note, jobTitle, company),
    };

    mailOptionsConfirmation = {
      from: process.env.OWNER_EMAIL,
      to: email,
      subject: "Thank you for your message",
      text: `Thank you for your message. I will get back to you as soon as possible.`,
    };
  } else {
    // if formdata
    const requestFormData = await request.formData();
    const name = requestFormData.get("name");
    const email = requestFormData.get("email") as string;
    const cvfile = requestFormData.get("cv") as File;
    const mobile = requestFormData.get("mobile");
    const position = requestFormData.get("position");

    console.log("email", email);

    const bytes = await cvfile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "Ứng tuyển",
      text: `Tên: ${name}\nEmail: ${email}\nSố điện thoại: ${mobile}\nVị trí: ${position}\nCV: SEE ATTACHMENT`,
      attachments: [
        {
          filename: cvfile.name,
          content: buffer,
          contentType: "application/pdf",
        },
      ],
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Information</title>
          <style>
              body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: #f8f8f8;
                  margin: 0;
                  padding: 0;
              }

              .container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 15px;
                  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
              }

              header {
                  background: linear-gradient(135deg, #4a90e2, #50e3c2);
                  height: 50px;
                  border-radius: 15px 15px 0 0;
                  position: relative;
              }

              header h1 {
                  color: #ffffff;
                  font-size: 32px;
                  text-align: center;
                  margin: 0;
                  padding-top: 10px;
              }

              section {
                  padding: 20px 0;
              }

              p {
                  color: #444444;
                  line-height: 1.6;
              }

              strong {
                  color: #222222;
              }

              .file-input {
                  margin-top: 20px;
              }

              .file-input label {
                  background-color: #4a90e2;
                  color: #ffffff;
                  padding: 10px 15px;
                  border-radius: 5px;
                  cursor: pointer;
                  display: inline-block;
              }

              .file-input input {
                  display: none;
              }
          </style>
      </head>
      <body>
          <header>
              <h1>Contact Information</h1>
          </header>
          <div class="container">
              <section>
                  <p><strong>Tên:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Số điện thoại:</strong> ${mobile}</p>
                  <p><strong>Vị trí:</strong> ${position}</p>
                  <p><strong>CV:</strong> Xem đính kèm</p>
              </section>
          </div>
      </body>
      </html>
      `,
    };

    mailOptionsConfirmation = {
      from: process.env.OWNER_EMAIL,
      to: email,
      subject: "Thank you for your message",
      text: `Thank you for your message. I will get back to you as soon as possible.`,
    };
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.OWNER_EMAIL,
      pass: process.env.OWNER_APP_PASSWORD,
    },
  });

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  const sendMailConfirmationPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptionsConfirmation, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    await sendMailConfirmationPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
