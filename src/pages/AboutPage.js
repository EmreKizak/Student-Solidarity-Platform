import React, { useState } from 'react'
import { withLayout } from '../partials/Layout'
import styled from 'styled-components';
import { CustomModal } from '../components/CustomModal';

const StyledAboutPage = styled.div`
  padding: 50px;
`;


const AboutPage = () => {
  const [visible,setVisible]=useState(false)
  return (
    <StyledAboutPage>
      <button onClick={()=> setVisible(true)}>Tıkla</button>
      <CustomModal type="confirm" displayModal={visible} onOk={()=>alert("emre")} OnCancel={()=>setVisible(false)}>
        HELLOOOOO
      </CustomModal>
    </StyledAboutPage>
  )
}
export default withLayout(AboutPage);
