import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "../api/client";

const AuthContext = createContext({
  loading: true,
  isAuth: false,
  user: null,
  refreshAuth: () => {},
});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const refreshAuth = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/auth/verify");
      setIsAuth(Boolean(res.data?.status));
      setUser(res.data?.user || null);
    } catch (err) {
      setIsAuth(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  return (
    <AuthContext.Provider value={{ loading, isAuth, user, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
