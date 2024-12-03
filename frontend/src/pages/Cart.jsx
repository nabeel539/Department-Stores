/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../widgets/Title";
import { assets } from "../assets/assets";
import CartTotal from "../widgets/CartTotal";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    console.log("Cart Items:", cartItems);
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quantity: cartItems[itemId],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3 text-start">
        <Title text={"Your Cart"} />
      </div>

      {/* Header */}
      {cartData.length === 0 ? null : (
        <div className="bg-gray-100 py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[3fr_2fr_2fr_2fr] items-center gap-4 text-sm sm:text-base font-medium">
            <div className="text-left">Product</div>
            <div className="text-right">Quantity</div>
            <div className="text-right">Price</div>
            <div className="text-right">Actions</div>
          </div>
        </div>
      )}

      {/* Cart Items */}
      <div>
        {cartData.length === 0 ? (
          <div className="text-center text-2xl text-gray-500">NO ORDERS</div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="grid grid-cols-[3fr_2fr_2fr_1fr] items-center gap-4 px-6 py-3 border-t text-gray-700"
              >
                {/* Product Details */}
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 rounded"
                    src={`http://localhost:4000${productData.image}`}
                    alt="product"
                  />
                  <div>
                    <p className="text-sm font-semibold">{productData.name}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <input
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                        className="w-16 text-center border rounded py-1"
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(item._id, Number(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="text-center">
                  <p className="text-sm font-medium">{item.quantity}</p>
                </div>

                {/* Total Price */}
                <div className="text-center">
                  <p className="text-sm font-medium">
                    {currency}
                    {(productData.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Delete Action */}
                <div className="flex justify-center">
                  <button
                    onClick={() => updateQuantity(item._id, 0)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Delete Item"
                  >
                    <img
                      src={assets.cross_icon}
                      className="w-5 h-5"
                      alt="Remove item"
                    />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
