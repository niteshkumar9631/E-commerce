import React, { useContext } from 'react'
   import { ShopContext } from '../context/ShopContext'
   import { Link } from 'react-router-dom';

   const ProductItem = ({id, image, name, price}) => {
       const {currency} = useContext(ShopContext);
    // Check if image exists and if it is an array
    const imageUrl = image && Array.isArray(image) && image.length > 0 ? image[0] : '';

       return (
           <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
               <div className='overflow-hidden'>
                 {imageUrl ?  (
                //    <img className='hover:scale-110 transition ease-in-out' src={imageUrl} alt={name} />
                <img
  className='w-full h-72 object-cover hover:scale-110 transition ease-in-out duration-300 rounded-md'
  src={imageUrl}
  alt={name}
/>

                   ) : (
                    <div className='w-full h-48 bg-gray-200 flex items-center justify-center'>No Image</div>
                   )}
               </div>
               <p className='pt-3 pb-1 text-sm'>{name}</p>
               <p className='text-sm font-medium'>{currency}{price}</p>
           </Link>
       )
   }

   export default ProductItem