var React = require('react');
var Thumbnail = require('./Thumbnail');

module.exports = React.createClass({
  render: function () {
    var list = this.props.thumbnails.map(function (thumbnail) {
      return <div className="col-sm-6 col-md-4" key={thumbnail.id}>
        <Thumbnail {...thumbnail} />
      </div>
    });

    return <div className="row">
      {list}
    </div>
  }
});
