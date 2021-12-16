import { Link } from "react-router-dom";

const GameCard = ({ obj }) => {
  return (
    <div className="gameCard">
      <div className="imageContainer">
        <img src={obj.headerImage} />
      </div>
      <div className="cardInfoContainer">
        <h4>{obj.title}</h4>
        <Link className="cardBtn" to={`/game/${obj._id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
