import{_ as k}from"./ProjectCard.vue_vue_type_script_setup_true_lang-Dod9gGnL.js";import{Y as L}from"./yellow_star-CHjFodN-.js";import{d as h,s as y,c as s,F as u,f as d,l as t,o as l,u as V,r as f,w as j,t as P,a as c,j as g,v as $}from"./index-D9ZVMCSs.js";import{u as C}from"./useQuery-Bpf_AUH-.js";import{P as F}from"./ProjectService-6zpOFgek.js";import"./api-client-CYsIzdhg.js";import"./base-url-qR72hEjy.js";const B="data:image/svg+xml,%3csvg%20width='23'%20height='21'%20viewBox='0%200%2023%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%200L14.2925%206.13638L21.3333%207.63932L16.5333%2012.9348L17.259%2020L10.6667%2017.1364L4.0743%2020L4.79999%2012.9348L-5.72205e-06%207.63932L7.04086%206.13638L10.6667%200Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e",S={class:"flex select-none hover:cursor-pointer"},b=["onClick","src"],M=["onClick","src"],N=5,q=h({__name:"LevelPicker",props:{modelValue:{default:0},modelModifiers:{}},emits:["update:modelValue"],setup(m){var e=y(m,"modelValue");function o(r){e.value==r?e.value=0:e.value=r}return(r,_)=>(l(),s("div",S,[(l(!0),s(u,null,d(t(e),a=>(l(),s("img",{draggable:"false",onClick:i=>o(a),src:t(L)},null,8,b))),256)),(l(!0),s(u,null,d(N-t(e),a=>(l(),s("img",{draggable:"false",onClick:i=>o(t(e)+a),src:t(B)},null,8,M))),256))]))}}),E={key:0},Y={key:1},z={key:2,class:"flex-col w-full"},D={class:"flex w-full bg-zinc-300 px-8 py-3"},I=c("p",null,"Pick Level",-1),K={class:"flex flex-wrap justify-center px-4"},Q=c("div",{class:"h-8"},null,-1),O=h({__name:"ProjectsView",setup(m){const{locale:e}=V(),o=f(e.value),{isPending:r,isError:_,data:a,error:i,refetch:x}=C({queryKey:["projects"+o.value],queryFn:async()=>await F.getProjects(o.value)});j(()=>e.value,()=>{o.value=e.value,x()},{immediate:!0});const v=f(0);return(w,p)=>t(r)?(l(),s("div",E," Pending... ")):t(_)?(l(),s("div",Y,P(t(i)),1)):t(a)?(l(),s("div",z,[c("div",D,[I,g(q,{class:"px-4",modelValue:v.value,"onUpdate:modelValue":p[0]||(p[0]=n=>v.value=n)},null,8,["modelValue"])]),c("div",K,[(l(!0),s(u,null,d(t(a),n=>(l(),s("div",{class:"m-4",key:n.id},[g(k,{project:n},null,8,["project"])]))),128))]),Q])):$("",!0)}});export{O as default};
