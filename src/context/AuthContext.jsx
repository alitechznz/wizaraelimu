import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("pme_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("pme_user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("pme_user");
    }
  }, [user]);

  const login = (userData) => setUser(userData);

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("pme_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
