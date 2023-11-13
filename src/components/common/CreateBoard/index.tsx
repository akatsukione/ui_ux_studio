import React from 'react'
// import { BulletIcon, PlusIcon } from 'components'

// interface IssueProps {
//   title: string
//   num: number
//   color: string
// }
export const CreateBoardComponent: React.FC = () => {
  // const { title, num, color } = props
  return (
    <div className={`flex flex-col mt-5 w-60 rounded-xl bg-white px-3 py-6`}>
      <p className={`text-black block p-1 font-roboto text-sm font-medium`}>
        Board Title <span className="text-rose-600">*</span>
      </p>
      <form action="">
        <div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 my-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter a Board Name"
            required
          />
        </div>
        <button className="hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg my-1 bg-indigo-600">
          Create a Board
        </button>
      </form>
    </div>
  )
}
