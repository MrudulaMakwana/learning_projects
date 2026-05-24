import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authData] = useContext(AuthContext);
  const { employees = [] } = authData || {}; // Safely access employees data

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    try {
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setUser(userData); // Set the entire object
        setLoggedInUser(userData.data);
      }
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      localStorage.removeItem("loggedInUser"); // Clear invalid data
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      const adminUser = { role: "admin", data: { name: "Admin" } };
      setUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else {
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeUser = { role: "employee", data: employee };
        setUser(employeeUser);
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <>
      {user.role === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUser} />
      )}
    </>
  );
}

export default App;
