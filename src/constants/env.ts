export const ENV = {
  SITE_URL: process.env.SITE_URL,
  NEXT_PUBLIC_CONTENTFUL_SPACEID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID,
  NEXT_PUBLIC_CONTENTFUL_ACCESSTOKEN:
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESSTOKEN,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_SMTP_HOST: process.env.EMAIL_SMTP_HOST,
  EMAIL_SMTP_PORT: Number(process.env.EMAIL_SMTP_PORT),
  EMAIL_SMTP_USER: process.env.EMAIL_SMTP_USER,
  EMAIL_SMTP_PASSWORD: process.env.EMAIL_SMTP_PASSWORD,
  MONGODB_URI: process.env.MONGODB_URI,
  SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  SESSION_SECURE: process.env.SESSION_SECURE === "true" ? true : false,
};
