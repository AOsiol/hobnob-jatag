import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";
// import IntroHeader from "../components/IntroHeader";

function Menu() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.getMenu();
      setFood(result.data.Menu);
    };

    fetchData();
  }, []);

  return (
    <>
      <Logo />
      {food &&
        food.length > 0 &&
        identifyMenuGroups(food).map((menuGroup) => (
          <>
            <h4>{menuGroup}</h4>
            {food
              .filter((menuItem) => menuItem.type === menuGroup)
              .map((menuItem) => (
                <MenuItem props={menuItem} key={menuItem.menuItemName} />
              ))}
          </>
        ))}
    </>
  );
}

function identifyMenuGroups(foodArray) {
  return Array.from(new Set(foodArray.map((x) => x.type)));
}

export default Menu;