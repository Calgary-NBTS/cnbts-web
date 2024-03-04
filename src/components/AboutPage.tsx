import StaffList from './StaffList';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const AboutPage = () => {
    return (
        <Box paddingY={2} component='section'>
            <StaffList />
        </Box>
    )
}

export default AboutPage;