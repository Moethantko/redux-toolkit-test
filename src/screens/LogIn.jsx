import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../store'


const LogIn = () => {

    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

  return (
    <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="button" onClick={dispatch(login({username}))}>Log In</button>
        <button type="button" onClick={() => dispatch(logout())}> Log Out </button>
    </div>
  )
}

export default LogIn