import React, { useEffect, useState } from 'react'
import { getPapersById } from '../../utils/api'
import { useParams } from 'react-router'
import PaperCard from './PaperCard'

function ConferencePapers() {
    const [data, setData] = useState([true])
    const { id } = useParams()
    useEffect(e => {
        getPapersById(id, (res) => {
            if(data[0]===true){

                setData(res.papers)
            }
        }, err => alert(err))
    })
    return (
        <div>{
            data.map(e=>{
                return <PaperCard paper={e} />
            })
        }</div>
    )
}

export default ConferencePapers