import React, { useState, useEffect } from "react";
import { MapPin, Plus } from "lucide-react";
import EventList from "../components/EventList";
import CreateEventModal from "../components/CreateEventModal";
import type { Event, CreateEventInput } from "../types/event";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API_BASE}/events`);
      setEvents(res.data);
      setFilteredEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (locationFilter.trim() === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) =>
        event.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [locationFilter, events]);

  const handleCreateEvent = async (newEvent: CreateEventInput) => {
    try {
      const res = await axios.post(`${API_BASE}/events`, newEvent);
      setEvents((prev) => [...prev, res.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Check server connection.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Filter by location..."
              className="w-full border rounded-lg pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-cyan-500 outline-none"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-4 px-5 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 flex items-center gap-2 cursor-pointer transition-all"
          >
            <Plus className="w-5 h-5" /> Create Event
          </button>
        </div>

        <EventList events={filteredEvents} />
      </div>

      {isModalOpen && (
        <CreateEventModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateEvent}
        />
      )}
    </div>
  );
};

export default Home;
