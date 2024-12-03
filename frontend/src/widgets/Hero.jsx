import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets"; // Ensure this path is correct

const heroImages = [
  { id: 1, url: assets.slide1 },
  { id: 2, url: assets.slide2 },
  { id: 3, url: assets.slide3 },
];

export function AutoplayCarousel() {
  return (
    <div className="embla">
      <div className="embla__container">
        {heroImages.map((image) => (
          <div className="embla__slide" key={image.id}>
            <img
              src={image.url}
              alt={`Hero Image ${image.id}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <NavLink to={"/collection"}>
      <div className="">
        <AutoplayCarousel />
      </div>
    </NavLink>
  );
}

export default Hero;
