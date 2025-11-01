import React from "react";
import { Info, MapPin, CalendarDays, Users } from "lucide-react";
import type { Event } from "../types/event";

interface Props {
  event: Event;
  onClose: () => void;
}

const EventDetailsModal: React.FC<Props> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer font-bold text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h2>

        <div className="flex items-center text-cyan-600 font-semibold mb-2">
          <Info className="w-5 h-5 mr-2" />
          About this event
        </div>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="bg-gray-50 p-3 rounded-lg mb-3 flex items-start gap-2">
          <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">Location</p>
            <p className="text-gray-600">{event.location}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg mb-3 flex items-start gap-2">
          <CalendarDays className="w-5 h-5 text-cyan-500 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">Date & Time</p>
            <p className="text-gray-600">{event.date}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg mb-6 flex items-start gap-2">
          <Users className="w-5 h-5 text-cyan-500 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">Participants</p>
            <p className="text-gray-600">
              {event.currentParticipants || 0} registered,{" "}
              {event.maxParticipants} max capacity
            </p>
            <p className="text-cyan-500 font-semibold">
              {event.maxParticipants - (event.currentParticipants || 0)} spots
              left
            </p>
          </div>
        </div>

        {/* 🌍 Map Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Location on Map
          </h3>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border">
            <iframe
              title="Event Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                event.location
              )}&output=embed`}
            ></iframe>
          </div>
        </div>

        <button className="w-full bg-cyan-500 text-white font-semibold py-2 rounded-lg hover:bg-cyan-600 transition-all">
          Register for Event
        </button>
      </div>
    </div>
  );
};

export default EventDetailsModal;
