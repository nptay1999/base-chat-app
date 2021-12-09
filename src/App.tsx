import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChatRoom from "./components/ChatRoom"
import Login from "./components/Login"
import AuthProvider from "./context/AuthContext"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ChatRoom />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
