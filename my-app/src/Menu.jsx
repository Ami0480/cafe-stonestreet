import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Menu() {
  const [showAll, setShowAll] = useState(false);

  const drinkMenu = [
    { name: "Espresso", price: "5.0" },
    { name: "Cappuccino", price: "5.0" },
    { name: "Flat White", price: "5.0" },
    { name: "Latte", price: "5.0" },
    { name: "Long Black", price: "5.0" },
    { name: "Hot Chocolate", price: "6.5" },
    { name: "Chai Latte", price: "6.0" },
    { name: "Matcha Latte", price: "6.5" },
    { name: "Iced Latte", price: "8.0" },
    { name: "Iced Mocha", price: "8.0" },
    { name: "Iced Long Black", price: "7.0" },
    { name: "Kids Juice (Apple, Orange)", price: "4.5" },
  ];
  const foodMenu = [
    { name: "Avocado Toast", price: "12.0" },
    { name: "Egg on Toast", price: "12.0" },
    { name: "Ham & Cheese Croissant", price: "13.0" },
    { name: "Mushrooms on Toast", price: "12.0" },
    { name: "Banana Pancake", price: "14.0" },
    { name: "Berries Granola", price: "14.0" },
    { name: "Big Breakfast", price: "21.0" },
    { name: "Omelette", price: "14.5" },
    { name: "Bacon & Eggs with Sourdough", price: "16.0" },
    { name: "French Toast with Fruits", price: "18.5" },
    { name: "Beef Burger", price: "19.5" },
    { name: "Fruit Toast or Croissant", price: "9.0" },
  ];

  const displayedDrink = showAll ? drinkMenu : drinkMenu.slice(0, 5);
  const displayedFood = showAll ? foodMenu : foodMenu.slice(0, 5);

  return (
    <div>
      <section className="section-container" id="full-menu">
        <h3 className="text-3xl mt-12 md:text-5xl md:my-20">Our Menu</h3>
        <div className="md:flex md:gap-24 md:mb-16">
          <div className="md:w-1/2">
            <h4 className="text-left ml-5 mt-7 font-bold md:mt-0">
              Coffee & Drinks
            </h4>
            {displayedDrink.map((service, index) => (
              <div
                className="flex mx-5 my-3 place-content-between border-b border-gray-300 md:mx-0"
                key={index}
              >
                <span>{service.name}</span>
                <span>{service.price}</span>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <h4 className="text-left ml-5 mt-7 font-bold md:mt-0">Food</h4>
            {displayedFood.map((service, index) => (
              <div
                className="flex mx-5 my-3 place-content-between border-b border-gray-300 md:mx-0"
                key={index}
              >
                <span>{service.name}</span>
                <span>{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="full-menu"
          smooth={true}
          duration={500}
          onClick={() => setShowAll(!showAll)}
          className="flex justify-center items-center text-center my-7 py-2 rounded-full w-32 mx-auto cursor-pointer text-white bg-black hover:bg-amber-950 ease-in-out"
        >
          {showAll ? "Close Menu" : "See Menu"}
        </Link>
      </section>
    </div>
  );
}
