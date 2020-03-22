import React from "react";

import "./sortByComponent.css";

import Dropdown from "./common/select";

class SortByComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByOptions: [
        { id: "Date", key: "Date" },
        { id: "Value Date", key: "Value Date" },
        { id: "Balance AMT", key: "Balance AMT" }
      ]
    };
    this.handleOnselectItem = this.handleOnselectItem.bind(this);
  }

  handleOnselectItem = sortBy => {
    this.props.handleSortBy(sortBy);
  };

  render() {
    return (
      <div className="">
        <Dropdown
          title=""
          list={this.state.sortByOptions}
          onSelectItem={this.handleOnselectItem}
        />
      </div>
    );
  }
}

export default SortByComponent;
