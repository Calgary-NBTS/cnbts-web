
import {Menu, MenuButton, MenuItem, SubMenu} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Menubar = () => {
return (
    <Menu initialMounted menuButton={<MenuButton>Resources</MenuButton>}>
        <MenuItem>Us</MenuItem>
    </Menu>
)
}

export default Menubar;
