import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import apiHelper from "../apiHelper/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const jwt_string = "jwtirongames";
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  useEffect(() => {
    revalidateToken();
  }, [loggedIn]);

  const checkIfLoggedIn = () => {
    const tokenValue = localStorage.getItem(jwt_string);
    return tokenValue ? setLoggedIn(true) : setLoggedIn(false);
  };

  const setLocalStorageToken = (data) => {
    localStorage.setItem(jwt_string, JSON.stringify(data));
  };

  const signInUser = async (obj) => {
    try {
      const res = await apiHelper.post("/auth/signIn", obj);
      const { data } = res;
      setUser(data.user);
      setLocalStorageToken(data);
      setLoggedIn(true);
      toast.success("Signed In");
    } catch (error) {
      toast.error(`${error.res.data.message}`);
    }
  };

  const signUpUser = async (obj) => {
    const res = await apiHelper.post("/auth/signUp", obj);
    if (res.data) {
      setLocalStorageToken(res.data);
      toast.success("Signed Up!");
      setLoggedIn(true);
      setUser({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        role: "",
      });
    }
  };

  const revalidateToken = async () => {
    if (!loggedIn) return;
    try {
      const res = await apiHelper.post("/auth/renew");
      const { data } = res;
      setUser(data.user);
      setLocalStorageToken(data);
    } catch (error) {
      localStorage.removeItem(jwt_string);
      console.log(error);
    }
  };

  const logOutUser = () => {
    localStorage.removeItem(jwt_string);
    toast.success("Logged out!");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        signInUser,
        logOutUser,
        signUpUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
