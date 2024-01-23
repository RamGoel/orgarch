import React, { useState } from 'react'
import { loginUser } from '../../utils/api'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useDispatch } from 'react-redux'
import { setRole, setUser } from '../../redux/reducers/authSlice'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPwd] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (loading) { return <Loader /> }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    loginUser({ email, password }, (user) => {
      dispatch(setUser(user));
      dispatch(setRole(user.role))
      navigate(`/${user.role}/home`)
      setLoading(false)
    }, (err => {
      var msg = err.message.split('/')
      toast(msg[msg.length - 1])
      setLoading(false)
    }))
  }
  return (
    <div className="login">
      <img src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png" width={'40%'} alt="" />
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input
          type='email'
          changeHandler={setEmail}
          placeholder='Email'
        />
        <Input
          type='password'
          changeHandler={setPwd}
          placeholder='Password'
        />
        <Button text='Submit' isLoading={loading} type='submit' />
        <p className='my-3 text-md text-center'>Don't have an Account <Link className='text-purple-700 underline' to='/'>Create one</Link></p>
      </form>
    </div>
  )
}

export default Login