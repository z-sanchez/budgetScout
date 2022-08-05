import React, { useState } from "react";
import { LIGHT_GRAY } from "../utils/constants";
import searchIcon from "../assets/images/searchIcon.svg";

interface SearchBarProps {
  className?: string;
  type: string;
  placeHolder: string;
  children?: JSX.Element[] | JSX.Element;
}

const SearchBar: React.FC<SearchBarProps> = ({
  className,
  type,
  placeHolder,
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <form
        style={{ backgroundColor: LIGHT_GRAY }}
        className={`flex rounded-md py-2 pl-5 ${className}`}
      >
        <img src={searchIcon} className="w-7 h-auto" alt="search icon"></img>
        <input
          className={`appFont w-full mx-3 font-semibold text-lg bg-transparent text-left focus-visible:outline-none`}
          type={type}
          placeholder={placeHolder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        ></input>
      </form>
      <div
        className="overflow-scroll overflow-x-hidden scrollableList mb-10 lg:flex lg:justify-center lg:flex-row lg:flex-wrap"
        style={{ maxHeight: "50vh" }}
      >
        {Array.isArray(children)
          ? children.map((child: JSX.Element) => {
              if (searchValue === "") return child;
              if (child.props.budgetName.toLowerCase().includes(searchValue))
                return child;

              return null;
            })
          : (children?.props.budgetName.toLowerCase().includes(searchValue) ||
              searchValue === "") &&
            children}
      </div>
    </>
  );
};

export { SearchBar };
