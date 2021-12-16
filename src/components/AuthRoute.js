import { useContext } from "react";
import { Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";
import SignInView from "../views/SignInView";

const AuthRoute = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? <Outlet /> : <SignInView />;
};

export default AuthRoute;
