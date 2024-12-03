// import { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";

// const CartTotal = () => {
//   const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

//   return (
//     <div className="w-full">
//       <div className="text-2xl text-start">
//         <Title text1={"Cart"} text2={"Cart Totals"} />
//       </div>
//       <div className="flex flex-col gap-2 mt-2 text-sm">
//         <div className="flex justify-between">
//           <p> Subtotal</p>
//           <p>
//             {currency}
//             {getCartAmount()}.00
//           </p>
//         </div>
//         <hr />
//         <div className="flex justify-between">
//           <p>Shipping Fee</p>
//           <p>
//             {currency}
//             {delivery_fee}.00
//           </p>
//         </div>
//         <hr />
//         <div className="flex justify-between">
//           <b>Total</b>
//           <b>
//             {currency}
//             {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
//           </b>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartTotal;
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount, navigate } =
    useContext(ShopContext);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Title */}
      <div className="text-center mb-6">
        <Title text1={"Cart"} text2={"Summary"} />
      </div>

      {/* Totals Section */}
      <div className="flex flex-col gap-4 text-base">
        {/* Subtotal */}
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold text-gray-800">
            {currency}
            {getCartAmount()}.00
          </p>
        </div>

        {/* Shipping Fee */}
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
          <p className="text-gray-600">Shipping Charges</p>
          <p className="font-semibold text-gray-800">
            {currency}
            {delivery_fee}.00
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Total */}
        <div className="flex justify-between items-center p-4 bg-red-50 rounded-md shadow-sm border border-red-200">
          <b className="text-red-600 text-lg">Total</b>
          <b className="text-red-600 text-lg">
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-center">
        <button
          className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={() => navigate("/place-order")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
