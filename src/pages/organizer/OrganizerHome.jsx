import React from 'react'
import { Link } from 'react-router-dom'

function OrganizerHome() {
  return (
    <div>
      <button><Link to={'/organizer/addconference'}>Add New Conference</Link></button>

      <div>
        <p>Your Conferences</p>
      </div>
    </div>
  )
}

export default OrganizerHome