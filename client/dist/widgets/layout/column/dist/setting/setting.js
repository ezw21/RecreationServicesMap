System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-for-builder","jimu-ui/advanced/style-setting-components"],(function(t){var e,n,o,s,i,a;return{setters:[function(t){e=t},function(t){n=t},function(t){o=t},function(t){s=t},function(t){i=t},function(t){a=t}],execute:function(){t(function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=526)}({0:function(t,n){t.exports=e},1:function(t,e){t.exports=n},10:function(t,e){t.exports=i},17:function(t,e){t.exports=a},2:function(t,e){t.exports=o},526:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var o=n(0),s=n(10),i=n(2),a=n(1),r=n(7);const c=Object(o.Immutable)({space:10,min:16,style:{padding:{number:[0],unit:"px"},justifyContent:"center",alignItems:"stretch"}});var l=n(17),u={verticalAlign:"Vertical align",start:"Start",end:"End",spaceAround:"Space around",spaceBetween:"Space between",spaceEvenly:"Space evenly",horizontalAlign:"Horizontal align",scrollable:"Scrollable"};const p=[a.Sides.T,a.Sides.R,a.Sides.B,a.Sides.L],d={width:110};class g extends o.React.PureComponent{constructor(){super(...arguments),this.handleSpaceChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("space",t)});const e=Object(s.getAppConfigAction)();this.getLayoutIds().forEach(n=>{e.editLayoutSetting({layoutId:n},{space:t.distance})}),e.exec()},this.handlePaddingChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","padding"],t)});const e=Object(s.getAppConfigAction)();this.getLayoutIds().forEach(n=>{e.editLayoutSetting({layoutId:n},{padding:t})}),e.exec()},this.handleJustifyContentChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","justifyContent"],t.target.value)});const e=Object(s.getAppConfigAction)();this.getLayoutIds().forEach(n=>{e.editLayoutSetting({layoutId:n},{justifyContent:t.target.value})}),e.exec()},this.handleScrollableChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","overflowY"],t.target.checked)});const e=Object(s.getAppConfigAction)();this.getLayoutIds().forEach(n=>{e.editLayoutSetting({layoutId:n},{overflowY:t.target.checked})}),e.exec()},this.formatMessage=t=>this.props.intl.formatMessage({id:t,defaultMessage:u[t]})}getLayoutIds(){const t=[],{layouts:e}=this.props;if(null!=e){const n=e[Object.keys(e)[0]];Object.keys(n).forEach(e=>{t.push(n[e])})}return t}getLayoutSetting(){var t;const{layouts:e}=this.props;if(null!=e){const n=e[Object.keys(e)[0]][r.utils.getCurrentSizeMode()];return null===(t=Object(s.getAppConfigAction)().appConfig.layouts[n])||void 0===t?void 0:t.setting}}render(){var t,e;const n=this.getLayoutSetting();return Object(o.jsx)("div",{className:"flexbox-layout-setting"},Object(o.jsx)(i.SettingSection,{title:this.formatMessage("layout")},Object(o.jsx)(i.SettingRow,{label:this.formatMessage("verticalAlign")},Object(o.jsx)(a.Select,{value:null!==(t=null==n?void 0:n.justifyContent)&&void 0!==t?t:"flex-start",onChange:this.handleJustifyContentChange,style:d},Object(o.jsx)("option",{value:"flex-start"},this.formatMessage("start")),Object(o.jsx)("option",{value:"flex-end"},this.formatMessage("end")),Object(o.jsx)("option",{value:"center"},this.formatMessage("center")),Object(o.jsx)("option",{value:"space-around"},this.formatMessage("spaceAround")),Object(o.jsx)("option",{value:"space-between"},this.formatMessage("spaceBetween")),Object(o.jsx)("option",{value:"space-evenly"},this.formatMessage("spaceEvenly")))),Object(o.jsx)(i.SettingRow,{label:this.formatMessage("scrollable")},Object(o.jsx)(a.Switch,{checked:null===(e=null==n?void 0:n.overflowY)||void 0===e||e,onChange:this.handleScrollableChange})),Object(o.jsx)(i.SettingRow,{label:this.formatMessage("gap")},Object(o.jsx)(l.InputUnit,{value:{distance:(null==n?void 0:n.space)>=0?n.space:c.space,unit:void 0},min:0,onChange:this.handleSpaceChange,style:d})),Object(o.jsx)(i.SettingRow,{label:this.formatMessage("padding"),flow:"wrap"},Object(o.jsx)(l.FourSides,{showTip:!0,sides:p,value:null==n?void 0:n.padding,onChange:this.handlePaddingChange}))))}}},7:function(t,e){t.exports=s}}))}}}));