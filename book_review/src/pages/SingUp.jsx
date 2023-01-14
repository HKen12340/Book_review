import { Link , useNavigate  } from 'react-router-dom';
import React,{ useState } from 'react';
import { useCookies } from "react-cookie";
import { useDispatch  } from "react-redux";
import axios from 'axios'
export function SingUp(){

  const dispatch = useDispatch()
  
  let navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const [cookies, setCookie, removeCookie] = useCookies();

    const onSignUp = () => {

    const file = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("avatar",file);

    axios
      .post(`https://ifrbzeaz2b.execute-api.ap-northeast-1.amazonaws.com/users`, { name, email, password })
      .then((res) => {
        // setCookie('token',res.data.token)
        //   axios
        //     .post(`https://ifrbzeaz2b.execute-api.ap-northeast-1.amazonaws.com/uploads`,{
              
        //       header: {
        //         'Content-Type': 'application/json',
        //         authorization: `Bearer ${cookies.token}`
                
        //       },
        //       formData:{ 
        //        'icon':formData
        //       }
        //     })
        //     .then(() => {
        //       console.log("OK!")
        //     })
        //     .catch((err)=>{
        //       console.log(err)
        //       console.log("error!")
        //     })

      // axios
      // .get(`https://ifrbzeaz2b.execute-api.ap-northeast-1.amazonaws.com/users`, {
      //   headers: {
      //     authorization: `Bearer ${res.data.token}`
      //   }
      // })
      // .then((res) => {
      //   console.log(res.data.token)
      //   console.log(res.data.name)
        
      // })
      // .catch((err) => {
      //   setErrorMessage(`リスト情報の取得に失敗しました。${err}`)
      // })
        
        dispatch({ type: "LOGIN" });
         navigate('/home')
      })
      .catch((err) => {
        setErrorMessage(`サインアップに失敗しました。${err}`)
      })
  }
  return(
    <div>
      SingUp
      <form onSubmit={onSignUp}>
        <label htmlFor="">username:
          <input id="name" type="text" onChange={handleNameChange}/><br />
        </label>
        <label htmlFor="">email:
          <input id="mail" type="email" onChange={handleEmailChange}/><br />
        </label>
        <label htmlFor="">password:
          <input id='password' type="password" onChange={handlePasswordChange}/><br />
        </label>
        <label htmlFor="">Icon:
          <input type="file" id = "file"/><br />
        </label>
        <input type="button" id='submit' onClick={onSignUp} value='決定'/>
      </form>
      <Link to="/">SingIn</Link>
      {errorMessage}
    </div>
  )
}