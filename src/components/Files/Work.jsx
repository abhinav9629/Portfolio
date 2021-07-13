import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Yoruba from './Images/Yoruba.jpg'
import Exhibition from './Images/E-Exhibition.jpg'
import NITVR from './Images/NithVR.jpg'

const WorkContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:#e1e1e1;
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
    display:flex;
    justify-content:center;
    text-align:center;
    padding-top:2%;
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

const BACK = styled(motion.div)`
    height:0.5%;
    width:80%;
    color:#666362;
    font-size:1.5rem;
    margin: 5px;
    padding: 1rem 3rem;
`;

const ProjectCards=styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    width:100%;
    background:#e1e1e1;
`;

const ColumnLeft=styled.div`
    display:flex;
    flex-direction:column;
    background:transparent;
    
`; 


const ColumnRight=styled.div`
    display:flex;
    flex-direction:column;
    background:transparent;
    
`; 

const Card = styled(motion.div)`
    display:grid;
    grid-template-rows:1fr 1fr;
    width:50%;
    margin-top:15%;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    border-radius:20px;
    background:#fff;
    justify-content:center;
    margin-bottom:15%;
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:#fff;
    border-radius:20px;
`;

const CardHead = styled.h1`
    text-align:center;
`;
const CardPara = styled.p`

`;

const CardButton = styled.button`

    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid transparent;
    background: transparent;
    outline: none;
    cursor: pointer;
    color: #000;
    border-radius: 4px;
    margin:auto;

`;

const Photo = styled.div`
    border-radius:20px;
`;



export const Work = () => {
    return (
        <WorkContainer>
            <Link to='/nav' style={{ textDecorationLine: 'none' }}><BACK
                whileHover={{ color: '#fff' }}>
                Back
            </BACK></Link>
            <Heading>WORK</Heading>
            <Scroll>
                <ScrollText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity }}
                >Scroll Down</ScrollText>
            </Scroll>
            <ProjectCards>
                <ColumnLeft>
                    <Card
                    whileHover={{scale:1.05}}
                    >
                        <Photo><img src={Yoruba} alt="MT" style={{width:'100%',height:'100%',borderRadius:'20px'}}/></Photo>
                        <Content>
                            <CardHead>Machine Translation</CardHead>
                            <CardPara>A machine translation model to translate sentences from Yorùbá language to English language in several domains like news articles, daily conversations, spoken dialog transcripts and books using Seq2Seq approach. </CardPara>
                            <CardButton>Github</CardButton>
                        </Content>
                    </Card>
                    <Card
                     whileHover={{scale:1.05}}
                    >
                        <Photo><img src={NITVR} alt="MT" style={{width:'100%',height:'100%',borderRadius:'20px'}}/></Photo>
                        <Content>
                            <CardHead>NITH-VR</CardHead>
                            <CardPara>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati sit harum modi, eligendi omnis, magnam illo porro odio explicabo dolor ipsa cupiditate ipsam rem impedit repudiandae nulla deleniti nam.</CardPara>
                            <CardButton>Github</CardButton>
                        </Content>
                    </Card>
                </ColumnLeft>
                <ColumnRight>
                    <Card
                     whileHover={{scale:1.05}}
                    >
                        <Photo><img src={Exhibition} alt="MT" style={{width:'100%',height:'100%',borderRadius:'20px'}}/></Photo>
                        <Content>
                            <CardHead>E-Exhibition</CardHead>
                            <CardPara>This project is the unification of Natural Language Processing and Virtual Reality. The objective
                                was to create a Virtual environment for exhibition of various projects/artifacts with the help of a Question 
                                Answering Bot.
                            </CardPara>
                            <CardButton>Github</CardButton>
                        </Content>
                    </Card>
                </ColumnRight>
            </ProjectCards>
        </WorkContainer>
       
    )
}
