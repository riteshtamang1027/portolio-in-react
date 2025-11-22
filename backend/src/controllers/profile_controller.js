import { protfolio_profile } from "../models/profile_schema.js"


export const create_profile = async (req, res) => {

    try {

        const new_create_profile = await new protfolio_profile(req.body).save()


        return res.status(201).json(
            {
                message: "Profile created successfully.",
                data: new_create_profile
            }
        )

    } catch (error) {
        return res.status(500).json("Internal server error.", error)

    }

}