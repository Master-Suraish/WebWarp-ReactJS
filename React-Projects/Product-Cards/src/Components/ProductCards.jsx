const ProductCards = () => {
  const productsData = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 59.99,
      category: "Electronics",
      inStock: true,
      rating: 4.5,
      image: "bluetooth.jpeg",
    },
    {
      id: 2,
      name: "Stainless Steel Water Bottle",
      price: 19.99,
      category: "Home & Kitchen",
      inStock: true,
      rating: 4.8,
      image: "Stainless Steel Water Bottle.jpeg",
    },
    {
      id: 3,
      name: "Gaming Mechanical Keyboard",
      price: 89.99,
      category: "Computers",
      inStock: false,
      rating: 4.7,
      image: "Gaming Mechanical Keyboard.jpeg",
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 199.99,
      category: "Furniture",
      inStock: true,
      rating: 4.4,
      image: "Ergonomic Office Chair.jpeg",
    },
    {
      id: 5,
      name: "Organic Cotton T-Shirt",
      price: 25.0,
      category: "Fashion",
      inStock: true,
      rating: 4.3,
      image: "Organic Cotton T-Shirt.jpeg",
    },
    {
      id: 6,
      name: "Smart Fitness Watch",
      price: 129.99,
      category: "Electronics",
      inStock: true,
      rating: 4.6,
      image: "Smart Fitness Watch.jpeg",
    },
    {
      id: 7,
      name: "Portable Bluetooth Speaker",
      price: 45.99,
      category: "Electronics",
      inStock: true,
      rating: 4.5,
      image: "Portable Bluetooth Speaker.jpeg",
    },
    {
      id: 8,
      name: "Noise Cancelling Earbuds",
      price: 79.99,
      category: "Electronics",
      inStock: false,
      rating: 4.4,
      image: "Noise Cancelling Earbuds.jpeg",
    },
    {
      id: 9,
      name: "4K Ultra HD Smart TV",
      price: 499.99,
      category: "Electronics",
      inStock: true,
      rating: 4.7,
      image: "4K Ultra HD Smart TV.jpeg",
    },
    {
      id: 10,
      name: "Laptop Backpack",
      price: 39.99,
      category: "Bags",
      inStock: true,
      rating: 4.5,

      image: "Laptop Backpack.jpeg",
    },
    {
      id: 11,
      name: "Electric Kettle",
      price: 29.99,
      category: "Home & Kitchen",
      inStock: true,
      rating: 4.6,
      image: "Electric Kettle.jpeg",
    },
    {
      id: 12,
      name: "Yoga Mat",
      price: 22.99,
      category: "Sports & Outdoors",
      inStock: true,
      rating: 4.8,
      image: "Yoga Mat.jpeg",
    },
    {
      id: 13,
      name: "Cookware Set",
      price: 149.99,
      category: "Home & Kitchen",
      inStock: false,
      rating: 4.7,
      image: "Cookware Set.jpeg",
    },
    {
      id: 14,
      name: "Camping Tent for 4",
      price: 89.99,
      category: "Sports & Outdoors",
      inStock: true,
      rating: 4.6,
      image: "tent.jpeg",
    },
    {
      id: 15,
      name: "Wireless Charging Pad",
      price: 29.99,
      category: "Electronics",
      inStock: true,
      rating: 4.4,
      image: "Wireless Charging Pad.jpeg",
    },
  ];

  return (
    <div className="bg-blue-300 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center">
      {productsData.map((obj) => {
        const { name, category, id, inStock, price, rating, image } = obj;
        return (
          <div className="text-gray-200 h-120 w-80 fontSize18px font-semibold mt-5 mb-5 ms-5">
            <div className="h-50">
              <img src={image} alt={name} className="h-50 w-80 rounded-t-3xl" />
            </div>

            <div className="gradiendGreybg rounded-b-3xl h-70 flex flex-col ps-3 justify-evenly">
              <div className="font-bold text-2xl text-amber-50">
                <p>{name}</p>
              </div>

              <div className="flex">
                <p>Category : </p>
                <p className="font-bold customBlueColor ps-6">{category}</p>
              </div>

              <div className="flex">
                <p>Price :</p>
                <p className=" font-bold customBlueColor ps-15">${price}</p>
              </div>

              <div className="flex">
                <p>Stock :</p>
                <p className=" font-bold customBlueColor ps-14">
                  {inStock ? "Available" : "Sorry, Not available"}
                </p>
              </div>

              <div className="flex">
                <p>Rating :</p>
                <p className=" font-bold customBlueColor ps-12">{rating}⭐</p>
              </div>

              <div className="flex justify-center">
                <button className="customBlueBgColor h-10 w-50 rounded-lg font-bold text-amber-50 cursor-pointer">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
