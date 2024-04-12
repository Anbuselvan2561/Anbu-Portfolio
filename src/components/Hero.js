import HeroImg from'../assets/hero.png'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

function Hero(){

    const config ={
        subtitile:"Im a Full-Stack Developer",
        social:{
            instagram:'https://www.instagram.com/anxbu._?igsh=cWJic2NtaTAxbXRw',
            Linkedin:'https://www.linkedin.com/in/anbu-selvan-4274252b3',
            Github:'https://github.com/Anbuselvan2561'
        }
    }
    return(
        <section  className='flex flex-col px-5 py-32 bg-secondary justify-center md:flex-row' id='home'>
            <div className=' md:w-1/2 flex flex-col'> 
            <h1 className=' text-white text-6xl font-hero-font'>Hi ,<br/>
                 Im Anbuselvan
            <p className='text-2xl'>{config.subtitile}</p>
            </h1>
            <div className='flex py-10'>
            <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram  size={40}/></a>
            <a href={config.social.Linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>
            </div>
            <img className='md:w-1/3 w-1/2 ' src={HeroImg} />
        </section>
    )
 
}
export default Hero;