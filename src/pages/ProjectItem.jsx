import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const ProjectItem = ({image,name,about,git_link,deployment_link}) => {
  return (
    <div className='mx-5 sm:w-1/4 sm:mx-5 my-5  text-center bg-gray-200 sm:bg-white py-3 sm:shadow-2xl'>
     <Link to={deployment_link}> <img src={image} alt="Image not found" className=' w-48 h-48 mx-auto'/></Link>
      <h1 className=' font-bold text-2xl'>{name}</h1>
      <a href={git_link}><GitHubIcon fontSize='large'/></a>
      <p className=' font-thin'>{about}</p>
    </div>
  )
}

export default ProjectItem
