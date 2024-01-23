import React, { useEffect, useState } from 'react'
import { submitPaper } from '../../utils/api'
import { useNavigate, useParams } from 'react-router'
import { getErrMessage } from '../../utils/plugins'
import { useSelector } from 'react-redux'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {toast} from 'react-toastify'
const formConfig = [
  {
    type: 'text',
    dataKey: 'name',
    isOptional: false,
    placeholder: 'Full Name',
  },
  {
    type: 'text',
    dataKey: 'org',
    isOptional: false,
    placeholder: 'College/Organization',
  },
  {
    type: 'text',
    dataKey: 'title',
    isOptional: false,
    placeholder: 'Title',
  },
  {
    type: 'text',
    dataKey: 'abstract',
    isOptional: false,
    placeholder: 'Abstract',
  },
  {
    type: 'text',
    dataKey: 'tags',
    isOptional: false,
    placeholder: 'Tags',
  },
  {
    type: 'file',
    dataKey: 'file',
    isOptional: false,
    placeholder: 'Choose File',
  },
];

function SubmitPapers({ data }) {
    const [form, setForm] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const user=useSelector(state=>state.auth.user)
    const navigate=useNavigate()
    useEffect(e=>{
        console.log(user.role)
        if(user.role===''){
            navigate('/login')
        }
        if(user.role!=='author'){
            navigate('/author/signup')
        }
    }, [navigate, user.role])
    

    const handleSubmit = (e) => {
            e.preventDefault()
            setLoading(true)
        submitPaper(id, form, (res) => {
                toast('Added Paper Successfully')
                setLoading(false)
                navigate(`/conference/${id}/papers`)
            }, err => {
                toast(getErrMessage(err))
                setLoading(false)
            })
        }
    return (
        <form onSubmit={handleSubmit} className='w-screen h-screen flex items-center justify-center mx-auto'>
            <div className='w-1/2'>
                <h1>Fill your Paper details.</h1>
            {
                formConfig.map((item) => {
                    return <Input
                        isOptional={item.isOptional}
                        changeHandler={(val) => setForm({ ...form, [item.dataKey]: val })}
                        type={item.type}
                        placeholder={item.placeholder}
                    />
                })
            }

            <Button
                isLoading={loading}
                isDisabled={loading}
                text="Submit"
            />
            </div>
        </form>
    )
}

export default SubmitPapers