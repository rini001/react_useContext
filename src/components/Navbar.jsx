import React ,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
// import {Button} from './Button'
export const Navbar = () => {
  const {isAuth,onLogin,onLogout}=useContext(AuthContext);
  return (
    <div>
        Navbar:{ `${isAuth}`}
        {/* <Button /> */}
        <button onClick={()=>{
         if(isAuth){
           onLogout()
         }
else{
  onLogin()
}
        
        }}>{isAuth? "Logout":"Login"}</button>
    </div>
  )
}
