import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggelMenu, setToggleMenu] = useState(false);
    
    
    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold font-siva-font text-black" href="#">Siva Kadarkarai</a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contacts">Contacts</a></li>
            </ul>
        </nav>
        {toggelMenu && <nav className="block md:hidden">
            <ul onClick={()=>setToggleMenu(!toggelMenu)} className="flex flex-col text-white mobile-nav" >
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contacts">Contacts</a></li>
            </ul>
        </nav>}
        <button className='block md:hidden' onClick={()=> setToggleMenu(!toggelMenu)}>
            <Bars3Icon className='text-white h-5'/>
        </button>
    </header>

}