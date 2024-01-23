import React, { useState } from 'react'
import { submitReview } from '../../utils/api'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {toast} from 'react-toastify'
function AddReview() {
    const [form, setForm] = useState({ goodPaper: '', goodFormat: '', review: '' })
    const location = useLocation()
    const user = useSelector(state => state.auth.user)
    const [loading, setLoading] = useState(false)
    var paper = location.state.paper
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      setLoading(true)
            e.preventDefault()
            submitReview(paper.confId, paper.id, form, user.name, user.email, () => {
                toast("Submitted review")
                setForm({ goodPaper: '', goodFormat: '', review: '' })
                setLoading(false)
                navigate(`/reviewer/home`)
            }, err => {
                toast(err)
                setForm({ goodPaper: '', goodFormat: '', review: '' })
                setLoading(false)
            })  
    }
    if (loading) {
        return <Loader />
    }



    return (
        <form onSubmit={handleSubmit} className='h-screen w-screen flex items-center justify-center'>
            <div>
                <h3 className='text-2xl font-semibold'>Add your Review</h3>
            <Input
                type="text"
                placeholder='Paper was Good? - Yes/No'
                changeHandler={val => {
                    setForm({ ...form, goodPaper: val })
                }}
            />
            <Input
                type="text"
                placeholder='Length & Format of Paper is Good? - Yes/No'
                changeHandler={val => {
                    setForm({ ...form, goodFormat: val })
                }}
            />
            <textarea
                rows={6}
                style={{ width: '100%' }}
                type="text"
                    required={true}
                    className='border-2 border-black p-2 resize-none rounded-lg mb-3'
                placeholder='Detailed Review' onChange={e => {
                    setForm({ ...form, review: e.target.value })
                }}
            />

            <Button type='submit' text='Submit Review' isDisabled={loading} />
            </div>
        </form>
    )
}

export default AddReview