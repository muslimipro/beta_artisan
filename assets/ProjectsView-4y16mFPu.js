import{W as v,_ as h}from"./ProjectCard.vue_vue_type_script_setup_true_lang-B5GktFYF.js";import{Y as x}from"./yellow_star-CHjFodN-.js";import{d as f,h as k,c as s,F as d,i as _,u as c,o as t,j as V,r as g,k as j,a as u,e as p}from"./index-BOBxir3k.js";import{t as e}from"./placeholders-CpuwnqCS.js";const $={class:"flex select-none hover:cursor-pointer"},w=["onClick","src"],C=["onClick","src"],b=5,B=f({__name:"LevelPicker",props:{modelValue:{default:0},modelModifiers:{}},emits:["update:modelValue"],setup(m){var l=k(m,"modelValue");function o(r){l.value==r?l.value=0:l.value=r}return(r,i)=>(t(),s("div",$,[(t(!0),s(d,null,_(c(l),a=>(t(),s("img",{draggable:"false",onClick:n=>o(a),src:c(x)},null,8,w))),256)),(t(!0),s(d,null,_(b-c(l),a=>(t(),s("img",{draggable:"false",onClick:n=>o(c(l)+a),src:c(v)},null,8,C))),256))]))}}),L={class:"flex-col w-full"},P={class:"flex w-full bg-zinc-300 px-8 py-3"},y=u("p",null,"Pick Level",-1),F={class:"flex flex-wrap justify-center px-4"},M={class:"m-4"},N=u("div",{class:"h-8"},null,-1),E=f({__name:"ProjectsView",setup(m){const l=V([e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13]]),o=g(0),r=j(()=>o.value!=0?l.filter(i=>i.level==o.value):l);return(i,a)=>(t(),s("div",L,[u("div",P,[y,p(B,{class:"px-4",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n)},null,8,["modelValue"])]),u("div",F,[(t(!0),s(d,null,_(r.value,n=>(t(),s("div",M,[p(h,{project:n},null,8,["project"])]))),256))]),N]))}});export{E as default};