import hero1 from "../Assets/hero1.webp";
import hero2 from "../Assets/hero2.webp";
import hero3 from "../Assets/hero3.webp";

import { Link } from "react-router-dom";
const carousalImages = [hero1, hero2, hero3];
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap- items-center p-20 ">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight ">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="carousel-item w-full gap-9 ">
        {carousalImages.map((image) => {
          return (
            <div key={image} className="">
              <img
                src={image}
                className="rounded-box h-full w-80 object-fill"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
