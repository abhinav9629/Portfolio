import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useMotionValue } from 'framer-motion';

const ContactContainer = styled.div`
    position:absolute;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    background:#e1e1e1;
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:99;
`;

const BACK = styled(motion.div)`
    height:0.5%;
    width:80%;
    color:#666362;
    font-size:1.5rem;
    margin: 5px;
    padding: 1rem 3rem;
`;

const Heading = styled.h1`
    color:#000;
    font-weight:700;
    font-size: 12rem;
    width:100%;
    height:80%;
    display:flex;
    justify-content:center;
    text-align:center;
    padding-top:5%;
    font-family: 'Righteous', cursive;
`;

const Scroll = styled.div`
    color:#000;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const ScrollText = styled(motion.p)`
    font-size:15px;
    text-align:center;
`;

const LogoContainer = styled(motion.div)`
    padding-top:10%;
    padding-bottom:2%;
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 2%;
    background:#e1e1e1;


`;

const ColumnLeft = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
   
`;


const ColumnRight = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
   
`;

const Item = styled(motion.div)`
    width:60%;
    height:100%;
    color:#fff;
    text-align:center;
    padding:10px;
`;

const Cont = styled.div`
    width:100%;
    background:#e1e1e1;
`;

const ItemCenter = styled(motion.div)`
    width:63.5%;
    margin:auto;
    display:flex;
    justify-content:center;
    background:url("https://coolwallpapers.me/picsup/6009646-dark-rain-puddle-bw.jpg")
    
`;


export const Contact = () => {
    const ScrollY = useMotionValue(0);
    return (
        <>
            <ContactContainer>
                <Link to='/nav' style={{ textDecorationLine: 'none' }}><BACK
                    whileHover={{ color: '#fff' }}>
                    Back
                </BACK></Link>
                <Heading>CONNECT</Heading>
                <Scroll>
                    <ScrollText
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >Scroll Down</ScrollText>
                </Scroll>
                <LogoContainer>
                    <ColumnLeft>
                        <a href="https://github.com/abhinav9629"><Item
                        initial={{opacity:0,x:-300}}
                        animate={{opacity:1,x:0}}
                        transition={{duration:2,ease:'easeOut'}}
                        style={{marginLeft:'auto',backgroundImage:'url("https://images.fineartamerica.com/images-medium-large-5/night-glow-hot-air-balloons-bw-thomas-woolworth.jpg")'}}><img src="https://img.icons8.com/ios/100/ffffff/github--v1.png" style={{padding:'30%'}}/></Item></a>
                    </ColumnLeft>
                    <ColumnRight>
                        <a href="https://www.linkedin.com/in/abhinav-dwivedi-810464190/"><Item 
                        initial={{opacity:0,x:300}}
                        animate={{opacity:1,x:0}}
                        transition={{duration:2,ease:'easeOut'}}
                        style={{marginRight:'auto',backgroundImage:'url("https://cdn.pixabay.com/photo/2020/06/20/19/17/the-black-background-5322097_960_720.jpg")'}}><img src="https://img.icons8.com/ios/100/ffffff/linkedin.png" style={{padding:'30%'}}/></Item></a>
                    </ColumnRight>
                   
                </LogoContainer>
                <Cont>
                <a href="https://www.instagram.com/witpits/"><ItemCenter
                initial={{opacity:0,y:300}}
                animate={{opacity:1,y:0}}
                transition={{duration:2,ease:'easeOut'}}
                ><img src="https://img.icons8.com/ios/100/ffffff/instagram-new--v1.png" style={{padding:'15%',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}/></ItemCenter></a>
                </Cont>
            </ContactContainer>
           
        </>

    )
}
