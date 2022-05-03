(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26a69bf2","chunk-ec653ab6","chunk-00b02611"],{"15ec":function(e,a,r){"use strict";r.d(a,"a",(function(){return l}));var t=r("e041"),n=r("0224");function l(e){return{origin:"portal-item",url:Object(t["M"])(e.itemUrl),portal:e.portal||n["a"].getDefault(),portalItem:e,readResourcePaths:[]}}},"3b92":function(e,a,r){"use strict";r.r(a),r.d(a,"getFirstLayerOrTableId",(function(){return h})),r.d(a,"getNumLayersAndTables",(function(){return I})),r.d(a,"load",(function(){return y})),r.d(a,"preprocessFSItemData",(function(){return S}));var t=r("ce50"),n=r("a0b4"),l=r("0224"),i=r("15ec"),c=r("60ec"),u=r("a0aa");async function y(e,a){const r=e.instance.portalItem;return r&&r.id?(await r.load(a),o(e),s(e,a)):Promise.resolve()}function o(e){const a=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(a.type))throw new t["a"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}async function s(e,a){const r=e.instance,t=r.portalItem,{url:n,title:l}=t,u=Object(i["a"])(t);if("group"===r.type)return r.read({title:l},u),d(r,e);n&&r.read({url:n},u);const y=await m(e,a);return y&&r.read(y,u),r.resourceReferences={portalItem:t,paths:u.readResourcePaths},r.read({title:l},u),Object(c["a"])(r,u)}function d(e,a){let r;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":r=n["a"].FeatureLayer;break;case"Stream Service":r=n["a"].StreamLayer;break;case"Scene Service":r=n["a"].SceneLayer;break;default:throw new t["a"]("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return r().then(e=>(i=e,m(a))).then(async a=>"Feature Service"===l?(a=await S(a,e.portalItem.url),p(e,i,a)):I(a)>0?p(e,i,a):L(e,i))}function L(e,a){return e.portalItem.url?Object(u["a"])(e.portalItem.url).then(r=>{var t,n;function l(e){return{id:e.id,name:e.name}}r&&p(e,a,{layers:null==(t=r.layers)?void 0:t.map(l),tables:null==(n=r.tables)?void 0:n.map(l)})}):Promise.resolve()}function p(e,a,r){let t=r.layers||[];const n=r.tables||[];"Feature Collection"===e.portalItem.type&&(t.forEach(e=>{var a;"Table"===(null==e||null==(a=e.layerDefinition)?void 0:a.type)&&n.push(e)}),t=t.filter(e=>{var a;return"Table"!==(null==e||null==(a=e.layerDefinition)?void 0:a.type)})),t.reverse().forEach(t=>{const n=f(e,a,r,t);e.add(n)}),n.reverse().forEach(t=>{const n=f(e,a,r,t);e.tables.add(n)})}function f(e,a,r,t){const n=new a({portalItem:e.portalItem.clone(),layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||l["a"].getDefault()};n.read(t,a);const i=r.showLegend;null!=i&&n.read({showLegend:i},a)}return n}function m(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",a).catch(()=>null).then(async e=>{if(v(r)){let a,t=!0;return e&&I(e)>0&&(null==r.layerId&&(r.layerId=h(e)),a=b(e,r.layerId),a&&(1===I(e)&&(t=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),t&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),a}return e})}async function S(e,a){var r,t;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(t=e)?void 0:t.tables)){const r=await Object(u["a"])(a);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function h(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function b(e,a){const r=e.layers;if(r)for(let n=0;n<r.length;n++)if(r[n].id===a)return r[n];const t=e.tables;if(t)for(let n=0;n<t.length;n++)if(t[n].id===a)return t[n];return null}function I(e){var a,r,t,n;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function v(e){return"stream"!==e.type&&"layerId"in e}},"5c92":function(e,a,r){"use strict";r.r(a),r.d(a,"fromItem",(function(){return y})),r.d(a,"selectLayerClassPath",(function(){return s}));var t=r("ce50"),n=r("a0b4"),l=r("a7e1"),i=r("3b92");function c(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}var u=r("a0aa");function y(e){return!e.portalItem||e.portalItem instanceof l["default"]||(e={...e,portalItem:new l["default"](e.portalItem)}),o(e.portalItem).then(a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor;return Promise.resolve(new t(r))})}function o(e){return e.load().then(s).then(d)}function s(e){switch(e.type){case"Map Service":return L(e);case"Feature Service":return p(e);case"Feature Collection":return m(e);case"Scene Service":return f(e);case"Image Service":return S(e);case"Stream Service":return h();case"Vector Tile Service":return b();case"KML":return I();case"WFS":return v();case"WMTS":return g();case"WMS":return w();case"Feed":return T();default:return Promise.reject(new t["a"]("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,n["a"][e.className])().then(a=>({constructor:a,properties:e.properties}))}function L(e){return M(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"})}function p(e){return G(e).then(e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}})}function f(e){return G(e).then(a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return Object(u["a"])(t).then(e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}})}return!1===a?Object(u["a"])(e.url).then(e=>"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}):{className:"GroupLayer"}})}async function m(e){if(await e.load(),c(e,"Map Notes"))return{className:"MapNotesLayer"};if(c(e,"Route Layer"))return{className:"RouteLayer"};const a=await e.fetchData();return 1===Object(i["getNumLayersAndTables"])(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function S(e){var a,r,t;await e.load();const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map(e=>e.toLowerCase()))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(t=(await Object(u["a"])(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function h(){return{className:"StreamLayer"}}function b(){return{className:"VectorTileLayer"}}function I(){return{className:"KMLLayer"}}function v(){return{className:"WFSLayer"}}function w(){return{className:"WMSLayer"}}function g(){return{className:"WMTSLayer"}}function T(){return{className:"StreamLayer"}}function M(e){return Object(u["a"])(e.url).then(e=>e.tileInfo)}function G(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(async a=>"Feature Service"===e.type?k(a=await Object(i["preprocessFSItemData"])(a,e.url)):Object(i["getNumLayersAndTables"])(a)>0?k(a):Object(u["a"])(e.url).then(k))}function k(e){return 1===Object(i["getNumLayersAndTables"])(e)&&{id:Object(i["getFirstLayerOrTableId"])(e)}}},a0aa:function(e,a,r){"use strict";r.d(a,"a",(function(){return n}));var t=r("2eab");async function n(e){const{data:a}=await Object(t["default"])(e,{responseType:"json",query:{f:"json"}});return a}},a0b4:function(e,a,r){"use strict";r.d(a,"a",(function(){return t}));const t={BingMapsLayer:async()=>(await r.e("chunk-2d0a4f14").then(r.bind(null,"091f"))).default,BuildingSceneLayer:async()=>(await r.e("chunk-3cd0c299").then(r.bind(null,"4d64e"))).default,CSVLayer:async()=>(await r.e("chunk-e4fd0ad0").then(r.bind(null,"2a7d"))).default,ElevationLayer:async()=>(await r.e("chunk-15c3b8fe").then(r.bind(null,"f20e"))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(null,"5bd5"))).default,GroupLayer:async()=>(await r.e("chunk-2d0c8892").then(r.bind(null,"54fc"))).default,GeoRSSLayer:async()=>(await r.e("chunk-2d0a33b6").then(r.bind(null,"00ff"))).default,GeoJSONLayer:async()=>(await r.e("chunk-1f92628b").then(r.bind(null,"785c"))).default,ImageryLayer:async()=>(await Promise.all([r.e("chunk-261303f8"),r.e("chunk-31d147ea"),r.e("chunk-2d237932")]).then(r.bind(null,"fc65"))).default,ImageryTileLayer:async()=>(await Promise.all([r.e("chunk-261303f8"),r.e("chunk-31d147ea"),r.e("chunk-749eb15a")]).then(r.bind(null,"9917"))).default,IntegratedMeshLayer:async()=>(await r.e("chunk-132ff228").then(r.bind(null,"cafc"))).default,KMLLayer:async()=>(await r.e("chunk-161078e6").then(r.bind(null,"f5fc"))).default,MapImageLayer:async()=>(await r.e("chunk-79cde962").then(r.bind(null,"53f8"))).default,MapNotesLayer:async()=>(await r.e("chunk-6b3eda79").then(r.bind(null,"5afa"))).default,OGCFeatureLayer:async()=>(await r.e("chunk-ef0d75d0").then(r.bind(null,"1f69"))).default,OpenStreetMapLayer:async()=>(await r.e("chunk-2d0e9004").then(r.bind(null,"8c58"))).default,PointCloudLayer:async()=>(await r.e("chunk-155a9198").then(r.bind(null,"44bb"))).default,RouteLayer:async()=>(await r.e("chunk-205d323f").then(r.bind(null,"b285"))).default,SceneLayer:async()=>(await r.e("chunk-c351ddf8").then(r.bind(null,"d321"))).default,StreamLayer:async()=>(await r.e("chunk-2d21a92d").then(r.bind(null,"bba8"))).default,TileLayer:async()=>(await r.e("chunk-e4b87522").then(r.bind(null,"2650"))).default,UnknownLayer:async()=>(await r.e("chunk-2d209b4c").then(r.bind(null,"a9ca"))).default,UnsupportedLayer:async()=>(await r.e("chunk-2d0ac5dd").then(r.bind(null,"18dd"))).default,VectorTileLayer:async()=>(await Promise.all([r.e("chunk-ef552ed2"),r.e("chunk-5aa61f68")]).then(r.bind(null,"173c"))).default,VoxelLayer:async()=>(await r.e("chunk-4f04a6d1").then(r.bind(null,"a347"))).default,WebTileLayer:async()=>(await Promise.resolve().then(r.bind(null,"9dc3"))).default,WFSLayer:async()=>(await r.e("chunk-41b20229").then(r.bind(null,"fa4e"))).default,WMSLayer:async()=>(await r.e("chunk-067a25e7").then(r.bind(null,"8760"))).default,WMTSLayer:async()=>(await r.e("chunk-97ad2974").then(r.bind(null,"b039"))).default}},e50f:function(e,a,r){"use strict";r.r(a),r.d(a,"populateOperationalLayers",(function(){return d}));var t=r("2c4f"),n=(r("c120"),r("f4cc")),l=r("a0b4"),i=r("a7e1");function c(e){return y(e,"notes")}function u(e){return y(e,"route")}function y(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var o=r("5c92"),s=r("60ec");async function d(e,a,r){if(!a)return;const t=[];for(const n of a){const e=b(n,r);"GroupLayer"===n.layerType?t.push(M(e,n,r)):t.push(e)}const l=await Object(n["i"])(t);for(const n of l)!n.value||r.filter&&!r.filter(n.value)||e.add(n.value)}const L={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer"},p={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},f={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},h={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function b(e,a){return I(await v(e,a),e,a)}async function I(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&w(a)&&await G(t,a,r.context),await Object(s["a"])(t,r.context),t}async function v(e,a){const r=a.context,t=T(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const y=t[n];let s=y?l["a"][y]:l["a"].UnknownLayer;if(g(e)){const a=null==r?void 0:r.portal;if(e.itemId){const r=new i["default"]({id:e.itemId,portal:a});await r.load();const t=(await Object(o["selectLayerClassPath"])(r)).className||"UnknownLayer";s=l["a"][t]}}else"ArcGISFeatureLayer"===n?c(e)?s=l["a"].MapNotesLayer:u(e)?s=l["a"].RouteLayer:w(e)&&(s=l["a"].GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?s=l["a"].WMTSLayer:"WFS"===n&&"2.0.0"!==e.wfsInfo.version&&(s=l["a"].UnsupportedLayer);return s()}function w(e){var a,r,t;return"ArcGISFeatureLayer"===e.layerType&&!g(e)&&(null!=(a=null==(r=e.featureCollection)||null==(t=r.layers)?void 0:t.length)?a:0)>1}function g(e){return"Feature Collection"===e.type}function T(e){let a;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":a=f;break;case"ground":a=p;break;default:a=L}else switch(e.layerContainerType){case"basemap":a=h;break;case"tables":a=S;break;default:a=m}return a}async function M(e,a,r){const n=new t["a"],l=d(n,Array.isArray(a.layers)?a.layers:[],r),i=await e;if(await l,"group"===i.type)return i.layers.addMany(n),i}async function G(e,a,r){const t=l["a"].FeatureLayer,n=await t(),i=a.featureCollection,c=i.showLegend,u=i.layers.map((t,l)=>{var i,u;const y=new n;y.read(t,r);const o={...r,ignoreDefaults:!0};return y.read({id:`${e.id}-sublayer-${l}`,visibility:null==(i=null==(u=a.visibleLayers)?void 0:u.includes(l))||i},o),null!=c&&y.read({showLegend:c},o),y});e.layers.addMany(u)}}}]);