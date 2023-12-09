import React from "react";
import ReactDOM  from "react-dom";

const h1=React.createElement('h1',{
    id:"heading"},
["Heading1",React.createElement('h2',{
    id:"heading2"
},["Heading2",React.createElement('h3',{id:"heading3"},"Heading3")])])

const div=React.createElement('div',{class:"title"},h1)

const root=document.getElementById('root')

ReactDOM.render(div,root)