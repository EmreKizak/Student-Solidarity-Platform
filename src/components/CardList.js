import React, { useRef, useState ,useEffect} from 'react'
import styled from 'styled-components'


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 500px;
    background-color:#3e5b78;
    padding:40px;
    margin-top:30px;
    transform:scale(${({visible}) => (visible ? "1,1": "0,0")});
    transition: transform 1s;

    .card-package-title{
        text-transform:uppercase;
        text-align:center;
        font-size:36px;
    }

    .horizontal-line{
        height:1px;
        background-color:#fff;
        width: 80%;
        margin:auto;
        margin:30px;
    }

    .package-list{
        list-style:none;
        margin:0;
        padding:0;
    
        li{
            font-size:20px;
            text-align:center;
        }
    }
    .total{
        text-align:center;
    }

`;
const Card = () => {
    const [visible, setVisible] = useState();
    const cardRef = useRef(null);

    useEffect(() => {
        const cardPosition = cardRef.current.getBoundingClientRect().top

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if(scrollPos>cardPosition){
                setVisible(true)
            }else{
                setVisible(false);
            }

        }
        window.addEventListener("scroll",onScroll);
        return ()=> window.removeEventListener("scroll",onScroll)
      
    }, [])
    
    return (
        <StyledCard ref={cardRef} visible={visible}>
            <div>
                <div className='card-package-title'>BOS</div>
                <div className='horizontal-line' />
            </div>
            <ul className="package-list">
                <li>bos</li>
                <li>bos</li>
                <li>bos</li>
            </ul>
            <div className='total'>
                BOS
            </div>
        </StyledCard>)
}
const StyledCardList = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    margin-top:-30px;

`;

export const CardList = () => {
    return (
        <StyledCardList>
            <Card />
            <Card />
            <Card />
        </StyledCardList>
    )
}
