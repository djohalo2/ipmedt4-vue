webpackJsonp([44],{284:function(t,e,a){function i(t){a(397)}var s=a(4)(a(360),a(412),i,"data-v-5d7e312f",null);t.exports=s.exports},360:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(a(17),a(0)),s=a.n(i);e.default={name:"afspraken-timeline-item",props:["doctor","status","date","department","title"],computed:{datum:function(){return s()(this.date).format("DD-MM-YYYY")},tijdstip:function(){return s()(this.date).format("HH:mm")},afspraakStatus:function(){return s()(this.date).diff(s()())<0?"check":"alarm"},getBadge:function(){return"check"==this.afspraakStatus?"bg-positive":"bg-warning"}}}},383:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".card-content[data-v-5d7e312f]{padding-top:0}",""])},397:function(t,e,a){var i=a(383);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("332278a0",i,!0)},412:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-badge",class:t.getBadge},[a("i",[t._v(t._s(t.afspraakStatus))])]),t._v(" "),a("div",{staticClass:"timeline-title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),a("div",{staticClass:"timeline-date text-italic"},[a("div",[t._v(t._s(t.tijdstip))]),t._v(" "),a("div",[t._v(t._s(t.datum))])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[t._v("\n      Afdeling "+t._s(t.department)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-content"},[t._v("\n      Afspraak met "+t._s(t.doctor)+"\n    ")])])])},staticRenderFns:[]}}});