import { useState } from "react";
import { NAVIGATION_LINKS } from '../../constants/index';
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../../assets/logo.png";

const Navbar = () => {
    // mobile version checks current userState to determine if true or false
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // handleLinkClick function to prevent default behavior of anchor tag and scroll to the target element
    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        // Fixed navbar: if hyperlink exist will scroll to the target element value
        if(targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top; 
            const offsetPosition = elementPosition + window.scrollY+ offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false); 
    };

    return (
        <div>
            {/* navbar z-index position fixed at the top with some gap */}
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                {/* MX auto to center navbar and have it hidden on small screen by default */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                {/* Display logo + links */}
                <div className="flex items-center justify-between gap-6">
                    <div>
                        <a href="#">
                            <img src={logo} width={150} alt="logo" />
                        </a>
                    </div>
                    {/* Navbar Tabs */}
                    <div>
                        <ul className="flex items-center gap-4">
                            {/* Navigation links declared in constants folder index.jsx file */}
                            {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                
                                <a className="text-sm hover:text-sm hover:text-yellow-400"  
                                href={item.href} 
                                onClick={(e) => handleLinkClick(e, item.href)} > {item.label}
                                </a> 
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="rounded-lg 
            backdrop-blur-md lg:hidden">
                <div className="flex items-center justify-between">
                    <div> 
                        <a href="#">
                            <img src={logo}
                            alt="logo" width={90}
                            className="m-2"/>
                        </a>
                    </div>
                    {/* Menu button */}
                    <div className="flex items-center">
                        <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <FaTimes className="m-2 h-6 w-5" />
                            ): (
                                <FaBars className="m-2 h-6 w-5"/>
                            )}
                        </button> 
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}
                                    className="block w-full text-lg" onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            </nav>
        </div>
    );
};

export default Navbar;