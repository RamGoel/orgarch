import React, { useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import AllConferences from './AllConferences'
import { useSelector } from 'react-redux'
import AssignedPapers from './AssignedPapers'

function ReviewerHome() {
  const user = useSelector(state => state.auth.user)
  const [tab, setTab] = useState(0)
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={()=>setTab(1)}>Conferences</button>
        <button onClick={()=>setTab(0)}>Assigned Papers</button>
      </div>


      {
        tab ? <AllConferences /> : <AssignedPapers />
      }
    </>
  )
}

export default ReviewerHome