(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qq66:function(l,n,u){"use strict";u.r(n);var s=u("8Y7J");class t{}var o=u("pMnS"),i=u("s7LF"),e=u("SVse");class r{constructor(l){this.httpClient=l,this.url="",this.url="./assets/data/api/users.json"}fetchUsers(){return this.httpClient.get(this.url)}}class a{constructor(l,n,u){this.userLoginService=l,this.fb=n,this.router=u,this.password="",this.username="",this.showLogin="showLogin",this.show=!1,this.rForm=n.group({username:[null,i.o.required],password:[null,i.o.compose([i.o.required,i.o.minLength(8)])],validate:""})}ngOnInit(){this.userLoginService.fetchUsers().subscribe(l=>{console.log(l),this.userList=l},l=>{console.log("error")})}addPost(l){this.password=l.password,this.username=l.username;for(var n=0;n<this.userList.length;n++){var u=this.userList[n];if(u.name==l.username&&u.pwd==l.password){this.showLogin="calc",sessionStorage.setItem("loggedUser",u.name),this.router.navigateByUrl("/calc");break}}n==this.userList.length&&(this.showLogin="showLogin",this.username=l.username,this.show=!0)}showRegistration(){this.router.navigateByUrl("/reg/register")}}var b=u("iInd"),c=s.nb({encapsulation:0,styles:[[".loginBtn[_ngcontent-%COMP%]{margin-top:2%}"]],data:{}});function d(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,2,"div",[["class","alert"]],null,null,null,null,null)),(l()(),s.pb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Invalid User"]))],null,null)}function g(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,1,"div",[["class","alert"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["This field is required"]))],null,null)}function p(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,1,"div",[["class","alert"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Password must contain atleast 8 characters."]))],null,null)}function m(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,46,"div",[],null,null,null,null,null)),(l()(),s.pb(1,0,null,null,40,"div",[],null,null,null,null,null)),(l()(),s.pb(2,0,null,null,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==s.zb(l,4).onSubmit(u)&&t),"reset"===n&&(t=!1!==s.zb(l,4).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.addPost(o.rForm.value)&&t),t}),null,null)),s.ob(3,16384,null,0,i.s,[],null,null),s.ob(4,540672,null,0,i.g,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),s.Ab(2048,null,i.b,null,[i.g]),s.ob(6,16384,null,0,i.m,[[4,i.b]],null,null),(l()(),s.pb(7,0,null,null,34,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),s.pb(8,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(9,0,null,null,1,"h1",[["class","headingCenter"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Login"])),(l()(),s.eb(16777216,null,null,1,null,d)),s.ob(12,16384,null,0,e.h,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(l()(),s.pb(13,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(14,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(15,0,null,null,1,"label",[["for","username"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Username"])),(l()(),s.eb(16777216,null,null,1,null,g)),s.ob(18,16384,null,0,e.h,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(l()(),s.pb(19,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(20,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(21,0,null,null,5,"input",[["class","form-control"],["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==s.zb(l,22)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==s.zb(l,22).onTouched()&&t),"compositionstart"===n&&(t=!1!==s.zb(l,22)._compositionStart()&&t),"compositionend"===n&&(t=!1!==s.zb(l,22)._compositionEnd(u.target.value)&&t),t}),null,null)),s.ob(22,16384,null,0,i.c,[s.B,s.k,[2,i.a]],null,null),s.Ab(1024,null,i.j,(function(l){return[l]}),[i.c]),s.ob(24,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.j],[2,i.r]],{name:[0,"name"]},null),s.Ab(2048,null,i.k,null,[i.f]),s.ob(26,16384,null,0,i.l,[[4,i.k]],null,null),(l()(),s.pb(27,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(28,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(29,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Password"])),(l()(),s.eb(16777216,null,null,1,null,p)),s.ob(32,16384,null,0,e.h,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(l()(),s.pb(33,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(34,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(35,0,null,null,5,"input",[["class","form-control"],["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==s.zb(l,36)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==s.zb(l,36).onTouched()&&t),"compositionstart"===n&&(t=!1!==s.zb(l,36)._compositionStart()&&t),"compositionend"===n&&(t=!1!==s.zb(l,36)._compositionEnd(u.target.value)&&t),t}),null,null)),s.ob(36,16384,null,0,i.c,[s.B,s.k,[2,i.a]],null,null),s.Ab(1024,null,i.j,(function(l){return[l]}),[i.c]),s.ob(38,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.j],[2,i.r]],{name:[0,"name"]},null),s.Ab(2048,null,i.k,null,[i.f]),s.ob(40,16384,null,0,i.l,[[4,i.k]],null,null),(l()(),s.pb(41,0,null,null,0,"input",[["class","btn btn-primary loginBtn"],["type","submit"],["value","Submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),s.pb(42,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),s.pb(43,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Not a member? "])),(l()(),s.pb(45,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var s=!0;return"click"===n&&(s=!1!==l.component.showRegistration()&&s),s}),null,null)),(l()(),s.Cb(-1,null,["Register here"]))],(function(l,n){var u=n.component;l(n,4,0,u.rForm),l(n,12,0,1==u.show),l(n,18,0,!u.rForm.controls.username.valid&&u.rForm.controls.username.touched),l(n,24,0,"username"),l(n,32,0,!u.rForm.controls.password.valid&&u.rForm.controls.password.touched),l(n,38,0,"password")}),(function(l,n){var u=n.component;l(n,2,0,s.zb(n,6).ngClassUntouched,s.zb(n,6).ngClassTouched,s.zb(n,6).ngClassPristine,s.zb(n,6).ngClassDirty,s.zb(n,6).ngClassValid,s.zb(n,6).ngClassInvalid,s.zb(n,6).ngClassPending),l(n,21,0,s.zb(n,26).ngClassUntouched,s.zb(n,26).ngClassTouched,s.zb(n,26).ngClassPristine,s.zb(n,26).ngClassDirty,s.zb(n,26).ngClassValid,s.zb(n,26).ngClassInvalid,s.zb(n,26).ngClassPending),l(n,35,0,s.zb(n,40).ngClassUntouched,s.zb(n,40).ngClassTouched,s.zb(n,40).ngClassPristine,s.zb(n,40).ngClassDirty,s.zb(n,40).ngClassValid,s.zb(n,40).ngClassInvalid,s.zb(n,40).ngClassPending),l(n,41,0,!u.rForm.valid)}))}function h(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,1,"app-login",[],null,null,null,m,c)),s.ob(1,114688,null,0,a,[r,i.e,b.k],null,null)],(function(l,n){l(n,1,0)}),null)}var v=s.lb("app-login",a,h,{},{},[]);class f{constructor(l){this.httpClient=l,this.url="",this.url="./assets/data/api/users.json"}registerNewUser(l,n,u){this.httpClient.post(this.url,{name:l,email:n,pwd:u})}}class C{constructor(l,n,u,s){this.fb=l,this.userLoginService=n,this.registrationService=u,this.router=s,this.password="",this.username="",this.email="",this.rForm=l.group({username:[null,i.o.required],password:[null,i.o.compose([i.o.required,i.o.minLength(8)])],email:[],validate:""})}ngOnInit(){this.userLoginService.fetchUsers().subscribe(l=>{console.log(l),this.userList=l},l=>{console.log("error")})}addPost(l){this.password=l.password,this.username=l.username,this.email=l.email,this.checkUserExists(l.username,l.password)||this.registrationService.registerNewUser(this.username,this.email,this.password)}checkUserExists(l,n){for(var u=0;u<this.userList.length;u++){var s=this.userList[u];if(s.name==l&&s.pwd==n)return!0}if(u==this.userList.length)return console.log("User not found"),!1}back(){this.router.navigateByUrl("/reg")}}var z=s.nb({encapsulation:0,styles:[[""]],data:{}});function w(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,1,"div",[["class","alert"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["This field is required"]))],null,null)}function y(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,1,"div",[["class","alert"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Please enter a valid email"]))],null,null)}function k(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,1,"div",[["class","alert"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Password must contain atleast 8 characters."]))],null,null)}function I(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==s.zb(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==s.zb(l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.addPost(o.rForm.value)&&t),t}),null,null)),s.ob(1,16384,null,0,i.s,[],null,null),s.ob(2,540672,null,0,i.g,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),s.Ab(2048,null,i.b,null,[i.g]),s.ob(4,16384,null,0,i.m,[[4,i.b]],null,null),(l()(),s.pb(5,0,null,null,45,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),s.pb(6,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(7,0,null,null,1,"h1",[["class","headingCenter"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Registration"])),(l()(),s.pb(9,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(10,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(11,0,null,null,1,"label",[["for","username"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Username"])),(l()(),s.eb(16777216,null,null,1,null,w)),s.ob(14,16384,null,0,e.h,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(l()(),s.pb(15,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(16,0,null,null,5,"input",[["class","form-control"],["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==s.zb(l,17)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==s.zb(l,17).onTouched()&&t),"compositionstart"===n&&(t=!1!==s.zb(l,17)._compositionStart()&&t),"compositionend"===n&&(t=!1!==s.zb(l,17)._compositionEnd(u.target.value)&&t),t}),null,null)),s.ob(17,16384,null,0,i.c,[s.B,s.k,[2,i.a]],null,null),s.Ab(1024,null,i.j,(function(l){return[l]}),[i.c]),s.ob(19,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.j],[2,i.r]],{name:[0,"name"]},null),s.Ab(2048,null,i.k,null,[i.f]),s.ob(21,16384,null,0,i.l,[[4,i.k]],null,null),(l()(),s.pb(22,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(23,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(24,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["email"])),(l()(),s.eb(16777216,null,null,1,null,y)),s.ob(27,16384,null,0,e.h,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(l()(),s.pb(28,0,null,null,8,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(29,0,null,null,7,"input",[["class","form-control"],["email",""],["formControlName","email"],["ngMogel",""],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==s.zb(l,30)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==s.zb(l,30).onTouched()&&t),"compositionstart"===n&&(t=!1!==s.zb(l,30)._compositionStart()&&t),"compositionend"===n&&(t=!1!==s.zb(l,30)._compositionEnd(u.target.value)&&t),t}),null,null)),s.ob(30,16384,null,0,i.c,[s.B,s.k,[2,i.a]],null,null),s.ob(31,16384,null,0,i.d,[],{email:[0,"email"]},null),s.Ab(1024,null,i.i,(function(l){return[l]}),[i.d]),s.Ab(1024,null,i.j,(function(l){return[l]}),[i.c]),s.ob(34,671744,null,0,i.f,[[3,i.b],[6,i.i],[8,null],[6,i.j],[2,i.r]],{name:[0,"name"]},null),s.Ab(2048,null,i.k,null,[i.f]),s.ob(36,16384,null,0,i.l,[[4,i.k]],null,null),(l()(),s.pb(37,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.pb(38,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(39,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),s.Cb(-1,null,["Password"])),(l()(),s.eb(16777216,null,null,1,null,k)),s.ob(42,16384,null,0,e.h,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(l()(),s.pb(43,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),s.pb(44,0,null,null,5,"input",[["class","form-control"],["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==s.zb(l,45)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==s.zb(l,45).onTouched()&&t),"compositionstart"===n&&(t=!1!==s.zb(l,45)._compositionStart()&&t),"compositionend"===n&&(t=!1!==s.zb(l,45)._compositionEnd(u.target.value)&&t),t}),null,null)),s.ob(45,16384,null,0,i.c,[s.B,s.k,[2,i.a]],null,null),s.Ab(1024,null,i.j,(function(l){return[l]}),[i.c]),s.ob(47,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.j],[2,i.r]],{name:[0,"name"]},null),s.Ab(2048,null,i.k,null,[i.f]),s.ob(49,16384,null,0,i.l,[[4,i.k]],null,null),(l()(),s.pb(50,0,null,null,0,"input",[["class","btn btn-primary"],["type","submit"],["value","Register"]],[[8,"disabled",0]],null,null,null,null)),(l()(),s.pb(51,0,null,null,1,"button",[["class","btn calc"]],null,[[null,"click"]],(function(l,n,u){var s=!0;return"click"===n&&(s=!1!==l.component.back()&&s),s}),null,null)),(l()(),s.Cb(-1,null,["Back"]))],(function(l,n){var u=n.component;l(n,2,0,u.rForm),l(n,14,0,!u.rForm.controls.username.valid&&u.rForm.controls.username.touched),l(n,19,0,"username"),l(n,27,0,!u.rForm.controls.email.valid&&u.rForm.controls.email.touched),l(n,31,0,""),l(n,34,0,"email"),l(n,42,0,!u.rForm.controls.password.valid&&u.rForm.controls.password.touched),l(n,47,0,"password")}),(function(l,n){var u=n.component;l(n,0,0,s.zb(n,4).ngClassUntouched,s.zb(n,4).ngClassTouched,s.zb(n,4).ngClassPristine,s.zb(n,4).ngClassDirty,s.zb(n,4).ngClassValid,s.zb(n,4).ngClassInvalid,s.zb(n,4).ngClassPending),l(n,16,0,s.zb(n,21).ngClassUntouched,s.zb(n,21).ngClassTouched,s.zb(n,21).ngClassPristine,s.zb(n,21).ngClassDirty,s.zb(n,21).ngClassValid,s.zb(n,21).ngClassInvalid,s.zb(n,21).ngClassPending),l(n,29,0,s.zb(n,36).ngClassUntouched,s.zb(n,36).ngClassTouched,s.zb(n,36).ngClassPristine,s.zb(n,36).ngClassDirty,s.zb(n,36).ngClassValid,s.zb(n,36).ngClassInvalid,s.zb(n,36).ngClassPending),l(n,44,0,s.zb(n,49).ngClassUntouched,s.zb(n,49).ngClassTouched,s.zb(n,49).ngClassPristine,s.zb(n,49).ngClassDirty,s.zb(n,49).ngClassValid,s.zb(n,49).ngClassInvalid,s.zb(n,49).ngClassPending),l(n,50,0,!u.rForm.valid)}))}function S(l){return s.Db(0,[(l()(),s.pb(0,0,null,null,1,"app-registration",[],null,null,null,I,z)),s.ob(1,114688,null,0,C,[i.e,r,f,b.k],null,null)],(function(l,n){l(n,1,0)}),null)}var P=s.lb("app-registration",C,S,{},{},[]),F=u("IheW");class U{constructor(l){this.httpClient=l,this.url="",this.url="./assets/data/api/previousCalc.json/?name="}fetchPreviousData(l){return this.httpClient.get(this.url+l).pipe()}}class L{}u.d(n,"RegisterModuleNgFactory",(function(){return D}));var D=s.mb(t,[],(function(l){return s.xb([s.yb(512,s.j,s.X,[[8,[o.a,v,P]],[3,s.j],s.v]),s.yb(4608,e.j,e.i,[s.s,[2,e.p]]),s.yb(4608,i.e,i.e,[]),s.yb(4608,i.q,i.q,[]),s.yb(4608,F.h,F.n,[e.c,s.z,F.l]),s.yb(4608,F.o,F.o,[F.h,F.m]),s.yb(5120,F.a,(function(l){return[l]}),[F.o]),s.yb(4608,F.k,F.k,[]),s.yb(6144,F.i,null,[F.k]),s.yb(4608,F.g,F.g,[F.i]),s.yb(6144,F.b,null,[F.g]),s.yb(4608,F.f,F.j,[F.b,s.p]),s.yb(4608,F.c,F.c,[F.f]),s.yb(4608,r,r,[F.c]),s.yb(4608,U,U,[F.c]),s.yb(4608,f,f,[F.c]),s.yb(1073742336,e.b,e.b,[]),s.yb(1073742336,b.l,b.l,[[2,b.q],[2,b.k]]),s.yb(1073742336,L,L,[]),s.yb(1073742336,i.p,i.p,[]),s.yb(1073742336,i.n,i.n,[]),s.yb(1073742336,i.h,i.h,[]),s.yb(1073742336,F.e,F.e,[]),s.yb(1073742336,F.d,F.d,[]),s.yb(1073742336,t,t,[]),s.yb(1024,b.i,(function(){return[[{path:"",children:[{path:"",component:a},{path:"register",component:C}]}]]}),[]),s.yb(256,F.l,"XSRF-TOKEN",[]),s.yb(256,F.m,"X-XSRF-TOKEN",[])])}))}}]);