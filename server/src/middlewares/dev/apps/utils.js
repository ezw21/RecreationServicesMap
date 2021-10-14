"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getThumbnailUpdateMulter=exports.getUploadMulter=exports.deepClone=exports.getIdFromUrl=exports.createFolder=exports.isJson=exports.initTime=exports.writeResponseLog=exports.isHasFolder=exports.getFolderIndex=exports.addItemParamsIsPass=exports.commonResponse=exports.formatJson=exports.readFolder=exports.fuzzyMatching=exports.filterDataByPortalUrl=exports.filterDataByOwner=exports.filterByType=exports.getOwnerFromInfo=exports.getOwner=exports.sortByInitial=exports.sortByNumber=exports.requestException=exports.infoJson=exports.appFolderPath=void 0;var path=require("path"),fs=require("fs-extra"),extra=require("fs-extra"),multer=require("@koa/multer");function requestException(e,r,t){return void 0===t&&(t=!1),"object"!=typeof e?!(r.body={error:{message:e,success:!1}}):("object"==typeof e.error&&(e.error.success=t),r.response.body=e,!1)}function sortByNumber(e,t,o){void 0===o&&(o="desc");return e.sort(function(e,r){return"desc"==o?r[t]-e[t]:"asc"==o?e[t]-r[t]:void 0}),e}function sortByInitial(e,t){return e.sort(function(e,r){e=e[t],r=r[t];return e.localeCompare(r)}),e}function getOwner(e){var r,t={owner:"",isNot:!1};return-1!=e.indexOf("owner")&&(r=e.split("owner:")[1].split(" ")[0]),-1!=e.indexOf("NOT owner")&&(t.isNot=!0,t.owner=r),-1==e.indexOf("NOT owner")&&-1!=e.indexOf(" owner")&&(t.owner=r),t}function getOwnerFromInfo(e){var r="",e=exports.appFolderPath+"/"+e+"/info.json";return r=fs.existsSync(e)?JSON.parse(fs.readFileSync(e,"utf-8")).owner:r}function filterByType(e,r){var t=[],o=r.split('"')[1];return o?(e.forEach(function(e){e.type==o&&t.push(e)}),t):[]}function filterDataByOwner(e,r,t){void 0===t&&(t=!1);var o=[],n=r;return-1!=r.indexOf('"')&&(n=r.split('"').join("")),e.forEach(function(e){t&&e.owner!=n&&o.push(e),!t&&r&&e.owner==n&&o.push(e),t||r||o.push(e)}),o}function filterDataByPortalUrl(e,r){if(!r)return e;var t=[];return e.forEach(function(e){(null==e?void 0:e.portalUrl)!=r&&null!=e&&e.portalUrl||t.push(e)}),t}function fuzzyMatching(e,r,t){var o=(o=r+"").replace(/\"/g,"").replace(/\'/g,""),n=[];return e.forEach(function(e){o&&-1==e[t].indexOf(o)&&e.id!=o||n.push(e)}),n}function readFolder(o,n,e){var s=[];return e&&Array.isArray(e)&&(s=deepClone(e)),fs.readdirSync(o).forEach(function(e){var r=path.join(o,e),t={size:0,created:"",resource:r.split("\\").join("/").split(n)[1]},e=fs.statSync(r);e.isFile()?(t.size=e.size,t.created=e.birthtime.getTime().toLocaleString().split(",").join(""),s.push(t)):s=readFolder(r,n,s)}),s}function formatJson(r,e){if(!e||-1==e.indexOf(".json"))return!1;fs.exists(r,function(e){e&&(e=JSON.parse(fs.readFileSync(r,"utf-8")),e=JSON.stringify(e,null,2),fs.writeFileSync(r,e))})}function commonResponse(e,r){e.response.body=r}function addItemParamsIsPass(e){var r="";return r=!e.title?"no title":r}function getFolderIndex(e,r){return isHasFolder(e,r)?getFolderIndex(e,r+1):r}function isHasFolder(e,r){if(!Array.isArray(e))return!1;var t=!1;return e.forEach(function(e){e==r&&(t=!0)}),t}function writeResponseLog(e,r){void 0===r&&(r=!1)}function initTime(e){if(!e)return!1;e=new Date(e);return e.getFullYear()+"-"+((e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-")+(e.getDate()+" ")+(e.getHours()+":")+(e.getMinutes()+":")+e.getSeconds()}function isJson(e){return"object"==typeof(e="string"==typeof e?JSON.parse(e):e)&&"[object object]"==Object.prototype.toString.call(e).toLowerCase()&&!e.length}function createFolder(r,e){var e=e.split("/"),t="";e.forEach(function(e){fs.ensureDirSync(""+r+t+"/"+e),t=t+"/"+e+"/"})}function getIdFromUrl(e,r){void 0===r&&(r=1);var t=e.request.url,t=(t="/"==t?e.originalUrl:t).split("/");return t[t.length-1-r]}function deepClone(e){var r,t=Array.isArray(e)?[]:{};for(r in e){var o=("object"==typeof e[r]||"function"==typeof e[r])&&null!==e[r];t[r]=o?deepClone(e[r]):e[r]}return t}function getUploadMulter(){var e=multer.diskStorage({destination:function(t,e,o){try{Promise.resolve(!0).then(function(){var e=t.url.split("/"),r=e[e.length-2],e=t.body||{},r=exports.appFolderPath+"/"+r,e="resources/"+e.resourcesPrefix;fs.existsSync(r)?createFolder(r,e):console.log("no item"),o(null,r+"/"+e)})}catch(e){console.log(e)}},filename:function(e,r,t){r=r.originalname.split(".");t(null,(e.body||{}).fileName||Date.now()+"."+r[r.length-1])}});return multer({storage:e})}function getThumbnailUpdateMulter(){var e=multer.diskStorage({destination:function(t,e,o){try{Promise.resolve(!0).then(function(){var e=t.url.split("/"),r=e[e.length-2],e=exports.appFolderPath+"/"+r,r=e+"/thumbnail";fs.existsSync(e)||console.log("no item"),extra.emptyDirSync(r),o(null,r)})}catch(e){console.log(e)}},filename:function(e,r,t){var o=r.originalname.split("."),r=o[o.length-1];1==o.length&&(r="png"),t(null,"thumbnail"+Date.now()+"."+r)}});return multer({storage:e})}exports.appFolderPath=path.join(__dirname,"../../../../public/apps"),console.log("Apps folder:",exports.appFolderPath),exports.infoJson={created:0,description:"",id:"",modified:0,owner:"",tags:[],thumbnail:null,title:"",type:"Web Experience",snippet:"",typeKeywords:["Web Experience","status: Draft"]},exports.requestException=requestException,exports.sortByNumber=sortByNumber,exports.sortByInitial=sortByInitial,exports.getOwner=getOwner,exports.getOwnerFromInfo=getOwnerFromInfo,exports.filterByType=filterByType,exports.filterDataByOwner=filterDataByOwner,exports.filterDataByPortalUrl=filterDataByPortalUrl,exports.fuzzyMatching=fuzzyMatching,exports.readFolder=readFolder,exports.formatJson=formatJson,exports.commonResponse=commonResponse,exports.addItemParamsIsPass=addItemParamsIsPass,exports.getFolderIndex=getFolderIndex,exports.isHasFolder=isHasFolder,exports.writeResponseLog=writeResponseLog,exports.initTime=initTime,exports.isJson=isJson,exports.createFolder=createFolder,exports.getIdFromUrl=getIdFromUrl,exports.deepClone=deepClone,exports.getUploadMulter=getUploadMulter,exports.getThumbnailUpdateMulter=getThumbnailUpdateMulter;