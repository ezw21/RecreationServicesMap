System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e){var t,n,o;return{setters:[function(e){t=e},function(e){n=e},function(e){o=e}],execute:function(){e(function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=536)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},448:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1v12a1 1 0 001 1h12a1 1 0 001-1V2zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM1 6h14v1H1V6zm0 5h14v1H1v-1z"></path></svg>'},536:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var o=n(0),r=n(1),u=n(7),i="Column";const s=n(448);class l extends o.React.PureComponent{getStyle(){return o.css`
      & > div.column-layout {
        height: 100%;
        overflow: hidden;
        display: flex;

        & > .trail-container {
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
        }
      }
    `}render(){const{layouts:e,id:t,intl:n,builderSupportModules:l}=this.props,a=window.jimuConfig.isInBuilder?l.widgetModules.ColumnLayoutBuilder:u.ColumnLayoutViewer;if(null==a)return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"No layout component!");const c=Object.keys(e)[0];return Object(o.jsx)("div",{className:"widget-column-layout w-100 h-100",css:this.getStyle(),style:{overflow:"auto"}},Object(o.jsx)(a,{layouts:e[c]},Object(o.jsx)(r.WidgetPlaceholder,{icon:s,widgetId:t,style:{border:"none",height:"100%",pointerEvents:"none",position:"absolute"},message:n.formatMessage({id:"tips",defaultMessage:i})})))}}},7:function(e,t){e.exports=o}}))}}}));