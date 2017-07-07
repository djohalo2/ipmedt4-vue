webpackJsonp([14,37],{294:function(t,e,a){function s(t){a(401)}var n=a(4)(a(371),a(422),s,"data-v-2000b44e",null);t.exports=n.exports},313:function(t,e,a){function s(t){a(487)}var n=a(4)(a(451),a(515),s,"data-v-21034776",null);t.exports=n.exports},371:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(a(17),a(0)),n=a.n(s);e.default={name:"afspraken-timeline-item",props:["doctor","status","date","department","title"],computed:{datum:function(){return n()(this.date).format("DD-MM-YYYY")},tijdstip:function(){return n()(this.date).format("HH:mm")},afspraakStatus:function(){return"canceled"!=this.status?n()(this.date).diff(n()())<0?"check":"alarm":"close"},getBadge:function(){return"canceled"!=this.status?"check"==this.afspraakStatus?"bg-positive":"bg-warning":"bg-primary"}}}},381:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".card-content[data-v-2000b44e]{padding-top:0}",""])},401:function(t,e,a){var s=a(381);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(273)("487f519c",s,!0)},422:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-badge",class:t.getBadge},[a("i",[t._v(t._s(t.afspraakStatus))])]),t._v(" "),a("div",{staticClass:"timeline-title"},[t._v("\n    "+t._s(t.title)+" "),"canceled"==t.status?a("span",[t._v("(Geannuleerd)")]):t._e()]),t._v(" "),a("div",{staticClass:"timeline-date text-italic"},[a("div",[t._v(t._s(t.tijdstip))]),t._v(" "),a("div",[t._v(t._s(t.datum))])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[t._v("\n      Afdeling "+t._s(t.department)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-content"},[t._v("\n      Afspraak met "+t._s(t.doctor)+"\n    ")])])])},staticRenderFns:[]}},451:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(a(17),a(294)),n=a.n(s);e.default={name:"afspraken",components:{AfsprakenTimelineItem:n.a},computed:{appointments:function(){return this.$store.getters.getAllAppointsments}}}},464:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".timeline[data-v-21034776]{margin-top:1rem}",""])},487:function(t,e,a){var s=a(464);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(273)("1d05c2e9",s,!0)},515:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-view"},[a("div",{staticClass:"layout-padding"},[a("div",{staticClass:"timeline"},t._l(t.appointments,function(t){return a("afspraken-timeline-item",{key:t.id,attrs:{doctor:t.doctor.gender+" "+t.doctor.lastname,status:t.status,date:t.start,title:t.title,department:t.doctor.department.naam}})}))])])},staticRenderFns:[]}}});