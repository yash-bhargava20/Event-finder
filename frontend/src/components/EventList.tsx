import React, { useState } from "react";
import { MapPin, CalendarDays, Users } from "lucide-react";
import type { Event } from "../types/event";
import EventDetailsModal from "../components/EventDetailModel";

interface Props {
  events: Event[];
}

const EventList: React.FC<Props> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (events.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">No events right now </p>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-xl p-5 border-t-4 border-cyan-500 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {event.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {event.description}
            </p>

            <div className="flex items-center text-gray-700 mb-2">
              <MapPin className="w-4 h-4 text-cyan-500 mr-2" />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center text-gray-700 mb-2">
              <CalendarDays className="w-4 h-4 text-cyan-500 mr-2" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center text-gray-700 mb-3">
              <Users className="w-4 h-4 text-cyan-500 mr-2" />
              <span>
                {event.currentParticipants || 0} / {event.maxParticipants}
              </span>
            </div>

            <button
              onClick={() => setSelectedEvent(event)}
              className="mt-2 bg-cyan-500 text-white w-full py-2 rounded-lg hover:bg-cyan-600 transition-all"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

export default EventList;
