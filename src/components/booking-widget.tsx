"use client";
import { FC, ReactNode, useState, useMemo, useEffect } from "react";
import clsx from "clsx";
import {
  SewingPinFilledIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "./atom/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./atom/dialog";
import { ScrollArea } from "./atom/scroll-area";
import { Label } from "./atom/label";
import { Input } from "./atom/input";
import Spinner from "./common/spinner";
import { ToastAction } from "./atom/toast";
import { useToast } from "./atom/use-toast";
import { cn } from "@/lib/utils";
import { createBooking } from "@/actions/booking";

type TBookingWidget = {
  className: string;
  trigger: ReactNode;
  title: string;
  description: string;
  address: string;
};

type TCalendar = {
  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
  notAvailableDate: string[];
};

type TCalendarDay = {
  date: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
};

type TSlot = {
  id: number;
  start: string;
  start_time: string;
};

const schema = z.object({
  name: z.string().min(1, "Cần nhập"),
  email: z.string().email("Cần nhập").min(1, "Cần nhập"),
  phone: z.string().min(1, "Cần nhập"),
  note: z.string().optional(),
  adults: z.string().min(1, "Cần nhập"),
  kids: z.string().min(1, "Cần nhập"),
});

function generateCalendarDay(
  first_of_month: dayjs.Dayjs,
  _selectedDate: dayjs.Dayjs,
  today: dayjs.Dayjs
): TCalendarDay[] {
  const weekday_of_first_of_month = first_of_month.day();

  const start_day = first_of_month.subtract(
    weekday_of_first_of_month - 1,
    "day"
  );

  const last_day = first_of_month
    .add(1, "month")
    .set("date", 1)
    .subtract(1, "day");

  const total_days_in_month = last_day.diff(start_day, "day");

  const days: TCalendarDay[] = [];
  const loopLength = Math.ceil(total_days_in_month / 7) * 7;
  for (let i = 0; i < loopLength; i++) {
    const current = start_day.add(i, "day");
    days.push({
      date: current.format("YYYY-MM-DD"),
      isCurrentMonth: current.isSame(first_of_month, "month"),
      isToday: current.isSame(today, "day"),
      isSelected: current.isSame(_selectedDate, "date"),
    });
  }
  return days;
}

const Calendar: FC<TCalendar> = ({
  selectedDate,
  setSelectedDate,
  notAvailableDate,
}) => {
  const _selectedDate = useMemo(() => dayjs(selectedDate), [selectedDate]);
  const [viewMonth, setViewMonth] = useState(_selectedDate.set("date", 1));
  const today = dayjs();
  const days = useMemo(
    () => generateCalendarDay(viewMonth, _selectedDate, today),
    [viewMonth, _selectedDate, today]
  );

  const _notAvailableDate = new Set(notAvailableDate);

  return (
    <div>
      <div className="flex items-center">
        <span className="flex-auto text-sm font-semibold text-gray-900">
          {viewMonth.format("MMM, YYYY")}
        </span>
        <button
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          onClick={() => setViewMonth(viewMonth.subtract(1, "month"))}
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          onClick={() => setViewMonth(viewMonth.add(1, "month"))}
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-md font-bold leading-6 text-green-default">
        <div>T2</div>
        <div>T3</div>
        <div>T4</div>
        <div>T5</div>
        <div>T6</div>
        <div>T7</div>
        <div>CN</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => {
          const isNotAvailable =
            today.isAfter(day.date) || _notAvailableDate.has(day.date);
          return (
            <div
              key={day.date}
              className={clsx(dayIdx > 6 && "border-t border-gray-200", "py-2")}
            >
              <button
                type="button"
                disabled={isNotAvailable}
                onClick={() => {
                  setSelectedDate(dayjs(day.date).toDate());
                  setViewMonth(dayjs(day.date).set("date", 1));
                }}
                className={clsx(
                  isNotAvailable && "opacity-50 pointer-events-none",
                  day.isSelected && "text-white",
                  !day.isSelected && day.isToday && "text-green-light",
                  !day.isSelected &&
                    !day.isToday &&
                    day.isCurrentMonth &&
                    "text-gray-900",
                  !day.isSelected &&
                    !day.isToday &&
                    !day.isCurrentMonth &&
                    "text-gray-400",
                  day.isSelected && day.isToday && "bg-gray-900",
                  day.isSelected && !day.isToday && "bg-gray-900",
                  !day.isSelected && "hover:bg-gray-200",
                  (day.isSelected || day.isToday) && "font-semibold",
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                )}
              >
                <time dateTime={day.date}>{day.date.split("-").pop()}</time>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Timeslot: FC<{
  date: string;
  slots: TSlot[];
  value: string | undefined;
  onChange: (d: string) => void;
}> = ({ slots, onChange, date }) => (
  <section className="mt-12 md:mt-0 md:pl-8">
    <span className="text-base font-semibold leading-6 text-gray-900">
      Schedule for <time dateTime="2022-01-21">{date}</time> (Timezone: GMT+7)
    </span>
    <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
      {slots.map((slot) => (
        <Button
          variant="outline"
          className="w-full"
          key={slot.id}
          onClick={() => onChange(slot.start_time)}
        >
          {slot.start}
        </Button>
      ))}
    </ol>
  </section>
);

function generateSlots(date: Date): TSlot[] {
  const NotAvailable = new Set([
    "2024-04-29T02:00:00.000Z",
    "2024-04-29T03:00:00.000Z",
    "2024-04-29T04:00:00.000Z",
    "2024-04-29T05:00:00.000Z",
    "2024-04-29T06:00:00.000Z",
    "2024-04-29T07:00:00.000Z",
    "2024-04-29T08:00:00.000Z",
    "2024-04-29T09:00:00.000Z",
    "2024-04-29T10:00:00.000Z",
    "2024-04-30T02:00:00.000Z",
    "2024-04-30T03:00:00.000Z",
    "2024-04-30T04:00:00.000Z",
    "2024-04-30T05:00:00.000Z",
    "2024-04-30T06:00:00.000Z",
    "2024-04-30T07:00:00.000Z",
    "2024-04-30T08:00:00.000Z",
    "2024-04-30T09:00:00.000Z",
    "2024-04-30T10:00:00.000Z",
  ]);

  const slots = [];
  const HourOffsetFromNow = dayjs()
    .add(18, "hour")
    .set("minute", 0)
    .set("second", 0)
    .set("millisecond", 0);
  const beginningOfDay = dayjs(date)
    .set("hour", 9)
    .set("minute", 0)
    .set("second", 0)
    .set("millisecond", 0);
  let start = HourOffsetFromNow.isAfter(beginningOfDay)
    ? HourOffsetFromNow
    : beginningOfDay;
  while (start.get("hour") < 17) {
    if (!NotAvailable.has(start.toISOString())) {
      slots.push({
        id: start.get("hour"),
        start: start.format("HH:mm"),
        start_time: start.toISOString(),
      });
    }
    start = start.add(1, "hour");
  }

  return slots;
}

export const BookingWidget: FC<TBookingWidget> = ({
  className,
  title,
  description,
  address,
  trigger,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().add(1, "day").toDate()
  );

  const [slots, setSlots] = useState({
    isLoading: true,
    data: [] as TSlot[],
  });

  const [selectedSlot, setSelectedSlot] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const genericSlot = generateSlots(selectedDate);
    setSlots({ isLoading: false, data: genericSlot });
  }, [selectedDate]);

  const notAvailableDate = ["2024-04-29", "2024-04-30"];

  return (
    <Dialog
      onOpenChange={(e) => {
        setSelectedSlot(undefined);
        setOpen(e);
      }}
      open={open}
    >
      <DialogTrigger asChild className={className}>
        {trigger}
      </DialogTrigger>

      <DialogContent
        className={cn(
          "sm:max-w-[425px] border-4 bg-white",
          !selectedSlot
            ? "md:max-w-[768px] lg:max-w-[1040px]"
            : "md:max-w-[568px] lg:max-w-[750px]"
        )}
      >
        <ScrollArea className="max-h-[50vh] no-scrollbar">
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-5 gap-8 md:divide-x md:divide-gray-200",
              !selectedSlot ? "md:grid-cols-5" : "md:grid-cols-3"
            )}
          >
            <div>
              <DialogTitle className="mb-4">
                <span className="scroll-m-20 text-md lg:text-xl">{title}</span>
              </DialogTitle>
              <ScrollArea className="h-60 mb-4">
                <p className="text-left whitespace-pre-wrap overflow-hidden text-sm">
                  {description}
                </p>
              </ScrollArea>

              <div className="flex">
                <SewingPinFilledIcon width="36" height="36" />
                <p className="ml-2 text-sm">{address}</p>
              </div>
            </div>

            {!selectedSlot ? (
              <>
                <div className="col-span-2 md:pl-8">
                  <Calendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    notAvailableDate={notAvailableDate}
                  />
                </div>
                <div className="col-span-2 pr-4">
                  <Timeslot
                    date={selectedDate.toLocaleDateString()}
                    slots={slots.data}
                    value={selectedSlot}
                    onChange={(d) => setSelectedSlot(d)}
                  />
                </div>
              </>
            ) : (
              <div className="col-span-2 md:pl-8 grid gap-1.5 pr-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="picture">Họ và tên</Label>
                  <Input
                    type="text"
                    placeholder="name"
                    required
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500">
                      {String(errors.name.message)}
                    </p>
                  )}
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="picture">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="picture">Số điện thoại</Label>
                  <Input
                    type="text"
                    placeholder="phone"
                    required
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500">
                      {String(errors.phone.message)}
                    </p>
                  )}
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="picture">Ghi chú</Label>
                  <Input type="text" placeholder="note" {...register("note")} />
                  {errors.note && (
                    <p className="text-red-500">
                      {String(errors.note.message)}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid w-full max-w-sm gap-1.5">
                    <Label htmlFor="picture">Người lớn</Label>
                    <Input
                      type="number"
                      placeholder="adults"
                      required
                      {...register("adults")}
                    />
                    {errors.adults && (
                      <p className="text-red-500">
                        {String(errors.adults.message)}
                      </p>
                    )}
                  </div>
                  <div className="grid w-full max-w-sm gap-1.5">
                    <Label htmlFor="picture">Trẻ em</Label>
                    <Input
                      type="number"
                      placeholder="kids"
                      required
                      {...register("kids")}
                    />
                    {errors.kids && (
                      <p className="text-red-500">
                        {String(errors.kids.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-end">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedSlot(undefined)}
                    disabled={isSubmitting}
                  >
                    Trở lại
                  </Button>
                  <Button
                    disabled={isSubmitting}
                    onClick={handleSubmit(async () => {
                      setIsSubmitting(true);

                      return await createBooking({
                        data: {
                          name: getValues("name"),
                          email: getValues("email"),
                          phone: getValues("phone"),
                          note: getValues("note"),
                          adults: Number(getValues("adults")),
                          kids: Number(getValues("kids")),
                          start_time: dayjs(selectedSlot).toDate(),
                          end_time: dayjs(selectedSlot)
                            .add(90, "minute")
                            .toDate(),
                        },
                      })
                        .then(() => {
                          setIsSubmitting(false);
                          setOpen(false);
                          toast({
                            title: `Booking: ${getValues("name")}`,
                            description: dayjs(selectedSlot).format(
                              "ddd DD-MM-YYYY HH:mm"
                            ),
                            action: (
                              <ToastAction altText="Goto schedule to undo">
                                Undo
                              </ToastAction>
                            ),
                          });
                        })
                        .catch((e) => {
                          setIsSubmitting(false);
                        });
                    })}
                  >
                    {isSubmitting ? <Spinner /> : "Xác nhận"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
