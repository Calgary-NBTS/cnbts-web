import { FaFacebook, FaDiscord, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="p-4 bg-gradient-to-b from-sky-300 to-sky-400">
            <div className="m-2">
                <p>Come join us at any or all of the below platorms.</p>
            </div>
            <div className="m-2 flex gap-4 text-4xl">
                <div><a href="https://www.facebook.com/groups/1494690848018790" rel="noopener noreferrer"><FaFacebook /></a></div>
                <div><a href="https://discord.gg/t7a9xFmfcA" rel="noopener noreferrer"><FaDiscord /></a></div>
                <div><a href="https://www.instagram.com/calgary_enby_trans_society?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer"><FaSquareInstagram /></a></div>
            </div>
        </div>
    );
}
    
export default Footer;