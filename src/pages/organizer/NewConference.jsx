import React, { useState } from 'react'
import { addNewConference } from '../../utils/api'
import { appUrl, getErrMessage } from '../../utils/plugins'

function NewConference() {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)
  const [url, setURL] = useState(null)
  return (
    <form onSubmit={e => {
      e.preventDefault()
      setLoading(true)
      addNewConference(form, (res, key) => {
        console.log(res)
        setURL(`${appUrl}/conference/${key}`)
        alert("Successfully Added")
        setLoading(false)
        setForm({})
      }, (err) => {
        alert(getErrMessage(err))
        setLoading(false)

      })
    }}>

      <a href={url}>{url}</a>
      <h3>Add New Conference</h3>
      <input required={true} type="text" placeholder='Conference Title' onChange={e => {
        setForm({ ...form, title: e.target.value })
      }} />
      <input required={true} type="text" placeholder='Conference Topic' onChange={e => {
        setForm({ ...form, topic: e.target.value })
      }} />
      <input required={true} type="text" placeholder='Organizer' onChange={e => {
        setForm({ ...form, organizer: e.target.value })
      }} />
      <input required={true} type="text" placeholder='Conference Date' onChange={e => {
        setForm({ ...form, date: e.target.value })
      }} />
      <input required={true} type="text" placeholder='Conference Time' onChange={e => {
        setForm({ ...form, time: e.target.value })
      }} />
      <input required={true} type="text" placeholder='Conference Venue' onChange={e => {
        setForm({ ...form, venue: e.target.value })
      }} />
      <button type='submit'>{(loading) ? 'Loading...' : 'submit'}</button>
    </form>
  )
}

export default NewConference