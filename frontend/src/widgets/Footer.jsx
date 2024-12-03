import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="bg-red-500 text-white px-4 sm:px-8 lg:px-16">
      <div className="flex justify-between items-center pt-8">
        <div>
          <img src={assets.logo} className="w-24" />
        </div>
        <div className="flex gap-4 text-[12px]">
          <p>Home</p>
          <p>Products</p>
          <p>Categories</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Help</p>
        </div>
        <div>
          <img src={assets.socialIcons} className="w-28" />
        </div>
      </div>

      {/* Full-Width Horizontal Line and Copyright Information */}
      <div className="mt-12">
        <hr className="border-gray-200" />
        <p className="py-5 text-xs text-start text-white/40">
          @ 2024 Shopverse All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
