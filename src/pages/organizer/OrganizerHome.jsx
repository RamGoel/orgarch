import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConferencesByEmail } from '../../utils/api'
import { useSelector } from 'react-redux'
import { getErrMessage } from '../../utils/plugins'
import Loader from '../../components/Loader'

function OrganizerHome() {
  const [data, setData] = useState([])
  const user = useSelector(state => state.auth.user)
  const [loading, setLoading] = useState(false)
  useEffect(e => {
    setLoading(true)
    getConferencesByEmail(user.email, (result) => {
      setData(result)
      setLoading(false)
    }, err => {
      alert(err)
      setLoading(false)
    })
  // eslint-disable-next-line
  }, [])
  return (
    loading ? <Loader /> : <div>
      <button><Link to={'/organizer/addconference'}>Add New Conference</Link></button>
      <div>
        <p>Your Conferences</p>
        <div>
          {data.map(obj => {
            return <div>
              <h3>{obj.title}</h3>
              <p>{obj.name}</p>
              <Link to={`/conference/${obj.key}`}>Go to Page</Link>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default OrganizerHome