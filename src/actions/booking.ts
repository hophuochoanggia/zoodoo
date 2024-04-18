"use server";
import { render } from "@react-email/render";
import dayjs from "dayjs";

import { prisma } from "@/prisma";
import { TUpdateBookingSchema } from "@/schema/booking";
import { sendEmail } from "@/actions/email";

import BookingConfirmEmail from "@/emails/confirm-booking.email";
import { randomChar } from "@/lib/random-char";

export async function getBookings({
  startRange,
  endRange,
}: {
  startRange: string;
  endRange: string;
}) {
  const bookings = await prisma.booking.findMany({
    where: {
      start_time: {
        gte: startRange,
      },
      end_time: {
        lte: endRange,
      },
    },
  });
  return bookings;
}

export async function getBooking({ id }: { id: string }) {
  try {
    const booking = await prisma.booking.findUnique({
      where: {
        id,
      },
    });
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  } catch (err) {
    throw new Error("Internal Server Error");
  }
}

export async function createBooking({
  data,
}: {
  data: Omit<TUpdateBookingSchema, "status">;
}) {
  try {
    const result = await prisma.booking.create({
      data: {
        ...data,
        status: "PENDING",
        code: randomChar(6),
      },
    });

    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Internal Server Error");
  }
}

export async function updateBooking({
  id,
  data,
}: {
  id: string;
  data: Partial<TUpdateBookingSchema>;
}) {
  try {
    const result = await prisma.booking.update({
      where: {
        id,
      },
      data,
    });
    if (!result) {
      throw new Error("Booking not found");
    }

    return result;
  } catch (err) {
    throw new Error("Internal Server Error");
  }
}

export async function acceptBooking({ id }: { id: string }) {
  try {
    const result = await prisma.booking.update({
      where: {
        id,
      },
      data: {
        status: "ACCEPTED",
      },
    });
    if (!result) {
      throw new Error("Booking not found");
    }
    console.log(result);
    const html = render(
      BookingConfirmEmail({
        time: dayjs(result.start_time).format("ddd, HH:mm DD-MM-YYYY"),
        adults: result.adults,
        kids: result.kids,
        validationCode: result.id.slice(0, 6).toUpperCase(),
      }),
      {
        pretty: true,
      }
    );
    const t = await sendEmail({
      to: [result.email],
      subject: "✔ Confirm Booking",
      html,
    });

    return result;
  } catch (err) {}
  throw new Error("Internal Server Error");
}
