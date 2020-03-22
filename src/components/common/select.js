import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title || "-Select-"
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * On clicking outside of Dropdown component close the Dropdown Menu
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        listOpen: false
      });
    }
  }

  toggleDropdown() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  selectItem(event, key, id) {
    event.preventDefault();
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
      headerTitle: key
    }));

    this.props.onSelectItem(id);
  }

  renderList(list) {
    return (
      <ul className="dropdown-menu show">
        {list.map((item, id) => (
          <a
            className="dropdown-item"
            href="#"
            key={item.id}
            onClick={event => this.selectItem(event, item.key, item.id)}
          >
            {" "}
            {item.key}{" "}
          </a>
        ))}
      </ul>
    );
  }

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;

    return (
      <div
        className={"dd-list " + (listOpen ? "show" : "")}
        ref={this.setWrapperRef}
      >
        <div className="dd-header" onClick={this.toggleDropdown}>
          <div className="dd-header-title">{headerTitle}</div>
        </div>
        {listOpen && this.renderList(list)}
      </div>
    );
  }
}

export default Dropdown;
