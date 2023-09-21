import React, { createContext, useState} from 'react';


export const HeaderContext = createContext();

const HeaderContextProvider = (props) => {
    const [header, setHeader] = useState("")
    const [refreshHeaderList, setRefreshHeaderList] = useState(false)

    const HandleHeaderChange = (value)=>{
        setHeader(value);
    };
    return (
        <HeaderContext.Provider value={{header,refreshHeaderList,setRefreshHeaderList,setHeadertitle:HandleHeaderChange }}>
            {props.children}
        </HeaderContext.Provider>
    )
}
export default HeaderContextProvider;