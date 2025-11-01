const Event = require("../model/Event");
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
const createEvent = async (req, res) => {
  try {
    const { title, description, location, date, maxParticipants } = req.body;
    const newEvent = new Event({
      title,
      description,
      location,
      date,
      maxParticipants,
    });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event details" });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event" });
  }
};

module.exports = { getEvents, createEvent, deleteEvent, getEventById };
