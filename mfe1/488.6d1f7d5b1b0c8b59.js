(self.webpackChunkmfe1=self.webpackChunkmfe1||[]).push([[488],{3488:(te,w,P)=>{function N(e,r){return Object.is(e,r)}P.r(w),P.d(w,{REACTIVE_NODE:()=>f,SIGNAL:()=>c,SIGNAL_NODE:()=>G,consumerAfterComputation:()=>S,consumerBeforeComputation:()=>E,consumerDestroy:()=>L,consumerMarkDirty:()=>O,consumerPollProducersForChange:()=>T,createComputed:()=>j,createSignal:()=>z,createWatch:()=>Y,defaultEquals:()=>N,getActiveConsumer:()=>_,isInNotificationPhase:()=>D,isReactive:()=>q,producerAccessed:()=>d,producerIncrementEpoch:()=>F,producerNotifyConsumers:()=>I,producerUpdateValueVersion:()=>g,producerUpdatesAllowed:()=>y,runPostSignalSetFn:()=>Q,setActiveConsumer:()=>C,setAlternateWeakRefImpl:()=>ee,setPostSignalSetFn:()=>J,setThrowInvalidWriteToSignalError:()=>H,signalSetFn:()=>k,signalUpdateFn:()=>K});let t=null,s=!1,a=1;const c=Symbol("SIGNAL");function C(e){const r=t;return t=e,r}function _(){return t}function D(){return s}function q(e){return void 0!==e[c]}const f={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function d(e){if(s)throw new Error("");if(null===t)return;t.consumerOnSignalRead(e);const r=t.nextProducerIndex++;m(t),r<t.producerNode.length&&t.producerNode[r]!==e&&l(t)&&p(t.producerNode[r],t.producerIndexOfThis[r]),t.producerNode[r]!==e&&(t.producerNode[r]=e,t.producerIndexOfThis[r]=l(t)?V(e,t,r):0),t.producerLastReadVersion[r]=e.version}function F(){a++}function g(e){if((!l(e)||e.dirty)&&(e.dirty||e.lastCleanEpoch!==a)){if(!e.producerMustRecompute(e)&&!T(e))return e.dirty=!1,void(e.lastCleanEpoch=a);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=a}}function I(e){if(void 0===e.liveConsumerNode)return;const r=s;s=!0;try{for(const u of e.liveConsumerNode)u.dirty||O(u)}finally{s=r}}function y(){return!1!==t?.consumerAllowSignalWrites}function O(e){e.dirty=!0,I(e),e.consumerMarkedDirty?.(e)}function E(e){return e&&(e.nextProducerIndex=0),C(e)}function S(e,r){if(C(r),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(l(e))for(let u=e.nextProducerIndex;u<e.producerNode.length;u++)p(e.producerNode[u],e.producerIndexOfThis[u]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function T(e){m(e);for(let r=0;r<e.producerNode.length;r++){const u=e.producerNode[r],n=e.producerLastReadVersion[r];if(n!==u.version||(g(u),n!==u.version))return!0}return!1}function L(e){if(m(e),l(e))for(let r=0;r<e.producerNode.length;r++)p(e.producerNode[r],e.producerIndexOfThis[r]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function V(e,r,u){if(M(e),0===e.liveConsumerNode.length&&W(e))for(let n=0;n<e.producerNode.length;n++)e.producerIndexOfThis[n]=V(e.producerNode[n],e,n);return e.liveConsumerIndexOfThis.push(u),e.liveConsumerNode.push(r)-1}function p(e,r){if(M(e),1===e.liveConsumerNode.length&&W(e))for(let n=0;n<e.producerNode.length;n++)p(e.producerNode[n],e.producerIndexOfThis[n]);const u=e.liveConsumerNode.length-1;if(e.liveConsumerNode[r]=e.liveConsumerNode[u],e.liveConsumerIndexOfThis[r]=e.liveConsumerIndexOfThis[u],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,r<e.liveConsumerNode.length){const n=e.liveConsumerIndexOfThis[r],i=e.liveConsumerNode[r];m(i),i.producerIndexOfThis[n]=r}}function l(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function m(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function M(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function W(e){return void 0!==e.producerNode}function j(e){const r=Object.create(B);r.computation=e;const u=()=>{if(g(r),d(r),r.value===h)throw r.error;return r.value};return u[c]=r,u}const x=Symbol("UNSET"),A=Symbol("COMPUTING"),h=Symbol("ERRORED"),B={...f,value:x,dirty:!0,error:null,equal:N,producerMustRecompute:e=>e.value===x||e.value===A,producerRecomputeValue(e){if(e.value===A)throw new Error("Detected cycle in computations.");const r=e.value;e.value=A;const u=E(e);let n;try{n=e.computation()}catch(i){n=h,e.error=i}finally{S(e,u)}r!==x&&r!==h&&n!==h&&e.equal(r,n)?e.value=r:(e.value=n,e.version++)}};let U=function $(){throw new Error};function b(){U()}function H(e){U=e}let v=null;function z(e){const r=Object.create(G);r.value=e;const u=()=>(d(r),r.value);return u[c]=r,u}function J(e){const r=v;return v=e,r}function k(e,r){y()||b(),e.equal(e.value,r)||(e.value=r,function X(e){e.version++,F(),I(e),v?.()}(e))}function K(e,r){y()||b(),k(e,r(e.value))}function Q(){v?.()}const G={...f,equal:N,value:void 0};function Y(e,r,u){const n=Object.create(Z);u&&(n.consumerAllowSignalWrites=!0),n.fn=e,n.schedule=r;const i=o=>{n.cleanupFn=o};return n.ref={notify:()=>O(n),run:()=>{if(null===n.fn)return;if(D())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(n.dirty=!1,n.hasRun&&!T(n))return;n.hasRun=!0;const o=E(n);try{n.cleanupFn(),n.cleanupFn=R,n.fn(i)}finally{S(n,o)}},cleanup:()=>n.cleanupFn(),destroy:()=>function ne(o){(function re(o){return null===o.fn&&null===o.schedule})(o)||(L(o),o.cleanupFn(),o.fn=null,o.schedule=null,o.cleanupFn=R)}(n),[c]:n},n.ref}const R=()=>{},Z={...f,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:e=>{null!==e.schedule&&e.schedule(e.ref)},hasRun:!1,cleanupFn:R};function ee(e){}}}]);