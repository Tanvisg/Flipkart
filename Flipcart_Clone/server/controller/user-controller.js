import User from "../model/user_schema.js";

export const userSignup = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist){
            return response.status(402).json({ message: 'Username already exists'});
        }

        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({ message: user })
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}