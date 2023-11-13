import React from 'react'

import AvatarImg1 from 'assets/avatar1.jpg'
import AvatarImg2 from 'assets/avatar2.jpg'
import AvatarImg3 from 'assets/avatar3.png'
import { IssueComponent, TicketComponent } from 'components'

export const DashboardMainView: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen px-6 py-9">
      <div className="text-gray-700 font-normal leading-tight tracking-tighter text-sm">
        Projects &nbsp;&nbsp; &gt; &nbsp;&nbsp; My Tasks
      </div>
      <div className="text-gray-800 font-bold leading-tight tracking-tighter text-5xl mt-2">
        My Tasks
      </div>

      <div className="flex -space-x-3 rtl:space-x-reverse my-4">
        <img
          className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
          src={AvatarImg1}
          alt=""
        />
        <img
          className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
          src={AvatarImg2}
          alt=""
        />
        <img
          className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
          src={AvatarImg3}
          alt=""
        />
        <a
          className="flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-indigo-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
          href="#"
        >
          2
        </a>
      </div>
      <div className="flex gap-4 justify-start">
        <div className="flex flex-col">
          <IssueComponent title="Backlog" num={20} color="gray-400" />
          <TicketComponent />
          <TicketComponent />
        </div>
        <div className="flex flex-col">
          <IssueComponent title="Backlog" num={20} color="gray-400" />
          <TicketComponent />
          <TicketComponent />
        </div>
      </div>
    </div>
  )
}
