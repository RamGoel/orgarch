import React, { useEffect, useState } from 'react'
import {getReviewsById } from '../../utils/api'
import { useLocation } from 'react-router'
import Loader from '../../components/Loader'
import NoDataPage from '../../components/NoData'
import { toast } from 'react-toastify'
function ConferenceReviews() {
    const [data, setData] = useState([true])
    const [conference, setConference] = useState(null);
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const confId = location.pathname.split('/')[2];
    const paperId = location.pathname.split('/')[4];

    useEffect(e => {
        setLoading(true)
        getReviewsById(confId, (res) => {
            console.log(res)
            setConference({
                conference: res,
                paper:res.papers[paperId]
            });
            setData(res.papers[paperId].reviews)
            setLoading(false)
        }, err => {
            toast(err)
            setLoading(false)
        })
    }, [confId, paperId])

    if (loading) {
        return <Loader />
    }
    return (
        <div className='p-5 w-full h-screen'>
            <div className='my-3'>
                <h1>{conference.conference.title}</h1>
            <p><span className="font-semibold">Organizer:</span> {conference.conference.organizer} ({conference.conference.actor})</p>
            <p><span className="font-semibold">Paper: </span>{conference.paper.title}</p>
            <p><span className="font-semibold">Paper Submitted by:</span> {conference.paper.name}</p>
            </div>
            {data.length ? <table className='table-fixed w-full'>
                <tr className='border-2 bg-black p-2 text-white w-full'>
                    <th className='p-2'>Reviewer</th>
                    <th className='p-2'>Good Format</th>
                    <th className='p-2'>Good Paper</th>
                    <th className='p-2'>Review</th>
                </tr>
                {
                    data.map(review => {
                        return <tr className='w-full'>
                            <td className='p-2 w-1/5 border-2 text-center'>{review.reviewer} ({review.email})</td>
                            <td className='p-2 w-1/5 border-2 text-center'>{review.goodFormat}</td>
                            <td className='p-2 w-1/5 border-2 text-center'>{review.goodPaper}</td>
                            <td className='p-2 w-1/5 border-2 text-center'>{review.review}</td>
                        </tr>
                    })
                }</table> : <NoDataPage message={'No Reviews Submitted as of now'} />
            }
       </div>
    )
}

export default ConferenceReviews