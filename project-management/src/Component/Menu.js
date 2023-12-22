import React from "react";
import { MenuList } from "../Component/MenuList";
import MenuItem from "../Component/MenuItem";
import "../Component/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Project List</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.view}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
