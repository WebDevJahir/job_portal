import cloudinary from "../config/clouainary.js";
import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -verificationOTP -verificationOTPExpires",
    );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const updatedData = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (phone) updatedData.phone = phone;

    //to upload resume and profile picture, we will use separate endpoints
    if (req.file && req.user.role === "user") {
      const originalName = req.file.originalname;
      const extension = originalname.split(".").pop().toLowerCase();

      //sanitized filename but keep the dextension raw files
      const nameWithoutExt = originalName
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-zA-Z0-9_-]/g, "_");
      const sanitizedBase = nameWithoutExt.replace(/[^a-zA-Z0-9_-]/g, "_");
      const sanitizedFilename = `${sanitizedBase}.${extension}`;

      //Determine resource type: images should bd 'image, docs/pdfs often safer as 'raw' for security reasons
      const isImage = ["jpg", "jpeg", "png", "gif"].includes(extension);
      const resourceType = isImage ? "image" : "raw";

      const uploadResult = await uploadToCloudinary(
        req.file.buffer,
        "jobportal/resumes",
        resourceType,
        sanitizedFilename,
      );
      if (uploadResult) {
        updatedData.resume = uploadResult.secure_url;
        updatedData.resumePublicId = uploadResult.public_id;
      }
    }
    const user = await User.findByIdAndUpdate(req.user.id, updatedData, {
      returnDocument: "after",
    }).select("-password");

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating user profile:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//helper function to upload files to cloudinary
const getPublicIdFromUrl = (url, resourceType) => {
  try{
    const parts = url.split("/");
  const uploadIndex = parts.indexOf("upload");

  if(uploadIndex === -1) {
    return null;
  }

  const pathAfterVersion = parts.slice(uploadIndex + 2).join("/"); // Skip 'upload' and version folder

  if(resourceType === 'raw') {
    return pathAfterVersion;
  }

  return pathAfterVersion.substring(0, pathAfterVersion.lastIndexOf(".")) || pathAfterVersion; // Remove file extension for images

  return null;
  }catch(error) {
    console.error("Error extracting public_id from URL:", error);
    return null;
    }
};

export const getResume = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user || !user.resume){
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            }); 
        }

        const resourceType = user.resume.includes("/raw/") ? "raw" : "image";
        const publicId = user.resumePublicId || getPublicIdFromUrl(user.resume, resourceType);
        if(!publicId) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        if(resourceType === "raw") {
            const filename = publicId.split("/").pop() || "resume";
            const format = filename.includes(".") ? filename.split(".").pop() : "pdf";
            
            const singedUrl = cloudinary.utils.private_download_url(publicId, {
                resource_type: "raw",
                filename,
                secure: true,
                expires_at: Math.floor(Date.now() / 1000) + 60 * 5, // URL valid for 5 minutes
            });
            return res.redirect(singedUrl);
        }

        //for images we can directly redirect to the secure URL since they are public
        const signedUrl = cloudinary.url(publicId, {
            resource_type: "image",
            type:"upload",
            secure: true,
            sign_url: true, // Sign the URL to prevent tampering
            expires_at: Math.floor(Date.now() / 1000) + 60 * 5, // URL valid for 5 minutes
        });

        return res.redirect(signedUrl);
    }
    catch(error) {
        console.error("Error fetching resume:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
