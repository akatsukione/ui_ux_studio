import React from 'react'
import { HeaderComponent } from './Header'
import { SidebarComponent } from './Sidebar'

interface LayoutProps {
  children?: React.ReactNode
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <SidebarComponent />
      <div className="w-full">
        <HeaderComponent />
        {children}
      </div>
    </div>
  )
}

// HOC WithLayout (Higher Order Component)
// eslint-disable-next-line @typescript-eslint/naming-convention
export const WithLayout = (Component: React.FC): React.FC => {
  // eslint-disable-next-line react/display-name
  return () => (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  )
}
