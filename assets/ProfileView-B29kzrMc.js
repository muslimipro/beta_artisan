import{Y as r}from"./yellow_star-CHjFodN-.js";import{_ as P}from"./TokenCard.vue_vue_type_script_setup_true_lang-CJIDGwY8.js";import{_ as B}from"./ProjectCard.vue_vue_type_script_setup_true_lang-CWhZ1Uxi.js";import{_ as C}from"./CourseCard.vue_vue_type_script_setup_true_lang-DTjn1pNa.js";import{d as E,j as m,c as e,u as o,t as a,a as s,F as l,i as c,l as x,m as F,n as L,o as t,e as d}from"./index-D06Or7HH.js";import{u as V,a as $}from"./api-CaB4iAb8.js";import{b as q}from"./base-url-qR72hEjy.js";import{a as v,t as _}from"./placeholders-DGnxll_j.js";const z={class:"flex flex-1"},A={key:0},D={key:1},N={key:2,class:"flex flex-col items-center bg-zinc-50"},R=s("div",{class:"flex -space-x-2 overflow-hidden rounded-full border-2 my-8 mx-8"},[s("img",{class:"inline-block h-40 w-40 rounded-full ring-2 ring-white",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})],-1),S={class:"text-lg font-bold px-8 pb-4"},I={class:"w-full grid grid-rows-3 px-8 py-4 text-black"},M={class:"grid grid-cols-2"},O=s("p",{class:"py-2"}," Programming ",-1),Q={class:"flex py-2 px-4"},U=["src"],Y={class:"grid grid-cols-2"},H=s("p",{class:"py-2"}," Electronics ",-1),J={class:"flex py-2 px-4"},K=["src"],T={class:"grid grid-cols-2"},W=s("p",{class:"py-2"}," 3D Modeling ",-1),G={class:"flex py-2 px-4"},X=["src"],Z={class:"bg-zinc-200 py-8 px-8 flex-1"},ss={class:"pb-4"},es=s("h1",{class:"pb-4 text-2xl font-bold"}," Recent Courses ",-1),ts={key:0},os={key:1},is={key:2,class:"flex flex-wrap"},ls={class:"pb-4"},cs=s("h1",{class:"pb-4 text-2xl font-bold"}," Tokens ",-1),ns={class:"flex p-4 flex-wrap"},rs={class:"px-2"},as={class:""},ds=s("h1",{class:"pb-4 text-2xl font-bold"}," Recent Projects ",-1),_s={class:"flex flex-wrap"},us={class:"p-4"},fs=3,ps=1,hs=2,Bs=E({__name:"ProfileView",setup(ms){const g=F(),b=()=>{L(),g.push({path:"/login"})},{fetchAPI:y}=$(),k=async()=>await y(`${q}/user/profile`).then(h=>h.json()),{isPending:u,isError:f,data:n,error:p}=V({queryKey:["user/profile"],queryFn:k}),w=m([v.ultrasonic,v.piezo]),j=m([_[1],_[2],_[3]]);return(h,xs)=>(t(),e("div",z,[o(u)?(t(),e("div",A)):o(f)?(t(),e("div",D,a(o(p)),1)):o(n)?(t(),e("div",N,[R,s("div",S,a(o(n).name),1),s("div",I,[s("div",M,[O,s("div",Q,[(t(),e(l,null,c(fs,i=>s("img",{src:o(r),alt:"filled level star"},null,8,U)),64))])]),s("div",Y,[H,s("div",J,[(t(),e(l,null,c(ps,i=>s("img",{src:o(r),alt:"filled level star"},null,8,K)),64))])]),s("div",T,[W,s("div",G,[(t(),e(l,null,c(hs,i=>s("img",{src:o(r),alt:"filled level star"},null,8,X)),64))])])]),s("div",{class:"mt-10 flex items-center justify-center gap-x-6"},[s("button",{onClick:b,class:"rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Sign out")])])):x("",!0),s("div",Z,[s("div",ss,[es,o(u)?(t(),e("div",ts)):o(f)?(t(),e("div",os,a(o(p)),1)):o(n)?(t(),e("div",is,[(t(!0),e(l,null,c(o(n).courses,i=>(t(),e("div",{class:"p-2",key:i.id},[d(C,{course:i},null,8,["course"])]))),128))])):x("",!0)]),s("div",ls,[cs,s("div",ns,[(t(!0),e(l,null,c(w,i=>(t(),e("div",rs,[d(P,{token:i},null,8,["token"])]))),256))])]),s("div",as,[ds,s("div",_s,[(t(!0),e(l,null,c(j,i=>(t(),e("div",us,[d(B,{project:i},null,8,["project"])]))),256))])])])]))}});export{Bs as default};
