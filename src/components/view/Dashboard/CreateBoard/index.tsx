import React from 'react'

// import AvatarImg1 from 'assets/avatar1.jpg'
// import AvatarImg2 from 'assets/avatar2.jpg'
// import AvatarImg3 from 'assets/avatar3.png'
import { CreateBoardComponent } from 'components'

export const CreateBoardView: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen p-6">
      <div className="text-gray-800 font-bold leading-tight tracking-tighter text-5xl my-8 mx-1">
        Create a Board
      </div>

      <div className="flex gap-4 justify-start">
        <div className="flex flex-col">
          <CreateBoardComponent />
        </div>
      </div>
    </div>
  )
}
