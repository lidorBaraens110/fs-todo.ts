import Mission from "../models/Mission";
import Category from "../models/Category";
import { Request, Response } from "express";

const getAllUserData = async (req: Request, res: Response) => {
  const { userId } = req.params;
  let data = {
    categories: [],
    todos: [],
  };

  const getTodos = async () => {
    try {
      const todos = await Mission.find({ userId: userId });
      data = { ...data, todos };
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err, message: "something go wrong" });
    }
  };

  const getCategories = async () => {
    try {
      const categories = await Category.find({ userId: userId });
      data = { ...data, categories };
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err, message: "something go wrong" });
    }
  };
  await Promise.all([getTodos(), getCategories()]);
  return res.json(data);
};

const addMission = async (req: Request, res: Response) => {
  console.log(req.body);
  const newMission = req.body;
  try {
    const mission = await Mission.create(newMission);
    return res.status(200).json(mission);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err, mission: "something go wrong" });
  }
};

const deleteMission = async (req: Request, res: Response) => {
  console.log("asfknasglk");
  const { id } = req.params;
  try {
    await Mission.findOneAndDelete({ _id: id });
    res.json("removed success");
  } catch (err) {
    res.json({ message: "something go wrong ", err });
  }
};

const updateMission = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    const updatedMission = await Mission.findOneAndUpdate(
      { _id: _id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedMission);
  } catch (err) {
    res.json({ message: "something go wrong ", err });
  }
};

const addCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    console.log(err);
    res.json({ message: "something go wrong ", err });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    await Category.find({ _id: req.params.id, userId: req.params.userId });
    res.json(true);
  } catch (err) {
    console.log(err);
    res.json(false);
  }
};

export {
  getAllUserData,
  addMission,
  deleteMission,
  updateMission,
  addCategory,
  deleteCategory,
};
