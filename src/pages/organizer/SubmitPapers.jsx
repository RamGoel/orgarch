import React, { useState } from 'react'
import { submitPaper } from '../../utils/api'
import { useNavigate, useParams } from 'react-router'
import { getErrMessage } from '../../utils/plugins'

function SubmitPapers({ data }) {
    const [form, setForm] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate=useNavigate()
    console.log(data, id)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setLoading(true)
            submitPaper(id, form, (res) => {
                console.log(res)
                setLoading(false)
                navigate(`/conference/${id}/papers`)
            }, err => {
                alert(getErrMessage(err))
                setLoading(false)
            })
        }}>
            <input required={true} type="text" placeholder='Full Name' onChange={e => {
                setForm({ ...form, name: e.target.value })
            }} />
            <input required={true} type="text" placeholder='College/Organization' onChange={e => {
                setForm({ ...form, org: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Title' onChange={e => {
                setForm({ ...form, title: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Abstract' onChange={e => {
                setForm({ ...form, abstract: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Tags' onChange={e => {
                setForm({ ...form, tags: e.target.value })
            }} />
            <input required={true} type="file" onChange={e => {
                setForm({ ...form, file: e.target.files[0] })
            }} />

            <button>{loading ? 'Loading...' : 'Submit'}</button>
        </form>
    )
}

export default SubmitPapers