webpackJsonp([8,26],{295:function(t,e,n){function i(t){n(393)}var s=n(4)(n(369),n(412),i,"data-v-197e9678",null);t.exports=s.exports},320:function(t,e,n){function i(t){n(492)}var s=n(4)(n(449),n(518),i,"data-v-9b0c0686",null);t.exports=s.exports},369:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"oefening-card",props:["title","description","therapy","id"],methods:{cardClick:function(){this.$router.push({path:"/behandeling/"+this.therapy+"/oefeningen/"+this.id})}}}},375:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,".card .card-content[data-v-197e9678]{padding:0}.card .card-content p[data-v-197e9678]{font-size:14px}",""])},393:function(t,e,n){var i=n(375);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(273)("f678d042",i,!0)},412:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",on:{click:t.cardClick}},[n("div",{staticClass:"card-title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"card-content"},[n("button",{staticClass:"button outline text-primary float-right"},[t._v("Bekijk")]),t._v(" "),n("p",[t._v(t._s(t.description))])])])},staticRenderFns:[]}},449:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(295),s=n.n(i);e.default={name:"overzicht",components:{OefeningCard:s.a},computed:{oefeningen:function(){return this.$store.getters.getAllOefeningen}}}},469:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,"",""])},492:function(t,e,n){var i=n(469);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(273)("8570120c",i,!0)},518:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-view"},[n("div",{staticClass:"layout-padding"},[n("p",{staticClass:"page-title"},[t._v("Oefeningen")]),t._v(" "),t._l(t.oefeningen,function(t){return n("oefening-card",{key:t.id,attrs:{id:t.id,title:t.title,description:t.description,therapy:t.pivot.therapy_id}})})],2)])},staticRenderFns:[]}}});