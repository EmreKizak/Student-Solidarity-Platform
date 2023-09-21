import React, { useContext, useState, useEffect } from 'react'
import { HeaderContext } from "../provider/ContentHeaderProvider"
import styled from 'styled-components';
export const StyledPage = styled.div`
    
    ul{
        .li{
        width: 172px;
        height: 8vh;
    }
    }
    
`;
export const FormHeaderList = () => {
    const [headerList, setHeaderList] = useState([]);
    const { setHeadertitle,refreshHeaderList } = useContext(HeaderContext)
    const setHeader = (item) => {
        setHeadertitle(item);
    }
    const getHeaderItem = () => {
        return (
            <>
            
            <StyledPage>
                <ul>
                    
                    {headerList.length >0 && headerList.map((item) => <li className='li' onClick={() => setHeader(item)}>{item}</li>)}
                </ul>
                </StyledPage>
            </>
        )
    }
    useEffect(() => {
        const content = JSON.parse(window.localStorage.getItem("content"))
        if (content && content.length > 0) {
            const filteredList = content.map((item) => item.header)
            let unique = [...new Set(filteredList)];
            setHeaderList(unique);
        }
        else{
            setHeaderList([]);
        }
    }, [refreshHeaderList])
    return (
        <div>
            {getHeaderItem()}
        </div>
    )
}
