import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch'

const EventDetails = () => {
  const { id } = useParams()

  const {
    data: event,
    loading,
    error,
  } = useFetch(`http://localhost:3000/events/${id}`)

  if (loading)
    return <p className="text-center text-gray-500 mt-20">Loading event...</p>

  if (error)
    return (
      <p className="text-center text-red-500 mt-20">
        Error loading event: {error.message}
      </p>
    )

  if (!event)
    return <p className="text-center text-gray-500 mt-20">Event not found.</p>

  return (
    <div className="px-4 md:px-10 py-10 max-w-6xl mx-auto text-gray-800">
      {/* Title and Organizer */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black">{event.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          Hosted by{' '}
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
            <strong>💵 Price:</strong>{' '}
            {event.price === 0 ? 'Free' : `₹ ${event.price}`}
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
          {event.speakers?.map((speaker, index) => (
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
          {event.tags?.map((tag, index) => (
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
  )
}

export default EventDetails
