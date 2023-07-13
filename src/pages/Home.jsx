import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../component/Form';
import Information from '../component/Information';
import cloud from '../assets/images/cloud.jpg';


const Component = styled(Box)({
    height: '100vh',
    // backgroundImage: `url(${cloud})`,
    display: 'flex',
    alignItems:'center',
    margin:'0 auto',
    width:'65%'
})
const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius:'20px 0 0 20px'
})

const Home = () => {
    const [result , setResult]=useState({})
    return (
        <Component>
            <Image> </Image>
            <Box
            style={{width:'73%', height:'80%'}}
            >
                <Form setResult={setResult} />
                <Information result={result}/>
            </Box>
        </Component>
    )
}
export default Home;