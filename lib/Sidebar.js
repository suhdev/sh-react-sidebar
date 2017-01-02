'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sidebar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = exports.Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this._onSearch = _this._onSearch.bind(_this);
        _this._onItemClick = _this._onItemClick.bind(_this);
        _this._getViewForItem = _this._getViewForItem.bind(_this);
        _this.state = {
            searchValue: ""
        };
        return _this;
    }

    _createClass(Sidebar, [{
        key: '_onSearch',
        value: function _onSearch(e) {
            var el = e.currentTarget;
            var value = el.value;
            this.setState({
                searchValue: value
            });
        }
    }, {
        key: '_getViewForItem',
        value: function _getViewForItem(item, index, selected) {
            var props = this.props;
            return React.createElement(item.href ? 'a' : 'div', {
                'data-selected': item === selected,
                'data-index': index,
                href: item.href,
                className: 'sh-sidebar-item',
                key: props.getKeyForItem && props.getKeyForItem(item, index) || item.key,
                onClick: this._onItemClick
            }, [React.createElement('div', {
                className: 'sh-sidebar-label'
            }, props.getLabelForItem && props.getLabelForItem(item, index) || item.label), React.createElement('div', {
                className: 'sh-sidebar-arrow'
            }, '')]);
        }
    }, {
        key: '_onItemClick',
        value: function _onItemClick(e) {
            var props = this.props,
                el = e.currentTarget,
                idx = parseInt(el.getAttribute("data-index")),
                item = props.items[idx];
            props.onItemClick && props.onItemClick(item, idx);
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state,
                clz = 'sh-react-sidebar ' + (props.className || ""),
                placeholder = props.placeholder || 'Search...',
                hasSearch = typeof props.hasSearch === "undefined" ? false : props.hasSearch,
                reg = new RegExp(['.*', state.searchValue, '.*'].join(''), 'ig'),
                getLabelForItem = props.getLabelForItem,
                getKeyForItem = props.getKeyForItem,
                getViewForItem = props.getViewForItem || this._getViewForItem,
                items = props.items.filter(function (em, i) {
                reg.lastIndex = 0;
                return reg.test(getLabelForItem && getLabelForItem(em, i) || em.label);
            });
            return React.createElement("div", { className: clz }, React.createElement("div", { className: "sh-sidebar-wrapper" }, hasSearch ? React.createElement("div", { className: "sh-sidebar-search-wrapper" }, React.createElement("input", { type: "text", placeholder: placeholder, className: "sh-search-field", value: state.searchValue, onChange: this._onSearch })) : null, React.createElement("div", { className: "sh-sidebar-items-list" }, items.map(function (e, i) {
                return getViewForItem(e, i, props.selected);
            }))));
        }
    }]);

    return Sidebar;
}(React.Component);

exports.default = Sidebar;

(function (e) {
    e.ShReact = e.ShReact || {};
    e.ShReact.Sidebar = Sidebar;
})(self);