import { createContext, useState } from "react";
import { toast } from "react-toastify";
import apiHelper from "../apiHelper/apiHelper";

export const CommentContext = createContext({});

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [singleComment, setSingleComment] = useState({
    author: "",
    text: "",
    gameId: "",
  });

  const jwt_string = "jwtirongames";

  const getCommentsFromGame = async (id) => {
    try {
      const res = await apiHelper.get(`/comments/game/${id}`);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (obj) => {
    try {
      let { user } = JSON.parse(localStorage.getItem(jwt_string));
      obj.author = user._id;
      obj.date = new Date().toLocaleDateString();
      const res = await apiHelper.post(`/comments/comment`, obj);
      getCommentsFromGame(obj.gameId);
      toast.success("Comment created");
    } catch (error) {
      toast.error("You have to be logged in to write comments");
    }
  };

  const deleteComment = async (obj) => {
    let { user } = JSON.parse(localStorage.getItem(jwt_string));
    if (user._id !== obj.author._id) return;
    try {
      await apiHelper.delete(`/comments/comment/${obj._id}`);
      await getCommentsFromGame(obj.gameId._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        setComments,
        singleComment,
        setSingleComment,
        getCommentsFromGame,
        deleteComment,
        createComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
