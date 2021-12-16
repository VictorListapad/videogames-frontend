import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CommentCard = ({ comment, func }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="commentCard">
      <div className="commentContent">
        <span style={{ display: "inline-block" }}>
          {comment.author.username} on
        </span>
        <span> {comment.date.split("T")[0]}</span>
        <p>{comment.text}</p>
        {user?._id === comment.author._id || user.role === "ADMIN" ? (
          <button onClick={func}>Delete</button>
        ) : (
          <></>
        )}
        {/* <button onClick={func}>Delete</button> */}
      </div>
    </div>
  );
};

export default CommentCard;
