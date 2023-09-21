import styled from "styled-components";
import loginImage from '../../assets/loginpage.png';

export const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .login-container {
    background-color: #345577;
    display:flex;
    width: 60%;
    height: 527px;
    
    .left{
      flex: 2;
      background-image: url(${loginImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center; 
      img{
        opacity:0;
      }
    }
    .right{
      flex: 2;
      padding: 90px;
      display:flex;
      flex-direction:column;
      justify-content: end;
      form{
        .form-element{
            position: relative;
            :not(:first-child){
            margin-top:20px;
            }
            img{
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;
            }
            span{
                color: #F5A3A3;
                font-size: 16px;
                position: absolute;
                
            }
        }
        input{
          width: 99%;
          background-color:transparent;
          border:none;
          border-bottom: 1px solid var(--form-color);
          font-size: 18px;
          caret-color: var(--form-color);
          color: var(--form-color);
          line-height: 30px;

          ::placeholder{
            color: var(--form-color);
          }
          :focus {
            outline:none;
          }
          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active{
            transition: background-color 5000s ease-in-out 0s;
            font-size: 18px;
            -webkit-text-fill-color: var(--form-color);
          }
          &:-webkit-autofill:first-line{
            font-size: 18px;
          }
        }
        .form-element-submit {
          text-align: right;
          button{
            background-color: transparent;
            border: none;
            cursor: pointer;   
          }
        }
      }
      .sign-up-info {
        margin-top: 50px;
        text-align: center;
        color: #bfbaba;
      }
      .sign-up-btn-container{
        text-align: center;
        margin-top: 30px;
        button {
          font-size: 18px;
        color: #DEDCDE;
        background-color: transparent;
        border: none;
        cursor: pointer;
        
        }
      }
      
    }
  }
  @media(max-width:768px){
    .login-container{
        display: block;
        height: 100%;
        width: 100%;
        .left{
            position: absolute;
            width: 100%;
            height: 100vh;
        }
        .right{
            position:relative;
            width: 250px;
            min-height: 300px;
            justify-content:center;
            background-color: rgba(254, 255, 233, 0.45);
            padding: 20px;
            margin: 150px auto;
            form{
                .form-element{
                    span{
                        color:#FF0000;
                    }
                }
                padding: 20px;
                
                input{
                    color: #000;
                  ::placeholder{
                    color: #000;
                  }  
                }
                .form-input{
                    input{
                        font-size: 15px;
                    } 
                }
            }
            .sign-up-info{
                    color: #000;
                }
            .sign-up-btn-container{
                button{
                    color:#000;
                }
            }
        }
    }
  }
`;