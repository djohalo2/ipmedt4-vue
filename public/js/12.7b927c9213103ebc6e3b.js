webpackJsonp([12,36],{282:function(t,e,a){function n(t){a(364)}var i=a(4)(a(344),a(372),n,"data-v-5d7e312f",null);t.exports=i.exports},291:function(t,e,a){function n(t){a(437)}var i=a(4)(a(377),a(461),n,"data-v-86ba8eca",null);t.exports=i.exports},344:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(a(17),a(0)),i=a.n(n);e.default={name:"afspraken-timeline-item",props:["doctor","status","date","department","title"],computed:{datum:function(){return i()(this.date).format("DD-MM-YYYY")},tijdstip:function(){return i()(this.date).format("HH:mm")},afspraakStatus:function(){return status=i()(this.date).diff(i()())<0?"check":"alarm"}}}},356:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".card-content[data-v-5d7e312f]{padding-top:0}",""])},364:function(t,e,a){var n=a(356);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(273)("332278a0",n,!0)},372:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-badge bg-warning"},[a("i",[t._v(t._s(t.afspraakStatus))])]),t._v(" "),a("div",{staticClass:"timeline-title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),a("div",{staticClass:"timeline-date text-italic"},[a("div",[t._v(t._s(t.tijdstip))]),t._v(" "),a("div",[t._v(t._s(t.datum))])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[t._v("\n      Afdeling "+t._s(t.department)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-content"},[t._v("\n      Afspraak met "+t._s(t.doctor)+"\n    ")])])])},staticRenderFns:[]}},377:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(a(17),a(282)),i=a.n(n);e.default={name:"afspraken",components:{AfsprakenTimelineItem:i.a},computed:{appointments:function(){return this.$store.getters.getAllAppointsments}}}},415:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".timeline[data-v-86ba8eca]{margin-top:1rem}",""])},437:function(t,e,a){var n=a(415);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(273)("45a00d4d",n,!0)},461:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-view"},[a("div",{staticClass:"layout-padding"},[a("div",{staticClass:"timeline"},t._l(t.appointments,function(t){return a("afspraken-timeline-item",{key:t.id,attrs:{doctor:t.doctor.gender+" "+t.doctor.lastname,status:t.status,date:t.time_date,title:t.title,department:t.doctor.department.naam}})}))])])},staticRenderFns:[]}}});