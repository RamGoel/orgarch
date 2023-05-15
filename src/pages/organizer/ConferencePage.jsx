import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getConferenceById } from '../../utils/api'
import { Link } from 'react-router-dom'
function ConferencePage() {
    const { id } = useParams()
    const [isAvailable, setAvailable] = useState('')
    const [data, setData] = useState({ fill: true })
    const navigate = useNavigate()
    useEffect(e => {
        getConferenceById(id, (res) => {
            if (res === null) {
                setAvailable(false)
            } else {
                if (data.fill) {
                    setData(res)
                }
                setAvailable(true)
            }
        }, (err) => {
            alert(err)
        })
    })

    if (isAvailable === false) {
        return <h1>No Conference Available</h1>
    }



    return (
        <div>
            <p>Welcome to {data.title || ''} Conference</p>
            <ol>
                <li>Conference ID - {id}</li>
                {Object.keys(data).map(pair => {
                    return <li>{pair} - {data[pair]}</li>
                })}
            </ol>
            <button onClick={() => {
                navigate(`/conference/${id}/submit`, { data:data, id:id})
            }}>Submit Papers</button>
        </div>
    )
}

export default ConferencePage