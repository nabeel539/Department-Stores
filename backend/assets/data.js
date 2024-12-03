const products = [
  {
    name: "Smart Watch Pro",
    description: "Feature-packed smart watch with health tracking.",
    price: 200,
    image: "/assets/images/smartwatch.jpg",
    category: "Electronics",
    subCategory: "Smart Watches",
    rating: 4.8,
    reviews: [
      { user: "Alice Green", comment: "Super convenient!", rating: 5 },
      { user: "Mark Brown", comment: "Stylish and functional.", rating: 4 },
    ],
    discountPrice: 150,
    discountPercentage: "25%",
  },
  {
    name: "Noise-Cancelling Headphones",
    description:
      "Premium wireless headphones with advanced noise cancellation.",
    price: 299,
    image: "/assets/images/headphone.jpg",
    category: "Electronics",
    subCategory: "Audio",
    rating: 4.6,
    reviews: [
      { user: "Sarah Johnson", comment: "Amazing sound quality!", rating: 5 },
      { user: "David Lee", comment: "Comfortable for long use.", rating: 4 },
    ],
    discountPrice: 249,
    discountPercentage: "17%",
  },
  {
    name: "4K Ultra HD Smart TV",
    description: "55-inch smart TV with stunning picture quality.",
    price: 799,
    image: "/assets/images/smartTV.jpg",
    category: "Electronics",
    subCategory: "Television",
    rating: 4.7,
    reviews: [
      { user: "Emily Chen", comment: "Incredible display!", rating: 5 },
      { user: "Michael Wong", comment: "Great smart features.", rating: 4 },
    ],
    discountPrice: 699,
    discountPercentage: "12%",
  },
  {
    name: "Classic Leather Jacket",
    description: "Stylish black leather jacket for men.",
    price: 250,
    image: "/assets/images/latherjackets.jpg",
    category: "Fashion",
    subCategory: "Men's Clothing",
    rating: 4.5,
    reviews: [
      { user: "Tom Harris", comment: "Perfect fit!", rating: 5 },
      { user: "Jack Smith", comment: "Great quality leather.", rating: 4 },
    ],
    discountPrice: 199,
    discountPercentage: "20%",
  },
  {
    name: "Designer Silk Scarf",
    description: "Elegant silk scarf with intricate pattern.",
    price: 120,
    image: "/assets/images/scarf.jpg",
    category: "Fashion",
    subCategory: "Accessories",
    rating: 4.6,
    reviews: [
      { user: "Emma Roberts", comment: "Beautiful design!", rating: 5 },
      { user: "Sophie Turner", comment: "Soft and luxurious.", rating: 4 },
    ],
    discountPrice: 89,
    discountPercentage: "26%",
  },
  {
    name: "Running Athletic Shoes",
    description: "Comfortable and lightweight running shoes.",
    price: 180,
    image: "/assets/images/runningshoe.jpg",
    category: "Fashion",
    subCategory: "Footwear",
    rating: 4.7,
    reviews: [
      {
        user: "Alex Rodriguez",
        comment: "Great for marathon training!",
        rating: 5,
      },
      { user: "Lisa Kim", comment: "Very comfortable.", rating: 4 },
    ],
    discountPrice: 149,
    discountPercentage: "17%",
  },
  {
    name: "Next-Gen Gaming Console",
    description: "Latest generation gaming console with 4K capabilities.",
    price: 499,
    image: "/assets/images/gamingconsole.jpg",
    category: "Games",
    subCategory: "Gaming Consoles",
    rating: 4.9,
    reviews: [
      { user: "Jake Miller", comment: "Best console ever!", rating: 5 },
      { user: "Ryan Garcia", comment: "Amazing graphics.", rating: 4 },
    ],
    discountPrice: 449,
    discountPercentage: "10%",
  },
  {
    name: "Wireless Gaming Headset",
    description: "High-performance wireless gaming headphones.",
    price: 199,
    image: "/assets/images/gaimgheadphone.jpg",
    category: "Games",
    subCategory: "Gaming Accessories",
    rating: 4.6,
    reviews: [
      { user: "Chris Evans", comment: "Crystal clear sound!", rating: 5 },
      {
        user: "Mike Johnson",
        comment: "Comfortable for long gaming sessions.",
        rating: 4,
      },
    ],
    discountPrice: 159,
    discountPercentage: "20%",
  },
  {
    name: "Popular Strategy Video Game",
    description: "Immersive strategy game with complex gameplay.",
    price: 59,
    image: "/assets/images/videogame.jpg",
    category: "Games",
    subCategory: "Video Games",
    rating: 4.7,
    reviews: [
      { user: "Sarah Williams", comment: "Addictive gameplay!", rating: 5 },
      { user: "Kevin Lee", comment: "Great storyline.", rating: 4 },
    ],
    discountPrice: 49,
    discountPercentage: "17%",
  },
  {
    name: "Luxury Throw Pillow Set",
    description: "Soft and elegant decorative throw pillows.",
    price: 89,
    image: "/assets/images/pillowset.jpg",
    category: "Home Accessories",
    subCategory: "Cushions",
    rating: 4.5,
    reviews: [
      { user: "Emily Davis", comment: "Perfect home decor!", rating: 5 },
      { user: "Rachel Green", comment: "Great color and texture.", rating: 4 },
    ],
    discountPrice: 69,
    discountPercentage: "22%",
  },
  {
    name: "Modern Table Lamp",
    description: "Sleek design table lamp with adjustable brightness.",
    price: 129,
    image: "/assets/images/tablelamp.jpg",
    category: "Home Accessories",
    subCategory: "Lighting",
    rating: 4.6,
    reviews: [
      { user: "John Smith", comment: "Beautiful design!", rating: 5 },
      { user: "Maria Garcia", comment: "Great mood lighting.", rating: 4 },
    ],
    discountPrice: 99,
    discountPercentage: "23%",
  },
  {
    name: "Ceramic Plant Pot Set",
    description: "Elegant ceramic plant pots for indoor gardening.",
    price: 79,
    image: "/assets/images/plants.jpg",
    category: "Home Accessories",
    subCategory: "Gardening",
    rating: 4.7,
    reviews: [
      { user: "Sophie Lee", comment: "Perfect for my plants !", rating: 5 },
      { user: "Daniel Kim", comment: "Stylish and sturdy.", rating: 4 },
    ],
    discountPrice: 59,
    discountPercentage: "25%",
  },
];

export default products;
