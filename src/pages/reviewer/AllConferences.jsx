import React, { useEffect, useState } from 'react'
import { getAllConferences } from '../../utils/api'
import { getErrMessage } from '../../utils/plugins'
import ConferenceCard from './ConferenceCard'
import Loader from '../../components/Loader'
import NoDataPage from '../../components/NoData'
function AllConferences() {
    const [data, setData] = useState([true])
    const [loading, setLoading] = useState(false)
    useEffect(e => {
        setLoading(true)
        getAllConferences((res) => {
            setData(res)
            setLoading(false)
        }, (err) => {
            setLoading(false)
            alert(getErrMessage(err))
        })

    }, [])
    return (
        loading ? <Loader /> : <div>
            {
                data.length?data.map(e => {
                    return <ConferenceCard data={e} /> 
                }):<NoDataPage message={'No conferences are scheduled'} />
            }
        </div>
    )
}

export default AllConferences