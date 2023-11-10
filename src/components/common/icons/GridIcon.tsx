import React from 'react'

export const GridIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 9.22144V3.22144H21V9.22144H13ZM3 13.2214V3.22144H11V13.2214H3ZM13 21.2214V11.2214H21V21.2214H13ZM3 21.2214V15.2214H11V21.2214H3ZM5 11.2214H9V5.22144H5V11.2214ZM15 19.2214H19V13.2214H15V19.2214ZM15 7.22144H19V5.22144H15V7.22144ZM5 19.2214H9V17.2214H5V19.2214Z" />
    </svg>
  )
}
