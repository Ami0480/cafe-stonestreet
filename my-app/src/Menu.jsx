import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Menu() {
  const [showAll, setShowAll] = useState(false);

  const drinkMenu = [
    { name: "Espresso", ja: "エスプレッソ", price: "5.0" },
    { name: "Cappuccino", ja: "カプチーノ", price: "5.0" },
    { name: "Flat White", ja: "フラットホワイト", price: "5.0" },
    { name: "Latte", ja: "ラテ", price: "5.0" },
    { name: "Long Black", ja: "ロングブラック", price: "5.0" },
    { name: "Hot Chocolate", ja: "ホットチョコレート", price: "6.5" },
    { name: "Chai Latte", ja: "チャイラテ", price: "6.0" },
    { name: "Matcha Latte", ja: "抹茶ラテ", price: "6.5" },
    { name: "Iced Latte", ja: "アイスラテ", price: "8.0" },
    { name: "Iced Mocha", ja: "アイスモカ", price: "8.0" },
    { name: "Iced Long Black", ja: "アイスロングブラック", price: "7.0" },
    { name: "Kids Juice (Apple, Orange)", ja: "キッズジュース", price: "4.5" },
  ];
  const foodMenu = [
    { name: "Avocado Toast", ja: "アボカドトースト", price: "12.0" },
    { name: "Egg on Toast", ja: "エッグオントースト", price: "12.0" },
    {
      name: "Ham & Cheese Croissant",
      ja: "ハム＆チーズクロワッサン",
      price: "13.0",
    },
    {
      name: "Mushrooms on Toast",
      ja: "マッシュルームオントースト",
      price: "12.0",
    },
    { name: "Banana Pancake", ja: "バナナパンケーキ", price: "14.0" },
    { name: "Berries Granola", ja: "ベリーグラノーラ", price: "14.0" },
    { name: "Big Breakfast", ja: "ビッグブレックファスト", price: "21.0" },
    { name: "Omelette", ja: "オムレツ", price: "14.5" },
    {
      name: "Bacon & Eggs with Sourdough",
      ja: "ベーコン＆エッグ（サワードゥ付）",
      price: "16.0",
    },
    {
      name: "French Toast with Fruits",
      ja: "フレンチトースト（フルーツ添え）",
      price: "18.5",
    },
    { name: "Beef Burger", ja: "ビーフバーガー", price: "19.5" },
    {
      name: "Fruit Toast or Croissant",
      ja: "フルーツトースト または クロワッサン",
      price: "9.0",
    },
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
                className="flex text-left mx-5 my-3 place-content-between border-b border-gray-300"
                key={index}
              >
                <span className="flex-1 min-w-0 mr-2">
                  {service.name}{" "}
                  <span className="text-gray-600">{service.ja}</span>
                </span>
                <span className="shrink-0">{service.price}</span>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <h4 className="text-left ml-5 mt-7 font-bold md:mt-0">Food</h4>
            {displayedFood.map((service, index) => (
              <div
                className="flex text-left mx-5 my-3 place-content-between border-b border-gray-300"
                key={index}
              >
                <span className="flex-1 min-w-0 mr-2">
                  {service.name}{" "}
                  <span className="text-gray-600">{service.ja}</span>
                </span>
                <span className="shrink-0">{service.price}</span>
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
