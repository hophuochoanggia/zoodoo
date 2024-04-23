"use server";
import { ENV } from "@/constants/env";
import { sealData, unsealData } from "iron-session";
import { cookies } from "next/headers";

const sessionPassword = process.env.SESSION_PASSWORD as string;
if (!sessionPassword) throw new Error("SESSION_PASSWORD is not set");

export type ISession = {
  login: string;
};

export async function getSession(): Promise<ISession | null> {
  const encryptedSession = cookies().get("auth_session")?.value;

  const session = encryptedSession
    ? ((await unsealData(encryptedSession, {
        password: sessionPassword,
      })) as string)
    : null;

  try {
    return session ? (JSON.parse(session) as ISession) : null;
  } catch (e) {
    throw e;
  }
}

export async function setSession(user: ISession): Promise<void> {
  const encryptedSession = await sealData(JSON.stringify(user), {
    password: sessionPassword,
  });

  cookies().set("auth_session", encryptedSession, {
    sameSite: "strict",
    httpOnly: true,
    secure: ENV.SESSION_SECURE,
  });
}
