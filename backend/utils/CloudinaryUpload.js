import { use } from "react";
import cloudinary from "../config/clouainary";

export const uploadToCloudinary = async (
  fileBuffer,
  FolderName,
  resourceType = "auto",
  publicId = null,
) => {
  return new Promise((resolve, reject) => {
    const options = {
      folder: FolderName,
      resource_type: resourceType,
      type: "upload",
      access_mode: "public",
      use_filename: true,
      unique_filename: true,
    };
    if (publicId) {
      if (resourceType === "raw") {
        options.public_id = publicId;
      } else {
        options.public_id = publicId.includes(".")
          ? publicId.split(".").slice(0, -1).join(".")
          : publicId; //remove extension for images to allow Cloudinary to handle it
      }
    }
    const uploadStream = cloudinary.uploader
      .upload_stream(options, (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return reject(error);
        }
        console.log("Cloudinary upload result:", result);
        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
        });
      })
      .end(fileBuffer);
  });
};
