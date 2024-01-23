import React, { useState } from 'react'
import { addNewConference } from '../../utils/api'
import { getErrMessage } from '../../utils/plugins'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {toast} from 'react-toastify'
const formConfig = [
  {
    type: 'text',
    dataKey: 'title',
    isOptional: false,
    placeholder: 'Conference Title',
  },
  {
    type: 'text',
    dataKey: 'topic',
    isOptional: false,
    placeholder: 'Conference Topic',
  },
  {
    type: 'text',
    dataKey: 'organizer',
    isOptional: false,
    placeholder: 'Organizer',
  },
  {
    type: 'date',
    dataKey: 'date',
    isOptional: false,
    placeholder: 'Conference Date',
  },
  {
    type: 'text',
    dataKey: 'time',
    isOptional: false,
    placeholder: 'Conference Time',
  },
  {
    type: 'text',
    dataKey: 'venue',
    isOptional: false,
    placeholder: 'Conference Venue',
  },
];

function NewConference() {
  const [form, setForm] = useState({})
  const user = useSelector(state => state.auth.user)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    addNewConference({ ...form, actor: user.email }, (res, key) => {
      console.log(res)
      navigate(`/conference/${key}`)
      toast("Successfully Added")
      setLoading(false)
      setForm({})
    }, (err) => {
      toast(getErrMessage(err))
      setLoading(false)

    })
  }
  return (
    <form onSubmit={handleSubmit}>

      <div className='w-2/3 mx-auto my-3'>
        <h3 className='text-3xl font-semibold'>Add New Conference</h3>
        <div className='grid grid-cols-2 gap-3'>
          {formConfig.map((field, index) => (
          <Input
            key={index}
            isOptional={field.isOptional}
            type={field.type}
            placeholder={field.placeholder}
            changeHandler={(val) => setForm({ ...form, [field.dataKey]: val })}
          />
        ))}
        </div>
            {JSON.stringify(form)}
        <Button type='submit' isLoading={loading} text='Create' />
      </div>
    </form>
  )
}

export default NewConference