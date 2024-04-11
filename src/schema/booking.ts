import { z } from "zod";
import { BookingStatus } from "@prisma/client";

export const UpdateBookingSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Invalid name",
    })
    .trim(),
  status: z.enum([
    BookingStatus.ACCEPTED,
    BookingStatus.CANCELLED,
    BookingStatus.PENDING,
  ]),
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .trim()
    .toLowerCase(),
  phone: z
    .string({
      invalid_type_error: "Invalid phone",
    })
    .trim(),
  adults: z.number().default(1),
  kids: z.number().default(0),
  note: z.string({ invalid_type_error: "Invalid date" }),
  start_time: z.date({ invalid_type_error: "Invalid date" }),
  end_time: z.date({ invalid_type_error: "Invalid date" }),
});

export type TUpdateBookingSchema = z.infer<typeof UpdateBookingSchema>;
