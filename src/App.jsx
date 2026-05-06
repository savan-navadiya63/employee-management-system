import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDeshboard from "./components/Dashboard/AdminDeshboard";
import EmployeeDeshboard from "./components/Dashboard/EmployeeDeshboard";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const getInitialAuth = () => {
    const stored = localStorage.getItem("loggedInUser");
    if (!stored) return { role: null, data: null };

    try {
      const parsed = JSON.parse(stored);
      const validRoles = new Set(["admin", "employee"]);
      const role = validRoles.has(parsed.role) ? parsed.role : null;
      return {
        role,
        data: parsed.data ?? null,
      };
    } catch {
      return { role: null, data: null };
    }
  };

  const { role: initialRole, data: initialData } = getInitialAuth();
  const [user, setUser] = useState(initialRole);
  const [loggedInUserData, setLoggedInUserData] = useState(initialData);
  const [userData] = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
        return;
      }
    }

    alert("Invalid credentials");
  };

  return !user ? (
    <Login handleLogin={handleLogin} />
  ) : user === "admin" ? (
    <AdminDeshboard changeUser={setUser} />
  ) : (
    <EmployeeDeshboard changeUser={setUser} data={loggedInUserData} />
  );
};

export default App;
