import { FC, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import { RootState } from "../../redux";
import { logout } from "../../redux/actions/authAction";
import { addCategory } from "../../redux/actions/todosAction";
import {
  List,
  Drawer,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CategoryDialog from "../../Dialog/AddCategory";

interface Props {
  setIsLoading: (val: boolean) => void;
}

const Header: FC<Props> = ({ setIsLoading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const categories = useSelector((state: RootState) => state.categories);
  const { token, user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    if (token) {
      const decodeToken: any = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        dispatch(logout());
      }
      if (location.pathname === "/auth") {
        history.push("/");
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      history.push("/auth");
    }
  }, [history, token]);

  const handleLogin = () => {
    history.push("/auth");
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleAddCategory = (category: string) => {
    dispatch(addCategory({ name: category, userId: user?.user?._id }));
    handleCloseDialog();
  };

  const navigateToCategory = (cat: string) => {
    history.push(`/todo/${cat}`);
  };

  return (
    <div className={classes.root}>
      <CategoryDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleConfirm={handleAddCategory}
      />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleOpenDrawer}
            disabled={token ? false : true}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todos
          </Typography>
          <Button color="inherit" onClick={token ? handleLogout : handleLogin}>
            {token ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleCloseDrawer}>
        <List className={classes.list}>
          {categories?.map((category, i) => {
            return (
              <div key={i}>
                <ListItem
                  button
                  className={
                    category.name === location.pathname.replace("/todo/", "")
                      ? classes.currentCat
                      : undefined
                  }
                  onClick={() => navigateToCategory(category.name)}
                >
                  <ListItemText primary={category.name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
          <ListItem button onClick={handleOpenDialog}>
            <ListItemText primary={"Add Category"} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
