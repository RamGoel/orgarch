import React, { useState } from 'react'
import { authorSignup } from '../../utils/api'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRole, setUser } from '../../redux/reducers/authSlice'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {toast} from 'react-toastify'
function AuthorSignup() {
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const formConfig = [
        {
            type: 'text',
            dataKey: 'name',
            changeHandler: (val) => setForm({ ...form, name: val }),
            placeholder: 'Full Name',
        },
        {
            type: 'email',
            dataKey: 'email',
            changeHandler: (val) => setForm({ ...form, email: val }),
            placeholder: 'Email',
        },
        {
            type: 'text',
            dataKey: 'country',
            changeHandler: (val) => setForm({ ...form, country: val }),
            placeholder: 'Country',
        },
        {
            type: 'phone',
            dataKey: 'phone',
            changeHandler: (val) => setForm({ ...form, phone: val }),
            placeholder: 'Phone Number',
        },
        {
            type: 'text',
            dataKey: 'education',
            changeHandler: (val) => setForm({ ...form, education: val }),
            placeholder: 'Education (e.g. Bachelors in Data Science)',
        },
        {
            type: 'text',
            dataKey: 'interest',
            changeHandler: (val) => setForm({ ...form, interest: val }),
            placeholder: 'Area of Interest (e.g. Machine Learning)',
        },
        {
            type: 'password',
            dataKey: 'password',
            changeHandler: (val) => setForm({ ...form, password: val }),
            placeholder: 'Password (min 6 letters)',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        authorSignup(form, (res) => {
            dispatch(setUser(form));
            dispatch(setRole('author'))
            setLoading(false)
            navigate('/author/home')
        }, (err) => {
            var msg = err.message.split('/')
            toast(msg[msg.length - 1])
            setLoading(false)
        })
    }

    return (

        <div className="reviewerSignup">
            <form onSubmit={handleSubmit}>
                <h1>Welcome Author</h1>
                <div className='grid-cols-1 grid md:grid-cols-2 gap-3'>
                    {formConfig.map((field, index) => (
                    <Input
                        key={index}
                        type={field.type}
                        changeHandler={field.changeHandler}
                        placeholder={field.placeholder}
                    />
                ))}
                </div>

                <Button text='Submit' isLoading={loading} type='submit' disabled={!(form.password)}/>
                <p className='my-3 text-md text-center'>Already have an Account, <Link className='text-purple-700 underline' to="/login">Login Now</Link></p>
            </form>
        </div>
    )
}

export default AuthorSignup