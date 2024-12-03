import { assets } from "@/assets/assets";
import Title from "./Title";

const FeaturedProduct = () => {
  return (
    <div className="my-10">
      <div className="text-start py-8 text-3xl">
        <Title text={"Features"} />
      </div>

      {/* Render products */}
      <div className="flex gap-3 w-[100%]">
        <img src={assets.slide2} className="w-[50%]" />
        <img src={assets.slide3} className="w-[50%]" />
      </div>
    </div>
  );
};

export default FeaturedProduct;
