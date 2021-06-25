import React, { useState } from "react";
import Preview from "../../component/Preview/Preview";
import Items from "../../component/Items/Items";
import items from "../../data/items_data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "auto",
    width: 1000,
    marginTop: 50,
  },
}));

function MainContent() {
  const classes = useStyles();
  const [activeIndex, updateActiveIndex] = useState(0);

  const activeIndexHandler = (e) => {
    console.log("called");
    if (e.keyCode === 38) {
      updateActiveIndex((items.length + activeIndex - 1) % items.length);
      console.log(activeIndex);
    } else if (e.keyCode === 40) {
      updateActiveIndex((activeIndex + 1) % items.length);
      console.log(activeIndex);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", activeIndexHandler);

    return () => {
      window.removeEventListener("keydown", activeIndexHandler);
    };
  });

  return (
    <div className={classes.root}>
      <Items
        items={items}
        activeIndex={activeIndex}
        updateActiveindex={updateActiveIndex}
      />
      <Preview item={items[activeIndex]} />
    </div>
  );
}

export default MainContent;
