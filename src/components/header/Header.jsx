import { Search } from 'lucide-react'
import Meetuplogo from '../../assets/images/Meetup-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="h-20 w-auto object-contain"
            src={Meetuplogo}
            alt="Meetup Logo"
          />
        </Link>
      </div>

      <div className="relative w-64">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search events by title and tag"
          className=" text-black pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 text-sm"
        />
      </div>
    </header>
  )
}

export default Header
