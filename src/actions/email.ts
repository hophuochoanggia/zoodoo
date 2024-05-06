"use server";
import nodemailer from "nodemailer";
import { ENV } from "@/constants/env";
// import { User } from "@prisma/client";

const transport = nodemailer.createTransport({
  host: ENV.EMAIL_SMTP_HOST,
  port: ENV.EMAIL_SMTP_PORT,
  auth: {
    user: ENV.EMAIL_SMTP_USER,
    pass: ENV.EMAIL_SMTP_PASSWORD,
  },
});

export async function sendEmail({
  to,
  bcc,
  subject,
  html,
}: {
  to: string[];
  bcc?: string[];
  subject: string;
  html: string;
}): Promise<{ ok: true }> {
  try {
    const t = await transport.sendMail({
      from: `"ZooDoo" <${ENV.EMAIL_FROM}>`, // sender address
      to,
      bcc,
      subject,
      html,
    });

    console.log("T--->", t);

    return { ok: true };
  } catch (e: any) {
    return { ok: true };
    // throw new Error("Internal Server Error", { cause: e.message });
  }
}
