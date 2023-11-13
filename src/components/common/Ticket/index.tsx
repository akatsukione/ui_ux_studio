import React from 'react'
import Img from 'assets/avatar3.png'

export const TicketComponent: React.FC = () => {
  return (
    <div className="p-4 mt-3 w-60 rounded-xl bg-white">
      <button className="bg-purple-700 text-white px-3 py-1 rounded">
        Visual
      </button>

      <img src={Img} className="my-4 w-full h-28 rounded-2xl" alt="No Img" />
      <h2 className="text-black font-dm-sans text-sm not-italic font-medium leading-normal">
        Heading title{' '}
      </h2>
      <p className="my-2 text-gray-600 font-dm-sans text-sm no-italic font-medium leading-normal">
        Lorem ipsum sit dolor amet ipsum
      </p>
      <div className="inline px-2 py-1 my-1 rounded bg-gray-200 text-gray-700 font-dm-sans text-xs not-italic font-medium leading-normal">
        July 10, 2023
      </div>
    </div>
  )
}
