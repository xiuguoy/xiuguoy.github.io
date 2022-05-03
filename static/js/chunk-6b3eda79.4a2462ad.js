(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b3eda79"],{"5afa":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return $}));var r=a("a4ee"),o=(a("e06a"),a("8d60")),i=(a("1fd7"),a("2c4f")),n=a("ce50"),l=a("7ffa"),s=a("b2b2"),y=a("e694"),c=a("9d1d"),p=a("0028"),b=a("59b2"),u=(a("cea0"),a("afcf")),d=a("d386"),O=a("09db"),f=a("8188"),m=a("a8d5"),j=a("7f83"),g=a("5bd5"),h=(a("b50f"),a("c120"),a("44e6")),S=a("a6a3"),v=a("997b"),w=a("5a62"),N=a("f626"),J=a("fd14");let L=class extends(Object(v["a"])(Object(w["a"])(S["a"]))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new N["a"],this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};Object(r["a"])([Object(b["b"])({type:J["a"]})],L.prototype,"elevationInfo",void 0),Object(r["a"])([Object(b["b"])(Object(h["b"])(N["a"],"graphics"))],L.prototype,"graphics",void 0),Object(r["a"])([Object(b["b"])({type:["show","hide"]})],L.prototype,"listMode",void 0),Object(r["a"])([Object(b["b"])()],L.prototype,"screenSizePerspectiveEnabled",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0})],L.prototype,"type",void 0),Object(r["a"])([Object(b["b"])({constructOnly:!0})],L.prototype,"internal",void 0),L=Object(r["a"])([Object(d["a"])("esri.layers.GraphicsLayer")],L);const T=L;var x=a("a745"),C=a("b911"),M=a("0db5"),I=a("a1f3"),R=a("0d76"),E=a("db52"),D=a("4dc9"),P=a("21ba"),G=a("5996"),_=a("3af1");function F(e){return e.layers.some(e=>null!=e.layerDefinition.visibilityField)}const k=new I["a"]({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),z=new I["a"]({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let A=class extends T{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};Object(r["a"])([Object(b["b"])({readOnly:!0})],A.prototype,"sublayers",null),Object(r["a"])([Object(b["b"])()],A.prototype,"layer",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0})],A.prototype,"visibilityMode",void 0),A=Object(r["a"])([Object(d["a"])("esri.layers.MapNotesLayer.MapNotesSublayer")],A);const B=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new R["a"]).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new E["a"]).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new D["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new D["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new P["a"]).toJSON()}];let W=class extends(Object(v["a"])(Object(w["a"])(Object(C["a"])(Object(M["a"])(Object(y["a"])(S["a"])))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=G["a"].WGS84,this.sublayers=new i["a"](B.map(e=>new A({id:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,a){return{operations:{supportsMapNotesEditing:!F(t)&&"portal-item"!==(null==a?void 0:a.origin)}}}readFeatureCollections(e,t,a){if(!F(t))return null;const r=t.layers.map(e=>{const t=new g["default"];return t.read(e,a),t});return new i["a"]({items:r})}readLegacyfeatureCollectionJSON(e,t){return F(t)?Object(l["a"])(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(e=>!e.layerDefinition.extent))return new _["a"]({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:G["a"].WGS84});const a=G["a"].fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((e,t)=>{const a=t.layerDefinition.extent;return a?_["a"].fromJSON(a).union(e):e},new _["a"]({spatialReference:a}))}readMinScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.minScale)return a.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.maxScale)return a.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?G["a"].fromJSON(t.layers[0].layerDefinition.spatialReference):G["a"].WGS84}readSublayers(e,t,a){if(F(t))return null;const r=[];for(let i=0;i<t.layers.length;i++){var n;const{layerDefinition:e,featureSet:a}=t.layers[i],l=null!=(n=e.geometryType)?n:a.geometryType,s=B.find(t=>{var a,r,o;return l===t.geometryTypeJSON&&(null==(a=e.drawingInfo)||null==(r=a.renderer)||null==(o=r.symbol)?void 0:o.type)===t.identifyingSymbol.type});if(s){const t=new A({id:s.layerId,title:e.name,layer:this,graphics:a.features.map(({geometry:e,symbol:t,attributes:a,popupInfo:r})=>o["a"].fromJSON({attributes:a,geometry:e,symbol:t,popupTemplate:r}))});r.push(t)}}return new i["a"](r)}writeSublayers(e,t,a,r){const{minScale:o,maxScale:i}=this;if(Object(s["i"])(e))return;const l=e.some(e=>e.graphics.length>0);var y;if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&(null==r||null==(y=r.messages)||y.push(new n["a"]("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let b=this.spatialReference.toJSON();e:for(const n of e)for(const e of n.graphics)if(Object(s["j"])(e.geometry)){b=e.geometry.spatialReference.toJSON();break e}for(const n of B){const t=e.find(e=>n.layerId===e.id);this._writeMapNoteSublayer(p,t,n,o,i,b,r)}Object(c["c"])("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=Object(l["a"])(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(Object(s["i"])(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const a of r.graphics)if(Object(s["j"])(a.geometry)){const r=a.geometry;e?Object(j["d"])(r.spatialReference,e)||(Object(f["b"])(r.spatialReference,e)||Object(f["f"])()||await Object(f["g"])(),a.geometry=Object(f["h"])(r,e)):e=r.spatialReference,t.push(a)}const a=await Object(m["a"])(t.map(e=>e.geometry));t.forEach((e,t)=>e.geometry=a[t])}_findSublayer(e){var t,a;return Object(s["i"])(this.sublayers)?null:null!=(t=null==(a=this.sublayers)?void 0:a.find(t=>t.id===e))?t:null}_writeMapNoteSublayer(e,t,a,r,o,i,n){const y=[];if(!Object(s["i"])(t)){for(const e of t.graphics)this._writeMapNote(y,e,a.geometryType,n);this._normalizeObjectIds(y,k),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:Object(l["a"])(a.identifyingSymbol)}},geometryType:a.geometryTypeJSON,minScale:r,maxScale:o,objectIdField:"OBJECTID",fields:[k.toJSON(),z.toJSON()],spatialReference:i},featureSet:{features:y,geometryType:a.geometryTypeJSON}})}}_writeMapNote(e,t,a,r){if(Object(s["i"])(t))return;const{geometry:o,symbol:i,popupTemplate:n}=t;if(Object(s["i"])(o))return;var l,y;if(o.type!==a)return void(null==r||null==(l=r.messages)||l.push(new p["a"]("map-notes-layer:invalid-geometry-type",`Geometry "${o.type}" cannot be saved in "${a}" layer`,{graphic:t})));if(Object(s["i"])(i))return void(null==r||null==(y=r.messages)||y.push(new p["a"]("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const c={attributes:{...t.attributes},geometry:o.toJSON(),symbol:i.toJSON()};Object(s["j"])(n)&&(c.popupInfo=n.toJSON()),e.push(c)}_normalizeObjectIds(e,t){const a=t.name;let r=Object(x["a"])(a,e)+1;const o=new Set;for(const i of e){i.attributes||(i.attributes={});const{attributes:e}=i;(null==e[a]||o.has(e[a]))&&(e[a]=r++),o.add(e[a])}}};Object(r["a"])([Object(b["b"])({readOnly:!0})],W.prototype,"capabilities",void 0),Object(r["a"])([Object(u["a"])(["portal-item","web-map"],"capabilities",["layers"])],W.prototype,"readCapabilities",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],W.prototype,"featureCollections",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"featureCollections",["layers"])],W.prototype,"readFeatureCollections",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],W.prototype,"featureCollectionJSON",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],W.prototype,"readLegacyfeatureCollectionJSON",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],W.prototype,"featureCollectionType",void 0),Object(r["a"])([Object(b["b"])({json:{write:!1}})],W.prototype,"fullExtent",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"fullExtent",["layers"])],W.prototype,"readFullExtent",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],W.prototype,"legendEnabled",void 0),Object(r["a"])([Object(b["b"])({type:["show","hide"]})],W.prototype,"listMode",void 0),Object(r["a"])([Object(b["b"])({type:Number,nonNullable:!0,json:{write:!1}})],W.prototype,"minScale",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"minScale",["layers"])],W.prototype,"readMinScale",null),Object(r["a"])([Object(b["b"])({type:Number,nonNullable:!0,json:{write:!1}})],W.prototype,"maxScale",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"maxScale",["layers"])],W.prototype,"readMaxScale",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],W.prototype,"multipointLayer",null),Object(r["a"])([Object(b["b"])({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],W.prototype,"operationalLayerType",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0})],W.prototype,"pointLayer",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],W.prototype,"polygonLayer",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],W.prototype,"polylineLayer",null),Object(r["a"])([Object(b["b"])({type:G["a"]})],W.prototype,"spatialReference",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"spatialReference",["layers"])],W.prototype,"readSpatialReference",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],W.prototype,"sublayers",void 0),Object(r["a"])([Object(u["a"])("web-map","sublayers",["layers"])],W.prototype,"readSublayers",null),Object(r["a"])([Object(O["a"])("web-map","sublayers")],W.prototype,"writeSublayers",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],W.prototype,"textLayer",null),Object(r["a"])([Object(b["b"])()],W.prototype,"title",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),W=Object(r["a"])([Object(d["a"])("esri.layers.MapNotesLayer")],W);const $=W},a745:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));const r=1;function o(e,t){let a=0;for(const o of t){var r;const t=null==(r=o.attributes)?void 0:r[e];"number"==typeof t&&isFinite(t)&&(a=Math.max(a,t))}return a}}}]);