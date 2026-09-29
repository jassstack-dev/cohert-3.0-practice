import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  //data store in the productData
  const [productData, setProductData] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [addcart, setAddcart] = useState([]);
   const [toggle, setToggle] = useState(true)

  //     const totalCategories = productData.reduce((acc, val) => {
  //   if (!acc.includes(val.category)) {
  //     acc.push(val.category);
  //   }

  //   return acc;
  // }, []);

  // console.log(totalCategories);
  // console.log(totalCategories.length);

  // get product api
  async function allProduct() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProductData(res.data.products);
    } catch (error) {
      console.log("error in All product Api", error.message);
    }
  }

  useEffect(() => {
    allProduct();
  }, []);


//   sum of all product prices
let sum = addcart.reduce((acc,val)=>{
        return acc+ val.price
    },0)

    let discount = (sum * 18)/100

   

  return (
    <MyStore.Provider
      value={{
        productData,
        setProductData,
        singleProduct,
        setSingleProduct,
        addcart,
        setAddcart,
        toggle, 
        setToggle,
        sum,
        discount
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
