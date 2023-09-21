import React, { useCallback ,useRef} from 'react'
import userIcon from "../assets/user.png";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useClickOutside } from '../hooks/useClickOutside';
import { CustomModal } from './CustomModal';
import { ProfilPage } from '../pages/ProfilPage';


const StyledProfileDropdown = styled.div`
    position: relative;
    .user-button{
        background-color: #e3ab57;
        border:none;
        color: #465775;
        padding: 5px 20px;
        border-radius:30px;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        min-width: 120px;
        cursor:pointer;
        img{
            height: 25px;
            width:auto;
        }   
    }

    .dropdown-content{
        display:none;
        flex-direction:column;
        position:absolute;
        z-index:99;
        background-color:#56799d;
        min-width: 130px;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        a {
            text-decoration: none;
            color: white;
            :hover{
                opacity: 0.7;
            }
        }
        label{
            :hover{
                color: #e3ab57;
                cursor: pointer;
            }
        }
    }
    .show{
        display:flex;
    }
`;

const SectionLogout = ({handleLogout})=>{
    const [visible,setVisible] = useState(false);//modal
    return <>
        <label onClick={()=>setVisible(true)}>Logout</label>
        <CustomModal type="confirm" displayModal={visible} onCancel={()=>setVisible(false)} onOk={handleLogout}>
            Cikis yapmak istedigine emin misin?
        </CustomModal>
    </>
}


export const ProfileDropdown = ({ userName , handleLogout}) => {
    const [visible, setVisible] = useState(false);
    const refDropdown = useRef(null);
    const handleClick = useCallback(() => {
        setVisible((c) => !c);
    }, []);

    useClickOutside(refDropdown, () => setVisible(false));



    return (
        <StyledProfileDropdown ref={refDropdown}>

            <button onClick={handleClick} className='user-button'><img src={userIcon} alt="users" /> {userName} </button>
            <div className={visible ? "dropdown-content show" : "dropdown-content"}>
                <Link to="/profil">Profil</Link> 
                <Link>Favoriler</Link>
                <Link>Gecmis</Link>
                <SectionLogout handleLogout={handleLogout}/>
                
            </div>
        </StyledProfileDropdown>
    )
}
