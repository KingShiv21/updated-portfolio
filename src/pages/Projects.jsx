import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectItem2 from './ProjectItem2'

const Projects = () => {

  let projectList = [

    {
      name : "Todo App",
      image : "./todo1.jpg",
      about :  "Create your daily tasks with the help of Todo App, which is safe and authenticated. React + vite in frontend and NodeJS + MongoDB in backend is used ",
      git : "https://github.com/KingShiv21/todo_frontend",
      deployment_link : "https://todo-frontend-one-gold.vercel.app/login"
    },
    
    {
      name : "Dashboard_1",
      image : "./dashboard.jpg",
      about :  "A beautiful dashboard of Ecommerce site using ChartsJS, recharts, react-icons, React+Vite , and nesting routing concept ",
      git : "https://github.com/KingShiv21/dashboard-react-tailwind",
      deployment_link : "https://dashboard-react-tailwind-lake.vercel.app/"
    },

    {
      name : "Ecommerce Backend",
      image : "./ecom.jpg",
      about :  "Complete set of APIs created in Node.js ready for connecting to any suitable Frontend comes with Authentication and MongoDB as database",
      git : "https://github.com/KingShiv21/Ecom_Backend",
      deployment_link : "#"
    }
  ]


  let interWork = [
    {
      name : "Intellix 360 project",
      desc : "A multiple schools data Management project",
      contribution :  "I contributed in creating its Frontend Logics & UI including API implementation",
    },
    {
      name : "Question APP",
      desc : "Questions Paper creating Responsive Web App for State and Private Boards",
      contribution :  "I contributed in creating Exam Paper formfill , Paper editing composition , Topics ,Courses , Questions ,etc.",
    },
    {
      name : "Tips-G App",
      desc : "A Learning & Academics Based App for both students and instructors like Unacademy",
      contribution :  "I contributed in Creating Quizzes , Courses Management , Login & Register , and other Frontend parts",
    },



  ]



  return (
    <div className=' mt-3 mb-5'>
      <div className=' bg-cyan-800 w-fit mx-auto rounded-full px-3 sm:px-5 shadow-1xl'>
        <h1 className=" py-3  sm:py-5 text-1xl sm:text-3xl  text-yellow-500 font-bold text-center">Personal & Learning Projects</h1>
      </div>

 
      <div className='mt-5 sm:flex sm:flex-wrap justify-center '>
        {projectList.map(
          (project)=>{
           return <ProjectItem image={project.image} name={project.name} about={project.about} git_link={project.git} deployment_link = {project.deployment_link} />
          }
        )}

      </div>


      <div className=' bg-cyan-800 w-fit mx-auto rounded-full px-3 sm:px-5 shadow-1xl mt-10'>
        <h1 className=" py-3  sm:py-5 text-1xl sm:text-3xl  text-yellow-500 font-bold text-center">Work in Internship Projects</h1>
      </div>

      <div className='mt-5 sm:flex sm:flex-wrap justify-center '>
        {interWork?.map(
          (project)=>{
           return <ProjectItem2 name={project.name} desc={project.desc} contribution={project.contribution}/>
          }
        )}

      </div>
    </div>
  )
}

export default Projects
