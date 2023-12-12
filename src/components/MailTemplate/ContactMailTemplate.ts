const ContactMailTemplate = (
  name: string,
  email: string,
  mobile: string,
  note: string,
  jobTitle: string,
  company: string
) => `
<!DOCTYPE html>
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
            height: 100px;
            border-radius: 5px;
            position: relative;
        }

        header h1 {
            color: #ffffff;
            font-size: 32px;
            text-align: center;
            margin: 0;
            padding-top: 20px;
        }

        section {
            padding: 10px 0;
        }

        p {
            color: #444444;
            line-height: 1.6;
        }

        strong {
            color: #222222;
        }
    </style>
</head>
<body>
    <header>
        <h1>Liên hệ hợp tác</h1>
    </header>
    <div class="container">
        <section>
            <p><strong>Tên:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Số điện thoại:</strong> ${mobile}</p>
            <p><strong>Ghi chú:</strong> ${note}</p>
            <p><strong>Vị trí:</strong> ${jobTitle}</p>
            <p><strong>Công ty:</strong> ${company}</p>
        </section>
    </div>
</body>
</html>
`;

export default ContactMailTemplate;
