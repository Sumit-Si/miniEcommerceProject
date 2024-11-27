import axios from './axiosSetting';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContextData = createContext(null);

const ProductContext = ({children}) => {

    const [products,setProducts] = useState(null);

    async function productData() {
        try {
            const {data} = await axios.get("/products");
            // console.log(data);
            setProducts(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        productData();
    },[])

  return (
    <ProductContextData.Provider value={[products,setProducts]}>
        {children}
    </ProductContextData.Provider>
  )
}

export default ProductContext