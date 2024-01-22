import React, { useState } from 'react'
import { organizerSignup } from '../../utils/api'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRole, setUser } from '../../redux/reducers/authSlice'
import Input from '../../components/Input'
import Button from '../../components/Button'
const formConfig = [
  {
    type: 'text',
    dataKey: 'name',
    isOptional: false,
    placeholder: 'Full Name',
  },
  {
    type: 'email',
    dataKey: 'email',
    isOptional: false,
    placeholder: 'Email',
  },
  {
    type: 'text',
    dataKey: 'country',
    isOptional: false,
    placeholder: 'Country',
  },
  {
    type: 'phone',
    dataKey: 'phone',
    isOptional: false,
    placeholder: 'Phone Number',
  },
  {
    type: 'text',
    dataKey: 'organization',
    isOptional: false,
    placeholder: 'Organization (e.g. ABES Engineering College)',
  },
  {
    type: 'text',
    dataKey: 'designation',
    isOptional: false,
    placeholder: 'Designation (e.g. Head, Professor, etc)',
  },
  {
    type: 'number',
    dataKey: 'experience',
    isOptional: false,
    placeholder: 'Experience (e.g. 2 years)',
  },
  {
    type: 'password',
    dataKey: 'password',
    isOptional: false,
    placeholder: 'Password (min 6 letters)',
  },
  {
    type: 'password',
    dataKey: 'confirmpwd',
    isOptional: false,
    placeholder: 'Confirm Password',
  },
];

function OrganizerSignup() {
    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit=(e) => {
            e.preventDefault()
            setLoading(true)
            organizerSignup(form, (res) => {
                dispatch(setUser(form));
                dispatch(setRole('organizer'))
                alert("Successfully Created Account")
                setLoading(false)
                navigate('/organizer/home')
            }, (err) => {
                var msg = err.message.split('/')
                alert(msg[msg.length - 1])
                setLoading(false)
            })

        }
    return (
        <form onSubmit={handleSubmit} className='p-5'>
            <div className='w-2/3 mx-auto'>
                <h1>Welcome Organizer</h1>
            
                <div className='grid grid-cols-2 gap-5 my-5'>
                    {
                formConfig.map(item => {
                    return <Input
                        placeholder={item.placeholder}
                        changeHandler={(val) => setForm({ ...form, [item.dataKey]: val })}
                        type={item.type}
                        extraClass='my-5'
                        isOptional={item.isOptional}
                    />
                })
            }
                </div>

                <Button
                    type='submit'
                    text='Create Account'
                    isLoading={loading}
                    disabled={!((form.password) && form.confirmpwd && form.password === form.confirmpwd)}
                />

            <p className='my-3 text-md text-center'>Already have an Account, <Link className='text-purple-700 underline' to="/login">Login Now</Link></p>
            </div>
        </form>
    )
}

export default OrganizerSignup