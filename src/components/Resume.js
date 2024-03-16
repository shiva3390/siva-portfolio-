import ResumeImg from '../asstes/resume.jpg';


export default function Resume() {
    return <section className='flex flex-col md:flex-row bg-secountry px-5' id='resume'>
        <div className='py-5 md:w-1/2 justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-primary border-b-4 mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='my-2'>You can view my resume  <a className='btn' href='#'>Download</a></p>
            </div>
        </div>
    </section>
}