import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  SignInPage,
  SignUpPage,
  ForgotPwdPage,
  VerifyCodePage,
  PwdSuccessPage,
  DashboardPage,
} from 'pages'

import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/forgot-pwd" element={<ForgotPwdPage />}></Route>
          <Route path="/verify-code" element={<VerifyCodePage />}></Route>
          <Route path="/pwd-success" element={<PwdSuccessPage />}></Route>
          <Route path="/dashboard/*" element={<DashboardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
