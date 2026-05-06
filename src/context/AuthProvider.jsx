import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const initializeUserData = () => {
    const { employees } = getLocalStorage();
    if (Array.isArray(employees)) return employees;
    setLocalStorage();
    const refreshed = getLocalStorage().employees;
    return Array.isArray(refreshed) ? refreshed : [];
  };

  const [userData, setUserData] = useState(initializeUserData);

  useEffect(() => {
    if (Array.isArray(userData)) {
      localStorage.setItem("employees", JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
