import React, { useState } from 'react'
import '../../App.css'
import AllConferences from './AllConferences'
import AssignedPapers from './AssignedPapers'

function ReviewerHome() {
  const [tab, setTab] = useState(0)
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }} className='reviewerHome'>
        <button className={`p-3 my-3 rounded-sm w-1/3 mx-auto ${tab===1?'border-b-2 border-b-black':''}`} onClick={()=>setTab(1)}>Conferences</button>
        <button className={`p-3 my-3 rounded-sm w-1/3 mx-auto ${tab===0?'border-b-2 border-b-black':''}`} onClick={()=>setTab(0)}>Assigned Papers</button>
      </div>
      <div className='w-11/12 mx-auto'>
        {
        tab ? <AllConferences /> : <AssignedPapers />
      }
      </div>
    </>
  )
}

export default ReviewerHome