webpackJsonp([15,36],{287:function(t,e,n){function i(t){n(400)}var s=n(4)(n(363),n(415),i,"data-v-c58f835e",null);t.exports=s.exports},308:function(t,e,n){function i(t){n(468)}var s=n(4)(n(428),n(493),i,"data-v-401ef4ec",null);t.exports=s.exports},363:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"oefening-card",props:["title","description","therapy","id"],methods:{cardClick:function(){this.$router.push({path:"/behandeling/"+this.therapy+"/oefeningen/"+this.id})}}}},386:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,".card .card-content[data-v-c58f835e]{padding:0}.card .card-content p[data-v-c58f835e]{font-size:14px}",""])},400:function(t,e,n){var i=n(386);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(273)("6c834908",i,!0)},415:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",on:{click:t.cardClick}},[n("div",{staticClass:"card-title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"card-content"},[n("button",{staticClass:"button outline text-primary float-right"},[t._v("Bekijk")]),t._v(" "),n("p",[t._v(t._s(t.description))])])])},staticRenderFns:[]}},428:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(287),s=n.n(i);e.default={name:"overzicht",components:{OefeningCard:s.a},computed:{oefeningen:function(){return this.$store.getters.getAllOefeningen}}}},445:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,"",""])},468:function(t,e,n){var i=n(445);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(273)("1f5cbe84",i,!0)},493:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-view"},[n("div",{staticClass:"layout-padding"},[n("p",{staticClass:"page-title"},[t._v("Oefeningen")]),t._v(" "),t._l(t.oefeningen,function(t){return n("oefening-card",{key:t.id,attrs:{id:t.id,title:t.title,description:t.description,therapy:t.pivot.therapy_id}})})],2)])},staticRenderFns:[]}}});