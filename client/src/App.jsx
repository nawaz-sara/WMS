import React from "react";
import {Toaster} from "react-hot-toast"
import {Navigate,Route,Routes } from "react-router-dom";

import LoginLanding from "./pages/LoginLanding.jsx";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Employees from "./pages/Employee.jsx";
import Attendence from "./pages/Attendence.jsx";
import Leave from "./pages/Leave.jsx";
import Payslips from "./pages/Payslips.jsx";
import Settings from "./pages/settings.jsx";
import PrintPayslip from "./pages/PrintPayslips.jsx";

import LoginForm from "./components/LoginForm.jsx";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>

        <Route path="/login" element={<LoginLanding/>}/>
      
<Route path="/login/admin" element={<LoginForm role="admin" title="Admin Login" subtitle="Sign in to manage the organization"/>}/>
<Route path="/login/employee" element={<LoginForm role="employee" title="Employee Login" subtitle="Sign in to access your account"/>}/>

      <Route element={<Layout/>}>
        
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/attendence" element={<Attendence/>} />
        <Route path="/leave" element={<Leave/>} />
        <Route path="/payslips" element={<Payslips/>} />
        <Route path="/settings" element={<Settings/>} />
       
       </Route>
        
        <Route path="/print/payslips/:id" element={<PrintPayslip/>} />
        <Route path="*" element={<Navigate to="/dashboard"  replace/>} />
      
      </Routes>
    </>
  )
}

export default App;