import {useState} from "react";
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map( ({id, name, href}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Oksana
                    </a>

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}alt="toggle" className="w-6 h-6 cursor-pointer" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <NavItems />
            </div>
        </header>
    )
};

export default Navbar;
