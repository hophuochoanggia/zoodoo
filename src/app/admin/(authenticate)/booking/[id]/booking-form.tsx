"use client";
import { useToast } from "@/components/atom/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useFormStatus } from "react-dom";
import dayjs from "dayjs";

import { UpdateBookingSchema } from "@/schema/booking";
import { Button } from "@/components/atom/button";
import { Input } from "@/components/atom/input";
import { Label } from "@/components/atom/label";
import Spinner from "@/components/atom/spinner";
import { Booking, BookingStatus } from "@prisma/client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/atom/select";
import { acceptBooking, updateBooking } from "@/actions/booking";
import { useRouter } from "next/navigation";

const dateForDateTimeInputValue = (date: Date) =>
  new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000)
    .toISOString()
    .slice(0, 19);

const BookingFormUI = ({ data }: { data: Booking }) => {
  const { pending } = useFormStatus();
  const { toast } = useToast();
  const router = useRouter();

  return (
    <div className="space-y-4 mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            defaultValue={data.name}
            disabled={pending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Status</Label>
          <Select defaultValue={data.status} name="status" disabled={pending}>
            <SelectTrigger>
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={BookingStatus.ACCEPTED}>
                {BookingStatus.ACCEPTED}
              </SelectItem>
              <SelectItem value={BookingStatus.PENDING}>
                {BookingStatus.PENDING}
              </SelectItem>
              <SelectItem value={BookingStatus.CANCELLED}>
                {BookingStatus.CANCELLED}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
            defaultValue={data.email}
            disabled={pending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone"
            required
            type="tel"
            defaultValue={data.phone}
            disabled={pending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="check-in">Check-in date</Label>
          <Input
            id="start_time"
            type="datetime-local"
            name="start_time"
            defaultValue={dateForDateTimeInputValue(data.start_time)}
            disabled={pending}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Adults</Label>
          <Input
            id="adults"
            name="adults"
            placeholder="Enter your email"
            required
            type="number"
            defaultValue={data.adults}
            disabled={pending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="check-out">Kids</Label>
          <Input
            id="kids"
            name="kids"
            required
            defaultValue={data.kids}
            type="number"
            disabled={pending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="check-out">Notes</Label>
          <Input
            id="note"
            name="note"
            defaultValue={data.note}
            disabled={pending}
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          type="submit"
          disabled={pending}
          formAction={async (formData: FormData) => {
            try {
              const start_time = formData.get("start_time");
              if (!start_time) throw new Error("Please select time");

              const _data = {
                name: String(formData.get("name")),
                status: String(formData.get("status")),
                email: String(formData.get("email")),
                phone: String(formData.get("phone")),
                adults: Number(formData.get("adults")),
                kids: Number(formData.get("kids")),
                note: String(formData.get("note")),
                start_time: new Date(String(start_time)),
                end_time: dayjs(String(start_time)).add(90, "minute").toDate(),
              };

              const validatedFields = UpdateBookingSchema.parse(_data);
              if (!validatedFields) {
                throw new Error("Bad Request");
              }

              const response = await updateBooking({
                id: data.id,
                data: validatedFields,
              });

              toast({
                title: "Success",
                description: "Update Sucessfully",
                action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
              });
              return response;
            } catch (e: any) {
              toast({
                title: "Error",
                description: e.message,
                action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
                variant: "destructive",
              });
            }
          }}
        >
          {pending && <Spinner />}Save
        </Button>
        {data.status === BookingStatus.PENDING && (
          <Button
            type="submit"
            disabled={pending}
            formAction={async () => {
              try {
                const response = await acceptBooking({
                  id: data.id,
                });

                toast({
                  title: "Success",
                  description: "Booking Accepted",
                  action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
                });
                router.push("/admin");
                return response;
              } catch (e: any) {
                toast({
                  title: "Error",
                  description: e.message,
                  action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
                  variant: "destructive",
                });
              }
            }}
          >
            {pending && <Spinner />}Accept
          </Button>
        )}
      </div>
    </div>
  );
};

export const BookingForm = ({ booking }: { booking: Booking }) => {
  return (
    <form>
      <BookingFormUI data={booking} />
    </form>
  );
};
