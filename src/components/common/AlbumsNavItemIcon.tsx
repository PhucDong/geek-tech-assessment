import React from "react";

interface AlbumsNavItemIconProps {
  isNavBarItemSelected: boolean;
}

function AlbumsNavItemIcon(props: AlbumsNavItemIconProps): React.ReactElement {
  const { isNavBarItemSelected } = props;

  return (
    <svg
      height="512"
      viewBox="0 0 512 512"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      className={`desktop:h-8 desktop:w-8 ${
        isNavBarItemSelected
          ? "stroke-selected-icon-stroke"
          : "stroke-default-icon-stroke"
      } fill-transparent`}
    >
      <title />
      <rect
        height="256"
        rx="28.87"
        ry="28.87"
        className={`stroke-[18px] stroke-linecap-round ${
          isNavBarItemSelected
            ? "stroke-selected-icon-stroke"
            : "stroke-default-icon-stroke"
        }`}
        width="384"
        x="64"
        y="176"
      />
      <line
        className={`stroke-[8px] stroke-linecap-round ${
          isNavBarItemSelected
            ? "stroke-selected-icon-stroke"
            : "stroke-default-icon-stroke"
        }`}
        x1="144"
        x2="368"
        y1="80"
        y2="80"
      />
      <line
        className={`stroke-[8px] stroke-linecap-round ${
          isNavBarItemSelected
            ? "stroke-selected-icon-stroke"
            : "stroke-default-icon-stroke"
        }`}
        x1="112"
        x2="400"
        y1="128"
        y2="128"
      />
    </svg>
  );
}

export default AlbumsNavItemIcon;
