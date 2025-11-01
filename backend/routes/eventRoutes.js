const {
  getEvents,
  createEvent,
  deleteEvent,
  getEventById,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);
