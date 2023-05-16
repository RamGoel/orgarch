import React, { useState } from 'react'
import '../../App.css'
import AllConferences from './AllConferences'
import AssignedPapers from './AssignedPapers'

import './reviewer.css'

function ReviewerHome() {
  const [tab, setTab] = useState(0)
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className='buttonReviewerHome' onClick={()=>setTab(1)}>Conferences</button>
        <button className='buttonReviewerHome' onClick={()=>setTab(0)}>Assigned Papers</button>
      </div>


      {
        tab ? <AllConferences /> : <AssignedPapers />
      }
    </>
  )
}

export default ReviewerHome