import { FC, useState } from "react";
import TodoList from "../../component/TodoList/TodoList";
import { CircularProgress } from "@material-ui/core";
import useFetchList from "../../hooks/useFetchList";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux";
import {
  addTodo,
  removeTodo,
  handleDone,
  updateTodo,
  removeCategory,
} from "../../redux/actions/todosAction";
import { useStyles } from "./styles";
import DeleteCategory from "../../Dialog/DeleteCategory";

interface TodoState {
  _id: string;
  category: string;
  name: string;
  description: string;
  done: boolean;
  expanded: boolean;
}
interface CategoryParams {
  category: string;
}
const Home: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const { category } = useParams<CategoryParams>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const todos = useSelector((state: RootState) =>
    state.todos.filter((todo) => todo.category === category)
  );
  const currentCategory = useSelector((state: RootState) =>
    state.categories.filter((cat) => {
      return cat.name === category;
    })
  )[0];

  const { isLoading } = useFetchList(user?._id);

  const handleAdd = (todo: {}) => {
    dispatch(addTodo({ ...todo, category: category, userId: user._id }));
  };

  const handleEdit = (todo: {}) => {
    console.log(todo);
    dispatch(updateTodo(todo));
  };

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleDoneTodo = (todo: TodoState) => {
    dispatch(handleDone(todo));
  };

  const handleDeleteCategory = () => {
    dispatch(removeCategory(currentCategory._id));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div style={{ marginTop: "3rem" }}>
      <DeleteCategory
        open={open}
        handleClose={handleClose}
        handleConfirm={handleDeleteCategory}
      />
      <TodoList
        handleOpen={handleOpen}
        category={category}
        list={todos}
        handleDelete={handleDelete}
        handleAddTodo={handleAdd}
        handleEditTodo={handleEdit}
        handleDone={handleDoneTodo}
      />
    </div>
  );
};

export default Home;
