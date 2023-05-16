import React, { useEffect, useState } from 'react'
import { assignReviewer, getAllReviewer, getPapersById } from '../../utils/api'
import { useParams } from 'react-router'
import Loader from '../../components/Loader'
import NoDataPage from '../../components/NoData'
import { useSelector } from 'react-redux'

function ConferencePapers() {
    const [data, setData] = useState([true])
    const [reviewers, setReviewers] = useState([true])
    const [loading, setLoading] = useState(false)
    const user=useSelector(state=>state.auth.user)
    const { id } = useParams()
    useEffect(e => {
        console.log('snsdn')
        setLoading(true)
        getPapersById(id, (res) => {
            if (data[0] === true) {
                setData(res.papers)
            }
            getAllReviewer(result => {
                if (reviewers[0] === true) {
                    setReviewers(result)
                }
                setLoading(false)
            }, (err) => {
                setLoading(false)
                alert(err)
            })
        }, err => {
            alert(err)
            setLoading(false)
        })

// eslint-disable-next-line
    }, [])
    return (
        loading ? <Loader /> : Object.values(data).length ? <table>
            <tr>
                <th>Title</th>
                <th>Abstract</th>
                <th>From</th>
                <th>Organization</th>
                <th>Link</th>
                {user.role==='organizer'?(<th>Reviewer</th>):''}
            </tr>
            {
                Object.values(data).map(paper => {
                    return <tr>
                        <td>{paper.title}</td>
                        <td>{paper.abstract}</td>
                        <td>{paper.name}</td>
                        <td>{paper.org}</td>
                        <td><a href={paper.file}>Link</a></td>
                        {user.role==='organizer'?<select onChange={(e) => {
                            assignReviewer(e.target.value, paper.id, paper.confId, (res) => {
                                alert("Successfully Assigned")
                            }, err => {
                                alert(err)
                            })
                        }}>
                            {
                                reviewers.map(e => {
                                    return <option value={e.email}>{e.name} - {e.interest}</option>
                                })
                            }
                        </select>:''}
                    </tr>
                })
            }</table> : <NoDataPage message={'No Papers Submitted as of now'} />
    )
}

export default ConferencePapers