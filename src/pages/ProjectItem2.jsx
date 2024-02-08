import React from 'react'

const ProjectItem2 = ({name, desc , contribution}) => {
  return (
    <div className='m-2 mx-5 sm:m-5  sm:w-full text-center bg-gray-200  py-3 shadow-1xl rounded-sm sm:rounded-full'>
      <h1 >
        <span className=' font-bold text-2xl text-blue-700'>{`${name} -->`}</span>
        <span className=' font-thin text-2xl'>{desc}</span>
        </h1>
      <p className=' font-bold'>{`( ${contribution} )`}</p>
    </div>
  )
}

export default ProjectItem2
