System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e){var t,n,r;return{setters:[function(e){t=e},function(e){n=e},function(e){r=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=537)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},450:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1v12a1 1 0 001 1h12a1 1 0 001-1V2zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 3h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v4h4V4H3zm7 5h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1zm0 1v3h3v-3h-3z" fill="#000" fill-rule="nonzero"></path></svg>'},537:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(0),o=n(7),u="Fixed Panel",i=n(1);const a=n(450);class s extends r.React.PureComponent{render(){const{layouts:e,id:t,intl:n,builderSupportModules:s}=this.props,l=window.jimuConfig.isInBuilder?s.widgetModules.LayoutBuilder:o.LayoutEntry;if(null==l)return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"No layout component!");const c=Object.keys(e)[0];return Object(r.jsx)("div",{className:"widget-fixed-layout d-flex w-100 h-100"},Object(r.jsx)(l,{layouts:e[c],isInWidget:!0,style:{overflow:"auto",minHeight:"none"}},Object(r.jsx)(i.WidgetPlaceholder,{icon:a,widgetId:t,style:{border:"none"},message:n.formatMessage({id:"tips",defaultMessage:u})})))}}},7:function(e,t){e.exports=r}}))}}}));