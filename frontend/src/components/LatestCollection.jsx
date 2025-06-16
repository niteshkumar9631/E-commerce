/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    // Function to shuffle the products array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        if (products.length > 0) {
            // Shuffle the products and take the first 15
            const shuffledProducts = shuffleArray([...products]);
            setLatestProducts(shuffledProducts.slice(0, 15));
        }
    }, [products]); // Runs whenever products change

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Discover the latest trends, fresh styles, and exclusive picks designed just for you. Whether you're updating your wardrobe, revamping your space, or looking for the perfect gift, our latest collection has something for everyone.
                </p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
