import { FC } from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemIcon,
  IconButton,
  Collapse,
  Divider,
} from "@material-ui/core";
import { Delete, ExpandMore, ExpandLess, Edit } from "@material-ui/icons";
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
  handleExpanded: (id: string) => void;
  editTodo: (todo: {}) => void;
  handleDone: (todo: TodoState) => void;
  handleDelete: (id: string) => void;
  todo: TodoState;
}

const TodoList: FC<Todo> = ({
  handleExpanded,
  editTodo,
  todo,
  handleDone,
  handleDelete,
}) => {
  const classes = useStyles();

  return (
    <div key={todo._id}>
      <ListItem>
        <ListItemText
          className={todo.done ? classes.listItemText : undefined}
          primary={todo.name}
        />
        <IconButton onClick={() => handleExpanded(todo._id)}>
          {todo.expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Checkbox checked={todo.done} onClick={() => handleDone(todo)} />
        <ListItemIcon className={classes.listItemIcon}>
          <IconButton onClick={() => editTodo(todo)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDelete(todo._id)}>
            <Delete />
          </IconButton>
        </ListItemIcon>
      </ListItem>
      <Collapse
        style={{ backgroundColor: "#d3d3d3" }}
        in={todo.expanded}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary={todo.description} />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default TodoList;
