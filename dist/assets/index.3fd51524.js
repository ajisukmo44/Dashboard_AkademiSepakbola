import{r as p,o as _,c as h,a as v,b as y,d as I,e as b,f as L,L as S}from"./vendor.13907abb.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};P();var E=(e,r)=>{for(const[t,n]of r)e[t]=n;return e};const O={};function k(e,r){const t=p("router-view");return _(),h(t,{key:e.$route.fullPath})}var A=E(O,[["render",k]]);const R="modulepreload",c={},j="/",i=function(r,t){return!t||t.length===0?r():Promise.all(t.map(n=>{if(n=`${j}${n}`,n in c)return;c[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":R,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((f,g)=>{a.addEventListener("load",f),a.addEventListener("error",g)})})).then(()=>r())},w=[{path:"/",name:"dashboard",component:()=>i(()=>import("./Dashboard.c82bb4a3.js"),["assets/Dashboard.c82bb4a3.js","assets/vendor.13907abb.js","assets/headlessui.esm.cf5a0c1c.js"]),children:[{path:"",component:()=>i(()=>import("./Home.a96af371.js"),["assets/Home.a96af371.js","assets/vendor.13907abb.js","assets/headlessui.esm.cf5a0c1c.js"])},{path:"users",name:"user-list",component:()=>i(()=>import("./UserList.bfaee326.js"),["assets/UserList.bfaee326.js","assets/headlessui.esm.cf5a0c1c.js","assets/vendor.13907abb.js"])},{path:"/card",name:"card",component:()=>i(()=>import("./Card.0cae8b5d.js"),["assets/Card.0cae8b5d.js","assets/vendor.13907abb.js"])}]},{path:"/login",name:"login",component:()=>i(()=>import("./Login.98a0ef91.js"),["assets/Login.98a0ef91.js","assets/Login.3a30bf4f.css","assets/vendor.13907abb.js"])}],u=v({history:y(),scrollBehavior(){return{top:0}},routes:w});u.beforeEach((e,r,t)=>{const o=!["/login","/register"].includes(e.path),s=localStorage.getItem("user");if(o&&!s)return t("/login");t()});const D="https://cms.ajisukmo.com/api/";class N{login(r){return I.post(D+"login",{email:r.email,password:r.password,dashboard:!0}).then(t=>(t.status==200&&(localStorage.setItem("user",JSON.stringify(t.data.data.user)),localStorage.setItem("token",JSON.stringify(t.data.data.access_token))),console.log(t),t.data))}logout(){localStorage.removeItem("user")}}var d=new N;const m=JSON.parse(localStorage.getItem("user")),$=m?{status:{loggedIn:!0},user:m}:{status:{loggedIn:!1},user:null},T={namespaced:!0,state:$,actions:{login({commit:e},r){return d.login(r).then(t=>(e("loginSuccess",t),Promise.resolve(t)),t=>(e("loginFailure"),Promise.reject(t)))},logout({commit:e}){d.logout(),e("logout")}},mutations:{loginSuccess(e,r){e.status.loggedIn=!0,e.user=r},loginFailure(e){e.status.loggedIn=!1,e.user=null},logout(e){e.status.loggedIn=!1,e.user=null}}},V=b({modules:{auth:T}}),l=L(A);l.use(V);l.use(u);l.use(S);l.mount("#app");export{E as _};
