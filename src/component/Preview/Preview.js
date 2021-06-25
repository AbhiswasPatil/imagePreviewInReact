import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  preview: {
    marginLeft: 20,
    width: 550,
    height: 950,
  },

  img: {
    width: "100%",
    height: "90%",
    objectFit: "cover",
    borderRadius: "5px",
  },

  info: {
    marginTop: "5px",
    width: "100%",
    textAlign: "center",
    color: "#666",
    fontSize: "1.2em",
    lineHeight: "30px",
    height: "30px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

function Preview(props) {
  const classes = useStyles();
  return (
    <div className={classes.preview}>
      <img
        className={classes.img}
        alt={props.item.title}
        src={props.item.previewImage}
      />
      <div className={classes.info}>{props.item.title}</div>
    </div>
  );
}

export default Preview;
