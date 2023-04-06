import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "./pages/Login/Login";
import DashBoardLayout from "./layout/DashBoardLayout/DashBoardLayout";
import UsersPage from "./pages/UsersPage/UsersPage";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>


          <Route element={<DashBoardLayout/>}>
            <Route path="/users" element={<UsersPage/>}/>
              
          </Route>

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App
