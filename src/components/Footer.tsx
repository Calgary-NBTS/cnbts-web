import { FaFacebook, FaDiscord, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="p-4 bg-gradient-to-b from-sky-300 to-sky-400">
            <div className="m-2">
                <p>Come join us at any or all of the below platorms.</p>
            </div>
            <div className="m-2 flex gap-4 text-4xl">
                <div><a href="" rel="noopener noreferrer"><FaFacebook /></a></div>
                <div><a href="" rel="noopener noreferrer"><FaDiscord /></a></div>
                <div><a href="" rel="noopener noreferrer"><FaSquareInstagram /></a></div>
            </div>
        </div>
    );
}
    
export default Footer;