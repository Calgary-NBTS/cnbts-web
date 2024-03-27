import { getAllNewsletterHeadings } from "@/sanity/queries";
import Box from '@mui/material/Box';
import Menubar from "./Menubar";

const Header = async () => {
    const newsLetters = await getAllNewsletterHeadings();

    return (
        <Menubar />
    )
}

export default Header;