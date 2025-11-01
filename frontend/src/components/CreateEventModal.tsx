import React, { useState } from "react";
import { X } from "lucide-react"; // close icon
import type { CreateEventInput } from "../types/event";

interface Props {
  onClose: () => void;
  onCreate: (event: CreateEventInput) => void;
}

const CreateEventModal: React.FC<Props> = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState<CreateEventInput>({
    title: "",
    description: "",
    location: "",
    date: "",
    maxParticipants: 50,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 transform transition-all duration-300 scale-100 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Create New Event
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Fill in the details to create a new event
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Event Title *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Tech Meetup 2025"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description *</label>
            <textarea
              name="description"
              placeholder="Describe your event..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none h-24 resize-none"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Location *</label>
            <input
              type="text"
              name="location"
              placeholder="e.g., Delhi, India"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Date *</label>
              <input
                type="date"
                name="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Max Participants *
              </label>
              <input
                type="number"
                name="maxParticipants"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
                value={formData.maxParticipants}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          \{" "}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventModal;
