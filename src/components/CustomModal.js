import React, { useCallback ,useRef} from 'react'
import styled from 'styled-components'
import { useClickOutside } from '../hooks/useClickOutside';

const StyledCustomModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(196, 196, 196, 0.68);
    z-index: 99;

    .modal-container{
        background-color: #1B5794;
        margin: auto;
        padding: 50px 100px;
    }
    .modal-buttons{
        margin-top:20px;
        display: flex;
        justify-content: space-evenly;
    }
    .ok-btn,
    .no-btn{
        border: none;
        padding: 10px 40px;
        color: #1B5794;
        cursor: pointer;
        :hover{
            opacity: 0.8;
        }
    }

    .no-btn {
        background-color: #e3ab57;
    }

`;

//type

export const CustomModal = ({displayModal,onOk,onCancel,children,type}) => {
    const modalRef = useRef();

    const divStyle={display:displayModal ? 'flex' : 'none',}
    useClickOutside(modalRef,onCancel)

    const handleOk = useCallback((e)=>{//event
        e.stopPropagation();//üst componenetler eventi kullanamıyor
        onOk();
    },[onOk])
    const handleCancel = useCallback((a)=>{//event
        a.stopPropagation();//üst componenetler eventi kullanamıyor
        onCancel();
    },[onCancel])

    return (
    <StyledCustomModal style={divStyle}>
        <div ref={modalRef} className='modal-container'>
            <div className='modal-content'>
                {children}
            </div>
            <div className='modal-buttons'>
                {type==="confirm" &&(
                <>
                <button className="ok-btn" onClick={handleOk}>Evet</button>
                <button className="no-btn" onClick={handleCancel}>Hayir</button></>)}

                {type==="warning" &&(
                <>
                <button className="ok-btn" onClick={handleCancel}>Tamam</button>
                </>)}

            </div>
        </div>
        
    </StyledCustomModal>
  )
}
