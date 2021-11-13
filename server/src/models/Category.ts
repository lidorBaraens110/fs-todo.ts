import pkg from "mongoose";
const { Schema, model } = pkg;

interface Category {
  name: string;
  userId: string;
}

const categoryScheme = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Category", categoryScheme);
