import React, { useState, useCallback} from 'react'
import hamburgerIcon from "../assets/hamburger4.png";
import xmarkIcon from "../assets/x-mark.png";
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

const StyledMenuContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    z-index: 9;

    .background-mask{
        position:fixed;
        top:0;
        left:0;
        background-color:#c4c4c4;
        opacity: 0.46;
        height: 100vh;
        width: 100vw;
    }

    .menu-content-container{
        border:3px solid #465775;
        background-color:#9ca1ab;
        height: 400px;
        width: 250px;
        border-radius: 15px;
        position:relative;
        z-index: 99px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .close{
            position:absolute;
            top: 10px;
            right: 10px;
            cursor:pointer;
                :hover {
                    opacity: 0.8;
                }
        }
        .hamburger-menu-list{
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            list-style: none;
            
            li {
            text-align: center;
            margin-top: 10px;
            font-size: 20px;
            color: #465775;
                a {
                    text-decoration: none;
                    color: #465775;
                        :hover {
                            opacity:0.8;
                        }
                }
            }
        }
        .giris-button {
            background-color: #465775;
            padding: 10px 30px;
            color: #fff;
            border: none;
            cursor: pointer;
                :hover {
                    opacity: 0.8;
                }
        }
    }
`;
export const HamburgerMenu = () => {
    const [visible, setVisible] = useState(false);

    const [user ,setUser] = useLocalStorage("user");
    const history = useHistory();
    const handleLogin = useCallback(()=>{
        setUser("emre");
    },[setUser])

    const handleLogout = useCallback(()=>{
        setUser("");
        history.push("/login");
    },[setUser,history])


    return (
        <div className="hide-desktop">
            <div onClick={() => setVisible(true)}>
                <img src={hamburgerIcon} alt="hamburger" />
            </div>
            {visible && <StyledMenuContainer>
                <div onClick={() => setVisible(false)} className="background-mask" />
                <div className="menu-content-container">
                    <img onClick={() => setVisible(false)} src={xmarkIcon} alt="close" className="close" />
                    <ul className="hamburger-menu-list">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/forum">Forum</Link></li>
                        <li><Link to="/hakkimizda">Hakkimizda</Link></li>
                        <li><Link to="/iletisim">Iletisim</Link></li>
                        <li><Link to="/private">Private Area</Link></li>
                    </ul>
                    {user ? ( 
                        <button onClick={()=>handleLogout()} className="giris-button">Logout</button>
                    ) : (
                        <button onClick={()=>handleLogin()} className="giris-button">Giris</button>
                    )}
                </div>

            </StyledMenuContainer>}
        </div>
    )
}
