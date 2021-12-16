import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PlatformContext } from "../context/PlatformContext";
import { GameContext } from "../context/GameContext";

const AddGameView = () => {
  const { singleGame, setSingleGame, createGame } = useContext(GameContext);
  const { platforms } = useContext(PlatformContext);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSingleGame({ ...singleGame, platform: [...selected] });
  }, [selected]);

  useEffect(() => {
    setSingleGame({
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
  }, []);

  const handleChange = (event) => {
    setSingleGame({ ...singleGame, [event.target.name]: event.target.value });
  };

  const handleSelectCheckbox = (value) => {
    const currentIndex = selected.findIndex((plat) => plat === value);
    let newChecked = [];
    if (currentIndex === -1) newChecked = [...selected, value];
    else newChecked = selected.filter((plat) => plat !== value);
    setSelected(newChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSingleGame({
      ...singleGame,
      platform: [...selected],
    });
    createGame(singleGame);
    setSingleGame({
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
    navigate("/explore");
  };

  return (
    <div className="addGame">
      <h2>Add Game</h2>
      <div className="formContainer">
        <form className="form">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="title"
            value={singleGame.title}
          />
          <label>Genre</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="genre"
            value={singleGame.genre}
          />
          <label>Platform</label>
          <div className="platformSelect">
            {platforms.map((plat) => (
              <div className="singleSelect" key={plat._id}>
                <input
                  type="checkbox"
                  onChange={() => handleSelectCheckbox(plat._id)}
                  checked={selected.indexOf(plat._id) !== -1}
                />
                <label>{plat.name}</label>
              </div>
            ))}
          </div>
          <label>Publisher</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="publisher"
            value={singleGame.publisher}
          />
          <label>Developer</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="developer"
            value={singleGame.developer}
          />
          <label>Release Date</label>
          <input
            type="date"
            className="form-control"
            onChange={handleChange}
            name="releaseDate"
            value={singleGame.releaseDate}
          />
          <label>Video</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="video"
            value={singleGame.video}
          />
          <label>Header Image</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="headerImage"
            value={singleGame.headerImage}
          />
          <label>Screenshot 1</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="screenShot1"
            value={singleGame.screenShot1}
          />
          <label>Screenshot 2</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="screenShot2"
            value={singleGame.screenShot2}
          />
          <label>Screenshot 3</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="screenShot3"
            value={singleGame.screenShot3}
          />
          <label>Screenshot 4</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="screenShot4"
            value={singleGame.screenShot4}
          />
          <label>Description</label>
          <textarea
            type="text"
            rows={10}
            className="form-control"
            onChange={handleChange}
            name="description"
            value={singleGame.description}
          />
          <button onClick={handleSubmit} className="form-control btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGameView;
