 import ResumeImg from '../assets/resume.jpg';

function Resume(){

    const config = {
        link:'https://docs.google.com/file/d/17brwnO1O3ovqlDCrr7VEVE7qFyuyRaNl/edit?usp=docslist_api&filetype=msword'
    }

    return(
        <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
            <div className='md:w-1/2 py-5 flex justify-end sm:justify-start' >
                <img className='w-[300px]' src={ResumeImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-[#2b2d77] mb-3 border-b-4 m-b-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
        
                </div>
                
            </div>
        </section>

    )
}

export default Resume;