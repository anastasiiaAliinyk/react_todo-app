(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(13),a(7)),u=a(1),s=a(2),i=a.n(s),m=a(5),d=function(){var e=Object(m.a)(i.a.mark(function e(t,a){var n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-api.herokuapp.com").concat(t),a);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Failed to load data ".concat(t));case 5:return e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c.data||c);case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),f=function(){return d("/todos").then(function(e){return e.filter(function(e){return 1182===e.userId})})},p=function(e){var t=e.addTodo,a=Object(n.useState)(""),r=Object(u.a)(a,2),l=r[0],o=r[1];return console.log(l),c.a.createElement("form",{onSubmit:function(e){var a;e.preventDefault(),(a={userId:1182,title:l,completed:!1},d("/todos",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)})).then(t),o("")}},c.a.createElement("input",{type:"text",className:"new-todo",value:l,placeholder:"What needs to be done?",onChange:function(e){o(e.target.value)},required:!0}))},E=a(6),h=a.n(E),b=function(e){var t=e.items,a=e.deleteItem,n=function(e){(function(e){return d("/todos/".concat(e),{method:"DELETE"})})(e).then(function(e){return a(e.id)})},r=t.sort(function(e,t){return t.id-e.id});return c.a.createElement("ul",{className:"todo-list"},r.map(function(e){return c.a.createElement("li",{key:e.id,className:h()({completed:e.completed})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle"}),c.a.createElement("label",null,e.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(e.id)}})),c.a.createElement("input",{type:"text",className:"edit"}))}))};b.defaultProp={completed:!1,title:"No title"};var N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){f().then(r)},[]);var l=Object(n.useCallback)(function(e){r(function(t){return[].concat(Object(o.a)(t),[e])})},[]),s=Object(n.useCallback)(function(e){r(function(t){return t.filter(function(t){return t.id!==e})})},[]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement(p,{addTodo:l})),c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(b,{items:a,deleteItem:s})),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},"3 items left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:"selected"},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active"},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed"},"Completed"))),c.a.createElement("button",{type:"button",className:"clear-completed"},"Clear completed")))};l.a.render(c.a.createElement(N,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.521ad971.chunk.js.map