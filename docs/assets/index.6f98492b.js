(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function $(){}function Ke(e){return e()}function Pe(){return Object.create(null)}function te(e){e.forEach(Ke)}function Ue(e){return typeof e=="function"}function We(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ue;function $e(e,t){return ue||(ue=document.createElement("a")),ue.href=t,e===ue.href}function xe(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function Ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function r(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function b(){return O(" ")}function j(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function et(e){return Array.from(e.childNodes)}function q(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function pe(e,t){e.value=t==null?"":t}function P(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let ve;function ee(e){ve=e}const x=[],Le=[],fe=[],Te=[],tt=Promise.resolve();let _e=!1;function nt(){_e||(_e=!0,tt.then(Ge))}function me(e){fe.push(e)}const de=new Set;let re=0;function Ge(){const e=ve;do{for(;re<x.length;){const t=x[re];re++,ee(t),lt(t.$$)}for(ee(null),x.length=0,re=0;Le.length;)Le.pop()();for(let t=0;t<fe.length;t+=1){const n=fe[t];de.has(n)||(de.add(n),n())}fe.length=0}while(x.length);for(;Te.length;)Te.pop()();_e=!1,de.clear(),ee(e)}function lt(e){if(e.fragment!==null){e.update(),te(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(me)}}const ae=new Set;let st;function He(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function it(e,t,n,l){if(e&&e.o){if(ae.has(e))return;ae.add(e),st.c.push(()=>{ae.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function ot(e){e&&e.c()}function Qe(e,t,n,l){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),l||me(()=>{const c=e.$$.on_mount.map(Ke).filter(Ue);e.$$.on_destroy?e.$$.on_destroy.push(...c):te(c),e.$$.on_mount=[]}),a.forEach(me)}function Ve(e,t){const n=e.$$;n.fragment!==null&&(te(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,t){e.$$.dirty[0]===-1&&(x.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Xe(e,t,n,l,i,a,c,f=[-1]){const p=ve;ee(e);const o=e.$$={fragment:null,ctx:[],props:a,update:$,not_equal:i,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:Pe(),dirty:f,skip_bound:!1,root:t.target||p.$$.root};c&&c(o.root);let w=!1;if(o.ctx=n?n(e,t.props||{},(h,E,...v)=>{const d=v.length?v[0]:E;return o.ctx&&i(o.ctx[h],o.ctx[h]=d)&&(!o.skip_bound&&o.bound[h]&&o.bound[h](d),w&&ct(e,h)),E}):[],o.update(),w=!0,te(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const h=et(t.target);o.fragment&&o.fragment.l(h),h.forEach(A)}else o.fragment&&o.fragment.c();t.intro&&He(e.$$.fragment),Qe(e,t.target,t.anchor,t.customElement),Ge()}ee(p)}class Ze{$destroy(){Ve(this,1),this.$destroy=$}$on(t,n){if(!Ue(n))return $;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!xe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=""+new URL("multiplication_charts.9606e05e.jpg",import.meta.url).href;function Ie(e,t,n){const l=e.slice();return l[27]=t[n],l[28]=t,l[29]=n,l}function je(e,t,n){const l=e.slice();return l[27]=t[n],l[30]=t,l[31]=n,l}function Ae(e){let t,n,l=Math.floor(e[5]/60)+"",i,a,c=e[5]%60+"",f;return{c(){t=r("span"),n=O("Min: "),i=O(l),a=O(" Sec: "),f=O(c),P(t,"margin-left","10px"),P(t,"font-size","larger")},m(p,o){B(p,t,o),s(t,n),s(t,i),s(t,a),s(t,f)},p(p,o){o[0]&32&&l!==(l=Math.floor(p[5]/60)+"")&&q(i,l),o[0]&32&&c!==(c=p[5]%60+"")&&q(f,c)},d(p){p&&A(t)}}}function qe(e){let t;return{c(){t=r("span"),t.textContent="Pick more facts",P(t,"margin-left","10px"),P(t,"font-size","larger")},m(n,l){B(n,t,l)},d(n){n&&A(t)}}}function Fe(e){let t,n,l,i,a,c,f,p,o,w,h,E,v,d,g,y,k,_,C,J,I,N,m,S,M,D,ne,R,z,L,le,ge,G,K,be,se,ke,H,U,ye,ie,ze,Q,W,we,oe,Se,V,Y,Ce,ce,Oe,X,Ee,Me,Z,he,Ne;return{c(){t=r("div"),n=r("div"),l=r("div"),i=r("input"),a=b(),c=r("span"),c.textContent="1",f=b(),p=r("div"),o=r("input"),w=b(),h=r("span"),h.textContent="2",E=b(),v=r("div"),d=r("input"),g=b(),y=r("span"),y.textContent="3",k=b(),_=r("div"),C=r("input"),J=b(),I=r("span"),I.textContent="4",N=b(),m=r("div"),S=r("input"),M=b(),D=r("span"),D.textContent="5",ne=b(),R=r("div"),z=r("input"),L=b(),le=r("span"),le.textContent="6",ge=b(),G=r("div"),K=r("input"),be=b(),se=r("span"),se.textContent="7",ke=b(),H=r("div"),U=r("input"),ye=b(),ie=r("span"),ie.textContent="8",ze=b(),Q=r("div"),W=r("input"),we=b(),oe=r("span"),oe.textContent="9",Se=b(),V=r("div"),Y=r("input"),Ce=b(),ce=r("span"),ce.textContent="10",Oe=b(),X=r("img"),Me=b(),Z=r("div"),Z.textContent="Pick the facts above. You can study with this multiplication table. When started, you will be given 50 multiplication problems, that you will need to solve. If you don't answer all of the problems, your score and time of this round won't count toward your statistics, so answer all of the problems.",u(i,"class","checkbox svelte-1oz6pv5"),u(i,"type","checkbox"),u(c,"class","checkbox-number svelte-1oz6pv5"),u(l,"class","fact-switch svelte-1oz6pv5"),u(o,"class","checkbox svelte-1oz6pv5"),u(o,"type","checkbox"),u(h,"class","checkbox-number svelte-1oz6pv5"),u(p,"class","fact-switch svelte-1oz6pv5"),u(d,"class","checkbox svelte-1oz6pv5"),u(d,"type","checkbox"),u(y,"class","checkbox-number svelte-1oz6pv5"),u(v,"class","fact-switch svelte-1oz6pv5"),u(C,"class","checkbox svelte-1oz6pv5"),u(C,"type","checkbox"),u(I,"class","checkbox-number svelte-1oz6pv5"),u(_,"class","fact-switch svelte-1oz6pv5"),u(S,"class","checkbox svelte-1oz6pv5"),u(S,"type","checkbox"),u(D,"class","checkbox-number svelte-1oz6pv5"),u(m,"class","fact-switch svelte-1oz6pv5"),u(z,"class","checkbox svelte-1oz6pv5"),u(z,"type","checkbox"),u(le,"class","checkbox-number svelte-1oz6pv5"),u(R,"class","fact-switch svelte-1oz6pv5"),u(K,"class","checkbox svelte-1oz6pv5"),u(K,"type","checkbox"),u(se,"class","checkbox-number svelte-1oz6pv5"),u(G,"class","fact-switch svelte-1oz6pv5"),u(U,"class","checkbox svelte-1oz6pv5"),u(U,"type","checkbox"),u(ie,"class","checkbox-number svelte-1oz6pv5"),u(H,"class","fact-switch svelte-1oz6pv5"),u(W,"class","checkbox svelte-1oz6pv5"),u(W,"type","checkbox"),u(oe,"class","checkbox-number svelte-1oz6pv5"),u(Q,"class","fact-switch svelte-1oz6pv5"),u(Y,"class","checkbox svelte-1oz6pv5"),u(Y,"type","checkbox"),u(ce,"class","checkbox-number svelte-1oz6pv5"),u(V,"class","fact-switch svelte-1oz6pv5"),u(X,"class","multiplication-table svelte-1oz6pv5"),$e(X.src,Ee=ut)||u(X,"src",Ee),u(X,"alt","Multiplication Table"),P(Z,"margin-top","12px"),P(Z,"font-size","20px"),P(Z,"line-height","1.4em")},m(T,F){B(T,t,F),s(t,n),s(n,l),s(l,i),i.checked=e[4][1],s(l,a),s(l,c),s(n,f),s(n,p),s(p,o),o.checked=e[4][2],s(p,w),s(p,h),s(n,E),s(n,v),s(v,d),d.checked=e[4][3],s(v,g),s(v,y),s(n,k),s(n,_),s(_,C),C.checked=e[4][4],s(_,J),s(_,I),s(n,N),s(n,m),s(m,S),S.checked=e[4][5],s(m,M),s(m,D),s(n,ne),s(n,R),s(R,z),z.checked=e[4][6],s(R,L),s(R,le),s(n,ge),s(n,G),s(G,K),K.checked=e[4][7],s(G,be),s(G,se),s(n,ke),s(n,H),s(H,U),U.checked=e[4][8],s(H,ye),s(H,ie),s(n,ze),s(n,Q),s(Q,W),W.checked=e[4][9],s(Q,we),s(Q,oe),s(n,Se),s(n,V),s(V,Y),Y.checked=e[4][10],s(V,Ce),s(V,ce),s(t,Oe),s(t,X),s(t,Me),s(t,Z),he||(Ne=[j(i,"change",e[9]),j(o,"change",e[10]),j(d,"change",e[11]),j(C,"change",e[12]),j(S,"change",e[13]),j(z,"change",e[14]),j(K,"change",e[15]),j(U,"change",e[16]),j(W,"change",e[17]),j(Y,"change",e[18])],he=!0)},p(T,F){F[0]&16&&(i.checked=T[4][1]),F[0]&16&&(o.checked=T[4][2]),F[0]&16&&(d.checked=T[4][3]),F[0]&16&&(C.checked=T[4][4]),F[0]&16&&(S.checked=T[4][5]),F[0]&16&&(z.checked=T[4][6]),F[0]&16&&(K.checked=T[4][7]),F[0]&16&&(U.checked=T[4][8]),F[0]&16&&(W.checked=T[4][9]),F[0]&16&&(Y.checked=T[4][10])},d(T){T&&A(t),he=!1,te(Ne)}}}function Be(e){let t,n=e[1],l=[];for(let i=0;i<n.length;i+=1)l[i]=De(je(e,n,i));return{c(){t=r("div");for(let i=0;i<l.length;i+=1)l[i].c();u(t,"class","problem-list")},m(i,a){B(i,t,a);for(let c=0;c<l.length;c+=1)l[c].m(t,null)},p(i,a){if(a[0]&2){n=i[1];let c;for(c=0;c<n.length;c+=1){const f=je(i,n,c);l[c]?l[c].p(f,a):(l[c]=De(f),l[c].c(),l[c].m(t,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(i){i&&A(t),Ye(l,i)}}}function De(e){let t,n,l=e[27].n1+"",i,a,c=e[27].n2+"",f,p,o,w,h,E;function v(){e[19].call(o,e[30],e[31])}return{c(){t=r("div"),n=r("span"),i=O(l),a=O(" * "),f=O(c),p=O(" = "),o=r("input"),w=b(),P(n,"font-size","18px"),u(o,"type","text"),u(o,"class","field svelte-1oz6pv5"),u(t,"class","problem svelte-1oz6pv5")},m(d,g){B(d,t,g),s(t,n),s(n,i),s(n,a),s(n,f),s(n,p),s(t,o),pe(o,e[27].result),s(t,w),h||(E=j(o,"input",v),h=!0)},p(d,g){e=d,g[0]&2&&l!==(l=e[27].n1+"")&&q(i,l),g[0]&2&&c!==(c=e[27].n2+"")&&q(f,c),g[0]&2&&o.value!==e[27].result&&pe(o,e[27].result)},d(d){d&&A(t),h=!1,E()}}}function Je(e){let t,n,l,i,a,c,f,p=e[1].length+"",o,w,h,E,v,d=Math.floor(e[5]/60)+"",g,y,k=e[5]%60<10?"0":"",_,C=e[5]%60+"",J,I=e[1],N=[];for(let m=0;m<I.length;m+=1)N[m]=Re(Ie(e,I,m));return{c(){t=r("div");for(let m=0;m<N.length;m+=1)N[m].c();n=b(),l=r("div"),i=r("b"),i.textContent="Score:",a=b(),c=O(e[3]),f=O(" / "),o=O(p),w=b(),h=r("div"),E=r("b"),E.textContent="Time:",v=b(),g=O(d),y=O(":"),_=O(k),J=O(C),u(t,"class","problem-list"),P(l,"margin-top","10px"),P(l,"font-size","30px"),P(h,"margin-top","5px"),P(h,"font-size","30px")},m(m,S){B(m,t,S);for(let M=0;M<N.length;M+=1)N[M].m(t,null);B(m,n,S),B(m,l,S),s(l,i),s(l,a),s(l,c),s(l,f),s(l,o),B(m,w,S),B(m,h,S),s(h,E),s(h,v),s(h,g),s(h,y),s(h,_),s(h,J)},p(m,S){if(S[0]&258){I=m[1];let M;for(M=0;M<I.length;M+=1){const D=Ie(m,I,M);N[M]?N[M].p(D,S):(N[M]=Re(D),N[M].c(),N[M].m(t,null))}for(;M<N.length;M+=1)N[M].d(1);N.length=I.length}S[0]&8&&q(c,m[3]),S[0]&2&&p!==(p=m[1].length+"")&&q(o,p),S[0]&32&&d!==(d=Math.floor(m[5]/60)+"")&&q(g,d),S[0]&32&&k!==(k=m[5]%60<10?"0":"")&&q(_,k),S[0]&32&&C!==(C=m[5]%60+"")&&q(J,C)},d(m){m&&A(t),Ye(N,m),m&&A(n),m&&A(l),m&&A(w),m&&A(h)}}}function Re(e){let t,n,l=e[27].n1+"",i,a,c=e[27].n2+"",f,p,o,w,h=e[8](e[27])?"":" "+e[27].n1*e[27].n2,E,v,d,g;function y(){e[20].call(o,e[28],e[29])}return{c(){t=r("div"),n=r("span"),i=O(l),a=O(" * "),f=O(c),p=O(" = "),o=r("input"),w=b(),E=O(h),v=b(),P(n,"font-size","18px"),u(o,"class","field svelte-1oz6pv5"),P(o,"background-color",e[8](e[27])?"lightgreen":"pink"),u(t,"class","problem svelte-1oz6pv5")},m(k,_){B(k,t,_),s(t,n),s(n,i),s(n,a),s(n,f),s(n,p),s(t,o),pe(o,e[27].result),s(t,w),s(t,E),s(t,v),d||(g=j(o,"input",y),d=!0)},p(k,_){e=k,_[0]&2&&l!==(l=e[27].n1+"")&&q(i,l),_[0]&2&&c!==(c=e[27].n2+"")&&q(f,c),_[0]&2&&P(o,"background-color",e[8](e[27])?"lightgreen":"pink"),_[0]&2&&o.value!==e[27].result&&pe(o,e[27].result),_[0]&2&&h!==(h=e[8](e[27])?"":" "+e[27].n1*e[27].n2)&&q(E,h)},d(k){k&&A(t),d=!1,g()}}}function rt(e){let t,n,l,i,a,c,f,p,o,w,h,E,v=e[0]=="play"&&Ae(e),d=e[6]==!0&&qe(),g=e[0]=="menu"&&Fe(e),y=e[0]=="play"&&Be(e),k=e[0]=="finish"&&Je(e);return{c(){t=r("div"),n=r("button"),l=r("b"),i=O(e[2]),a=b(),v&&v.c(),c=b(),d&&d.c(),f=b(),p=r("div"),g&&g.c(),o=b(),y&&y.c(),w=b(),k&&k.c(),u(n,"id","button"),u(n,"class","btn svelte-1oz6pv5"),P(n,"margin-left","20px"),u(p,"class","app-container svelte-1oz6pv5"),u(t,"class","container svelte-1oz6pv5")},m(_,C){B(_,t,C),s(t,n),s(n,l),s(l,i),s(t,a),v&&v.m(t,null),s(t,c),d&&d.m(t,null),s(t,f),s(t,p),g&&g.m(p,null),s(p,o),y&&y.m(p,null),s(p,w),k&&k.m(p,null),h||(E=j(n,"click",e[7]),h=!0)},p(_,C){C[0]&4&&q(i,_[2]),_[0]=="play"?v?v.p(_,C):(v=Ae(_),v.c(),v.m(t,c)):v&&(v.d(1),v=null),_[6]==!0?d||(d=qe(),d.c(),d.m(t,f)):d&&(d.d(1),d=null),_[0]=="menu"?g?g.p(_,C):(g=Fe(_),g.c(),g.m(p,o)):g&&(g.d(1),g=null),_[0]=="play"?y?y.p(_,C):(y=Be(_),y.c(),y.m(p,w)):y&&(y.d(1),y=null),_[0]=="finish"?k?k.p(_,C):(k=Je(_),k.c(),k.m(p,null)):k&&(k.d(1),k=null)},i:$,o:$,d(_){_&&A(t),v&&v.d(),d&&d.d(),g&&g.d(),y&&y.d(),k&&k.d(),h=!1,E()}}}async function ft(e){await fetch("https://buskin.maintstar.co/mult-table/save.php",{method:"POST",body:JSON.stringify(e)});let t=await fetch("https://buskin.maintstar.co/mult-table/load.php",{method:"POST",body:JSON.stringify({user:e.user})});console.log("load",t)}function at(e,t,n){let l=[],i="Start",a="menu",c=0,f={1:!1,2:!1,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!1},p=0,o=null,w=!1,h=!0;localStorage.user==null&&(localStorage.user=new Date().toISOString());function E(){a=="menu"?Object.values(f).every(z=>z===!1)?n(6,w=!0):(n(1,l=y()),n(0,a="play"),o=setInterval(function(){n(5,p++,p)},1e3),n(6,w=!1)):a=="play"?(clearInterval(o),v(),h==!0&&ft({user:localStorage.user,date:new Date().toISOString(),timespend:p,score:c/l.length}),n(0,a="finish")):a=="finish"&&(n(5,p=0),h=!0,n(0,a="menu"))}function v(){let z=0;for(let L of l)d(L)&&z++;n(3,c=z)}function d(z){return z.result==""?(h=!1,!1):z.n1*z.n2==+z.result}function g(z){for(;;){let L=Math.floor(Math.random()*10)+1;if(f[L])return L}}function y(){let z=[];for(let L=0;L<50;L++)z.push({n1:g(),n2:g(),result:""});return z}function k(){f[1]=this.checked,n(4,f)}function _(){f[2]=this.checked,n(4,f)}function C(){f[3]=this.checked,n(4,f)}function J(){f[4]=this.checked,n(4,f)}function I(){f[5]=this.checked,n(4,f)}function N(){f[6]=this.checked,n(4,f)}function m(){f[7]=this.checked,n(4,f)}function S(){f[8]=this.checked,n(4,f)}function M(){f[9]=this.checked,n(4,f)}function D(){f[10]=this.checked,n(4,f)}function ne(z,L){z[L].result=this.value,n(1,l)}function R(z,L){z[L].result=this.value,n(1,l)}return e.$$.update=()=>{e.$$.dirty[0]&1&&(a=="menu"&&n(2,i="Start"),a=="play"&&n(2,i="Finish"),a=="finish"&&n(2,i="Reset"))},[a,l,i,c,f,p,w,E,d,k,_,C,J,I,N,m,S,M,D,ne,R]}class pt extends Ze{constructor(t){super(),Xe(this,t,at,rt,We,{},null,[-1,-1])}}function ht(e){let t,n;return t=new pt({}),{c(){ot(t.$$.fragment)},m(l,i){Qe(t,l,i),n=!0},p:$,i(l){n||(He(t.$$.fragment,l),n=!0)},o(l){it(t.$$.fragment,l),n=!1},d(l){Ve(t,l)}}}class dt extends Ze{constructor(t){super(),Xe(this,t,null,ht,We,{})}}new dt({target:document.getElementById("app")});
