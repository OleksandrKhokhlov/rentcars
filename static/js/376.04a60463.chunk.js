"use strict";(self.webpackChunkrentcars=self.webpackChunkrentcars||[]).push([[376],{7489:function(n,e,r){r.d(e,{_:function(){return j}});var i=r(9439),t=r(2791),s=r(4420),c=function(n){var e=n.split(",");return e.shift(),e.join(" |")},o=r(4335),a=(r(8745),r(184)),l=function(n){var e=n.open,r=n.onClose,i=n.car,t=i.photoLink,s=i.make,l=i.model,u=i.year,d=i.address,f=i.id,h=i.type,j=i.fuelConsumption,p=i.engineSize,x=i.description,v=i.accessories,m=i.functionalities,C=i.rentalConditions,b=i.mileage,g=i.rentalPrice,k=c(d),y=v.join("| "),M=m.join("| ");return(0,a.jsxs)(o.u,{open:e,onClose:r,center:!0,children:[(0,a.jsx)("img",{src:t,alt:s,width:461}),(0,a.jsxs)("h2",{children:[s," ",l,", ",u]}),(0,a.jsxs)("p",{children:[k," | id:",f," | Year:",u," | Type:",h]}),(0,a.jsxs)("p",{children:["Fuel Consumption:",j," | Engine size:",p]}),(0,a.jsx)("p",{children:x}),(0,a.jsx)("h3",{children:"Accessories and functionalities:"}),(0,a.jsx)("p",{children:y}),(0,a.jsx)("p",{children:M}),(0,a.jsx)("h3",{children:"Rental Conditions: "}),(0,a.jsx)("p",{children:C}),(0,a.jsxs)("p",{children:["Mileage: ",b/1e3]}),(0,a.jsxs)("p",{children:["Price: ",g]}),(0,a.jsx)("a",{href:"tel:+380730000000",children:"Rental car"})]})},u=r(6351),d=r(8020);var f=r.p+"static/media/heart.8eedddeb891b567f886909f0659c5af4.svg";var h=r.p+"static/media/active .291718f2c413af1e972677389b94c245.svg",j=function(n){var e=n.car,r=(0,t.useState)(!1),o=(0,i.Z)(r,2),j=o[0],p=o[1],x=(0,s.v9)(u.Tc),v=(0,s.I0)(),m=e.photoLink,C=e.make,b=e.model,g=e.year,k=e.rentalPrice,y=e.address,M=e.rentalCompany,w=e.type,L=e.mileage,P=e.accessories,z=e.id,A=c(y),B=x.find((function(n){return n.id===z}));return(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:m,alt:C,width:274}),(0,a.jsx)("button",{type:"button",onClick:function(){return v(B?(0,d.Ni)(B.id):(0,d.a3)(e))},children:(0,a.jsx)("img",{src:B?h:f,alt:"Add for favorite"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{children:[C," ",(0,a.jsx)("span",{children:b||""}),", ",g]}),(0,a.jsx)("span",{children:k})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:A+" | "+M}),(0,a.jsx)("p",{children:w+" | "+b+" | "+L+" | "+P[2]})]}),(0,a.jsx)("button",{type:"button",onClick:function(){return p(!0)},children:"Learn more"}),(0,a.jsx)(l,{open:j,onClose:function(){return p(!1)},car:e})]})}},1363:function(n,e,r){r.d(e,{w:function(){return a}});var i=r(4420),t=r(6895),s=r(184),c=function(n){var e=n.label,r=n.placeholder,c=n.options,o=(0,i.I0)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("label",{children:[e,(0,s.jsxs)("select",{name:"filter",id:"select",onChange:function(n){o((0,t.b)(n.target.value))},children:[(0,s.jsx)("option",{value:"",children:r}),null===c||void 0===c?void 0:c.map((function(n){return(0,s.jsx)("option",{value:n,children:n},n)}))]})]})})},o=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],a=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(c,{label:"Car brand",placeholder:"Enter the text",options:o})})}},3358:function(n,e,r){r.r(e),r.d(e,{default:function(){return l}});var i=r(1363),t=r(4420),s=r(6351),c=r(7489),o=r(184),a=function(){return(0,t.v9)(s.Hz).map((function(n){return(0,o.jsx)(c._,{car:n},n.id)}))};function l(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.w,{}),(0,o.jsx)(a,{})]})}},6351:function(n,e,r){r.d(e,{Hz:function(){return o},Tc:function(){return s},aG:function(){return c}});var i=r(3553),t=function(n){return n.filter},s=function(n){return n.favorite.addCars},c=(0,i.P1)([function(n){return n.cars},t],(function(n,e){return n.filter((function(n){var r=n.make;return null===r||void 0===r?void 0:r.includes(e)}))})),o=(0,i.P1)([s,t],(function(n,e){return n.filter((function(n){var r=n.make;return null===r||void 0===r?void 0:r.includes(e)}))}))}}]);
//# sourceMappingURL=376.04a60463.chunk.js.map