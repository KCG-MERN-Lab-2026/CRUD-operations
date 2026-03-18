// Create Event
db.events.insertOne({
  event_name: "Music Show",
  date: "2026-04-10",
  total_seats: 100,
  available_seats: 100
})

// View Availability
db.events.find({ event_name: "Music Show" })

// Book Seats
db.events.updateOne(
  { event_name: "Music Show" },
  { $inc: { available_seats: -2 } }
)

// Cancel Booking
db.events.updateOne(
  { event_name: "Music Show" },
  { $inc: { available_seats: 2 } }
)