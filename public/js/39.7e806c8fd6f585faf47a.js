webpackJsonp([39],{277:function(t,e,a){function i(t){a(346)}var n=a(4)(a(330),a(352),i,"data-v-f2fb4b06",null);t.exports=n.exports},330:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=a.n(i);e.default={name:"dashboard-afspraak-card",props:["patient","date","therapy","patientId"],computed:{timestamp:function(){return n()(this.date).format("H:mm")}},methods:{clickPatient:function(){this.$router.push({path:"arts/patienten/"+this.patientId})}}}},340:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".item[data-v-f2fb4b06]{border-bottom:1px solid #e0e0e0}.item button[data-v-f2fb4b06]{font-size:12px}.item .item-secondary[data-v-f2fb4b06]{width:120px;top:15px!important}",""])},346:function(t,e,a){var i=a(340);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("5279f576",i,!0)},352:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item three-lines"},[a("div",{staticClass:"item-content has-secondary"},[a("div",{staticClass:"item-title"},[t._v(t._s(t.timestamp))]),t._v(" "),a("div",{staticClass:"item-label item-smaller"},[t._v("\n                "+t._s(t.patient)),a("br"),t._v("\n                "+t._s(t.therapy)+"\n            ")])]),t._v(" "),a("button",{staticClass:"primary text-white small item-secondary",on:{click:function(e){t.clickPatient()}}},[t._v("\n        Bekijk patient\n    ")])])},staticRenderFns:[]}}});