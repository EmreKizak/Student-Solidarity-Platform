import React, {useState} from 'react'
import { StyledLoginPage } from './StyledLoginPage';
import { SignInForm } from '../../components/SignInForm';
import { SingUpForm } from '../../components/SingUpForm';




export const LoginPage = () => {
  const [visibleLogin,setVisibleLogin] = useState(true)

  return (
    <StyledLoginPage>
      <div className="login-container">
        <div className="left"></div>
        <div className='right'>
          {visibleLogin ? (
            <SignInForm setVisibleLogin={setVisibleLogin}/>
          ) : ( 
            <SingUpForm setVisibleLogin={setVisibleLogin}/>
          )}
        </div>
      </div>
    </StyledLoginPage>
  )
}
