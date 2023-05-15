import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getConferenceById } from '../../utils/api'

function ConferencePage() {
    const { id } = useParams()
    const [isAvailable, setAvailable] = useState('')
    const [data, setData] = useState({})
    useEffect(e => {
        getConferenceById(id, (res) => {
            if (res === null) {
                setAvailable(false)
            } else {
                if(data==={}){

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
        <div>Welcome to {id} Conference
            {
                JSON.stringify(data)
            }

        </div>
    )
}

export default ConferencePage