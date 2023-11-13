import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { DashboardHomePage } from './main'
import { DashboardCreateBoardPage } from './createBoard'

import { WithLayout } from 'components'

export const DashboardPage: React.FC = WithLayout(() => {
  return (
    <Routes>
      <Route path="/create-board" element={<DashboardCreateBoardPage />} />
      <Route path="/main" element={<DashboardHomePage />} />
    </Routes>
  )
})
