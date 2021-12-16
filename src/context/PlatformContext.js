import { createContext, useEffect, useState } from "react";
import apiHelper from "../apiHelper/apiHelper";

export const PlatformContext = createContext({});

const PlatformProvider = ({ children }) => {
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    getPlatforms();
  }, []);

  const getPlatforms = async () => {
    try {
      const res = await apiHelper.get(`/platforms`);
      setPlatforms(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PlatformContext.Provider value={{ platforms }}>
      {children}
    </PlatformContext.Provider>
  );
};

export default PlatformProvider;
