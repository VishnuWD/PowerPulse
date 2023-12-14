import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { gsap } from "gsap";

function Hero() {

    const point = useRef()
    


    return (
        <Container>
            <BackgroundVideo autoPlay muted loop src="/src\assets\1212.mp4"></BackgroundVideo>

            <TopLayer onMouseMove={(event) => {
                gsap.to(point.current,{
                    x:event.clientX,
                    y:event.clientY
                })
            }}
            onMouseEnter={() => {
                gsap.to(point.current,{
                    scale:1
                })
            }}
            onMouseLeave={() => {
                gsap.to(point.current,{
                    scale:0
                })
            }}
            >
                <CursorS ref={point}>
                    <H5>Play Reel</H5>
                </CursorS>
                <Nav>
                    <NavTitle>PowerPulse Gym.</NavTitle>
                    <NavTitle>Menu</NavTitle>
                </Nav>
                <Title>
                    <TitleSpan>P</TitleSpan>
                    <TitleSpan>O</TitleSpan>
                    <TitleSpan>W</TitleSpan>
                    <TitleSpan>E</TitleSpan>
                    <TitleSpan>R</TitleSpan>
                    <TitleSpan>P</TitleSpan>
                    <TitleSpan>U</TitleSpan>
                    <TitleSpan>L</TitleSpan>
                    <TitleSpan>S</TitleSpan>
                    <TitleSpan>E</TitleSpan>

                </Title>

            </TopLayer>

        </Container>
    )
}

const fadeup = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const TopLayer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 10;
    overflow: hidden;
`

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 3vw 3vw;
`
const NavTitle = styled.h2`
    font-size: 2.5vmin;
    font-weight: 400;
    cursor: pointer;
`
const Title = styled.h1`
    font-size: 30vmin;
    width: 100%;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    animation: ${fadeup} 0.5s ease-out both;
    padding: 0 5vmin;
    cursor: default;
    z-index: -2;
`
const TitleSpan = styled.span`
    font-family: "logo";
    color: white;
    padding: 0.5vmin;
    text-shadow: 0 0 5vmin rgba(0,0,0,0.50);
    font-weight: 500;
`
const CursorS = styled.div`
    height: 10vmin;
    width: 10vmin;
    background-color: #FF5F38;
    border-radius: 50%;
    position: fixed;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    cursor: default;
`
const H5 = styled.h5`
    font-weight: 500;
    font-size: 1.8vmin;
    color: black;
`


export default Hero