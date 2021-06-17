import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  userInfo: {email: '', level: ''},
  userInfoHandler: (email, level) => {}
});

const retrieveToken = () => {
  const storedToken = localStorage.getItem('token');

  return {
    token: storedToken,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveToken();
  const [token, setToken] = useState(tokenData.token);
  const [userInfo, setUserInfo] = useState({email: '', level: ''});

  // !!物件永遠回傳true
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserInfo({email: '', level: ''});
    localStorage.removeItem('token');
    localStorage.removeItem('level');
  };

  const userInfoHandler = (e, l) => {
    setUserInfo({email: e, level: l});
    localStorage.setItem('level', l);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userInfo: userInfo,
    userInfoHandler: userInfoHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
