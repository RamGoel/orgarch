import React, { useEffect, useState } from 'react'
import { getAllConferences } from '../../utils/api'
import { getErrMessage } from '../../utils/plugins'

function AllConferences() {
    const [data, setData] = useState({ fill: true })
    useEffect(e => {
        getAllConferences((res) => {
            if (data.fill == true) {
                setData(res)
            }
        }, (err) => {
            alert(getErrMessage(err))
        })
    })
    return (
        <div>
            {
                JSON.stringify(data)
            }
        </div>
    )
}

export default AllConferences