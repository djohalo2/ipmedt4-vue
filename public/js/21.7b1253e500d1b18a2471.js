webpackJsonp([21],{281:function(t,i,e){function a(t){e(335)}var s=e(4)(e(323),e(343),a,"data-v-19f69950",null);t.exports=s.exports},323:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e(17);i.default={name:"dashboard-patient-card",props:["patient"],methods:{clickPatient:function(){this.$router.push({path:"arts/patienten/"+this.patient.id})}}}},327:function(t,i,e){i=t.exports=e(272)(void 0),i.push([t.i,".item[data-v-19f69950]{border-bottom:1px solid #e0e0e0;cursor:pointer}.item[data-v-19f69950]:hover{background-color:#f6f6f6}.item .item-primary[data-v-19f69950]{margin-right:1rem}.item img[data-v-19f69950]{width:44px;height:44px;border-radius:100%;margin-top:5px}.item i[data-v-19f69950]{cursor:pointer}",""])},335:function(t,i,e){var a=e(327);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(273)("e9889aa8",a,!0)},343:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"item three-lines",on:{click:function(i){t.clickPatient()}}},[e("img",{staticClass:"item-primary",attrs:{src:t.patient.avatar}}),t._v(" "),e("div",{staticClass:"item-content has-secondary"},[e("div",{staticClass:"item-title"},[t._v(t._s(t.patient.firstname+" "+t.patient.lastname))]),t._v(" "),e("div",{staticClass:"item-label item-smaller"},[t._v("\n                "+t._s(t.patient.phone)),e("br"),t._v("\n                "+t._s(t.patient.city)+"\n            ")])]),t._v(" "),e("div",{staticClass:"item-secondary stamp"},[t._v("\n        Nr. "+t._s(t.patient.id)+"\n    ")]),t._v(" "),e("i",{staticClass:"item-secondary"},[t._v("edit")])])},staticRenderFns:[]}}});