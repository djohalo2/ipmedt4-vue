webpackJsonp([22],{246:function(t,a,i){function e(t){i(355)}var n=i(3)(i(320),i(375),e,"data-v-5829cb96",null);t.exports=n.exports},320:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"patient-informatie",computed:{patient:function(){return this.$store.getters.getPatientInfo}}}},337:function(t,a,i){a=t.exports=i(218)(void 0),a.push([t.i,".layout-view[data-v-5829cb96]{background-color:#f6f6f6}.profile-name[data-v-5829cb96]{text-align:center;font-weight:600;font-size:1.1rem;margin-top:1rem}.profile-img[data-v-5829cb96]{width:80px;height:80px;border-radius:100%;margin:0 auto;display:block}.card[data-v-5829cb96]{margin-top:1rem}li>[data-v-5829cb96]{display:inline-block}li[data-v-5829cb96]{list-style-type:none;font-weight:400}ul[data-v-5829cb96]{padding:0}",""])},355:function(t,a,i){var e=i(337);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(219)("2aa33aa6",e,!0)},375:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"layout-view"},[i("div",{staticClass:"layout-padding"},[i("p",{staticClass:"profile-name"},[t._v(t._s(t.patient.name))]),t._v(" "),i("img",{staticClass:"profile-img",attrs:{src:t.patient.avatar}}),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("p",{staticClass:"text-primary"},[t._v("MIJN GEGEVENS")]),t._v(" "),i("ul",[i("li",[i("i",[t._v("person")]),t._v(" "),i("p",[t._v(t._s(t.patient.name))])]),t._v(" "),i("li",[i("i",[t._v("email")]),t._v(" "),i("p",[t._v(t._s(t.patient.email))])]),t._v(" "),i("li",[i("i",[t._v("smartphone")]),t._v(" "),i("p",[t._v(t._s(t.patient.phone))])]),t._v(" "),i("li",[i("i",[t._v("today")]),t._v(" "),i("p",[t._v(t._s(t.patient.birthday))])]),t._v(" "),i("li",[i("i",[t._v("today")]),t._v(" "),i("p",[t._v(t._s(t.patient.address))])]),t._v(" "),i("li",[i("i",[t._v("today")]),t._v(" "),i("p",[t._v(t._s(t.patient.city))])])])])])])])},staticRenderFns:[]}}});