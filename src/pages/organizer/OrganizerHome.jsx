import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getConferencesByEmail } from '../../utils/api'
import { useSelector } from 'react-redux'
// import { getErrMessage } from '../../utils/plugins'
import Loader from '../../components/Loader'
import NoDataPage from '../../components/NoData'
import {toast} from 'react-toastify'
import ConferenceCard from '../reviewer/ConferenceCard'
function OrganizerHome() {
  const [data, setData] = useState([])
  const user = useSelector(state => state.auth.user)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(e => {
    if (!Object.values(user).length) navigate('/')
    setLoading(true)
    getConferencesByEmail(user.email, (result) => {
      setData(result)
      setLoading(false)
    }, err => {
      toast(err)
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [])

  return (
    loading ? <Loader /> : <div className='w-screen h-screen '>
      <div className='p-4'>
        <button
          className='p-2 bg-black text-white px-4 rounded-lg'
        >
          + <Link to={'/organizer/addconference'}>Add New Conference</Link>
        </button>
      </div>
      {data.length ? <div className='w-11/12 mx-auto'>
        <p className='text-xl font-semibold'>Your Conferences</p>
        <div>
          {data.map(obj => {
            return <ConferenceCard data={obj} />
          })}
        </div>
      </div> : <NoDataPage message={'No Conferences organized by you'} />}
    </div>
  )
}

export default OrganizerHome