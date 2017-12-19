var React = require('react');
var ReactDom = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDom.render(<ListManager title="Sports" />, document.getElementById('sports'));
ReactDom.render(<ListManager title="Movies" />, document.getElementById('movies'));
ReactDom.render(<ListManager title="Music" />, document.getElementById('music'));
