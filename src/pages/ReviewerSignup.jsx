import React, { useState } from 'react'

function ReviewerSignup() {
    const [form, setForm] = useState({})
    return (
        <div>
            <h1>Welcome Reviewer</h1>
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
            <input placeholder='Education (e.g. Bachelors in Data Science)' onChange={e => {
                setForm({ ...form, education: e.target.value })
            }} />
            <input placeholder='Area of Interest (e.g. Machine Learning)' onChange={e => {
                setForm({ ...form, interest: e.target.value })
            }} />
            <input placeholder='Experience (e.g. 2 years) ' onChange={e => {
                setForm({ ...form, experience: e.target.value })
            }} />

            <button>Submit</button>
        </div>
    )
}

export default ReviewerSignup