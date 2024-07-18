import{M as ot}from"./marked.esm-BQIPxdfW.js";import{d as lt,r as ut,k as ft,u as Z,c as re,t as gt,a as ht,l as pt,p as dt,o as ce}from"./index-BOBxir3k.js";import{u as bt}from"./useQuery-bi_TIbF3.js";import{b as we}from"./base-url-qR72hEjy.js";import{u as Et}from"./api-BdU9zcXV.js";function _t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ve(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],a=typeof n;(a==="object"||a==="function")&&!Object.isFrozen(n)&&ve(n)}),e}class xe{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ie(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function P(e,...t){const n=Object.create(null);for(const a in e)n[a]=e[a];return t.forEach(function(a){for(const b in a)n[b]=a[b]}),n}const yt="</span>",Re=e=>!!e.scope,wt=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((a,b)=>`${a}${"_".repeat(b+1)}`)].join(" ")}return`${t}${e}`};class xt{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Ie(t)}openNode(t){if(!Re(t))return;const n=wt(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Re(t)&&(this.buffer+=yt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Se=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class oe{constructor(){this.rootNode=Se(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Se({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(a=>this._walk(t,a)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{oe._collapse(n)}))}}class Rt extends oe{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const a=t.root;n&&(a.scope=`language:${n}`),this.add(a)}toHTML(){return new xt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function F(e){return e?typeof e=="string"?e:e.source:null}function Ce(e){return $("(?=",e,")")}function St(e){return $("(?:",e,")*")}function Mt(e){return $("(?:",e,")?")}function $(...e){return e.map(n=>F(n)).join("")}function Ot(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function le(...e){return"("+(Ot(e).capture?"":"?:")+e.map(a=>F(a)).join("|")+")"}function De(e){return new RegExp(e.toString()+"|").exec("").length-1}function At(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Nt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ue(e,{joinWith:t}){let n=0;return e.map(a=>{n+=1;const b=n;let E=F(a),c="";for(;E.length>0;){const r=Nt.exec(E);if(!r){c+=E;break}c+=E.substring(0,r.index),E=E.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?c+="\\"+String(Number(r[1])+b):(c+=r[0],r[0]==="("&&n++)}return c}).map(a=>`(${a})`).join(t)}const Tt=/\b\B/,Pe="[a-zA-Z]\\w*",fe="[a-zA-Z_]\\w*",me="\\b\\d+(\\.\\d+)?",He="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",$e="\\b(0b[01]+)",kt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Bt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=$(t,/.*\b/,e.binary,/\b.*/)),P({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,a)=>{n.index!==0&&a.ignoreMatch()}},e)},K={begin:"\\\\[\\s\\S]",relevance:0},Lt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[K]},vt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[K]},It={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ee=function(e,t,n={}){const a=P({scope:"comment",begin:e,end:t,contains:[]},n);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const b=le("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:$(/[ ]+/,"(",b,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},Ct=ee("//","$"),Dt=ee("/\\*","\\*/"),Pt=ee("#","$"),mt={scope:"number",begin:me,relevance:0},Ht={scope:"number",begin:He,relevance:0},$t={scope:"number",begin:$e,relevance:0},jt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[K,{begin:/\[/,end:/\]/,relevance:0,contains:[K]}]},Ut={scope:"title",begin:Pe,relevance:0},Ft={scope:"title",begin:fe,relevance:0},Kt={begin:"\\.\\s*"+fe,relevance:0},Gt=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var q=Object.freeze({__proto__:null,APOS_STRING_MODE:Lt,BACKSLASH_ESCAPE:K,BINARY_NUMBER_MODE:$t,BINARY_NUMBER_RE:$e,COMMENT:ee,C_BLOCK_COMMENT_MODE:Dt,C_LINE_COMMENT_MODE:Ct,C_NUMBER_MODE:Ht,C_NUMBER_RE:He,END_SAME_AS_BEGIN:Gt,HASH_COMMENT_MODE:Pt,IDENT_RE:Pe,MATCH_NOTHING_RE:Tt,METHOD_GUARD:Kt,NUMBER_MODE:mt,NUMBER_RE:me,PHRASAL_WORDS_MODE:It,QUOTE_STRING_MODE:vt,REGEXP_MODE:jt,RE_STARTERS_RE:kt,SHEBANG:Bt,TITLE_MODE:Ut,UNDERSCORE_IDENT_RE:fe,UNDERSCORE_TITLE_MODE:Ft});function Wt(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function zt(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Xt(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Wt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Yt(e,t){Array.isArray(e.illegal)&&(e.illegal=le(...e.illegal))}function Jt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Vt(e,t){e.relevance===void 0&&(e.relevance=1)}const Zt=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=n.keywords,e.begin=$(n.beforeMatch,Ce(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},qt=["of","and","for","in","not","or","if","then","parent","list","value"],Qt="keyword";function je(e,t,n=Qt){const a=Object.create(null);return typeof e=="string"?b(n,e.split(" ")):Array.isArray(e)?b(n,e):Object.keys(e).forEach(function(E){Object.assign(a,je(e[E],t,E))}),a;function b(E,c){t&&(c=c.map(r=>r.toLowerCase())),c.forEach(function(r){const l=r.split("|");a[l[0]]=[E,en(l[0],l[1])]})}}function en(e,t){return t?Number(t):tn(e)?0:1}function tn(e){return qt.includes(e.toLowerCase())}const Me={},H=e=>{console.error(e)},Oe=(e,...t)=>{console.log(`WARN: ${e}`,...t)},j=(e,t)=>{Me[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Me[`${e}/${t}`]=!0)},Q=new Error;function Ue(e,t,{key:n}){let a=0;const b=e[n],E={},c={};for(let r=1;r<=t.length;r++)c[r+a]=b[r],E[r+a]=!0,a+=De(t[r-1]);e[n]=c,e[n]._emit=E,e[n]._multi=!0}function nn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw H("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Q;if(typeof e.beginScope!="object"||e.beginScope===null)throw H("beginScope must be object"),Q;Ue(e,e.begin,{key:"beginScope"}),e.begin=ue(e.begin,{joinWith:""})}}function sn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw H("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Q;if(typeof e.endScope!="object"||e.endScope===null)throw H("endScope must be object"),Q;Ue(e,e.end,{key:"endScope"}),e.end=ue(e.end,{joinWith:""})}}function rn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function cn(e){rn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),nn(e),sn(e)}function an(e){function t(c,r){return new RegExp(F(c),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=De(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=t(ue(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const _=l.findIndex((M,A)=>A>0&&M!==void 0),p=this.matchIndexes[_];return l.splice(0,_),Object.assign(l,p)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new n;return this.rules.slice(r).forEach(([_,p])=>l.addRule(_,p)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),l.type==="begin"&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let _=l.exec(r);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const p=this.getMatcher(0);p.lastIndex=this.lastIndex+1,_=p.exec(r)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function b(c){const r=new a;return c.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),c.terminatorEnd&&r.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&r.addRule(c.illegal,{type:"illegal"}),r}function E(c,r){const l=c;if(c.isCompiled)return l;[zt,Jt,cn,Zt].forEach(p=>p(c,r)),e.compilerExtensions.forEach(p=>p(c,r)),c.__beforeBegin=null,[Xt,Yt,Vt].forEach(p=>p(c,r)),c.isCompiled=!0;let _=null;return typeof c.keywords=="object"&&c.keywords.$pattern&&(c.keywords=Object.assign({},c.keywords),_=c.keywords.$pattern,delete c.keywords.$pattern),_=_||/\w+/,c.keywords&&(c.keywords=je(c.keywords,e.case_insensitive)),l.keywordPatternRe=t(_,!0),r&&(c.begin||(c.begin=/\B|\b/),l.beginRe=t(l.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(l.endRe=t(l.end)),l.terminatorEnd=F(l.end)||"",c.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(c.end?"|":"")+r.terminatorEnd)),c.illegal&&(l.illegalRe=t(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(p){return on(p==="self"?c:p)})),c.contains.forEach(function(p){E(p,l)}),c.starts&&E(c.starts,r),l.matcher=b(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=P(e.classNameAliases||{}),E(e)}function Fe(e){return e?e.endsWithParent||Fe(e.starts):!1}function on(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return P(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Fe(e)?P(e,{starts:e.starts?P(e.starts):null}):Object.isFrozen(e)?P(e):e}var ln="11.10.0";class un extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const ae=Ie,Ae=P,Ne=Symbol("nomatch"),fn=7,Ke=function(e){const t=Object.create(null),n=Object.create(null),a=[];let b=!0;const E="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Rt};function l(i){return r.noHighlightRe.test(i)}function _(i){let u=i.className+" ";u+=i.parentNode?i.parentNode.className:"";const h=r.languageDetectRe.exec(u);if(h){const y=C(h[1]);return y||(Oe(E.replace("{}",h[1])),Oe("Falling back to no-highlight mode for this block.",i)),y?h[1]:"no-highlight"}return u.split(/\s+/).find(y=>l(y)||C(y))}function p(i,u,h){let y="",x="";typeof u=="object"?(y=i,h=u.ignoreIllegals,x=u.language):(j("10.7.0","highlight(lang, code, ...args) has been deprecated."),j("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),x=i,y=u),h===void 0&&(h=!0);const N={code:y,language:x};X("before:highlight",N);const D=N.result?N.result:M(N.language,N.code,h);return D.code=N.code,X("after:highlight",D),D}function M(i,u,h,y){const x=Object.create(null);function N(s,o){return s.keywords[o]}function D(){if(!f.keywords){R.addText(w);return}let s=0;f.keywordPatternRe.lastIndex=0;let o=f.keywordPatternRe.exec(w),g="";for(;o;){g+=w.substring(s,o.index);const d=B.case_insensitive?o[0].toLowerCase():o[0],S=N(f,d);if(S){const[L,ct]=S;if(R.addText(g),g="",x[d]=(x[d]||0)+1,x[d]<=fn&&(V+=ct),L.startsWith("_"))g+=o[0];else{const at=B.classNameAliases[L]||L;k(o[0],at)}}else g+=o[0];s=f.keywordPatternRe.lastIndex,o=f.keywordPatternRe.exec(w)}g+=w.substring(s),R.addText(g)}function Y(){if(w==="")return;let s=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){R.addText(w);return}s=M(f.subLanguage,w,!0,ye[f.subLanguage]),ye[f.subLanguage]=s._top}else s=T(w,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(V+=s.relevance),R.__addSublanguage(s._emitter,s.language)}function O(){f.subLanguage!=null?Y():D(),w=""}function k(s,o){s!==""&&(R.startScope(o),R.addText(s),R.endScope())}function de(s,o){let g=1;const d=o.length-1;for(;g<=d;){if(!s._emit[g]){g++;continue}const S=B.classNameAliases[s[g]]||s[g],L=o[g];S?k(L,S):(w=L,D(),w=""),g++}}function be(s,o){return s.scope&&typeof s.scope=="string"&&R.openNode(B.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(k(w,B.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),w=""):s.beginScope._multi&&(de(s.beginScope,o),w="")),f=Object.create(s,{parent:{value:f}}),f}function Ee(s,o,g){let d=At(s.endRe,g);if(d){if(s["on:end"]){const S=new xe(s);s["on:end"](o,S),S.isMatchIgnored&&(d=!1)}if(d){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return Ee(s.parent,o,g)}function tt(s){return f.matcher.regexIndex===0?(w+=s[0],1):(se=!0,0)}function nt(s){const o=s[0],g=s.rule,d=new xe(g),S=[g.__beforeBegin,g["on:begin"]];for(const L of S)if(L&&(L(s,d),d.isMatchIgnored))return tt(o);return g.skip?w+=o:(g.excludeBegin&&(w+=o),O(),!g.returnBegin&&!g.excludeBegin&&(w=o)),be(g,s),g.returnBegin?0:o.length}function it(s){const o=s[0],g=u.substring(s.index),d=Ee(f,s,g);if(!d)return Ne;const S=f;f.endScope&&f.endScope._wrap?(O(),k(o,f.endScope._wrap)):f.endScope&&f.endScope._multi?(O(),de(f.endScope,s)):S.skip?w+=o:(S.returnEnd||S.excludeEnd||(w+=o),O(),S.excludeEnd&&(w=o));do f.scope&&R.closeNode(),!f.skip&&!f.subLanguage&&(V+=f.relevance),f=f.parent;while(f!==d.parent);return d.starts&&be(d.starts,s),S.returnEnd?0:o.length}function st(){const s=[];for(let o=f;o!==B;o=o.parent)o.scope&&s.unshift(o.scope);s.forEach(o=>R.openNode(o))}let J={};function _e(s,o){const g=o&&o[0];if(w+=s,g==null)return O(),0;if(J.type==="begin"&&o.type==="end"&&J.index===o.index&&g===""){if(w+=u.slice(o.index,o.index+1),!b){const d=new Error(`0 width match regex (${i})`);throw d.languageName=i,d.badRule=J.rule,d}return 1}if(J=o,o.type==="begin")return nt(o);if(o.type==="illegal"&&!h){const d=new Error('Illegal lexeme "'+g+'" for mode "'+(f.scope||"<unnamed>")+'"');throw d.mode=f,d}else if(o.type==="end"){const d=it(o);if(d!==Ne)return d}if(o.type==="illegal"&&g==="")return 1;if(ie>1e5&&ie>o.index*3)throw new Error("potential infinite loop, way more iterations than matches");return w+=g,g.length}const B=C(i);if(!B)throw H(E.replace("{}",i)),new Error('Unknown language: "'+i+'"');const rt=an(B);let ne="",f=y||rt;const ye={},R=new r.__emitter(r);st();let w="",V=0,m=0,ie=0,se=!1;try{if(B.__emitTokens)B.__emitTokens(u,R);else{for(f.matcher.considerAll();;){ie++,se?se=!1:f.matcher.considerAll(),f.matcher.lastIndex=m;const s=f.matcher.exec(u);if(!s)break;const o=u.substring(m,s.index),g=_e(o,s);m=s.index+g}_e(u.substring(m))}return R.finalize(),ne=R.toHTML(),{language:i,value:ne,relevance:V,illegal:!1,_emitter:R,_top:f}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:i,value:ae(u),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:m,context:u.slice(m-100,m+100),mode:s.mode,resultSoFar:ne},_emitter:R};if(b)return{language:i,value:ae(u),illegal:!1,relevance:0,errorRaised:s,_emitter:R,_top:f};throw s}}function A(i){const u={value:ae(i),illegal:!1,relevance:0,_top:c,_emitter:new r.__emitter(r)};return u._emitter.addText(i),u}function T(i,u){u=u||r.languages||Object.keys(t);const h=A(i),y=u.filter(C).filter(pe).map(O=>M(O,i,!1));y.unshift(h);const x=y.sort((O,k)=>{if(O.relevance!==k.relevance)return k.relevance-O.relevance;if(O.language&&k.language){if(C(O.language).supersetOf===k.language)return 1;if(C(k.language).supersetOf===O.language)return-1}return 0}),[N,D]=x,Y=N;return Y.secondBest=D,Y}function v(i,u,h){const y=u&&n[u]||h;i.classList.add("hljs"),i.classList.add(`language-${y}`)}function I(i){let u=null;const h=_(i);if(l(h))return;if(X("before:highlightElement",{el:i,language:h}),i.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",i);return}if(i.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(i)),r.throwUnescapedHTML))throw new un("One of your code blocks includes unescaped HTML.",i.innerHTML);u=i;const y=u.textContent,x=h?p(y,{language:h,ignoreIllegals:!0}):T(y);i.innerHTML=x.value,i.dataset.highlighted="yes",v(i,h,x.language),i.result={language:x.language,re:x.relevance,relevance:x.relevance},x.secondBest&&(i.secondBest={language:x.secondBest.language,relevance:x.secondBest.relevance}),X("after:highlightElement",{el:i,result:x,text:y})}function te(i){r=Ae(r,i)}const W=()=>{z(),j("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ze(){z(),j("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ge=!1;function z(){if(document.readyState==="loading"){ge=!0;return}document.querySelectorAll(r.cssSelector).forEach(I)}function Xe(){ge&&z()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Xe,!1);function Ye(i,u){let h=null;try{h=u(e)}catch(y){if(H("Language definition for '{}' could not be registered.".replace("{}",i)),b)H(y);else throw y;h=c}h.name||(h.name=i),t[i]=h,h.rawDefinition=u.bind(null,e),h.aliases&&he(h.aliases,{languageName:i})}function Je(i){delete t[i];for(const u of Object.keys(n))n[u]===i&&delete n[u]}function Ve(){return Object.keys(t)}function C(i){return i=(i||"").toLowerCase(),t[i]||t[n[i]]}function he(i,{languageName:u}){typeof i=="string"&&(i=[i]),i.forEach(h=>{n[h.toLowerCase()]=u})}function pe(i){const u=C(i);return u&&!u.disableAutodetect}function Ze(i){i["before:highlightBlock"]&&!i["before:highlightElement"]&&(i["before:highlightElement"]=u=>{i["before:highlightBlock"](Object.assign({block:u.el},u))}),i["after:highlightBlock"]&&!i["after:highlightElement"]&&(i["after:highlightElement"]=u=>{i["after:highlightBlock"](Object.assign({block:u.el},u))})}function qe(i){Ze(i),a.push(i)}function Qe(i){const u=a.indexOf(i);u!==-1&&a.splice(u,1)}function X(i,u){const h=i;a.forEach(function(y){y[h]&&y[h](u)})}function et(i){return j("10.7.0","highlightBlock will be removed entirely in v12.0"),j("10.7.0","Please use highlightElement now."),I(i)}Object.assign(e,{highlight:p,highlightAuto:T,highlightAll:z,highlightElement:I,highlightBlock:et,configure:te,initHighlighting:W,initHighlightingOnLoad:ze,registerLanguage:Ye,unregisterLanguage:Je,listLanguages:Ve,getLanguage:C,registerAliases:he,autoDetection:pe,inherit:Ae,addPlugin:qe,removePlugin:Qe}),e.debugMode=function(){b=!1},e.safeMode=function(){b=!0},e.versionString=ln,e.regex={concat:$,lookahead:Ce,either:le,optional:Mt,anyNumberOfTimes:St};for(const i in q)typeof q[i]=="object"&&ve(q[i]);return Object.assign(e,q),e},U=Ke({});U.newInstance=()=>Ke({});var gn=U;U.HighlightJS=U;U.default=U;const G=_t(gn);function hn(e){const t=e.regex,n=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],r={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},_={className:"subst",begin:/\{/,end:/\}/,keywords:r,illegal:/#/},p={begin:/\{\{/,relevance:0},M={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,l,p,_]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,l,p,_]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,p,_]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,p,_]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},A="[0-9](_?[0-9])*",T=`(\\b(${A}))?\\.(${A})|\\b(${A})\\.`,v=`\\b|${a.join("|")}`,I={className:"number",relevance:0,variants:[{begin:`(\\b(${A})|(${T}))[eE][+-]?(${A})[jJ]?(?=${v})`},{begin:`(${T})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${v})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${v})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`},{begin:`\\b(${A})[jJ](?=${v})`}]},te={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:r,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},W={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:["self",l,I,M,e.HASH_COMMENT_MODE]}]};return _.contains=[M,I,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:r,illegal:/(<\/|\?)|=>/,contains:[l,I,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},M,te,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[W]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[I,W,M]}]}}function pn(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}function dn(e){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}function bn(e){if(typeof e=="function"&&(e={highlight:e}),!e||typeof e.highlight!="function")throw new Error("Must provide highlight function");return typeof e.langPrefix!="string"&&(e.langPrefix="language-"),{async:!!e.async,walkTokens(t){if(t.type!=="code")return;const n=Te(t.lang);if(e.async)return Promise.resolve(e.highlight(t.text,n,t.lang||"")).then(ke(t));const a=e.highlight(t.text,n,t.lang||"");if(a instanceof Promise)throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");ke(t)(a)},useNewRenderer:!0,renderer:{code(t,n,a){typeof t=="object"&&(a=t.escaped,n=t.lang,t=t.text);const b=Te(n),E=b?` class="${e.langPrefix}${Le(b)}"`:"";return t=t.replace(/\n$/,""),`<pre><code${E}>${a?t:Le(t,!0)}
</code></pre>`}}}}function Te(e){return(e||"").match(/\S*/)[0]}function ke(e){return t=>{typeof t=="string"&&t!==e.text&&(e.escaped=!0,e.text=t)}}const Ge=/[&<>"']/,En=new RegExp(Ge.source,"g"),We=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,_n=new RegExp(We.source,"g"),yn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Be=e=>yn[e];function Le(e,t){if(t){if(Ge.test(e))return e.replace(En,Be)}else if(We.test(e))return e.replace(_n,Be);return e}G.registerLanguage("python",hn);G.registerLanguage("plaintext",pn);G.registerLanguage("shell",dn);const wn=new ot(bn({langPrefix:"hljs language-",highlight(e,t,n){const a=G.getLanguage(t)?t:"plaintext";return G.highlight(e,{language:a}).value}})),xn={key:0},Rn={key:1},Sn={key:2,class:"flex w-full justify-center"},Mn=["innerHTML"],Bn=lt({__name:"TokenContentView",setup(e){const{fetchAPI:t}=Et(),n=dt(),a=ut(""),b=async()=>{const p=await t(`${we}/tokens/${n.params.id}`).then(T=>T.json()),M=p.path,A=await t(`${we}/${M}`).then(T=>T.text());return a.value=A,p},{isPending:E,isError:c,isSuccess:r,error:l}=bt({queryKey:[`tokens:${n.params.id}`],queryFn:b}),_=ft(()=>wn.parse(a.value));return(p,M)=>Z(E)?(ce(),re("div",xn," Pending ")):Z(c)?(ce(),re("span",Rn,"Error: "+gt(Z(l)),1)):Z(r)?(ce(),re("div",Sn,[ht("div",{class:"content markdown-body w-8/12",innerHTML:_.value},null,8,Mn)])):pt("",!0)}});export{Bn as default};