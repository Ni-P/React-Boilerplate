var ReactDOM = require('react-dom');
var React = require('react');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(<p>Boilerplate Project</p>, document.getElementById('app'));
