import getStaff from '@/sanity/queries/getStaff';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';
import StaffListing from './StaffListing';

const Staff = async () => {
    const staff = await getStaff();

    return (
        <Container>
             <Typography 
                 paddingY={2} 
                 variant='h4' 
                 component='h2'
             >
                 Our Amazing Team
             </Typography>
             <Masonry columns={{xxs:1, md:2, xl:3}} spacing={2}>
             {staff.map((member, i) => (
                 <StaffListing
                     key={member._id}
                     name={member.name}
                     image={member.image} 
                     bio={member.bio} 
                     pronouns={member.pronouns}
                     first={!Boolean(i)}
                 />
             ))}
             </Masonry>
        </Container>
    )
}

export default Staff;