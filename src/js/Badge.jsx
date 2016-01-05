var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <button onClick={this.props.clickCb} className="btn btn-primary dropdown-toggle" type="button">
      {this.props.title} <span className="caret">{this.props.subtitle}</span>
    </button>
  }
});
