import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../App.css';
import TextImg from './Images/1015424.jpg'



const AboutContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:#e1e1e1;
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:99;
`;

const Heading = styled.h1`
    color:#000;
    font-weight:700;
    font-size: 12rem;
    width:100%;
    height:80%;
    padding:auto;
    text-align:center;
    font-family: 'Righteous', cursive;
`;

const Para = styled.p`
    color:#000;
    font-weight:100;
    font-size: 2rem;
    margin:auto;
    width:100%;
    height:100%;
    text-align:center;
    background:#e1e1e1;
    padding-top:10%;
    
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

const BACK = styled(motion.div)`
    height:0.5%;
    width:80%;
    color:#666362;
    font-size:1.5rem;
    margin: 5px;
    padding: 1rem 3rem;
`;

const Skills = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background:#e1e1e1;
    padding-top:10%;

`;

const SkillHead = styled.h1`
    text-align:center;
    font-size:4rem;
    color:#000;
    font-family: 'Righteous', cursive;
`;
const SkillCards = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    width:100%;
    
`;

const ColumnLeft = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    margin-right:20%;
`;


const ColumnRight = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    margin-left:20%;
`;

const ListItem = styled.div`
    display:grid;
    grid-template-row:1fr 1fr;
    margin:2%;
    margin:5%;
    
`;

const Item = styled.label`
    color:#000;
    font-size:2rem;
    padding-top:5%;
    padding-bottom:5%;

`;



export const AboutMe = () => {
    return (
       
        <AboutContainer>
            <Link to='/nav' style={{ textDecorationLine: 'none' }}><BACK
                whileHover={{ color: '#fff' }}>
                Back
            </BACK></Link>
            
            <Heading>ABOUT</Heading>
            <Scroll>
                <ScrollText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity }}
                >Scroll Down</ScrollText>
            </Scroll>
            <Para> I'm Abhinav Dwivedi, a Sophomore at National Institute of Technology, Hamirpur. I'm a Designer, Game Developer
                and Deep Learning Enthusiast. Currently focusing on Natural Language Processing tasks such as Machine Translation and
                Question Answering.
            </Para>
            <Skills>
                <SkillHead>SKILLS</SkillHead>
                <SkillCards>
                    <ColumnLeft>
                        <ListItem>
                            <Item for="DL">Deep Learning</Item>
                            <progress id="DL" max={100} value={60} />
                        </ListItem>
                        <ListItem>
                            <Item for="FD">Frontend Development</Item>
                            <progress id="FD" max={100} value={50} />
                        </ListItem>
                    </ColumnLeft>
                    <ColumnRight>
                        <ListItem>
                            <Item for="Unity">Unity</Item>
                            <progress id="Unity" max={100} value={80} />
                        </ListItem>
                    </ColumnRight>
                </SkillCards>
            </Skills>
        </AboutContainer>
    )
}
