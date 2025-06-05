import DropDown from '../dropDown/DropDown'
import EventCard from '../card/EventCard'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../useFetch'

const Home = () => {
  const [selectedType, setSelectedType] = useState('both')

  const {
    data: events,
    loading,
    error,
  } = useFetch('http://localhost:3000/events/')

  console.log('Fetched events:', events)

  const filteredEvents = Array.isArray(events)
    ? events.filter((event) =>
        selectedType === 'both'
          ? true
          : event.type?.toLowerCase() === selectedType
      )
    : []

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Meetup Events</h1>
        <DropDown selectedType={selectedType} onChange={setSelectedType} />
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Link key={event._id} to={`/events/${event._id}`}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
