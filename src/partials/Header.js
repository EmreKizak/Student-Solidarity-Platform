import React, { useCallback, useContext } from 'react';
import styled from 'styled-components'
import logo from '../assets/student.png';
import { Link ,useHistory } from 'react-router-dom';
import { AppContext } from '../provider/AppProvider';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { ProfileDropdown } from '../components/ProfileDropdown';
const StyledHeader = styled.div` 
    background-color: #465775;
    padding:0 10%;   
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items:center;
    box-shadow: 0px 2px 20px black;
    .logo-container{
        flex: 0.3;
        img{
            height: 60px;
            width:auto;
        }   
    }
    .menu-container{
        flex: 1;
    }
    nav{
        display: flex;
        justify-content: space-evenly;
        align-items:center;
    }
    .top-bar{
        list-style: none;
    }
    .top-bar a{
        float: left;
        color: #FFF;
        text-decoration:none;
        position:relative;
    }

    .top-bar a:after{
        content: "";
        position:absolute;
        bottom:0;
        left:0;
        width: 100%;
        height:2px;
        background-color:white;
        transform:scaleX(0);
        transition: transform 0.25s ease-out;
        transform-origin:left bottom;

    }
    .top-bar a:hover:after{
        transform:scaleX(1);
        
    }
    .top-bar a:not(:first-child){
        margin-left:20px
    }
    .top-menu-btn {
        background-color:#BEE5BF;
        padding: 5px 20px;
        border: none;
        cursor:pointer;
        border-radius: 30px;
        width: 85px;
    }
`;
export const Header = () => {
    const [user ,setUser] = useLocalStorage("user");
    const history = useHistory();
    const handleLogin = useCallback(()=>{
        history.push("/login");
    },[history])

    const handleLogout = useCallback(()=>{
        setUser("");
        history.push("/login");
    },[setUser,history])

    return (<StyledHeader>
        <div className="logo-container">
            <img src={logo} alt="logo" />
        </div>
        <nav className={['menu-container','hide-mobile'].join(' ')}>
            <ul className="top-bar">
                <Link to="/">Anasayfa</Link>
                <Link to="/forum">Forum</Link>
                <Link to="/hakkimizda">Hakkimizda</Link>
                <Link to="/iletisim">iletisim</Link>
                <Link to="/private">Private Area</Link> 
            </ul>
            {user ? (
              //  <button className="top-menu-btn" onClick={handleLogout}> Cikis - {user} </button>
                <ProfileDropdown userName={user} handleLogout={handleLogout}/>
              ) : (
                <button className="top-menu-btn" onClick={handleLogin}> Giris</button>
            )}
        
        </nav>
        <HamburgerMenu/>
    </StyledHeader >
    )
};