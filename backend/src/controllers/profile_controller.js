import cloudinary from "../lib/cloudinaryConfig.js";
import { protfolio_profile } from "../models/profile_schema.js";

// CRUD OPERATIONS

// Create user profile
export const create_profile = async (req, res) => {
  try {
    // check user exist or not
    const existProfile = await protfolio_profile.findOne();
    if (existProfile) {
      return res.status(400).json({
        message: "Profile already created. You can only update it.",
      });
    }
    // const file = req.file;
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

    // create user profile
    const new_create_profile = await new protfolio_profile.create({
      ...req.body,
      profile_picture: cloudinaryResponse.secure_url,
    }).save();

    return res.status(201).json({
      message: "Profile created successfully.",
      data: new_create_profile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error.", error);
  }
};

// get all user data
export const getUser = async (req, res) => {
  try {
    const getuser = await protfolio_profile.findOne();

    return res.status(200).json({
      message: "User data fetched successfully.",
      data: getuser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// update section
export const updateuserinfo = async (req, res) => {
  try {
    // check user exist or not
    const checkuser = await protfolio_profile.findOne();
    if (!checkuser) {
      return res.status(404).json({
        message: "No profile found to update.",
      });
    }

    let updateusr = { ...req.body };

    // image or file update section
    if (req.file) {
      const cloudinaryResponse = await cloudinary.uploader.upload(
        req.file.path
      );
      updateusr.profile_picture = cloudinaryResponse.secure_url;
    }

    // update profile
    const userdataupdate = await protfolio_profile.findByIdAndUpdate(
      req.params.id,
      updateusr,
      { new: true }
    );

    // if the user is not found
    if (!userdataupdate) {
      return res.status(404).json({ message: "user data not found" });
    }

    // return all updated data
    return res.status(200).json({
      message: "user data updated successfully",
      data: userdataupdate,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
