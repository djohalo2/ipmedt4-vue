webpackJsonp([36],{282:function(t,a,e){function i(t){e(364)}var s=e(4)(e(344),e(372),i,"data-v-5d7e312f",null);t.exports=s.exports},344:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=(e(17),e(0)),s=e.n(i);a.default={name:"afspraken-timeline-item",props:["doctor","status","date","department","title"],computed:{datum:function(){return s()(this.date).format("DD-MM-YYYY")},tijdstip:function(){return s()(this.date).format("HH:mm")},afspraakStatus:function(){return status=s()(this.date).diff(s()())<0?"check":"alarm"}}}},356:function(t,a,e){a=t.exports=e(272)(void 0),a.push([t.i,".card-content[data-v-5d7e312f]{padding-top:0}",""])},364:function(t,a,e){var i=e(356);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(273)("332278a0",i,!0)},372:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"timeline-item"},[e("div",{staticClass:"timeline-badge bg-warning"},[e("i",[t._v(t._s(t.afspraakStatus))])]),t._v(" "),e("div",{staticClass:"timeline-title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"timeline-date text-italic"},[e("div",[t._v(t._s(t.tijdstip))]),t._v(" "),e("div",[t._v(t._s(t.datum))])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-title"},[t._v("\n      Afdeling "+t._s(t.department)+"\n    ")]),t._v(" "),e("div",{staticClass:"card-content"},[t._v("\n      Afspraak met "+t._s(t.doctor)+"\n    ")])])])},staticRenderFns:[]}}});