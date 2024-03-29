import { getAllNewsletterHeadings } from "@/sanity/queries";
import Box from '@mui/material/Box';
import Menubar from "./Menubar";

const Header = async () => {
    const newsletters = await getAllNewsletterHeadings();

    return (
        <Menubar newsletters={newsletters} />
    )
}

export default Header;