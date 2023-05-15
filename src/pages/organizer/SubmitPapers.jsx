import React, { useState } from 'react'
import { submitPaper } from '../../utils/api'
import { useParams } from 'react-router'

function SubmitPapers({data}) {
    const [form, setForm] = useState()
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    console.log(data, id)
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            setLoading(true)
            submitPaper()
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
                setForm({ ...form, topic: e.target.files[0] })
            }} />

            <button>{loading?'Loading...':'Submit'}</button>
        </form>
    )
}

export default SubmitPapers