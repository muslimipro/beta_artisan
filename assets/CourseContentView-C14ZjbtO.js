import{u as B}from"./useQuery-DiqQkp-A.js";import{d as $,K as M,b as V,o as r,c,a as n,t as f,q as e,F as b,i as g,j as w,l as F,J as N,f as R,m as C,v as j}from"./index-BysqhvNz.js";import{S as q}from"./SkillService-T1-GH8jI.js";import{Y as z}from"./yellow_star-CHjFodN-.js";import{u as S}from"./course-content-store-EBJL2aRS.js";import"./api-client-CiB1lw-F.js";import"./base-url-qR72hEjy.js";const A={class:"flex-none flex flex-col w-80 px-8 py-8 bg-zinc-50"},T={class:"flex-1 basis-1 flex-col text-black gap-1 overflow-y-auto"},D={class:"flex text-black w-full text-xl text-ellipsis pb-4 border-b"},E={class:"pr-2"},K=["src"],P=n("div",{class:"py-2"},null,-1),Y=["onClick"],J={class:"py-2 pr-2 bg-transparent text-black truncate text-ellipsis"},L=n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"},null,-1),O=[L],Q=["onClick"],W={class:"text-left truncate text-ellipsis"},G=$({__name:"CourseNavigationBar",props:{courseInfo:{}},setup(k){const i=k.courseInfo,a=S(),{openedModule:l,activeModuleIndex:d,activeTopicIndex:u}=M(a),{resizeModules:_,toggleModule:h,changeTopic:m}=a;return V(()=>{_(i.modules.length)}),(t,p)=>(r(),c("div",A,[n("div",T,[n("div",D,[n("h1",E,f(e(i).name),1),n("img",{src:e(z)},null,8,K)]),P,(r(!0),c(b,null,g(e(i).modules,(s,o)=>(r(),c("h2",{key:s.name},[n("button",{type:"button",onClick:x=>e(h)(o),class:"flex justify-between items-center w-full"},[n("span",J,f(s.name),1),(r(),c("svg",{class:w([e(l)[o]?"":"rotate-180","w-3 h-3 shrink-0"]),fill:"none",viewBox:"0 0 10 6"},O,2))],8,Y),n("div",null,[(r(!0),c(b,null,g(s.topics,(x,v)=>(r(),c("button",{key:x.id,class:w(["relative block w-full box-border h-8 px-4 py-1 border-l-2 hover:text-gray-800",[e(d)==o&&e(u)==v?"text-red border-black":"text-gray-500 border-gray-200",e(l)[o]||e(d)==o&&e(u)==v?"":"hidden"]]),onClick:Z=>e(m)(o,v)},[n("p",W,f(x.name),1)],10,Q))),128))])]))),128))])]))}}),H={class:"flex flex-col w-full bg-white"},I={key:0},U={key:1},X={key:2,class:"flex h-full"},ie=$({__name:"CourseContentView",setup(k){const y=S(),{setCourseInfo:i,setActives:a}=y,l=F(),{isPending:d,isError:u,data:_,error:h}=B({queryKey:[`skill/${l.params.id}`],queryFn:async()=>{const t=await q.getCourseInfoByID(l.params.id.toString());return i(t),m(t),N.replace({path:`/course/${t.id}/topic/${t.last_accessed_topic.id}`}),t},refetchOnWindowFocus:!1});async function m(t){var p;for(let s=0;s<t.modules.length;s++)for(let o=0;o<t.modules[s].topics.length;o++)if(t.last_accessed_topic.id==t.modules[s].topics[o].id){a(s,o,(((p=t.last_accessed_topic.last_accessed_step)==null?void 0:p.order)??1)-1);return}}return(t,p)=>{const s=R("RouterView");return r(),c("div",H,[e(d)?(r(),c("div",I," Pending... ")):e(u)?(r(),c("div",U,f(e(h)),1)):e(_)?(r(),c("div",X,[C(G,{"course-info":e(_)},null,8,["course-info"]),C(s)])):j("",!0)])}}});export{ie as default};
