import React, { useState } from 'react'
import { loginUser } from '../utils/api'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPwd] = useState('')
  const { role } = useParams()
  const navigate = useNavigate()
  return (
    <form onSubmit={e => {
      e.preventDefault()
      loginUser({ email, password }, (role) => {
        navigate(`/${role}/home`)
      })
    }}>
      <h1>Login</h1>
      <input type="email" required={true} onChange={e => setEmail(e.target.value)} placeholder='email'></input>
      <input type="password" required={true} onChange={e => setPwd(e.target.value)} placeholder='password'></input>
      <button type="submit">submit</button>
      <p>Don't have an Account <Link to={`/${role}/signup`}>Create one</Link></p>
    </form>
  )
}

export default Login