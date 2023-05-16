import React, { useEffect, useState } from 'react'
import { assignReviewer, getAllReviewer, getReviewsById } from '../../utils/api'
import { useLocation, useParams } from 'react-router'
import Loader from '../../components/Loader'
import NoDataPage from '../../components/NoData'
import { useSelector } from 'react-redux'

function ConferenceReviews() {
    const [data, setData] = useState([true])
    const [loading, setLoading] = useState(false)
    const user = useSelector(state => state.auth.user)
    const location = useLocation()
    useEffect(e => {
        setLoading(true)
        getReviewsById(location.state.paper.confId, (res) => {
            setData(res.papers[location.state.paper.id].reviews)
            setLoading(false)
        }, err => {
            alert(err)
            setLoading(false)
        })

        // eslint-disable-next-line
    }, [])
    return (
        loading ? <Loader /> : data.length ? <table>
            <tr>
                <th>Reviewer</th>
                <th>Email</th>
                <th>Good Format</th>
                <th>Good Paper</th>
                <th>Review</th>
            </tr>
            {
                data.map(review => {
                    return <tr>
                        <td>{review.reviewer}</td>
                        <td>{review.email}</td>
                        <td>{review.goodFormat}</td>
                        <td>{review.goodPaper}</td>
                        <td>{review.review}</td>
                    </tr>
                })
            }</table> : <NoDataPage message={'No Reviews Submitted as of now'} />
    )
}

export default ConferenceReviews