import React, { useState } from 'react'
import { authorSignup, reviewerSignup } from '../../utils/api'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRole, setUser } from '../../redux/reducers/authSlice'
function AuthorSignup() {
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    return (

        <div className="reviewerSignup">
            <form onSubmit={(e) => {
                e.preventDefault()
                setLoading(true)
                authorSignup(form,(res)=>{
                    dispatch(setUser(form));
                    dispatch(setRole('author'))
                    setLoading(false)
                    navigate('/author/home')
                },(err)=>{
                    var msg = err.message.split('/')
                    alert(msg[msg.length - 1])
                    setLoading(false)
                })
            }}>
                <h1>Welcome Author</h1>
                <input required={true} type="text" placeholder='Full Name' onChange={e => {
                    setForm({ ...form, name: e.target.value })
                }} />
                <input required={true} type="email" placeholder='Email' onChange={e => {
                    setForm({ ...form, email: e.target.value })
                }} />
                <input required={true} type="text" placeholder='Country' onChange={e => {
                    setForm({ ...form, country: e.target.value })
                }} />
                <input required={true} type="phone" placeholder='Phone Number' onChange={e => {
                    setForm({ ...form, phone: e.target.value })
                }} />
                <input required={true} type="text" placeholder='Education (e.g. Bachelors in Data Science)' onChange={e => {
                    setForm({ ...form, education: e.target.value })
                }} />
                <input required={true} type="text" placeholder='Area of Interest (e.g. Machine Learning)' onChange={e => {
                    setForm({ ...form, interest: e.target.value })
                }} />
                <input required={true} type="password" placeholder='Password (min 6 letters) ' onChange={e => {
                    setForm({ ...form, password: e.target.value })
                }} />
                <button type='submit' disabled={!(form.password)}>{loading?'Loading...':'submit'}</button>
                <p>Already have an Account, <Link to="/login">Login Now</Link></p>
            </form>
        </div>
    )
}

export default AuthorSignup