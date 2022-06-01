import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
