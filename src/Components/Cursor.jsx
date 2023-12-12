import React, { useRef } from 'react'
import styled from 'styled-components'

function Cursor() {
const first = useRef()
console.log(first)
  return (
    <CursorS ref={first}>
        <H5>Play Reel</H5>
    </CursorS>
  )
}
const CursorS = styled.div`
    height: 10vmin;
    width: 10vmin;
    background-color: #FF5F38;
    border-radius: 50%;
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
`
const H5 = styled.h5`
    font-weight: 500;
    font-size: 1.8vmin;
    color: black;
`
export default Cursor