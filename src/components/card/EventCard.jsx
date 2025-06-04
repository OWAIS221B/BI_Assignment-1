import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-[360px] mb-10 mx-auto">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded-xl"
        />
        <span className="absolute top-2 left-2 bg-white text-black text-xs font-medium px-2 py-[2px] rounded-md shadow-sm">
          {event.type} Event
        </span>
      </div>

      <div className="px-3 pt-3 pb-4">
        <p className="text-gray-500 text-sm font-medium">
          {event.date} • {event.time}
        </p>
        <h2 className="text-base font-semibold text-gray-900 mt-1">
          {event.title}
        </h2>
      </div>
    </div>
  );
};

export default EventCard;