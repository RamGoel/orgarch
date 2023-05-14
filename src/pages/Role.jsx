import React from 'react'
import { Link } from 'react-router-dom'

function Role() {
    return (
        <div>
            <Link to="/login/organizer">Conference Organizer</Link>
            <Link to="/login/reviewer">Reviewer</Link>
        </div>
    )
}

export default Role