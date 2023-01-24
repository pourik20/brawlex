import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

/**
 * Example Text Gradient Animation
 */
export default function ChromaticText({ children }) {
  return (
    <>
      <AnimatedGradientText>{children}</AnimatedGradientText>
    </>
  )
}

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`
const AnimatedGradientText = styled.p`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #b116ec, #ff0021, #fff11e);
  background-size: 300%;
  background-clip: text;
  font-size: 1.25rem;
  font-family: 'Lilita One', sans-serif;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
