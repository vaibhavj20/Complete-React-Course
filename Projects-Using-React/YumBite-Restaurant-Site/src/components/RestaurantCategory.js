import { useState } from "react";
import ItemList from "./ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="font-Poppins">
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
