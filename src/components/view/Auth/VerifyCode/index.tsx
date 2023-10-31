import React from 'react'
import personImg from 'assets/person.svg'
import logoImg from 'assets/logo-blk.png'
import pinkBgImg from 'assets/pink-bg.png'

export const VerifyCodeView: React.FC = () => {
  return (
    <div className="bg-[url('assets/sidebar-bgimg.png')] bg-no-repeat">
      <img src={pinkBgImg} className="absolute" alt="pink Img" />
      <div className="container flex mx-auto max-w-[1440px] min-h-screen bg-[url('assets/pink-bg.png')] bg-no-repeat">
        <img className="ml-60 mt-32 mb-24 mr-20" src={personImg} alt="" />
        <div className="flex flex-col mr-26 justify-center items-center">
          <img className="mt-18 mb-4" src={logoImg} alt="" />
          <div className="flex flex-col items-center rounded-3xl shadow shadow-white/15">
            <h1 className="tracking-0.5 leading-7 font-extrabold not-italic text-2xl font-poppins text-333333 mt-11">
              Forgot Password?
            </h1>
            <h6 className="text-333333 font-poppins text-xs not-italic font-normal leading-7 tracking-0.5 mb-6">
              Enter your email. We will send you 4 digit Code
            </h6>
            <div className="flex flex-row gap-5">
              <input
                type="text"
                className="w-20 h-20 rounded-2xl border border-C3C3C3 font-poppins font-normal leading-7 text-4xl  text-center"
              />
              <input
                type="text"
                className="w-20 h-20 rounded-2xl border border-C3C3C3 font-poppins font-normal leading-7 text-4xl  text-center"
              />
              <input
                type="text"
                className="w-20 h-20 rounded-2xl border border-C3C3C3 font-poppins font-normal leading-7 text-4xl  text-center"
              />
              <input
                type="text"
                className="w-20 h-20 rounded-2xl border border-C3C3C3 font-poppins font-normal leading-7 text-4xl  text-center"
              />
            </div>
            <span className="text-rose-600 mt-4">00.30</span>
            <div className="relative m-6">
              <button className="w-96 h-14 bg-575DFB rounded-[30px] text-white font-poppins text-16 not-italic font-medium tracking-[-0.176px] leading-7">
                Continue
              </button>
            </div>
            <div>
              <span className="text-black text-opacity-50 font-poppins not-italic text-base font-normal leading-9">
                If you didn’t receive the code! &nbsp;
              </span>
              <a
                className="font-poppins font-semibold text-rose-600 leading-9"
                href="/signup"
              >
                Resend
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
