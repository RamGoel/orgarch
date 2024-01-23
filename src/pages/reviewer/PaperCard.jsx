import React from 'react'
import { useNavigate } from 'react-router'
import {toast} from 'react-toastify'
function PaperCard({ paper }) {
  const navigate = useNavigate()

  return (
    <div className='p-3 border-2 rounded-lg w-[500px]'>
      <h3 className='text-xl font-semibold'>{paper.title}</h3>
      <p className='text-sm my-2'>{paper.abstract.substring(0, 100)}...</p>
      <p className='text-sm'><span className='font-bold'>Organizer:</span> {paper.name} from {paper.org}</p>
      <div className='flex items-center my-4 justify-start'>
        <button onClick={() => {
          if (paper.file) {
            window.open(paper.file)
          } else {
            toast('No Paper Found')
          }
        }} className='p-2 text-xs bg-black text-white rounded-lg mr-2'>
          <i className='fa fa-file mr-1' />View File
        </button>
        <button className='p-2 text-xs bg-black text-white rounded-lg mr-2' onClick={() => {
          navigate(`/conference/${paper.confId}/paper/${paper.id}/addreview`, { state: { paper } })
        }}>
          <i className='fa fa-plus mr-1' /> Add Review
        </button>
        <button className='p-2 text-xs bg-black text-white rounded-lg mr-2' onClick={() => {
          navigate(`/conference/${paper.confId}/paper/${paper.id}/reviews`, { state: { paper } })
        }}>
          <i className='fa fa-eye mr-1' /> View Reviews
        </button>
      </div>
    </div>
  )
}

export default PaperCard