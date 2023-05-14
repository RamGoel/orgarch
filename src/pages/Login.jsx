import React, { useState } from 'react'
import { loginUser } from '../utils/api'
import { Link, useParams } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPwd] = useState('')
  const { role } = useParams()
  return (
    <form onSubmit={e => {
      e.preventDefault()
      const result = loginUser({ email, password })

      if (result === "success") {
        alert("Login Success")
      }
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