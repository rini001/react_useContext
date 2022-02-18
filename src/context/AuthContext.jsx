import React,{createContext, useState} from 'react'
export const AuthContext=createContext();
export const AuthProvider = ({children}) => {
    const [isAuth,setisAuth]=useState(false)
const onLogin=()=>{
    fetch('https://reqres.in/api/login',{
        method: 'POST',
        body:JSON.stringify({
          
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
         
        }),
        headers: {
          'content-type':   'application/json',
        },
    }).then(r=>r.json()).then(d=>{
        if(d.token){
            console.log(d.token)
            setisAuth(true)
        }
    })
}
    const onLogout=()=>{
        setisAuth(false)
    }
  return (
   <AuthContext.Provider value={{isAuth,onLogin,onLogout}}>{children}</AuthContext.Provider>
  )
}
