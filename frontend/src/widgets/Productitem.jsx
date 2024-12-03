/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({
  id,
  image,
  name,
  price,
  description,
  discountPrice,
  rating,
  discountPercentage,
}) => {
  const { currency, addToCart } = useContext(ShopContext);

  return (
    <>
      {/* Product Card */}
      <div className="text-gray-700 cursor-pointer flex flex-col items-center hover:scale-105 transition-all ease-in-out">
        {/* Image Section */}
        <div className="relative bg-slate-300">
          <div className="overflow-hidden flex justify-start items-center">
            <img
              className="object-contain duration-500 w-full h-44"
              src={`http://localhost:4000${image}`}
              alt={name}
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-[100%] p-4 bg-gray-300 h-[180px] rounded-b">
          <p className="text-[14px] font-medium pb-2 text-start">{name}</p>

          {/* Price Section */}
          <div className="flex items-center gap-2">
            {discountPrice ? (
              <>
                <p className="text-sm font-semibold text-blue-950">
                  {currency}
                  {discountPrice}
                </p>
                <p className="text-xs text-gray-500 line-through">
                  {currency}
                  {price}
                </p>
                {discountPercentage && (
                  <p className="text-red-500 text-[12px] font-bold">
                    {discountPercentage} OFF*
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="text-sm font-medium">
                  {currency}
                  {price}
                </p>
              </>
            )}
          </div>

          {/* Rating Section */}
          <p className="text-xs text-gray-500 mt-2 text-start">
            {rating} ⭐⭐⭐⭐
          </p>

          {/* Add to Cart Button */}
          <div className="flex gap-4 items-center mt-4">
            <button
              onClick={() => addToCart(id)}
              className="bg-black text-white px-4 py-2 text-[12px] active:bg-gray-700 w-full"
            >
              ADD TO CART
            </button>

            {/* Cart Icon with Count */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
