/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Productitem from "./Productitem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        {/* <Title text1={"RELATED"} text2={"PRODUCTS"} /> */}
        <p>RELATED PRODUCTS</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4 cursor-pointer">
          {related.map((item, index) => (
            <Productitem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
