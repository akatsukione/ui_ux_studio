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
        className="fixed top-0 left-0 z-40 w-21 h-screen transition-transform -translate-x-full sm:translate-x-0"
      >
        <div className="h-full overflow-y-auto">
          <div>
            <img src={LogoImg} alt="" className="w-12 h-11 mx-5 my-3" />
          </div>
          <ul className="space-y-2 font-medium">
            <li className="flex justify-center">
              <a
                href="#"
                className="p-3 text-gray-900 rounded-lg hover:bg-indigo-600"
              >
                <GridIcon className="fill-gray-500" />
              </a>
            </li>
            <li className="flex justify-center">
              <a
                href="#"
                className="p-3 text-gray-900 rounded-lg hover:bg-indigo-600"
              >
                <TelgrmIcon className="hover:stroke-white hover:fill-indigo-600" />
              </a>
            </li>
            <li className="flex justify-center">
              <a
                href="#"
                className="p-3 text-gray-900 rounded-lg hover:bg-indigo-600"
              >
                <SettingIcon className="fill-gray-500" />
              </a>
            </li>
            <li className="flex justify-center">
              <a
                href="#"
                className="p-3 text-gray-900 rounded-lg hover:bg-indigo-600"
              >
                <HelpIcon className="stroke-gray-500" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
