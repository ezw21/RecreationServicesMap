System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui/basic/list-tree","jimu-ui/basic/sql-expression-runtime","jimu-ui/advanced/resource-selector","jimu-ui/advanced/sql-expression-builder"],(function(e){var t,i,s,I,a,g,n,o;return{setters:[function(e){t=e},function(e){i=e},function(e){s=e},function(e){I=e},function(e){a=e},function(e){g=e},function(e){n=e},function(e){o=e}],execute:function(){e(function(e){var t={};function i(s){if(t[s])return t[s].exports;var I=t[s]={i:s,l:!1,exports:{}};return e[s].call(I.exports,I,I.exports,i),I.l=!0,I.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var I in e)i.d(s,I,function(t){return e[t]}.bind(null,I));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=499)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},137:function(e,t){e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 100-2 1 1 0 000 2zM6.5 7a.5.5 0 01.5-.5h1.5v5h1a.5.5 0 010 1h-3a.5.5 0 010-1h1v-4H7a.5.5 0 01-.5-.5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 118 0a8 8 0 010 16zm0-1A7 7 0 108 1a7 7 0 000 14z" fill="#000"></path></svg>'},14:function(e,t){e.exports=I},15:function(e,t){e.exports=a},2:function(e,t){e.exports=s},335:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNjhweCIgdmlld0JveD0iMCAwIDY4IDY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfaW5saW5lX3ZlcnRpY2FsPC90aXRsZT4NCiAgICA8ZyBpZD0iRmlsdGVyX3YzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IlN0eWxlU2V0dGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOTYuMDAwMDAwLCAtMzM2LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8ZyBpZD0idGh1bWJuYWlsL3N0eWxlL2lubGluZS92ZXJ0aWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE5Ni4wMDAwMDAsIDMzNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8Zz4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzI4MjgyOCIgeD0iNCIgeT0iNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHkiIGZpbGw9IiMzNjM2MzYiIHg9IjgiIHk9IjUyIiB3aWR0aD0iNTIiIGhlaWdodD0iOCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTMyIiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNTIiIGhlaWdodD0iMTkiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMTgiIGZpbGw9IiM1MjUyNTIiIHg9IjMiIHk9IjgiIHdpZHRoPSI0NiIgaGVpZ2h0PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMjUiIGZpbGw9IiM1MjUyNTIiIHg9IjMiIHk9IjEzIiB3aWR0aD0iMzUiIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS1Db3B5LTIzIiBmaWxsPSIjNkE2QTZBIiBwb2ludHM9IjIgMyA2IDMgNCA1Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTMzIiBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSI0MSIgd2lkdGg9IjUyIiBoZWlnaHQ9IjgiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0zNCIgZmlsbD0iIzM2MzYzNiIgeD0iOCIgeT0iMzAiIHdpZHRoPSI1MiIgaGVpZ2h0PSI4IiByeD0iMSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLUNvcHktMjIiIGZpbGw9IiM2QTZBNkEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgNDUuMDAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC00NS4wMDAwMDApICIgcG9pbnRzPSIxMCA0NCAxNCA0NCAxMiA0NiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},336:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjcwcHgiIGhlaWdodD0iNzBweCIgdmlld0JveD0iMCAwIDcwIDcwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfaW5saW5lX2hvcml6b250YWw8L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3NS4wMDAwMDAsIC0zMzUuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJ0aHVtYm5haWwvc3R5bGUvaW5saW5lL2hvcml6b250YWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzUuMDAwMDAwLCAzMzUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMyODI4MjgiIHg9IjUiIHk9IjUiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTE2IiBmaWxsPSIjNkE2QTZBIiB4PSI5IiB5PSI5IiB3aWR0aD0iMTUiIGhlaWdodD0iOCIgcng9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIwIiBmaWxsPSIjNTI1MjUyIiB4PSIyNiIgeT0iOSIgd2lkdGg9IjE5IiBoZWlnaHQ9IjgiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNywxOSBMMTksMjEuMTI3NjU5NiBMNTIsMjEuMTI3NjU5NiBDNTIuNTUyMjg0NywyMS4xMjc2NTk2IDUzLDIxLjU3NTM3NDggNTMsMjIuMTI3NjU5NiBMNTMsNDIuMTI3NjU5NiBDNTMsNDIuNjc5OTQ0MyA1Mi41NTIyODQ3LDQzLjEyNzY1OTYgNTIsNDMuMTI3NjU5NiBMMTAsNDMuMTI3NjU5NiBDOS40NDc3MTUyNSw0My4xMjc2NTk2IDksNDIuNjc5OTQ0MyA5LDQyLjEyNzY1OTYgTDksMjIuMTI3NjU5NiBDOSwyMS41NzUzNzQ4IDkuNDQ3NzE1MjUsMjEuMTI3NjU5NiAxMCwyMS4xMjc2NTk2IEwxNSwyMS4xMjc2NTk2IEwxNywxOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgZmlsbD0iIzM2MzYzNiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMjciIGZpbGw9IiM1MjUyNTIiIHg9IjEzIiB5PSIyNSIgd2lkdGg9IjM2IiBoZWlnaHQ9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTI4IiBmaWxsPSIjNTI1MjUyIiB4PSIxMyIgeT0iMzEiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0yOSIgZmlsbD0iIzUyNTI1MiIgeD0iMTMiIHk9IjM3IiB3aWR0aD0iMjciIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMjEiIGZpbGw9IiM2QTZBNkEiIHg9IjQ3IiB5PSI5IiB3aWR0aD0iMTQiIGhlaWdodD0iOCIgcng9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},337:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNjhweCIgdmlld0JveD0iMCAwIDY4IDY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfcG9wdXA8L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1Ni4wMDAwMDAsIC0zMzYuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJ0aHVtYm5haWwvc3R5bGUvcG9wdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTYuMDAwMDAwLCAzMzYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxNCBMMTIsMTYgTDYzLDE2IEM2My41NTIyODQ3LDE2IDY0LDE2LjQ0NzcxNTMgNjQsMTcgTDY0LDYzIEM2NCw2My41NTIyODQ3IDYzLjU1MjI4NDcsNjQgNjMsNjQgTDUsNjQgQzQuNDQ3NzE1MjUsNjQgNCw2My41NTIyODQ3IDQsNjMgTDQsMTcgQzQsMTYuNDQ3NzE1MyA0LjQ0NzcxNTI1LDE2IDUsMTYgTDgsMTYgTDEwLDE0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzI4MjgyOCI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSIyMCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjE5IiByeD0iMSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLUNvcHktMjMiIGZpbGw9IiM2QTZBNkEiIHBvaW50cz0iMTAgMjMgMTQgMjMgMTIgMjUiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiIGZpbGw9IiMzNjM2MzYiIHg9IjgiIHk9IjQyIiB3aWR0aD0iNTIiIGhlaWdodD0iOCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTE3IiBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSI1MyIgd2lkdGg9IjUyIiBoZWlnaHQ9IjciIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtQ29weS0yNiIgZmlsbD0iIzZBNkE2QSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCA1Ni4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTU2LjAwMDAwMCkgIiBwb2ludHM9IjEwIDU1IDE0IDU1IDEyIDU3Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0xNiIgZmlsbD0iIzUyNTI1MiIgeD0iMTEiIHk9IjI5IiB3aWR0aD0iNDYiIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMTkiIGZpbGw9IiM1MjUyNTIiIHg9IjExIiB5PSIzNCIgd2lkdGg9IjM1IiBoZWlnaHQ9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktMjgiIGZpbGw9IiM2QTZBNkEiIHg9IjYiIHk9IjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},338:function(e,t,i){var s={"./trigger_button.svg":339,"./trigger_toggle.svg":340};function I(e){var t=a(e);return i(t)}function a(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}I.keys=function(){return Object.keys(s)},I.resolve=a,e.exports=I,I.id=338},339:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDY4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfbWV0aG9kc19idXR0b248L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3Ni4wMDAwMDAsIC00ODQuMDAwMDAwKSIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJTZXR0aW5nUGFuZWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODAuMDAwMDAwLCAzNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0idGh1bWJuYWlsL21ldGhvZHMvYnV0dG9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ni4wMDAwMDAsIDQ0OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlRpdGxlLUNvcHktMzIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iNCIgeT0iNSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQiIHk9IjEzIiB3aWR0aD0iNjAiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iNCIgeT0iMjEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSI0IiB5PSIyOSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ0IiB5PSIzNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHJ4PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},340:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjcwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDcwIDUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfbWV0aG9kc190b2dnbGU8L3RpdGxlPg0KICAgIDxnIGlkPSJGaWx0ZXJfdjMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE5NS4wMDAwMDAsIC00ODMuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iU2V0dGluZ1BhbmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgwLjAwMDAwMCwgMzYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9InRodW1ibmFpbC9tZXRob2RzL3RvZ2dsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMDAwMDAwLCA0NDcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzLjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iVGl0bGUtQ29weS0zNCIgZmlsbD0iIzZBNkE2QSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIHJ4PSIzIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktMzQiIGZpbGw9IiMxODE4MTgiIHg9IjciIHk9IjEiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iVGl0bGUtQ29weS0zMiIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI1IiB5PSI2IiB3aWR0aD0iNDIiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktNDgiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNSIgeT0iMTQiIHdpZHRoPSI0MiIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iVGl0bGUtQ29weS00OSIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI1IiB5PSIyMiIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJUaXRsZS1Db3B5LTUwIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjUiIHk9IjMwIiB3aWR0aD0iNDIiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlRpdGxlLUNvcHktNTEiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNSIgeT0iMzgiIHdpZHRoPSIzMSIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},39:function(e,t,i){"use strict";var s,I;i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return I})),function(e){e.Block="BLOCK",e.Inline="INLINE",e.Popper="POPPER"}(s||(s={})),function(e){e.Toggle="TOGGLE",e.Button="BUTTON"}(I||(I={}))},40:function(e,t){e.exports=g},44:function(e,t){e.exports=n},499:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return D}));var s=i(0),I=i(2),a=i(1),g=i(14),n=i(50),o={start:"Start",selectTemplateTip:"Select a template",selectAnotherTemplateTip:"Select another template",filtersDesc:"Add new filters and customize options.",newFilter:"New filter",setFilterItem:"Create new filter",sqlExpr:"SQL Expressions",sqlExprDesc:"Add SQL expressions to your filter.",openFilterBuilder:"SQL Expression Builder",setExprTips:"Please add your SQL expressions first.",options:"Options",autoApplyWhenWidgetOpen:"Apply this filter automatically",collapseFilterExprs:"Collapse filter details (if any) automatically",arrangeAndStyle:"Arrangement style",activationMethods:"Activation style",toggleTooltip:"Toggle switch",buttonTooltip:"Button",omitInternalStyle:"Exclude activation styles for single clause",omitInternalStyleTip:"If there is only one clause in each filter, and it is asking for values (or displaying label), this option allows you to exclude the activation styles (along with the label and the icon), display the clause content directly, and auto-apply it.",wrapFilters:"Wrap items",blankStatusMsg:'Click the "{newFilter}" button to add and configure filters.'};var l=i(44);class r extends s.React.PureComponent{constructor(e){super(e),this.dsManager=(window&&window.jimuConfig&&window.jimuConfig.isBuilder,s.DataSourceManager.getInstance()),this.supportedDsTypes=Object(s.Immutable)([g.AllDataSourceTypes.FeatureLayer,g.AllDataSourceTypes.SceneLayer]),this.showSqlExprPopup=()=>{this.setState({isSqlExprShow:!0})},this.toggleSqlExprPopup=()=>{this.setState({isSqlExprShow:!this.state.isSqlExprShow})},this.nameChange=e=>{if(e&&e.target&&e.target.value){const t=e.target.value.trim();this.props.optionChange("name",t)}},this.autoApplyChange=()=>{this.props.optionChange("autoApplyWhenWidgetOpen",!this.props.autoApplyWhenWidgetOpen)},this.collapseChange=()=>{this.props.optionChange("collapseFilterExprs",!this.props.collapseFilterExprs)},this.i18nMessage=(e,t)=>(t=t||o,this.props.intl.formatMessage({id:e,defaultMessage:t[e]})),this.state={isSqlExprShow:!1}}render(){const{useDataSource:e,dataSource:t,sqlExprObj:i}=this.props,o=!t;return Object(s.jsx)("div",{className:"w-100 h-100",css:(r=this.props.theme,s.css`
    .filter-item-panel{
      .setting-header {
        padding: ${s.polished.rem(10)} ${s.polished.rem(16)} ${s.polished.rem(0)} ${s.polished.rem(16)}
      }

      .setting-title {
        font-size: ${s.polished.rem(16)};
        .filter-item-label{
          color: ${r.colors.palette.dark[600]};
        }
      }

      .setting-container {
        height: calc(100% - ${s.polished.rem(50)});
        overflow: auto;

        .title-desc{
          color: ${r.colors.palette.dark[200]};
        }


      }
    }
  `)},Object(s.jsx)("div",{className:"w-100 h-100 filter-item-panel"},Object(s.jsx)("div",{className:"w-100 jimu-widget-setting--header d-flex px-3 py-0"},Object(s.jsx)(a.PanelHeader,{level:1,className:"py-3",showClose:!!this.props.onClose,onClose:this.props.onClose,title:this.i18nMessage("setFilterItem")})),Object(s.jsx)("div",{className:"setting-container"},Object(s.jsx)(I.SettingSection,{title:this.i18nMessage("data"),className:"pt-0"},Object(s.jsx)(I.SettingRow,null,Object(s.jsx)(g.DataSourceSelector,{types:this.supportedDsTypes,disableRemove:()=>!0,useDataSources:e&&t?Object(s.Immutable)([e]):Object(s.Immutable)([]),mustUseDataSource:!0,onChange:this.props.dataSourceChange,closeDataSourceListOnChange:!0}))),Object(s.jsx)(I.SettingSection,{title:this.i18nMessage("label",a.defaultMessages)},Object(s.jsx)(I.SettingRow,null,Object(s.jsx)(a.TextInput,{type:"text",className:"w-100",value:this.props.name?this.props.name:"",onChange:this.nameChange,"aria-label":this.i18nMessage("label",a.defaultMessages)}))),Object(s.jsx)(I.SettingSection,{title:Object(s.jsx)("div",{className:"w-100 d-flex justify-content-between"},Object(s.jsx)("span",{className:"pt-1 mr-2 line-height-1 text-truncate"},this.props.intl.formatMessage({id:"icon",defaultMessage:s.defaultMessages.icon})),Object(s.jsx)(l.IconPicker,{buttonOptions:{type:"default",size:"sm"},icon:this.props.icon?this.props.icon:null,onChange:e=>this.props.optionChange("icon",e),configurableOption:"none"}))}),Object(s.jsx)(I.SettingSection,{title:this.i18nMessage("sqlExpr")},Object(s.jsx)(I.SettingRow,{label:this.i18nMessage("sqlExprDesc"),flow:"wrap"}),Object(s.jsx)(I.SettingRow,null,Object(s.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},Object(s.jsx)(a.Button,{className:"w-100 text-dark set-link-btn",type:o?"secondary":"primary",disabled:o,onClick:this.showSqlExprPopup,title:this.i18nMessage("openFilterBuilder")},Object(s.jsx)("div",{className:"w-100 px-2 text-truncate"},this.i18nMessage("openFilterBuilder"))))),Object(s.jsx)(I.SettingRow,null,Object(s.jsx)(a.TextArea,{style:{height:"80px"},className:"w-100",spellCheck:!1,placeholder:this.i18nMessage("setExprTips"),value:i&&i.displaySQL?i.displaySQL:"",onClick:e=>e.currentTarget.select(),readOnly:!0}))),Object(s.jsx)(I.SettingSection,{title:this.i18nMessage("options"),className:"border-0"},Object(s.jsx)(I.SettingRow,{label:this.i18nMessage("autoApplyWhenWidgetOpen")},Object(s.jsx)(a.Switch,{checked:!!this.props.autoApplyWhenWidgetOpen,onChange:this.autoApplyChange,"aria-label":this.i18nMessage("autoApplyWhenWidgetOpen")})),Object(s.jsx)(I.SettingRow,{label:this.i18nMessage("collapseFilterExprs")},Object(s.jsx)(a.Switch,{checked:!!this.props.collapseFilterExprs,onChange:this.collapseChange,"aria-label":this.i18nMessage("collapseFilterExprs")}))),!o&&Object(s.jsx)(n.SqlExpressionBuilderPopup,{dataSource:t,isOpen:this.state.isSqlExprShow,toggle:this.toggleSqlExprPopup,expression:i,onChange:this.props.onSqlExprBuilderChange}))));var r}}var c=i(39),d=i(40);class C extends s.React.PureComponent{constructor(e){super(e),this.onDataSourceCreated=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,e)},this.onCreateDataSourceFailed=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null)}}componentWillUnmount(){}render(){return Object(s.jsx)(s.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})}}var A=i(15);const p=i(71),u=i(66),m=i(79),h=i(99),j=i(137),b=Object(s.Immutable)({svg:h,properties:{color:"",filename:"filter-16.svg",originalName:"filter-16.svg",inlineSvg:!0,path:["general","filter"],size:14}});class D extends s.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=s.React.createRef(),this.i18nMessage=(e,t,i)=>(t=t||o,this.props.intl.formatMessage({id:e,defaultMessage:t[e]},i)),this.onShowFilterItemPanel=e=>{e===this.index?this.setState({showFilterItemPanel:!this.state.showFilterItemPanel}):(this.setState({showFilterItemPanel:!0}),this.setState({refreshFilterItemPanel:!this.state.refreshFilterItemPanel}),this.index=e)},this.onCloseFilterItemPanel=()=>{this.setState({showFilterItemPanel:!1}),this.index=0},this.updateConfigForOptions=(e,t)=>{const i={id:this.props.id,config:this.props.config.set(e,t)};this.props.onSettingChange(i)},this.removeFilterItem=e=>{this.index===e&&this.onCloseFilterItemPanel();const t=this.props.config.filterItems[e].useDataSource.dataSourceId,i=this.props.config.filterItems.asMutable({deep:!0});i.splice(e,1);const s=this.props.config.set("filterItems",i),I={id:this.props.id,config:s},a=this.getUseDataSourcesByRemoved(i,t);a&&(I.useDataSources=a),this.props.onSettingChange(I),this.index>e&&this.index--},this.optionChangeForFI=(e,t)=>{if(this.props.config.filterItems[this.index]){const i=this.props.config.filterItems.asMutable({deep:!0}),I=Object(s.Immutable)(i[this.index]).set(e,t);i.splice(this.index,1,I.asMutable({deep:!0}));const a={id:this.props.id,config:this.props.config.set("filterItems",i)};this.props.onSettingChange(a)}},this.optionChangeByDrag=e=>{const t={id:this.props.id,config:this.props.config.set("filterItems",e)};this.props.onSettingChange(t)},this.dataSourceChangeForFI=e=>{if(!e)return;const t=Object(s.Immutable)(e[0]);this.dsManager.createDataSourceByUseDataSource(Object(s.Immutable)(e[0])).then(i=>{const I={icon:b,name:i.getLabel(),useDataSource:t,sqlExprObj:null,autoApplyWhenWidgetOpen:!1,collapseFilterExprs:!1},a=this.props.config.filterItems[this.index];let g;if(a){const e=this.props.config.filterItems.asMutable({deep:!0});e.splice(this.index,1,I),g=Object(s.Immutable)(e)}else g=this.props.config.filterItems.concat(Object(s.Immutable)([Object(s.Immutable)(I)]));const n={id:this.props.id,config:this.props.config.set("filterItems",g)},o=this.getUseDataSourcesByDsAdded(e[0],null==a?void 0:a.useDataSource.dataSourceId);o&&(n.useDataSources=o),this.props.onSettingChange(n)})},this.sqlExprBuilderChange=e=>{var t;let i=[];(null===(t=null==e?void 0:e.parts)||void 0===t?void 0:t.length)>0?i=Object(d.getJimuFieldNamesBySqlExpression)(e):e=null;const I=this.props.config.filterItems[this.index].useDataSource,a={dataSourceId:I.dataSourceId,mainDataSourceId:I.mainDataSourceId,dataViewId:I.dataViewId,rootDataSourceId:I.rootDataSourceId,fields:i},g=this.props.config.filterItems.asMutable({deep:!0}),n=Object.assign({},g[this.index],{sqlExprObj:e,useDataSource:a});g.splice(this.index,1,n);const o={id:this.props.id,config:this.props.config.set("filterItems",Object(s.Immutable)(g))},l=this.getUseDataSourcesByFieldsChanged(g,a.dataSourceId);l&&(o.useDataSources=l),this.props.onSettingChange(o)},this.getAllUsedFieldsByDataSourceId=(e,t)=>{let i=[];return e.map(e=>{e.useDataSource.dataSourceId===t&&e.useDataSource.fields&&(i=i.concat(e.useDataSource.fields))}),i=Array.from(new Set(i)).sort(),i},this.getUpdatedUseDsArray=(e,t)=>{const i=[];return this.props.useDataSources.map(s=>{s.dataSourceId===t?i.push(s.set("fields",e)):i.push(s)}),i},this.getUseDataSourcesByRemoved=(e,t)=>e.filter(e=>t===e.useDataSource.dataSourceId).length>0?this.getUseDataSourcesByFieldsChanged(e,t):this.props.useDataSources.asMutable({deep:!0}).filter(e=>e.dataSourceId!==t),this.getUseDataSourcesByFieldsChanged=(e,t)=>{var i,s;const I=this.getAllUsedFieldsByDataSourceId(e,t),a=(null===(s=null===(i=this.props.useDataSources.filter(e=>t===e.dataSourceId)[0])||void 0===i?void 0:i.fields)||void 0===s?void 0:s.asMutable({deep:!0}))||[];return JSON.stringify(I)!==JSON.stringify(a)?this.getUpdatedUseDsArray(I,t):null},this.getUseDataSourcesByDsAdded=(e,t)=>{var i;let s=(null===(i=this.props.useDataSources)||void 0===i?void 0:i.asMutable({deep:!0}))||[];if(t){1===this.props.config.filterItems.filter(e=>e.useDataSource.dataSourceId===t).length&&(s=s.filter(e=>e.dataSourceId!==t))}return s.filter(t=>e.dataSourceId===t.dataSourceId).length>0?s=t?s:null:s.push(e),s},this.getUniqueValues=(e=[],t=[])=>e.concat(t).filter((function(e,t,i){return i.indexOf(e)===t})),this.getDataSourceById=(e,t)=>{const i=e.filter(e=>e.dataSourceId===t);return Object(s.Immutable)(i[0])},this.changeAndOR=e=>{this.updateConfigForOptions("logicalOperator",e)},this.changeUseWrap=e=>{this.updateConfigForOptions("wrap",e)},this.changeArrangeType=e=>{e!==this.props.config.arrangeType&&this.updateConfigForOptions("arrangeType",e)},this.changeTriggerType=e=>{this.updateConfigForOptions("triggerType",e)},this.changeOmitInternalStyle=e=>{this.updateConfigForOptions("omitInternalStyle",e)},this.onCreateDataSourceCreatedOrFailed=(e,t)=>{this.setState(i=>{const s=Object.assign({},i.dataSources);return s[e]=t,{dataSources:s}})},this.isDataSourceCreated=e=>null!==this.state.dataSources[e]&&this.props.useDataSources.filter(t=>e===t.dataSourceId).length>0,this.CreateFilterItemElement=(e,t)=>{var i;return Object(s.jsx)("div",{key:t,className:"filter-item align-items-center",onClick:()=>{this.onShowFilterItemPanel(t)}},e.icon&&Object(s.jsx)("div",{className:"filter-item-icon"},Object(s.jsx)(a.Icon,{icon:e.icon.svg,size:14})),Object(s.jsx)("div",{className:"filter-item-name flex-grow-1"},e.name),!this.isDataSourceCreated(null===(i=this.props.config.filterItems[t])||void 0===i?void 0:i.useDataSource.dataSourceId)&&Object(s.jsx)(a.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:this.i18nMessage("dataSourceCreateError",s.defaultMessages)}),Object(s.jsx)(a.Button,{size:"sm",type:"tertiary",icon:!0,"aria-label":this.i18nMessage("delete",s.defaultMessages),onClick:e=>{e.stopPropagation(),this.removeFilterItem(t)}},Object(s.jsx)(a.Icon,{icon:u,size:12})))},this.createFilterItems=e=>Object(s.jsx)("div",{className:"filter-items-container "+(this.props.config.filterItems.length>1?"mt-2":"mt-3")},Object(s.jsx)(A.List,{className:"setting-ui-unit-list",itemsJson:this.props.config.filterItems.asMutable().map((e,t)=>({itemStateDetailContent:e,itemKey:""+t})),dndEnabled:!0,onDidDrop:(e,t)=>{const{itemJsons:[,i]}=t.props;this.optionChangeByDrag(i.map(e=>e.itemStateDetailContent))},isItemFocused:(e,t)=>{const{itemJsons:[i]}=t.props;return this.state.showFilterItemPanel&&this.index+""===i.itemKey},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:A.TreeItemActionType.RenderOverrideItem,children:[{name:A.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:A.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:A.TreeItemActionType.RenderOverrideItemBody,children:[{name:A.TreeItemActionType.RenderOverrideItemDragHandle},{name:A.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,t)=>{const{itemJsons:i}=t.props,s=i[0],I=i[1];return this.CreateFilterItemElement(s.itemStateDetailContent,I.indexOf(s))}}),e&&Object(s.jsx)(A.List,{className:"mt-1",itemsJson:[{itemKey:this.index+"",itemStateIcon:()=>({icon:h,size:14}),itemStateTitle:"......",itemStateCommands:[]}],dndEnabled:!1,isItemFocused:()=>!0,overrideItemBlockInfo:e=>({name:A.TreeItemActionType.RenderOverrideItem,children:[{name:A.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:A.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:A.TreeItemActionType.RenderOverrideItemBody,children:[{name:A.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:A.TreeItemActionType.RenderOverrideItemDragHandle},{name:A.TreeItemActionType.RenderOverrideItemIcon},{name:A.TreeItemActionType.RenderOverrideItemTitle}]}]}]}]}]})})),this.index=0,this.dsManager=s.DataSourceManager.getInstance(),this.state={showFilterItemPanel:!1,refreshFilterItemPanel:!1,dataSources:{}}}render(){var e,t,g,n;const{config:o}=this.props,l=o.filterItems.length===this.index&&this.state.showFilterItemPanel,d=o.filterItems.length>0||l;return Object(s.jsx)("div",{css:(A=this.props.theme,s.css`
    .widget-setting-filter{
      .and-or-group .max-width-50{
        max-width: 50%;
      }
      .filter-item {
        display: flex;
        flex: 1;
        padding: 0.5rem 0.25rem;
        line-height: 23px;
        cursor: pointer;

        .filter-item-icon{
          width: 14px;
          margin-right: 0.5rem;
        }
        .filter-item-name{
          /* word-break: break-word; */
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-break: break-word;
          -webkit-line-clamp: 2;
          line-height: ${A.typography.lineHeights.sm};
        }
      }

      .empty-placeholder {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 2rem;
        .empty-placeholder-text {
          color: ${A.colors.palette.dark[500]};
          font-size: ${s.polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon {
          color: ${A.colors.palette.dark[200]};
        }
      }

      .arrange-style-container{

        .arrange_container, .trigger_container{
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          .jimu-btn {
            padding: 0;
            background: ${A.colors.palette.light[200]};
            &.active{
              border: 2px solid ${A.colors.palette.primary[600]};
            }
          }
        }
        .trigger_container{
          justify-content: flex-start;
          .jimu-btn:last-of-type{
            margin-left: 0.5rem;
          }
        }

        .omit-label{
          color: ${A.colors.palette.dark[400]};
        }
      }

      .options-container {
        .use-wrap{
          .jimu-widget-setting--row-label{
            margin-right: 5px;
          }
        }
      }
    }
  `)},Object(s.jsx)("div",{className:"jimu-widget-setting widget-setting-filter"},null===(e=this.props.useDataSources)||void 0===e?void 0:e.map((e,t)=>Object(s.jsx)(C,{key:t,useDataSource:e,onCreateDataSourceCreatedOrFailed:this.onCreateDataSourceCreatedOrFailed})),Object(s.jsx)(I.SettingSection,{className:d?"":"border-0"},Object(s.jsx)("div",{ref:this.sidePopperTrigger},Object(s.jsx)(I.SettingRow,{label:this.i18nMessage("filtersDesc"),flow:"wrap"}),Object(s.jsx)(I.SettingRow,{className:"mt-2"},Object(s.jsx)(a.Button,{className:"w-100 text-dark set-link-btn",type:"primary",onClick:()=>{this.onShowFilterItemPanel(o.filterItems.length)}},Object(s.jsx)("div",{className:"w-100 px-2 text-truncate"},Object(s.jsx)(a.Icon,{icon:m,className:"mr-1",size:14}),this.i18nMessage("newFilter")))),d&&Object(s.jsx)(s.React.Fragment,null,o.filterItems.length>1&&Object(s.jsx)(I.SettingRow,null,Object(s.jsx)(a.ButtonGroup,{className:"w-100 and-or-group"},Object(s.jsx)(a.Button,{onClick:()=>{this.changeAndOR(s.ClauseLogic.And)},className:"btn-secondary max-width-50",size:"sm",type:o.logicalOperator===s.ClauseLogic.And?"primary":"secondary","aria-label":this.i18nMessage("and"),"aria-checked":o.logicalOperator===s.ClauseLogic.And},Object(s.jsx)("div",{className:"text-truncate"},this.i18nMessage("and"))),Object(s.jsx)(a.Button,{onClick:()=>{this.changeAndOR(s.ClauseLogic.Or)},className:"btn-secondary max-width-50",size:"sm",type:o.logicalOperator===s.ClauseLogic.Or?"primary":"secondary","aria-label":this.i18nMessage("or"),"aria-checked":o.logicalOperator===s.ClauseLogic.Or},Object(s.jsx)("div",{className:"text-truncate"},this.i18nMessage("or"))))),this.createFilterItems(l)))),o.filterItems.length>0?Object(s.jsx)(I.SettingSection,{className:"arrange-style-container",title:this.i18nMessage("arrangeAndStyle")},Object(s.jsx)(I.SettingRow,{className:"arrange_container"},Object(s.jsx)(a.Tooltip,{title:this.i18nMessage("vertical",a.defaultMessages),placement:"bottom"},Object(s.jsx)(a.Button,{onClick:()=>this.changeArrangeType(c.a.Block),icon:!0,size:"sm",type:"tertiary",active:o.arrangeType===c.a.Block,"aria-label":this.i18nMessage("vertical",a.defaultMessages)},Object(s.jsx)(a.Icon,{width:68,height:68,icon:i(335),autoFlip:!0}))),Object(s.jsx)(a.Tooltip,{title:this.i18nMessage("horizontal",a.defaultMessages),placement:"bottom"},Object(s.jsx)(a.Button,{onClick:()=>this.changeArrangeType(c.a.Inline),icon:!0,size:"sm",type:"tertiary",active:o.arrangeType===c.a.Inline,"aria-label":this.i18nMessage("horizontal",a.defaultMessages)},Object(s.jsx)(a.Icon,{width:68,height:68,icon:i(336),autoFlip:!0}))),Object(s.jsx)(a.Tooltip,{title:this.i18nMessage("icon",s.defaultMessages),placement:"bottom"},Object(s.jsx)(a.Button,{onClick:()=>this.changeArrangeType(c.a.Popper),icon:!0,size:"sm",type:"tertiary",active:o.arrangeType===c.a.Popper,"aria-label":this.i18nMessage("icon",a.defaultMessages)},Object(s.jsx)(a.Icon,{width:68,height:68,icon:i(337),autoFlip:!0})))),o.arrangeType===c.a.Inline&&Object(s.jsx)(I.SettingRow,{label:this.i18nMessage("wrapFilters")},Object(s.jsx)(a.Switch,{checked:o.wrap,onChange:()=>this.changeUseWrap(!o.wrap)})),Object(s.jsx)(I.SettingRow,{label:this.i18nMessage("activationMethods"),flow:"wrap"}),Object(s.jsx)(I.SettingRow,{className:"trigger_container"},[{type:c.b.Toggle,icon:"toggle"},{type:c.b.Button,icon:"button"}].map((e,t)=>Object(s.jsx)(a.Tooltip,{key:t,title:this.i18nMessage(e.icon+"Tooltip"),placement:"bottom"},Object(s.jsx)(a.Button,{onClick:()=>this.changeTriggerType(e.type),icon:!0,size:"sm",type:"tertiary",active:e.type===o.triggerType,"aria-label":this.i18nMessage(e.icon+"Tooltip")},Object(s.jsx)(a.Icon,{width:70,height:50,icon:i(338)(`./trigger_${e.icon}.svg`),autoFlip:!0}))))),Object(s.jsx)(I.SettingRow,null,Object(s.jsx)(a.Label,{className:"w-100 d-flex"},Object(s.jsx)(a.Checkbox,{style:{cursor:"pointer",marginTop:"2px"},onChange:()=>this.changeOmitInternalStyle(!o.omitInternalStyle),checked:o.omitInternalStyle}),Object(s.jsx)("div",{className:"m-0 ml-2 flex-grow-1 omit-label"},this.i18nMessage("omitInternalStyle"),Object(s.jsx)(a.Tooltip,{title:this.i18nMessage("omitInternalStyleTip"),showArrow:!0,placement:"left"},Object(s.jsx)("div",{className:"ml-2 d-inline"},Object(s.jsx)(a.Icon,{size:16,icon:j}))))))):Object(s.jsx)(s.React.Fragment,null,l?null:Object(s.jsx)("div",{className:"empty-placeholder w-100"},Object(s.jsx)("div",{className:"empty-placeholder-icon"},Object(s.jsx)(a.Icon,{icon:p,width:48,height:48})),Object(s.jsx)("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.i18nMessage("blankStatusMsg",null,{newFilter:this.i18nMessage("newFilter")})}}))),Object(s.jsx)(I.SidePopper,{isOpen:this.state.showFilterItemPanel&&!s.urlUtils.getAppIdPageIdFromUrl().pageId,position:"right",toggle:this.onCloseFilterItemPanel,trigger:null===(t=this.sidePopperTrigger)||void 0===t?void 0:t.current},Object(s.jsx)(r,Object.assign({},o.filterItems[this.index],{intl:this.props.intl,theme:this.props.theme,useDataSource:null===(g=o.filterItems[this.index])||void 0===g?void 0:g.useDataSource,dataSource:this.state.dataSources[null===(n=o.filterItems[this.index])||void 0===n?void 0:n.useDataSource.dataSourceId],dataSourceChange:this.dataSourceChangeForFI,optionChange:this.optionChangeForFI,onSqlExprBuilderChange:this.sqlExprBuilderChange,onClose:this.onCloseFilterItemPanel})))));var A}}},50:function(e,t){e.exports=o},66:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.637 15.866L30.951 27.18a2.667 2.667 0 01-3.771 3.771L15.866 19.637 4.552 30.951A2.667 2.667 0 01.781 27.18l11.314-11.314L.781 4.552A2.667 2.667 0 014.552.781l11.314 11.314L27.18.781a2.667 2.667 0 013.771 3.771L19.637 15.866z"></path></svg>'},71:function(e,t){e.exports='<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.477 22.045c-.53-.142-.844-.686-.74-1.226.653-3.414.13-7.07-1.744-10.316-4.142-7.175-13.316-9.633-20.49-5.49-7.175 4.142-9.633 13.315-5.49 20.49a14.944 14.944 0 008.24 6.728c.526.176.848.723.704 1.258-.142.531-.688.85-1.21.681a16.938 16.938 0 01-9.467-7.667C.586 18.372 3.372 7.975 11.503 3.28c8.13-4.694 18.528-1.908 23.222 6.223a16.936 16.936 0 011.95 11.823c-.108.543-.662.863-1.198.72zm-5.8-1.554c-.529-.142-.84-.683-.763-1.225a8.961 8.961 0 00-1.117-5.763 9 9 0 10-10.989 12.914c.52.197.845.743.701 1.28-.142.53-.686.85-1.202.667a10.957 10.957 0 01-5.83-4.861c-3.038-5.261-1.235-11.989 4.026-15.026 5.261-3.038 11.988-1.235 15.026 4.026a10.954 10.954 0 011.332 7.262c-.09.55-.646.87-1.183.726zM43.78 35.583l-12.512 1.648-7.682 10.011c-.564.736-1.738.375-1.792-.55L20.24 19.918a1 1 0 011.548-.893l22.41 14.731c.774.51.5 1.706-.42 1.827zm-14.099.43l-6.046 7.88-1.282-22.104 18.501 12.162-9.847 1.297a2 2 0 00-1.326.765z" fill="#000"></path></svg>'},79:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 110 1.5h-6.5v6.5a.75.75 0 11-1.5 0v-6.5H.75a.75.75 0 110-1.5h6.5V.75A.75.75 0 018 0z" fill="#000" fill-rule="evenodd"></path></svg>'},99:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M15 0v1.53h-.062L9.556 6.825v7.982a.5.5 0 01-.851.356l-2.26-2.224V6.818L1.07 1.53H1V0h14zm-1 1H2v.042l5.444 5.357v6.121l1.111 1.093V6.406L14 1.05V1z" fill="#C5C5C5" fill-rule="nonzero"></path><circle cx="3" cy="3" r="3" transform="translate(15 -5)" fill="#050505"></circle></g></svg>'}}))}}}));