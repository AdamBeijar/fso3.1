(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var c=t(14),o=t.n(c),a=t(3),r=t(2),u=t(4),i=t.n(u),s="/persons",d=function(){return i.a.get(s)},b=function(e){return i.a.post(s,e)},j=function(e){return i.a.delete(s+"/".concat(e))},h=function(e,n){return i.a.patch(s+"/".concat(e),{number:n})},l=t(0),f=function(e){return Object(l.jsxs)("div",{children:["filter shown with ",Object(l.jsx)("input",{onChange:e.handleFilterChange})]})},m=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:e.addPerson,children:[Object(l.jsxs)("div",{children:["name:",Object(l.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),Object(l.jsx)("br",{}),"number:",Object(l.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})})},O=function(e){return Object(l.jsx)("div",{children:e.namesToShow.map((function(n){return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:[n.name," ",n.number," ",Object(l.jsx)("button",{onClick:function(){return function(n){window.confirm("Do you really want to Delete ".concat(n.name,"?"))&&j(n.id).then((function(e){return console.log(e)})).catch((function(t){e.updateErrorMessage(n)}))}(n)},children:"delete"})]})})}))})},p=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),u=Object(a.a)(o,2),i=u[0],s=u[1],j=Object(r.useState)(""),p=Object(a.a)(j,2),x=p[0],g=p[1],v=Object(r.useState)(""),w=Object(a.a)(v,2),C=w[0],y=w[1],N=Object(r.useState)(""),S=Object(a.a)(N,2),k=S[0],E=S[1],T=Object(r.useState)(""),P=Object(a.a)(T,2),D=(P[0],P[1]);Object(r.useEffect)((function(){d().then((function(e){console.log(e.data),c(e.data)}))}),[]);var F=t.filter((function(e){return e.name.includes(C)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)("p",{style:{backgroundColor:"lightgray",border:"1px black solid",color:"green",fontsize:22},children:k}),Object(l.jsx)(f,{handleFilterChange:function(e){y(e.target.value)}}),Object(l.jsx)("h2",{children:"add a new"}),Object(l.jsx)(m,{addPerson:function(e){e.preventDefault();var n={name:i,number:x};t.map((function(e){return e.name})).includes(n.name)?function(e,n){window.confirm("".concat(e.name," already exists, do you want to update the Phone number of ").concat(e.name))&&h(e.id,n).then((function(n){return c(t.map((function(t){return t.id!==e.id?t:n.data})))})).then((function(t){E("Updated ".concat(e.name,"'s phone number to ").concat(n)),setTimeout((function(){E("")}),2e3)}))}(t.find((function(e){return e.name===i})),x):(c(t.concat(n)),s(""),g(""),b(n).then((function(e){console.log(e)})).then((function(e){E("Added ".concat(n.name)),setTimeout((function(){E("")}),2e3)})))},newName:i,handleNameChange:function(e){s(e.target.value)},newNumber:x,handleNumberChange:function(e){g(e.target.value)}}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)(O,{namesToShow:F,updateErrorMessage:function(e){D("Error, information of ".concat(e.name," has already been removed from server")),setTimeout((function(){D("")}),2e3)}},F)]})};o.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1289f414.chunk.js.map