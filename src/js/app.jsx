// 1. Define a React component class
var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./ThumbnailList');

// 2. Ask React to render the class
var model = require('../model/thumbnails.json');
var element = React.createElement(ThumbnailList, model);

// 3. Tell React where to place the rendered element in the DOM
ReactDOM.render(element, document.getElementById('app'));
