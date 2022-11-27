(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Z(){}function Ke(e){return e()}function je(){return Object.create(null)}function te(e){e.forEach(Ke)}function Re(e){return typeof e=="function"}function Ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let oe;function Ze(e,t){return oe||(oe=document.createElement("a")),oe.href=t,e===oe.href}function $e(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode.removeChild(e)}function He(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function r(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function b(){return C(" ")}function L(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function xe(e){return Array.from(e.childNodes)}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ae(e,t){e.value=t==null?"":t}function q(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let ve;function ee(e){ve=e}const $=[],Ne=[],re=[],Te=[],et=Promise.resolve();let de=!1;function tt(){de||(de=!0,et.then(Qe))}function _e(e){re.push(e)}const he=new Set;let ue=0;function Qe(){const e=ve;do{for(;ue<$.length;){const t=$[ue];ue++,ee(t),nt(t.$$)}for(ee(null),$.length=0,ue=0;Ne.length;)Ne.pop()();for(let t=0;t<re.length;t+=1){const n=re[t];he.has(n)||(he.add(n),n())}re.length=0}while($.length);for(;Te.length;)Te.pop()();de=!1,he.clear(),ee(e)}function nt(e){if(e.fragment!==null){e.update(),te(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_e)}}const fe=new Set;let lt;function Ue(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function st(e,t,n,l){if(e&&e.o){if(fe.has(e))return;fe.add(e),lt.c.push(()=>{fe.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function it(e){e&&e.c()}function Ve(e,t,n,l){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),l||_e(()=>{const o=e.$$.on_mount.map(Ke).filter(Re);e.$$.on_destroy?e.$$.on_destroy.push(...o):te(o),e.$$.on_mount=[]}),a.forEach(_e)}function We(e,t){const n=e.$$;n.fragment!==null&&(te(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,t){e.$$.dirty[0]===-1&&($.push(e),tt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Xe(e,t,n,l,i,a,o,f=[-1]){const p=ve;ee(e);const c=e.$$={fragment:null,ctx:[],props:a,update:Z,not_equal:i,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:je(),dirty:f,skip_bound:!1,root:t.target||p.$$.root};o&&o(c.root);let y=!1;if(c.ctx=n?n(e,t.props||{},(d,E,...m)=>{const h=m.length?m[0]:E;return c.ctx&&i(c.ctx[d],c.ctx[d]=h)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](h),y&&ct(e,d)),E}):[],c.update(),y=!0,te(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const d=xe(t.target);c.fragment&&c.fragment.l(d),d.forEach(P)}else c.fragment&&c.fragment.c();t.intro&&Ue(e.$$.fragment),Ve(e,t.target,t.anchor,t.customElement),Qe()}ee(p)}class Ye{$destroy(){We(this,1),this.$destroy=Z}$on(t,n){if(!Re(n))return Z;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot="/assets/multiplication_charts.9606e05e.jpg";function Ae(e,t,n){const l=e.slice();return l[25]=t[n],l[26]=t,l[27]=n,l}function Le(e,t,n){const l=e.slice();return l[25]=t[n],l[28]=t,l[29]=n,l}function Pe(e){let t,n,l=Math.floor(e[5]/60)+"",i,a,o=e[5]%60+"",f;return{c(){t=r("span"),n=C("Min: "),i=C(l),a=C(" Sec: "),f=C(o),q(t,"margin-left","10px"),q(t,"font-size","larger")},m(p,c){B(p,t,c),s(t,n),s(t,i),s(t,a),s(t,f)},p(p,c){c&32&&l!==(l=Math.floor(p[5]/60)+"")&&I(i,l),c&32&&o!==(o=p[5]%60+"")&&I(f,o)},d(p){p&&P(t)}}}function Ie(e){let t;return{c(){t=r("span"),t.textContent="Pick more facts",q(t,"margin-left","10px"),q(t,"font-size","larger")},m(n,l){B(n,t,l)},d(n){n&&P(t)}}}function qe(e){let t,n,l,i,a,o,f,p,c,y,d,E,m,h,g,z,k,_,S,J,A,M,v,w,O,D,N,j,K,me,ne,ge,U,R,be,le,ke,V,G,ze,se,ye,W,H,we,ie,Se,X,Q,Ce,ce,Ee,Y,Oe,pe,Me;return{c(){t=r("div"),n=r("div"),l=r("div"),i=r("input"),a=b(),o=r("span"),o.textContent="1",f=b(),p=r("div"),c=r("input"),y=b(),d=r("span"),d.textContent="2",E=b(),m=r("div"),h=r("input"),g=b(),z=r("span"),z.textContent="3",k=b(),_=r("div"),S=r("input"),J=b(),A=r("span"),A.textContent="4",M=b(),v=r("div"),w=r("input"),O=b(),D=r("span"),D.textContent="5",N=b(),j=r("div"),K=r("input"),me=b(),ne=r("span"),ne.textContent="6",ge=b(),U=r("div"),R=r("input"),be=b(),le=r("span"),le.textContent="7",ke=b(),V=r("div"),G=r("input"),ze=b(),se=r("span"),se.textContent="8",ye=b(),W=r("div"),H=r("input"),we=b(),ie=r("span"),ie.textContent="9",Se=b(),X=r("div"),Q=r("input"),Ce=b(),ce=r("span"),ce.textContent="10",Ee=b(),Y=r("img"),u(i,"class","checkbox svelte-1oz6pv5"),u(i,"type","checkbox"),u(o,"class","checkbox-number svelte-1oz6pv5"),u(l,"class","fact-switch svelte-1oz6pv5"),u(c,"class","checkbox svelte-1oz6pv5"),u(c,"type","checkbox"),u(d,"class","checkbox-number svelte-1oz6pv5"),u(p,"class","fact-switch svelte-1oz6pv5"),u(h,"class","checkbox svelte-1oz6pv5"),u(h,"type","checkbox"),u(z,"class","checkbox-number svelte-1oz6pv5"),u(m,"class","fact-switch svelte-1oz6pv5"),u(S,"class","checkbox svelte-1oz6pv5"),u(S,"type","checkbox"),u(A,"class","checkbox-number svelte-1oz6pv5"),u(_,"class","fact-switch svelte-1oz6pv5"),u(w,"class","checkbox svelte-1oz6pv5"),u(w,"type","checkbox"),u(D,"class","checkbox-number svelte-1oz6pv5"),u(v,"class","fact-switch svelte-1oz6pv5"),u(K,"class","checkbox svelte-1oz6pv5"),u(K,"type","checkbox"),u(ne,"class","checkbox-number svelte-1oz6pv5"),u(j,"class","fact-switch svelte-1oz6pv5"),u(R,"class","checkbox svelte-1oz6pv5"),u(R,"type","checkbox"),u(le,"class","checkbox-number svelte-1oz6pv5"),u(U,"class","fact-switch svelte-1oz6pv5"),u(G,"class","checkbox svelte-1oz6pv5"),u(G,"type","checkbox"),u(se,"class","checkbox-number svelte-1oz6pv5"),u(V,"class","fact-switch svelte-1oz6pv5"),u(H,"class","checkbox svelte-1oz6pv5"),u(H,"type","checkbox"),u(ie,"class","checkbox-number svelte-1oz6pv5"),u(W,"class","fact-switch svelte-1oz6pv5"),u(Q,"class","checkbox svelte-1oz6pv5"),u(Q,"type","checkbox"),u(ce,"class","checkbox-number svelte-1oz6pv5"),u(X,"class","fact-switch svelte-1oz6pv5"),u(Y,"class","multiplication-table svelte-1oz6pv5"),Ze(Y.src,Oe=ot)||u(Y,"src",Oe),u(Y,"alt","Multiplication Table")},m(T,F){B(T,t,F),s(t,n),s(n,l),s(l,i),i.checked=e[4][1],s(l,a),s(l,o),s(n,f),s(n,p),s(p,c),c.checked=e[4][2],s(p,y),s(p,d),s(n,E),s(n,m),s(m,h),h.checked=e[4][3],s(m,g),s(m,z),s(n,k),s(n,_),s(_,S),S.checked=e[4][4],s(_,J),s(_,A),s(n,M),s(n,v),s(v,w),w.checked=e[4][5],s(v,O),s(v,D),s(n,N),s(n,j),s(j,K),K.checked=e[4][6],s(j,me),s(j,ne),s(n,ge),s(n,U),s(U,R),R.checked=e[4][7],s(U,be),s(U,le),s(n,ke),s(n,V),s(V,G),G.checked=e[4][8],s(V,ze),s(V,se),s(n,ye),s(n,W),s(W,H),H.checked=e[4][9],s(W,we),s(W,ie),s(n,Se),s(n,X),s(X,Q),Q.checked=e[4][10],s(X,Ce),s(X,ce),s(t,Ee),s(t,Y),pe||(Me=[L(i,"change",e[8]),L(c,"change",e[9]),L(h,"change",e[10]),L(S,"change",e[11]),L(w,"change",e[12]),L(K,"change",e[13]),L(R,"change",e[14]),L(G,"change",e[15]),L(H,"change",e[16]),L(Q,"change",e[17])],pe=!0)},p(T,F){F&16&&(i.checked=T[4][1]),F&16&&(c.checked=T[4][2]),F&16&&(h.checked=T[4][3]),F&16&&(S.checked=T[4][4]),F&16&&(w.checked=T[4][5]),F&16&&(K.checked=T[4][6]),F&16&&(R.checked=T[4][7]),F&16&&(G.checked=T[4][8]),F&16&&(H.checked=T[4][9]),F&16&&(Q.checked=T[4][10])},d(T){T&&P(t),pe=!1,te(Me)}}}function Fe(e){let t,n=e[1],l=[];for(let i=0;i<n.length;i+=1)l[i]=Be(Le(e,n,i));return{c(){t=r("div");for(let i=0;i<l.length;i+=1)l[i].c();u(t,"class","problem-list")},m(i,a){B(i,t,a);for(let o=0;o<l.length;o+=1)l[o].m(t,null)},p(i,a){if(a&2){n=i[1];let o;for(o=0;o<n.length;o+=1){const f=Le(i,n,o);l[o]?l[o].p(f,a):(l[o]=Be(f),l[o].c(),l[o].m(t,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(i){i&&P(t),He(l,i)}}}function Be(e){let t,n,l=e[25].n1+"",i,a,o=e[25].n2+"",f,p,c,y,d,E;function m(){e[18].call(c,e[28],e[29])}return{c(){t=r("div"),n=r("span"),i=C(l),a=C(" * "),f=C(o),p=C(" = "),c=r("input"),y=b(),q(n,"font-size","18px"),u(c,"type","text"),u(c,"class","field svelte-1oz6pv5"),u(t,"class","problem svelte-1oz6pv5")},m(h,g){B(h,t,g),s(t,n),s(n,i),s(n,a),s(n,f),s(n,p),s(t,c),ae(c,e[25].result),s(t,y),d||(E=L(c,"input",m),d=!0)},p(h,g){e=h,g&2&&l!==(l=e[25].n1+"")&&I(i,l),g&2&&o!==(o=e[25].n2+"")&&I(f,o),g&2&&c.value!==e[25].result&&ae(c,e[25].result)},d(h){h&&P(t),d=!1,E()}}}function De(e){let t,n,l,i,a,o,f,p=e[1].length+"",c,y,d,E,m,h=Math.floor(e[5]/60)+"",g,z,k=e[5]%60<10?"0":"",_,S=e[5]%60+"",J,A=e[1],M=[];for(let v=0;v<A.length;v+=1)M[v]=Je(Ae(e,A,v));return{c(){t=r("div");for(let v=0;v<M.length;v+=1)M[v].c();n=b(),l=r("div"),i=r("b"),i.textContent="Score:",a=b(),o=C(e[3]),f=C(" / "),c=C(p),y=b(),d=r("div"),E=r("b"),E.textContent="Time:",m=b(),g=C(h),z=C(":"),_=C(k),J=C(S),u(t,"class","problem-list"),q(l,"margin-top","10px"),q(l,"font-size","30px"),q(d,"margin-top","5px"),q(d,"font-size","30px")},m(v,w){B(v,t,w);for(let O=0;O<M.length;O+=1)M[O].m(t,null);B(v,n,w),B(v,l,w),s(l,i),s(l,a),s(l,o),s(l,f),s(l,c),B(v,y,w),B(v,d,w),s(d,E),s(d,m),s(d,g),s(d,z),s(d,_),s(d,J)},p(v,w){if(w&2){A=v[1];let O;for(O=0;O<A.length;O+=1){const D=Ae(v,A,O);M[O]?M[O].p(D,w):(M[O]=Je(D),M[O].c(),M[O].m(t,null))}for(;O<M.length;O+=1)M[O].d(1);M.length=A.length}w&8&&I(o,v[3]),w&2&&p!==(p=v[1].length+"")&&I(c,p),w&32&&h!==(h=Math.floor(v[5]/60)+"")&&I(g,h),w&32&&k!==(k=v[5]%60<10?"0":"")&&I(_,k),w&32&&S!==(S=v[5]%60+"")&&I(J,S)},d(v){v&&P(t),He(M,v),v&&P(n),v&&P(l),v&&P(y),v&&P(d)}}}function Je(e){let t,n,l=e[25].n1+"",i,a,o=e[25].n2+"",f,p,c,y,d=x(e[25])?"":" "+e[25].n1*e[25].n2,E,m,h,g;function z(){e[19].call(c,e[26],e[27])}return{c(){t=r("div"),n=r("span"),i=C(l),a=C(" * "),f=C(o),p=C(" = "),c=r("input"),y=b(),E=C(d),m=b(),q(n,"font-size","18px"),u(c,"class","field svelte-1oz6pv5"),q(c,"background-color",x(e[25])?"lightgreen":"pink"),u(t,"class","problem svelte-1oz6pv5")},m(k,_){B(k,t,_),s(t,n),s(n,i),s(n,a),s(n,f),s(n,p),s(t,c),ae(c,e[25].result),s(t,y),s(t,E),s(t,m),h||(g=L(c,"input",z),h=!0)},p(k,_){e=k,_&2&&l!==(l=e[25].n1+"")&&I(i,l),_&2&&o!==(o=e[25].n2+"")&&I(f,o),_&2&&q(c,"background-color",x(e[25])?"lightgreen":"pink"),_&2&&c.value!==e[25].result&&ae(c,e[25].result),_&2&&d!==(d=x(e[25])?"":" "+e[25].n1*e[25].n2)&&I(E,d)},d(k){k&&P(t),h=!1,g()}}}function ut(e){let t,n,l,i,a,o,f,p,c,y,d,E,m=e[0]=="play"&&Pe(e),h=e[6]==!0&&Ie(),g=e[0]=="menu"&&qe(e),z=e[0]=="play"&&Fe(e),k=e[0]=="finish"&&De(e);return{c(){t=r("div"),n=r("button"),l=r("b"),i=C(e[2]),a=b(),m&&m.c(),o=b(),h&&h.c(),f=b(),p=r("div"),g&&g.c(),c=b(),z&&z.c(),y=b(),k&&k.c(),u(n,"id","button"),u(n,"class","btn svelte-1oz6pv5"),q(n,"margin-left","20px"),u(p,"class","app-container svelte-1oz6pv5"),u(t,"class","container svelte-1oz6pv5")},m(_,S){B(_,t,S),s(t,n),s(n,l),s(l,i),s(t,a),m&&m.m(t,null),s(t,o),h&&h.m(t,null),s(t,f),s(t,p),g&&g.m(p,null),s(p,c),z&&z.m(p,null),s(p,y),k&&k.m(p,null),d||(E=L(n,"click",e[7]),d=!0)},p(_,[S]){S&4&&I(i,_[2]),_[0]=="play"?m?m.p(_,S):(m=Pe(_),m.c(),m.m(t,o)):m&&(m.d(1),m=null),_[6]==!0?h||(h=Ie(),h.c(),h.m(t,f)):h&&(h.d(1),h=null),_[0]=="menu"?g?g.p(_,S):(g=qe(_),g.c(),g.m(p,c)):g&&(g.d(1),g=null),_[0]=="play"?z?z.p(_,S):(z=Fe(_),z.c(),z.m(p,y)):z&&(z.d(1),z=null),_[0]=="finish"?k?k.p(_,S):(k=De(_),k.c(),k.m(p,null)):k&&(k.d(1),k=null)},i:Z,o:Z,d(_){_&&P(t),m&&m.d(),h&&h.d(),g&&g.d(),z&&z.d(),k&&k.d(),d=!1,E()}}}function x(e){return e.result==""?!1:e.n1*e.n2==+e.result}async function rt(e){await fetch("http://api.buskiny.com/mult-table/save.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}function ft(e,t,n){let l=[],i="Start",a="menu",o=0,f={1:!1,2:!1,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!1},p=0,c=null,y=!1;localStorage.user==null&&(localStorage.user=new Date().toISOString());function d(){a=="menu"?Object.values(f).every(N=>N===!1)?n(6,y=!0):(n(1,l=h()),n(0,a="play"),c=setInterval(function(){n(5,p++,p)},1e3),n(6,y=!1)):a=="play"?(clearInterval(c),E(),rt({user:localStorage.user,date:new Date().toISOString(),timespend:p,score:o/l.length}),n(0,a="finish")):a=="finish"&&(n(5,p=0),n(0,a="menu"))}function E(){let N=0;for(let j of l)x(j)&&N++;n(3,o=N)}function m(N){for(;;){let j=Math.floor(Math.random()*10)+1;if(f[j])return j}}function h(){let N=[];for(let j=0;j<50;j++)N.push({n1:m(),n2:m(),result:""});return N}function g(){f[1]=this.checked,n(4,f)}function z(){f[2]=this.checked,n(4,f)}function k(){f[3]=this.checked,n(4,f)}function _(){f[4]=this.checked,n(4,f)}function S(){f[5]=this.checked,n(4,f)}function J(){f[6]=this.checked,n(4,f)}function A(){f[7]=this.checked,n(4,f)}function M(){f[8]=this.checked,n(4,f)}function v(){f[9]=this.checked,n(4,f)}function w(){f[10]=this.checked,n(4,f)}function O(N,j){N[j].result=this.value,n(1,l)}function D(N,j){N[j].result=this.value,n(1,l)}return e.$$.update=()=>{e.$$.dirty&1&&(a=="menu"&&n(2,i="Start"),a=="play"&&n(2,i="Finish"),a=="finish"&&n(2,i="Reset"))},[a,l,i,o,f,p,y,d,g,z,k,_,S,J,A,M,v,w,O,D]}class at extends Ye{constructor(t){super(),Xe(this,t,ft,ut,Ge,{})}}function pt(e){let t,n;return t=new at({}),{c(){it(t.$$.fragment)},m(l,i){Ve(t,l,i),n=!0},p:Z,i(l){n||(Ue(t.$$.fragment,l),n=!0)},o(l){st(t.$$.fragment,l),n=!1},d(l){We(t,l)}}}class ht extends Ye{constructor(t){super(),Xe(this,t,null,pt,Ge,{})}}new ht({target:document.getElementById("app")});
