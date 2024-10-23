import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../auth/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Auth = createContext(null);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('Current value of the current user', currentUser)
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { 
        user, 
        createUser, 
        signInUser,
        logOut
    }
    
    return (
        <Auth.Provider value={authInfo}>
            {children}
        </Auth.Provider>
    );
};

export default AuthContext;

AuthContext.propTypes = {
    children: PropTypes.node
}


/***
 * 1. create context
 * 2. set provider with value
 * 3. 
 */