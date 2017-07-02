webpackJsonp([2,14,15,41,43],{274:function(e,t,a){function i(e){a(325)}var n=a(4)(a(322),a(327),i,"data-v-299d960e",null);e.exports=n.exports},284:function(e,t,a){function i(e){a(401)}var n=a(4)(a(356),a(419),i,"data-v-8dc2d558",null);e.exports=n.exports},285:function(e,t,a){function i(e){a(395)}var n=a(4)(a(357),a(413),i,"data-v-4e0ef9c9",null);e.exports=n.exports},286:function(e,t,a){function i(e){a(393)}var n=a(4)(a(358),a(411),i,"data-v-3ef94e8e",null);e.exports=n.exports},303:function(e,t,a){function i(e){a(476)}var n=a(4)(a(427),a(501),i,"data-v-2f4f5beb",null);e.exports=n.exports},322:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"list-item",props:["title"]}},323:function(e,t,a){t=e.exports=a(272)(void 0),t.push([e.i,".item[data-v-299d960e]{border-bottom:1px solid #e0e0e0}",""])},325:function(e,t,a){var i=a(323);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(273)("7c04f717",i,!0)},327:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-title"},[e._v(e._s(e.title))])])])},staticRenderFns:[]}},356:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"behandeling-informatie",props:["name","start","end","bodyparts"]}},357:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(29),n=a.n(i),s=a(5),d=(a.n(s),a(17),a(0)),r=a.n(d),c=a(274),o=a.n(c);t.default={name:"behandeling-medicatie",props:["medicatie","state"],components:{ListItem:o.a},data:function(){return{terms:"",medicineData:{amount:"",amount_per_day:"",therapy_id:"",id:"",start_date:r()().format(),end_date:"",name:""},now:r()().format()}},computed:{medicines:function(){return this.$store.getters.getAllMedicines}},methods:{search:function(e,t){var a=[];this.medicines.map(function(t){n.a.includes(t.name.toLowerCase(),e.toLowerCase())&&a.push({label:t.name,id:t.id,value:t.name})}),t(a)},selected:function(e){this.medicineData.id=e.id,this.medicineData.name=e.label},addMedicine:function(){var e=this;this.medicineData.therapy_id=this.$route.params.behandelingId,this.$store.dispatch("ADD_MEDICINE",this.medicineData).then(function(){e.$refs.addMedicineModal.close();for(var t in e.medicineData)e.medicineData[t]=""})}},created:function(){this.$store.dispatch("FETCH_ALL_MEDICINES")}}},358:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(29),n=a.n(i),s=a(5),d=(a.n(s),a(17),a(0)),r=a.n(d),c=a(274),o=a.n(c);t.default={name:"behandeling-oefeningen",props:["oefeningen","state"],components:{ListItem:o.a},data:function(){return{terms:"",excerciseData:{sets:"",sets_amount:"",per_day:"",therapy_id:"",id:"",start_date:r()().format(),end_date:"",title:""},now:r()().format()}},computed:{excercises:function(){return this.$store.getters.getAllExercises}},methods:{search:function(e,t){var a=[];this.excercises.map(function(t){n.a.includes(t.title.toLowerCase(),e.toLowerCase())&&a.push({label:t.title,id:t.id,value:t.title})}),t(a)},selected:function(e){this.excerciseData.id=e.id,this.excerciseData.title=e.label},addExercise:function(){var e=this;this.excerciseData.therapy_id=this.$route.params.behandelingId,this.$store.dispatch("ADD_EXCERCISE",this.excerciseData).then(function(){for(var t in e.excerciseData)e.excerciseData[t]="";e.$refs.addExerciseModal.close()})}},created:function(){this.$store.dispatch("FETCH_ALL_EXERCISES")}}},376:function(e,t,a){t=e.exports=a(272)(void 0),t.push([e.i,".layout-padding[data-v-3ef94e8e]{padding-top:1rem}.minimized button[data-v-3ef94e8e]{margin:0 auto;display:block}.minimized .row div[data-v-3ef94e8e],.minimized input[data-v-3ef94e8e]{margin-bottom:1rem}",""])},378:function(e,t,a){t=e.exports=a(272)(void 0),t.push([e.i,".layout-padding[data-v-4e0ef9c9]{padding-top:1rem}.minimized button[data-v-4e0ef9c9]{margin:0 auto;display:block}.minimized .row div[data-v-4e0ef9c9],.minimized input[data-v-4e0ef9c9]{margin-bottom:1rem}",""])},384:function(e,t,a){t=e.exports=a(272)(void 0),t.push([e.i,".layout-padding[data-v-8dc2d558]{padding-top:1rem}ul[data-v-8dc2d558]{list-style-type:none;padding:0;margin-top:5px}ul li[data-v-8dc2d558]{font-size:14px}.card-title[data-v-8dc2d558]{padding-bottom:.5rem}.card-content[data-v-8dc2d558]{padding-top:0}",""])},393:function(e,t,a){var i=a(376);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(273)("4e4f5650",i,!0)},395:function(e,t,a){var i=a(378);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(273)("66f68591",i,!0)},401:function(e,t,a){var i=a(384);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(273)("77229616",i,!0)},411:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[e._v("\n      Oefeningen\n      "),e.state?a("i",{staticClass:"float-right add-icon",on:{click:function(t){e.$refs.addExerciseModal.open()}}},[e._v("add_circle")]):e._e()]),e._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"list"},e._l(e.oefeningen,function(e){return a("list-item",{key:e.id,attrs:{title:e.title}})}))])]),e._v(" "),a("q-modal",{ref:"addExerciseModal",staticClass:"minimized",attrs:{"content-css":{padding:"50px"}}},[a("p",[e._v("Oefening toevoegen")]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-autocomplete",{attrs:{delay:0},on:{search:e.search,selected:e.selected},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}},[a("q-search",{attrs:{placeholder:"Voeg een oefening toe"},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}})],1)],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-datetime",{staticClass:"patient-datepicker full-width",attrs:{type:"date",placeholder:"Startdatum",min:e.now},model:{value:e.excerciseData.start_date,callback:function(t){e.excerciseData.start_date=t},expression:"excerciseData.start_date"}})],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-datetime",{staticClass:"patient-datepicker full-width",attrs:{type:"date",placeholder:"Einddatum",min:e.now},model:{value:e.excerciseData.end_date,callback:function(t){e.excerciseData.end_date=t},expression:"excerciseData.end_date"}})],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.excerciseData.sets,expression:"excerciseData.sets"}],staticClass:"full-width",attrs:{placeholder:"Hoeveel sets"},domProps:{value:e.excerciseData.sets},on:{input:function(t){t.target.composing||(e.excerciseData.sets=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.excerciseData.sets_amount,expression:"excerciseData.sets_amount"}],staticClass:"full-width",attrs:{placeholder:"Aantal per set"},domProps:{value:e.excerciseData.sets_amount},on:{input:function(t){t.target.composing||(e.excerciseData.sets_amount=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.excerciseData.per_day,expression:"excerciseData.per_day"}],staticClass:"full-width",attrs:{placeholder:"Hoeveel keer per dag"},domProps:{value:e.excerciseData.per_day},on:{input:function(t){t.target.composing||(e.excerciseData.per_day=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"red",on:{click:function(t){e.addExercise()}}},[e._v("Toevoegen")])])],1)},staticRenderFns:[]}},413:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[e._v("\n      Medicatie\n      "),e.state?a("i",{staticClass:"float-right add-icon",on:{click:function(t){e.$refs.addMedicineModal.open()}}},[e._v("add_circle")]):e._e()]),e._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"list"},e._l(e.medicatie,function(e){return a("list-item",{key:e.id,attrs:{title:e.name}})}))])]),e._v(" "),a("q-modal",{ref:"addMedicineModal",staticClass:"minimized patient-modal",attrs:{"content-css":{padding:"50px"}}},[a("p",[e._v("Medicijn toevoegen")]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-autocomplete",{attrs:{delay:0},on:{search:e.search,selected:e.selected},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}},[a("q-search",{attrs:{placeholder:"Zoek een medicijn"},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}})],1)],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-datetime",{staticClass:"patient-datepicker full-width",attrs:{type:"date",placeholder:"Startdatum",min:e.now},model:{value:e.medicineData.start_date,callback:function(t){e.medicineData.start_date=t},expression:"medicineData.start_date"}})],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("q-datetime",{staticClass:"patient-datepicker full-width",attrs:{type:"date",placeholder:"Einddatum",min:e.now},model:{value:e.medicineData.end_date,callback:function(t){e.medicineData.end_date=t},expression:"medicineData.end_date"}})],1),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medicineData.amount,expression:"medicineData.amount"}],staticClass:"full-width",attrs:{placeholder:"Dosering"},domProps:{value:e.medicineData.amount},on:{input:function(t){t.target.composing||(e.medicineData.amount=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row medium-gutter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medicineData.amount_per_day,expression:"medicineData.amount_per_day"}],staticClass:"full-width",attrs:{placeholder:"Hoeveelheid per dag"},domProps:{value:e.medicineData.amount_per_day},on:{input:function(t){t.target.composing||(e.medicineData.amount_per_day=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"red",on:{click:function(t){e.addMedicine()}}},[e._v("Toevoegen")])])],1)},staticRenderFns:[]}},419:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[e._v("\n      Behandeling informatie\n    ")]),e._v(" "),a("div",{staticClass:"card-content"},[a("ul",[a("li",[a("strong",[e._v("Naam:")]),e._v(" "+e._s(e.name))]),e._v(" "),a("li",[a("strong",[e._v("Startdatum:")]),e._v(" "+e._s(e.start))]),e._v(" "),a("li",[a("strong",[e._v("Einddatum:")]),e._v(" "+e._s(e.end)+" "),null==e.end?a("span",[e._v("Nog in behandeling")]):e._e()]),e._v(" "),a("li",[a("strong",[e._v("Categorie:")]),e._v(" "),e._l(e.bodyparts,function(t){return a("span",[e._v(e._s(t.name))])})],2)])])])])},staticRenderFns:[]}},427:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(274),n=a.n(i),s=a(285),d=a.n(s),r=a(286),c=a.n(r),o=a(284),l=a.n(o);a(17);t.default={name:"behandeling-page",components:{ListItem:n.a,BehandelingMedicatie:d.a,BehandelingOefeningen:c.a,BehandelingInformatie:l.a},computed:{behandelingen:function(){return this.$store.getters.getPatientBehandelingen},behandeling:function(){for(var e in this.behandelingen)if(this.behandelingen[e].id==this.$route.params.behandelingId)return this.behandelingen[e]}},methods:{finishTherapy:function(){this.$store.dispatch("FINISH_THERAPY",this.behandeling.id).then(function(){window.history.back()})}}}},453:function(e,t,a){t=e.exports=a(272)(void 0),t.push([e.i,".layout-padding[data-v-2f4f5beb]{padding-top:1rem}",""])},476:function(e,t,a){var i=a(453);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(273)("341a0f40",i,!0)},501:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout-view"},[a("div",{staticClass:"layout-padding"},[a("div",{staticClass:"page-title"},[e._v("\n      "+e._s(e.behandeling.name)+"\n    ")]),e._v(" "),a("div",{staticClass:"row medium-gutter sm-column"},[a("div",{staticClass:"width-1of2"},[a("behandeling-informatie",{attrs:{name:e.behandeling.name,start:e.behandeling.start_date,end:e.behandeling.end_date,bodyparts:e.behandeling.bodyparts}})],1),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"row medium-gutter sm-column"},[a("div",{staticClass:"width-1of2"},[a("behandeling-medicatie",{attrs:{medicatie:e.behandeling.medicines,state:null==e.behandeling.end_date}})],1),e._v(" "),a("div",{staticClass:"width-1of2"},[a("behandeling-oefeningen",{attrs:{oefeningen:e.behandeling.excercises,state:null==e.behandeling.end_date}})],1)]),e._v(" "),a("div",{staticClass:"row medium-gutter sm-column"},[a("div",{staticClass:"width-2of2"},[null==e.behandeling.end_date?a("button",{staticClass:"button primary full-width",on:{click:function(t){e.finishTherapy()}}},[e._v("Behandeling afronden")]):e._e()])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"width-1of2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[e._v("\n            Notities\n          ")])])])}]}}});