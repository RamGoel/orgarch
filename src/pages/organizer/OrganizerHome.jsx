import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getConferencesByEmail } from '../../utils/api'
import { useSelector } from 'react-redux'
// import { getErrMessage } from '../../utils/plugins'
import Loader from '../../components/Loader'
import NoDataPage from '../../components/NoData'

function OrganizerHome() {
  const [data, setData] = useState([])
  const user = useSelector(state => state.auth.user)
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  useEffect(e => {
    if(!Object.values(user).length) navigate('/')
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
      {data.length ? <div>
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
      </div> : <NoDataPage message={'No Conferences organized by you'} />}
    </div>
  )
}

export default OrganizerHome