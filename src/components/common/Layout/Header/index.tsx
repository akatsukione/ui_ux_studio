// import { PATH } from 'consts';
import React from 'react'
import {
  ArrowDownIcon,
  BellIcon,
  BoardIcon,
  CalendarIcon,
  EditIcon,
  ListIcon,
} from 'components'

import AvatarImg from 'assets/avatar.svg'

export const HeaderComponent: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className="flex justify-between bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 mx-3">
        <div className="flex flex-wrap items-center justify-between p-4">
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent gap-2"
                >
                  <BoardIcon className="fill-current text-gray-800" />
                  Board
                  <ArrowDownIcon />
                </button>
                <div
                  id="dropdownNavbar"
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-xl shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="flex justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Tasks
                        <EditIcon />
                      </a>
                    </li>

                    <li>
                      <a
                        href="/create-board"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Create a Board
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent gap-2"
                >
                  <ListIcon className="fill-current text-gray-800" />
                  List
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent gap-2"
                >
                  <CalendarIcon className="fill-current text-gray-800" />
                  Calendar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center py-4 pr-10">
          <button className="hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg bg-indigo-600">
            + Create New Task
          </button>
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg mx-11"
          >
            <BellIcon />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full top-1 right-1 dark:border-gray-900">
              12
            </div>
          </button>
          <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={AvatarImg} alt="" />
            <div className="text-gray-700 font-roboto leading-normal">
              <div className="text-base font-medium ">avtanwar</div>
              <div className="text-xs font-normal">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
