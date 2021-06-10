import React, { useState, useCallback } from 'react';

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  userId: '',
  login: (token) => {},
  logout: () => {},
});

const retrieveToken = () => {
  const storedToken = localStorage.getItem('token');

  return {
    token: storedToken,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveToken();
  const [token, setToken] = useState(tokenData);
  const [userid, setUserid] = useState('');

  // !!物件永遠回傳true
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const userInfoHandler = (email) => {
    setUserid(email);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userInfo: userInfoHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
