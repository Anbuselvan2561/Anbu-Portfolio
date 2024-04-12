import AboutImg from '../assets/about.png'

function About(){

    const config = {
        line1:'Hi, My name is Anbuselvan. I am a Full-stack web developer. I build beautiful websites with ReactJS and TailwindCSS',
        line2:'I am proficient in Frontend skills like React.js,Bootstrap,Bootstrap5,TailwindCSS,CSS and many more.',
        line3:'In backend i know Express.js,MongoDB,API.'
    }
    return(
        <section id='about' className='flex flex-col md:flex-row bg-primary px-5'>
            <div className='md:w-1/2 py-5'>
                <img className='' src={AboutImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-[#2b2d77] mb-3 border-b-4 m-b-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p  className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                </div>
                
            </div>
        </section>

    )
}

export default About;