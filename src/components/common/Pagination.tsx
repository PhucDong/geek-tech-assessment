import React from "react";

interface PaginationProps {
  label: number;
  isSelected: boolean;
  onPage: (page: number) => void;
}

function Pagination(props: PaginationProps): React.ReactElement {
  const { label, isSelected, onPage } = props;

  return (
    <div
      className={`rounded-md px-4 py-1 cursor-pointer ${
        isSelected ? "border border-sky-500" : "hover:bg-gray-200"
      }`}
      onClick={() => onPage(label)}
    >
      <p
        className={`${
          isSelected ? "text-selected-text font-semibold" : "text-default-text"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export default Pagination;
