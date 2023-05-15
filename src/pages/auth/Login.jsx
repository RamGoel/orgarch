import React, { useState } from 'react'
import { loginUser } from '../../utils/api'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPwd] = useState('')
  const [loading, setLoading] = useState(false)
  const { role } = useParams()
  const navigate = useNavigate()
  return (
    <div className="login">
      <form onSubmit={e => {
        e.preventDefault()
        setLoading(true)
        loginUser({ email, password }, (role) => {
          navigate(`/${role}/home`)
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
        <p>Don't have an Account <Link to={`/${role}/signup`}>Create one</Link></p>
      </form>
    </div>
  )
}

export default Login