(self.webpackChunkshell=self.webpackChunkshell||[]).push([[626,245],{1626:(Xe,J,O)=>{O.r(J),O.d(J,{FetchBackend:()=>G,HTTP_INTERCEPTORS:()=>te,HTTP_TRANSFER_CACHE_ORIGIN_MAP:()=>xe,HttpBackend:()=>b,HttpClient:()=>ye,HttpClientJsonpModule:()=>mt,HttpClientModule:()=>yt,HttpClientXsrfModule:()=>pt,HttpContext:()=>de,HttpContextToken:()=>Ve,HttpErrorResponse:()=>N,HttpEventType:()=>_,HttpFeatureKind:()=>D,HttpHandler:()=>P,HttpHeaderResponse:()=>S,HttpHeaders:()=>g,HttpParams:()=>A,HttpRequest:()=>C,HttpResponse:()=>M,HttpResponseBase:()=>W,HttpStatusCode:()=>pe,HttpUrlEncodingCodec:()=>k,HttpXhrBackend:()=>oe,HttpXsrfTokenExtractor:()=>q,JsonpClientBackend:()=>se,JsonpInterceptor:()=>ct,provideHttpClient:()=>Ae,withFetch:()=>ft,withInterceptors:()=>ht,withInterceptorsFromDi:()=>Ne,withJsonpSupport:()=>ke,withNoXsrfProtection:()=>De,withRequestsMadeViaParent:()=>ut,withXsrfConfiguration:()=>ie,\u0275HTTP_ROOT_INTERCEPTOR_FNS:()=>ne,\u0275HttpInterceptingHandler:()=>K,\u0275HttpInterceptorHandler:()=>K,\u0275REQUESTS_CONTRIBUTE_TO_STABILITY:()=>re,\u0275withHttpTransferCache:()=>Pt});var z=O(467),a=O(5346),v=O(6581),R=O(2905),I=O(4032);class P{}class b{}class g{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?"string"==typeof n?this.lazyInit=()=>{this.headers=new Map,n.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const s=t.slice(0,r),o=s.toLowerCase(),i=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();const t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof g?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){const t=new g;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof g?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){const t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(n.name,t);const s=("a"===n.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const o=n.value;if(o){let i=this.headers.get(t);if(!i)return;i=i.filter(l=>-1===o.indexOf(l)),0===i.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(n,t){const r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}}class k{encodeKey(n){return le(n)}encodeValue(n){return le(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}}const Z=/%(\d[a-f0-9])/gi,Je={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function le(e){return encodeURIComponent(e).replace(Z,(n,t)=>Je[t]??n)}function V(e){return`${e}`}class A{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new k,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function x(e,n){const t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{const o=s.indexOf("="),[i,l]=-1==o?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,o)),n.decodeValue(s.slice(o+1))],c=t.get(i)||[];c.push(l),t.set(i,c)}),t}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{const r=n.fromObject[t],s=Array.isArray(r)?r.map(V):[V(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();const t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){const t=[];return Object.keys(n).forEach(r=>{const s=n[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{const t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>""!==n).join("&")}clone(n){const t=new A({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":const t=("a"===n.op?this.map.get(n.param):void 0)||[];t.push(V(n.value)),this.map.set(n.param,t);break;case"d":if(void 0===n.value){this.map.delete(n.param);break}{let r=this.map.get(n.param)||[];const s=r.indexOf(V(n.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}}}),this.cloneFrom=this.updates=null)}}class Ve{constructor(n){this.defaultValue=n}}class de{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}}function he(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function ue(e){return typeof Blob<"u"&&e instanceof Blob}function fe(e){return typeof FormData<"u"&&e instanceof FormData}class C{constructor(n,t,r,s){let o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function We(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new g,this.context??=new de,this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=t;else{const l=t.indexOf("?");this.urlWithParams=t+(-1===l?"?":l<t.length-1?"&":"")+i}}else this.params=new A,this.urlWithParams=t}serializeBody(){return null===this.body?null:"string"==typeof this.body||he(this.body)||ue(this.body)||fe(this.body)||function Ge(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)?this.body:this.body instanceof A?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||fe(this.body)?null:ue(this.body)?this.body.type||null:he(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof A?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(n={}){const t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,o=n.transferCache??this.transferCache,i=void 0!==n.body?n.body:this.body,l=n.withCredentials??this.withCredentials,c=n.reportProgress??this.reportProgress;let h=n.headers||this.headers,T=n.params||this.params;const p=n.context??this.context;return void 0!==n.setHeaders&&(h=Object.keys(n.setHeaders).reduce((y,m)=>y.set(m,n.setHeaders[m]),h)),n.setParams&&(T=Object.keys(n.setParams).reduce((y,m)=>y.set(m,n.setParams[m]),T)),new C(t,r,i,{params:T,headers:h,context:p,reportProgress:c,responseType:s,withCredentials:l,transferCache:o})}}var _=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(_||{});class W{constructor(n,t=200,r="OK"){this.headers=n.headers||new g,this.status=void 0!==n.status?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}class S extends W{constructor(n={}){super(n),this.type=_.ResponseHeader}clone(n={}){return new S({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class M extends W{constructor(n={}){super(n),this.type=_.Response,this.body=void 0!==n.body?n.body:null}clone(n={}){return new M({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class N extends W{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${n.url||"(unknown url)"}`:`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}}var pe=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(pe||{});function H(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}let ye=(()=>{class e{constructor(t){this.handler=t}request(t,r,s={}){let o;if(t instanceof C)o=t;else{let c,h;c=s.headers instanceof g?s.headers:new g(s.headers),s.params&&(h=s.params instanceof A?s.params:new A({fromObject:s.params})),o=new C(t,r,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:h,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}const i=(0,v.of)(o).pipe((0,R.concatMap)(c=>this.handler.handle(c)));if(t instanceof C||"events"===s.observe)return i;const l=i.pipe((0,R.filter)(c=>c instanceof M));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return l.pipe((0,R.map)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe((0,R.map)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe((0,R.map)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return l.pipe((0,R.map)(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new A).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,H(s,r))}post(t,r,s={}){return this.request("POST",t,H(s,r))}put(t,r,s={}){return this.request("PUT",t,H(s,r))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(P))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const $e=/^\)\]\}',?\n/;function me(e){if(e.url)return e.url;const n="X-Request-URL".toLocaleLowerCase();return e.headers.get(n)}let G=(()=>{class e{constructor(){this.fetchImpl=(0,a.inject)(Ye,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t)),this.ngZone=(0,a.inject)(a.NgZone)}handle(t){return new v.Observable(r=>{const s=new AbortController;return this.doRequest(t,s.signal,r).then(ee,o=>r.error(new N({error:o}))),()=>s.abort()})}doRequest(t,r,s){var o=this;return(0,z.A)(function*(){const i=o.createRequestInit(t);let l;try{const E=o.ngZone.runOutsideAngular(()=>o.fetchImpl(t.urlWithParams,{signal:r,...i}));(function Ze(e){e.then(ee,ee)})(E),s.next({type:_.Sent}),l=yield E}catch(E){return void s.error(new N({error:E,status:E.status??0,statusText:E.statusText,url:t.urlWithParams,headers:E.headers}))}const c=new g(l.headers),h=l.statusText,T=me(l)??t.urlWithParams;let p=l.status,y=null;if(t.reportProgress&&s.next(new S({headers:c,status:p,statusText:h,url:T})),l.body){const E=l.headers.get("content-length"),d=[],u=l.body.getReader();let B,f,w=0;const j=typeof Zone<"u"&&Zone.current;yield o.ngZone.runOutsideAngular((0,z.A)(function*(){for(;;){const{done:L,value:ce}=yield u.read();if(L)break;if(d.push(ce),w+=ce.length,t.reportProgress){f="text"===t.responseType?(f??"")+(B??=new TextDecoder).decode(ce,{stream:!0}):void 0;const Se=()=>s.next({type:_.DownloadProgress,total:E?+E:void 0,loaded:w,partialText:f});j?j.run(Se):Se()}}}));const ae=o.concatChunks(d,w);try{const L=l.headers.get("Content-Type")??"";y=o.parseBody(t,ae,L)}catch(L){return void s.error(new N({error:L,headers:new g(l.headers),status:l.status,statusText:l.statusText,url:me(l)??t.urlWithParams}))}}0===p&&(p=y?200:0),p>=200&&p<300?(s.next(new M({body:y,headers:c,status:p,statusText:h,url:T})),s.complete()):s.error(new N({error:y,headers:c,status:p,statusText:h,url:T}))})()}parseBody(t,r,s){switch(t.responseType){case"json":const o=(new TextDecoder).decode(r).replace($e,"");return""===o?null:JSON.parse(o);case"text":return(new TextDecoder).decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(t){const r={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((o,i)=>r[o]=i.join(",")),t.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){const o=t.detectContentTypeHeader();null!==o&&(r["Content-Type"]=o)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:s}}concatChunks(t,r){const s=new Uint8Array(r);let o=0;for(const i of t)s.set(i,o),o+=i.length;return s}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();class Ye{}function ee(){}function ge(e,n){return n(e)}function Qe(e,n){return(t,r)=>n.intercept(t,{handle:s=>e(s,r)})}const te=new a.InjectionToken(""),X=new a.InjectionToken(""),ne=new a.InjectionToken(""),re=new a.InjectionToken("",{providedIn:"root",factory:()=>!0});function et(){let e=null;return(n,t)=>{null===e&&(e=((0,a.inject)(te,{optional:!0})??[]).reduceRight(Qe,ge));const r=(0,a.inject)(a.\u0275PendingTasks);if((0,a.inject)(re)){const o=r.add();return e(n,t).pipe((0,R.finalize)(()=>r.remove(o)))}return e(n,t)}}let Te,K=(()=>{class e extends P{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275PendingTasks),this.contributeToStability=(0,a.inject)(re)}handle(t){if(null===this.chain){const r=Array.from(new Set([...this.injector.get(X),...this.injector.get(ne,[])]));this.chain=r.reduceRight((s,o)=>function He(e,n,t){return(r,s)=>(0,a.runInInjectionContext)(t,()=>n(r,o=>e(o,s)))}(s,o,this.injector),ge)}if(this.contributeToStability){const r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe((0,R.finalize)(()=>this.pendingTasks.remove(r)))}return this.chain(t,r=>this.backend.handle(r))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(b),a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})(),nt=0;class Ee{}function at(){return"object"==typeof window?window:{}}let se=(()=>{class e{constructor(t,r){this.callbackMap=t,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+nt++}handle(t){if("JSONP"!==t.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==t.responseType)throw new Error("JSONP requests must use Json response type.");if(t.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new v.Observable(r=>{const s=this.nextCallback(),o=t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${s}$1`),i=this.document.createElement("script");i.src=o;let l=null,c=!1;this.callbackMap[s]=y=>{delete this.callbackMap[s],l=y,c=!0};const h=()=>{i.remove(),delete this.callbackMap[s]};return i.addEventListener("load",y=>{this.resolvedPromise.then(()=>{h(),c?(r.next(new M({body:l,status:200,statusText:"OK",url:o})),r.complete()):r.error(new N({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),i.addEventListener("error",y=>{h(),r.error(new N({error:y,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(i),r.next({type:_.Sent}),()=>{c||this.removeListeners(i),h()}})}removeListeners(t){Te??=this.document.implementation.createHTMLDocument(),Te.adoptNode(t)}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(Ee),a.\u0275\u0275inject(I.DOCUMENT))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();function Re(e,n){return"JSONP"===e.method?(0,a.inject)(se).handle(e):n(e)}let ct=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,a.runInInjectionContext)(this.injector,()=>Re(t,s=>r.handle(s)))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const lt=/^\)\]\}',?\n/;let oe=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new a.\u0275RuntimeError(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,v.from)(r.\u0275loadImpl()):(0,v.of)(null)).pipe((0,R.switchMap)(()=>new v.Observable(o=>{const i=r.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((d,u)=>i.setRequestHeader(d,u.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const d=t.detectContentTypeHeader();null!==d&&i.setRequestHeader("Content-Type",d)}if(t.responseType){const d=t.responseType.toLowerCase();i.responseType="json"!==d?d:"text"}const l=t.serializeBody();let c=null;const h=()=>{if(null!==c)return c;const d=i.statusText||"OK",u=new g(i.getAllResponseHeaders()),w=function dt(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(i)||t.url;return c=new S({headers:u,status:i.status,statusText:d,url:w}),c},T=()=>{let{headers:d,status:u,statusText:w,url:B}=h(),f=null;204!==u&&(f=typeof i.response>"u"?i.responseText:i.response),0===u&&(u=f?200:0);let j=u>=200&&u<300;if("json"===t.responseType&&"string"==typeof f){const ae=f;f=f.replace(lt,"");try{f=""!==f?JSON.parse(f):null}catch(L){f=ae,j&&(j=!1,f={error:L,text:f})}}j?(o.next(new M({body:f,headers:d,status:u,statusText:w,url:B||void 0})),o.complete()):o.error(new N({error:f,headers:d,status:u,statusText:w,url:B||void 0}))},p=d=>{const{url:u}=h(),w=new N({error:d,status:i.status||0,statusText:i.statusText||"Unknown Error",url:u||void 0});o.error(w)};let y=!1;const m=d=>{y||(o.next(h()),y=!0);let u={type:_.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(u.total=d.total),"text"===t.responseType&&i.responseText&&(u.partialText=i.responseText),o.next(u)},E=d=>{let u={type:_.UploadProgress,loaded:d.loaded};d.lengthComputable&&(u.total=d.total),o.next(u)};return i.addEventListener("load",T),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),t.reportProgress&&(i.addEventListener("progress",m),null!==l&&i.upload&&i.upload.addEventListener("progress",E)),i.send(l),o.next({type:_.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",T),i.removeEventListener("timeout",p),t.reportProgress&&(i.removeEventListener("progress",m),null!==l&&i.upload&&i.upload.removeEventListener("progress",E)),i.readyState!==i.DONE&&i.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(I.XhrFactory))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const $=new a.InjectionToken(""),we="XSRF-TOKEN",ve=new a.InjectionToken("",{providedIn:"root",factory:()=>we}),Pe="X-XSRF-TOKEN",be=new a.InjectionToken("",{providedIn:"root",factory:()=>Pe});class q{}let _e=(()=>{class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,I.\u0275parseCookieValue)(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(I.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(ve))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();function Oe(e,n){const t=e.url.toLowerCase();if(!(0,a.inject)($)||"GET"===e.method||"HEAD"===e.method||t.startsWith("http://")||t.startsWith("https://"))return n(e);const r=(0,a.inject)(q).getToken(),s=(0,a.inject)(be);return null!=r&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}let Ie=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,a.runInInjectionContext)(this.injector,()=>Oe(t,s=>r.handle(s)))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();var D=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(D||{});function F(e,n){return{\u0275kind:e,\u0275providers:n}}function Ae(...e){const n=[ye,oe,K,{provide:P,useExisting:K},{provide:b,useFactory:()=>(0,a.inject)(G,{optional:!0})??(0,a.inject)(oe)},{provide:X,useValue:Oe,multi:!0},{provide:$,useValue:!0},{provide:q,useClass:_e}];for(const t of e)n.push(...t.\u0275providers);return(0,a.makeEnvironmentProviders)(n)}function ht(e){return F(D.Interceptors,e.map(n=>({provide:X,useValue:n,multi:!0})))}const Me=new a.InjectionToken("");function Ne(){return F(D.LegacyInterceptors,[{provide:Me,useFactory:et},{provide:X,useExisting:Me,multi:!0}])}function ie({cookieName:e,headerName:n}){const t=[];return void 0!==e&&t.push({provide:ve,useValue:e}),void 0!==n&&t.push({provide:be,useValue:n}),F(D.CustomXsrfConfiguration,t)}function De(){return F(D.NoXsrfProtection,[{provide:$,useValue:!1}])}function ke(){return F(D.JsonpSupport,[se,{provide:Ee,useFactory:at},{provide:X,useValue:Re,multi:!0}])}function ut(){return F(D.RequestsMadeViaParent,[{provide:b,useFactory:()=>(0,a.inject)(P,{skipSelf:!0,optional:!0})}])}function ft(){return F(D.Fetch,[G,{provide:b,useExisting:G}])}let pt=(()=>{class e{static disable(){return{ngModule:e,providers:[De().\u0275providers]}}static withOptions(t={}){return{ngModule:e,providers:ie(t).\u0275providers}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ie,{provide:te,useExisting:Ie,multi:!0},{provide:q,useClass:_e},ie({cookieName:we,headerName:Pe}).\u0275providers,{provide:$,useValue:!0}]})}}return e})(),yt=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ae(Ne())]})}}return e})(),mt=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[ke().\u0275providers]})}}return e})();const xe=new a.InjectionToken(""),je="b",Fe="h",Le="s",Ue="st",Ce="u",Be="rt",Y=new a.InjectionToken(""),gt=["GET","HEAD"];function Tt(e,n){const{isCacheActive:t,...r}=(0,a.inject)(Y),{transferCache:s,method:o}=e;if(!t||!1===s||"POST"===o&&!r.includePostRequests&&!s||"POST"!==o&&!gt.includes(o)||!r.includeRequestsWithAuthHeaders&&function Et(e){return e.headers.has("authorization")||e.headers.has("proxy-authorization")}(e)||!1===r.filter?.(e))return n(e);const i=(0,a.inject)(a.TransferState),l=(0,a.inject)(xe,{optional:!0}),c=(0,I.isPlatformServer)((0,a.inject)(a.PLATFORM_ID));if(l&&!c)throw new a.\u0275RuntimeError(2803,!1);const h=c&&l?function bt(e,n){const t=new URL(e,"resolve://").origin,r=n[t];return r?e.replace(t,r):e}(e.url,l):e.url,T=function wt(e,n){const{params:t,method:r,responseType:s}=e,o=ze(t);let i=e.serializeBody();i instanceof URLSearchParams?i=ze(i):"string"!=typeof i&&(i="");const c=function vt(e){let n=0;for(const t of e)n=Math.imul(31,n)+t.charCodeAt(0)|0;return n+=2147483648,n.toString()}([r,s,n,i,o].join("|"));return(0,a.makeStateKey)(c)}(e,h),p=i.get(T,null);let y=r.includeHeaders;if("object"==typeof s&&s.includeHeaders&&(y=s.includeHeaders),p){const{[je]:m,[Be]:E,[Fe]:d,[Le]:u,[Ue]:w,[Ce]:B}=p;let f=m;switch(E){case"arraybuffer":f=(new TextEncoder).encode(m).buffer;break;case"blob":f=new Blob([m])}let j=new g(d);return(0,v.of)(new M({body:f,headers:j,status:u,statusText:w,url:B}))}return n(e).pipe((0,R.tap)(m=>{m instanceof M&&c&&i.set(T,{[je]:m.body,[Fe]:Rt(m.headers,y),[Le]:m.status,[Ue]:m.statusText,[Ce]:h,[Be]:e.responseType})}))}function Rt(e,n){if(!n)return{};const t={};for(const r of n){const s=e.getAll(r);null!==s&&(t[r]=s)}return t}function ze(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function Pt(e){return[{provide:Y,useFactory:()=>((0,a.\u0275performanceMarkFeature)("NgHttpTransferCache"),{isCacheActive:!0,...e})},{provide:ne,useValue:Tt,multi:!0,deps:[a.TransferState,Y]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,a.inject)(a.ApplicationRef),t=(0,a.inject)(Y);return()=>{(0,a.\u0275whenStable)(n).then(()=>{t.isCacheActive=!1})}}}]}},467:(Xe,J,O)=>{function z(v,R,I,P,b,g,U){try{var k=v[g](U),x=k.value}catch(Z){return void I(Z)}k.done?R(x):Promise.resolve(x).then(P,b)}function a(v){return function(){var R=this,I=arguments;return new Promise(function(P,b){var g=v.apply(R,I);function U(x){z(g,P,b,U,k,"next",x)}function k(x){z(g,P,b,U,k,"throw",x)}U(void 0)})}}O.d(J,{A:()=>a})}}]);