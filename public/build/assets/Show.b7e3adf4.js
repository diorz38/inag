import{J as m}from"./JigLayout.1a93f1c3.js";import{I as f}from"./InertiaButton.44bf5d6b.js";import p from"./ShowForm.c549e495.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{e as o,o as t,f as u,w as s,g as a,x as r,i as h,y as x,k as i}from"./vendor.796c7459.js";import"./DialogModal.356bcdb4.js";import"./DisplayMixin.acf56b68.js";import"./ApplicationLogo.af3be097.js";import"./JigDd.a55c180f.js";const w={name:"ShowRoles",components:{InertiaButton:f,JigLayout:m,ShowRolesForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}},g={class:"flex flex-wrap items-center justify-between w-full px-4"},j=a("i",{class:"fas fa-arrow-left"},null,-1),b={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},k={key:1,class:"text-center space-4 px-4 bg-white rounded-md shadow-md text-red-500 font-bold text-lg"};function y(n,B,e,D,S,J){const l=o("inertia-link"),d=o("show-roles-form"),c=o("jig-layout");return t(),u(c,null,{header:s(()=>[a("div",g,[r(l,{href:n.route("admin.roles.index"),class:"text-2xl font-black text-white"},{default:s(()=>[j,h(" Back | Details of Role #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),i("div",b,[a("div",v,[r(d,{model:e.model},null,8,["model"])])])):(t(),i("div",k," You don't have permission to view this resource. "))]),_:1})}var A=_(w,[["render",y]]);export{A as default};