'use client'
import { styled } from '@mui/material/styles';
import Typography, {TypographyProps, typographyClasses} from '@mui/material/Typography';

const Title = styled(({className, ...props}: TypographyProps) => (
    <Typography variant='h2' {...props} />
))(({ theme }) => ({
    [`& .${typographyClasses.h2}`]: {
        color: theme.vars.palette.secondary.contrastText,
    },

}))


const StaffTitle = ({children}: {children: React.ReactNode}) => {

    return (
        <Title>{children}</Title>
    )
}

export default StaffTitle;