import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { enableCallForPapers, getConferenceById } from '../../utils/api'
import Loader from '../../components/Loader'
import NotFoundPage from '../../components/NotFound'
import { useSelector } from 'react-redux'
import './organizer.css'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import moment from 'moment'

function ConferencePage() {
    const { id } = useParams()
    const role = useSelector(state => state.auth.role)
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
        // eslint-disable-next-line
    }, [])

    if (isAvailable === false) {
        return <NotFoundPage />
    }

    if (loading) {
        return <Loader />
    }

    const detailsMap = {
        'Conference ID':data.key,
        'Submitted Papers':data.papers?Object.keys(data.papers).length?'Yes':'No':'No',
        'Organizer':`${data.organizer} (${data.actor})`,
        'Conference Venue':`${data.venue}`,
        'Conference Title':data.title,
        'Conference Date':`${moment(data.date).format('DD MMM, YYYY')} (${data.time})`,
        'Conference Areas':data.topic
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>

            <div className='h-[90vh] w-[90vw] '>
                <h3 className='text-2xl font-semibold'>Welcome to <span className='capitalize'>{data.title || ''}</span> Conference</h3>

                {data.papers !== false ? <p className='text-sm mt-2 animate-pulse text-red-500'> <Link to={`/conference/${data.key}/submit`}><i className='fa fa-arrow-right mr-1'></i>Submission Link - Click Here</Link></p> : ''}
                <div className='grid grid-cols-3'>
                    {Object.keys(detailsMap).map((fieldTitle, index) => {
                        return <div className='my-2'>
                            <h3 className='font-semibold capitalize text-lg'>{fieldTitle}</h3>
                            <p>{detailsMap[fieldTitle]}</p>
                        </div>
                    })}
                </div>
                {
                    data.papers === false ? <button className='p-2 bg-black text-white text-xs rounded-md px-4' disabled={!(role === 'organizer')} onClick={() => {
                        var isEnable = window.confirm("Do you want to Enable Call for Papers?")
                        if (isEnable) {
                            enableCallForPapers(id, (res) => {
                                window.location.reload()
                            }, err => {
                                toast(err)
                            })
                        }
                    }}>{!(role === 'organizer') ? 'Call for Papers is Locked' : 'Open Call for Papers'} <i className='fa fa-lock'></i></button> : <button onClick={() => {
                        navigate(`/conference/${id}/papers`, { id: id })
                    }}>View Papers <i className='fa fa-angle-right'></i></button>
                }

            </div>
        </div>
    )
}

export default ConferencePage