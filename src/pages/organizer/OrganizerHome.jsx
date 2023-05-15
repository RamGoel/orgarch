import React from 'react'
import { Link } from 'react-router-dom'

function OrganizerHome() {
  return (
    <div>
      <button><Link to={'/organizer/addconference'}>Add New Conference</Link></button>
      <div>
      </div>
    </div>
  )
}

export default OrganizerHome