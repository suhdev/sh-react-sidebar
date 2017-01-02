/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Sidebar = (function (_super) {
	    __extends(Sidebar, _super);
	    function Sidebar(props) {
	        var _this = _super.call(this, props) || this;
	        _this._onSearch = _this._onSearch.bind(_this);
	        _this._onItemClick = _this._onItemClick.bind(_this);
	        _this._getViewForItem = _this._getViewForItem.bind(_this);
	        _this.state = {
	            searchValue: ""
	        };
	        return _this;
	    }
	    Sidebar.prototype._onSearch = function (e) {
	        var el = e.currentTarget;
	        var value = el.value;
	        this.setState({
	            searchValue: value
	        });
	    };
	    Sidebar.prototype._getViewForItem = function (item, index, selected) {
	        var props = this.props;
	        return (React.createElement(item.href ? 'a' : 'div', {
	            'data-selected': item === selected,
	            'data-index': index,
	            href: item.href,
	            className: 'sh-sidebar-item',
	            key: (props.getKeyForItem && props.getKeyForItem(item, index)) || item.key,
	            onClick: this._onItemClick,
	        }, [React.createElement('div', {
	                className: 'sh-sidebar-label'
	            }, ((props.getLabelForItem && props.getLabelForItem(item, index)) || item.label)),
	            React.createElement('div', {
	                className: 'sh-sidebar-arrow'
	            }, '')]));
	    };
	    Sidebar.prototype._onItemClick = function (e) {
	        var props = this.props, el = e.currentTarget, idx = parseInt(el.getAttribute("data-index")), item = props.items[idx];
	        props.onItemClick && props.onItemClick(item, idx);
	    };
	    Sidebar.prototype.render = function () {
	        var props = this.props, state = this.state, clz = 'sh-react-sidebar ' + (props.className || ""), placeholder = props.placeholder || 'Search...', hasSearch = (typeof props.hasSearch === "undefined") ? false : props.hasSearch, reg = new RegExp(['.*', state.searchValue, '.*'].join(''), 'ig'), getLabelForItem = props.getLabelForItem, getKeyForItem = props.getKeyForItem, isLoading = props.isLoading, getViewForItem = props.getViewForItem || this._getViewForItem, emptyLine = props.emptyLine || 'No results where found', preloader = (typeof props.preloader === "function") ? props.preloader() : props.preloader, items = props.items.filter(function (em, i) {
	            reg.lastIndex = 0;
	            return reg.test((getLabelForItem && getLabelForItem(em, i)) || em.label);
	        });
	        preloader = preloader || (React.createElement("div", { className: "sh-sidebar-preloader" }, props.preloaderString || 'Loading...'));
	        return (React.createElement("div", { className: clz },
	            React.createElement("div", { className: "sh-sidebar-wrapper" },
	                hasSearch ? (React.createElement("div", { className: "sh-sidebar-search-wrapper" },
	                    React.createElement("input", { type: "text", placeholder: placeholder, className: "sh-search-field", value: state.searchValue, onChange: this._onSearch }))) : null,
	                React.createElement("div", { className: "sh-sidebar-items-list" }, isLoading ? preloader : (items.length === 0 ? (React.createElement("div", { className: "sh-sidebar-empty" }, "No matches found!")) : items.map(function (e, i) {
	                    return getViewForItem(e, i, props.selected);
	                }))))));
	    };
	    return Sidebar;
	}(React.Component));
	exports.Sidebar = Sidebar;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Sidebar;
	(function (e) {
	    e.ShReact = e.ShReact || {};
	    e.ShReact.Sidebar = Sidebar;
	}(self));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);