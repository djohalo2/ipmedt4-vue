webpackJsonp([11,25],{274:function(e,t,a){function s(e){a(328)}var i=a(4)(a(321),a(331),s,"data-v-7abb2a28",null);e.exports=i.exports},290:function(e,t,a){function s(e){a(401)}var i=a(4)(a(366),a(416),s,"data-v-e3da9698",null);e.exports=i.exports},321:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"list-item",props:["title","subtitle"]}},325:function(e,t,a){t=e.exports=a(272)(void 0),t.push([e.i,".item[data-v-7abb2a28]{border-bottom:1px solid #e0e0e0}",""])},328:function(e,t,a){var s=a(325);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(273)("0e3b4c10",s,!0)},331:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-title"},[e._v(e._s(e.title))])])])},staticRenderFns:[]}},366:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(29),i=a.n(s),r=a(5),n=(a.n(r),a(17),a(0)),c=a.n(n),o=a(274),d=a.n(o);t.default={name:"behandeling-oefeningen",props:["oefeningen"],components:{ListItem:d.a},data:function(){return{terms:"",excerciseData:{sets:"",sets_amount:"",per_day:"",therapy_id:this.$route.params.behandelingId,id:0,start_date:c()().format(),end_date:c()().format(),title:""},now:c()().format()}},computed:{excercises:function(){return this.$store.getters.getAllExercises}},methods:{search:function(e,t){var a=[];this.excercises.map(function(t){i.a.includes(t.title.toLowerCase(),e.toLowerCase())&&a.push({label:t.title,id:t.id,value:t.title})}),t(a)},selected:function(e){this.excerciseData.id=e.id,this.excerciseData.title=e.label},addExercise:function(){this.$store.dispatch("ADD_EXCERCISE",this.excerciseData),this.$refs.addExerciseModal.close()}},created:function(){this.$store.dispatch("FETCH_ALL_EXERCISES")}}},387:function(e,t,a){t=e.exports=a(272)(void 0),t.push([e.i,".layout-padding[data-v-e3da9698]{padding-top:1rem}",""])},401:function(e,t,a){var s=a(387);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(273)("269de0c0",s,!0)},416:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[e._v("\n      Oefeningen\n      "),a("i",{staticClass:"float-right add-icon",on:{click:function(t){e.$refs.addExerciseModal.open()}}},[e._v("add_circle")])]),e._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"list"},e._l(e.oefeningen,function(e){return a("list-item",{key:e.id,attrs:{title:e.title}})}))])]),e._v(" "),a("q-modal",{ref:"addExerciseModal",staticClass:"minimized",attrs:{"content-css":{padding:"50px"}}},[a("p",[e._v("Oefening toevoegen")]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-autocomplete",{attrs:{delay:0},on:{search:e.search,selected:e.selected},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}},[a("q-search",{attrs:{placeholder:"Voeg een oefening toe"},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}})],1)],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-datetime",{staticClass:"patient-datepicker",attrs:{type:"date",placeholder:"Startdatum",min:e.now},model:{value:e.excerciseData.start_date,callback:function(t){e.excerciseData.start_date=t},expression:"excerciseData.start_date"}})],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-datetime",{staticClass:"patient-datepicker",attrs:{type:"date",placeholder:"Einddatum",min:e.now},model:{value:e.excerciseData.end_date,callback:function(t){e.excerciseData.end_date=t},expression:"excerciseData.end_date"}})],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.excerciseData.sets,expression:"excerciseData.sets"}],attrs:{placeholder:"Hoeveel sets"},domProps:{value:e.excerciseData.sets},on:{input:function(t){t.target.composing||(e.excerciseData.sets=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.excerciseData.sets_amount,expression:"excerciseData.sets_amount"}],attrs:{placeholder:"Aantal per set"},domProps:{value:e.excerciseData.sets_amount},on:{input:function(t){t.target.composing||(e.excerciseData.sets_amount=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.excerciseData.per_day,expression:"excerciseData.per_day"}],attrs:{placeholder:"Hoeveelheid per dag"},domProps:{value:e.excerciseData.per_day},on:{input:function(t){t.target.composing||(e.excerciseData.per_day=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"red",on:{click:function(t){e.addExercise()}}},[e._v("Toevoegen")])])],1)},staticRenderFns:[]}}});