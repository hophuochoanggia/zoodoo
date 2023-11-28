import { useEffect, useRef, RefObject } from "react";

type EventType = keyof WindowEventMap;
type HandlerType = (event: Event) => void;

export default function useEventListener(
  eventType: EventType,
  callback: HandlerType,
  element?: any
): void {
  const callbackRef = useRef<HandlerType>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
