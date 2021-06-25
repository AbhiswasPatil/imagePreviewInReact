import React from "react";
import Item from "./Item/Item";

function Items(props) {
  const items = props.items;
  const activeIndex = props.activeIndex;

  const itemsList = items.map((item, index) => {
    const isClassActive = index === activeIndex ? 1 : 0;
    return (
      <Item
        title={item.title}
        isClassActive={isClassActive}
        previewImage={item.previewImage}
        clicked={() => props.updateActiveindex(index)}
        key={item.id}
      />
    );
  });

  return <div>{itemsList}</div>;
}

export default Items;
