import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import AddReview from './AddReview'

function PaperCard({ paper }) {
  const navigate = useNavigate()

  return (
    <div>
      <h3>{paper.title}</h3>
      <p>{paper.abstract}</p>
      <p>- {paper.name} from {paper.org}</p>
      <a href={paper.file}><i className='fa fa-file' />View File</a>
      <button onClick={() => {
        navigate(`/conference/${paper.confId}/paper/${paper.id}/addreview`, { state: {paper}, replace: true })
      }}>Add Review</button>
      <button onClick={() => {
        navigate(`/conference/${paper.confId}/paper/${paper.id}/reviews`, { state: {paper}, replace: true })
      }}>View Reviews</button>
    </div>
  )
}

export default PaperCard