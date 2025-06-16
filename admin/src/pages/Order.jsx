import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'


const Order = ({ token }) => {

  const [orders, setOrders] = useState([])
  const fetchAllOrders = async () => {
    if (!token) {
      return null;

    }
    try {
      const response = await axios.post(backendUrl + "/api/order/list", {}, { headers: { token } })

      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }
const statusHandler = async (event, orderId) => {
  try {
    const response = await axios.post(backendUrl + "/api/order/status", { orderId, status: event.target.value }, { headers: { token } })
    if (response.data.success) {
      await fetchAllOrders()
      
    }
  } catch (error) {
    console.log(error)
    toast.success(response.data.message)
  }
}

  useEffect(() => {
    fetchAllOrders()
  }, [token])
  return (
    <div className="px-4 py-6 md:px-10 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Orders</h3>
  
      <div className="space-y-8">
        {orders.map((order, index) => (
          <div key={index} className="relative bg-white rounded-xl border-l-4 border-blue-600 shadow-md p-6 md:flex md:justify-between md:items-start">
  
            {/* Left Section */}
            <div className="flex items-start gap-4 md:w-2/3">
              <img src={assets.parcel_icon} alt="Parcel Icon" className="w-14 h-14 object-contain" />
  
              <div className="space-y-3">
                <div className="text-gray-800 font-semibold text-lg">
                  {order.address.firstName} {order.address.lastName}
                </div>
  
                <div className="text-sm text-gray-600">
                  {order.address.street}<br />
                  {order.address.city}, {order.address.state}, {order.address.country}, {order.address.pinCode}<br />
                  Phone: {order.address.phone}
                </div>
  
                <div className="text-sm text-gray-700">
                  <strong>Items:</strong>
                  <ul className="list-disc ml-5 space-y-1">
                    {order.items.map((item, i) => (
                      <li key={i}>{item.name} × {item.quantity} <span className="text-gray-500">({item.size})</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
  
            {/* Right Section */}
            <div className="mt-4 md:mt-0 md:w-1/3 space-y-3 text-sm text-gray-700">
              <p><span className="font-semibold">Payment Method:</span> {order.paymentMethod}</p>
              <p><span className="font-semibold">Payment Status:</span> <span className={`font-bold ${order.payment ? 'text-green-600' : 'text-red-500'}`}>{order.payment ? 'Done' : 'Pending'}</span></p>
              <p><span className="font-semibold">Date:</span> {new Date(order.date).toLocaleDateString()}</p>
              <p className="text-lg font-bold text-blue-700">{currency}{order.amount}</p>
  
              <select onChange={(event)=> statusHandler(event,order._id)} value={order.status} className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-blue-500">
                <option value="OrderPlaced">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipping">Shipped</option>
                <option value="Out for delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  

// 1return (
//   <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
//     <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h3>

//     <div className="grid gap-6">
//       {orders.map((order, index) => (
//         <div key={index} className="bg-white rounded-2xl shadow p-6 space-y-6">
//           <div className="flex items-start gap-4">
//             <img src={assets.parcel_icon} alt="Parcel Icon" className="w-12 h-12 object-contain" />

//             <div className="flex-1 space-y-2 text-sm text-gray-700">
//               <div className="space-y-1">
//                 {order.items.map((item, index) => (
//                   <p key={index}>
//                     {item.name} × {item.quantity} <span className="text-gray-500">({item.size})</span>
//                     {index < order.items.length - 1 && <span>,</span>}
//                   </p>
//                 ))}
//               </div>

//               <div className="pt-2 space-y-1 text-sm text-gray-600">
//                 <p className="font-medium">{order.address.firstName} {order.address.lastName}</p>
//                 <p>{order.address.street},</p>
//                 <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.pinCode}</p>
//                 <p className="text-gray-500">Phone: {order.address.phone}</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700 border-t pt-4">
//             <div>
//               <p><span className="font-medium">Items:</span> {order.items.length}</p>
//               <p><span className="font-medium">Method:</span> {order.paymentMethod}</p>
//               <p><span className="font-medium">Payment:</span> {order.payment ? 'Done' : 'Pending'}</p>
//               <p><span className="font-medium">Date:</span> {new Date(order.date).toLocaleDateString()}</p>
//             </div>

//             <div>
//               <p className="font-semibold text-lg text-green-600">{currency}{order.amount}</p>
//             </div>

//             <div>
//               <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="OrderPlaced">Order Placed</option>
//                 <option value="Packing">Packing</option>
//                 <option value="Shipping">Shipped</option>
//                 <option value="Out for delivery">Out For Delivery</option>
//                 <option value="Delivered">Delivered</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )

  // return (
  //   <div>
  //     <h3>Order Page</h3>
  //     <div>{
  //       orders.map((order, index) => (
  //         <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index} >
  //           <img className='w-12' src={assets.parcel_icon} alt="Parcel Icon" />
  //           <div>
  //             <div>
  //               {order.items.map((item, index) => {
  //                 if (index === order.items.length - 1) {
  //                   return <p className='py-0.5' key={index}> {item.name} X{item.quantity} <span> {item.size} </span> </p>
  //                 } else {
  //                   return <p className='py-0.5' key={index}> {item.name} X{item.quantity} <span> {item.size} </span>, </p>

  //                 }
  //               })}

  //             </div>
  //             <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
  //             <div>
  //               <p>{order.address.street + ", "}</p>
  //               <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.pinCode}</p>
  //             </div>
  //             <p>{order.address.phone}</p>
  //           </div>
  //           <div>
  //             <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
  //             <p className='mt-3'>Method : {order.paymentMethod}</p>
  //             <p className=''>Payment : { order.payment ? 'Done' : 'Pending'}</p>
  //             <p className=''>Date : {new Date (order.date).toLocaleDateString()}</p>
  //           </div>
  //           <p className='test-sm sm:text-[15px'>{currency}{order.amount}</p>
  //           <select className='p-2 font-semibold'>
  //             <option value="OrderPlaced">Order Placed</option>
  //             <option value="Packing">Packing</option>
  //             <option value="Shipping">Shipped</option>
  //             <option value="Out for delivery">Out For delivery</option>
  //             <option value="Delivered">Delivered</option>
  //           </select>
  //         </div>
  //       ))
  //     }
  //     </div>
  //   </div>
  // )
}

export default Order
