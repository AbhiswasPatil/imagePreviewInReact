import React, { useEffect, useRef } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    display: "flex",
    width: "300px",
    height: "60px",
    borderRadius: "5px",
  },

  itemActive: {
    display: "flex",
    width: "300px",
    height: "60px",
    borderRadius: "5px",
    backgroundColor: "#2168db",
    color: "white",
  },

  img: {
    boxSizing: "border-box",
    margin: "5px 5px 5px 5px",
    objectFit: "cover",
    width: "50px",
    height: "50px",
    borderRadius: "10px",
  },

  info: {
    marginLeft: "5px",
    width: "230px",
    lineHeight: "60px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});
function Item(props) {
  const classes = useStyles();
  const titleText = useRef(null);

  const truncateTitleText = (el) => {
    if (el.scrollWidth > el.clientWidth) {
      var textData = el.textContent;
      var estimatedChars = Math.floor(
        (el.clientWidth * textData.length) / el.scrollWidth
      );
      var estimatedLength = Math.floor(estimatedChars / 2) - 3;
      var newTextData =
        textData.slice(0, 0 + estimatedLength) +
        "..." +
        textData.slice(textData.length - 1 - estimatedLength, textData.length);
      el.textContent = newTextData;
    }
  };

  useEffect(() => {
    truncateTitleText(titleText.current);
  });

  const isItActive = props.isClassActive ? classes.itemActive : classes.item;
  console.log(isItActive, ":", props.title);
  return (
    <Box className={isItActive} onClick={props.clicked}>
      <img className={classes.img} alt={props.title} src={props.previewImage} />
      <div className={classes.info} ref={titleText}>
        {props.title}
      </div>
    </Box>
  );
}

export default Item;
