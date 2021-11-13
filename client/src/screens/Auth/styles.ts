import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#d3d3d3",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    height: "45vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    fontSize: "1.5rem",
  },
  card: {
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    textAlign: "center",
  },
  submit: {
    backgroundColor: "blue",
    color: "white",
  },
  register: {
    fontSize: "0.7rem",
    padding: "0.25rem 0.5rem",
  },
  wrapper: {
    width: "100%",
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  wrapRegister: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  typography: {
    fontSize: "0.7rem",
  },
  wrapErr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  error: {
    fontSize: "0.7rem",
    color: "red",
  },
}));
