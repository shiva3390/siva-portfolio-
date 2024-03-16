import HeroImag from '../asstes/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";



export default function Main() {
    const config = {
        subtitle:"I'm Python Developer"
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='mani'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-8xl font-sri-font'>
                Hi, <br /> Im Siva
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                <a href='https://www.linkedin.com/in/siva-339-python/'target="_blank"className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImag} />
    </section>
}