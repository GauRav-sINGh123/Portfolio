import React from 'react'

function About() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <img src="/profile.webp" alt="" className='rounded-full w-[160px] transition-all shadow-xl cursor-pointer hover:shadow-indigo-600 hover:scale-105 ease-in-out'  />
      <div className="flex flex-col justify-center items-center mt-6 gap-2 text-white">
         <h3 className='text-2xl'> Hi</h3>
         <h1 className='text-4xl  font-bold'>Gaurav Singh</h1>
         <p>I'm a Front-End Developer.</p>
      </div >
     <div className="flex justify-between gap-6">
     <a href='https://www.linkedin.com/in/gaurav-singh-746916238/' target="_blank" className='bg-blue-600 w-[200px] text-center text-white rounded-md font-medium my-6 mx-auto py-3 hover:shadow-violet-700 mt-6 shadow-lg hover:scale-105 transition-all ease-in-out'>
        Let's Connect</a>
      <a href='https://github.com/GauRav-sINGh123'  target="_blank" className='bg-[#000101] w-[200px] text-center  text-white rounded-md font-medium my-6 mx-auto py-3 hover:shadow-violet-700 shadow-lg hover:scale-105 transition-all ease-in-out'>
        GitHub</a>
     </div>
    </div>
  )
}

export default About
