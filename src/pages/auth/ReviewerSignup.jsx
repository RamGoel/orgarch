import React, { useState } from 'react'
import { reviewerSignup } from '../../utils/api'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRole, setUser } from '../../redux/reducers/authSlice'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { toast } from 'react-toastify';

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
        dataKey: 'education',
        isOptional: false,
        placeholder: 'Education (e.g. Bachelors in Data Science)',
    },
    {
        type: 'text',
        dataKey: 'interest',
        isOptional: false,
        placeholder: 'Area of Interest (e.g. Machine Learning)',
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

function ReviewerSignup() {
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        reviewerSignup(form, (res) => {
            dispatch(setUser(form));
            dispatch(setRole('reviewer'))
            toast("Successfully Created Account")
            setLoading(false)
            navigate('/reviewer/home')
        }, (err) => {
            var msg = err.message.split('/')
            toast(msg[msg.length - 1])
            setLoading(false)
        })
    }
    return (
        <form onSubmit={handleSubmit} className='p-5'>
            <div className='w-11/12 md:w-2/3 mx-auto'>
                <h1>Welcome Reviewer</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
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

export default ReviewerSignup