declare module "sh-react-sidebar" {
    import * as React from 'react'; 

    export interface SidebarItemDef{
        key:string;
        label:string;
    }

    export interface SidebarProps {
        className?:string;
        hasSearch?:boolean;
        selected:SidebarItemDef|any;
        items:SidebarItemDef[]|any[];
        onItemClick:(item:SidebarItemDef|any,index:number)=>void;
        getLabelForItem?:(item:SidebarItemDef|any,index:number)=>string;
        getKeyForItem?:(item:SidebarItemDef|any,index:number)=>string;
        getViewForItem?:(item:SidebarItemDef|any,index:number)=>React.ReactElement<any>;
    }

    export interface SidebarState {
        searchValue?:string;
    }

    export class Sidebar extends React.Component<SidebarProps,SidebarState>{
        _onSearch(e:React.SyntheticEvent);
        _getViewForItem(item:SidebarItemDef,index:number,key:string,label:string,selected:SidebarItemDef);
        _onItemClick(e:React.SyntheticEvent);
    }
}
