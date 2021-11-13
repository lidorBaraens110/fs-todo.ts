import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: "2rem",
  },
  wrapButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "2rem ",
  },
}));
