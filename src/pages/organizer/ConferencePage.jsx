import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { enableCallForPapers, getConferenceById } from '../../utils/api'
import Loader from '../../components/Loader'
import NotFoundPage from '../../components/NotFound'
import { appUrl } from '../../utils/plugins'
function ConferencePage() {
    const { id } = useParams()
    const [isAvailable, setAvailable] = useState('')
    const [data, setData] = useState({ fill: true })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(e => {
        setLoading(true)
        getConferenceById(id, (res) => {
            if (res === undefined) {
                setAvailable(false)
            } else {
                if (data.fill === true) {
                    setData(res)
                }
                setAvailable(true)
            }
            setLoading(false)
        }, (err) => {
            alert(err)
            setLoading(false)
        })
    })

    if (isAvailable === false) {
        return <NotFoundPage />
    }

    // if (loading) {
    //     return <Loader />
    // }

    return (
        <div>
            <p>Welcome to {data.title || ''} Conference</p>
            {data.papers!==false?<p>Submission Link - <a href={`${appUrl}/conference/${data.key}/submit`}>Click Here</a></p>:''}
            <ol>
                {Object.keys(data).map(pair => {
                    return pair !== 'papers' ? <li>{pair} - {data[pair]}</li> : ''
                })}
            </ol>
            {
                data.papers === false ? <button onClick={() => {
                    var isEnable = window.confirm("Do you want to Enable Call for Papers?")
                    if (isEnable) {
                        enableCallForPapers(id, (res) => {
                            alert("Successfully Activated")
                            window.location.reload()
                        }, err => {
                            alert(err)
                        })
                    }
                }}>Call for Papers <i className='fa fa-lock'></i></button> : <button onClick={() => {
                    navigate(`/conference/${id}/papers`, {id:id})
                }}>View Papers <i className='fa fa-angle-right'></i></button>
            }

        </div>
    )
}

export default ConferencePage