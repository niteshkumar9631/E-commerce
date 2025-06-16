import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubcategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", Number(price));
      formData.append("category", category);
      formData.append("subCategory", subcategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-4 p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <div className="w-full">
        <p className="mb-2 text-gray-700 font-semibold">Upload Image</p>
        <div className="flex gap-4">
          {[setImage1, setImage2, setImage3, setImage4].map((setImage, index) => (
            <label key={index} htmlFor={`image${index + 1}`} className="cursor-pointer">
              <img className="w-24 h-24 object-cover border rounded-md shadow-sm" src={!eval(`image${index + 1}`) ? assets.upload_area : URL.createObjectURL(eval(`image${index + 1}`))} alt="Upload" />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id={`image${index + 1}`} hidden />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 text-gray-700 font-semibold">Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" type="text" placeholder="Enter product name" required />
      </div>

      <div className="w-full">
        <p className="mb-2 text-gray-700 font-semibold">Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Write description here" required />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div>
          <p className="mb-2 text-gray-700 font-semibold">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-gray-700 font-semibold">Sub Category</p>
          <select onChange={(e) => setSubcategory(e.target.value)} className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-gray-700 font-semibold">Product Price</p>
          <input onChange={(e) => setPrice(Number(e.target.value))} className="border rounded-md px-3 py-2 w-24 focus:ring-2 focus:ring-blue-400 focus:outline-none" type="number" placeholder="Price" required />
        </div>
      </div>

      <div>
        <p className="mb-2 text-gray-700 font-semibold">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} onClick={() => setSizes((prev) => prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size])}>
              <p className={`px-3 py-1 border rounded-md cursor-pointer transition-all duration-200 ${sizes.includes(size) ? "bg-blue-100 border-blue-500" : "bg-gray-200"}`}>{size}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-400" />
        <label className="cursor-pointer text-gray-700" htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type="submit" className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-200">ADD PRODUCT</button>
    </form>
  )
}

export default Add;
