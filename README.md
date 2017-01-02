# sh-react-sidebar

A configurable sidebar ReactJS component written in TypeScript. 

## Usage 


### For browser use: 

Include the minified JavaScript file in your HTML after inclusion of React library. 
Assuming React and ReactDOM are loaded before the Sidebar. 
```html 
    <link rel="stylesheet" href="__PATH_TO_CSS__/sidebar.min.css"></script>
    <script type="text/javascript" src="__PATH_TO_LIB__/sidebar.min.js"></script>


    <script type="text/javascript">
    var sidebar = null;
    var items = [{
        label:'item-1',
        key:'item-1',
        href:'#item-1'
    },{
        label:'item-2',
        key:'item-2',
        href:'#item-2'
    },{
        label:'item-3',
        key:'item-3',
        href:'#item-3'
    }]; 

    function update(selected:item){
        ReactDOM.render(
        sidebar = React.createElement(ShReact.Sidebar,{
            className:'my-class',
            items:items,
            selected:selected,
            onItemClick:onClick,
        }),document.getElementById('SidebarContainer'));
    }

    function onClick(item,index){
        update(item); 
    }
    sidebar = ReactDOM.render(
        React.createElement(ShReact.Sidebar,{
            className:'my-class',
            items:items,
            selected:items[0],
            onItemClick:onClick,
        }),document.getElementById('SidebarContainer'));
     
    </script> 

```

### For webpack use:

```typescript

    const React = require('react'); 
    const ReactDOM = require('react-dom'); 
    const Sidebar = require('sh-react-sidebar').Sidebar; 

    var items = [{
        label:'item-1',
        key:'item-1',
        href:'#item-1'
    },{
        label:'item-2',
        key:'item-2',
        href:'#item-2'
    },{
        label:'item-3',
        key:'item-3',
        href:'#item-3'
    }]; 

    function onClick(item,index){
        console.log(item);
    }

    let sidebar = ReactDOM.render(<Sidebar 
        items={items} 
        selected={items[0]} 
        onItemClick={onClick} />,
        document.getElementById('SidebarContainer')); 

```


### For JSPM use:

```typescript  

    import * as React from 'react'; 
    import * as ReactDOM from 'react-dom'; 
    import {Sidebar} from 'sh-react-sidebar'; 

    var items = [{
        label:'item-1',
        key:'item-1',
        href:'#item-1'
    },{
        label:'item-2',
        key:'item-2',
        href:'#item-2'
    },{
        label:'item-3',
        key:'item-3',
        href:'#item-3'
    }]; 

    function onClick(item,index){
        console.log(item);
    }

    let sidebar = ReactDOM.render(<Sidebar 
        items={items} 
        selected={items[0]} 
        onItemClick={onClick} />,
        document.getElementById('SidebarContainer'));  

``` 


## Available Options 

1. `items` an array of items to be used as the source of information for the sidebar. By default each item is expected to implement the following interface. 

```javascript

interface ItemDef {
    key:string;
    label:string;
    href:string;
}

```

Alternatively, an array of arbitrary object can be provided, given that `getLabelForItem` and `getKeyForItem` are provided. 

2. `getLabelForItem(item,index)` is a function that will be called for every item in the array to get its label. 
3. `getKeyForItem(item,index)` is a function that will be called for every item in the array to get its key. 

4. `className` an optional class name to be added to the slider root DOMElement. 
5. `hasSearch` an optional boolean, when set to true, a search field will be added to the sidebar. 
6. `placeholder` an optional string to be used for the search field. 
7. `emptyLine` an optional string to be used when no items match the search string. 
8. `isLoading` an optional boolean that states whether the sidebar is ready to show the items or it is loading. This is useful for ajax populated sidebars. 
9. `preloaderString` an optional string to be used while in loading mode. 
10. `preloader` an optional that can be either a function that returns a ReactElement or a react element to be shown when in loading mode. 
11. `selected` the currently selected item from the list of items. 
12. `onItemClick` a function that gets passed the clicked item and its index.
13. `getViewForItem` an optional that is when provided will be used to generate views for items, the function gets called with the `item` and its `index`. 
