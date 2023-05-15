import React from 'react'

function PaperCard({paper}) {
  return (
    <div>
        <h3>{paper.title}</h3>
        <p>{paper.abstract}</p>
        <p>- {paper.name} from {paper.org}</p>
        <a href={paper.file}><i className='fa fa-file' /> View File</a>
    </div>
  )
}

export default PaperCard