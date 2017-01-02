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

1. `items` an array of items to be used as the source of information for the sidebar. 