import getStaff from '@/sanity/queries/getStaff';
import StaffListing from './StaffListing';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';

export const revalidate = 3600;
const StaffList = async () => {
    const staff = await getStaff();
    
    return (
        <Container maxWidth='xl'>
            <Typography 
                paddingY={2} 
                variant='h4' 
                component='h2'
            >
                Our Amazing Team
            </Typography>
            <Grid container spacing={2}>
            {staff.map((member, i) => (
                <Grid key={member._id} xs={12} md={6} lg={4} xl={3}>
                <StaffListing
                    name={member.name}
                    image={member.image} 
                    bio={member.bio} 
                    pronouns={member.pronouns}
                    first={!Boolean(i)}
                />
                </Grid>
                
            ))}
            </Masonry>
        </Container>
    );
}

export default StaffList;