(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1516bda"],{"0c00":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));n("e06a");var r=n("b2b2"),i=n("84e3"),o=n("3e27"),s=n("1451"),a=n("9dee"),c=n("b4e0"),l=n("19db"),f=n("8c6a"),u=n("7220"),p=n("2616"),m=n("3af1");class h{convertVectorFieldData(e){const t=o["a"].fromJSON(e.pixelBlock),n=Object(l["b"])(t,e.type);return Promise.resolve(Object(r["j"])(n)&&n.toJSON())}async decode(e){const t=await Object(s["a"])(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=o["a"].fromJSON(e.pixelBlock),e.extent=e.extent?m["a"].fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(Object(r["j"])(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=u["a"].fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(o["a"].fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(Object(r["j"])(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=Object(a["g"])(o["a"].fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=Object(a["p"])(o["a"].fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((e,n)=>{t.set(n,null==e?void 0:e.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){var t;const n=e.srcPixelBlocks.map(e=>e?new o["a"](e):null),i=Object(a["l"])(n,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let s,c=i;return e.coefs&&(c=Object(a["a"])(i,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(s=Object(a["i"])(e.destDimension,e.gcsGrid),c=Object(r["q"])(Object(l["a"])(c,e.isUV?"vector-uv":"vector-magdir",s))),{pixelBlock:null==(t=c)?void 0:t.toJSON(),localNorthDirections:s}}async createStreamlinesMesh(e,t){const n={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:r,indexData:i}=await Object(p["a"])(e.rendererSettings,n,t.signal);return{result:{vertexBuffer:r.buffer,indexBuffer:i.buffer},transferList:[r.buffer,i.buffer]}}async getProjectionOffsetGrid(e){const t=m["a"].fromJSON(e.projectedExtent),n=m["a"].fromJSON(e.srcBufferExtent);let r=null;e.datumTransformationSteps&&(r=new i["a"]({steps:e.datumTransformationSteps})),(e.includeGCSGrid||Object(c["k"])(t.spatialReference,n.spatialReference,r))&&await Object(c["g"])();const o=e.rasterTransform?Object(f["b"])(e.rasterTransform):null;return Object(c["c"])({...e,projectedExtent:t,srcBufferExtent:n,datumTransformation:r,rasterTransform:o})}}},"0f1d":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("a4ee"),i=n("6a0e"),o=n("59b2"),s=(n("b50f"),n("c120"),n("cea0"),n("d386"));let a=class extends i["a"]{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};Object(r["a"])([Object(o["b"])()],a.prototype,"affectsPixelSize",null),Object(r["a"])([Object(o["b"])({json:{write:!0}})],a.prototype,"spatialReference",void 0),a=Object(r["a"])([Object(s["a"])("esri.layers.support.rasterTransforms.BaseRasterTransform")],a);const c=a},"773d":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("a4ee"),i=n("59b2"),o=(n("b50f"),n("c120"),n("cea0"),n("448d")),s=n("d386"),a=n("0f1d");let c=class extends a["a"]{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};Object(r["a"])([Object(o["a"])({GCSShiftXform:"gcs-shift"})],c.prototype,"type",void 0),Object(r["a"])([Object(i["b"])()],c.prototype,"tolerance",void 0),c=Object(r["a"])([Object(s["a"])("esri.layers.support.rasterTransforms.GCSShiftTransform")],c);const l=c},"7fb1":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("a4ee"),i=(n("e06a"),n("59b2")),o=(n("b50f"),n("c120"),n("cea0"),n("448d")),s=n("afcf"),a=n("d386"),c=n("09db"),l=n("0f1d"),f=n("4ae5"),u=n("3af1");function p(e,t,n){const{x:r,y:i}=t;if(n<2)return{x:e[0]+r*e[2]+i*e[4],y:e[1]+r*e[3]+i*e[5]};if(2===n){const t=r*r,n=i*i,o=r*i;return{x:e[0]+r*e[2]+i*e[4]+t*e[6]+o*e[8]+n*e[10],y:e[1]+r*e[3]+i*e[5]+t*e[7]+o*e[9]+n*e[11]}}const o=r*r,s=i*i,a=r*i,c=o*r,l=o*i,f=r*s,u=i*s;return{x:e[0]+r*e[2]+i*e[4]+o*e[6]+a*e[8]+s*e[10]+c*e[12]+l*e[14]+f*e[16]+u*e[18],y:e[1]+r*e[3]+i*e[5]+o*e[7]+a*e[9]+s*e[11]+c*e[13]+l*e[15]+f*e[17]+u*e[19]}}function m(e,t,n){const{xmin:r,ymin:i,xmax:o,ymax:s,spatialReference:a}=t;let c=[];if(n<2)c.push({x:r,y:s}),c.push({x:o,y:s}),c.push({x:r,y:i}),c.push({x:o,y:i});else{let e=10;for(let t=0;t<e;t++)c.push({x:r,y:i+(s-i)*t/(e-1)}),c.push({x:o,y:i+(s-i)*t/(e-1)});e=8;for(let t=1;t<=e;t++)c.push({x:r+(o-r)*t/e,y:i}),c.push({x:r+(o-r)*t/e,y:s})}c=c.map(t=>p(e,t,n));const l=c.map(e=>e.x),f=c.map(e=>e.y);return new u["a"]({xmin:Math.min.apply(null,l),xmax:Math.max.apply(null,l),ymin:Math.min.apply(null,f),ymax:Math.max.apply(null,f),spatialReference:a})}function h(e){const[t,n,r,i,o,s]=e,a=r*s-o*i,c=o*i-r*s;return[(o*n-t*s)/a,(r*n-t*i)/c,s/a,i/c,-o/a,-r/c]}let x=class extends l["a"]{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:n,coeffY:r}=t;if(null==n||!n.length||null==r||!r.length||n.length!==r.length)return null;const i=[];for(let o=0;o<n.length;o++)i.push(n[o]),i.push(r[o]);return i}writeForwardCoefficients(e,t,n){const r=[],i=[];for(let o=0;o<(null==e?void 0:e.length);o++)o%2==0?r.push(e[o]):i.push(e[o]);t.coeffX=r,t.coeffY=i}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=h(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:n,inverseCoeffY:r}=t;if(null==n||!n.length||null==r||!r.length||n.length!==r.length)return null;const i=[];for(let o=0;o<n.length;o++)i.push(n[o]),i.push(r[o]);return i}writeInverseCoefficients(e,t,n){const r=[],i=[];for(let o=0;o<(null==e?void 0:e.length);o++)o%2==0?r.push(e[o]):i.push(e[o]);t.inverseCoeffX=r,t.inverseCoeffY=i}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=p(this.forwardCoefficients,e,this.polynomialOrder);return new f["a"]({x:t.x,y:t.y,spatialReference:e.spatialReference})}return m(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=p(this.inverseCoefficients,e,this.polynomialOrder);return new f["a"]({x:t.x,y:t.y,spatialReference:e.spatialReference})}return m(this.inverseCoefficients,e,this.polynomialOrder)}};Object(r["a"])([Object(i["b"])({json:{write:!0}})],x.prototype,"polynomialOrder",void 0),Object(r["a"])([Object(i["b"])()],x.prototype,"forwardCoefficients",void 0),Object(r["a"])([Object(s["a"])("forwardCoefficients",["coeffX","coeffY"])],x.prototype,"readForwardCoefficients",null),Object(r["a"])([Object(c["a"])("forwardCoefficients")],x.prototype,"writeForwardCoefficients",null),Object(r["a"])([Object(i["b"])({json:{write:!0}})],x.prototype,"inverseCoefficients",null),Object(r["a"])([Object(s["a"])("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],x.prototype,"readInverseCoefficients",null),Object(r["a"])([Object(c["a"])("inverseCoefficients")],x.prototype,"writeInverseCoefficients",null),Object(r["a"])([Object(i["b"])()],x.prototype,"affectsPixelSize",null),Object(r["a"])([Object(o["a"])({PolynomialXform:"polynomial"})],x.prototype,"type",void 0),x=Object(r["a"])([Object(a["a"])("esri.layers.support.rasterTransforms.PolynomialTransform")],x);const d=x},"8c6a":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var r=n("773d"),i=n("a4ee"),o=(n("e92d"),n("cea0"),n("b50f"),n("c120"),n("2dd4"),n("448d")),s=n("d386"),a=n("0f1d");let c=class extends a["a"]{constructor(){super(...arguments),this.type="identity"}};Object(i["a"])([Object(o["a"])({IdentityXform:"identity"})],c.prototype,"type",void 0),c=Object(i["a"])([Object(s["a"])("esri.layers.support.rasterTransforms.IdentityTransform")],c);const l=c;var f=n("7fb1");const u={GCSShiftXform:r["a"],IdentityXform:l,PolynomialXform:f["a"]},p=Object.keys(u);function m(e){const t=null==e?void 0:e.type;return!e||p.includes(t)}function h(e){if(!(null==e?void 0:e.type))return null;const t=u[null==e?void 0:e.type];if(t){const n=new t;return n.read(e),n}return null}},b4e0:function(e,t,n){"use strict";n.d(t,"a",(function(){return K})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return X})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return W})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return z})),n.d(t,"i",(function(){return S})),n.d(t,"j",(function(){return w})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return L})),n.d(t,"m",(function(){return q}));n("e06a");var r=n("ce50"),i=n("b2b2"),o=n("8048"),s=n("9415"),a=n("8188"),c=n("3af1"),l=n("4ae5"),f=n("5996");function u(e,t,n){return!Object(a["b"])(e,t,n)}function p(e,t,n){const i=u(e,t,n);if(i&&!Object(a["f"])())throw new r["a"]("rasterprojectionhelper-project","projection engine is not loaded");return i}const m=function(e,t,n,r=0){if(1===n[0])return[0,0];let i=1,o=-1,s=1,a=-1;for(let d=0;d<e.length;d+=2)isNaN(e[d])||(i=i>e[d]?e[d]:i,o=o>e[d]?o:e[d],s=s>e[d+1]?e[d+1]:s,a=a>e[d+1]?a:e[d+1]);const{cols:c,rows:l}=t,f=(o-i)/c/n[0],u=(a-s)/l/n[1],p=2*r;let m=0,h=!1,x=[0,0];for(let d=0;d<c-3;d++){for(let t=0;t<l-3;t++){const n=d*l*2+2*t,r=(e[n]+e[n+4]+e[n+4*l]+e[n+4*l+4])/4,i=(e[n+1]+e[n+5]+e[n+4*l+1]+e[n+4*l+5])/4,o=Math.abs((r-e[n+2*l+2])/f),s=Math.abs((i-e[n+2*l+3])/u);if(o+s>m&&(m=o+s,x=[o,s]),p&&m>p){h=!0;break}}if(h)break}return x},h={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},x=32,d=4,y=d,b=new Map,g=new Map;async function O(){if(Object(a["f"])())return null;await Object(a["g"])()}function j(e,t,n){return p(e.spatialReference,t)?n?Object(a["d"])(t,e.spatialReference,e):Object(a["d"])(e.spatialReference,t,e):null}function w(e,t,n,r=null){const s=e.spatialReference;if(s.equals(t))return e;p(s,t,r);const l=n.center,f=new c["a"]({xmin:l.x-e.x/2,xmax:l.x+e.x/2,ymin:l.y-e.y/2,ymax:l.y+e.y/2,spatialReference:s}),u=Object(a["h"])(f,t,r);if(Object(i["i"])(u))return null;const m={x:u.xmax-u.xmin,y:u.ymax-u.ymin},h=J(t);if(Object(i["j"])(h)&&m.x>=h){const n=Object(o["d"])(s)/Object(o["d"])(t);m.x=e.x*n,m.y=e.y*n}return m}function v(e,t=.01){return Object(o["d"])(e)?t/Object(o["d"])(e):0}function S(e,t,n=null,r=!0){const o=e.spatialReference;if(o.equals(t))return e;p(o,t,n);const s=Object(a["h"])(e,t,n);if(!r||!s)return s;const c=B(o,!0),l=B(t,!0),f=v(o);return f&&Object(i["j"])(c)&&Object(i["j"])(l)&&(s.x>0&&Math.abs(e.x-c[0])<f?s.x-=l[1]-l[0]:s.x<0&&Math.abs(e.x-c[1])<f&&(s.x+=l[1]-l[0])),s}function M(e){const{inSR:t,outSR:n,datumTransformation:r,preferPE:o}=e;if(t.equals(n)){const{points:t}=k(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return C(e);if(p(t,n,r)&&o){if(t.isGeographic)return P(e);const n=N(t);if(Object(i["j"])(n))return P(e)}return R(e)}function R(e){const{points:t}=k(e,null),n=t.map(t=>new l["a"](t[0],t[1],e.inSR));return Object(a["h"])(n,e.outSR,e.datumTransformation).map(e=>e?[e.x,e.y]:[NaN,NaN])}function P(e){const{inSR:t,outSR:n,datumTransformation:r}=e,o=N(t),{points:a,mask:c}=k(e,o);if(!t.isGeographic){const e=t.wkid?s["a"].coordsys(t.wkid):s["a"].fromString(t.isGeographic?s["b"].PE_TYPE_GEOGCS:s["b"].PE_TYPE_PROJCS,t.wkt);s["c"].projToGeog(e,a.length,a)}if(Object(i["j"])(r)&&r.steps.length&&r.steps.forEach(e=>{const t=e.wkid?s["a"].geogtran(e.wkid):s["a"].fromString(s["b"].PE_TYPE_GEOGTRAN,e.wkt);s["d"].geogToGeog(t,a.length,a,null,e.isInverse?s["b"].PE_TRANSFORM_2_TO_1:s["b"].PE_TRANSFORM_1_TO_2)}),!n.isGeographic){const e=N(n,!0),t=Object(i["j"])(e)&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];G(a,t);const r=n.wkid?s["a"].coordsys(n.wkid):s["a"].fromString(n.isGeographic?s["b"].PE_TYPE_GEOGCS:s["b"].PE_TYPE_PROJCS,n.wkt);s["c"].geogToProj(r,a.length,a)}let l=a;if(c&&a.length!==c.length){l=[];for(let e=0,t=0;e<c.length;e++)c[e]?l.push(a[t++]):l.push([NaN,NaN])}return l}function C(e){const{cols:t,rows:n,xres:r,yres:i,usePixelCenter:o,inSR:s,outSR:c}=e;let{xmin:f,ymax:u}=e;o&&(f+=r/2,u-=i/2);const p=[],m=[],h=Math.max(t,n);for(let d=0;d<h;d++){const e=f+r*Math.min(t,d),o=u-i*Math.min(n,d),h=Object(a["h"])(new l["a"]({x:e,y:o,spatialReference:s}),c);d<=t&&p.push(h.x),d<=n&&m.push(h.y)}const x=[];for(let a=0;a<t;a++)for(let e=0;e<n;e++)x.push([p[a],m[e]]);return x}function N(e,t=!1){let n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),b.has(n)){const e=b.get(n);return t?null==e?void 0:e.gcs:null==e?void 0:e.pcs}const r=e.wkid?s["a"].coordsys(e.wkid):s["a"].fromString(e.isGeographic?s["b"].PE_TYPE_GEOGCS:s["b"].PE_TYPE_PROJCS,e.wkt),i=T(r,v(e,1e-4)),o=T(r,0,!0);return b.set(n,{pcs:i,gcs:o}),t?o:i}function T(e,t=0,n=!1){const r=s["f"].generate(e),i=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(null==i||!i.length)return null;let o=!1,a=i.find(e=>1===e.getInclusive()&&1===e.getKind());if(!a){if(a=i.find(e=>1===e.getInclusive()&&0===e.getKind()),!a)return null;o=!0}const c=r.isPannableRectangle(),l=a.getCoord();if(o)return{isEnvelope:o,isPannable:c,vertices:l,coef:null,bbox:[l[0][0]-t,l[0][1]-t,l[1][0]+t,l[1][1]+t]};let f=0;const u=[];let[p,m]=l[0],[h,x]=l[0];for(let s=0,d=l.length;s<d;s++){f++,f===d&&(f=0);const[e,t]=l[s],[n,r]=l[f];if(r===t)u.push([e,n,t,r,2]);else{const i=(n-e)/(r-t||1e-4),o=e-i*t;t<r?u.push([i,o,t,r,0]):u.push([i,o,r,t,1])}p=p<e?p:e,m=m<t?m:t,h=h>e?h:e,x=x>t?x:t}return{isEnvelope:!1,isPannable:c,vertices:l,coef:u,bbox:[p,m,h,x]}}function k(e,t){const n=[],{cols:r,rows:o,xres:s,yres:a,usePixelCenter:c}=e;let{xmin:l,ymax:f}=e;if(c&&(l+=s/2,f-=a/2),!Object(i["j"])(t)){for(let e=0;e<r;e++)for(let t=0;t<o;t++)n.push([l+s*e,f-a*t]);return{points:n}}const u=new Uint8Array(r*o);if(t.isEnvelope){const{bbox:[e,i,c,p]}=t;for(let m=0,h=0;m<r;m++){const r=l+s*m,x=t.isPannable||r>=e&&r<=c;for(let e=0;e<o;e++,h++){const t=f-a*e;x&&t>=i&&t<=p&&(n.push([r,t]),u[h]=1)}}return{points:n,mask:u}}const{coef:p}=t,m=[];for(let i=0;i<o;i++){const e=f-a*i,t=[],n=[];for(let i=0;i<p.length;i++){const[r,o,s,a,c]=p[i];if(e===s&&s===a)t.push(r),t.push(o),n.push(2),n.push(2);else if(e>=s&&e<=a){const i=r*e+o;t.push(i),n.push(c)}}let r=t;if(t.length>2){let e=2===n[0]?0:n[0],i=t[0];r=[];for(let o=1;o<n.length;o++)2===n[o]&&o!==n.length-1||(n[o]!==e&&(r.push(0===e?Math.min(i,t[o-1]):Math.max(i,t[o-1])),e=n[o],i=t[o]),o===n.length-1&&r.push(0===n[o]?Math.min(i,t[o]):Math.max(i,t[o])));r.sort((e,t)=>e-t)}else t[0]>t[1]&&(r=[t[1],t[0]]);m.push(r)}for(let i=0,h=0;i<r;i++){const e=l+s*i;for(let t=0;t<o;t++,h++){const r=f-a*t,i=m[t];if(2===i.length)e>=i[0]&&e<=i[1]&&(n.push([e,r]),u[h]=1);else if(i.length>2){let t=!1;for(let n=0;n<i.length;n+=2)if(e>=i[n]&&e<=i[n+1]){t=!0;break}t&&(n.push([e,r]),u[h]=1)}}}return{points:n,mask:u}}function G(e,t){const[n,r]=t;for(let i=0;i<e.length;i++){const t=e[i][1];(t<n||t>r)&&(e[i]=[NaN,NaN])}}function E(e){const t=J(e[0].spatialReference);if(e.length<2||!Object(i["j"])(t))return e[0];let{xmin:n,xmax:r,ymin:o,ymax:s}=e[0];for(let i=1;i<e.length;i++){const n=e[i];r=n.xmax+t*i,o=Math.min(o,n.ymin),s=Math.max(s,n.ymax)}return new c["a"]({xmin:n,xmax:r,ymin:o,ymax:s,spatialReference:e[0].spatialReference})}function z(e,t,n=null,r=!0){if(e.spatialReference.equals(t))return e;const o=W(e),s=J(e.spatialReference,!0),a=J(t);if(0===o||Object(i["i"])(s)||Object(i["i"])(a))return _(e,t,n,r);const l=e.clone().normalize();if(1===l.length&&e.xmax<s&&e.xmax-s/2>v(e.spatialReference)){const{xmin:t,xmax:n}=e;for(let r=0;r<=o;r++){const i=0===r?t:-s/2,a=r===o?n-s*r:s/2;l[r]=new c["a"]({xmin:i,xmax:a,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference})}}return E(l.map(e=>_(e,t,n,r)).filter(e=>!!e))}function _(e,t,n=null,r=!0,o=!0){const s=e.spatialReference;if(s.equals(t))return e;p(s,t,n);const c=Object(a["h"])(e,t,n);if(o&&t.isWebMercator&&c&&(c.ymax=Math.min(20037508.342787,c.ymax),c.ymin=Math.max(-20037508.342787,c.ymin),c.ymin>=c.ymax))return null;if(!r||!c)return c;const f=B(s,!0),u=B(t,!0);if(Object(i["i"])(f)||Object(i["i"])(u))return c;const m=v(s,.001),h=v(s,500),x=v(t,.001);if(Math.abs(c.xmin-u[0])<x&&Math.abs(c.xmax-u[1])<x){const r=Math.abs(e.xmin-f[0]),i=Math.abs(f[1]-e.xmax);if(r<m&&i>h){c.xmin=u[0];const r=[];r.push(new l["a"](e.xmax,e.ymin,s)),r.push(new l["a"](e.xmax,(e.ymin+e.ymax)/2,s)),r.push(new l["a"](e.xmax,e.ymax,s));const i=r.map(e=>S(e,t,n)).filter(e=>!isNaN(null==e?void 0:e.x)).map(e=>e.x);c.xmax=Math.max.apply(null,i)}if(i<m&&r>h){c.xmax=u[1];const r=[];r.push(new l["a"](e.xmin,e.ymin,s)),r.push(new l["a"](e.xmin,(e.ymin+e.ymax)/2,s)),r.push(new l["a"](e.xmin,e.ymax,s));const i=r.map(e=>S(e,t,n)).filter(e=>!isNaN(null==e?void 0:e.x)).map(e=>e.x);c.xmin=Math.min.apply(null,i)}}else{const e=v(t,.001);Math.abs(c.xmin-u[0])<e&&(c.xmin=u[0]),Math.abs(c.xmax-u[1])<e&&(c.xmax=u[1])}return c}function J(e,t=!1){const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*h[e.wkid]||null}function B(e,t=!1){if(e.isGeographic)return[-180,180];const n=J(e,t);return Object(i["j"])(n)?[-n/2,n/2]:null}function I(e,t,n,r){let i=(e-t)/n;return i-Math.floor(i)!=0?i=Math.floor(i):r&&(i-=1),i}function W(e,t=!1){const n=J(e.spatialReference);if(!Object(i["j"])(n))return 0;const r=t?0:-n/2,o=v(e.spatialReference),s=!t&&Math.abs(e.xmax-n/2)<o?n/2:e.xmax,a=!t&&Math.abs(e.xmin+n/2)<o?-n/2:e.xmin;return I(s,r,n,!0)-I(a,r,n,!1)}function X(e){const t=e.storageInfo.origin.x,n=J(e.spatialReference,!0);if(!Object(i["j"])(n))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const r=n/2,{nativePixelSize:o,storageInfo:s,extent:a}=e,{maximumPyramidLevel:c,blockWidth:l,pyramidScalingFactor:f}=s;let u=o.x;const p=[],m=Object(i["j"])(e.transform)&&"gcs-shift"===e.transform.type,h=t+(m?0:r),x=m?n-t:r-t;for(let i=0;i<=c;i++){const e=(a.xmax-t)/u/l,n=e-Math.floor(e)==0?e:Math.ceil(e),r=x/u/l,i=r-Math.floor(r)==0?r:Math.ceil(r),o=Math.floor(h/u/l),s=Math.round(h/u)%l,c=(l-Math.round(x/u)%l)%l;p.push({resolutionX:u,blockWidth:l,datsetColumnCount:n,worldColumnCountFromOrigin:i,leftMargin:s,rightPadding:c,originColumnOffset:o}),u*=f}return{originX:t,halfWorldWidth:r,pyramidsInfo:p,hasGCSSShiftTransform:m}}function Y(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt);let n;return g.has(t)?n=g.get(t):(n=(e.wkid?s["a"].coordsys(e.wkid):s["a"].fromString(s["b"].PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),g.set(t,n)),new f["a"]({wkid:n})}function F(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[x,x],r=A(e),o={cols:r.size[0]+1,rows:r.size[1]+1};const s=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let a=r.outofBoundPointCount===r.offsets.length/2||t&&s?[0,0]:m(r.offsets,o,n,y);const c=(a[0]+a[1])/2,l=e.projectedExtent.spatialReference,f=e.srcBufferExtent.spatialReference;if(t&&(s||c>y)&&(u(l,f,e.datumTransformation)&&(l.isGeographic||Object(i["j"])(N(l))),n=[d,d],r=A({...e,spacing:n}),o={cols:r.size[0]+1,rows:r.size[1]+1},a=m(r.offsets,o,n,y)),r.error=a,n[0]>1&&(r.coefficients=D(r.offsets,o,s)),e.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(f.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:n};else{const t=N(l);if(Object(i["j"])(t)&&!t.isEnvelope){const t=Y(l),i=z(e.projectedExtent,t),{offsets:a}=A({...e,srcBufferExtent:i,spacing:n}),c=D(a,o,s);r.gcsGrid={offsets:a,coefficients:c,spacing:n}}}return r}function A(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:r,datumTransformation:o,rasterTransform:s}=e,a=t.spatialReference,c=n.spatialReference;p(a,c);const{xmin:f,ymin:u,xmax:m,ymax:h}=t,y=J(c),b=Object(i["j"])(y)&&(e.hasWrapAround||"gcs-shift"===(null==s?void 0:s.type)),g=e.spacing||[x,x],O=g[0]*r.x,j=g[1]*r.y,w=1===g[0],S=Math.ceil((m-f)/O-.1/g[0])+(w?0:1),R=Math.ceil((h-u)/j-.1/g[1])+(w?0:1),P=M({cols:S,rows:R,xmin:f,ymax:h,xres:O,yres:j,inSR:a,outSR:c,datumTransformation:o,preferPE:g[0]<=d,usePixelCenter:w}),C=[];let N,T=0;const k=w?-1:NaN,{xmin:G,xmax:E,ymax:z,width:_,height:B}=n,I=v(c,500);for(let i=0;i<S;i++){const e=[];for(let t=0;t<R;t++){let n=P[i*R+t];if(b&&n[0]>E&&n[0]>y/2-I&&(n[0]-=y),!n||isNaN(n[0])||isNaN(n[1]))C.push(k),C.push(k),e.push(null),T++;else{if(s){const e=s.inverseTransform(new l["a"]({x:n[0],y:n[1],spatialReference:c}));n=[e.x,e.y]}e.push(n),i>0&&b&&N[t]&&n[0]<N[t][0]&&(n[0]+=y),C.push((n[0]-G)/_),C.push((z-n[1])/B)}}N=e}return{offsets:C,error:null,coefficients:null,outofBoundPointCount:T,spacing:g,size:w?[S,R]:[S-1,R-1]}}function D(e,t,n){const{cols:r,rows:i}=t,o=new Float32Array((r-1)*(i-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let c=0;c<r-1;c++){for(let t=0;t<i-1;t++){let n=c*i*2+2*t;const l=e[n],f=e[n+1],u=e[n+2],p=e[n+3];n+=2*i;const m=e[n],h=e[n+1],x=e[n+2],d=e[n+3];let y=0,b=12*(t*(r-1)+c);for(let e=0;e<3;e++)o[b++]=s[y++]*l+s[y++]*u+s[y++]*x;y=0;for(let e=0;e<3;e++)o[b++]=s[y++]*f+s[y++]*p+s[y++]*d;y=0;for(let e=0;e<3;e++)o[b++]=a[y++]*l+a[y++]*m+a[y++]*x;y=0;for(let e=0;e<3;e++)o[b++]=a[y++]*f+a[y++]*h+a[y++]*d}if(n)for(let e=0;e<o.length;e++)isNaN(o[e])&&(o[e]=-1)}return o}function L(e){const t=e.clone().normalize();return 1===t.length?t[0]:E(t)}function q(e,t,n){const{storageInfo:r,pixelSize:o}=t;let s,a=!1;const{pyramidResolutions:c}=r;if(Object(i["j"])(c)&&c.length){const r=(e.x+e.y)/2,i=c[c.length-1],f=(i.x+i.y)/2,u=(o.x+o.y)/2;if(r<=u)s=0;else if(r>=f)s=c.length,a=r/f>8;else{let e,t=u;for(let i=1;i<=c.length;i++){if(e=(c[i-1].x+c[i-1].y)/2,r<=e){r===e?s=i:"down"===n?(s=i-1,a=r/t>8):s="up"===n||r-t>e-r||r/t>2?i:i-1;break}t=e}}const p=0===s?o:c[s-1];return{pyramidLevel:s,pyramidResolution:new l["a"]({x:p.x,y:p.y,spatialReference:t.spatialReference}),excessiveReading:a}}const f=Math.log(e.x/o.x)/Math.LN2,u=Math.log(e.y/o.y)/Math.LN2,p=t.storageInfo.maximumPyramidLevel||0;s="down"===n?Math.floor(Math.min(f,u)):"up"===n?Math.ceil(Math.max(f,u)):Math.round((f+u)/2),s<0?s=0:s>p&&(a=s>p+3,s=p);const m=2**s;return{pyramidLevel:s,pyramidResolution:new l["a"]({x:m*t.nativePixelSize.x,y:m*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:a}}function K(e,t,n=512,r=!0){const{extent:i,spatialReference:s,pixelSize:a}=e,c=w(new l["a"]({x:a.x,y:a.y,spatialReference:s}),t,i);if(null==c)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const f=(c.x+c.y)/2,u=Object(o["d"])(t),p=f*u*96*39.37,m=t.isGeographic?256/n*295828763.7958547:256/n*591657527.591555;let h="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const x=z(i,t);h||r&&(t.isGeographic||t.isWebMercator)&&(h=x.xmin*x.xmax<0);let d,y=p;const b=1.001;if(h){y=m;const e=t.isGeographic?1341104507446289e-21:.29858214164761665,n=e*(96*u*39.37),r=t.isGeographic?4326:3857;d=w(new l["a"]({x:e,y:e,spatialReference:{wkid:r}}),s,x),d.x*=y/n,d.y*=y/n}else{d={x:a.x,y:a.y};const t=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let n=0;for(;y<m*(b/2)&&n<t;)n++,y*=2,d.x*=2,d.y*=2;Math.max(y,m)/Math.min(y,m)<=b&&(y=m)}const g=[y],O=[{x:d.x,y:d.y}],j=70.5310735,v=Math.min(j,p)/b;for(;y>=v;)y/=2,d.x/=2,d.y/=2,g.push(y),O.push({x:d.x,y:d.y});return{projectedPixelSize:c,scales:g,srcResolutions:O,isCustomTilingScheme:!h}}}}]);