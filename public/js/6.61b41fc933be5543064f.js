webpackJsonp([6,19],{281:function(e,t,o){function d(e){o(344)}var a=o(4)(o(334),o(350),d,"data-v-a9a5dd6a",null);e.exports=a.exports},297:function(e,t,o){function d(e){o(400)}var a=o(4)(o(369),o(418),d,"data-v-8adfd4ee",null);e.exports=a.exports},334:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=o(0),a=o.n(d);t.default={name:"todo",props:["id","name","date","completed","type"],data:function(){return{checked:!1}},computed:{completedTodo:function(){return this.completed},tijdstip:function(){return a()(this.date).format("HH:mm")}},methods:{toggleTodo:function(){var e={id:this.id,completed:this.completedTodo,type:this.type};this.$store.dispatch("TOGGLE_TODO",e)}}}},338:function(e,t,o){t=e.exports=o(272)(void 0),t.push([e.i,"li>[data-v-a9a5dd6a]{display:inline-block;margin-right:.5rem}li[data-v-a9a5dd6a]{padding:.9rem}p[data-v-a9a5dd6a]{margin:0}.completed[data-v-a9a5dd6a]{text-decoration:line-through;color:#a8a8a8}.todo-date[data-v-a9a5dd6a]{float:right;color:#a8a8a8;font-weight:400;font-size:.8rem}hr[data-v-a9a5dd6a]{height:1px;color:#e3e3e3;background:#e3e3e3;font-size:0;border:0}.todo-name[data-v-a9a5dd6a]{font-size:14px}",""])},344:function(e,t,o){var d=o(338);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);o(273)("a6d94108",d,!0)},350:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("li",{on:{click:e.toggleTodo}},[o("q-checkbox",{on:{input:e.toggleTodo},model:{value:e.completedTodo,callback:function(t){e.completedTodo=t},expression:"completedTodo"}}),e._v(" "),o("p",{staticClass:"todo-name",class:{completed:e.completed}},[e._v(e._s(e.name))]),e._v(" "),o("p",{staticClass:"todo-date"},[e._v(e._s(e.tijdstip))])],1),e._v(" "),o("hr")])},staticRenderFns:[]}},369:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=(o(17),o(281)),a=o.n(d),i=o(29);t.default={name:"todo-list",props:["todoType"],components:{Todo:a.a},methods:{getTodoName:function(e){return"medicine"in e?e.medicine.name:"excercise"in e?e.excercise.title:void 0},getTodoType:function(e){return"medicine"in e?"medicine_todo":"excercise"in e?"excercise_todo":void 0}},computed:{todos:function(){return this.$store.getters.getAllTodos},todoProgress:function(){var e=this.todos.length;return i.filter(this.todos,["done",1]).length/e*100}}}},383:function(e,t,o){t=e.exports=o(272)(void 0),t.push([e.i,"ul[data-v-8adfd4ee]{list-style-type:none;padding:0;margin:0}",""])},400:function(e,t,o){var d=o(383);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);o(273)("2935ec02",d,!0)},418:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card"},[o("div",{staticClass:"card-title"},[o("p",{staticClass:"text-primary"},[e._v("TODOS VANDAAG")]),e._v(" "),o("ul",e._l(e.todos,function(t){return"overzicht"===e.todoType?o("todo",{key:t.id,attrs:{id:t.id,type:e.getTodoType(t),name:e.getTodoName(t),date:t.time_date,completed:!!t.done}}):e._e()})),e._v(" "),o("q-progress",{staticStyle:{height:"4px"},attrs:{percentage:e.todoProgress}})],1)])},staticRenderFns:[]}}});