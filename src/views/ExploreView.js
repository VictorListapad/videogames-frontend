import { useContext } from "react";
import GameCard from "../components/GameCard";
import { GameContext } from "../context/GameContext";

const ExploreView = () => {
  const { games, loading } = useContext(GameContext);

  return (
    <div className="exploreContainer">
      <h2>Explore</h2>
      <div className="exploreList">
        {games.map((game) => (
          <GameCard key={game._id} obj={game} />
        ))}
      </div>
    </div>
  );
};

export default ExploreView;
