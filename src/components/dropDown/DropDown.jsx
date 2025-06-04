import React from 'react'

const DropDown = ({ selectedType, onChange }) => {
  return (
    <div className="w-64">
      <select
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
      >
        <option value="both">Both</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  )
}

export default DropDown

