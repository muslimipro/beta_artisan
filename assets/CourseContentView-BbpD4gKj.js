import{u as S}from"./useQuery-DitF0fdZ.js";import{d as C,D as B,b as M,c as s,a as t,t as d,l as e,F as v,f as y,o,g,A as V,C as F,j as w,v as N,i as R}from"./index-D_MW-M7q.js";import{u as $,S as j}from"./course-content-store-CAtTd1-r.js";import{Y as z}from"./yellow_star-CHjFodN-.js";import"./api-client-Bv44YFIR.js";import"./base-url-qR72hEjy.js";const D={class:"flex-none flex flex-col w-80 px-8 py-8 bg-zinc-50"},T={class:"flex-1 basis-1 flex-col text-black gap-1 overflow-y-auto"},q={class:"flex text-black w-full text-xl text-ellipsis pb-4 border-b"},E={class:"pr-2"},I=["src"],P=t("div",{class:"py-2"},null,-1),Y=["onClick"],A={class:"py-2 pr-2 bg-transparent text-black truncate text-ellipsis"},K=t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"},null,-1),L=[K],O=["onClick"],Q={class:"text-left truncate text-ellipsis"},W=C({__name:"CourseNavigationBar",props:{courseInfo:{}},setup(m){const c=m.courseInfo,l=$(),{openedModule:i,activeModuleIndex:u,activeTopicIndex:a}=B(l),{resizeModules:p,toggleModule:r,changeTopic:x}=l;return M(()=>{p(c.modules.length)}),(b,X)=>(o(),s("div",D,[t("div",T,[t("div",q,[t("h1",E,d(e(c).name),1),t("img",{src:e(z)},null,8,I)]),P,(o(!0),s(v,null,y(e(c).modules,(_,n)=>(o(),s("h2",{key:_.name},[t("button",{type:"button",onClick:f=>e(r)(n),class:"flex justify-between items-center w-full"},[t("span",A,d(_.name),1),(o(),s("svg",{class:g([e(i)[n]?"":"rotate-180","w-3 h-3 shrink-0"]),fill:"none",viewBox:"0 0 10 6"},L,2))],8,Y),t("div",null,[(o(!0),s(v,null,y(_.topics,(f,h)=>(o(),s("button",{key:f.id,class:g(["relative block w-full box-border h-8 px-4 py-1 border-l-2 hover:text-gray-800",[e(u)==n&&e(a)==h?"text-black border-black":"text-gray-500 border-gray-200",e(i)[n]||e(u)==n&&e(a)==h?"":"hidden"]]),onClick:Z=>e(x)(n,h)},[t("p",Q,d(f.name),1)],10,O))),128))])]))),128))])]))}}),G={class:"flex flex-col w-full bg-white"},H={key:0},J={key:1},U={key:2,class:"flex h-full"},ce=C({__name:"CourseContentView",setup(m){const k=$(),{setCourseInfo:c}=k,l=V(),{isPending:i,isError:u,data:a,error:p}=S({queryKey:[`skill/${l.params.id}`],queryFn:async()=>{const r=await j.getCourseInfoByID(l.params.id.toString());return c(r),F.replace({path:`/course/${r.id}/topic/${r.modules[0].topics[0].id}`}),r},refetchOnWindowFocus:!1});return(r,x)=>{const b=R("RouterView");return o(),s("div",G,[e(i)?(o(),s("div",H," Pending... ")):e(u)?(o(),s("div",J,d(e(p)),1)):e(a)?(o(),s("div",U,[w(W,{"course-info":e(a)},null,8,["course-info"]),w(b)])):N("",!0)])}}});export{ce as default};
