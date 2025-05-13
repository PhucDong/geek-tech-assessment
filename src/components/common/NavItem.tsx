import React from "react";
import { Link } from "react-router-dom";
import AlbumsNavItemIcon from "./AlbumsNavItemIcon";
import UsersNavItemIcon from "./UsersNavItemIcon";

interface NavItemProps {
  to: string;
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

function NavItem(props: NavItemProps): React.ReactElement {
  const { to, label, isSelected, onSelect } = props;

  return (
    <Link
      to={to}
      onClick={onSelect}
      className={`flex items-center gap-1 desktop:pl-8 desktop:py-3 laptopl:pl-10 laptopl:py-4 
        ${isSelected ? "bg-sky-100" : "hover:bg-slate-200"}`}
    >
      {label === "Albums" ? (
        <AlbumsNavItemIcon isNavBarItemSelected={isSelected} />
      ) : label === "Users" ? (
        <UsersNavItemIcon isNavBarItemSelected={isSelected} />
      ) : null}
      <span
        className={`${isSelected ? "text-selected-text" : "text-default-text"}`}
      >
        {label}
      </span>
    </Link>
  );
}

export default NavItem;
