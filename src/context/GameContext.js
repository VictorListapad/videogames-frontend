import { createContext, useEffect, useState } from "react";
import apiHelper from "../apiHelper/apiHelper";
import { toast } from "react-toastify";
export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const jwt_string = "jwtirongames";
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [singleGame, setSingleGame] = useState({
    title: "",
    genre: "",
    platform: [],
    publisher: "",
    developer: "",
    releaseDate: "",
    video: "",
    headerImage: "",
    screenShot1: "",
    screenShot2: "",
    screenShot3: "",
    screenShot4: "",
    description: "",
    reviews: [],
  });

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    setLoading(true);
    setTimeout(async () => {
      const res = await apiHelper.get("/games");
      setGames(res.data);
      setLoading(false);
    }, 2000);
  };

  const getGameById = async (id) => {
    try {
      const res = await apiHelper.get(`/games/game/${id}`);
      setSingleGame(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createGame = async (obj) => {
    const res = await apiHelper.post("/games/game", obj);
    toast.success("Game created successfully");
    getAllGames();
  };

  const editGame = async (id, obj) => {
    const response = await apiHelper.put(`/games/game/${id}`, obj);
    toast.success("Game updated successfully");
    getAllGames();
  };

  const deleteGame = async (id) => {
    await apiHelper.delete(`/games/game/${id}`);
    toast.error("Successfully deleted");
    getAllGames();
  };

  return (
    <GameContext.Provider
      value={{
        games,
        singleGame,
        loading,
        getGameById,
        editGame,
        createGame,
        deleteGame,
        setSingleGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
