import React from 'react'
import { BulletIcon, PlusIcon } from 'components'

interface IssueProps {
  title: string
  num: number
  color: string
}
export const IssueComponent: React.FC<IssueProps> = (props) => {
  const { title, num, color } = props
  return (
    <div
      className={`flex items-center mt-5 w-60 h-14 rounded-xl bg-white text-${color}`}
    >
      <BulletIcon className={`fill-${color} mx-2`} />
      <p className={`text-${color}`}>
        {title}({num})
      </p>
      <PlusIcon className="ml-20" />
    </div>
  )
}
