(()=>{var e={};e.id=9,e.ids=[9],e.modules={197:(e,s,r)=>{Promise.resolve().then(r.bind(r,2829))},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2053:(e,s,r)=>{Promise.resolve().then(r.bind(r,5457))},2289:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,8429,23)),Promise.resolve().then(r.t.bind(r,1365,23))},2609:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>u,routeModule:()=>c,tree:()=>d});var t=r(260),n=r(8203),i=r(5155),o=r.n(i),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(s,l);let d={children:["",{children:["users",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2829)),"C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\users\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8162)),"C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}]}.children,u=["C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\users\\page.jsx"],p={require:r,loadChunk:()=>Promise.resolve()},c=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/users/page",pathname:"/users",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2704:()=>{},2829:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});let t=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\15hem\\\\Desktop\\\\Nextjs\\\\next-tutorial\\\\app\\\\users\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\15hem\\Desktop\\Nextjs\\next-tutorial\\app\\users\\page.jsx","default")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3344:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,8531,23))},3873:e=>{"use strict";e.exports=require("path")},5457:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var t=r(5512),n=r(8009);let i=()=>{let[e,s]=(0,n.useState)([]),[r,i]=(0,n.useState)(!0);(0,n.useEffect)(()=>{o()},[]);let o=async()=>{try{let e=await fetch("/api/user"),r=await e.json();s(r)}catch(e){console.error("Error fetching users:",e)}finally{i(!1)}},a=async r=>{try{await fetch("/api/user",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r})}),s(e.filter(e=>e._id!==r))}catch(e){console.error("Error deleting user:",e)}};return(0,t.jsxs)("div",{className:"users-list",children:[(0,t.jsx)("h2",{className:"users-list__title",children:"All Users"}),r?(0,t.jsx)("p",{className:"users-list__loading",children:"Loading users..."}):e.length>0?(0,t.jsx)("ul",{className:"users-list__items",children:e.map(e=>(0,t.jsxs)("li",{className:"users-list__item",children:[(0,t.jsx)("span",{className:"users-list__name",children:e.name}),(0,t.jsxs)("span",{className:"users-list__age",children:["Age: ",e.age]}),(0,t.jsx)("button",{className:"users-list__delete-button",onClick:()=>a(e._id),children:"Delete"})]},e._id))}):(0,t.jsx)("p",{className:"users-list__empty",children:"No users found."})]})}},5841:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,1601,23)),Promise.resolve().then(r.t.bind(r,8921,23))},8162:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c,metadata:()=>p});var t=r(2740),n=r(4668),i=r.n(n),o=r(5482),a=r.n(o);r(2704);var l=r(9607),d=r.n(l);let u=()=>(0,t.jsxs)("nav",{className:"navbar",children:[(0,t.jsx)("h1",{children:"My Next App"}),(0,t.jsxs)("div",{className:"nav-links",children:[(0,t.jsx)(d(),{href:"/",children:"Home"}),(0,t.jsx)(d(),{href:"/users",children:"All Users"})]})]}),p={title:"Create Next App",description:"Generated by create next app"};function c({children:e}){return(0,t.jsx)("html",{lang:"en",children:(0,t.jsxs)("body",{className:`${i().variable} ${a().variable}`,children:[(0,t.jsx)(u,{}),(0,t.jsx)("h1",{style:{textAlign:"center"},children:"I Am Under The Water\uD83E\uDD3F"}),e]})})}},8496:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,9607,23))},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[638,707],()=>r(2609));module.exports=t})();