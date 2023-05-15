import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import AllConferences from './AllConferences'
import { useSelector } from 'react-redux'

function ReviewerHome() {
  const user=useSelector(state=>state.auth.user)
  return (
    <>
    <p>Welcome, {user.displayName || user.name} </p>
    <AllConferences />
    </>
  )
}

export default ReviewerHome