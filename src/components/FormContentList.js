import React, { useContext, useEffect, useState } from 'react'
import FormContentCard from '../components/FormContentCard';
import styled from 'styled-components';
import { HeaderContext } from "../provider/ContentHeaderProvider"
export const StyledCard = styled.div`
    
    .container{
        align-items: center;
        text-align: center;
        .seperateLine{
            border-bottom: 2px solid gray;
            margin: 5% 25%;
        }
        .btn{
        background-color:#BEE5BF;
        padding: 5px 20px;
        border: none;
        cursor:pointer;
        border-radius: 30px;
        width: 85px;
        }
        .baslik{
            border-radius: 10px;
            font-family: 'Poppins', sans-serif;
            

        }
        .icerik{
            width: 100%;
            height: 150px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 4px;
            background-color: #f8f8f8;
            resize: none;
            font-family: 'Poppins', sans-serif;

        }
    }
`;
export const FormContentList = () => {
    const { header, setRefreshHeaderList } = useContext(HeaderContext)
    const [formContentList, setFormContentList] = useState([]);
    const [headerInput, setHeaderInput] = useState();
    const [contentInput, setContentInput] = useState();
    const setContentInfo = () => {
        const item = window.localStorage.getItem("content");
        const user = window.localStorage.getItem("user");
        const date = new Date()
        const list = item ? JSON.parse(item) : []
        const newArr = [...list, { header: headerInput, user: user, date: date.toLocaleDateString(), content: contentInput }]
        window.localStorage.setItem("content", JSON.stringify(newArr));
        setFormContentList(newArr);
        setRefreshHeaderList(prevState => !prevState)

    };
    const handleChangeContentInput = (event) => {
        setContentInput(event.target.value)
    }
    const handleChangeHeaderInput = (event) => {
        setHeaderInput(event.target.value)
    }
    useEffect(() => {
        const item = window.localStorage.getItem("content");
        setFormContentList(item ? JSON.parse(item) : [])
    }, [])
    return (
        <StyledCard>
            <div className='container'>
                <h5>{header}</h5>
                {formContentList.map((item) => {
                    return (<>{
                        header === item.header && (<>
                            <FormContentCard contents={item} />
                            <div className='seperateLine' /></>)
                    }
                    </>
                    )
                })}
                <div class="baslik">
                    <label>Baslik: </label>
                    <input type="text" value={headerInput} onChange={handleChangeHeaderInput} />
                </div>
                <p></p>
                <div class="icerİk">
                    <label>İcerik: </label>
                    <textarea value={contentInput} onChange={handleChangeContentInput}></textarea>
                </div>

                <button className='btn' onClick={() => setContentInfo()}>Paylas</button>
            </div>

        </StyledCard>
    )
}
