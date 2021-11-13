import { FC, ChangeEvent, FormEvent } from "react";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

interface TodoState {
  _id: string;
  category: string;
  name: string;
  description: string;
  done: boolean;
  expanded: boolean;
}

interface Todo {
  cancel: () => void;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  todo: TodoState;
  addMode: boolean;
  editMode: boolean;
}

const AddTodo: FC<Todo> = ({
  todo,
  cancel,
  handleSubmit,
  handleChange,
  editMode,
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          required
          label="name"
          value={todo.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          label="description"
          value={todo.description}
          name="description"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className={classes.wrapButtons}>
          <Button variant="outlined" type="submit">
            {editMode ? "Confirm" : "Add"}
          </Button>
          <Button variant="outlined" onClick={cancel}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
