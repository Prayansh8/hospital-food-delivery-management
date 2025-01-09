import React, { createContext, useState, useEffect } from 'react';
import { getToken, removeToken, setToken, fetchUserInfo, performLogin } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      const token = getToken();
      if (token) {
        try {
          const userInfo = await fetchUserInfo(token);
          setUser(userInfo);
        } catch (error) {
          console.error("Error fetching user info", error);
        }
      }
      setLoading(false);
    };

    initializeUser();
  }, []);

  const login = async (authData) => {
    const userData = await performLogin(authData);
    setUser(userData);
    setToken(userData.token);
  };

  const logout = () => {
    setUser(null);
    removeToken();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};