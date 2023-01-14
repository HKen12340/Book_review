import {  useNavigate  } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from 'react';

export function Home(){
  
  let flag = useSelector((state) => state.flag);
  let navigate = useNavigate()

  useEffect(() => {
    if(!flag){
       navigate('/')
    }
  })
  return(
    <div>
      <h1>Home</h1>
    </div>
  );
}