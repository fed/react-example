var React = require('react');
var Badge = require('./Badge');

module.exports = React.createClass({
  render: function () {
    return <div className="thumbnail">
      <img src={this.props.image.src} alt={this.props.image.alt} />
      <div className="caption">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p><Badge title={this.props.badge.title} number={this.props.badge.number} /></p>
      </div>
    </div>
  }
});
