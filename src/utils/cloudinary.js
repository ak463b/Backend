import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //File has been uploaded successfully
        //console.log("File uploaded on Cloudinary successfully", response.url);
        fs.unlinkSync(localFilePath); //remove file from local uploads folder
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //remove file from local uploads folder
        return null;
    }
}

// cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/e_sepia/l_cloudinary_icon/e_brightness:90/o_60/c_scale,w_50/fl_layer_apply,g_south_east,x_5,y_5/a_10/q_auto/front_face.png"),

// function(error,result) {console.log(result)};

export {uploadOnCloudinary}