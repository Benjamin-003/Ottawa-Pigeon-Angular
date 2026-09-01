import{a as Ae}from"./chunk-EFLXN5ZD.js";import{a as Ye}from"./chunk-IBB6RRKD.js";import{a as Ve,b as Oe,c as Ge,d as Qe}from"./chunk-FN37T4U3.js";import{a as Be,b as ze,e as Re,f as je,g as He,h as Ue}from"./chunk-LTKMUUB5.js";import"./chunk-7UOKIW6F.js";import{a as ve,b as ye}from"./chunk-GVEPVWAG.js";import{b as we,c as g,e as Se,f as ke,h as Fe,i as Te,j as $e,l as Me,n as Ne,o as Pe,p as qe}from"./chunk-AO4SGROD.js";import"./chunk-DLALWFVM.js";import{a as Le,b as De}from"./chunk-VPXJEM62.js";import{b as Ee}from"./chunk-WWOBDMXV.js";import"./chunk-E3B6R64A.js";import"./chunk-JYZB5WIE.js";import"./chunk-F2X3VGZZ.js";import{e as ge,f as he,j as Ce,l as Ie}from"./chunk-CASMDBIH.js";import{c as k,e as V,f as fe,j as be}from"./chunk-QL5VTKXM.js";import{aa as xe,ba as I,da as O,fa as B,p as G,q as _e}from"./chunk-3HKUEKUI.js";import"./chunk-AI4Q2SDZ.js";import{j as ce,l as de,m as ue,r as C}from"./chunk-3QOIJG35.js";import{Aa as r,Ab as le,Db as P,Eb as l,Fb as _,Ma as v,Mb as q,N as $,Na as L,Nb as re,O as M,Ob as se,Pb as pe,Qa as D,Sa as f,T as x,Y as J,Z as F,Za as S,Zb as A,_ as T,_a as u,ab as X,ba as w,cb as j,db as b,fb as ee,fc as U,gb as te,gc as me,ha as N,hb as a,ib as o,jb as p,ma as W,nb as H,sb as y,tb as c,ub as ie,vb as ne,xa as R,ya as Z,yb as ae,zb as oe}from"./chunk-7GWNEKH7.js";import{c as K}from"./chunk-EQDQRRRY.js";var tt=["*"],it=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,nt={root:({instance:e,props:m})=>["p-floatlabel",{"p-floatlabel-over":m.variant==="over","p-floatlabel-on":m.variant==="on","p-floatlabel-in":m.variant==="in"}]},Ke=(()=>{class e extends O{name="floatlabel";theme=it;classes=nt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=$({token:e,factory:e.\u0275fac})}return e})();var Q=(()=>{class e extends B{_componentStyle=x(Ke);variant="over";static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=v({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(n,i){n&2&&X("p-floatlabel",!0)("p-floatlabel-over",i.variant==="over")("p-floatlabel-on",i.variant==="on")("p-floatlabel-in",i.variant==="in")},inputs:{variant:"variant"},features:[q([Ke]),D],ngContentSelectors:tt,decls:1,vars:0,template:function(n,i){n&1&&(ie(),ne(0))},dependencies:[C,I],encapsulation:2,changeDetection:0})}return e})(),Je=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=L({type:e});static \u0275inj=M({imports:[Q,I,I]})}return e})();function ot(e,m){e&1&&(a(0,"div",56),p(1,"div",57),a(2,"h2"),l(3,"Cr\xE9er un compte"),o(),a(4,"p"),l(5,"Rejoignez Ottawa Pigeon et commencez \xE0 investir"),o()())}function lt(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c();r(2),_(t.messagesErreur[1])}}function rt(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c();r(2),_(t.messagesErreur[1])}}function st(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c();r(2),_(t.messagesErreur[1])}}function pt(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c();r(2),_(t.messagesErreur[1])}}function mt(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c();r(2),_(t.messagesErreur[1])}}function ct(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c();r(2),_(t.messagesErreur[1])}}function dt(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c();r(2),_(t.messagesErreur[1])}}function ut(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c(2);r(2),_(t.messagesErreur[1])}}function ft(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c(2);r(2),_(t.messagesErreur[0])}}function bt(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c(2);r(2),_(t.messagesErreur[2])}}function _t(e,m){if(e&1&&(a(0,"div"),f(1,ut,3,1,"small",13)(2,ft,3,1,"small",13)(3,bt,3,1,"small",13),o()),e&2){let t=c();r(),b(t.email!=null&&t.email.hasError("required")?1:-1),r(),b(t.email!=null&&t.email.hasError("email")?2:-1),r(),b(t.email!=null&&t.email.hasError("emailTaken")?3:-1)}}function xt(e,m){e&1&&(a(0,"h6"),l(1,"D\xE9finir un mot de passe"),o())}function gt(e,m){e&1&&(p(0,"p-divider"),a(1,"p",59),l(2,"Suggestions"),o(),a(3,"ul",60)(4,"li"),l(5,"Au moins une minuscule"),o(),a(6,"li"),l(7,"Au moins une majuscule"),o(),a(8,"li"),l(9,"Au moins un chiffre"),o(),a(10,"li"),l(11,"Au moins un caract\xE8re sp\xE9cial"),o(),a(12,"li"),l(13,"Au moins 12 caract\xE8res"),o()())}function ht(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c(2);r(2),_(t.messagesErreur[1])}}function vt(e,m){e&1&&(a(0,"small",13),p(1,"i",58),l(2,"Minimum 12 caract\xE8res"),o())}function yt(e,m){if(e&1&&(a(0,"div"),f(1,ht,3,1,"small",13)(2,vt,3,0,"small",13),o()),e&2){let t=c();r(),b(t.password!=null&&t.password.hasError("required")?1:-1),r(),b(t.password!=null&&t.password.hasError("minlength")?2:-1)}}function Ct(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c(2);r(2),_(t.messagesErreur[1])}}function It(e,m){if(e&1&&(a(0,"small",13),p(1,"i",58),l(2),o()),e&2){let t=c(2);r(2),_(t.messagesErreur[0])}}function Et(e,m){if(e&1&&(a(0,"div"),f(1,Ct,3,1,"small",13)(2,It,3,1,"small",13),o()),e&2){let t=c();r(),b(t.confirmPassword!=null&&t.confirmPassword.hasError("required")?1:-1),r(),b(t.confirmPassword!=null&&t.confirmPassword.value&&(t.password==null?null:t.password.value)!==(t.confirmPassword==null?null:t.confirmPassword.value)?2:-1)}}function wt(e,m){e&1&&(a(0,"small",13),p(1,"i",58),l(2,"Vous devez accepter les CGU pour continuer"),o())}var We=(()=>{class e{constructor(){this.fb=x(Me),this.uniqueEmailValidator=x(Ye),this.route=x(k),this.submitForm=new N,this.messagesErreur=["Il semble y avoir une erreur de saisie ici","Ce champ est obligatoire, merci de saisir l'information demand\xE9e","Un compte est d\xE9j\xE0 associ\xE9 \xE0 cette adresse email"],this.strongPasswordRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-\\/:-@[-`{-~])[a-zA-Z0-9!-\\/:-@[-`{-~]{12,}$",this.matchingPasswordsValidator=t=>{let n=t.get("password")?.value,i=t.get("confirmPassword")?.value;return n===i?null:{notmatched:!0}},this.formulaire=this.buildForm()}get lastName(){return this.formulaire.get("lastName")}get firstName(){return this.formulaire.get("firstName")}get birthdate(){return this.formulaire.get("birthdate")}get address(){return this.formulaire.get("address")}get zipcode(){return this.formulaire.get("zipcode")}get city(){return this.formulaire.get("city")}get country(){return this.formulaire.get("country")}get email(){return this.formulaire.get("email")}get password(){return this.formulaire.get("password")}get confirmPassword(){return this.formulaire.get("confirmPassword")}ngOnChanges(t){if(t.defaultBackOption){let n=this.route.snapshot.paramMap.get("option");this.selectedOptionCode=n??t.defaultBackOption.currentValue,this.formulaire=this.buildForm()}}buildForm(){return this.uniqueEmailValidator.currentEmail="",this.fb.group({lastName:["",g.required],firstName:["",g.required],birthdate:["",g.required],address:["",g.required],zipcode:["",g.required],city:["",g.required],country:["",g.required],email:["",{validators:[g.required,g.email],asyncValidators:[t=>this.uniqueEmailValidator.validate(t)],updateOn:"blur"}],password:["",[g.required,g.minLength(12)]],confirmPassword:["",g.required],subscriptionCode:[this.selectedOptionCode??"",g.required],newsletter:[!1],cgu:[!1,g.requiredTrue]},{validators:[this.matchingPasswordsValidator]})}validationForm(){if(this.formulaire.invalid)return;let h=this.formulaire.value,{confirmPassword:n,birthdate:i}=h,s=K(h,["confirmPassword","birthdate"]),d={email:s.email??"",password:s.password??"",lastName:s.lastName??void 0,firstName:s.firstName??void 0,address:s.address??void 0,zipcode:s.zipcode??void 0,city:s.city??void 0,country:s.country??void 0,subscriptionCode:s.subscriptionCode??void 0,newsletter:s.newsletter??!1,birthdate:i instanceof Date?i.toISOString():String(i??"")};this.submitForm.emit(d)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-form-inscription"]],inputs:{subscriptions:"subscriptions",defaultBackOption:"defaultBackOption"},outputs:{submitForm:"submitForm"},features:[J],decls:129,vars:19,consts:[[3,"ngSubmit","formGroup"],[1,"grid","mx-2","mt-5","p-fluid"],[1,"col-12","lg:col-offset-3","lg:col-6"],["styleClass","fi-card"],["pTemplate","header"],[1,"fi-section"],[1,"fi-section-title"],["aria-hidden","true",1,"pi","pi-user"],[1,"grid"],[1,"col-12","md:col-6"],[1,"fi-field"],["id","lastName","type","text","formControlName","lastName","pInputText",""],["for","lastName"],[1,"fi-error"],["id","firstName","type","text","formControlName","firstName","pInputText",""],["for","firstName"],["inputId","birthdate","formControlName","birthdate","dateFormat","dd/mm/yy","appendTo","body","styleClass","fi-datepicker",3,"showIcon","iconDisplay"],["for","birthdate"],["aria-hidden","true",1,"pi","pi-map-marker"],["id","address","type","text","formControlName","address","pInputText",""],["for","address"],[1,"col-12","md:col-4"],["id","zipcode","type","text","formControlName","zipcode","pInputText",""],["for","zipcode"],[1,"col-12","md:col-8"],["id","city","type","text","formControlName","city","pInputText",""],["for","city"],["id","country","type","text","formControlName","country","pInputText",""],["for","country"],["aria-hidden","true",1,"pi","pi-shield"],["id","email","type","text","formControlName","email","pInputText",""],["for","email"],["id","password","formControlName","password","weakLabel","Faible","mediumLabel","Moyen","strongLabel","Fort","promptLabel","Saisir un mot de passe","styleClass","fi-password",3,"onBlur","strongRegex"],["pTemplate","footer"],["for","password"],["id","confirmPassword","type","password","formControlName","confirmPassword","pInputText",""],["for","confirmPassword"],["optionLabel","label","optionValue","code","inputId","subscriptionCode","formControlName","subscriptionCode","styleClass","fi-select",3,"options"],["for","subscriptionCode"],["aria-hidden","true",1,"pi","pi-sliders-h"],[1,"fi-checkbox-row"],["id","newsletter","formControlName","newsletter",3,"binary"],["for","newsletter"],["routerLink","/parametres"],["id","cgu","formControlName","cgu",3,"binary"],["for","cgu"],["routerLink","/legal/politique-confidentialite"],["routerLink","/legal/mentions-legales"],[1,"fi-required"],[1,"fi-actions"],["pButton","","pRipple","","type","submit","label","Cr\xE9er mon compte","icon","pi pi-user-plus",1,"fi-btn-primary",3,"disabled"],[1,"fi-separator"],[1,"fi-sep-line"],[1,"fi-sep-text"],["pButton","","pRipple","","type","button","label","Continuer avec Google","icon","pi pi-google","disabled","true",1,"fi-btn-google"],["pButton","","pRipple","","type","button","label","Annuler","routerLink","../../accueil",1,"fi-btn-cancel"],[1,"fi-card-header"],[1,"fi-logo-accent"],[1,"pi","pi-exclamation-circle"],[1,"mt-2"],[1,"pl-2","ml-2","mt-0","line-height-3"]],template:function(n,i){if(n&1&&(a(0,"form",0),y("ngSubmit",function(){return i.validationForm()}),a(1,"div",1)(2,"div",2)(3,"p-card",3),f(4,ot,6,0,"ng-template",4),a(5,"div",5)(6,"div",6),p(7,"i",7),a(8,"span"),l(9,"Identit\xE9"),o()(),a(10,"div",8)(11,"div",9)(12,"div",10)(13,"p-floatlabel"),p(14,"input",11),a(15,"label",12),l(16,"Nom *"),o()(),f(17,lt,3,1,"small",13),o()(),a(18,"div",9)(19,"div",10)(20,"p-floatlabel"),p(21,"input",14),a(22,"label",15),l(23,"Pr\xE9nom *"),o()(),f(24,rt,3,1,"small",13),o()()(),a(25,"div",10)(26,"p-floatlabel"),p(27,"p-datepicker",16),a(28,"label",17),l(29,"Date de naissance *"),o()(),f(30,st,3,1,"small",13),o()(),p(31,"p-divider"),a(32,"div",5)(33,"div",6),p(34,"i",18),a(35,"span"),l(36,"Adresse"),o()(),a(37,"div",10)(38,"p-floatlabel"),p(39,"input",19),a(40,"label",20),l(41,"Adresse *"),o()(),f(42,pt,3,1,"small",13),o(),a(43,"div",8)(44,"div",21)(45,"div",10)(46,"p-floatlabel"),p(47,"input",22),a(48,"label",23),l(49,"Code postal *"),o()(),f(50,mt,3,1,"small",13),o()(),a(51,"div",24)(52,"div",10)(53,"p-floatlabel"),p(54,"input",25),a(55,"label",26),l(56,"Ville *"),o()(),f(57,ct,3,1,"small",13),o()()(),a(58,"div",10)(59,"p-floatlabel"),p(60,"input",27),a(61,"label",28),l(62,"Pays *"),o()(),f(63,dt,3,1,"small",13),o()(),p(64,"p-divider"),a(65,"div",5)(66,"div",6),p(67,"i",29),a(68,"span"),l(69,"Informations de compte"),o()(),a(70,"div",10)(71,"p-floatlabel"),p(72,"input",30),a(73,"label",31),l(74,"E-mail *"),o()(),f(75,_t,4,3,"div"),o(),a(76,"div",10)(77,"p-floatlabel")(78,"p-password",32),y("onBlur",function(){return i.password==null?null:i.password.markAsTouched()}),f(79,xt,2,0,"ng-template",4)(80,gt,14,0,"ng-template",33),o(),a(81,"label",34),l(82,"Mot de passe *"),o()(),f(83,yt,3,2,"div"),o(),a(84,"div",10)(85,"p-floatlabel"),p(86,"input",35),a(87,"label",36),l(88,"Confirmer le mot de passe *"),o()(),f(89,Et,3,2,"div"),o(),a(90,"div",10)(91,"p-floatlabel"),p(92,"p-select",37),a(93,"label",38),l(94,"Abonnement"),o()()()(),p(95,"p-divider"),a(96,"div",5)(97,"div",6),p(98,"i",39),a(99,"span"),l(100,"Pr\xE9f\xE9rences & Conditions"),o()(),a(101,"div",40),p(102,"p-checkbox",41),a(103,"label",42),l(104," J'accepte de recevoir la newsletter d'Ottawa Pigeon (actualit\xE9s financi\xE8res, conseils d'investissement). Vous pouvez vous d\xE9sabonner depuis vos "),a(105,"a",43),l(106,"param\xE8tres"),o(),l(107,". "),o()(),a(108,"div",40),p(109,"p-checkbox",44),a(110,"label",45),l(111," J'ai lu et j'accepte la "),a(112,"a",46),l(113,"politique de confidentialit\xE9"),o(),l(114," et les "),a(115,"a",47),l(116,"CGU"),o(),a(117,"span",48),l(118,"*"),o()()(),f(119,wt,3,0,"small",13),o(),a(120,"div",49),p(121,"button",50),a(122,"div",51),p(123,"span",52),a(124,"span",53),l(125,"ou"),o(),p(126,"span",52),o(),p(127,"button",54)(128,"button",55),o()()()()()),n&2){let s;u("formGroup",i.formulaire),r(17),b(i.lastName!=null&&i.lastName.touched&&(i.lastName!=null&&i.lastName.hasError("required"))?17:-1),r(7),b(i.firstName!=null&&i.firstName.touched&&(i.firstName!=null&&i.firstName.hasError("required"))?24:-1),r(3),u("showIcon",!0)("iconDisplay","input"),r(3),b(i.birthdate!=null&&i.birthdate.touched&&(i.birthdate!=null&&i.birthdate.hasError("required"))?30:-1),r(12),b(i.address!=null&&i.address.touched&&(i.address!=null&&i.address.hasError("required"))?42:-1),r(8),b(i.zipcode!=null&&i.zipcode.touched&&(i.zipcode!=null&&i.zipcode.hasError("required"))?50:-1),r(7),b(i.city!=null&&i.city.touched&&(i.city!=null&&i.city.hasError("required"))?57:-1),r(6),b(i.country!=null&&i.country.touched&&(i.country!=null&&i.country.hasError("required"))?63:-1),r(12),b(i.email!=null&&i.email.touched?75:-1),r(3),u("strongRegex",i.strongPasswordRegex),r(5),b(i.password!=null&&i.password.touched?83:-1),r(6),b(i.confirmPassword!=null&&i.confirmPassword.touched?89:-1),r(3),u("options",i.subscriptions),r(10),u("binary",!0),r(7),u("binary",!0),r(10),b((s=i.formulaire.get("cgu"))!=null&&s.touched&&((s=i.formulaire.get("cgu"))!=null&&s.hasError("required"))?119:-1),r(2),u("disabled",i.formulaire.invalid)}},dependencies:[C,Ne,Fe,we,Se,ke,Te,$e,qe,Pe,Oe,Ve,xe,ze,Be,je,Re,Ue,He,Qe,Ge,Ie,Ce,he,ge,De,Le,Je,Q],encapsulation:2})}}return e})();var St=["list"],kt=e=>({"p-steps p-component":!0,"p-readonly":e}),Ft=(e,m)=>({"p-steps-item-active":e,"p-disabled":m}),Tt=()=>({exact:!1}),$t=(e,m)=>m.label;function Mt(e,m){if(e&1&&(a(0,"span",14),l(1),o()),e&2){let t=c(3).$implicit;r(),_(t.label)}}function Nt(e,m){if(e&1&&p(0,"span",15),e&2){let t=c(3).$implicit;u("innerHTML",t.label,R)}}function Lt(e,m){if(e&1){let t=H();a(0,"a",11),y("click",function(i){F(t);let s=c(2),d=s.$implicit,h=s.$index,E=c();return T(E.onItemClick(i,d,h))})("keydown",function(i){F(t);let s=c(2),d=s.$implicit,h=s.$index,E=c();return T(E.onItemKeydown(i,d,h))}),a(1,"span",12),l(2),o(),f(3,Mt,2,1,"span",13)(4,Nt,1,1,"ng-template",null,3,A),o()}if(e&2){let t=P(5),n=c(2),i=n.$implicit,s=n.$index,d=c();u("routerLink",i.routerLink)("queryParams",i.queryParams)("routerLinkActiveOptions",i.routerLinkActiveOptions||re(17,Tt))("target",i.target)("fragment",i.fragment)("queryParamsHandling",i.queryParamsHandling)("preserveFragment",i.preserveFragment)("skipLocationChange",i.skipLocationChange)("replaceUrl",i.replaceUrl)("state",i.state),S("tabindex",d.getItemTabIndex(i,s))("aria-expanded",s===d.activeIndex)("aria-disabled",i.disabled||d.readonly&&s!==d.activeIndex)("ariaCurrentWhenActive",d.exact?"step":void 0),r(2),_(s+1),r(),u("ngIf",i.escape!==!1)("ngIfElse",t)}}function Dt(e,m){if(e&1&&(a(0,"span",14),l(1),o()),e&2){let t=c(3).$implicit;r(),_(t.label)}}function Pt(e,m){if(e&1&&p(0,"span",15),e&2){let t=c(3).$implicit;u("innerHTML",t.label,R)}}function qt(e,m){if(e&1){let t=H();a(0,"a",16),y("click",function(i){F(t);let s=c(2),d=s.$implicit,h=s.$index,E=c();return T(E.onItemClick(i,d,h))})("keydown",function(i){F(t);let s=c(2),d=s.$implicit,h=s.$index,E=c();return T(E.onItemKeydown(i,d,h))}),a(1,"span",12),l(2),o(),f(3,Dt,2,1,"span",13)(4,Pt,1,1,"ng-template",null,4,A),o()}if(e&2){let t=P(5),n=c(2),i=n.$implicit,s=n.$index,d=c();u("target",i.target),S("href",i.url,Z)("tabindex",d.getItemTabIndex(i,s))("aria-expanded",s===d.activeIndex)("aria-disabled",i.disabled||d.readonly&&s!==d.activeIndex)("ariaCurrentWhenActive",d.exact&&(!i.disabled||d.readonly)?"step":void 0),r(2),_(s+1),r(),u("ngIf",i.escape!==!1)("ngIfElse",t)}}function At(e,m){if(e&1&&(a(0,"li",9,1),f(2,Lt,6,18,"a",10)(3,qt,6,9,"ng-template",null,2,A),o()),e&2){let t=P(4),n=c(),i=n.$implicit,s=n.$index,d=c();j(i.styleClass),u("ngStyle",i.style)("tooltipOptions",i.tooltipOptions)("ngClass",pe(10,Ft,d.isActive(i,s),i.disabled||d.readonly&&!d.isActive(i,s))),S("aria-current",d.isActive(i,s)?"step":void 0)("id",i.id)("data-pc-section","menuitem"),r(2),u("ngIf",d.isClickableRouterLink(i))("ngIfElse",t)}}function Vt(e,m){if(e&1&&f(0,At,5,13,"li",8),e&2){let t=m.$implicit;u("ngIf",t.visible!==!1)}}var Ot=({dt:e})=>`
.p-steps {
    position: relative;
}

.p-steps-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}

.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.p-steps-item.p-disabled,
.p-steps-item.p-disabled * {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;
    cursor: auto;
}

.p-steps-item:before {
    content: " ";
    border-top: 2px solid ${e("steps.separator.background")};
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
    margin-top: calc(-1rem + 1px);
}

.p-steps-item:first-child::before {
    width: calc(50% + 1rem);
    transform: translateX(100%);
}

.p-steps-item:last-child::before {
    width: 50%;
}

.p-steps-item-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    transition: outline-color ${e("steps.transition.duration")}, box-shadow ${e("steps.transition.duration")};
    border-radius: ${e("steps.item.link.border.radius")};
    outline-color: transparent;
    gap: ${e("steps.item.link.gap")};
}

.p-steps-item-link:not(.p-disabled):focus-visible {
    box-shadow: ${e("steps.item.link.focus.ring.shadow")};
    outline: ${e("steps.item.link.focus.ring.width")} ${e("steps.item.link.focus.ring.style")} ${e("steps.item.link.focus.ring.color")};
    outline-offset: ${e("steps.item.link.focus.ring.offset")};
}

.p-steps-item-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("steps.item.label.color")};
    display: block;
    font-weight: ${e("steps.item.label.font.weight")};
}

.p-steps-item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("steps.item.number.color")};
    border: 2px solid ${e("steps.item.number.border.color")};
    background: ${e("steps.item.number.background")};
    min-width: ${e("steps.item.number.size")};
    height: ${e("steps.item.number.size")};
    line-height: ${e("steps.item.number.size")};
    font-size: ${e("steps.item.number.font.size")};
    z-index: 1;
    border-radius: ${e("steps.item.number.border.radius")};
    position: relative;
    font-weight: ${e("steps.item.number.font.weight")};
}

.p-steps-item-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("steps.item.number.border.radius")};
    box-shadow: ${e("steps.item.number.shadow")};
}

.p-steps:not(.p-readonly) .p-steps-item {
    cursor: pointer;
}

.p-steps-item-active .p-steps-item-number {
    background: ${e("steps.item.number.active.background")};
    border-color: ${e("steps.item.number.active.border.color")};
    color: ${e("steps.item.number.active.color")};
}

.p-steps-item-active .p-steps-item-label {
    color: ${e("steps.item.label.active.color")};
}
`,Bt={root:({props:e})=>["p-steps p-component",{"p-readonly":e.readonly}],list:"p-steps-list",item:({instance:e,item:m,index:t})=>["p-steps-item",{"p-steps-item-active":e.isActive(t),"p-disabled":e.isItemDisabled(m,t)}],itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},Ze=(()=>{class e extends O{name="steps";theme=Ot;classes=Bt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=$({token:e,factory:e.\u0275fac})}return e})();var Y=(()=>{class e extends B{activeIndex=0;model;readonly=!0;style;styleClass;exact=!0;activeIndexChange=new N;listViewChild;router=x(V);route=x(k);_componentStyle=x(Ze);subscription;ngOnInit(){super.ngOnInit(),this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}onItemClick(t,n,i){if(this.readonly||n.disabled){t.preventDefault();return}this.activeIndexChange.emit(i),!n.url&&!n.routerLink&&t.preventDefault(),n.command&&n.command({originalEvent:t,item:n,index:i})}onItemKeydown(t,n,i){switch(t.code){case"ArrowRight":{this.navigateToNextItem(t.target),t.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(t.target),t.preventDefault();break}case"Home":{this.navigateToFirstItem(t.target),t.preventDefault();break}case"End":{this.navigateToLastItem(t.target),t.preventDefault();break}case"Tab":if(i!==this.activeIndex){let s=G(this.listViewChild.nativeElement,'[data-pc-section="menuitem"]');s[i].children[0].tabIndex="-1",s[this.activeIndex].children[0].tabIndex="0"}break;case"Enter":case"Space":{this.onItemClick(t,n,i),t.preventDefault();break}default:break}}navigateToNextItem(t){let n=this.findNextItem(t);n&&this.setFocusToMenuitem(t,n)}navigateToPrevItem(t){let n=this.findPrevItem(t);n&&this.setFocusToMenuitem(t,n)}navigateToFirstItem(t){let n=this.findFirstItem();n&&this.setFocusToMenuitem(t,n)}navigateToLastItem(t){let n=this.findLastItem();n&&this.setFocusToMenuitem(t,n)}findNextItem(t){let n=t.parentElement.nextElementSibling;return n?n.children[0]:null}findPrevItem(t){let n=t.parentElement.previousElementSibling;return n?n.children[0]:null}findFirstItem(){let t=_e(this.listViewChild.nativeElement,'[data-pc-section="menuitem"]');return t?t.children[0]:null}findLastItem(){let t=G(this.listViewChild.nativeElement,'[data-pc-section="menuitem"]');return t?t[t.length-1].children[0]:null}setFocusToMenuitem(t,n){t.tabIndex="-1",n.tabIndex="0",n.focus()}isClickableRouterLink(t){return t.routerLink&&!this.readonly&&!t.disabled}isActive(t,n){if(t.routerLink){let i=Array.isArray(t.routerLink)?t.routerLink:[t.routerLink];return this.router.isActive(this.router.createUrlTree(i,{relativeTo:this.route}).toString(),!1)}return n===this.activeIndex}getItemTabIndex(t,n){return t.disabled?"-1":!t.disabled&&this.activeIndex===n?t.tabindex||"0":t.tabindex??"-1"}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=v({type:e,selectors:[["p-steps"]],viewQuery:function(n,i){if(n&1&&ae(St,5),n&2){let s;oe(s=le())&&(i.listViewChild=s.first)}},inputs:{activeIndex:[2,"activeIndex","activeIndex",me],model:"model",readonly:[2,"readonly","readonly",U],style:"style",styleClass:"styleClass",exact:[2,"exact","exact",U]},outputs:{activeIndexChange:"activeIndexChange"},features:[q([Ze]),D],decls:5,vars:8,consts:[["list",""],["menuitem",""],["elseBlock",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngClass","ngStyle"],[1,"p-steps-list"],["pTooltip","",1,"p-steps-item",3,"ngStyle","class","tooltipOptions","ngClass"],["class","p-steps-item","pTooltip","",3,"ngStyle","class","tooltipOptions","ngClass",4,"ngIf"],["pTooltip","",1,"p-steps-item",3,"ngStyle","tooltipOptions","ngClass"],["role","link","class","p-steps-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown",4,"ngIf","ngIfElse"],["role","link",1,"p-steps-item-link",3,"click","keydown","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[1,"p-steps-item-number"],["class","p-steps-item-label",4,"ngIf","ngIfElse"],[1,"p-steps-item-label"],[1,"p-steps-item-label",3,"innerHTML"],["role","link",1,"p-steps-item-link",3,"click","keydown","target"]],template:function(n,i){n&1&&(a(0,"nav",5)(1,"ul",6,0),ee(3,Vt,1,1,"li",7,$t),o()()),n&2&&(j(i.styleClass),u("ngClass",se(6,kt,i.readonly))("ngStyle",i.style),S("data-pc-name","steps"),r(),S("data-pc-section","menu"),r(2),te(i.model))},dependencies:[C,ce,de,ue,be,fe,ye,ve,I],encapsulation:2,changeDetection:0})}return e})(),Xe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=L({type:e});static \u0275inj=M({imports:[Y,I,I]})}return e})();var et=(()=>{class e{constructor(){this.label=[]}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-etapes-inscription"]],inputs:{label:"label"},decls:2,vars:1,consts:[[1,"card"],["styleClass","mt-5",3,"model"]],template:function(n,i){n&1&&(a(0,"div",0),p(1,"p-steps",1),o()),n&2&&(r(),u("model",i.label))},dependencies:[Xe,Y],encapsulation:2})}}return e})();var ln=(()=>{class e{constructor(){this.authService=x(Ee),this.subscriptionsService=x(Ae),this.router=x(V),this.route=x(k),this.loading=W(!1)}ngOnInit(){this.label=[{label:"Formulaire d'inscription"},{label:"Ouverture du compte"}],this.subscriptionsService.getSubscriptions().subscribe(t=>{this.subscriptions=t;let n=t.find(i=>i.isDefault);n&&(this.defaultBackOption=n.code)})}validateFormToBack(t){this.loading.set(!0),this.authService.register(t).subscribe({next:()=>{this.router.navigate(["../succes"],{relativeTo:this.route})},error:()=>{this.loading.set(!1),this.router.navigate(["../echec"],{relativeTo:this.route})}})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-inscription"]],decls:2,vars:3,consts:[[3,"label"],[3,"submitForm","subscriptions","defaultBackOption"]],template:function(n,i){n&1&&(p(0,"app-etapes-inscription",0),a(1,"app-form-inscription",1),y("submitForm",function(d){return i.validateFormToBack(d)}),o()),n&2&&(u("label",i.label),r(),u("subscriptions",i.subscriptions)("defaultBackOption",i.defaultBackOption))},dependencies:[C,We,et],encapsulation:2})}}return e})();export{ln as InscriptionComponent};
