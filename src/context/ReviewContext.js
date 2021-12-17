import { createContext, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import apiHelper from "../apiHelper/apiHelper";
import { CommentContext } from "./CommentContext";

export const ReviewContext = createContext({});

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [singleReview, setSingleReview] = useState({
    author: "",
    text: "",
    game: "",
    grade: 0,
  });

  const jwt_string = "jwtirongames";
  const getReviewsFromGame = async (id) => {
    try {
      const res = await apiHelper.get(`/reviews/game/${id}`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createReview = async (obj) => {
    try {
      const { id } = useParams();
      let { user } = JSON.parse(localStorage.getItem(jwt_string));
      obj.author = user._id;
      obj.game = id;
      const res = await apiHelper.post(
        `reviews/review/${obj.game}/${obj.author}`,
        obj
      );
      toast.success("Review Created");
    } catch (error) {
      toast.error(`You have already wrote review for this game`);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        reviews,
        setReviews,
        singleReview,
        setSingleReview,
        getReviewsFromGame,
        createReview,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default ReviewProvider;
