import { func } from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const MainSectionContainer = styled(motion.div)`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:20%;
    z-index:99;
`;

const Title = styled(motion.h1)`
    margin:0;
    color:#fff;
    font-weight:700;
    font-size: 5rem;
`;

const Button = styled(motion.button)`
    margin-top: 10%;
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    background: transparent;
    outline: none;
    cursor: pointer;
    color: #fff
    border-radius: 4px;
`;

export function MainSection(){
    return(
        <MainSectionContainer
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        >
            <Title>Aloha, I'm Abhinav</Title>
            <Link to='/nav'>
            <Button
             whileHover={{scale:1.05}}
             whileTap ={{scale:0.95,backgroundColor:'#67F6E7'}}  
            >Get Started</Button>
            </Link>
        </MainSectionContainer>
    );
}
