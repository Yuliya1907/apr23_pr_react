(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{13:function(e,a,c){},15:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c(5),n=c.n(s),i=(c(11),c(12),c(3)),r=c(4),l=(c(13),c(6)),d=c.n(l),o=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],j=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],h=c(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=j.find((function(a){return a.id===e.categoryId})),c=o.find((function(e){return e.id===a.ownerId}));return Object(r.a)(Object(r.a)({},e),{},{category:a,owner:c})})),x=function(){var e,a=Object(t.useState)(0),c=Object(i.a)(a,2),s=c[0],n=c[1],r=Object(t.useState)(""),l=Object(i.a)(r,2),j=l[0],x=l[1],m=b,u=function(e){n(e)},O=function(e){return e.toUpperCase()};return Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:u(0),children:"All"}),o.map((function(e){return Object(h.jsx)("a",{className:d()({"is-active":s===e.id}),"data-cy":"FilterUser",href:"#/",onClick:u(e.id),children:e.name},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:j,onChange:function(e){x((function(){return e.target.value}))}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),b.map((function(e){return Object(h.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:e.title},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(h.jsxs)("div",{className:"box table-container",children:[Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(h.jsx)("tbody",{children:(0!==s&&(m=m.filter((function(e){return s===e.user.id}))),""!==j&&(e=m,m=e.filter((function(e){var a=O(j).trim();return O(e.name).includes(a)}))),m).map((function(e){return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(h.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(h.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:"m"===e.user.sex?"has-text-link":"has-text-danger",children:e.user.name})]},e.id)}))})]})]})]})})};n.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.28b27113.chunk.js.map