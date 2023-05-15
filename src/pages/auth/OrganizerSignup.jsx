import React, { useState } from 'react'
import { organizerSignup } from '../../utils/api'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRole, setUser } from '../../redux/reducers/authSlice'
function OrganizerSignup() {
    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <form onSubmit={(e) => {
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

        }}>
            <h1>Welcome Organizer</h1>
            <input required={true} type="text" placeholder='Full Name' onChange={e => {
                setForm({ ...form, name: e.target.value })
            }} />
            <input required={true} type="email" placeholder='Email' onChange={e => {
                setForm({ ...form, email: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Country' onChange={e => {
                setForm({ ...form, country: e.target.value })
            }} />
            <input required={true} type="phone" placeholder='Phone Number' onChange={e => {
                setForm({ ...form, phone: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Organization (e.g. ABES Engineering College)' onChange={e => {
                setForm({ ...form, organization: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Designation (e.g. Head, Professor, etc)' onChange={e => {
                setForm({ ...form, designation: e.target.value })
            }} />
            <input required={true} type="number" placeholder='Experience (e.g. 2 years) ' onChange={e => {
                setForm({ ...form, experience: e.target.value })
            }} />
            <input required={true} type="password" placeholder='Password (min 6 letters) ' onChange={e => {
                setForm({ ...form, password: e.target.value })
            }} />
            <input required={true} type="password" placeholder='Confirm Password ' onChange={e => {
                setForm({ ...form, confirmpwd: e.target.value })
            }} />

            <button type='submit' disabled={!((form.password) && form.confirmpwd && form.password === form.confirmpwd)}>{(loading) ? 'Loading...' : 'Submit'}</button>
            <p>Already have an Account, <Link to="/">Login Now</Link></p>
        </form>
    )
}

export default OrganizerSignup