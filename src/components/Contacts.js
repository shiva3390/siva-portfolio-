import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";


export default function Contacts() {
    return (
        <section className='flex flex-col bg-primary px-5 py-32' id="contacts">
            <div className='flex flex-col items-center text-white'>
                <h1 className='text-4xl border-secountry border-b-4 mb-5 w-[150px] font-bold'>Contacts</h1>
                <p className="pb-5">If you want more details, please contact me.</p>
                    <ul className="flex flex-col text-white">
                        <li className="flex items-center">
                            <IoLocationSharp className="mr-2" />
                            <span>3/41, Palpannai ST, Sundaranachiapuram.</span>
                        </li>
                        <li className="flex items-center">
                            <FiPhone className="mr-2" />
                            <span>+91-8220642296</span>
                        </li>
                        <li className="flex items-center">
                            <AiOutlineMail className="mr-2" />
                            <span>siva339h@gmail.com</span>
                        </li>
                    </ul>

            </div>
        </section>
    );
}
