import React, { createContext, useState } from "react";

export const AuthProvider = createContext(null);
export default function AuthContext({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-information") || null)
  );
  const authValue = { user, setUser };
  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
}
