webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	var React = __webpack_require__(8);
	var _ = __webpack_require__(30);
	var ReactGridLayout = __webpack_require__(28);

	/**
	 * This layout demonstrates how to use static grid elements.
	 * Static elements are not draggable or resizable, and cannot be moved.
	 */
	var StaticElementsLayout = module.exports = React.createClass({
	  displayName: 'StaticElementsLayout',
	  mixins: [React.addons.PureRenderMixin],

	  getInitialState:function() {
	    return {};
	  },

	  onLayoutChange: function(layout) {
	    this.props.onLayoutChange(layout);
	    this.setState({layout: layout});
	  },

	  render:function() {
	    return (
	      React.createElement(ReactGridLayout, {className: "layout", cols: 12, onLayoutChange: this.onLayoutChange, rowHeight: 30}, 
	        React.createElement("div", {_grid: {x: 0, y: 0, w: 2, h: 3}}, React.createElement("span", {className: "text"}, "1")), 
	        React.createElement("div", {_grid: {x: 2, y: 0, w: 4, h: 3, static: true}}, React.createElement("span", {className: "text"}, "2 - Static")), 
	        React.createElement("div", {_grid: {x: 6, y: 0, w: 2, h: 3}}, React.createElement("span", {className: "text"}, "3"))
	      )
	    );
	  }
	});

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(29)(module.exports);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }
]);