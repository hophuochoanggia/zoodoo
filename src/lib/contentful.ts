import { createClient } from "contentful";


export const initContentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESSTOKEN ?? "",
});