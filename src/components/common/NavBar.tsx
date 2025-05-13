import React, { useState } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const navBarItemList = [
  {
    to: "/albums",
    label: "Albums",
  },
  {
    to: "/users",
    label: "Users",
  },
];

function NavBar(): React.ReactElement {
  const [selectedItem, setSelectedItem] = useState("albums");

  return (
    <div className="w-1/5">
      <Link
        to="/"
        onClick={() => setSelectedItem("albums")}
        className="flex items-center desktop:p-4 laptopl:p-5 h-[72px]"
      >
        <p className="font-bold desktop:text-2xl laptopl:text-3xl text-teal-500">
          Music Vault
        </p>
      </Link>

      <div className="flex flex-col">
        {navBarItemList.map((item) => (
          <NavItem
            key={item.label}
            to={item.to}
            label={item.label}
            isSelected={selectedItem === item.label.toLowerCase()}
            onSelect={() => setSelectedItem(item.label.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
