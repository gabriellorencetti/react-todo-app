(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),d=n(3),c=n.n(d),i=(n(13),n(4)),r=n(5),l=n(1),s=n(7),u=n(6);n(14);var p=function(e){return a.a.createElement("div",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:e.todo.completed,onChange:function(){return e.handleChange(e.todo.id)}}),a.a.createElement("p",null,e.todo.text))},m=[{id:1,text:"Tirar o lixo",completed:!0},{id:2,text:"Ir no mercado",completed:!0},{id:3,text:"Aprender React",completed:!1},{id:4,text:"Assistir aula de SQL",completed:!0},{id:5,text:"Assistir \xfaltimo epis\xf3dio de Westworld",completed:!1}],h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={todos:m},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return a.a.createElement(p,{key:t.id,todo:t,handleChange:e.handleChange})}));return a.a.createElement("div",{className:"todo-list"},t)}}]),n}(a.a.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c6493d0c.chunk.js.map