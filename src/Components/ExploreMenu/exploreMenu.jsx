import "./exploreMenu.css";
import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";
import { useFood } from "../../Context/FoodContext";

const ExploreMenu = () => {
  const { category, setCategory } = useFood();

  return (
    <div className="explore-menu" id="menu">
      <h1>Explore our menu</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        accusantium possimus maiores harum
      </p>
      <div className="menu-flex">
        {menu_list.map((menu, index) => {
          return (
            <div key={index} className="menu-item">
              <img
                className={category === menu.menu_name ? "active" : ""}
                onClick={() =>
                  setCategory((prev) =>
                    prev === menu.menu_name ? "All" : menu.menu_name
                  )
                }
                src={menu.menu_image}
                alt=""
              />
              <p>{menu.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
