import{u as y}from"./useQuery-DitF0fdZ.js";import{m as w}from"./marked-CSV-5BXG.js";import{P as b}from"./ProjectService-D1TWlfe_.js";import{d as g,A as k,u as P,r as d,B as j,w as x,l as s,c as o,t as B,a as e,F as C,f as F,v as I,C as L,o as r,j as S}from"./index-D_MW-M7q.js";import{u as V}from"./api-gZ0eemCF.js";import{b as A}from"./base-url-qR72hEjy.js";import{_ as N}from"./TokenCard.vue_vue_type_script_setup_true_lang-C_HPvSXW.js";import"./api-client-Bv44YFIR.js";const T={key:0,class:"p-8"},$={key:1},q={key:2,class:"flex justify-center w-full bg-white"},D={class:"w-8/12 self-center"},E=e("br",null,null,-1),H=["src"],M=e("br",null,null,-1),R={class:"flex"},U={class:"px-2"},K=e("br",null,null,-1),Q=["innerHTML"],Y=e("br",null,null,-1),se=g({__name:"ProjectContentView",setup(z){const a=k(),{locale:_}=P(),{fetchAPI:p}=V(),c=d(""),i=d(""),m=j(()=>w.parse(c.value)),{isPending:f,isError:h,data:l,error:v}=y({queryKey:["/projects/",a.params.id.toString()],queryFn:async()=>{const t=await b.getProjectByID(a.params.id.toString()),u=await p(`${A}/${t.path}`).then(n=>n.text());return c.value=u,i.value=t.videoURL,t}});return x(_,t=>{L.replace({path:"/projects"})}),(t,u)=>s(f)?(r(),o("div",T," Pending... ")):s(h)?(r(),o("div",$,B(s(v)),1)):s(l)?(r(),o("div",q,[e("div",D,[E,e("iframe",{width:"100%",height:"370",src:i.value,title:"YouTube video player",frameborder:"0",allow:"clipboard-write; encrypted-media; picture-in-picture",allowfullscreen:""},null,8,H),M,e("div",R,[(r(!0),o(C,null,F(s(l).artisan_tokens,n=>(r(),o("div",U,[S(N,{token:n},null,8,["token"])]))),256))]),K,e("div",{innerHTML:m.value,class:"content markdown-body"},null,8,Q),Y])])):I("",!0)}});export{se as default};
