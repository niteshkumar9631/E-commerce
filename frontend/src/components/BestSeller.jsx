import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  // Function to shuffle the products array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (products.length > 0) { // ✅ Prevent filtering an empty array
      const bestProductList = products.filter((item) => item.bestseller); // ✅ Fetch best sellers
      const shuffledProducts = shuffleArray([...bestProductList]); // ✅ Shuffle the best sellers
      setBestSellers(shuffledProducts.slice(0, 5)); // ✅ Pick 10 random best sellers
    }
  }, [products]); // ✅ Runs whenever `products` change

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our most popular products! These best sellers are selected fresh every time you visit.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((item) => (
          <ProductItem
            key={item._id} // ✅ Unique key
            id={item._id}  // ✅ Ensure consistency with ProductItem
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
