webpackJsonp([22],{318:function(t,e,n){function i(t){n(471)}var s=n(4)(n(442),n(496),i,"data-v-26f8c4c3",null);t.exports=s.exports},442:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(17);e.default={name:"oefening-page",created:function(){this.$store.commit("CHANGE_CURRENT_OEFENING",this.$route.params.typeOefening)},computed:{oefening:function(){return this.$store.getters.getOefening}}}},448:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,".card[data-v-26f8c4c3]{padding:0}.card .card-content[data-v-26f8c4c3]{padding:1rem}",""])},471:function(t,e,n){var i=n(448);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(273)("59633446",i,!0)},496:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-view"},[n("div",{staticClass:"layout-padding"},[n("p",{staticClass:"page-title"},[t._v(t._s(t.oefening.title))]),t._v(" "),n("div",{staticClass:"card"},[n("q-video",{attrs:{src:t.oefening.video.url}}),t._v(" "),n("div",{staticClass:"card-content"},[n("p",[t._v(t._s(t.oefening.title))]),t._v(" "),n("p",[t._v(t._s(t.oefening.description))])])],1)])])},staticRenderFns:[]}}});