import HtmlLogo from '../asstes/html-logo.svg';
import PostgresqlLogo from '../asstes/postgresql.svg';
import ReactLogo from '../asstes/react-2.svg';
import PythonLogo from '../asstes/python.svg';
import GithubLogo from '../asstes/github.svg';
import DjangoLogo from '../asstes/django.svg';
import JiraLogo from '../asstes/jira.svg';
import CssLogo from '../asstes/css.svg';
import TailwindLogo from '../asstes/tailwind.svg';
import JsLogo from '../asstes/javascript.svg';
import JqueryLogo from '../asstes/jquery.svg';
import { useRef, useState, useEffect } from 'react';

const logos = [
    { name: 'Python', logo: PythonLogo },
    { name: 'Django', logo: DjangoLogo },
    { name: 'HTML', logo: HtmlLogo },
    { name: 'CSS', logo: CssLogo },
    { name: 'Tailwind', logo: TailwindLogo },
    { name: 'JavaScript', logo: JsLogo },
    { name: 'jQuery', logo: JqueryLogo },
    { name: 'React', logo: ReactLogo },
    { name: 'Github', logo: GithubLogo },
    { name: 'Jira', logo: JiraLogo },
    { name: 'Postgresql', logo: PostgresqlLogo },
    
    
];


const Marquee = ({ logos }) => {
    const marqueeRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const containerWidth = marquee.offsetWidth;
        const contentWidth = marquee.scrollWidth;

        // Start at the beginning
        marquee.scrollLeft = 0;

        // Scroll logic handled by useInterval hook
        const scroll = () => {
            if (!isPaused) {
                marquee.scrollLeft += 1;
                if (marquee.scrollLeft >= contentWidth - containerWidth) {
                    marquee.scrollLeft = 0;
                }
            }
        };

        const intervalId = setInterval(scroll, 10);

        return () => clearInterval(intervalId);
    }, [isPaused]);

    return (
        <div
            ref={marqueeRef}
            className="marquee-container overflow-hidden whitespace-nowrap  p-4 flex space-x-5 items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {logos.map((logo, index) => (
                <div key={index} className="inline-block transition-transform duration-300 transform hover:scale-105">
                    <div className="h-40 w-40 flex flex-col justify-center items-center relative rounded-lg overflow-hidden shadow-md bg-gray-200 hover:bg-gray-300">
                        <img className="w-20 h-20 object-cover" src={logo.logo} alt={logo.name} />
                        <h2 className="text-black text-center mt-2">{logo.name}</h2>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                            <h3 className="text-white text-center">{logo.name}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default function Skills() {
    return (
        <section className="flex flex-col lg:flex-row py-5 px-5 items-center lg:items-start w-full justify-center bg-primary text-white" id="projects">
            <div className="flex flex-col justify-center"> 
                <h1 className="text-4xl border-secountry border-b-4 mb-5 w-[80px] font-bold text-center">Skills</h1>
            </div>
            <div className="w-full overflow-x-auto">
                <Marquee logos={logos} /> 
            </div>
        </section>
    );
}

