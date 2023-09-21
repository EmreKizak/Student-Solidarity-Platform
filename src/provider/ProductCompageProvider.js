import React, { createContext, useState} from 'react';


export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState([])

    const HandleProductChange = (value)=>{
        setProductList(value);
    };
    return (
        <ProductContext.Provider value={{productList,setProductList:HandleProductChange }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;