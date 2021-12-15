import{J as f}from"./ActionSection.5139de90.js";import{J as h}from"./DialogModal.356bcdb4.js";import{J as y}from"./DangerButton.a848107a.js";import{J as w}from"./Input.7887f6d1.js";import{J as j}from"./InputError.c6c78847.js";import{J as g}from"./SecondaryButton.f554eaa7.js";import{e as s,o as D,f as C,w as e,g as c,x as n,Y as J,n as b,i as o}from"./vendor.796c7459.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./SectionTitle.c767473d.js";const U={components:{JetActionSection:f,JetDangerButton:y,JetDialogModal:h,JetInput:w,JetInputError:j,JetSecondaryButton:g},data(){return{confirmingUserDeletion:!1,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion(){this.confirmingUserDeletion=!0,setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingUserDeletion=!1,this.form.reset()}}},k=o(" Delete Account "),v=o(" Permanently delete your account. "),B=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),A={class:"mt-5"},S=o(" Delete Account "),M=o(" Delete Account "),V=o(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),I={class:"mt-4"},E=o(" Cancel "),K=o(" Delete Account ");function N(P,l,T,F,t,r){const a=s("jet-danger-button"),i=s("jet-input"),d=s("jet-input-error"),u=s("jet-secondary-button"),m=s("jet-dialog-modal"),_=s("jet-action-section");return D(),C(_,null,{title:e(()=>[k]),description:e(()=>[v]),content:e(()=>[B,c("div",A,[n(a,{onClick:r.confirmUserDeletion},{default:e(()=>[S]),_:1},8,["onClick"])]),n(m,{show:t.confirmingUserDeletion,onClose:r.closeModal},{title:e(()=>[M]),content:e(()=>[V,c("div",I,[n(i,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:t.form.password,"onUpdate:modelValue":l[0]||(l[0]=p=>t.form.password=p),onKeyup:J(r.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),n(d,{message:t.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[n(u,{onClick:r.closeModal},{default:e(()=>[E]),_:1},8,["onClick"]),n(a,{class:b(["ml-2",{"opacity-25":t.form.processing}]),onClick:r.deleteUser,disabled:t.form.processing},{default:e(()=>[K]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])]),_:1})}var W=x(U,[["render",N]]);export{W as default};