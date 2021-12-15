import{S as _,J as w,a as v,b,c as x,d as k,e as y}from"./JigLayout.1a93f1c3.js";import{o as n,k as r,n as l,g as e,z as d,y as j,C,j as L,e as u,f as P,w as a,p as h,x as $}from"./vendor.796c7459.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const B={data(){return{show:!0}},computed:{style(){var s;return((s=this.$page.props.jetstream.flash)==null?void 0:s.bannerStyle)||"success"},message(){var s;return((s=this.$page.props.jetstream.flash)==null?void 0:s.banner)||""}}},J={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},M={class:"flex items-center justify-between flex-wrap"},S={class:"w-0 flex-1 flex items-center min-w-0"},D={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},N=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),T=[N],z={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},A=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),I=[A],V={class:"ml-3 font-medium text-sm text-white truncate"},E={class:"flex-shrink-0 sm:ml-3"},R=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),q=[R];function F(s,o,m,p,i,t){return n(),r("div",null,[i.show&&t.message?(n(),r("div",{key:0,class:l({"bg-indigo-500":t.style=="success","bg-red-700":t.style=="danger"})},[e("div",J,[e("div",M,[e("div",S,[e("span",{class:l(["flex p-2 rounded-lg",{"bg-indigo-600":t.style=="success","bg-red-600":t.style=="danger"}])},[t.style=="success"?(n(),r("svg",D,T)):d("",!0),t.style=="danger"?(n(),r("svg",z,I)):d("",!0)],2),e("p",V,j(t.message),1)]),e("div",E,[e("button",{type:"button",class:l(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":t.style=="success","hover:bg-red-600 focus:bg-red-600":t.style=="danger"}]),"aria-label":"Dismiss",onClick:o[0]||(o[0]=C(c=>i.show=!1,["prevent"]))},q,2)])])])],2)):d("",!0)])}var G=f(B,[["render",F]]);const H={route:"admin.dashboard",routePattern:"admin.dashboard",title:"Backend",faIcon:"fas fa-cogs",isTitle:!1,isParent:!1,ignorePerm:!1,children:[]},K={route:"dashboard",routePattern:"dashboard",title:"Dashboard",faIcon:"fas fa-tv",isTitle:!1,isParent:!1,ignorePerm:!0,children:[]};var O={backend:H,dashboard:K,"my-profile":{route:"profile.show",routePattern:"case-files",title:"My Profile",faIcon:"fas fa-tv",isTitle:!1,isParent:!1,ignorePerm:!0,children:[]}};const Q=L({components:{Sidebar:_,JigLayout:w,JetApplicationMark:v,JetBanner:G,JetDropdown:b,JetDropdownLink:x,JetNavLink:k,JetResponsiveNavLink:y},data(){return{showingNavigationDropdown:!1,frontendSidebarMenu:O}},methods:{switchToTeam(s){this.$inertia.put(route("current-team.update"),{team_id:s.id},{preserveState:!1})},logout(){let s=this;if(this.$page.props.user.is_cas){console.log("Logging out of cas");const o=window.open(this.route("cas.logout"),"_blank");setTimeout(function(){o.close(),s.$inertia.reload()},1e3)}else this.$inertia.post(route("logout"))}}}),U=e("div",null,null,-1),W={class:"flex justify-center w-full"},X={class:"w-full text-secondary"};function Y(s,o,m,p,i,t){const c=u("sidebar"),g=u("jig-layout");return n(),P(g,null,{"navbar-menu":a(()=>[U]),header:a(()=>[e("div",W,[e("div",X,[h(s.$slots,"header")])])]),sidebar:a(()=>[$(c,{menu:s.frontendSidebarMenu,class:"z-40"},null,8,["menu"])]),default:a(()=>[e("main",null,[h(s.$slots,"default")])]),_:3})}var te=f(Q,[["render",Y]]);export{te as A};