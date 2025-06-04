import DropDown from "../dropDown/DropDown";
import EventCard from "../card/EventCard";
import event1 from "../../assets/images/img-1.jpg";
import event2 from "../../assets/images/img-2.jpg";
import event3 from "../../assets/images/img-3.jpg";
import event4 from "../../assets/images/img-4.jpg";
import event5 from "../../assets/images/img-5.jpg";
import event6 from "../../assets/images/img-6.jpg";
import { useState } from "react";

const Home = () => {
  const events = [
    {
      id: 1,
      title: "Tech Conference",
      date: "Thu Jul 13 2023",
      time: "7:00:00 AM IST",
      type: "Offline",
      image: event1,
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "Mon Jul 10 2023",
      time: "2:00:00 PM IST",
      type: "Offline",
      image: event2,
    },
    {
      id: 3,
      title: "Marketing Seminar",
      date: "Tue Aug 15 2023",
      time: "10:00:00 AM IST",
      type: "Offline",
      image: event3,
    },
    {
      id: 4,
      title: "Virtual Success Meetup",
      date: "Fri Jul 7 2023",
      time: "5:30:00 PM IST",
      type: "Online",
      image: event4,
    },
    {
      id: 5,
      title: "Data Science Talk",
      date: "Wed Jul 19 2023",
      time: "4:00:00 PM IST",
      type: "Offline",
      image: event5,
    },
    {
      id: 6,
      title: "Photography Meetup",
      date: "Sat Jul 22 2023",
      time: "11:00:00 AM IST",
      type: "Online",
      image: event6,
    },
  ];

  const [selectedType, setSelectedType] = useState("both");

  const filteredEvents = events.filter((event) => {
    if (selectedType === "both") return true;
    return event.type.toLowerCase() === selectedType;
  });

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Meetup Events</h1>
        <DropDown selectedType={selectedType} onChange={setSelectedType} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;