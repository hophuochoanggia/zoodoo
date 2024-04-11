import * as bcrypt from "bcrypt-ts";

export const hashPassword = (password: string): Promise<string> =>
  bcrypt.hash(password, 10);

export const comparePwd = (password: string, hash: string): Promise<boolean> =>
  bcrypt.compare(password, hash);
