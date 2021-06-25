import React, { Component } from "react";
import "./Item.css";
class item extends Component {
  constructor(props) {
    super(props);
    this.titleText = React.createRef();
  }
  truncateTitleText(el) {
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
  }
  componentDidMount() {
    console.log(
      this.titleText.current.scrollWidth,
      this.titleText.current.clientWidth
    );
    this.truncateTitleText(this.titleText.current);
  }
  render() {
    return (
      <div className={this.props.class} onClick={this.props.clicked}>
        <img alt={this.props.title} src={this.props.previewImage} />
        <div className="info" ref={this.titleText}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default item;
