import React, { Component } from "react";
import Preview from "../../component/Preview/Preview";
import Items from "../../component/Items/Items";
import items from "../../data/items_data";
import "./MainContent.css";
class MainContent extends Component {
  state = {
    activeIndex: 0,
  };

  updateActiveindex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className="mainContent">
        <Items
          items={items}
          activeIndex={this.state.activeIndex}
          updateActiveindex={this.updateActiveindex}
        />
        <Preview item={items[this.state.activeIndex]} />
      </div>
    );
  }
}

export default MainContent;
