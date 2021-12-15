import{J as l}from"./JigLayout.1a93f1c3.js";import{I as d}from"./InertiaButton.44bf5d6b.js";import m from"./CreateForm.edc21172.js";import{D as p}from"./DisplayMixin.acf56b68.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t,o as u,f as _,w as s,g as o,x as a,i as x}from"./vendor.796c7459.js";import"./DialogModal.356bcdb4.js";import"./ApplicationLogo.af3be097.js";import"./Input.7887f6d1.js";import"./Label.a089ccb4.js";import"./InputError.c6c78847.js";const h={name:"CreateRoles",components:{InertiaButton:d,JigLayout:l,CreateRolesForm:m},data(){return{}},mixins:[p],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.roles.index"))},onError(e){this.displayNotification("error",e)}}},j={class:"flex flex-wrap items-center justify-between w-full px-4"},w=o("i",{class:"fas fa-arrow-left"},null,-1),b=x(" Back | New Role "),g={class:"flex flex-wrap px-4"},y={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(e,k,B,C,N,r){const i=t("inertia-link"),n=t("create-roles-form"),c=t("jig-layout");return u(),_(c,null,{header:s(()=>[o("div",j,[a(i,{href:e.route("admin.roles.index"),class:"text-xl font-black text-white"},{default:s(()=>[w,b]),_:1},8,["href"])])]),default:s(()=>[o("div",g,[o("div",y,[a(n,{onSuccess:r.onSuccess,onError:r.onError},null,8,["onSuccess","onError"])])])]),_:1})}var z=f(h,[["render",v]]);export{z as default};