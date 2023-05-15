import React from 'react'

function PaperCard({paper}) {
  return (
    <div>
        <h3>{paper.tile}</h3>
        <p>{paper.abstract}</p>
        <p>- {paper.name} from {paper.org}</p>
        <a href={paper.file}>{paper.file}</a>
    </div>
  )
}

export default PaperCard