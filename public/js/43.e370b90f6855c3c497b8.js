webpackJsonp([43],{299:function(t,e,i){function s(t){i(478)}var n=i(4)(i(419),i(503),s,"data-v-7637e870",null);t.exports=n.exports},419:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"arts-notitie-page",computed:{artsNotities:function(){return this.$store.getters.getArtsNotities},patientId:function(){return this.$store.getters.getPatientId}}}},455:function(t,e,i){e=t.exports=i(272)(void 0),e.push([t.i,".list[data-v-7637e870]{background-color:#fff;margin-top:1.2rem}button[data-v-7637e870]{margin:1rem;box-shadow:0 10px 20px rgba(0,0,0,.12),0 4px 5px rgba(0,0,0,.13)}.no-entries-msg[data-v-7637e870]{color:#a8a8a8}",""])},478:function(t,e,i){var s=i(455);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(273)("54372425",s,!0)},503:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-view"},[i("div",{staticClass:"layout-padding"},[i("p",{staticClass:"page-title"},[t._v("ARTS NOTITIES")]),t._v(" "),0===t.artsNotities.length?i("p",{staticClass:"no-entries-msg"},[t._v("\n            Er zijn geen notities gevonden.\n        ")]):t._e(),t._v(" "),t.artsNotities.length>0?i("div",{staticClass:"list item-delimiter"},t._l(t.artsNotities,function(e,s){return i("q-collapsible",{key:s,attrs:{group:"notities",label:e.title}},[i("div",[i("p",[t._v(t._s(e.note))])])])})):t._e()])])},staticRenderFns:[]}}});