import AboutImg from '../asstes/about.png';


export default function About() {
    return <section className='flex flex-col md:flex-row bg-secountry px-5' id="about">
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-primary border-b-4 mb-5 w-[170px] font-bold'>About Me</h1>
                <p>My technical skills include but are not limited to:
                    React JS,JavaScript, HTML, CSS, Python, Django, and SQL. I am also well-versed in software development methodologies,
                    including Agileand Scrum. With a strong commitment to continuous learning,
                    I amalways looking for opportunities to expand my knowledge and stayup-to-date with the latest industry trends.</p>
            </div>
        </div>
    </section>
}