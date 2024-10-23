import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const Auth = createContext(null);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    
    

    const authInfo = { user }
    
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