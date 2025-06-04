import { useParams } from "react-router-dom";
import event1 from "../../assets/images/img-1.jpg";
import event2 from "../../assets/images/img-2.jpg";
import event3 from "../../assets/images/img-3.jpg";
import event4 from "../../assets/images/img-4.jpg";
import event5 from "../../assets/images/img-5.jpg";
import event6 from "../../assets/images/img-6.jpg";

const EventDetails = () => {
  const events = [
    {
      id: 1,
      title: "Tech Conference",
      date: "Thu Jul 13 2023",
      time: "7:00:00 AM IST",
      type: "Offline",
      image: event1,
      hostedBy: "Tech Co.",
      location: "Tech Auditorium, City Center",
      price: 0,
      details: "A full-day event covering latest in tech innovations.",
      dressCode: "Business Casual",
      ageRestrictions: "18+",
      speakers: [
        {
          name: "Jane Doe",
          role: "CTO, Tech Co.",
          image: event1,
        },
      ],
      tags: ["technology", "conference", "networking"],
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "Mon Jul 10 2023",
      time: "2:00:00 PM IST",
      type: "Offline",
      image: event2,
      hostedBy: "Creative Minds",
      location: "Art Hub, Downtown",
      price: 100,
      details: "Hands-on design workshop for aspiring creatives.",
      dressCode: "Casual",
      ageRestrictions: "16+",
      speakers: [
        {
          name: "Emily Carter",
          role: "Design Lead, CM",
          image: event2,
        },
      ],
      tags: ["design", "workshop", "creativity"],
    },
    {
      id: 3,
      title: "Marketing Seminar",
      date: "Tue Aug 15 2023",
      time: "10:00:00 AM IST",
      type: "Offline",
      image: event3,
      hostedBy: "Market Masters",
      location: "Business Center, Tower B",
      price: 150,
      details: "Learn the secrets of successful campaigns.",
      dressCode: "Formal",
      ageRestrictions: "18+",
      speakers: [
        {
          name: "Mark Stevens",
          role: "Marketing Strategist",
          image: event3,
        },
      ],
      tags: ["marketing", "business", "strategy"],
    },
    {
      id: 4,
      title: "Virtual Success Meetup",
      date: "Fri Jul 7 2023",
      time: "5:30:00 PM IST",
      type: "Online",
      image: event4,
      hostedBy: "Success Online",
      location: "Zoom",
      price: 0,
      details: "A networking event to share virtual success stories.",
      dressCode: "Smart Casual",
      ageRestrictions: "All ages",
      speakers: [
        {
          name: "Sarah Lin",
          role: "Online Entrepreneur",
          image: event4,
        },
      ],
      tags: ["online", "success", "meetup"],
    },
    {
      id: 5,
      title: "Data Science Talk",
      date: "Wed Jul 19 2023",
      time: "4:00:00 PM IST",
      type: "Offline",
      image: event5,
      hostedBy: "Data Innovators",
      location: "Tech Park Auditorium",
      price: 200,
      details: "Insights and trends in modern data science.",
      dressCode: "Business Casual",
      ageRestrictions: "18+",
      speakers: [
        {
          name: "Dr. Ravi Mehta",
          role: "Chief Data Scientist",
          image: event5,
        },
      ],
      tags: ["data", "science", "tech"],
    },
    {
      id: 6,
      title: "Photography Meetup",
      date: "Sat Jul 22 2023",
      time: "11:00:00 AM IST",
      type: "Online",
      image: event6,
      hostedBy: "PhotoCircle",
      location: "Google Meet",
      price: 50,
      details: "Connect and learn with fellow photography lovers.",
      dressCode: "Casual",
      ageRestrictions: "15+",
      speakers: [
        {
          name: "Alex Moore",
          role: "Freelance Photographer",
          image: event6,
        },
      ],
      tags: ["photography", "creative", "online"],
    },
  ];
  const { id } = useParams();
  const event = events.find((event) => event.id == id);

  if (!event)
    return <p className="text-center text-gray-500 mt-20">Event not found.</p>;

  return (
    <div className="px-4 md:px-10 py-10 max-w-6xl mx-auto text-gray-800">
      {/* Title and Organizer */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black">{event.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          Hosted by{" "}
          <span className="font-medium text-gray-700">{event.hostedBy}</span>
        </p>
      </div>

      {/* Image and Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[320px] object-cover rounded-xl shadow-sm"
          />
        </div>
        <div className="bg-gray-100 rounded-xl p-5 shadow-sm space-y-3 text-sm text-gray-700">
          <div>
            <strong>📅 Date:</strong> {event.date}
          </div>
          <div>
            <strong>⏰ Time:</strong> {event.time}
          </div>
          <div>
            <strong>📍 Location:</strong> {event.location}
          </div>
          <div>
            <strong>💵 Price:</strong>{" "}
            {event.price === 0 ? "Free" : `₹ ${event.price}`}
          </div>
          <div>
            <strong>🎯 Type:</strong> {event.type}
          </div>
        </div>
      </div>

      {/* Details */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-2">
          About the Event
        </h2>
        <p className="text-gray-700 leading-relaxed">{event.details}</p>
      </section>

      {/* Additional Info */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-black mb-1">Dress Code</h3>
          <p className="text-gray-700">{event.dressCode}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black mb-1">
            Age Restrictions
          </h3>
          <p className="text-gray-700">{event.ageRestrictions}</p>
        </div>
      </section>

      {/* Speakers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-4">Speakers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {event.speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm p-4 flex items-center gap-4"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{speaker.name}</p>
                <p className="text-sm text-gray-500">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tags and RSVP */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-red-100 text-red-700 px-3 py-1 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all">
          RSVP Now
        </button>
      </div>
    </div>
  );
};

export default EventDetails;