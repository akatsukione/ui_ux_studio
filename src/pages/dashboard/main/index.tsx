import React from 'react'
import { WithLayout } from 'components'
import { DashboardContainer } from 'containers'

const Dashboard: React.FC = () => {
  return <DashboardContainer />
}

export const DashboardPage: React.FC = WithLayout(Dashboard)
