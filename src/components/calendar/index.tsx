"use client";
import { useEffect, useState, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { getBookings, updateBooking } from "@/actions/booking";
import { Booking } from "@prisma/client";
import { DatesSetArg } from "@fullcalendar/core/index.js";
import { useRouter } from "next/navigation";

const STATUS_COLOR_MAP = {
  ACCEPTED: "green",
  PENDING: "gray",
  CANCELLED: "red",
};

const viewEvent = (events: Booking[]) => {
  return events.map((e) => ({
    title: e.name,
    start: e.start_time,
    end: e.end_time,
    backgroundColor: STATUS_COLOR_MAP[e.status],
    borderColor: STATUS_COLOR_MAP[e.status],
    extendedProps: {
      id: e.id,
    },
  }));
};

export const Calendar = () => {
  const [dateInfo, setDateInfo] = useState<DatesSetArg>();
  const [events, setEvents] = useState<Booking[]>([]);
  const router = useRouter();

  const loadingBarRef = useRef<LoadingBarRef>(null);
  useEffect(() => {
    if (dateInfo) {
      if (loadingBarRef.current) {
        loadingBarRef.current.continuousStart();
      }

      getBookings({
        startRange: dateInfo.startStr,
        endRange: dateInfo.endStr,
      })
        .then((data) => {
          setEvents(data);
        })
        .finally(() => {
          if (loadingBarRef.current) {
            loadingBarRef.current.complete();
          }
        });
    }
  }, [dateInfo]);

  return (
    <>
      <LoadingBar color="#39B33A" ref={loadingBarRef} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List",
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={viewEvent(events)}
        datesSet={(_dateInfo) => {
          setDateInfo(_dateInfo);
        }}
        eventClick={(info) => {
          router.push(`/admin/booking/${info.event._def.extendedProps.id}`);
        }}
        eventDrop={(info) => {
          if (!info.event.start) return;
          updateBooking({
            id: info.event._def.extendedProps.id,
            data: { start_time: info.event.start },
          });
        }}
        nowIndicator
      />
    </>
  );
};
