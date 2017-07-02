webpackJsonp([13,39],{277:function(t,e,n){function a(t){n(346)}var i=n(4)(n(330),n(352),a,"data-v-f2fb4b06",null);t.exports=i.exports},287:function(t,e,n){function a(t){n(399)}var i=n(4)(n(359),n(417),a,null,null);t.exports=i.exports},330:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=n.n(a);e.default={name:"dashboard-afspraak-card",props:["patient","date","therapy","patientId"],computed:{timestamp:function(){return i()(this.date).format("H:mm")}},methods:{clickPatient:function(){this.$router.push({path:"arts/patienten/"+this.patientId})}}}},340:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,".item[data-v-f2fb4b06]{border-bottom:1px solid #e0e0e0}.item button[data-v-f2fb4b06]{font-size:12px}.item .item-secondary[data-v-f2fb4b06]{width:120px;top:15px!important}",""])},346:function(t,e,n){var a=n(340);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(273)("5279f576",a,!0)},352:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item three-lines"},[n("div",{staticClass:"item-content has-secondary"},[n("div",{staticClass:"item-title"},[t._v(t._s(t.timestamp))]),t._v(" "),n("div",{staticClass:"item-label item-smaller"},[t._v("\n                "+t._s(t.patient)),n("br"),t._v("\n                "+t._s(t.therapy)+"\n            ")])]),t._v(" "),n("button",{staticClass:"primary text-white small item-secondary",on:{click:function(e){t.clickPatient()}}},[t._v("\n        Bekijk patient\n    ")])])},staticRenderFns:[]}},359:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(277),i=n.n(a);e.default={name:"dashboard-afspraken",components:{DashboardAfspraakCard:i.a},data:function(){return{appointmentFilter:"today"}},computed:{appointments:function(){return"today"==this.appointmentFilter?this.$store.getters.getAppointmentsToday.today_appointments:this.$store.getters.getAppointmentsToday.tomorrow_appointments},todayButton:function(){return"today"==this.appointmentFilter?{primary:!0}:{primary:!0,outline:!0}},tomorrowButton:function(){return"tomorrow"==this.appointmentFilter?{primary:!0}:{primary:!0,outline:!0}}},created:function(){this.$store.dispatch("FETCH_APPOINTMENTS_TODAY")}}},382:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,".list{border-bottom:none}.filters{margin-bottom:.5rem}.filters button{border-radius:0}.filters button:first-child{border-radius:30px 0 0 30px;border-right:0}.filters button:last-child{border-radius:0 30px 30px 0;border-left:0}",""])},399:function(t,e,n){var a=n(382);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(273)("7124f08a",a,!0)},417:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card bg-white"},[n("div",{staticClass:"card-title"},[t._v("\n        Afspraken\n    ")]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"filters"},[n("button",{staticClass:"button",class:t.todayButton,on:{click:function(e){t.appointmentFilter="today"}}},[t._v("Vandaag")]),n("button",{staticClass:"button",class:t.tomorrowButton,on:{click:function(e){t.appointmentFilter="tomorrow"}}},[t._v("Morgen")])]),t._v(" "),n("div",{staticClass:"list"},t._l(t.appointments,function(t,e){return n("dashboard-afspraak-card",{key:e,attrs:{patientId:t.patient_id,patient:t.patient.firstname+" "+t.patient.lastname,date:t.start,therapy:t.title}})}))])])},staticRenderFns:[]}}});