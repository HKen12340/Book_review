import { Link , useNavigate  } from 'react-router-dom'
import React,{ useState } from 'react'
import axios from 'axios'
import { useDispatch  } from 'react-redux'

export function SingIn(){
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState('')
  let navigate= useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
    const onSignIn = () => {
    axios
      .post(`https://ifrbzeaz2b.execute-api.ap-northeast-1.amazonaws.com/signin`, { email, password })
      .then((res) => {
        console.log(res.data.token)
        dispatch({ type: "LOGIN" })
        navigate('/home')
      })
      .catch((err) => {
        setErrorMessage(`サインインに失敗しました。`)
      })
  }
  return(
    <div>
      SingIn
      
      <form onSubmit={onSignIn}>
        <label htmlFor="">email:
          <input type="text" id="mail" onChange={handleEmailChange}/><br />
        </label>
        <label htmlFor="">password:
          <input type="text"  id='password' onChange={handlePasswordChange}/>
        </label>
        <input type="button" id='submit' onClick={onSignIn} value='決定'/>
      </form>

      <Link to="/SingUp">SingUp</Link>
      {errorMessage}
    </div>
  )
}