"use strict";(self.webpackChunkrentcars=self.webpackChunkrentcars||[]).push([[358],{8881:function(n,e,r){r.d(e,{_:function(){return V}});var i,t,o,a,c,l,d,s,u,f,p,x,h,b,v,j=r(9439),g=r(2791),m=r(4420),k=function(n){var e=n.split(",");return e.shift(),e.join(" |")},w=r(4335),y=r(168),Z=r(5706),C=Z.default.div(i||(i=(0,y.Z)(["\n  width: calc(100% / 4 - 20px);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),M=Z.default.img(t||(t=(0,y.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 268px;\n  border-radius: 14px;\n  margin-bottom: 8px;\n"]))),z=Z.default.div(o||(o=(0,y.Z)(["\n  position: relative;\n"]))),L=Z.default.button(a||(a=(0,y.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 5px;\n  border: none;\n  background-color: transparent;\n"]))),P=Z.default.button(c||(c=(0,y.Z)(["\n  width: 100%;\n  height: 44px;\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-brand);\n  color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--hover-color);\n  }\n"]))),A=Z.default.h2(l||(l=(0,y.Z)(["\n  font-size: 16px;\n  color: black;\n"]))),B=Z.default.div(d||(d=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),H=Z.default.span(s||(s=(0,y.Z)(["\n  color: var(--primary-brand);\n"]))),I=Z.default.p(u||(u=(0,y.Z)(["\n  font-size: 12px;\n  margin-bottom: 5px;\n"]))),R=r(5837),D=Z.default.p(f||(f=(0,y.Z)(["\n  color: black;\n  font-size: 14px;\n  margin: 14px 0;\n"]))),E=(Z.default.h3(p||(p=(0,y.Z)(["\n  color: black;\n"]))),Z.default.a(x||(x=(0,y.Z)(["\n  display: inline-block;\n  line-height: 2;\n  text-align: center;\n  width: 168px;\n  height: 44px;\n  margin: 0;\n  margin-top: 24px;\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-brand);\n  color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--hover-color);\n  }\n"])))),F=Z.default.div(h||(h=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),N=Z.default.p(b||(b=(0,y.Z)(["\n  padding: 7px 14px;\n\n  color: black;\n  background-color: #e9f3e3;\n  border-radius: 35px;\n  font-size: 12px;\n  text-align: center;\n  line-height: 2.5;\n"]))),S=Z.default.span(v||(v=(0,y.Z)(["\n  color: var(--primary-brand);\n"]))),T=r(184),W=function(n){var e=n.open,r=n.onClose,i=n.car,t=i.photoLink,o=i.make,a=i.model,c=i.year,l=i.address,d=i.id,s=i.type,u=i.fuelConsumption,f=i.engineSize,p=i.description,x=i.accessories,h=i.functionalities,b=i.rentalConditions,v=i.mileage,j=i.rentalPrice,g=k(l),m=b.split("\n"),y=m[0].split(":"),Z=x.join(" | "),C=h.join(" | "),z=function(n){var e=n%1e3,r=Math.floor(n/1e3);return"".concat(r,",").concat(e)}(v);return(0,T.jsxs)(w.u,{open:e,onClose:r,center:!0,children:[(0,T.jsx)(M,{src:t,alt:o,width:461}),(0,T.jsxs)(R.Dx,{children:[o," ",a,", ",c]}),(0,T.jsxs)(I,{children:[g," | id:",d," | Year:",c," | Type:",s]}),(0,T.jsxs)(I,{children:["Fuel Consumption:",u," | Engine size:",f]}),(0,T.jsx)(D,{children:p}),(0,T.jsx)(D,{children:"Accessories and functionalities:"}),(0,T.jsx)(I,{children:Z}),(0,T.jsx)(I,{children:C}),(0,T.jsx)(D,{children:"Rental Conditions: "}),(0,T.jsxs)(F,{children:[(0,T.jsxs)(N,{children:[y[0],": ",(0,T.jsx)(S,{children:y[1]})]}),(0,T.jsx)(N,{children:m[1]}),(0,T.jsx)(N,{children:m[2]}),(0,T.jsxs)(N,{children:["Mileage: ",(0,T.jsx)(S,{children:z})]}),(0,T.jsxs)(N,{children:["Price: ",(0,T.jsx)(S,{children:j})]})]}),(0,T.jsx)(E,{href:"tel:+380730000000",children:"Rental car"})]})},G=r(6351),K=r(8020);var _=r.p+"static/media/heart.8eedddeb891b567f886909f0659c5af4.svg";var U=r.p+"static/media/active .2a87465cfe0590f96a84901834bf6874.svg",V=function(n){var e=n.car,r=(0,g.useState)(!1),i=(0,j.Z)(r,2),t=i[0],o=i[1],a=(0,m.v9)(G.Tc),c=(0,m.I0)(),l=e.photoLink,d=e.make,s=e.model,u=e.year,f=e.rentalPrice,p=e.address,x=e.rentalCompany,h=e.type,b=e.mileage,v=e.accessories,w=e.id,y=k(p),Z=a.find((function(n){return n.id===w}));return(0,T.jsxs)(C,{children:[(0,T.jsxs)(z,{children:[(0,T.jsx)(M,{src:l,alt:d}),(0,T.jsx)(L,{type:"button",onClick:function(){return c(Z?(0,K.Ni)(Z.id):(0,K.a3)(e))},children:(0,T.jsx)("img",{src:Z?U:_,alt:"Add for favorite"})})]}),(0,T.jsxs)(B,{children:[(0,T.jsxs)(A,{children:[d," ",(0,T.jsx)("span",{children:s||""}),", ",u]}),(0,T.jsx)(H,{children:f})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(I,{children:y+" | "+x}),(0,T.jsx)(I,{children:h+" | "+s+" | "+b+" | "+v[2]})]}),(0,T.jsx)(P,{type:"button",onClick:function(){return o(!0)},children:"Learn more"}),(0,T.jsx)(W,{open:t,onClose:function(){return o(!1)},car:e})]})}},9474:function(n,e,r){r.d(e,{W:function(){return o}});var i,t=r(168),o=r(5706).default.section(i||(i=(0,t.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 100%;\n"])))},1114:function(n,e,r){r.d(e,{w:function(){return x}});var i,t,o=r(4420),a=r(6895),c=r(168),l=r(5706),d=l.default.label(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),s=l.default.select(t||(t=(0,c.Z)(["\n  width: 224px;\n  height: 48px;\n  border: none;\n  background-color: #f7f7fb;\n  margin-bottom: 20px;\n  border-radius: 14px;\n  &:focus {\n    border: 2px solid green;\n  }\n  &:hover {\n    border: 2px solid green;\n  }\n  &:focus-visible {\n    border: none;\n  }\n"]))),u=r(184),f=function(n){var e=n.label,r=n.placeholder,i=n.options,t=(0,o.I0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(d,{children:[e,(0,u.jsxs)(s,{name:"filter",id:"select",onChange:function(n){t((0,a.b)(n.target.value))},children:[(0,u.jsx)("option",{value:"",children:r}),null===i||void 0===i?void 0:i.map((function(n){return(0,u.jsx)("option",{value:n,children:n},n)}))]})]})})},p=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],x=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(f,{label:"Car brand",placeholder:"Enter the text",options:p})})}},3358:function(n,e,r){r.r(e),r.d(e,{default:function(){return s}});var i=r(1114),t=r(4420),o=r(6351),a=r(8881),c=r(9474),l=r(184),d=function(){var n=(0,t.v9)(o.Hz);return(0,l.jsx)(c.W,{children:n.map((function(n){return(0,l.jsx)(a._,{car:n},n.id)}))})};function s(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.w,{}),(0,l.jsx)(d,{})]})}},5837:function(n,e,r){r.d(e,{DK:function(){return s},Dx:function(){return d},LR:function(){return l}});var i,t,o,a=r(168),c=r(5706),l=c.default.h1(i||(i=(0,a.Z)(["\n  color: black;\n  font-weight: 600;\n  text-align: center;\n"]))),d=c.default.h2(t||(t=(0,a.Z)(["\n  color: black;\n  font-weight: 500;\n  margin: 10px 0;\n"]))),s=c.default.span(o||(o=(0,a.Z)(["\n  color: black;\n"])))},6351:function(n,e,r){r.d(e,{Hz:function(){return c},Tc:function(){return o},aG:function(){return a}});var i=r(3553),t=function(n){return n.filter},o=function(n){return n.favorite.addCars},a=(0,i.P1)([function(n){return n.cars},t],(function(n,e){return n.filter((function(n){var r=n.make;return null===r||void 0===r?void 0:r.includes(e)}))})),c=(0,i.P1)([o,t],(function(n,e){return n.filter((function(n){var r=n.make;return null===r||void 0===r?void 0:r.includes(e)}))}))}}]);
//# sourceMappingURL=358.e5d361ca.chunk.js.map