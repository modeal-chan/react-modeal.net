(this["webpackJsonpmodeal.net"]=this["webpackJsonpmodeal.net"]||[]).push([[0],{36:function(e,t,a){},41:function(e,t,a){e.exports=a(82)},46:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),c=a.n(l),i=(a(46),a(15)),s=a(8);a(47);var m=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{className:"logo",src:"/images/app_logo.png",alt:"logo"}))))},o=(a(53),[{title:"\ud648",path:"/home",imgSrc:"/images/icon/footer_menu_01.png"},{title:"\ud504\ub85c\ubaa8\uc158",path:"/promotion",imgSrc:"/images/icon/footer_menu_02.png"},{title:"\ub9e4\uac70\uc9c4",path:"/magazine",imgSrc:"/images/icon/footer_menu_03.png"},{title:"\uc989\uc2dc\uacac\uc801",path:"/quotation",imgSrc:"/images/icon/footer_menu_04.png"},{title:"\uace0\uac1d\uc13c\ud130",path:"/services",imgSrc:"/images/icon/footer_menu_05.png"},{title:"MY",path:"/profile",imgSrc:"/images/icon/footer_menu_06.png"}]);var u=function(){return r.a.createElement("ul",{className:"menu"},o.map((function(e,t){return r.a.createElement("li",{className:"menu-item",key:t},r.a.createElement(i.c,{to:e.path,activeClassName:"clicked"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:e.imgSrc,alt:e.title})),r.a.createElement("p",null,e.title)))})))},p=a(24),E=a.n(p),g=a(39),f=a(4),v=a(5),b=a(7),h=a(6),d=a(85),y=a(87),O=a(86),k=a(83),N=a(84),j=(a(21),a(55),a(40)),_=a.n(j);O.a.use([k.a,N.a]);var w=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.getImages=Object(g.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("http://test.modeal.net/_interface/home/mainpromotion_list.php");case 2:a=t.sent,n=a.list,e.setState({images:n}),console.log(e.state.images);case 6:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"render",value:function(){var e=this.state.images;console.log(e);for(var t=[],a=0;a<5;++a)t.push(r.a.createElement(d.a,{key:"banner-".concat(a),tag:"li"},r.a.createElement("img",{src:"/banner/banner.png",alt:"banner ".concat(a)})));return r.a.createElement("div",{className:"main_banner"},r.a.createElement(y.a,{wrapperTag:"ul",speed:2e3,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{clickable:!0},loop:!0,spaceBetween:30,slidesPerView:1},t))}}]),a}(n.Component);a(73);var C=function(){return r.a.createElement("div",{className:"deal_container"},r.a.createElement("div",{className:"deal_info"},r.a.createElement("div",{className:"item i1"},r.a.createElement("div",{className:"icon"}),r.a.createElement("h4",null,"\ub204\uc801 \uac70\ub798\uc561"),r.a.createElement("p",null,"19.05 ~ 20.08")),r.a.createElement("div",{className:"item i2"},r.a.createElement("h4",null,"\ucc28\ub7c9 \uac70\ub798"),r.a.createElement("p",null,r.a.createElement("span",{className:"data"},"5,487"),"\ub300")),r.a.createElement("div",{className:"item i2"},r.a.createElement("h4",null,"\ub204\uc801 \uac70\ub798"),r.a.createElement("p",null,r.a.createElement("span",{className:"data"},"2,189"),"\uc5b5"))),r.a.createElement("div",{className:"banner"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:"/banner/banner2.png",alt:""}))))},S=(a(74),[{title:"\ud604\ub300",path:"/hyundai"},{title:"\uc81c\ub124\uc2dc\uc2a4",path:"/genesis"},{title:"\uae30\uc544",path:"/kia"},{title:"\ub974\ub178\uc0bc\uc131",path:"/reno"},{title:"BMW",path:"/bmw"},{title:"\ubca4\uce20",path:"/benz"},{title:"\uc544\uc6b0\ub514",path:"/audi"},{title:"\ub809\uc11c\uc2a4",path:"/lexus"},{title:"\ud3ed\uc2a4\ubc14\uac90",path:"/woxwagen"},{title:"+\ub354\ubcf4\uae30",path:"/more"}]);function A(){return r.a.createElement("section",{className:"brands"},r.a.createElement("h3",null,"\ube0c\ub79c\ub4dc"),r.a.createElement("ul",{className:"item_wrapper"},S.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(i.b,{className:"link",to:e.path},e.title))}))))}var P=function(){return r.a.createElement(i.a,null,r.a.createElement(A,null))};a(75);var B=function(){for(var e=[],t=0;t<7;++t)e.push(r.a.createElement(d.a,{key:"slide-".concat(t),tag:"li"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:"car.png",alt:"Slide ".concat(t)}))));return e.push(r.a.createElement(d.a,{key:8,tag:"li"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:"more2.png",alt:"\ub354\ubcf4\uae30"})))),r.a.createElement("section",{className:"price"},r.a.createElement("h3",null,"\uac00\uaca9\ub300"),r.a.createElement(y.a,{id:"item",wrapperTag:"ul",spaceBetween:30,slidesPerView:2.4,freeMode:!0},e))};a(76);var V=function(){return r.a.createElement("div",{className:"sub_banner"},r.a.createElement("a",{href:"",className:"link"},r.a.createElement("img",{src:"/banner/banner3.png",alt:"banner"})))},D=(a(77),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){for(var e=[],t=this.props.link,a=0;a<t.length;++a){var n=t[a];e.push(r.a.createElement("li",{className:"item",key:n.id},r.a.createElement("a",{href:""},r.a.createElement("img",{src:n.src,alt:n.alt}))))}return r.a.createElement(r.a.Fragment,null,e)}}]),a}(n.Component)),M={data:[{id:1,src:"/issue1.png",alt:"link"},{id:2,src:"/issue1.png",alt:"link"},{id:3,src:"/issue1.png",alt:"link"}]},T={data:[{id:1,src:"/img4.png",alt:"link"},{id:2,src:"/img4.png",alt:"link"}]},x={data:[{id:1,src:"/img5.png",alt:"link"},{id:2,src:"/img5.png",alt:"link"}]},I=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=M.data;return r.a.createElement("section",{className:"hotissue"},r.a.createElement("div",{className:"top"},r.a.createElement("h3",null,"\ud56b\uc774\uc288"),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:"/plus_b.png",alt:"\ub354\ubcf4\uae30"})))),r.a.createElement("ul",{className:"wrapper"},r.a.createElement(D,{link:e})))}}]),a}(r.a.Component);a(78);var z=function(e){var t=e.src,a=e.alt,n=e.title,l=e.sub,c=e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"item",key:c},r.a.createElement("a",{href:""},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("span",{className:"title"},n),r.a.createElement("span",{className:"sub_title"},l))))};var q=function(e){var t=e.title,a=e.bold,n=e.desc,l=e.src,c=e.alt,i=e.className;return r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"title"},r.a.createElement("h3",{className:i},t," ",r.a.createElement("b",null,a)),r.a.createElement("p",null,n)),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:l,alt:c}))))},F=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={contents:[{src:"/img1.png",title:"GV80 \ucd5c\ub300 1,500\ub9cc\uc6d0 \ud560\uc778!",sub:"\ub2e4\uc2dc \uc5c6\uc744 \ud560\uc778! 11~19%\ud560\uc778"},{src:"/img1.png",title:"\ube60\ub978\ucd9c\uace0\ub294 \ubaa8\ub51c \ubc14\ub85c\uac80\uc0c9!",sub:"\uc989\uc2dc\ucd9c\uace0 \ub9ac\uc2a4\ud2b8 \ub9e4\uc77c \uc5c5\ub370\uc774\ud2b8"},{src:"/img1.png",title:"\ubca4\uce20 E-class \ud560\uc778+\uc989\uc2dc\ucd9c\uace0",sub:"\uc0c1\ub2f4\uc2dc \uc2a4\ud0c0\ubc85\uc2a4 \ucee4\ud53c \uc99d\uc815"},{src:"/img1.png",title:"\uc3d8\ub80c\ud1a0 \ud30c\uaca9 \ud2b9\uac00\ub85c \uc989\uc2dc\ucd9c\uace0",sub:"\uac1c\uc18c\uc1381.5%\uc720\uc9c0,289\ub9cc\uc6d0 \ud560\uc778!"}]},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.state.contents;return r.a.createElement("section",{className:"release"},r.a.createElement(q,{title:"\uc989\uc2dc\ucd9c\uace0",desc:"\uac00\ub2a5\ud55c \ucc28\ub7c9 \ud655\uc778\ud558\uc138\uc694!",src:"/plus_b.png",alt:"more"}),r.a.createElement("ul",{className:"wrapper"},e.map((function(e,t){return r.a.createElement(z,{key:t,src:e.src,alt:e.alt,title:e.title,sub:e.sub})}))))}}]),a}(n.Component),R=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={contents:[{src:"/img2.png",title:"\uc218\uc785\ucc28 \uc7ac\uace0\ucc3e\uae30, \uad6c\ud574\uc918\ubaa8\ub51c!",sub:"30\uc77c \uc548\uc5d0 \ubabb \ucc3e\uc73c\uba74 50\ub9ccPoint"},{src:"/img2.png",title:"\uad6d\ub0b4\ucd5c\uc800\uac00! \uc7a5\uae30\ub80c\ud2b8 9\uc6d4 \ud2b9\uac00",sub:"520i\uc678 3\uc885, \uc9c0\uae08 \ud655\uc778!"},{src:"/img2.png",title:"\ud560\ubd80\uad6c\ub9e4 \ud604\uae08\uc9c0\uc6d0 \uc774\ubca4\ud2b8",sub:"\uad6d\uc0b0\ucc28 \ucd5c\ub300 110\ub9cc\uc6d0 \uc9c0\uc6d0!"},{src:"/img2.png",title:"Discovery Sport \ud55c\uc815 \ud2b9\uac00!!",sub:"\ub2e4\uc7ac\ub2e4\ub2a5\ud55c SUV\ub97c \ub0b4 \uc190\uc5d0!"}]},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.state.contents;return r.a.createElement("section",{className:"release"},r.a.createElement(q,{title:"\ubaa8\ub450\uac00\ub51c\ub7ec \ud61c\ud0dd",src:"/plus_b.png",alt:"more"}),r.a.createElement("ul",{className:"wrapper"},e.map((function(e,t){return r.a.createElement(z,{key:t,src:e.src,alt:e.alt,title:e.title,sub:e.sub})}))))}}]),a}(n.Component),J=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=[],t=this.props.src,a=this.props.option[0];return t.map((function(t,a){e.push(r.a.createElement(d.a,{key:a},r.a.createElement("a",{href:""},r.a.createElement("img",{src:t.src,alt:"\uc0ac\uc9c4"}))))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{wrapperTag:a.wrapperTag,speed:a.speed,autoplay:a.autoplay,loop:a.loop,spaceBetween:a.spaceBetween,slidesPerView:a.slidesPerView},e))}}]),a}(n.Component),L=(a(36),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={images:[{src:"rent_banner03.png"},{src:"rent_banner03.png"},{src:"rent_banner03.png"}],option:[{wrapperTag:"ul",loop:!0,spaceBetween:30,slidesPerView:1,autoplay:{delay:2e3,disableOnInteraction:!1},speed:500}]},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.option;return r.a.createElement("section",{className:"banner_content"},r.a.createElement(q,{title:"\ub0b4 \uc778\uc0dd \uccab \ucc28\ub77c\uba74?",bold:"\uc7a5\uae30\ub80c\ud2b8!",desc:"",src:"/plus_b.png",alt:"more"}),r.a.createElement(J,{src:t,option:a}))}}]),a}(n.Component)),G=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={images:[{src:"car_type_banner05.png"},{src:"car_type_banner05.png"},{src:"car_type_banner05.png"}],option:[{wrapperTag:"ul",loop:!0,spaceBetween:30,slidesPerView:1,autoplay:{delay:2e3,disableOnInteraction:!1},speed:500}]},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.option;return r.a.createElement("section",{className:"banner_content type2"},r.a.createElement(q,{className:"type2",title:"\uc774\ub7f0 \ucc28\ub294 \uc5b4\ub584\uc694?",desc:"",src:"/plus_b.png",alt:"more"}),r.a.createElement(J,{src:t,option:a}))}}]),a}(n.Component),Q=(a(79),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={images:[{src:"car1.png"},{src:"car1.png"},{src:"car1.png"},{src:"car1.png"},{src:"car1.png"},{src:"car1.png"},{src:"more_review.png"}],option:[{wrapperTag:"ul",loop:!1,spaceBetween:30,slidesPerView:2.4,freeMode:!0,autoplay:!1,speed:500}]},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.option;return r.a.createElement("section",{className:"slide_section"},r.a.createElement("div",{className:"message"},r.a.createElement("p",null,"\ubaa8\ub51c\uc758",r.a.createElement("br",null),r.a.createElement("b",null,"\ubaa8\ub4e0 \uc815\ubcf4")," \ud655\uc778\ud558\uc168\ub098\uc694?")),r.a.createElement(q,{title:"#\ucd9c\uace0\ud6c4\uae30"}),r.a.createElement(J,{src:t,option:a}))}}]),a}(n.Component)),U=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={link:[]},e}return Object(v.a)(a,[{key:"getData",value:function(){var e=T.data;this.setState({link:e})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.link;return r.a.createElement("section",{className:"cont_type1"},r.a.createElement(q,{title:"#\ubaa8\ub51cTIP",src:"/plus_b.png",alt:"\ub354 \ubcf4\uae30"}),r.a.createElement("ul",{className:"wrapper"},r.a.createElement(D,{link:e})))}}]),a}(n.Component),W=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={link:[]},e}return Object(v.a)(a,[{key:"getData",value:function(){var e=x.data;this.setState({link:e})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.link;return r.a.createElement("section",{className:"cont_type1"},r.a.createElement(q,{title:"#\ubaa8\ub51c \uc2a4\ud1a0\ub9ac",src:"/plus_b.png",alt:"\ub354 \ubcf4\uae30"}),r.a.createElement("ul",{className:"wrapper"},r.a.createElement(D,{link:e})))}}]),a}(n.Component),Y=(a(80),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 by ALLCAR Communication. All Rights Reserved.",r.a.createElement("br",null),"\uc62c\uce74\ucee4\ubba4\ub2c8\ucf00\uc774\uc158(\uc8fc) (854-81-00556)"))}}]),a}(n.Component));var H=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(P,null),r.a.createElement(B,null),r.a.createElement(V,null),r.a.createElement(I,null),r.a.createElement(F,null),r.a.createElement(L,null),r.a.createElement(R,null),r.a.createElement(Q,null),r.a.createElement(G,null),r.a.createElement(U,null),r.a.createElement(W,null),r.a.createElement(Y,null))};var K=function(){return r.a.createElement("div",{className:"promotion"},"Promotion")};var X=function(){return r.a.createElement("div",{className:"magazine"},"Magazine")};var Z=function(){return r.a.createElement("div",{className:"quotation"},"Quotation")};var $=function(){return r.a.createElement("div",{className:"services"},"Services")};var ee=function(){return r.a.createElement("div",{className:"profile"},"Profile")},te=(a(81),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"top_btn"},r.a.createElement("img",{src:"/top_btn.png",alt:"go-top"}))}}]),a}(n.Component));var ae=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(i.a,null,r.a.createElement(m,null),r.a.createElement(u,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:H}),r.a.createElement(s.a,{path:"/promotion",component:K}),r.a.createElement(s.a,{path:"/magazine",component:X}),r.a.createElement(s.a,{path:"/quotation",component:Z}),r.a.createElement(s.a,{path:"/services",component:$}),r.a.createElement(s.a,{path:"/profile",component:ee}))),r.a.createElement(te,null))};c.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b8955789.chunk.js.map