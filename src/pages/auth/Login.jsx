import React, { useState } from 'react'
import { loginUser } from '../../utils/api'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useDispatch } from 'react-redux'
import { setRole, setUser } from '../../redux/reducers/authSlice'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPwd] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  if (loading) { return <Loader /> }
  return (
    <div className="login">
      <img src="https://www.claymath.org/sites/default/files/img_3093_0.jpg" width={'50%'} alt="" />
      <form onSubmit={e => {
        e.preventDefault()
        setLoading(true)
        loginUser({ email, password }, (user) => {
          dispatch(setUser(user));
          dispatch(setRole(user.role))
          navigate(`/${user.role}/home`)
          setLoading(false)
        }, (err => {
          var msg = err.message.split('/')
          alert(msg[msg.length - 1])
          setLoading(false)
        }))
      }}>
        <h1>Login</h1>
        <input type="email" required={true} onChange={e => setEmail(e.target.value)} placeholder='email'></input>
        <input type="password" required={true} onChange={e => setPwd(e.target.value)} placeholder='password'></input>
        <button type="submit">{(loading) ? 'Loading....' : 'Submit'}</button>
        <p>Don't have an Account <Link to='/'>Create one</Link></p>
      </form>
    </div>
  )
}

export default Login