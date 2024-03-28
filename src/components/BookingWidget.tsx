"use client";
import { FC, ReactNode, useState, useMemo, useEffect } from "react";
import clsx from "clsx";
import {
  SewingPinFilledIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { Button } from "./atom/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./atom/dialog";
import { ScrollArea } from "./atom/scroll-area";
// import { getAvailableSlot } from "@/service";
import { Label } from "./atom/label";
import { Input } from "./atom/input";
import { createBooking } from "@/service";
import Spinner from "./common/spinner";
import { ToastAction } from "./atom/toast";
import { useToast } from "./atom/use-toast";

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

const Calendar: FC<TCalendar> = ({ selectedDate, setSelectedDate }) => {
  const _selectedDate = useMemo(() => dayjs(selectedDate), [selectedDate]);
  const [viewMonth, setViewMonth] = useState(_selectedDate.set("date", 1));
  const today = dayjs();
  const days = useMemo(
    () => generateCalendarDay(viewMonth, _selectedDate, today),
    [viewMonth, _selectedDate, today]
  );

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
        <div>CN</div>
        <div>T2</div>
        <div>T3</div>
        <div>T4</div>
        <div>T5</div>
        <div>T6</div>
        <div>T7</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.date}
            className={clsx(dayIdx > 6 && "border-t border-gray-200", "py-2")}
          >
            <button
              type="button"
              disabled={today.isAfter(day.date)}
              onClick={() => {
                setSelectedDate(dayjs(day.date).toDate());
                setViewMonth(dayjs(day.date).set("date", 1));
              }}
              className={clsx(
                today.isAfter(day.date) && "opacity-50 pointer-events-none",
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
        ))}
      </div>
    </div>
  );
};

const Timeslot: FC<{
  slots: TSlot[];
  value: string | undefined;
  onChange: (d: string) => void;
}> = ({ slots, onChange }) => (
  <section className="mt-12 md:mt-0 md:pl-8">
    <span className="text-base font-semibold leading-6 text-gray-900">
      Schedule for <time dateTime="2022-01-21">January 21, 2022</time>
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
  const slots = [];
  const start = dayjs(date).set("hour", 9).set("minute", 0).set("second", 0);
  for (let i = 0; i < 8; i++) {
    const current = start.add(1 * i, "hour");
    slots.push({
      id: i,
      start: current.format("HH:mm"),
      start_time: current.toISOString(),
    });
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
  const [selectedDate, setSelectedDate] = useState(dayjs().toDate());

  const [slots, setSlots] = useState({
    isLoading: true,
    data: [] as TSlot[],
  });

  const [selectedSlot, setSelectedSlot] = useState<string | undefined>();
  const [form, setForm] = useState<{
    name: string | undefined;
    email: string | undefined;
    note: string | undefined;
    phone: string | undefined;
    adults: string | undefined;
    kids: string | undefined;
  }>({
    name: undefined,
    email: undefined,
    note: undefined,
    phone: undefined,
    adults: undefined,
    kids: undefined,
    // name: "Gia Ho",
    // email: "gia@e9.digital",
    // phone: "0906955300",
    // note: "",
    // adults: "1",
    // kids: "0",
  });

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    // getAvailableSlot(selectedDate).then(({ data }) => {
    const genericSlot = generateSlots(selectedDate);
    setSlots({ isLoading: false, data: genericSlot });
    //   console.log(data);
    // });
  }, [selectedDate]);

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
        className={
          !selectedSlot
            ? "sm:max-w-[425px] md:max-w-[768px] lg:max-w-[1040px] md:h-[462px] border-4 bg-white"
            : "sm:max-w-[425px] md:max-w-[568px] lg:max-w-[750px] md:h-[462px] border-4 bg-white"
        }
      >
        <div
          className={
            !selectedSlot
              ? "grid grid-cols-1 md:grid-cols-5 gap-8 md:divide-x md:divide-gray-200"
              : "grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-gray-200"
          }
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
                />
              </div>
              <div className="col-span-2">
                <Timeslot
                  slots={slots.data}
                  value={selectedSlot}
                  onChange={(d) => setSelectedSlot(d)}
                />
              </div>
            </>
          ) : (
            <div className="col-span-2 md:pl-8 grid gap-1.5">
              <div className="grid w-full gap-1.5">
                <Label htmlFor="picture">Họ và tên</Label>
                <Input
                  type="text"
                  placeholder="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="picture">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="picture">Số điện thoại</Label>
                <Input
                  type="text"
                  placeholder="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="picture">Ghi chú</Label>
                <Input
                  type="text"
                  placeholder="note"
                  value={form.note || ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, note: e.target.value }))
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="grid w-full max-w-sm gap-1.5">
                  <Label htmlFor="picture">Người lớn</Label>
                  <Input
                    type="number"
                    placeholder="adults"
                    value={form.adults}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="grid w-full max-w-sm gap-1.5">
                  <Label htmlFor="picture">Trẻ em</Label>
                  <Input
                    type="number"
                    placeholder="kids"
                    value={form.adults}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        kids: e.target.value,
                      }))
                    }
                  />
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
                  onClick={async () => {
                    setIsSubmitting(true);

                    return await createBooking({
                      ...form,
                      adults: Number(form.adults),
                      kids: Number(form.kids),
                      start_time:
                        dayjs(selectedSlot).format("YYYY-MM-DD HH:mm"),
                      end_time: dayjs(selectedSlot)
                        .add(90, "minute")
                        .format("YYYY-MM-DD HH:mm"),
                    })
                      // return Promise.resolve()
                      .then(() => {
                        setIsSubmitting(false);
                        setOpen(false);
                        toast({
                          title: `Booking: ${form.name}`,
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
                      .catch(() => {
                        setIsSubmitting(false);
                      });
                  }}
                >
                  {isSubmitting ? <Spinner /> : "Xác nhận"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
