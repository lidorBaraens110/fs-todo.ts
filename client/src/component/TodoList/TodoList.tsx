import { FC, useState, ChangeEvent, FormEvent } from "react";
import { Card, List, CardHeader, IconButton, Button } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux";
import {
  HANDLE_CHANGE,
  HANDLE_EXPANDED,
  INITIAL_TO_DO_WITH_DETAILS,
  INITIAL_TO_DO,
} from "../../redux/type";
import AddTodo from "../AddToDo/AddTodo";
import Todo from "../Todo/Todo";

interface TodoState {
  _id: string;
  category: string;
  name: string;
  description: string;
  done: boolean;
  expanded: boolean;
}
interface Todos {
  list: TodoState[];
  handleAddTodo: (todo: {}) => void;
  handleEditTodo: (todo: {}) => void;
  handleDelete: (id: string) => void;
  handleDone: (todo: TodoState) => void;
  category: string;
  handleOpen: () => void;
}

const TodoList: FC<Todos> = ({
  list,
  handleAddTodo,
  handleEditTodo,
  handleDelete,
  handleDone,
  category,
  handleOpen,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [addMode, setAddMode] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const todo = useSelector((state: RootState) => state.todo);

  const handleAdd = () => {
    dispatch({ type: INITIAL_TO_DO });
    setAddMode(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const handleExpanded = (id: string) => {
    dispatch({ type: HANDLE_EXPANDED, payload: id });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editMode) {
      handleEditTodo(todo);
    } else {
      handleAddTodo(todo);
    }
    setAddMode(false);
    setEditMode(false);
  };

  const editTodo = (todo: {}) => {
    dispatch({ type: INITIAL_TO_DO_WITH_DETAILS, payload: todo });
    setAddMode(true);
    setEditMode(true);
  };
  const cancel = () => {
    setAddMode(false);
    setEditMode(false);
    dispatch({ type: INITIAL_TO_DO });
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardHeader title={category} />
        <List component="nav">
          {list?.map((todo) => {
            return (
              <Todo
                todo={todo}
                editTodo={editTodo}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleExpanded={handleExpanded}
                key={todo._id}
              />
            );
          })}
          <IconButton className={classes.addButton} onClick={handleAdd}>
            <AddBox />
          </IconButton>
        </List>
        {addMode && (
          <AddTodo
            addMode={addMode}
            cancel={cancel}
            editMode={editMode}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            todo={todo}
          />
        )}
      </Card>
      <Button className={classes.deleteCategory} onClick={handleOpen}>
        delete category
      </Button>
    </div>
  );
};

export default TodoList;
