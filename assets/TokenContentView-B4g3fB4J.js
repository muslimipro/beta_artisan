import{m as y}from"./marked-CSV-5BXG.js";import{d as w,u as v,A as $,r as b,B as g,w as x,l as t,c as o,t as B,a as C,v as P,C as T,o as n}from"./index-D_MW-M7q.js";import{u as A}from"./useQuery-DitF0fdZ.js";import{b as u}from"./base-url-qR72hEjy.js";import{u as E}from"./api-gZ0eemCF.js";const I={key:0},V={key:1},j={key:2,class:"flex w-full justify-center p-4 bg-white"},q=["innerHTML"],D=w({__name:"TokenContentView",setup(F){const{fetchAPI:a}=E(),{locale:p}=v(),r=$(),c=b(""),m=async()=>{const e=await a(`${u}/artisan_tokens/${r.params.id}`).then(s=>s.json()),i=e.path,k=await a(`${u}/${i}`).then(s=>s.text());return c.value=k,e},{isPending:l,isError:d,isSuccess:_,error:f}=A({queryKey:[`artisan_tokens:${r.params.id}`],queryFn:m}),h=g(()=>y.parse(c.value));return x(p,e=>{T.replace({path:"/tokens"})}),(e,i)=>t(l)?(n(),o("div",I," Pending ")):t(d)?(n(),o("span",V,"Error: "+B(t(f)),1)):t(_)?(n(),o("div",j,[C("div",{class:"content markdown-body w-8/12",innerHTML:h.value},null,8,q)])):P("",!0)}});export{D as default};
