import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {  
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

      const logout = () => {
        setIsAuthenticated(false);
    };
    
    
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>        
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

