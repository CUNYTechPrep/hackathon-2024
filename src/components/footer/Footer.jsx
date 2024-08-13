import logo from '../../assets/logo.png';
import { SOCIAL_MEDIA_LINKS } from '../../constants';

const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center">
                <img src={logo} width={200} className="my-10" alt="Logo" />
            </div>
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((item, index) => (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                ))}
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy; compileTab. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
