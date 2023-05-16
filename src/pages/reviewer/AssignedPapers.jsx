import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAssignedPaper } from '../../utils/api'
import Loader from '../../components/Loader'
import PaperCard from './PaperCard'
import NoDataPage from '../../components/NoData'

function AssignedPapers() {
    const user = useSelector(state => state.auth.user)
    const [papers, setPapers] = useState([true])
    useEffect(e => {
        getAssignedPaper(user.email, (result) => {
            if (papers[0] === true) {
                setPapers(result)
            }
        }, err => {
            alert(err)
        })
    },[])
    return (
        (papers[0] === true) ? <Loader /> : <div>
            {
                papers.length>0?papers.map(obj => {
                    return <PaperCard paper={obj} />
                }):<NoDataPage message={'No Papers Assigned to You'} />
            }
        </div>
    )
}

export default AssignedPapers