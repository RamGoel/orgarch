import React, { useEffect, useState } from 'react'
import { getAllConferences } from '../utils/api'
import { getErrMessage } from '../utils/plugins'
import ConferenceCard from '../pages/reviewer/ConferenceCard'
import Loader from '../components/Loader'
import NoDataPage from '../components/NoData'
import { useSelector } from 'react-redux'
function AuthorHome() {
    const [data, setData] = useState([true])
    const [loading, setLoading] = useState(false)
    const user = useSelector(state => state.auth.user)

    useEffect(e => {
        console.log(user.role)
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
        loading ? <Loader /> : <div className='w-11/12 mx-auto mt-12'>
            <h3 className='text-2xl font-semibold'>Open Conferences</h3>

            {
                data.length ? <div className='grid grid-cols-3 gap-5'>
                    {
                        data.map(e => {
                            return <ConferenceCard data={e} />
                        })
                    }
                </div> : <NoDataPage message={'No conferences are scheduled'} />
            }
        </div>
    )
}

export default AuthorHome