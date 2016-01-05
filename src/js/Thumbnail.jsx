var React = require('react');
var Dropdown = require('./Dropdown');

module.exports = React.createClass({
  render: function () {
    return <div className="thumbnail">
      <img src={this.props.image.src} alt={this.props.image.alt} />
      <div className="caption">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <Dropdown {...this.props.dropdown} />
      </div>
    </div>
  }
});
