webpackJsonp([12],{239:function(t,a,e){function i(t){e(346)}var o=e(3)(e(313),e(366),i,"data-v-14fcc341",null);t.exports=o.exports},313:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e(7);a.default={data:function(){return{username:"",password:""}},computed:{token:function(){this.$store.getters.getToken}},methods:{login:function(){var t=this,a={username:this.username,password:this.password};this.$store.dispatch("FETCH_TOKEN",a).then(function(){setTimeout(function(){"unauthorized"!==t.token&&t.$store.dispatch("FETCH_PATIENT")},300)})}}}},328:function(t,a,e){a=t.exports=e(218)(void 0),a.push([t.i,"[data-v-14fcc341]{box-sizing:border-box}.layout-view[data-v-14fcc341]{background-image:url("+e(363)+");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:50%;width:100vw;height:100vh}.avatar[data-v-14fcc341]{height:120px;width:120px;padding:.7rem;border-radius:50%;background-color:#fff;margin:-2rem auto;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.avatar img[data-v-14fcc341]{margin:1rem auto}.card[data-v-14fcc341]{background-color:hsla(0,0%,100%,.95);max-width:400px;margin:2rem auto;position:relative;overflow:visible}.card-title[data-v-14fcc341]{text-align:center;font-size:50px;font-weight:300}.card-title p[data-v-14fcc341]{color:#666}#logo[data-v-14fcc341]{width:80px;opacity:1}.page-title[data-v-14fcc341]{font-size:.85rem;font-weight:500;color:#a8a8a8;margin:.5rem 0}.floating-label label[data-v-14fcc341]{font-size:16px;opacity:1}form[data-v-14fcc341]{text-align:center}form [data-v-14fcc341]{margin-top:10px}form button[data-v-14fcc341]{margin:20px}",""])},346:function(t,a,e){var i=e(328);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(219)("22b526a8",i,!0)},363:function(t,a,e){t.exports=e.p+"img/loginscreen.e91a395.png"},364:function(t,a,e){t.exports=e.p+"img/logo_small.f6926a1.png"},366:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"layout-view"},[e("div",{staticClass:"layout-padding"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-content"},[e("form",{staticClass:"login"},["unauthorized"===t.token?e("div",{staticClass:"card bg-warning"},[e("div",{staticClass:"card-title"},[t._v("Het ingevulde gebruikersnaam/wachtwoord klopt niet.")])]):t._e(),t._v(" "),e("div",{staticClass:"floating-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"full-width",attrs:{required:""},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}}),t._v(" "),e("label",[t._v("Gebruikersnaam")])]),t._v(" "),e("div",{staticClass:"floating-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"full-width",attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),e("label",[t._v("Wachtwoord")])]),t._v(" "),e("button",{staticClass:"primary",on:{submit:function(t){t.preventDefault()},click:t.login}},[t._v("\n                  Log in\n                ")])])])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card-title"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{id:"logo",src:e(364)}})])])}]}}});