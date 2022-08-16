import React from 'react'
import { createContext, useState, useContext} from 'react'

// 1st step
export const AuthContext = createContext({})

// 2nd Step
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState()
    const [email,setEmail] = useState()
    const [phone, setPhone]=useState()
    const [loginValue, setLogin] =useState(false)

    // const login = () =>{
    //     if(user==='admin' && password==='admin')
    //         setLogin(true)
    //     else
    //         setLogin(false)    
    // }

    // const logout = () =>{
    //     setUser(null)
    // }
    
  return (
    <AuthContext.Provider value={{user,setUser,setLogin,loginValue,password,setPassword,setEmail,setPhone}}>
        {children}
    </AuthContext.Provider>
  )
}

// 3rd Step
export const useAuth = () =>{
    return useContext(AuthContext)
}