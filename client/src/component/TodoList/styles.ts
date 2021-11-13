import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    boxSizing: "border-box",
    minWidth: "40vw",
    minHeight: "50vh",
    textAlign: "center",
    padding: "0 1rem",
  },
  addButton: {
    marginTop: "2rem",
  },
  deleteCategory: {
    color: "white",
    backgroundColor: "#d3d3d3",
    marginTop: "1rem",
    border: "1px solid red",
    "&:hover": {
      color: "red",
    },
  },
}));
