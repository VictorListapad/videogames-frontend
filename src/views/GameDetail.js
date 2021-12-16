import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GameContext } from "../context/GameContext";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import YouTubePlayer from "react-player";
import { AuthContext } from "../context/AuthContext";
import { CommentContext } from "../context/CommentContext";
import CommentForm from "../components/CommentForm";
import CommentCard from "../components/CommentCard";

const GameDetailView = () => {
  const { id } = useParams();
  const { singleGame, getGameById } = useContext(GameContext);
  const { user } = useContext(AuthContext);
  const [singleComment, setSingleComment] = useState({
    author: "",
    text: "",
    gameId: "",
  });

  const {
    setComments,
    getCommentsFromGame,
    comments,
    createComment,
    deleteComment,
  } = useContext(CommentContext);

  useEffect(() => {
    getGameById(id);
    getCommentsFromGame(id);
    setSingleComment({
      ...singleComment,
      gameId: id,
    });
  }, []);

  const handleCommentChange = (event) => {
    setSingleComment({
      ...singleComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createComment(singleComment);
    setSingleComment({
      author: "",
      text: "",
      gameId: id,
    });
  };

  const handleDelete = async (comment) => {
    const filtered = comments.filter((val) => val !== comment);
    setComments(filtered);
    await deleteComment(comment, comment._id);
  };

  return (
    <div
      className="detailContainer"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${singleGame.headerImage})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="detailInfoContainer">
        <h1>{singleGame.title}</h1>
        <h4>Developer:</h4>
        <h6> {singleGame.developer}</h6>
        <h4>Publisher:</h4>
        <h6>{singleGame.publisher}</h6>
        <h4>Genre:</h4>
        <h6>{singleGame.genre}</h6>
        <h4>Platforms </h4>
        {singleGame.platform.map((p, index) => (
          <h6 key={index}>{p?.name}</h6>
        ))}
        <h4>Release Date:</h4>
        <h6>{singleGame.releaseDate.split("T")[0]}</h6>

        <Carousel className="homeCarousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={singleGame.screenShot1}
              alt="First screenshot"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={singleGame.screenShot2}
              alt="Second screenshot"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={singleGame.screenShot3}
              alt="Third screenshot"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={singleGame.screenShot4}
              alt="Third screenshot"
            />
          </Carousel.Item>
        </Carousel>

        <div className="detailVideo">
          <YouTubePlayer className="detailVideo" url={singleGame.video} />
        </div>
        <div className="detailInfo">
          <h4>Description:</h4>
          <h5>{singleGame.description}</h5>
        </div>
        <div className="commentSection">
          <CommentForm
            handleCommentChange={handleCommentChange}
            singleComment={singleComment}
            func={handleSubmit}
          />
          {comments?.map((comment) => (
            <div key={comment._id}>
              <CommentCard
                func={() => handleDelete(comment)}
                comment={comment}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetailView;
