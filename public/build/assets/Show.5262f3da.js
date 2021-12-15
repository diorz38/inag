import{A as j}from"./AppLayout.48550c25.js";import g from"./DeleteUserForm.bb8c8798.js";import{J as h}from"./SectionBorder.5e751365.js";import w from"./LogoutOtherBrowserSessionsForm.47f08365.js";import F from"./TwoFactorAuthenticationForm.624229c1.js";import b from"./UpdatePasswordForm.a68a8109.js";import y from"./UpdateProfileInformationForm.52832f1e.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t,o as s,f as x,w as m,g as i,k as a,x as o,z as n,F as A}from"./vendor.796c7459.js";import"./JigLayout.1a93f1c3.js";import"./InertiaButton.44bf5d6b.js";import"./DialogModal.356bcdb4.js";import"./DisplayMixin.acf56b68.js";import"./ApplicationLogo.af3be097.js";import"./ActionSection.5139de90.js";import"./SectionTitle.c767473d.js";import"./DangerButton.a848107a.js";import"./Input.7887f6d1.js";import"./InputError.c6c78847.js";import"./SecondaryButton.f554eaa7.js";import"./ActionMessage.d98cec0f.js";import"./Button.576f3970.js";import"./FormSection.1522de39.js";import"./Label.a089ccb4.js";const v={props:["sessions"],components:{AppLayout:j,DeleteUserForm:g,JetSectionBorder:h,LogoutOtherBrowserSessionsForm:w,TwoFactorAuthenticationForm:F,UpdatePasswordForm:b,UpdateProfileInformationForm:y}},S=i("h2",{class:"font-semibold text-xl text-gray-100 leading-tight"}," Profile ",-1),k={class:"max-w-7xl mx-auto bg-gray-300 rounded py-10 sm:px-6 lg:px-8"},P={key:0},U={key:1},$={key:2};function L(e,D,p,I,M,T){const c=t("update-profile-information-form"),r=t("jet-section-border"),d=t("update-password-form"),f=t("two-factor-authentication-form"),l=t("logout-other-browser-sessions-form"),u=t("delete-user-form"),_=t("app-layout");return s(),x(_,{title:"Profile"},{header:m(()=>[S]),default:m(()=>[i("div",null,[i("div",k,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",P,[o(c,{user:e.$page.props.user},null,8,["user"]),o(r)])):n("",!0),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",U,[o(d,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",$,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),o(l,{sessions:p.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(A,{key:3},[o(r),o(u,{class:"mt-10 sm:mt-0"})],64)):n("",!0)])])]),_:1})}var io=B(v,[["render",L]]);export{io as default};