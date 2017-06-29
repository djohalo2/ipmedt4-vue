webpackJsonp([2,10,27,34],{274:function(e,t,n){function i(e){n(316)}var a=n(4)(n(314),n(317),i,"data-v-4b54d21e",null);e.exports=a.exports},276:function(e,t,n){function i(e){n(340)}var a=n(4)(n(318),n(348),i,"data-v-dc55b2ea",null);e.exports=a.exports},277:function(e,t,n){function i(e){n(341)}var a=n(4)(n(319),n(349),i,"data-v-e7159648",null);e.exports=a.exports},295:function(e,t,n){function i(e){n(439)}var a=n(4)(n(389),n(463),i,"data-v-4c7aa070",null);e.exports=a.exports},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n.n(i);t.default={name:"todo",props:["id","name","date","completed"],data:function(){return{checked:!1}},computed:{completedTodo:function(){return this.completed},tijdstip:function(){return a()(this.date).format("HH:mm")}},methods:{toggleTodo:function(){console.log("test");var e={id:this.id,completed:this.completedTodo};this.$store.dispatch("TOGGLE_TODO",e)}}}},315:function(e,t,n){t=e.exports=n(272)(void 0),t.push([e.i,"li>[data-v-4b54d21e]{display:inline-block;margin-right:.5rem}li[data-v-4b54d21e]{padding:.9rem}p[data-v-4b54d21e]{margin:0}.completed[data-v-4b54d21e]{text-decoration:line-through;color:#a8a8a8}.todo-date[data-v-4b54d21e]{float:right;color:#a8a8a8;font-weight:400;font-size:.8rem}hr[data-v-4b54d21e]{height:1px;color:#e3e3e3;background:#e3e3e3;font-size:0;border:0}.todo-name[data-v-4b54d21e]{font-size:14px}",""])},316:function(e,t,n){var i=n(315);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(273)("4fefee14",i,!0)},317:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("li",{on:{click:e.toggleTodo}},[n("q-checkbox",{on:{input:e.toggleTodo},model:{value:e.completedTodo,callback:function(t){e.completedTodo=t},expression:"completedTodo"}}),e._v(" "),n("p",{staticClass:"todo-name",class:{completed:e.completed}},[e._v(e._s(e.name))]),e._v(" "),n("p",{staticClass:"todo-date"},[e._v(e._s(e.tijdstip))])],1),e._v(" "),n("hr")])},staticRenderFns:[]}},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(17);t.default={name:"medicatie-list",props:["medicatie"],methods:{labelClick:function(e,t){this.$store.commit("CHANGE_CURRENT_BEHANDELING",t),this.$router.push({path:e})}}}},319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(n(17),n(274)),a=n.n(i);n(29);t.default={name:"todo-list",props:["todoType"],components:{Todo:a.a},computed:{behandeling:function(){return"behandeling"===this.todoType?this.$store.getters.getBehandeling:this.$store.getters.getAllTodos}}}},332:function(e,t,n){t=e.exports=n(272)(void 0),t.push([e.i,".no-entries-msg[data-v-dc55b2ea]{font-size:.85rem;font-weight:500;color:#a8a8a8}span[data-v-dc55b2ea]{color:#fff;margin-right:.5rem;margin-bottom:.5rem;font-size:13px;padding:.6rem}",""])},333:function(e,t,n){t=e.exports=n(272)(void 0),t.push([e.i,"ul[data-v-e7159648]{list-style-type:none;padding:0;margin:0}",""])},340:function(e,t,n){var i=n(332);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(273)("c9809940",i,!0)},341:function(e,t,n){var i=n(333);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(273)("1bcbee1e",i,!0)},348:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-title"},[n("p",{staticClass:"text-primary"},[e._v("HUIDIGE MEDICATIE")]),e._v(" "),0===e.medicatie.length?n("p",{staticClass:"no-entries-msg"},[e._v("\n            Er zijn geen medicijnen aanwezig in deze behandeling.\n        ")]):e._e(),e._v(" "),e._l(e.medicatie,function(t){return n("span",{staticClass:"label bg-primary",on:{click:function(n){e.labelClick("/behandeling/"+t.pivot.therapy_id+"/medicatie/"+t.id,t.pivot.therapy_id)}}},[e._v("\n            "+e._s(t.name)+"\n        ")])})],2)])},staticRenderFns:[]}},349:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-title"},[n("p",{staticClass:"text-primary"},[e._v("TODOS VANDAAG")]),e._v(" "),n("ul",[e._l(e.behandeling.todos,function(t){return"behandeling"===e.todoType?n("todo",{attrs:{name:t.naam,date:t.date,completed:t.completed}}):e._e()}),e._v(" "),e._l(e.behandeling,function(t){return"overzicht"===e.todoType?n("todo",{attrs:{id:t.id,name:t.medicine.name,date:t.time_date,completed:!!t.done}}):e._e()})],2),e._v(" "),n("q-progress",{staticStyle:{height:"4px"},attrs:{percentage:100}})],1)])},staticRenderFns:[]}},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(n(17),n(277)),a=n.n(i),o=n(276),s=n.n(o);t.default={name:"behandeling-page",components:{TodoList:a.a,MedicatieList:s.a},methods:{clickLink:function(){this.$router.push({path:this.behandeling.id+"/medicatie"})}},created:function(){this.$store.commit("CHANGE_CURRENT_BEHANDELING",this.$route.params.typeBehandeling)},computed:{behandeling:function(){return this.$store.getters.getBehandeling}}}},417:function(e,t,n){t=e.exports=n(272)(void 0),t.push([e.i,".no-entries-msg[data-v-4c7aa070]{font-size:.85rem;font-weight:500;color:#a8a8a8}span[data-v-4c7aa070]{color:#fff;margin-right:.5rem;margin-bottom:.5rem;font-size:13px}",""])},439:function(e,t,n){var i=n(417);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(273)("3735735e",i,!0)},463:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-view"},[n("div",{staticClass:"layout-padding"},[n("p",{staticClass:"page-title"},[e._v(e._s(e.behandeling.title))]),e._v(" "),n("todo-list",{attrs:{todoType:"behandeling"}}),e._v(" "),n("medicatie-list",{attrs:{medicatie:e.behandeling.medicatie}}),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-title"},[n("p",{staticClass:"text-primary"},[e._v("OEFENINGEN")]),e._v(" "),0===e.behandeling.oefeningen.length?n("p",{staticClass:"no-entries-msg"},[e._v("\n                    Er zijn geen oefeningen aanwezig in deze behandeling.\n                ")]):e._e(),e._v(" "),e._l(e.behandeling.oefeningen,function(t){return n("span",{staticClass:"label bg-primary"},[e._v("\n                    "+e._s(t.title)+"\n                ")])})],2)])],1)])},staticRenderFns:[]}}});