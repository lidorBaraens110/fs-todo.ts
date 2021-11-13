import { FC, useState, FormEvent, ChangeEvent } from "react";
import {
  Card,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useHistory } from "react-router";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { login, signUp, signIn } from "../../redux/actions/authAction";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";

interface UserDetails {
  userName: string | null;
  password: string | null;
  email: string | null;
}
interface Loading {
  isLoadingPage: boolean;
}

const Auth: FC<Loading> = ({ isLoadingPage }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const auth = useSelector((state: RootState) => state.auth);
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userD, setUserD] = useState<UserDetails>({
    userName: null,
    password: null,
    email: null,
  });

  const handleSwitchMode = () => {
    setRegister((pre) => !pre);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (register) {
      dispatch(signUp(userD, history));
    } else {
      dispatch(signIn(userD, history));
    }
  };

  const isGoogleLoginResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): response is GoogleLoginResponse => {
    return (
      !!response &&
      typeof response === "object" &&
      !!(response as GoogleLoginResponse).tokenObj
    );
  };

  const googleSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (!isGoogleLoginResponse(res)) {
      return;
    }
    try {
      const { tokenId, profileObj } = res;
      dispatch(login({ token: tokenId, user: profileObj }));
      history.push("/");
    } catch (err) {
      console.log("something go wrong", err);
    }
  };

  const googleFailure = (err: any) => {
    console.log("failure", err);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserD((pre) => {
      return { ...pre, [name]: value };
    });
  };

  if (isLoadingPage) {
    return <CircularProgress />;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.card} variant="outlined">
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography className={classes.header}>Todos</Typography>
          <TextField
            required
            label="user name"
            size="small"
            variant="outlined"
            onChange={handleChange}
            value={userD.userName}
            name="userName"
          />
          <TextField
            required
            label="password"
            type="password"
            size="small"
            variant="outlined"
            onChange={handleChange}
            value={userD.password}
            name="password"
          />
          {register && (
            <TextField
              required={register ? true : false}
              label="email"
              size="small"
              variant="outlined"
              onChange={handleChange}
              value={userD.email}
              name="email"
            />
          )}

          {auth.err && (
            <div className={classes.wrapErr}>
              <Typography className={classes.error}>{auth.err}</Typography>
            </div>
          )}
          <div className={classes.wrapper}>
            <Button
              fullWidth={true}
              type="submit"
              className={classes.submit}
              variant="contained"
              disabled={!isLoading}
            >
              {register ? "Register" : "Login"}
            </Button>
            {!isLoading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          {!register && (
            <GoogleLogin
              clientId="251848909863-40qkln41go9m9tro67pj4lrjnun4ql0h.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => {
                return (
                  <Button
                    className={classes.submit}
                    fullWidth={true}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Login With Google
                  </Button>
                );
              }}
            />
          )}
        </form>
        <Button
          onClick={handleSwitchMode}
          className={classes.register}
          size="small"
        >
          {register ? "You have already account?" : "Don't have an account"}
        </Button>
      </Card>
    </div>
  );
};

export default Auth;
