(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{30:function(e,a,t){e.exports=t(42)},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),l=t.n(r),s=t(4),o=t(1),m=t(3),i=t(5),u=t(16),p=t(11),_=t(28),E=t(29),d=t(15),v=t.n(d),h=t(22),b="https://mate.academy/students-api/phones",f=function(){var e=Object(h.a)(v.a.mark((function e(){var a,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(v.a.mark((function e(a){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/").concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N="START_LOADING",y="SET_PHONES",O="SET_PHONE",j="HAS_ERROR",C="LIKE",k="ADD_TO_CART",x=function(){return{type:N}},w=function(){return{type:j}},P=function(e){return e.loading},A=function(e){return e.error},I=function(e){return e.phones},L=function(e){return e.phone},S=function(e){return Object(u.a)(e.phones).sort((function(e,a){return a.priceDiscount-e.priceDiscount}))},T=function(e){return Object(u.a)(e.phones).sort((function(e,a){return a.year-e.year}))},R=function(e){return e.favs},B=function(e){return e.cart},D=function(e,a){return e.favs.find((function(e){return e===a}))?Object(i.a)(Object(i.a)({},e),{},{favs:e.favs.filter((function(e){return e!==a}))}):Object(i.a)(Object(i.a)({},e),{},{favs:[].concat(Object(u.a)(e.favs),[a])})},M=function(){return function(e){return e(x()),f().then((function(a){return e(function(e){return{type:y,phones:e}}(a))})).catch((function(){return w()}))}},F={loading:!1,error:!1,phones:[],phone:{id:"",namespaceId:"",name:"",capacityAvailable:[],capacity:"",priceRegular:0,priceDiscount:0,colorsAvailable:[],color:"",images:[],description:[{title:"",text:[]},{title:"",text:[]},{title:"",text:[]}],screen:"",resolution:"",processor:"",ram:"",camera:"",zoom:"",cell:[]},cart:[],favs:[]},G=Object(p.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case y:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,phones:a.phones});case O:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,phone:a.phone});case j:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:!0});case C:return D(e,a.phoneId);case k:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(u.a)(e.cart),[a.phoneId])});default:return e}}),F,Object(E.composeWithDevTools)(Object(p.applyMiddleware)(_.a))),H=t(12),$=function(){var e=Object(n.useState)(0),a=Object(H.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(1040),s=Object(H.a)(l,1)[0],o={display:"flex",transform:"translateX(".concat(t,"px)"),transition:"transform 0.5s"};return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slider__main"},c.a.createElement("button",{type:"button",className:"slider__btn",onClick:function(){r(0!==t?t+s:2*-s)}},"\u2039"),c.a.createElement("div",{className:"slider__container"},c.a.createElement("div",{className:"slider__slides"},c.a.createElement("div",{style:o},c.a.createElement("img",{src:"img/banner.png",alt:"iPhones"}),c.a.createElement("img",{src:"img/banner.png",alt:"iPhones"}),c.a.createElement("img",{src:"img/banner.png",alt:"iPhones"})))),c.a.createElement("button",{type:"button",className:"slider__btn",onClick:function(){r(t!==2*-s?t-s:0)}},"\u203a")),c.a.createElement("div",{className:"slider__indicators"},c.a.createElement("div",{className:"slider__indicator slider__indicator--active"}),c.a.createElement("div",{className:"slider__indicator"}),c.a.createElement("div",{className:"slider__indicator"})))},q=function(e){return c.a.createElement("h1",{className:"title"},e.title)},J=Object(s.b)((function(e){return{phone:L(e)}}))((function(e){var a=e.phone;return c.a.createElement("div",{className:"phone"},c.a.createElement(o.b,{to:"/phones",className:"phone__button--back"},c.a.createElement("img",{src:"img/icons/back-arrow.svg",alt:"Back"}),c.a.createElement("p",null,"Back")),c.a.createElement(q,{title:a.name}),c.a.createElement("div",{className:"phone__container"},c.a.createElement("div",{className:"phone__images"},"map images"),c.a.createElement("div",{className:"phone__image"},"main image"),c.a.createElement("div",{className:"phone__info"},c.a.createElement("div",{className:"phone__colors"},c.a.createElement("small",{className:"phone__available-text"},"Available phones"),c.a.createElement("div",{className:"phone__available-colors"},"colored circles")),c.a.createElement("div",{className:"phone__capacity"},c.a.createElement("small",null,"Select capacity"),c.a.createElement("div",null,"capacites")),c.a.createElement("div",{className:"phone__price"},c.a.createElement("h2",null,"Discount"),c.a.createElement("p",null,"Price")),c.a.createElement("div",{className:"phone__actions"},c.a.createElement("button",{type:"button"},"Add to cart"),c.a.createElement("button",{type:"button"},"Like")),c.a.createElement("div",{className:"phone__characteristics"},c.a.createElement("div",null,c.a.createElement("p",null,"Screen"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Resolution"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Processor"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"RAM"),c.a.createElement("p",null)))),c.a.createElement("div",{className:"phone__id"},"Id")),c.a.createElement("div",{className:"phone__container--about"},c.a.createElement("div",{className:"phone__about"},c.a.createElement("h2",null,"About"),c.a.createElement("h3",null,c.a.createElement("p",null,"text")),c.a.createElement("h3",null,c.a.createElement("p",null,"text")),c.a.createElement("h3",null,c.a.createElement("p",null,"text"))),c.a.createElement("div",{className:"phone__specs"},c.a.createElement("h2",null,"Tech Specs"),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",null,"Screen"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Resolution"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Processor"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"RAM"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Built in memory"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Camera"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Zoom"),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("p",null,"Cell"),c.a.createElement("p",null))))),c.a.createElement(q,{title:"You may also like"}))})),X={phoneLoad:function(e){return function(a){return a(x()),g(e).then((function(e){return a(function(e){return{type:O,phone:e}}(e))})).catch((function(){return w()}))}},setLike:function(e){return{type:C,phoneId:e}},setToCart:function(e){return{type:k,phoneId:e}}},z=Object(s.b)((function(e){return{currentPhone:L(e),favs:R(e),cart:B(e)}}),X)((function(e){var a=e.phone,t=e.phoneLoad,n=e.setLike,r=e.favs,l=e.cart,s=e.setToCart,i=r.find((function(e){return e===a.phoneId})),u=l.find((function(e){return e===a.phoneId}));return c.a.createElement(o.a,null,c.a.createElement("div",{className:"productCard"},c.a.createElement(o.b,{to:"/phones/".concat(a.phoneId),className:"productCard__link",onClick:function(){return t(a.phoneId)}},c.a.createElement("img",{src:a.image,alt:a.name,className:"productCard__img"}),c.a.createElement("p",{className:"productCard__title"},a.name)),c.a.createElement("h2",{className:"productCard__discount"},"$",a.priceDiscount,"\xa0",c.a.createElement("span",{className:"productCard__price"},"$",a.priceRegular)),c.a.createElement("div",{className:"productCard__description"},c.a.createElement("p",{className:"productCard__info"},"Screen"),c.a.createElement("p",{className:"productCard__characteristics"},a.screen)),c.a.createElement("div",{className:"productCard__description"},c.a.createElement("p",{className:"productCard__info"},"Capacity"),c.a.createElement("p",{className:"productCard__characteristics"},a.capacity)),c.a.createElement("div",{className:"productCard__description"},c.a.createElement("p",{className:"productCard__info"},"RAM"),c.a.createElement("p",{className:"productCard__characteristics"},a.ram)),c.a.createElement("div",{className:"productCard__btn"},u?c.a.createElement("button",{type:"button",className:"productCard__btn--added",disabled:!0},"Added to cart"):c.a.createElement("button",{type:"button",className:"productCard__btn--cart",onClick:function(){s(a.phoneId)}},"Add to cart"),c.a.createElement("button",{type:"button",className:"productCard__btn--favs",onClick:function(){n(a.phoneId)}},i?c.a.createElement("img",{src:"img/favs-liked.svg",alt:"favs logo"}):c.a.createElement("img",{src:"img/favs.svg",alt:"favs logo"})))),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/phones/".concat(a.phoneId),exact:!0,component:J})))})),K=function(e){var a=e.phones,t=Object(s.c)(P),r=Object(s.c)(A),l=Object(n.useState)(0),o=Object(H.a)(l,2),m=o[0],i=o[1],u=Object(n.useState)(1152),p=Object(H.a)(u,1)[0],_={display:"flex",transform:"translateX(".concat(m,"px)"),transition:"transform 0.5s"};return c.a.createElement("div",null,c.a.createElement("div",{className:"sliderButtons"},c.a.createElement("button",{type:"button",className:"sliderButtons__btn",onClick:function(){i(0!==m?m+p:-p*(Math.floor(a.length/4)-1))}},c.a.createElement("img",{src:"img/left-arrow.svg",alt:"Left arrow"})),c.a.createElement("button",{type:"button",className:"sliderButtons__btn",onClick:function(){m!==-p*(Math.floor(a.length/4)-1)?i(m-p):i(0)}},c.a.createElement("img",{src:"img/right-arrow.svg",alt:"Right arrow"}))),c.a.createElement("div",{className:"productSlider"},t&&c.a.createElement("div",{className:"productSlider__loader"}),r&&c.a.createElement("div",{className:"productSlider__error"},"Loading error..."),c.a.createElement("div",{style:_},a.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(z,{phone:e}))})))))},W=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"category"},c.a.createElement("div",{className:"category__list"},c.a.createElement(o.b,{to:"/phones",className:"category__item"},c.a.createElement("div",{className:"category__image-wrapper category__image-phones"},c.a.createElement("img",{src:"img/phones-category.png",alt:"Phones",className:"category__image"})),c.a.createElement("h3",{className:"category__subtitle"},"Mobile phones"),c.a.createElement("p",{className:"category__info"},"95 models")),c.a.createElement(o.b,{to:"/tablets",className:"category__item"},c.a.createElement("div",{className:"category__image-wrapper category__image-tablets"},c.a.createElement("img",{src:"img/tablets-category.png",alt:"Tablets",className:"category__image"})),c.a.createElement("h3",{className:"category__subtitle"},"Tablets"),c.a.createElement("p",{className:"category__info"},"24 models")),c.a.createElement(o.b,{to:"/accessories",className:"category__item"},c.a.createElement("div",{className:"category__image-wrapper category__image-accessories"},c.a.createElement("img",{src:"img/accessories-category.png",alt:"Accessories",className:"category__image"})),c.a.createElement("h3",{className:"category__subtitle"},"Accessories"),c.a.createElement("p",{className:"category__info"},"100 models")))))},Y={phonesLoad:M},Z=Object(s.b)((function(e){return{hotPricePhones:S(e),brandNewPhones:T(e)}}),Y)((function(e){var a=e.phonesLoad,t=e.hotPricePhones,r=e.brandNewPhones;return Object(n.useEffect)((function(){a()}),[a]),c.a.createElement("div",{className:"home"},c.a.createElement($,null),c.a.createElement("div",{className:"home__slider-wrapper"},c.a.createElement(q,{title:"Hot Prices"}),c.a.createElement(K,{phones:t})),c.a.createElement(q,{title:"Shop by category"}),c.a.createElement(W,null),c.a.createElement("div",{className:"home__slider-wrapper"},c.a.createElement(q,{title:"Brand new models"}),c.a.createElement(K,{phones:r})))})),Q=function(e){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"breadcrumbs"},c.a.createElement(o.b,{to:"/",exact:!0,className:"breadcrumbs__home"},c.a.createElement("img",{src:"img/icons/home.svg",alt:"home icon"})),c.a.createElement("img",{src:"img/icons/breadcrumbs-arrow.svg",alt:"arrow icon",className:"breadcrumbs__arrow"}),c.a.createElement("p",{className:"breadcrumbs__title"},e.title)),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:Z})))},U={phonesLoad:M},V=Object(s.b)((function(e){return{allPhones:I(e)}}),U)((function(e){var a=e.phonesLoad,t=e.allPhones;return Object(n.useEffect)((function(){a()}),[a]),c.a.createElement("div",{className:"phones"},c.a.createElement(Q,{title:"Phones"}),c.a.createElement(q,{title:"Mobile phones"}),c.a.createElement("p",{className:"phones__quantity"},t.length,"\xa0models"),c.a.createElement("div",{className:"phones__grid"},t.sort((function(e,a){return e.name.localeCompare(a.name)})).map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(z,{phone:e}))}))))})),ee=function(){return c.a.createElement("div",{className:"tablets"},c.a.createElement(Q,{title:"Tablets"}),c.a.createElement(q,{title:"Tablets"}),c.a.createElement("h3",{className:"tablets__oops"},"There is no tablets yet. Please, come later",c.a.createElement("span",{role:"img","aria-label":"Grinny"},"\ud83d\ude05")))},ae=function(){return c.a.createElement("div",{className:"accessories"},c.a.createElement(Q,{title:"Accessories"}),c.a.createElement(q,{title:"Accessories"}),c.a.createElement("h3",{className:"accessories__oops"},"There is no accessories yet. Please, come later",c.a.createElement("span",{role:"img","aria-label":"Grinny"},"\ud83d\ude05")))},te={phonesLoad:M},ne=Object(s.b)((function(e){return{favs:R(e),allPhones:I(e)}}),te)((function(e){var a=e.favs,t=e.phonesLoad,r=e.allPhones;return Object(n.useEffect)((function(){t()}),[t]),c.a.createElement("div",{className:"favs"},c.a.createElement(Q,{title:"Favorites"}),c.a.createElement(q,{title:"Favorites"}),a.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"favs__quantity"},a.length,"\xa0items"),c.a.createElement("div",{className:"favs__grid"},r.filter((function(e){return a.find((function(a){return e.phoneId===a}))})).map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(z,{phone:e}))})))):c.a.createElement("h3",{className:"favs__oops"},"Products that you like will be displayed here",c.a.createElement("span",{role:"img","aria-label":"Grinny"},"\ud83d\udc4d")))})),ce={phonesLoad:M},re=Object(s.b)((function(e){return{phones:I(e),cart:B(e)}}),ce)((function(e){var a=e.phonesLoad,t=e.phones,r=e.cart;Object(n.useEffect)((function(){a()}),[a]);var l=[];return t.filter((function(e){return r.find((function(a){return e.phoneId===a}))})).filter((function(e){return l.push(e.priceDiscount)})),c.a.createElement("div",{className:"cart"},c.a.createElement(o.b,{to:"/",className:"cart__breadcrumb-link"},c.a.createElement("div",{className:"cart__breadcrumb"},c.a.createElement("img",{src:"img/icons/breadcrumbs-arrow.svg",alt:"back icon",className:"cart__breadcrumb-arrow"}),c.a.createElement("p",{className:"cart__breadcrumb-text"},"Back"))),c.a.createElement(q,{title:"Cart"}),r.length?c.a.createElement("div",{className:"cart__container"},c.a.createElement("div",{className:"cart__items"},t.filter((function(e){return r.find((function(a){return e.phoneId===a}))})).map((function(e){return c.a.createElement("div",{className:"cart__phone"},c.a.createElement("button",{type:"button",className:"cart__remove"},c.a.createElement("img",{src:"img/icons/remove.svg",alt:"remove icon"})),c.a.createElement("img",{src:e.image,alt:e.name,className:"cart__phone-img"}),c.a.createElement("p",{className:"cart__phone-name"},e.name),c.a.createElement("div",{className:"cart__phone-amount"},c.a.createElement("button",{type:"button",className:"cart__phone-amount-btn"},"-"),c.a.createElement("p",{className:"cart__phone-amount-text"},"1"),c.a.createElement("button",{type:"button",className:"cart__phone-amount-btn"},"+")),c.a.createElement("h2",null,"$",e.priceDiscount))}))),c.a.createElement("div",{className:"cart__overall"},c.a.createElement("div",{className:"cart__overall-container"},c.a.createElement("h2",{className:"cart__overall-sum"},"$",l.reduce((function(e,a){return e+a}),0)),c.a.createElement("p",{className:"cart__overall-extra"},"Total for"," ",r.length," ","items")),c.a.createElement("button",{type:"button",className:"cart__checkout-btn"},"Checkout"))):c.a.createElement("h3",{className:"cart__oops"},"Add your first purchase here",c.a.createElement("span",{role:"img","aria-label":"Grinny"},"\ud83d\uded2")))})),le=Object(s.b)((function(e){return{favs:R(e),cart:B(e)}}))((function(e){var a=e.favs,t=e.cart;return c.a.createElement(o.a,null,c.a.createElement("nav",{className:"nav"},c.a.createElement("img",{src:"img/logo.svg",alt:"Logo",className:"nav__logo"}),c.a.createElement("ul",{className:"nav__links"},c.a.createElement(o.b,{to:"/",exact:!0,activeClassName:"nav__selected",className:"nav__items"},"Home"),c.a.createElement(o.b,{to:"/phones",activeClassName:"nav__selected",className:"nav__items"},"Phones"),c.a.createElement(o.b,{to:"/tablets",activeClassName:"nav__selected",className:"nav__items"},"Tablets"),c.a.createElement(o.b,{to:"accessories",activeClassName:"nav__selected",className:"nav__items"},"Accessories")),c.a.createElement("div",{className:"nav__fav-cart-container"},c.a.createElement(o.b,{to:"/favs",activeClassName:"nav__selected--1",className:"nav__items"},a.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav__counter"},a.length),c.a.createElement("img",{src:"img/favs.svg",alt:"Favorites",className:"nav__favs"})):c.a.createElement("img",{src:"img/favs.svg",alt:"Favorites",className:"nav__favs"})),c.a.createElement(o.b,{to:"/cart",activeClassName:"nav__selected--1",className:"nav__items"},t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav__counter"},t.length),c.a.createElement("img",{src:"img/cart.svg",alt:"Cart",className:"nav__cart"})):c.a.createElement("img",{src:"img/cart.svg",alt:"Cart",className:"nav__cart"})))),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:Z}),c.a.createElement(m.a,{path:"/phones",exact:!0,component:V}),c.a.createElement(m.a,{path:"/tablets",exact:!0,component:ee}),c.a.createElement(m.a,{path:"/accessories",exact:!0,component:ae}),c.a.createElement(m.a,{path:"/favs",exact:!0,component:ne}),c.a.createElement(m.a,{path:"/cart",exact:!0,component:re})))})),se=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"footer"},c.a.createElement("nav",{className:"footer__nav"},c.a.createElement("img",{src:"img/logo.svg",alt:"Logo",className:"footer__logo"}),c.a.createElement("ul",{className:"footer__menu"},c.a.createElement("a",{href:"https://github.com/tyooma",target:"_blank",rel:"noreferrer noopener",className:"footer__menu-item"},"GitHub"),c.a.createElement(o.b,{to:"/contacts",className:"footer__menu-item"},"Contacts"),c.a.createElement(o.b,{to:"/rights",className:"footer__menu-item"},"Rights")),c.a.createElement("div",{className:"footer__home"},c.a.createElement("p",{className:"footer__text"},"Back to top"),c.a.createElement("button",{type:"button",className:"footer__button"},c.a.createElement("img",{src:"img/back-to-top-arrow.svg",alt:"Back to top arrow",className:"footer__arrow"}))))))},oe=(t(41),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(le,null),c.a.createElement(se,null))}),me=function(){return c.a.createElement(s.a,{store:G},c.a.createElement(o.a,null,c.a.createElement(oe,null)))};l.a.render(c.a.createElement(me,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.93993a6b.chunk.js.map