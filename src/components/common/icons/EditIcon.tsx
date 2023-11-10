import React from 'react'

export const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M5.83337 5.83325H5.00004C4.55801 5.83325 4.13409 6.00885 3.82153 6.32141C3.50897 6.63397 3.33337 7.05789 3.33337 7.49992V14.9999C3.33337 15.4419 3.50897 15.8659 3.82153 16.1784C4.13409 16.491 4.55801 16.6666 5.00004 16.6666H12.5C12.9421 16.6666 13.366 16.491 13.6786 16.1784C13.9911 15.8659 14.1667 15.4419 14.1667 14.9999V14.1666"
        stroke="#252C32"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 4.16663L15.8333 6.66663M16.9875 5.48747C17.3157 5.15926 17.5001 4.71412 17.5001 4.24997C17.5001 3.78581 17.3157 3.34067 16.9875 3.01247C16.6593 2.68426 16.2142 2.49988 15.75 2.49988C15.2858 2.49988 14.8407 2.68426 14.5125 3.01247L7.5 9.99997V12.5H10L16.9875 5.48747Z"
        stroke="#252C32"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
