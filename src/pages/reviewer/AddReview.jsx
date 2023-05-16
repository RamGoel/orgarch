import React, { useState } from 'react'
import { submitReview } from '../../utils/api'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'

function AddReview() {
    const [form, setForm] = useState({ goodPaper: '', goodFormat: '', review: '' })
    const location = useLocation()
    const user = useSelector(state => state.auth.user)
    const [loading, setLoading] = useState(false)
    var paper = location.state.paper
    return (
        (loading) ? <Loader /> :
            <form onSubmit={(e) => {
                setLoading(true)
                e.preventDefault()
                submitReview(paper.confId, paper.id, form, user.name, user.email, () => {
                    alert("Submitted review")
                    setForm({ goodPaper: '', goodFormat: '', review: '' })
                    setLoading(false)
                }, err => {

                    alert(err)
                    setForm({ goodPaper: '', goodFormat: '', review: '' })
                    setLoading(false)
                })
            }}>
                <h3>Add your Review</h3>
                <input required={true} value={form.goodPaper} type="text" placeholder='Paper was Good? - Yes/No' onChange={e => {
                    setForm({ ...form, goodPaper: e.target.value })
                }} />
                <input required={true} value={form.goodFormat} type="text" placeholder='Length & Format of Paper is Good? - Yes/No' onChange={e => {
                    setForm({ ...form, goodFormat: e.target.value })
                }} />
                <textarea rows={6} style={{ width: '100%' }} required={true} value={form.review} type="text" placeholder='Detailed Review' onChange={e => {
                    setForm({ ...form, review: e.target.value })
                }} />

                <button type='submit'>Submit Review</button>
            </form>
    )
}

export default AddReview