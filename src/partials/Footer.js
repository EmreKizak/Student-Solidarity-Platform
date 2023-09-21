import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div` 
    display: flex;
    width: 100%;
    justify-content :center;
    margin: 20px 0px;

`;

export const Footer = () => {
  return (
    <StyledFooter><p>@ 2022 Student</p></StyledFooter>
  )
}
