import{u as x}from"./course-content-store-H_NT2aE5.js";import{u as B}from"./useQuery-iqdx9jcJ.js";import{S as V}from"./SkillService-Bb3D5TfH.js";import{o as a,c as i,a as f,d as b,K as q,i as C,F as N,f as R,l as e,B as n,k as m,m as _,g as u,q as S,H as T,r as j,w as D,t as E,j as v,J as F}from"./index-BQo8HGay.js";import"./api-client-A--2tcaO.js";import"./base-url-qR72hEjy.js";function z(k,r){return a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const K={class:"flex sticky bottom-0 self-start bg-white border p-2 rounded-lg my-4 mx-8"},L=["onClick"],P=b({__name:"StepNavigationBar",setup(k){const r=x(),{activeStepIndex:s,currentSteps:o}=q(r),{changeStep:l}=r;return(w,y)=>{const c=C("v-icon");return a(),i("div",K,[(a(!0),i(N,null,R(e(o),(h,t)=>(a(),i("div",{key:h.id,class:"flex items-center"},[f("button",{class:u([e(s)==t?"bg-black":"bg-zinc-200","flex rounded-full w-8 h-8 mx-1 items-center justify-center"]),onClick:g=>e(l)(t)},[e(o)[t].category=="code"?(a(),n(c,{key:0,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-xml ")]),_:2},1032,["class"])):e(o)[t].category=="scq"?(a(),n(c,{key:1,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-checkbox-marked-circle-outline ")]),_:2},1032,["class"])):e(o)[t].category=="mcq"?(a(),n(c,{key:2,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-checkbox-multiple-marked-outline ")]),_:2},1032,["class"])):e(o)[t].category=="video"?(a(),n(c,{key:3,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-play-circle-outline ")]),_:2},1032,["class"])):(a(),n(c,{key:4,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-text-box-outline ")]),_:2},1032,["class"]))],10,L),t<e(o).length-1?(a(),n(e(z),{key:0,class:"h-5 w-5","aria-hidden":"true"})):S("",!0)]))),128))])}}}),H={key:0,class:"p-8"},J={key:1},M={key:2,class:"flex h-full w-full"},Q={class:"flex-1 flex flex-col justify-between items-center pt-8"},X=b({__name:"CourseTopicView",setup(k){const r=T(),s=x(),{setSteps:o}=s,l=j(""),{isPending:w,isError:y,data:c,error:h,refetch:t}=B({queryKey:["topic",l],queryFn:g});async function g(){const d=await V.getTopicByID(l.value);return d.steps.forEach(p=>{console.log(`step.id: ${p.id}, ${p.order}`)}),o(d.steps),F.replace({path:`/course/${r.params.id}/topic/${l.value}/step/${d.steps[0].id}`}),d}return D(()=>r.params.topic_id,()=>{l.value=r.params.topic_id.toString(),t()},{immediate:!0}),(d,p)=>{const $=C("RouterView");return e(w)?(a(),i("div",H," Pending... ")):e(y)?(a(),i("div",J,E(e(h)),1)):e(c)?(a(),i("div",M,[f("div",Q,[v($),v(P)])])):S("",!0)}}});export{X as default};