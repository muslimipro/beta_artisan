import{M as l}from"./missing-image-DTu8rdm0.js";import{C as i}from"./check_mark-B_FYM15C.js";import{e as c,r as m,o,c as a,b as d,w as p,a as s,u as t,p as u,q as _,t as f}from"./index-ByyDOx2V.js";const g={href:"/",class:"bg-transparent relative max-w-sm"},h=["src","alt"],k={key:0,class:"absolute top-2 right-2 rounded-full h-5 w-5 bg-green-600"},b=["src"],w={class:"flex justify-center"},x={class:"font-bold text-black"},M=c({__name:"TokenCard",props:{token:{}},setup(r){const e=r.token;return e.image==""?e.image=new URL(l,import.meta.url).href:e.image=new URL(e.image,import.meta.url).href,(v,y)=>{const n=m("RouterLink");return o(),a("div",g,[d(n,{class:"flex flex-col justify-center items-center",to:`/token/${t(e).id}`},{default:p(()=>[s("div",{class:_(["relative h-32 w-32 rounded-full border-2",t(e).done?"border-green-500":""])},[s("img",{class:"w-full h-full",src:t(e).image,alt:t(e).name+" Image"},null,8,h),t(e).done?(o(),a("div",k,[s("img",{src:t(i)},null,8,b)])):u("",!0)],2),s("div",w,[s("p",x,f(t(e).name),1)])]),_:1},8,["to"])])}}});export{M as _};