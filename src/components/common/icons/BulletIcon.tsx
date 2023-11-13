import React from 'react'

export const BulletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <circle cx="5" cy="5" r="5" fill="#BDBDBD" />
    </svg>
  )
}
