import{_ as $}from"./logo-black-BhklpmFU.js";import{o as c,c as d,a as e,d as b,r as m,u as S,w as P,b as z,e as D,t as y,n as F,F as A,f as V,g as B,p as H,h as M,_ as L,i as _,j as s,k as l,l as k,m as u,q as R}from"./index-D_MW-M7q.js";function I(n,o){return c(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}function E(n,o){return c(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const N=n=>(H("data-v-15a30df0"),n=n(),M(),n),O=["src"],T=N(()=>e("span",{class:"mdi mdi-chevron-down"},null,-1)),Z=[T],G=["onClick"],q=["src"],U=b({__name:"LocaleSwitcher",setup(n){const o=m([{src:"src/assets/en.png",label:"en"},{src:"src/assets/ru.png",label:"ru"}]),{locale:p}=S(),a=o.value.find(r=>r.label===p.value)||o.value[0],t=m(a),i=m(!1),g=m(null),h=()=>{i.value=!i.value},x=r=>{t.value=r,p.value=r.label,i.value=!1},f=r=>{g.value&&!g.value.contains(r.target)&&(i.value=!1)};return P(p,r=>{const w=o.value.find(v=>v.label===r)||o.value[0];t.value=w}),z(()=>{document.addEventListener("mousedown",f)}),D(()=>{document.removeEventListener("mousedown",f)}),(r,w)=>(c(),d("div",{ref_key:"dropdownRef",ref:g,class:"language-selector self-center px-4"},[e("div",{class:"selected-flag",onClick:h},[e("img",{src:t.value.src,alt:""},null,8,O),e("span",null,y(t.value.label),1),e("span",{class:"dropdown-icon",style:F({transform:i.value?"rotate(180deg)":"rotate(0deg)"})},Z,4)]),e("div",{class:B(["dropdown-content",{show:i.value}])},[(c(!0),d(A,null,V(o.value,(v,j)=>(c(),d("div",{key:j,onClick:ye=>x(v)},[e("img",{src:v.src,alt:""},null,8,q),e("span",null,y(v.label),1)],8,G))),128))],2)],512))}}),C=L(U,[["__scopeId","data-v-15a30df0"]]),J={class:"bg-white"},K={class:"mx-auto flex items-center justify-between p-0 px-8 border-b","aria-label":"Global"},Q={class:"flex lg:flex-1"},W=e("span",{class:"sr-only"},"Artisan",-1),X=e("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:$},null,-1),Y=e("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),ee={class:"flex lg:hidden"},se=e("span",{class:"sr-only"},"Open main menu",-1),te={class:"hidden lg:flex lg:flex-1 lg:justify-end"},oe=e("div",{class:"relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 hover:bg-gray-200"},[e("svg",{class:"absolute w-12 h-12 text-gray-400 -left-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})])],-1),le=e("div",{class:"fixed inset-0 z-10"},null,-1),ae={class:"flex items-center justify-between"},ne=e("span",{class:"sr-only"},"Artisan",-1),re=e("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:$},null,-1),ie=e("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),ce=e("span",{class:"sr-only"},"Close menu",-1),de={class:"mt-6 flow-root"},ue={class:"-my-6 divide-y divide-gray-500/10"},_e={class:"space-y-2 py-6"},pe={class:"py-6"},ge=b({__name:"Header",setup(n){const o=m(!1);return(p,a)=>{const t=_("RouterLink"),i=_("PopoverGroup"),g=_("router-link"),h=_("DialogPanel"),x=_("Dialog");return c(),d("header",J,[e("nav",K,[e("div",Q,[s(t,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:l(()=>[W,X,Y]),_:1})]),e("div",ee,[s(C),e("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:a[0]||(a[0]=f=>o.value=!0)},[se,s(k(I),{class:"size-6","aria-hidden":"true"})])]),s(i,{class:"hidden lg:flex lg:gap-x-12"},{default:l(()=>[s(t,{activeClass:"text-gray-900",to:"/projects",class:"text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500"},{default:l(()=>[u("Projects ")]),_:1}),s(t,{activeClass:"text-gray-900",to:"/skills",class:"text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500"},{default:l(()=>[u("Skills ")]),_:1}),s(t,{activeClass:"text-gray-900",to:"/tokens",class:"text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500"},{default:l(()=>[u("Tokens ")]),_:1})]),_:1}),e("div",te,[s(C),s(g,{to:"/profile"},{default:l(()=>[oe]),_:1})])]),s(x,{class:"lg:hidden",onClose:a[2]||(a[2]=f=>o.value=!1),open:o.value},{default:l(()=>[le,s(h,{class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:l(()=>[e("div",ae,[s(t,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:l(()=>[ne,re,ie]),_:1}),e("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-black",onClick:a[1]||(a[1]=f=>o.value=!1)},[ce,s(k(E),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",de,[e("div",ue,[e("div",_e,[s(t,{to:"/projects",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:l(()=>[u(" Projects")]),_:1}),s(t,{to:"/skills",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:l(()=>[u(" Skills")]),_:1}),s(t,{to:"/tokens",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:l(()=>[u(" Tokens")]),_:1})]),e("div",pe,[s(t,{to:"/profile",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:l(()=>[u(" Profile")]),_:1})])])])]),_:1})]),_:1},8,["open"])])}}}),fe="/assets/logo-Ds3l-s0O.svg",ve={},me={class:"bg-black shadow absolute bottom-0 w-full"},he=R('<div class="w-full mx-auto px-8 py-4"><div class="sm:flex sm:items-center sm:justify-between"><div class="flex items-center"><img class="h-8 pr-2" alt="Artisan Logo" src="'+fe+'"><span class="text-white text-l"><strong>Artisan</strong> - Art of Engineering Thinking </span></div><div class="flex items-center text-white justify-end"><span class="text-white text-sm"> © 2023 Artisan. All rights reserved. </span></div></div></div>',1),xe=[he];function be(n,o){return c(),d("footer",me,xe)}const we=L(ve,[["render",be]]),$e=b({__name:"HomePage",setup(n){return(o,p)=>{const a=_("RouterView"),t=_("v-main");return c(),d(A,null,[s(ge),s(t,{class:"flex flex-1 pb-16 bg-grey-lighten-3"},{default:l(()=>[s(a)]),_:1}),s(we)],64)}}});export{$e as default};
