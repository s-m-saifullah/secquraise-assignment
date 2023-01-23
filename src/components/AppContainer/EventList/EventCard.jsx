import React from "react";

const EventCard = ({ event, currentEvent, setCurrentEvent }) => {
  const { id, Location, date, Time } = event;
  return (
    <div
      onClick={() => setCurrentEvent(event)}
      className={`flex justify-between p-3 mb-5 ${
        currentEvent === event
          ? "bg-gray-500 text-white"
          : "bg-gray-200 cursor-pointer"
      }`}
    >
      <div>
        <h4>
          {id}: {Location}
        </h4>
        <p>Person Detected</p>
      </div>
      <div>
        <p className="text-sm">
          {date} {Time}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
