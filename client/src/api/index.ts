import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use((req: AxiosRequestConfig) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")!).token
    }`;
  }
  return req;
});

const getAllUserData = (user: string) => instance.get(`/todo/${user}`);
const editUser = (userId: string) => instance.post("/user/editUser", userId);
const register = (user: {}) => instance.post("/user/register", user);
const login = (user: {}) => instance.post(`/user/login`, user);
const addTodo = (todo: {}) => instance.post("/todo", todo);
const deleteTodo = (id: string) => instance.delete(`/todo/${id}`);
const updateTodo = (todo: {}) => instance.post("/todo/updateTodo", todo);
const deleteCategory = (id: string) => instance.delete(`/todo/category/${id}`);
const addCategory = (category: {}) =>
  instance.post("/todo/addCategory", category);

const defaultObject = {
  editUser,
  register,
  login,
  getAllUserData,
  addTodo,
  deleteTodo,
  updateTodo,
  deleteCategory,
  addCategory,
};

export default defaultObject;
