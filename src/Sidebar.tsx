import * as React from 'react'; 

interface SidebarItemDef{
    key?:string;
    label?:string;
    href?:string;
}

interface SidebarProps<T extends SidebarItemDef> {
    className?:string;
    hasSearch?:boolean;
    placeholder?:string;
    emptyLine?:string;
    isLoading?:boolean;
    preloaderString?:string;
    preloader?:any;
    selected:any;
    items:T[];
    onItemClick:(item:T,index:number)=>void;
    getLabelForItem?:(item:T,index:number)=>string;
    getKeyForItem?:(item:T,index:number)=>string;
    getViewForItem?:(item:T,index:number,selected:T)=>React.ReactElement<any>;
}

interface SidebarState {
    searchValue?:string;
}

export class Sidebar<T extends SidebarItemDef> extends React.Component<SidebarProps<T>,SidebarState>{
    constructor(props:SidebarProps<T>){
        super(props);
        this._onSearch = this._onSearch.bind(this); 
        this._onItemClick = this._onItemClick.bind(this); 
        this._getViewForItem = this._getViewForItem.bind(this); 
        this.state = {
            searchValue:""
        }; 
    }

    _onSearch(e:React.SyntheticEvent){
        let el = e.currentTarget as HTMLInputElement; 
        let value = el.value; 
        this.setState({
            searchValue:value
        });
    }

    _getViewForItem(item:T,index:number,selected:T){
        let props = this.props; 
        return (
            React.createElement(item.href?'a':'div',{
                'data-selected':item === selected,
                'data-index':index,
                href:item.href,
                className:'sh-sidebar-item',
                key:(props.getKeyForItem && props.getKeyForItem(item,index)) || item.key,
                onClick:this._onItemClick,
            },[React.createElement('div',{
                className:'sh-sidebar-label'
            },((props.getLabelForItem && props.getLabelForItem(item,index))||item.label)),
                React.createElement('div',{
                className:'sh-sidebar-arrow'
            },'')])
        );
    }

    _onItemClick(e:React.SyntheticEvent){
        let props = this.props, 
            el = e.currentTarget as HTMLElement,
        idx = parseInt(el.getAttribute("data-index")),
        item = props.items[idx]; 
        props.onItemClick && props.onItemClick(item,idx);
    }

    render(){
        let props = this.props,
            state = this.state,
            clz = 'sh-react-sidebar '+(props.className ||""),
            placeholder = props.placeholder || 'Search...',
            hasSearch = (typeof props.hasSearch === "undefined")?false:props.hasSearch,
            reg = new RegExp(['.*',state.searchValue,'.*'].join(''),'ig'),
            getLabelForItem = props.getLabelForItem,
            getKeyForItem = props.getKeyForItem, 
            isLoading = props.isLoading, 
            getViewForItem = props.getViewForItem || this._getViewForItem,
            emptyLine = props.emptyLine || 'No results where found',
            preloader = (typeof props.preloader === "function")?props.preloader():props.preloader,
            items = (props.items as any[]).filter((em:SidebarItemDef|any,i:number)=>{
                reg.lastIndex = 0; 
                return reg.test((getLabelForItem && getLabelForItem(em,i))|| em.label);
            });
            preloader = preloader || (<div className="sh-sidebar-preloader">{props.preloaderString || 'Loading...'}</div>);
        return (
            <div className={clz}>
                <div className="sh-sidebar-wrapper">
                    {hasSearch?(
                        <div className="sh-sidebar-search-wrapper">
                            <input type="text" 
                                placeholder={placeholder}
                                className="sh-search-field"  
                                value={state.searchValue} 
                                onChange={this._onSearch} />
                        </div>
                    ):null}
                    <div className="sh-sidebar-items-list">
                        {isLoading?preloader:(items.length === 0?(<div className="sh-sidebar-empty">{"No matches found!"}</div>):items.map((e,i)=>{
                                            return getViewForItem(e,i,props.selected);
                        }))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar; 
(function(e:any){
    e.ShReact = e.ShReact || {}; 
    e.ShReact.Sidebar = Sidebar; 
}(self))