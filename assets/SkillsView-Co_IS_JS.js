import{u as N}from"./useQuery-iqdx9jcJ.js";import{C as q}from"./CourseCard-DZokYvLi.js";import{S as E}from"./SkillService-Bb3D5TfH.js";import{d as F,r as j,l as r,c,t as p,B as v,k as a,q as L,i,o as n,j as l,f,a as u,m as h,F as g}from"./index-BQo8HGay.js";import"./api-client-A--2tcaO.js";import"./base-url-qR72hEjy.js";const P={key:0},U={key:1},$={class:"d-flex align-center justify-between"},D={class:"text-h5 pb-2"},G={class:"d-flex align-center"},J=F({__name:"SkillsView",setup(K){const o=j({}),y=e=>{o.value[e]>0&&o.value[e]--},C=(e,d)=>{o.value[e]<d-1&&o.value[e]++},{isPending:x,isError:k,data:_,error:V}=N({queryKey:["skills"],queryFn:async()=>{const e=await E.getSkills();return e.forEach(d=>{o.value[d.id]=0}),e}});return(e,d)=>{const m=i("v-icon"),S=i("v-slide-group-item"),w=i("v-slide-group"),B=i("v-col"),b=i("v-container");return r(x)?(n(),c("div",P," Pending... ")):r(k)?(n(),c("div",U,p(r(V)),1)):r(_)?(n(),v(b,{key:2,fluid:"",class:"pa-0"},{default:a(()=>[l(B,{style:{"min-width":"100px","max-width":"100%"},class:"px-16 py-8"},{default:a(()=>[(n(!0),c(g,null,f(r(_),t=>(n(),c("div",{key:t.id,class:"pb-8"},[u("div",$,[u("span",D,p(t.name),1),u("div",G,[l(m,{onClick:s=>y(t.id),class:"mr-2"},{default:a(()=>[h("mdi-chevron-left")]),_:2},1032,["onClick"]),l(m,{onClick:s=>C(t.id,t.courses.length)},{default:a(()=>[h("mdi-chevron-right")]),_:2},1032,["onClick"])])]),l(w,{modelValue:o.value[t.id],"onUpdate:modelValue":s=>o.value[t.id]=s,mobile:"","center-active":""},{default:a(()=>[(n(!0),c(g,null,f(t.courses,s=>(n(),v(S,{key:s.id},{default:a(()=>[l(q,{class:"ma-4",course:s},null,8,["course"])]),_:2},1024))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))]),_:1})]),_:1})):L("",!0)}}});export{J as default};