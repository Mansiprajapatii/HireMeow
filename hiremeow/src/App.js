import React from "react";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route  exact path="/signup" element={<Signup/>} />
        <Route exact path="/dash" element={<Dashboard />} />


      



        <Route exact path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}

export default App;
