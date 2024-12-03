/* eslint-disable react/prop-types */

import { assets } from "@/assets/assets";

const Title = ({ text }) => {
  return (
    <div className="flex gap-2 justify-start">
      <img src={assets.block} className="w-7" />
      <h1 className="text-3xl font-bold">{text}</h1>
    </div>
  );
};

export default Title;
