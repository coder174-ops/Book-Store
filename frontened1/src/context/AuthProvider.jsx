import React, { createContext, useState } from 'react'

export const AuthContext=createContext();
export default function AuthProvider ({children}){
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) : undefined);
  return (
    <AuthProvider value={[authUser,setAuthUser]}>
        {children}
    </AuthProvider>
  )
}
export  const useAuth=()=>useContext(AuthContext);
