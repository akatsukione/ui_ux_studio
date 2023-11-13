// import { PATH } from 'consts';
import React from 'react'
import {
  GridIcon,
  HelpIcon,
  SettingIcon,
  TelgrmIcon,
  //   EditIcon,
  //   ListIcon,
} from 'components'

import LogoImg from 'assets/logo-blk.png'

export const SidebarComponent: React.FC = () => {
  return (
    <div className="w-20 h-screen">
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
      >
        <div className="h-full overflow-y-auto">
          <div>
            <img src={LogoImg} alt="" className="w-12 h-11 mx-5 my-3" />
          </div>
          <ul className="space-y-2 mt-14 font-medium">
            <li className="relative flex w-20 justify-center before:w-0 before:h-full before:absolute  before:right-1 before:bg-indigo-600 before:transition-all before:duration-500 hover:before:w-1 hover:before:h-full hover:before:right-1 hover:before:bg-indigo-600">
              <a
                href="#"
                className="relative p-3 text-gray-900 rounded-lg hover:bg-indigo-600 focus:bg-indigo-600 group"
              >
                <GridIcon className="group-hover:fill-white group-focus:fill-white fill-gray-400" />
              </a>
            </li>
            <li className="relative flex justify-center before:w-0 before:h-full before:absolute  before:right-1 before:bg-indigo-600 before:transition-all before:duration-500 hover:before:w-1 hover:before:h-full hover:before:right-1 hover:before:bg-indigo-600">
              <a
                href="#"
                className="p-3 text-gray-900 rounded-lg hover:bg-indigo-600 focus:bg-indigo-600 group"
              >
                <TelgrmIcon className="group-hover:stroke-white group-hover:fill-indigo-600 group-focus:stroke-white group-focus:fill-indigo-600 stroke-gray-400" />
              </a>
            </li>
            <li className="relative flex justify-center before:w-0 before:h-full before:absolute  before:right-1 before:bg-indigo-600 before:transition-all before:duration-500 hover:before:w-1 hover:before:h-full hover:before:right-1 hover:before:bg-indigo-600 active:before:w-1 active:before:h-full active:before:right-1 active:before:bg-indigo-600 ">
              <a
                href="#"
                className="p-3 text-gray-900 rounded-lg hover:bg-indigo-600 focus:bg-indigo-600 group"
              >
                <SettingIcon className="group-hover:fill-white group-focus:fill-white fill-gray-400" />
              </a>
            </li>
            <li className="relative flex justify-center before:w-0 before:h-full before:absolute  before:right-1 before:bg-indigo-600 before:transition-all before:duration-500 hover:before:w-1 hover:before:h-full hover:before:right-1 hover:before:bg-indigo-600 focus:before:w-1 focus:before:h-full focus:before:right-1 focus:before:bg-indigo-600">
              <a
                href="#"
                className="p-3 text-gray-900 rounded-lg hover:bg-indigo-600 focus:bg-indigo-600 group"
              >
                <HelpIcon className="group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white stroke-gray-400 fill-gray-400" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
