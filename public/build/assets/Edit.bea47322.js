import{J as m}from"./JigLayout.1a93f1c3.js";import{J as d}from"./Label.a089ccb4.js";import{I as p}from"./InertiaButton.44bf5d6b.js";import{J as f}from"./InputError.c6c78847.js";import{J as u}from"./Button.576f3970.js";import _ from"./EditForm.0a9b0145.js";import{D as x}from"./DisplayMixin.acf56b68.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{e as s,o as j,f as b,w as r,g as e,x as a,i as g,y as w}from"./vendor.796c7459.js";import"./DialogModal.356bcdb4.js";import"./ApplicationLogo.af3be097.js";import"./Input.7887f6d1.js";import"./JigTab.95dd0821.js";import"./AssignPerms.5fa606a1.js";import"./Checkbox.2098c60b.js";const y={name:"EditRoles",props:{model:Object,permissions:Object},components:{InertiaButton:p,JetLabel:d,JetButton:u,JetInputError:f,JigLayout:m,EditRolesForm:_},data(){return{}},mixins:[x],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(o){this.displayNotification("success",o),this.$inertia.visit(route("admin.roles.index"))},onError(o){this.displayNotification("error",o)}}},E={class:"flex flex-wrap items-center justify-between w-full px-4"},J=e("i",{class:"fas fa-arrow-left"},null,-1),v={class:"flex flex-wrap px-4"},B={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function k(o,I,t,D,L,i){const n=s("inertia-link"),c=s("edit-roles-form"),l=s("jig-layout");return j(),b(l,null,{header:r(()=>[e("div",E,[a(n,{href:o.route("admin.roles.index"),class:"text-xl font-black text-white"},{default:r(()=>[J,g(" Back | Edit Role #"+w(t.model.id),1)]),_:1},8,["href"])])]),default:r(()=>[e("div",v,[e("div",B,[a(c,{permissions:t.permissions,model:t.model,onSuccess:i.onSuccess,onError:i.onError},null,8,["permissions","model","onSuccess","onError"])])])]),_:1})}var H=h(y,[["render",k]]);export{H as default};