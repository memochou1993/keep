(function(e){function t(t){for(var n,a,i=t[0],l=t[1],u=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/keep/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0e21":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=o("b05d"),c=o("f7e2"),a=o("031e"),i=Object(n["createTextVNode"])(" Keep ");function l(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("q-toolbar-title"),u=Object(n["resolveComponent"])("q-toolbar"),s=Object(n["resolveComponent"])("q-header"),d=Object(n["resolveComponent"])("router-view"),f=Object(n["resolveComponent"])("q-page-container"),b=Object(n["resolveComponent"])("q-layout");return Object(n["openBlock"])(),Object(n["createBlock"])(b,{view:"hHh Lpr fFf"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{elevated:""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{class:"bg-secondary"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])((function(){return[i]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d)]})),_:1})]})),_:1})}var u={name:"App"},s=o("4d5a"),d=o("e359"),f=o("65c6"),b=o("6ac5"),p=o("09e3"),m=o("93dc"),O=o.n(m);u.render=l;var j=u;O()(u,"components",{QLayout:s["a"],QHeader:d["a"],QToolbar:f["a"],QToolbarTitle:b["a"],QPageContainer:p["a"]});var v=o("9483");Object(v["a"])("".concat("/keep/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g=o("6c02"),h={class:"row justify-center q-pa-xl"},y={class:"col-xs-12 col-sm-6"},w={class:"row justify-center"},k={class:"col-xs-10 col-sm-11 text-left"},C={class:"col-xs-2 col-sm-1 text-center"};function x(e,t,o,r,c,a){var i=Object(n["resolveComponent"])("q-input"),l=Object(n["resolveComponent"])("q-form"),u=Object(n["resolveComponent"])("q-btn"),s=Object(n["resolveComponent"])("q-card-section"),d=Object(n["resolveComponent"])("q-card");return Object(n["openBlock"])(),Object(n["createBlock"])("div",h,[Object(n["createVNode"])("div",y,[Object(n["createVNode"])(l,{class:"q-gutter-md",onSubmit:t[2]||(t[2]=function(e){return r.create()})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:r.state.item.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.state.item.title=e}),autocomplete:"off",autofocus:"",color:"secondary",outlined:""},null,8,["modelValue"])]})),_:1}),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.state.items,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:t,class:"q-mt-md"},[Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",w,[Object(n["createVNode"])("div",k,Object(n["toDisplayString"])(e.title),1),Object(n["createVNode"])("div",C,[Object(n["createVNode"])(u,{color:"secondary",outline:"",round:"",size:"xs",icon:"delete",onClick:function(t){return r.destroy(e)}},null,8,["onClick"])])])]})),_:2},1024)]})),_:2},1024)])})),128))])])}o("7db0"),o("4de4");var N={name:"Home",setup:function(){var e=Object(a["useGtm"])(),t=Object(n["reactive"])({item:{},items:JSON.parse(localStorage.getItem("items"))||[]}),o=function(){localStorage.setItem("items",JSON.stringify(t.items))},r=function(){e.trackEvent({event:"create",category:"common",action:"click",value:t.item}),t.items.find((function(e){return e.title===t.item.title}))||(t.items.unshift(t.item),o(),t.item={})},c=function(n){e.trackEvent({event:"destroy",category:"common",action:"click",value:n}),t.items=t.items.filter((function(e){return e.title!==n.title})),o()};return{state:t,create:r,destroy:c}}},V=o("0378"),q=o("27f9"),_=o("f09f"),S=o("a370"),B=o("9c40");N.render=x;var Q=N;O()(N,"components",{QForm:V["a"],QInput:q["a"],QCard:_["a"],QCardSection:S["a"],QBtn:B["a"]});var P=[{path:"/",name:"Home",component:Q}],T=Object(g["createRouter"])({history:Object(g["createWebHashHistory"])(),routes:P}),M=T,F=o("5502"),G=Object(F["a"])({state:{},mutations:{},actions:{},modules:{}}),H=(o("0e21"),o("e54f"),{config:{},plugins:{}});Object(n["createApp"])(j).use(r["a"],H).use(G).use(M).use(c["a"],{property:{id:"G-J7M1ZGEG4Q"}}).use(Object(a["createGtm"])({id:"GTM-KDD2FBM",debug:!0,vueRouter:M,trackOnNextTick:!1})).mount("#app")}});
//# sourceMappingURL=app.dfe30acc.js.map