"use server";
import { render } from "@react-email/render";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);
const TZ = "Asia/Ho_Chi_Minh";

import { prisma } from "@/prisma";
import { TUpdateBookingSchema } from "@/schema/booking";
import { sendEmail } from "@/actions/email";

import BookingReceiveEmail from "@/emails/new-booking.template";
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
    const html = render(
      BookingReceiveEmail({
        preview: "Booking đã được tiếp nhận",
        time: dayjs(result.start_time).tz(TZ).format("ddd, HH:mm DD-MM-YYYY"),
        adults: result.adults,
        kids: result.kids,
        validationCode: result.code,
      }),
      {
        pretty: true,
      }
    );
    await sendEmail({
      to: [result.email],
      bcc: ["booking@zoodoodalat.com", "cs@zoodoodalat.com"],
      subject: "Booking đã được tiếp nhận",
      html,
    });

    return result;
  } catch (err) {
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
    const html = render(
      BookingConfirmEmail({
        preview: "✔ Confirm Booking",
        time: dayjs(result.start_time).tz(TZ).format("ddd, HH:mm DD-MM-YYYY"),
        adults: result.adults,
        kids: result.kids,
        validationCode: result.code,
      }),
      {
        pretty: true,
      }
    );
    await sendEmail({
      to: [result.email],
      subject: "✔ Confirm Booking",
      html,
    });

    return result;
  } catch (err) {}
  throw new Error("Internal Server Error");
}
