import{u as E}from"./useQuery-BKZOKe8A.js";import{C as F}from"./CourseCard-gGcTd3-w.js";import{S as j}from"./SkillService-CAuZIpvT.js";import{d as q,r as L,b as r,j as c,o,c as i,t as v,k as u,f as a,e as d,h as f,F as h,l as g,a as _,g as y}from"./index-DpTojXbM.js";import"./course-content-store-BdQL2KIc.js";import"./api-client-BmsZoN06.js";import"./base-url-qR72hEjy.js";const P={key:0},U={key:1},$={class:"d-flex align-center justify-between"},D={class:"text-h5 pb-2"},G={class:"d-flex align-center"},M=q({__name:"SkillsView",setup(K){const n=L({}),C=e=>{n.value[e]>0&&n.value[e]--},k=(e,l)=>{n.value[e]<l-1&&n.value[e]++},{isPending:x,isError:V,data:m,error:S}=E({queryKey:["skills"],queryFn:async()=>{const e=await j.getSkills();return e.forEach(l=>{n.value[l.id]=0}),e}});return(e,l)=>{const p=r("v-icon"),w=r("v-slide-group-item"),b=r("v-slide-group"),B=r("v-col"),N=r("v-container");return c(x)?(o(),i("div",P," Pending... ")):c(V)?(o(),i("div",U,v(c(S)),1)):c(m)?(o(),u(N,{key:2,fluid:"",class:"pa-0"},{default:a(()=>[d(B,{style:{"min-width":"100px","max-width":"100%"},class:"px-16 py-8"},{default:a(()=>[(o(!0),i(h,null,f(c(m),t=>(o(),i("div",{key:t.id,class:"pb-8"},[_("div",$,[_("span",D,v(t.name),1),_("div",G,[d(p,{onClick:s=>C(t.id),class:"mr-2"},{default:a(()=>[y("mdi-chevron-left")]),_:2},1032,["onClick"]),d(p,{onClick:s=>k(t.id,t.courses.length)},{default:a(()=>[y("mdi-chevron-right")]),_:2},1032,["onClick"])])]),d(b,{modelValue:n.value[t.id],"onUpdate:modelValue":s=>n.value[t.id]=s,mobile:"","center-active":""},{default:a(()=>[(o(!0),i(h,null,f(t.courses,s=>(o(),u(w,{key:s.id},{default:a(()=>[s.id!=13?(o(),u(F,{key:0,class:"ma-4",course:s},null,8,["course"])):g("",!0)]),_:2},1024))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))]),_:1})]),_:1})):g("",!0)}}});export{M as default};
