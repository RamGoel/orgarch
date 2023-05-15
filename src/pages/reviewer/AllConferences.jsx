import React, { useEffect, useState } from 'react'
import { getAllConferences } from '../../utils/api'
import { getErrMessage } from '../../utils/plugins'
import ConferenceCard from './ConferenceCard'

function AllConferences() {
    const [data, setData] = useState([true])
    useEffect(e => {
        getAllConferences((res) => {
            if (data[0] == true) {
                setData(res)
            }
        }, (err) => {
            alert(getErrMessage(err))
        })
    })
    return (
        <div>
            {
                data.map(e=>{
                    return <ConferenceCard data={e} />
                })
            }
        </div>
    )
}

export default AllConferences