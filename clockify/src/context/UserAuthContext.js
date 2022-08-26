import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { auth } from "../Firebase";
const userAuthContext=createContext();

export const UserAuthContextProvider=({children})=>{
   const [User,setUser]=useState("")
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const Login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout=()=>{
        return signOut(auth)
    }
    const googlesigin=()=>{
        const googleAuthProvider=new GoogleAuthProvider()
        return signInWithPopup(auth,googleAuthProvider)
    }
    useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)

      })
      return ()=>{unsubscribe()}
    
   
    }, []);
    
    return (
        <userAuthContext.Provider value={{User,Logout,signUp,Login,googlesigin}}>
            {children}
        </userAuthContext.Provider>
    )
    
    
}
export function UseUserAuth(){
    return useContext(userAuthContext)
}