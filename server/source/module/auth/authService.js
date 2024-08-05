const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const appError = require("../../utils/appError");
const bcrypt = require("bcrypt");

// this function is responsible to signin the user  
const signIn = async (request) => {
  try {
    const { password, email } = request.body;
// checking that credential is exiting or not
    const user = await User.findOne({ email });
    if (!user) {
      throw new appError(404, "User not found");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new appError(401, "Invalid password");
    }

    const token = jwt.sign({ id: user._id.toString() }, "jwt-secret", {
      expiresIn: "1h",
    });

    return { token, user };
  } catch (error) {
    console.log(error);
    throw new appError(500, "Something went wrong");
  }
};

// this function is responsible to signup the user  
const signUp = async (request) => {
  try {
    const { email, password, name, gender, age } = request.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new appError(400, "User already exists");
    }
    //hashing password
    const hashedPassword = await bcrypt.hash(password, 12);
    return await User.create({
      email,
      password: hashedPassword,
      name,
      gender,
      age,
    });
  } catch (error) {
    console.log(error);
    throw new appError(500, "Something went wrong");
  }
};

module.exports = {
  signUp,
  signIn,
};
