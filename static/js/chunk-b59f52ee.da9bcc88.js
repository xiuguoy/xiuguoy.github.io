(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b59f52ee"],{"02b4":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return I}));var s=i("a4ee"),r=i("e92d"),n=i("f4cc"),a=i("477c"),h=i("59b2"),l=(i("b50f"),i("c120"),i("cea0"),i("d386")),c=i("7f83"),o=i("164a"),u=i("566d"),d=i("d81b"),f=i("018d"),p=i("ae54"),b=i("07cd"),g=i("d302"),m=i("365a"),y=i("6c7a"),w=i("ce50"),_=i("b2b2"),x=i("536f");const v=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Promise.reject(new w["a"]("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return Promise.reject(new w["a"]("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const s=this.get("view.scale"),r=i.allSublayers.toArray().filter(e=>{const t=0===e.minScale||s<=e.minScale,i=0===e.maxScale||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i});return Object(n["i"])(r.map(async i=>{const s=i.createQuery(),r=Object(_["j"])(t)?t.event:null,n=Object(x["a"])({renderer:i.renderer,event:r});return s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n),s.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(s)).features})).then(e=>[].concat(...e.map(e=>e.value).filter(Boolean)))}};return Object(s["a"])([Object(h["b"])()],t.prototype,"layer",void 0),t=Object(s["a"])([Object(l["a"])("esri.layers.mixins.TileLayerView")],t),t};var R=i("e94b");const j=[0,0];let O=class extends(v(Object(y["a"])(Object(o["a"])(Object(u["a"])(m["a"]))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new f["a"](this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new b["a"]({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new g["a"]({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(Object(a["e"])(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return Object(c["d"])(null==(t=this.layer.tileInfo)?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return Object(R["a"])(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)))}isUpdating(){var e,t;return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(j,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)try{return await this._fetchImage(e,s)}catch(l){if(!Object(n["l"])(l)&&!this.resampling)return Object(d["a"])(this._tileInfoView.tileInfo.size);if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new p["a"](i),n=await this.fetchTile(s,{...t,resamplingLevel:r+1});return Object(d["b"])(this._tileInfoView,n,s,e)}}throw l}const a=new p["a"](0,0,0,0);let h;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),a.level!==e.level&&!this.resampling)return Object(d["a"])(this._tileInfoView.tileInfo.size);h=await this._fetchImage(a,s)}catch(l){if(Object(n["l"])(l))throw l;h=await this._fetchImage(e,s)}return this.resampling?Object(d["b"])(this._tileInfoView,h,a,e):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){Object(n["l"])(t)||r["a"].getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};Object(s["a"])([Object(h["b"])()],O.prototype,"_fetchQueue",void 0),Object(s["a"])([Object(h["b"])()],O.prototype,"resampling",null),O=Object(s["a"])([Object(l["a"])("esri.views.2d.layers.TileLayerView2D")],O);const I=O},"164a":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("a4ee"),r=(i("e92d"),i("cea0"),i("b50f"),i("c120"),i("2dd4"),i("d386")),n=i("e80c");const a=e=>{let t=class extends e{attach(){this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new n["a"](this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null==(e=this._bitmapView)||e.removeAllChildren()}};return t=Object(s["a"])([Object(r["a"])("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},"536f":function(e,t,i){"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e){let t=0,i=0;for(let s=0;s<e.length;s++){const r=e[s].size;"number"==typeof r&&(t+=r,i++)}return t/i}function n(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?r(e.stops):t}function a(e,t){if(!t)return e;const i=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:i,minSize:s}=t;return(n(i,e)+n(s,e))/2});let s=0;const r=i.length;if(0===r)return e;for(let n=0;n<r;n++)s+=i[n];const a=Math.floor(s/r);return Math.max(a,e)}function h(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const r="visualVariables"in t?a(i,t.visualVariables):i;if("simple"===t.type)return s(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach(t=>{e=s(e,t.symbol)}),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach(t=>{e=s(e,t.symbol)}),e}return t.type,r}i.d(t,"a",(function(){return h}))},6722:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i("c120"),r=i("c84e"),n=i("9a02"),a=i("6f75"),h=i("ec5e");const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class c extends n["a"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[h["a"]],drawPhase:r["c"].DEBUG|r["c"].MAP|r["c"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(s["a"])("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a["a"]],drawPhase:r["c"].DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},"6c7a":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i("a4ee"),r=i("e92d"),n=i("f4cc"),a=i("477c"),h=i("59b2"),l=(i("b50f"),i("c120"),i("cea0"),i("d386"));const c=e=>{let t=class extends e{initialize(){this.handles.add(Object(a["b"])(()=>this.layer,"refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(n["l"])(e)||r["a"].getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(s["a"])([Object(h["b"])()],t.prototype,"layer",void 0),t=Object(s["a"])([Object(l["a"])("esri.layers.mixins.RefreshableLayerView")],t),t}},"894c":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i("b2b2");class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return Object(s["j"])(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(s["j"])(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(Object(s["i"])(t))return;const i=this.filter({pixelBlock:t});if(Object(s["i"])(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(s["i"])(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},c73a:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var s=i("b2b2"),r=i("1c92"),n=i("8c71"),a=i("738e"),h=i("7c4b"),l=i("894c"),c=i("d17d"),o=i("a1ff");function u(e){return e&&"render"in e}function d(e){return e&&!("render"in e)}function f(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function p(e,t,i){const s={target:c["A"].TEXTURE_2D,pixelFormat:c["p"].RGBA,internalFormat:c["p"].RGBA,dataType:c["q"].UNSIGNED_BYTE,wrapMode:c["B"].CLAMP_TO_EDGE};return t&&i&&(s.width=t,s.height=i),new o["a"](e,s)}class b extends h["a"]{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(n["b"])()}}setTransform(e){const t=Object(r["b"])(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,h=n*this.width,l=n*this.height,c=Math.PI*this.rotation/180;Object(r["c"])(t,t,Object(a["b"])(i,s)),Object(r["c"])(t,t,Object(a["b"])(h/2,l/2)),Object(r["k"])(t,t,-c),Object(r["c"])(t,t,Object(a["b"])(-h/2,-l/2)),Object(r["g"])(t,t,Object(a["b"])(h,l)),Object(r["i"])(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=p(e,this.sourceWidth,this.sourceHeight):this._texture=p(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),u(i))if(i instanceof l["a"]){const e=i.getRenderedRasterPixels();this._texture.setData(Object(s["j"])(e)?e.renderedRasterPixels:null)}else this._texture.setData(f(i));else d(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},d81b:function(e,t,i){"use strict";function s(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function r(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function n(e,t,i,n){if(i.level===n.level)return t;const h=e.tileInfo.size,l=e.getTileResolution(i.level),c=e.getTileResolution(n.level);let o=e.getLODInfoAt(n.level);const u=o.getXForColumn(n.col),d=o.getYForRow(n.row);o=e.getLODInfoAt(i.level);const f=o.getXForColumn(i.col),p=o.getYForRow(i.row),b=s(t)/h[0],g=r(t)/h[1],m=Math.round(b*((u-f)/l)),y=Math.round(g*(-(d-p)/l)),w=Math.round(b*h[0]*(c/l)),_=Math.round(g*h[1]*(c/l)),x=a(h);return x.getContext("2d").drawImage(t,m,y,w,_,0,0,h[0],h[1]),x}function a(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))},e4b1:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("1c92"),r=i("7c4b"),n=i("ae54");class a extends r["a"]{constructor(e,t,i,s,r,a=s,h=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n["a"](e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=a,this.rangeY=h}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*i,l=this.height/this.rangeY*i;Object(s["l"])(r,h,0,0,0,l,0,n,a,1),Object(s["i"])(this.transforms.dvs,e.displayViewMat3,r)}}},e80c:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var s=i("9180"),r=i("8c71"),n=i("c73a"),a=i("e4b1");class h extends a["a"]{constructor(e,t,i,s,r,a=null){super(e,t,i,s,r),this.bitmap=new n["a"](a,"standard",!1),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:Object(r["b"])(),tileMat3:Object(r["b"])()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var l=i("3b1a"),c=i("c84e"),o=i("6722");class u extends o["a"]{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.bitmap.blendFunction)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(s["h"])(),e),[i,r]=this._tileInfoView.tileInfo.size;return new h(e,t[0],t[3],i,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[l["a"].bitmap],target:()=>this.children.map(e=>e.bitmap),drawPhase:c["c"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===c["c"].MAP&&super.doRender(e)}}},e94b:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("e06a");var s=i("b2b2"),r=i("8048"),n=(i("536f"),i("3af1"));function a(e,t,i,a=new n["a"]){let h;if("2d"===i.type)h=t*i.resolution;else if("3d"===i.type){const n=i.overlayPixelSizeInMapUnits(e),a=i.basemapSpatialReference;h=Object(s["j"])(a)&&!a.equals(i.spatialReference)?Object(r["d"])(a)/Object(r["d"])(i.spatialReference):t*n}const l=e.x-h,c=e.y-h,o=e.x+h,u=e.y+h,{spatialReference:d}=i;return a.xmin=Math.min(l,o),a.ymin=Math.min(c,u),a.xmax=Math.max(l,o),a.ymax=Math.max(c,u),a.spatialReference=d,a}new n["a"]}}]);