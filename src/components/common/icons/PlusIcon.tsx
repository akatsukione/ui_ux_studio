import React from 'react'

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect width="24" height="24" rx="7" fill="#EBECFB" />
      <rect x="11" y="7" width="2" height="10" fill="#6772FE" />
      <rect
        x="7"
        y="13"
        width="2"
        height="10"
        transform="rotate(-90 7 13)"
        fill="#6772FE"
      />
    </svg>
  )
}
