import React, { useEffect, useState } from 'react'
import { assignReviewer, getAllReviewer, getPapersById } from '../../utils/api'
import { useParams } from 'react-router'
import Loader from '../../components/Loader'
import NoDataPage from '../../components/NoData'
import { useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
function ConferencePapers() {
    const [data, setData] = useState(null)
    const [reviewers, setReviewers] = useState([true])
    const [loading, setLoading] = useState(true)
    const user=useSelector(state=>state.auth.user)
    const { id } = useParams()
    useEffect(e => {
        console.log('snsdn')
        setLoading(true)
        getPapersById(id, (res) => {
            setData(res)
            getAllReviewer(result => {
                setReviewers(result)
                setLoading(false)
            }, (err) => {
                setLoading(false)
                alert(err)
            })
        }, err => {
            alert(err)
            setLoading(false)
        })

    }, [id])

    if (loading) {
        return <Loader />
    }
    return (
        <div className='p-10'>
            <div className='flex items-center justify-between'>
                <h1 className='my-2'>{data.title} </h1>
                <p>{`Organizer: ${data.organizer} (${data.actor}), Venue: ${data.venue}`}</p>
            </div>
            {Object.values(data.papers).length ? <table className='table-auto'>
                <tr className='border-2 bg-black p-2 text-white'>
                    <th className='p-2'>Title</th>
                    <th className='p-2'>Abstract</th>
                    <th className='p-2'>From</th>
                    <th className='p-2'>Organization</th>
                    <th className='p-2'>Paper Link</th>
                    {user.role === 'organizer' ? (<th>Reviewer</th>) : <th>Reviews</th>}
                </tr>
                {
                    Object.values(data.papers).map(paper => {
                        return <tr>
                            <td className='p-2 w-1/5 border-2 text-center'>{paper.title}</td>
                            <td className='p-2 w-1/5 border-2 text-center'>{paper.abstract.substring(0,100)}...</td>
                            <td className='p-2 w-1/5 border-2 text-center'>{paper.name}</td>
                            <td className='p-2 w-1/5 border-2 text-center'>{paper.org}</td>
                            <td className='p-2 flex-1 border-2 text-center'><a className='text-blue-500 underline' href={paper.file}>View Paper</a></td>
                            <td className='p-2 flex-1 border-2 text-center'>{user.role === 'organizer' ? <select className='p-2 border-2 m-2' onChange={(e) => {
                                setLoading(true)
                                assignReviewer(e.target.value, paper.id, paper.confId, (res) => {
                                    setLoading(false)
                                    toast("Successfully Assigned")
                                }, err => {
                                    toast(err)
                                })
                            }}>
                                {
                                    reviewers.map(e => {
                                        return <option value={e.email}>{e.name} - {e.interest}</option>
                                    })
                                }
                            </select> :<Link className='text-blue-500 underline' to={`/conference/${id}/paper/${paper.id}/reviews`}>View Reviews</Link> }</td>
                        </tr>
                    })
                }</table> : <NoDataPage message={'No Papers Submitted as of now'} />}
        </div>
    )
}

export default ConferencePapers