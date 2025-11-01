import type { Event, CreateEventInput } from "../types/event";

const API_BASE = "http://localhost:5000/api/events";

export const fetchEvents = async (): Promise<Event[]> => {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
};

export const createEvent = async (
  eventData: CreateEventInput
): Promise<Event> => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  if (!res.ok) throw new Error("Failed to create event");
  return res.json();
};
