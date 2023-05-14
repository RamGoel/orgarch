import React, { useState } from 'react'

function OrganizerSignup() {
    const [form, setForm] = useState({})
    return (
        <div>
            <h1>Welcome Organizer</h1>
            <input placeholder='Full Name' onChange={e => {
                setForm({ ...form, name: e.target.value })
            }} />
            <input placeholder='Email' onChange={e => {
                setForm({ ...form, email: e.target.value })
            }} />
            <input placeholder='Country' onChange={e => {
                setForm({ ...form, country: e.target.value })
            }} />
            <input placeholder='Phone Number' onChange={e => {
                setForm({ ...form, phone: e.target.value })
            }} />
            <input placeholder='Organization (e.g. ABES Engineering College)' onChange={e => {
                setForm({ ...form, organization: e.target.value })
            }} />
            <input placeholder='Designation (e.g. Head, Professor, etc)' onChange={e => {
                setForm({ ...form, designation: e.target.value })
            }} />
            <input placeholder='Experience (e.g. 2 years) ' onChange={e => {
                setForm({ ...form, experience: e.target.value })
            }} />

            <button>Submit</button>
        </div>
    )
}

export default OrganizerSignup