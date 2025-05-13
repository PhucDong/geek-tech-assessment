import React from "react";
import { useNavigate } from "react-router-dom";

interface ShowButtonProps {
  navigatePath: string;
}

function ShowButton(props: ShowButtonProps): React.ReactElement {
  const navigate = useNavigate();
  const { navigatePath } = props;

  return (
    <button
      onClick={() => navigate(navigatePath)}
      className="group flex gap-1 px-3 py-1 bg-white rounded-lg border-gray-300 border hover:border-sky-500"
    >
      <svg
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop:w-[22px] desktop:h-[22px] laptopl:w-[24px] laptopl:h-[24px]"
      >
        <path
          d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z"
          fill="none"
          id="XMLID_10_"
          stroke="#000000"
          className="group-hover:stroke-selected-icon-stroke stroke-linecap"
        />
        <circle
          cx="16"
          cy="16"
          fill="none"
          id="XMLID_12_"
          r="5"
          stroke="#000000"
          className="group-hover:stroke-selected-icon-stroke stroke-linecap"
        />
      </svg>
      <span className="desktop:text-sm laptopl:text-base text-black group-hover:text-selected-text">
        Show
      </span>
    </button>
  );
}

export default ShowButton;
