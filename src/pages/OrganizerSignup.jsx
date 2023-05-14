import React, { useState } from 'react'

function OrganizerSignup() {
    const [form, setForm] = useState({})
    return (
        <form>
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
                setForm({ ...form, pwd: e.target.value })
            }} />
            <input required={true} type="password" placeholder='Confirm Password ' onChange={e => {
                setForm({ ...form, confirmpwd: e.target.value })
            }} />

            <button type='submit' disabled={!((form.pwd) && form.confirmpwd && form.pwd === form.confirmpwd)}>Submit</button>
        </form>
    )
}

export default OrganizerSignup