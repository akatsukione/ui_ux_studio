import React from 'react'
import personImg from 'assets/person.svg'
import logoImg from 'assets/logo-blk.png'
import checkImg from 'assets/check.png'
import pinkBgImg from 'assets/pink-bg.png'

export const PwdSuccessView: React.FC = () => {
  return (
    <div className="bg-[url('assets/sidebar-bgimg.png')] bg-no-repeat">
      <img src={pinkBgImg} className="absolute" alt="pink Img" />
      <div className="container flex mx-auto max-w-[1440px] min-h-screen bg-[url('assets/pink-bg.png')] bg-no-repeat">
        <img className="ml-60 mt-32 mb-24 mr-20" src={personImg} alt="" />
        <div className="flex flex-col mr-26 justify-center items-center">
          <img className="mt-18 mb-4" src={logoImg} alt="" />
          <div className="flex flex-col items-center rounded-3xl shadow shadow-white/15">
            <img className="mt-11 mb-5" src={checkImg} alt="" />

            <p className="w-64 text-center font-poppins text-4 not-italic font-medium leading-5 text-333333">
              Your password has <br /> been reset Successfully
            </p>
            <div className="relative m-6">
              <button className="w-96 h-14 bg-575DFB rounded-[30px] text-white font-poppins text-16 not-italic font-medium tracking-[-0.176px] leading-7">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
