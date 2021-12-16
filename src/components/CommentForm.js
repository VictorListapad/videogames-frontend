import React from "react";
const CommentForm = ({ singleComment, func, handleCommentChange }) => {
  return (
    <div
      className="commentForm"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h4>Comments</h4>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <textarea
          value={singleComment.text}
          onChange={handleCommentChange}
          name="text"
          rows="4"
          className="form-control"
          placeholder="Your comment"
          style={{ minWidth: "80vw" }}
        />
        <button
          className="btn-primary"
          style={{ marginTop: "1rem" }}
          onClick={func}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
