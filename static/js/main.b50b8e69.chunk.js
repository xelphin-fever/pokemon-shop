(this["webpackJsonppokemon-shop"]=this["webpackJsonppokemon-shop"]||[]).push([[0],{34:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},45:function(t,e,c){},47:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){},52:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),s=c(16),i=c.n(s),o=(c(34),c(14)),r=c(4),j=(c(35),c(8)),u=c(3),l=(c(36),c.p+"static/media/pikachu.342f1da7.png"),d=c(1),b=function(){return Object(d.jsxs)("div",{className:"home-div",children:[Object(d.jsxs)("div",{className:"title-div",children:[Object(d.jsx)("h1",{className:"title-color",children:"Pokemon Shop!"}),Object(d.jsx)("h2",{children:"Buy a Keychain of Your Favourite Pokemon In Our Store"}),Object(d.jsx)("h4",{children:"40% discout on first purchase!"})]}),Object(d.jsx)("img",{className:"pokemon-img",src:l,alt:"pikachu"})]})},h=(c(38),c(39),function(t){var e=Object(n.useState)(t.totalCost),c=Object(r.a)(e,2),a=c[0];c[1];return Object(d.jsxs)("div",{className:"checkout-card-div",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:t.img,alt:"pokemon keychain"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t.name}),Object(d.jsxs)("div",{className:"checkout-card-cost-div",children:[Object(d.jsxs)("h3",{children:["$",a]}),Object(d.jsx)("input",{type:"number",min:"1",value:t.quantity,onChange:function(e){console.log("quantity changed to",e.currentTarget.value),t.changeQuantity(t.id,e.currentTarget.value)}})]})]}),Object(d.jsx)("button",{onClick:function(){t.delete(t.id)},children:"X"})]})}),O=function(t){var e=Object(n.useState)(t.cart),c=Object(r.a)(e,2),a=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(r.a)(i,2),u=o[0],l=o[1],b=Object(n.useState)(!1),O=Object(r.a)(b,2),f=O[0],p=O[1];Object(n.useEffect)((function(){console.log("changed cart"),s(t.cart)}),[t.cart]);return Object(d.jsxs)("div",{className:"checkout-div",children:[Object(d.jsx)("h1",{className:"checkout-title title-color",children:"Check Out"}),a.map((function(e){return Object(d.jsx)(h,{id:e.id,name:e.name,img:e.img,totalCost:e.totalCost,quantity:e.quantity,delete:t.delete,changeQuantity:t.changeQuantity},e.id)})),Object(d.jsx)("div",{className:"checkout-div-total",onMouseOver:function(){!1===f&&(console.log("placed on"),p(!0),l(!0))},onMouseOut:function(){!0===f&&(console.log("placed off"),p(!1),l(!1))},children:!1===u?Object(d.jsxs)("h2",{className:"checkout-total",children:[" Total: $",t.cartCost," "]}):Object(d.jsx)(j.b,{to:"/payment",children:Object(d.jsx)("h2",{className:"checkout-total",children:" Pay "})})})]})},f=(c(45),c(13)),p=c.n(f),m=c(19),x=(c(47),function(t){var e=Object(n.useState)(""),c=Object(r.a)(e,2),a=c[0],s=c[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),j=o[0],u=o[1],l=Object(n.useState)(""),b=Object(r.a)(l,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){var e=!1;function c(){return(c=Object(m.a)(p.a.mark((function c(){var n,a,i,o;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.pokeIndex,"/"));case 2:return n=c.sent,c.next=5,n.json();case 5:a=c.sent,!1===e&&(s(a.sprites.front_default),O((a.stats[0].base_stat/20+1).toFixed(2)),i=a.name,o=i[0].toUpperCase(),i=o+i.slice(1),u(i));case 7:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){e=!0}}),[t]),Object(d.jsxs)("div",{className:"card-div",children:[Object(d.jsx)("div",{className:"card-img-div",children:Object(d.jsx)("img",{src:a,alt:j})}),Object(d.jsxs)("div",{className:"card-text-div",children:[Object(d.jsx)("h3",{children:j}),Object(d.jsxs)("h4",{className:"card-text-price",children:["$",h]})]})]})}),v=function(t){var e=Object(n.useState)(new Array(40)),c=Object(r.a)(e,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){console.log("making array");for(var t=Object(o.a)(a),e=0;e<a.length;e++)t[e]=e+1;s(t),console.log(a)}),[]),Object(d.jsxs)("div",{className:"shop-div",children:[Object(d.jsx)("h1",{className:"shop-title title-color",children:"Shop KeyChains"}),Object(d.jsx)("div",{className:"shop-cards-div",children:a.map((function(t){return Object(d.jsx)(j.b,{to:"shop/".concat(t),children:Object(d.jsx)(x,{pokeIndex:t})},t)}))})]})},g=c.p+"static/media/pokeball.1faeca5f.png",k=c(27),N=c.n(k),y=function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("img",{className:"logo",src:g,alt:"logo"})}),Object(d.jsxs)("ul",{className:"nav-links",children:[Object(d.jsx)(j.b,{to:"/shop",children:Object(d.jsx)("li",{children:"Shop"})}),Object(d.jsx)(j.b,{to:"/checkout",children:Object(d.jsx)("li",{children:Object(d.jsx)(N.a,{})})})]})]})},S=(c(49),c(28)),C=c.n(S),F=function(t){var e=Object(n.useState)(""),c=Object(r.a)(e,2),a=c[0],s=c[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(""),h=Object(r.a)(b,2),O=h[0],f=h[1],x=Object(n.useState)(""),v=Object(r.a)(x,2),g=v[0],k=v[1],N=Object(n.useState)("1"),y=Object(r.a)(N,2),S=y[0],F=y[1],q=Object(u.f)("/shop/:id").url.split("/");q=q[q.length-1],Object(n.useEffect)((function(){var t=!1;function e(){return(e=Object(m.a)(p.a.mark((function e(){var c,n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(q));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,!1===t&&(s(n.sprites.front_default),f((n.stats[0].base_stat/20+1).toFixed(2)),k((n.stats[0].base_stat/20+1).toFixed(2)),a=n.name,i=a[0].toUpperCase(),a=i+a.slice(1),l(a));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){t=!0}}),[]);Object(n.useEffect)((function(){k((Number(O)*Number(S)).toFixed(2))}),[S,O]);return Object(d.jsxs)("div",{className:"item-info-div",children:[Object(d.jsx)("div",{className:"item-img-div",children:Object(d.jsx)("img",{src:a,alt:j})}),Object(d.jsxs)("div",{className:"item-text-div",children:[Object(d.jsx)("h3",{className:"item-text-name",children:j}),Object(d.jsxs)("h4",{className:"item-text-price",children:["$",g]}),Object(d.jsxs)("div",{className:"item-cart-div",children:[Object(d.jsx)("input",{type:"number",value:S,onChange:function(t){F(t.currentTarget.value)},min:"1"}),Object(d.jsx)(C.a,{onClick:function(){var e={id:q,cost:O,totalCost:g,quantity:S,img:a,name:j};console.log("updating:",e),t.update(e)}})]})]})]})},q=(c(50),function(){return Object(d.jsx)("div",{className:"payment-div",children:Object(d.jsx)("h1",{className:"title-color",children:"Page UnAvailable"})})}),w=function(){var t=Object(n.useState)(0),e=Object(r.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)([]),i=Object(r.a)(s,2),l=i[0],h=i[1],f=Object(n.useRef)([]),p=function(t){var e=Object(o.a)(l);0===l.filter((function(e){return e.id===t.id})).length?e.push(t):e.map((function(e){return e.id===t.id&&(e.totalCost=t.totalCost,e.quantity=t.quantity),e})),h(e)},m=function(t,e){var c=Object(o.a)(l);c.map((function(c){return c.id===t&&(c.quantity=e,c.totalCost=String((Number(c.cost)*Number(e)).toFixed(2))),c})),h(c)},x=function(t){var e=Object(o.a)(l).filter((function(e){return e.id!==t}));h(e)};return Object(n.useEffect)((function(){f.current=l,console.log("cartRef current is now",f.current)}),[l]),Object(n.useEffect)((function(){for(var t=0,e=0;e<f.current.length;e++)t+=Number(f.current[e].totalCost);a(String(t))}),[l]),Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(y,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(d.jsx)(u.a,{path:"/checkout",component:function(){return Object(d.jsx)(O,{cartCost:c,cart:f.current,changeQuantity:m,delete:x})}}),Object(d.jsx)(u.a,{exact:!0,path:"/shop",component:v}),Object(d.jsx)(u.a,{exact:!0,path:"/shop/:id",component:function(){return Object(d.jsx)(F,{update:p})}}),Object(d.jsx)(u.a,{exact:!0,path:"/payment",component:q})]})]})})},E=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),E()}},[[52,1,2]]]);
//# sourceMappingURL=main.b50b8e69.chunk.js.map