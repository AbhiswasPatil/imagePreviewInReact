import React, { Component } from "react";
import Item from "./Item/Item";
import "./Items.css";
class Items extends Component {
  render() {
    const items = this.props.items;
    const activeIndex = this.props.activeIndex;

    const itemsList = items.map((item, index) => {
      const classValue = index === activeIndex ? "item active" : "item";
      return (
        <Item
          title={item.title}
          class={classValue}
          previewImage={item.previewImage}
          clicked={() => this.props.updateActiveindex(index)}
          key={item.id}
        />
      );
    });

    return (
      <>
        <div className="items">{itemsList}</div>
      </>
    );
  }
}

export default Items;
