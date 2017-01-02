import * as React from 'react';
export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this._onSearch = this._onSearch.bind(this);
        this._onItemClick = this._onItemClick.bind(this);
        this._getViewForItem = this._getViewForItem.bind(this);
        this.state = {
            searchValue: ""
        };
    }
    _onSearch(e) {
        let el = e.currentTarget;
        let value = el.value;
        this.setState({
            searchValue: value
        });
    }
    _getViewForItem(item, index, selected) {
        let props = this.props;
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
    }
    _onItemClick(e) {
        let props = this.props, el = e.currentTarget, idx = parseInt(el.getAttribute("data-index")), item = props.items[idx];
        props.onItemClick && props.onItemClick(item, idx);
    }
    render() {
        let props = this.props, state = this.state, clz = 'sh-react-sidebar ' + (props.className || ""), placeholder = props.placeholder || 'Search...', hasSearch = (typeof props.hasSearch === "undefined") ? false : props.hasSearch, reg = new RegExp(['.*', state.searchValue, '.*'].join(''), 'ig'), getLabelForItem = props.getLabelForItem, getKeyForItem = props.getKeyForItem, isLoading = props.isLoading, getViewForItem = props.getViewForItem || this._getViewForItem, emptyLine = props.emptyLine || 'No results where found', preloader = (typeof props.preloader === "function") ? props.preloader() : props.preloader, items = props.items.filter((em, i) => {
            reg.lastIndex = 0;
            return reg.test((getLabelForItem && getLabelForItem(em, i)) || em.label);
        });
        preloader = preloader || (React.createElement("div", { className: "sh-sidebar-preloader" }, props.preloaderString || 'Loading...'));
        return (React.createElement("div", { className: clz },
            React.createElement("div", { className: "sh-sidebar-wrapper" },
                hasSearch ? (React.createElement("div", { className: "sh-sidebar-search-wrapper" },
                    React.createElement("input", { type: "text", placeholder: placeholder, className: "sh-search-field", value: state.searchValue, onChange: this._onSearch }))) : null,
                React.createElement("div", { className: "sh-sidebar-items-list" }, isLoading ? preloader : (items.length === 0 ? (React.createElement("div", { className: "sh-sidebar-empty" }, "No matches found!")) : items.map((e, i) => {
                    return getViewForItem(e, i, props.selected);
                }))))));
    }
}
export default Sidebar;
(function (e) {
    e.ShReact = e.ShReact || {};
    e.ShReact.Sidebar = Sidebar;
}(self));
