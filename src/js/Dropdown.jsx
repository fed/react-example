var React = require('react');
var Badge = require('./Badge');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      open: false,
      itemTitle: this.props.title
    };
  },
  handleButtonClick: function () {
    this.setState({ open: !this.state.open }); // forces the component to re-render
  },
  handleItemClick: function (event) {
    event.preventDefault();
    this.setState({
      open: false,
      itemTitle: event.target.innerText
    });
  },
  render: function () {
    var items = this.props.items.map(function (item) {
      return <li key={item} className={this.state.itemTitle === item ? 'active' : ''}><a href onClick={this.handleItemClick}>{item}</a></li>;
    }.bind(this));

    return <div className="dropdown">
      <Badge clickCb={this.handleButtonClick} title={this.state.itemTitle} />
      <ul className={'dropdown-menu' + (this.state.open ? ' show' : '')}>{items}</ul>
    </div>
  }
});
