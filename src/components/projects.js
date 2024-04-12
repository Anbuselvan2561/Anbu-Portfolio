import E_commerce from "../assets/e-commerce.png"
import E_commerce_1 from "../assets/e-commerce-2.png"

function Project(){

  const config = {
    projects:[
      {
        image:E_commerce,
        description:"A E-commerce website build with Javascript, HTML, CSS, API, MongoDB.",
        link:"https://e-commerce-project-beryl-one.vercel.app/"
      },
      {
        image:E_commerce_1,
        description:"build E-commerce website using of React.js, Express.js, MongoDB and Bootstrap",
        link:"https://anbucart-website-1.onrender.com"
      }
    ]
  }

    return(
        <section id='projects' className="flex flex-col p-5 justify-center bg-secondary py-10">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl text-white border-primary mb-3 border-b-4 m-b-5 w-[150px] font-bold'>Projects</h1>
                <p className='text-white' >These are of my projects. I have build these with React, MERN and TailwindCSS. Check them out.</p>
                </div> 
            </div>

            <div className="w-full">
               <div className="flex flex-col md:flex-row px-10 gap-5">
                {config.projects.map((project)=>(
                  <a href={project.link}>
                  <div className="relative"> 
                  <img className="h-[200px] w-full md:w-[500px]" src={project.image}/>
                  <div className="project-desc">
                    <p className="text-center p-5">{project.description}</p>
                    <div className='flex justify-center'>
                      <a className='btn' target='_blank' href={project.link}>View Project</a>
                    </div>
                  </div>
                </div>
                </a>
                ))}
               </div>
            </div>
        </section>
    )
};

export default Project;