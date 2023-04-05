import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "./pages/Login/Login";
import DashBoardLayout from "./layout/DashBoardLayout/DashBoardLayout";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>


        <Route element={<DashBoardLayout/>}>
          <Route path="/users" element={<UsersPage/>}/>
            
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
