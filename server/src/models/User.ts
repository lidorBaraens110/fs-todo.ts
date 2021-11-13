import pkg from "mongoose";
const { Schema, model } = pkg;

interface User {
  userName: string;
  password: string;
  email: string;
}

const userScheme = new Schema<User>(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("UserScheme", userScheme);
