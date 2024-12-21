import Button from "./Button";
import restaurantFood from "../images/icons_assets/restauranfood.jpg";
import Card from "./Card";
import { menu, review } from "./Data";
import ReviewCard from "./ReviewCard";
import MarioAdrianA from "../images/icons_assets/MarioandAdrianA.jpg";
import MarioAdrianB from "../images/icons_assets/MarioandAdrianb.jpg";
import { Link } from 'react-router-dom';

const Main = () => {
  return (
      <main>
        <div className="hero">
          <div className="title-section">
            <div className="titles">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/booking">
              <Button content={"Reserve a table"} />
            </Link>
          </div>
          <div className="food-image">
            <img src={restaurantFood} height={400} width={350} />
          </div>
        </div>
        <div className="highlights">
          <div className="specials">
            <h1>This Weeks Specials!</h1>
            <Button content={"Online Menu"} />
          </div>
          <div className="cards">
            {menu.map((menu) => (
              <Card
                image={menu.img}
                name={menu.name}
                price={menu.price}
                content={menu.content}
              />
            ))}
          </div>
        </div>
        <div className="testimonials">
          <h1>Testimonials</h1>
          <div className="ratings">
            {review.map((review) => (
              <ReviewCard
                rating={review.rating}
                img={review.imagen}
                name={review.name}
                reviewtxt={review.reviewtxt}
              />
            ))}
          </div>
        </div>
        <div className="about">
          <div className="aboutInfo">
            <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <div>
              <p>
                Little Lemon is a charming Italian restaurant owned by Mario and
                Adrian, two passionate chefs dedicated to bringing authentic
                Italian flavors to life. Nestled in a cozy setting, the
                restaurant offers a warm and inviting atmosphere where guests
                can enjoy freshly made pastas, wood-fired pizzas, and a
                delightful selection of wines. With Mario’s expertise in
                traditional recipes and Adrian’s flair for creative twists,
                Little Lemon perfectly balances classic and contemporary Italian
                cuisine, making it a favorite spot for food lovers.
              </p>
            </div>
          </div>
          <div className="photosMA">
            <img src={MarioAdrianA} height={300} width={500} />
            <img src={MarioAdrianB} height={300} width={500} />
          </div>
        </div>
      </main>
  );
};

export default Main;
