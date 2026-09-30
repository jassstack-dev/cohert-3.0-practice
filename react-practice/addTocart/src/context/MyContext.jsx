import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  console.log("cart---->", cart);
  //  console.log(products)

  
  

  async function fetchProducts() {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);


   function addToCart(val) {
    setCart((prev) => [...prev, val]);
  }


    const increaseQuantity = (id) => {
    setCart((prev)=>{
        return prev.map((item)=>{
            if(item.id === id ){
                return {
                    ...item,
                    quantity : item.quantity +1
                }
            }
            return item
        })
    })
  };

  const decreaseQuantity = (id) => {
   setCart((prev)=>{
    return prev.map((item)=>{
        if(item.id === id && item.quantity >1){
            return {
                ...item,
                quantity : item.quantity -1
            }
        }
        return item
    })
   })
  };

  const increaseProductQuantity = () => {
  setQuantity((prev) => prev + 1);
};

const decreaseProductQuantity = () => {
  setQuantity((prev) => {
    if (prev > 1) {
      return prev - 1;
    }

    return prev;
  });
};

 const deleteCart = (id) =>{
setCart((prev)=>{
    return prev.filter((val)=>{
        return val.id !== id
    })
})
   }

   console.log(cart)


  return (
    <MyStore.Provider  value={{
        products,
        setProducts,
        addToCart,
        cart,
        increaseProductQuantity,
        decreaseProductQuantity,
        increaseQuantity,
        decreaseQuantity,
        quantity,
        setQuantity,
        deleteCart


      }}
    >
      
      {children}
    </MyStore.Provider>
  );
};
