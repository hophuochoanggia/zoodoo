"use server";
import { z } from "zod";
import { redirect } from "next/navigation";

import { prisma } from "@/prisma";
import { User } from "@prisma/client";
import { comparePwd } from "@/lib/hash.util";
import { setSession } from "./session";

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .trim()
    .toLowerCase(),
  password: z.string().trim().min(1, { message: "Required" }),
});

export async function login(
  formData: FormData
): Promise<{ token: string; user: User }> {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const validatedFields = schema.parse(data);
  if (!validatedFields) {
    throw new Error("Please enter a valid email");
  }

  const user = await prisma.user.findUnique({
    where: { email: validatedFields.email },
  });

  if (!user) {
    throw new Error("Email or password is either incorrect");
  }
  const isVerified = await comparePwd(
    validatedFields.password,
    user?.password!
  );

  if (!isVerified) {
    throw new Error("Email or password is either incorrect");
  }

  const payload = {
    login: user.id,
  };
  await setSession(payload);
  return redirect("/admin");
}
