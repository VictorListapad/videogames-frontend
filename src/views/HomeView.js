import bannerOne from "../images/banner-main.png";
import bannerTwo from "../images/banner-2.jpeg";
import bannerThree from "../images/banner-3.jpeg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
const HomeView = () => {
  return (
    <div className="homeViewContainer">
      <Carousel className="homeCarousel">
        <Carousel.Item>
          <img className="d-block w-100" src={bannerOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Greetings!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3>Constantly growing DB!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerThree} alt="Third slide" />
          <Carousel.Caption>
            <h3>Add your favorite games!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="explore">
        <h1>Become a part of our community</h1>
        <Link to="/explore">Jump In</Link>
      </div>
    </div>
  );
};
export default HomeView;
