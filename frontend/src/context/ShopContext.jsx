import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {

  const currency = "₹";
  const delivery_fee = 40;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Add product to cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select a size for the product");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + "/api/cart/add", { itemId, size }, { headers: { token } });
        toast.success("Added to cart");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  }

  // Get total number of items in the cart
  const getCartItems = () => {
    return Object.values(cartItems).reduce(
      (total, sizes) =>
        total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
      0
    );
  };

  // Get total cart price
  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      let product = products.find((p) => p._id === itemId);
      if (!product) return total;

      return (
        total +
        Object.values(sizes).reduce((sum, qty) => sum + qty * product.price, 0)
      );
    }, 0);
  };

  // Update quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + "/api/cart/update", { itemId, size, quantity }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error(error.message);

      }
    }
  };

  // Get products data from backend
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      console.error(error.message);
    }
  }
  
  
// Get user cart data
const getUserCart = async (token) => {
try {
  const response = await axios.post(backendUrl + "/api/cart/get", {}, { headers: { token } });
  if (response.data.success) {
    setCartItems(response.data.cartData);
  } else {
    toast.error(response.data.message);
  }
} catch (error) {
  console.log(error);
      console.error(error.message);
  
}
}

  useEffect(() => {
    getProductsData();
  }, [])

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      getUserCart(localStorage.getItem('token'));
    }

  }, []);

  return (
    <ShopContext.Provider
      value={{
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartItems, getCartAmount,
        updateQuantity, navigate, backendUrl, token, setToken
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};