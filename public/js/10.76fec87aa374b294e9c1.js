webpackJsonp([10,27],{274:function(e,t,o){function n(e){o(316)}var d=o(4)(o(314),o(317),n,"data-v-4b54d21e",null);e.exports=d.exports},277:function(e,t,o){function n(e){o(341)}var d=o(4)(o(319),o(349),n,"data-v-e7159648",null);e.exports=d.exports},314:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),d=o.n(n);t.default={name:"todo",props:["id","name","date","completed"],data:function(){return{checked:!1}},computed:{completedTodo:function(){return this.completed},tijdstip:function(){return d()(this.date).format("HH:mm")}},methods:{toggleTodo:function(){console.log("test");var e={id:this.id,completed:this.completedTodo};this.$store.dispatch("TOGGLE_TODO",e)}}}},315:function(e,t,o){t=e.exports=o(272)(void 0),t.push([e.i,"li>[data-v-4b54d21e]{display:inline-block;margin-right:.5rem}li[data-v-4b54d21e]{padding:.9rem}p[data-v-4b54d21e]{margin:0}.completed[data-v-4b54d21e]{text-decoration:line-through;color:#a8a8a8}.todo-date[data-v-4b54d21e]{float:right;color:#a8a8a8;font-weight:400;font-size:.8rem}hr[data-v-4b54d21e]{height:1px;color:#e3e3e3;background:#e3e3e3;font-size:0;border:0}.todo-name[data-v-4b54d21e]{font-size:14px}",""])},316:function(e,t,o){var n=o(315);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(273)("4fefee14",n,!0)},317:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("li",{on:{click:e.toggleTodo}},[o("q-checkbox",{on:{input:e.toggleTodo},model:{value:e.completedTodo,callback:function(t){e.completedTodo=t},expression:"completedTodo"}}),e._v(" "),o("p",{staticClass:"todo-name",class:{completed:e.completed}},[e._v(e._s(e.name))]),e._v(" "),o("p",{staticClass:"todo-date"},[e._v(e._s(e.tijdstip))])],1),e._v(" "),o("hr")])},staticRenderFns:[]}},319:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(o(17),o(274)),d=o.n(n);o(29);t.default={name:"todo-list",props:["todoType"],components:{Todo:d.a},computed:{behandeling:function(){return"behandeling"===this.todoType?this.$store.getters.getBehandeling:this.$store.getters.getAllTodos}}}},333:function(e,t,o){t=e.exports=o(272)(void 0),t.push([e.i,"ul[data-v-e7159648]{list-style-type:none;padding:0;margin:0}",""])},341:function(e,t,o){var n=o(333);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(273)("1bcbee1e",n,!0)},349:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card"},[o("div",{staticClass:"card-title"},[o("p",{staticClass:"text-primary"},[e._v("TODOS VANDAAG")]),e._v(" "),o("ul",[e._l(e.behandeling.todos,function(t){return"behandeling"===e.todoType?o("todo",{attrs:{name:t.naam,date:t.date,completed:t.completed}}):e._e()}),e._v(" "),e._l(e.behandeling,function(t){return"overzicht"===e.todoType?o("todo",{attrs:{id:t.id,name:t.medicine.name,date:t.time_date,completed:!!t.done}}):e._e()})],2),e._v(" "),o("q-progress",{staticStyle:{height:"4px"},attrs:{percentage:100}})],1)])},staticRenderFns:[]}}});