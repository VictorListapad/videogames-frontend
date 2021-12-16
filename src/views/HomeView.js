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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerThree} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
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
