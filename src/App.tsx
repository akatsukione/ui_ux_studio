import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignInPage } from 'pages'
import './App.css'
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
