import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Home = () => {
  return (
    <div >
      <div className=' bg-black pb-5'>

        <div className=' text-white text-center pt-5' >
          <h1 className=" text-4xl  text-yellow-500 font-bold " >I'm Shivraj </h1>
          <h3 className=" text-xl">Full stack web developer and coder</h3>


        </div>


        <div className="mt-10 text-xl ">

          <ul className="flex justify-center space-x-5">

            <li><a target='_blank' href='https://wa.me/917665006920' className='py-3 px-3 text-blue-700 bg-gray-900 rounded-md border-2 border-yellow-400'  ><WhatsAppIcon fontSize='large'/></a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/shivraj-singh-rathore-ba9b57275/' className='py-3 px-3 text-blue-700 bg-gray-900 rounded-md border-2 border-yellow-400' ><LinkedInIcon fontSize='large'/></a></li>
            <li><a target='_blank' href='https://github.com/KingShiv21/' className='py-3 px-3 text-blue-700 bg-gray-900 rounded-md border-2 border-yellow-400' ><GitHubIcon fontSize='large'/></a></li>
          </ul>

        </div>

        <div className=" mt-10 ">
          <img src="./profile.jpeg" alt="not found" className=' w-60 h-60 m-auto rounded-full ' />
        </div>


        <div>
        <h1 className=" text-2xl  text-yellow-500 font-bold pt-5 text-center" >Skills</h1>


<ul className=" px-1 text-left sm:text-center text-sm sm:px-20:px-3:pt-1  text-white" style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , gap:"0.5rem"}}>
  <li className='py-1 bg-gray-900 w-fit rounded-full px-5 mx-auto'>JavaScript , Java and C language.</li>
  <li  className='py-1 bg-gray-900 w-fit rounded-full px-5 mx-auto'>Node JS (Express)</li>
  <li className='py-1 bg-gray-900 w-fit rounded-full px-5 mx-auto'>MySQL ( KNEX ORM )</li>
  <li className='py-1 bg-gray-900 w-fit rounded-full px-5 mx-auto'>MongoDB</li>
  <li className='py-1 bg-gray-900 w-fit rounded-full px-5 mx-auto'>GitHub</li>
  <li className='py-1 bg-gray-900 w-fit rounded-full px-5 mx-auto'>ChatGPT </li>

</ul>
          
        </div>
        <div>
        <h1 className=" text-2xl  text-yellow-500 font-bold pt-5 text-center" >About me  </h1>

<ul className=" px-1 text-left  sm:text-center text-sm sm:px-20:px-3:pt-1  text-white">
  <li className='py-1'>{<ArrowForwardIcon />}Hello, I am Shivraj Singh Rathore from Jaipur,India.</li>
  <li  className='py-1'>{<ArrowForwardIcon/>}I am currently completing my final year of BCA in S.S. Jain Subodh College ,Jaipur</li>
  <li className='py-1'>{<ArrowForwardIcon/>}I am also having my first on site internship of 3  months as a role of MERN Stack Developer at WeRNS It Sol. , Jaipur </li>


</ul>
          
        </div>

      </div>

      <div className='mx-2 sm:mx-10'>
        <div className='mt-10'>

          <div>
            <h3 className=' text-2xl font-bold text-center'>Services and Skills</h3>
            <p>
              First, i started my journey in Programming then headed to Web Development. Currently, I am giving my full time in Web Development specially MERN Stack and providing services in both the Frontend and Backend of websites including their database too
            </p>
          </div>

          <div className="my-10">
            <h2 className=' text-xl font-thin '>Front End Web</h2>
            <p>I've very good command over HTML,CSS and JavaScript</p>
            <p>I am skilled in ReactJS and have created many learning to small to large work samples in ReactJS  </p>
            <p>I use TailwindCss and MUI for designing work , also have core knowledge of simple CSS</p>

          </div>

          <div className="my-10">
            <h2 className=' text-xl font-thin '>Back End Web</h2>
            <p> I've good skills of creating APIs </p>
            <p> I use NodeJs , specially its express framework to create fully functional real world based backends like for Ecommerce , NFTs marketlace, etc. </p>
            <p> In Databases , i am skilled in using MySQL and MongoDB both .</p>
          </div>

          <div className="my-10">
            <h2 className=' text-xl font-thin '>Programming</h2>
            <p> I started my Programming or even computer science journey from learning C language ,then jumped to C++ and finally JAVA. Out of all, i gave my most of the time and hardwork on mastering JAVA language. JAVA is my favourite Programming language and i also possesses good knowledge of its framework like Collection framework.
            </p>
            <p>I alse possess good knowledge of Data Structures and Algorithms, learned in Java language</p>
          </div>


          <div className='my-10'>
            <h3 className=' text-2xl font-bold text-center mb-1'>My Goals & Objective</h3>
            <p>
            Eager and motivated MERN stack developer with a solid foundation in React.js, Node.js ( Express.js ) , MySQL with KNEX ORM ,MongoDB , responsive and beautiful designing gained through 3-month internship and years of learning , seeking to leverage my internship experience and passion for full-stack development to contribute to a dynamic team where I can continue to grow my skills and make meaningful contributions to innovative web projects
            </p>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Home
