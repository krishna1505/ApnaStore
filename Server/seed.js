import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "./models/productModel.js";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const productsData = [
  // MEN PRODUCTS
  {
    name: "Men Oversized Black T-Shirt",
    category: "Men",
    subcategory: "Topwear",
  },
  {
    name: "Men White Casual Shirt",
    category: "Men",
    subcategory: "Topwear",
  },
  {
    name: "Men Blue Denim Jacket",
    category: "Men",
    subcategory: "Winterwear",
  },
  {
    name: "Men Slim Fit Jeans",
    category: "Men",
    subcategory: "Bottomwear",
  },
  {
    name: "Men Cargo Pants",
    category: "Men",
    subcategory: "Bottomwear",
  },
  {
    name: "Men Sports Hoodie",
    category: "Men",
    subcategory: "Winterwear",
  },
  {
    name: "Men Formal Blazer",
    category: "Men",
    subcategory: "Winterwear",
  },
  {
    name: "Men Printed Sweatshirt",
    category: "Men",
    subcategory: "Winterwear",
  },
  {
    name: "Men Polo T-Shirt",
    category: "Men",
    subcategory: "Topwear",
  },
  {
    name: "Men Cotton Kurta",
    category: "Men",
    subcategory: "Ethnic",
  },

  // WOMEN PRODUCTS
  {
    name: "Women Floral Kurti",
    category: "Women",
    subcategory: "Ethnic",
  },
  {
    name: "Women Pink Hoodie",
    category: "Women",
    subcategory: "Winterwear",
  },
  {
    name: "Women Party Dress",
    category: "Women",
    subcategory: "Topwear",
  },
  {
    name: "Women Silk Saree",
    category: "Women",
    subcategory: "Ethnic",
  },
  {
    name: "Women Crop Top",
    category: "Women",
    subcategory: "Topwear",
  },
  {
    name: "Women High Waist Jeans",
    category: "Women",
    subcategory: "Bottomwear",
  },
  {
    name: "Women Leather Jacket",
    category: "Women",
    subcategory: "Winterwear",
  },
  {
    name: "Women Gym Wear Set",
    category: "Women",
    subcategory: "Sportswear",
  },
  {
    name: "Women Long Coat",
    category: "Women",
    subcategory: "Winterwear",
  },
  {
    name: "Women Palazzo Pants",
    category: "Women",
    subcategory: "Bottomwear",
  },

  // KIDS PRODUCTS
  {
    name: "Kids Cartoon T-Shirt",
    category: "Kids",
    subcategory: "Kids Wear",
  },
  {
    name: "Kids Denim Jacket",
    category: "Kids",
    subcategory: "Kids Wear",
  },
  {
    name: "Kids Hoodie",
    category: "Kids",
    subcategory: "Kids Wear",
  },
  {
    name: "Kids Printed Shorts",
    category: "Kids",
    subcategory: "Kids Wear",
  },
  {
    name: "Kids Winter Sweater",
    category: "Kids",
    subcategory: "Kids Wear",
  },
];

const imageList = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  "https://images.unsplash.com/photo-1445205170230-053b83016050"
];

const sizes = ["S", "M", "L", "XL"];

const products = [];

for (let i = 1; i <= 100; i++) {
  const randomProduct =
    productsData[Math.floor(Math.random() * productsData.length)];

  const randomImage =
    imageList[Math.floor(Math.random() * imageList.length)];

  products.push({
    name: `${randomProduct.name} ${i}`,

    description: `Premium quality ${randomProduct.name} designed for comfort, fashion, and everyday wear.`,

    price: Math.floor(Math.random() * 4000) + 500,

    image: [randomImage],

    category: randomProduct.category,

    subcategory: randomProduct.subcategory,

    sizes: sizes,

    bestseller: Math.random() > 0.6,

    date: Date.now(),
  });
}

const seedProducts = async () => {
  try {
    await productModel.deleteMany();

    await productModel.insertMany(products);

    console.log("100 Actual Products Added Successfully");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedProducts();