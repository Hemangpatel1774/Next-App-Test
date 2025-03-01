(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1343:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>m,routeModule:()=>u,tree:()=>d});var s=t(260),n=t(8203),o=t(5155),a=t.n(o),i=t(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7890)),"C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\page.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,8162)),"C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"]}],m=["C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\page.js"],p={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1694:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(5512),n=t(8009);function o(){let[e,r]=(0,n.useState)({name:"",age:""}),t=t=>{r({...e,[t.target.name]:t.target.value})},o=async t=>{if(t.preventDefault(),e.name&&e.age)try{let t=await fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Network response was not ok");let s=await t.json();console.log("User added:",s),r({name:"",age:""})}catch(e){console.error("There was a problem with the fetch operation:",e)}else alert("Please fill in all fields")};return(0,s.jsxs)("div",{className:"user-form",children:[(0,s.jsx)("h1",{className:"user-form__title",children:"Add User"}),(0,s.jsxs)("form",{onSubmit:o,children:[(0,s.jsxs)("div",{className:"user-form__group",children:[(0,s.jsx)("label",{htmlFor:"name",className:"user-form__label",children:"User Name:"}),(0,s.jsx)("input",{type:"text",id:"name",name:"name",className:"user-form__input",value:e.name,onChange:t,required:!0})]}),(0,s.jsxs)("div",{className:"user-form__group",children:[(0,s.jsx)("label",{htmlFor:"age",className:"user-form__label",children:"Age:"}),(0,s.jsx)("input",{type:"number",id:"age",name:"age",className:"user-form__input",value:e.age,onChange:t,required:!0})]}),(0,s.jsx)("button",{type:"submit",className:"user-form__button",children:"Add User"})]})]})}},2289:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,8429,23)),Promise.resolve().then(t.t.bind(t,1365,23))},2704:()=>{},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3344:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,8531,23))},3873:e=>{"use strict";e.exports=require("path")},4839:(e,r,t)=>{Promise.resolve().then(t.bind(t,7890))},5103:(e,r,t)=>{Promise.resolve().then(t.bind(t,1694))},5841:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,1601,23)),Promise.resolve().then(t.t.bind(t,8921,23))},7890:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\15hem\\\\Desktop\\\\Nextjs\\\\next-tutorial\\\\app\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\page.js","default")},8162:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u,metadata:()=>p});var s=t(2740),n=t(4668),o=t.n(n),a=t(5482),i=t.n(a);t(2704);var l=t(9607),d=t.n(l);let m=()=>(0,s.jsxs)("nav",{className:"navbar",children:[(0,s.jsx)("h1",{children:"My Next App"}),(0,s.jsxs)("div",{className:"nav-links",children:[(0,s.jsx)(d(),{href:"/",children:"Home"}),(0,s.jsx)(d(),{href:"/users",children:"All Users"})]})]}),p={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${o().variable} ${i().variable}`,children:[(0,s.jsx)(m,{}),(0,s.jsx)("h1",{style:{textAlign:"center"},children:"I Am Under The Water\uD83E\uDD3F"}),e]})})}},8496:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,9607,23))},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,707],()=>t(1343));module.exports=s})();