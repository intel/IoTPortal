(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{1018:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(2),o=r(137),l=r(1007),u=r(99);t.default=function(){return a.a.createElement(c.h,null,a.a.createElement(c.l,null,"Flag Icons",a.a.createElement(u.a,{href:"https://github.com/coreui/coreui-icons",text:"GitHub"})),a.a.createElement(c.i,null,a.a.createElement(c.ab,{className:"text-center"},Object(o.getIconsView)(l.a))))}},137:function(e,t,r){"use strict";r.r(t),r.d(t,"getIconsView",(function(){return f}));var n=r(0),a=r.n(n),c=r(2),o=r(8),l=r(1005),u=r(99);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(e){return Object.entries(e).map((function(e){var t=i(e,2),r=t[0],n=t[1];return a.a.createElement(c.m,{className:"mb-5",xs:"6",sm:"4",md:"3",xl:"2",key:r},a.a.createElement(o.a,{content:n,size:"2xl"}),a.a.createElement("div",null,r.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()))}))};t.default=function(){return a.a.createElement(c.h,null,a.a.createElement(c.l,null,"Brand Icons",a.a.createElement(u.a,{href:"https://github.com/coreui/coreui-icons",text:"GitHub"})),a.a.createElement(c.i,null,a.a.createElement(c.ab,{className:"text-center"},f(l.a))))}},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r.n(n),c=r(2);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=function(e){var t=e.name,r=e.text,n=l(e,["name","text"]),u=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return a.a.createElement("div",{className:"card-header-actions"},a.a.createElement(c.Q,o({},n,{href:u,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),a.a.createElement("small",{className:"text-muted"},r||"docs")))},i=a.a.memo(u)}}]);