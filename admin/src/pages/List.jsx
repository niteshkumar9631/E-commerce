import React, { useState, useEffect } from 'react'
import { backendUrl, currency } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ token }) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <p className='mb-4 text-lg font-semibold text-gray-800'>All Product List</p>

      <div className='bg-white shadow-lg rounded-lg p-4'>
        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 bg-gray-200 text-gray-800 font-semibold rounded-md'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product List */}
        {
          list.map((item, index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-3 py-2 px-3 border-b bg-white hover:bg-gray-100 transition-all duration-200 last:border-none'>
              <img className='w-20 h-20 object-cover rounded-md shadow-sm' src={item.image[0]} alt={item.name} />
              <p className="text-gray-700">{item.name}</p>
              <p className="text-gray-600">{item.category}</p>
              <p className="font-semibold">{currency}{item.price}</p>

              <div className='flex gap-2 justify-center'>
                <button 
                  onClick={() => removeProduct(item._id)} 
                  className='bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-md transition-all duration-200'
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List;
