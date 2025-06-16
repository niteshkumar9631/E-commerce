import {v2 as cloudinary } from "cloudinary"

const connectCloudinary = async () => {
    console.log("Connecting to Cloudinary...")
    
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY
    })
    console.log("Cloudinary connected")

}

export default connectCloudinary;