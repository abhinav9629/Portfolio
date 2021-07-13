import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';



const NavBar = styled(motion.div)`
    position:relative;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:2%;
    z-index:99;
`;

const Button = styled(motion.button)`
    margin: 5px;
    padding: 1rem 3rem;
    font-size: 6.5rem;
    background: transparent;
    border: 2px solid transparent;
    outline: none;
    cursor: pointer;
    color: #666362;
    width:800px;
    height:200px;
    font-weight:800;
    font-family: 'Righteous', cursive;
    
`;

const BACK = styled(motion.div)`
    height:0.5%;
    width:80%;
    color:#666362;
    font-size:1.5rem;
    margin: 5px;
    padding: 1rem 9.2rem;
    display:flex;
    justify-content:center;
`;




export const Nav = () => {
    return (
        <>
        <Link to='/' style={{textDecorationLine:'none'}}><BACK
        whileHover={{color:'#fff'}}>
            Back
        </BACK></Link>
        <NavBar
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}>
            <Link to='/about'><Button
            whileTap={{backgroundColor:'#67F6E7'}}
            whileHover={{color:'#fff'}}><GlitchClip onHover={true}>About</GlitchClip></Button></Link>
            <Link to ='/work'><Button
            whileTap={{backgroundColor:'#67F6E7'}}
            whileHover={{color:'#fff'}}><GlitchClip onHover={true}>Work</GlitchClip></Button></Link>
            <Link to = '/contact'><Button
            whileTap={{backgroundColor:'#67F6E7'}}
            whileHover={{color:'#fff'}}><GlitchClip onHover={true}>Wanna Chat?</GlitchClip></Button></Link>
        </NavBar>
        </>
    )
}
