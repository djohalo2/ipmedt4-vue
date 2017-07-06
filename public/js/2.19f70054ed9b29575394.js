webpackJsonp([2,4,21,46],{275:function(t,e,a){function i(t){a(328)}var n=a(4)(a(326),a(330),i,"data-v-303f516e",null);t.exports=n.exports},282:function(t,e,a){function i(t){a(400)}var n=a(4)(a(356),a(419),i,"data-v-5587c994",null);t.exports=n.exports},283:function(t,e,a){function i(t){a(398)}var n=a(4)(a(357),a(417),i,"data-v-4b017130",null);t.exports=n.exports},303:function(t,e,a){function i(t){a(484)}var n=a(4)(a(432),a(510),i,"data-v-481c5a20",null);t.exports=n.exports},326:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=a.n(i);e.default={name:"afspraak-card",props:["start","eind","name","patientId"],data:function(){return{topOffset:"",height:"",leftOffset:""}},methods:{calculateTopOffset:function(){var t=100;t=t+1.366666*n()(this.start).diff(n()(this.start).startOf("day").add(9,"hours"),"minutes")+"px",this.topOffset=t},calculateLength:function(){var t=n()(this.eind).diff(n()(this.start),"minutes"),e=1.366666*t+"px";this.height=e},calculateLeftOffset:function(){var t=n()(this.start).diff(n()(this.start).startOf("week").add(1,"day"),"days"),e=20*t+"%";this.leftOffset=e},clickPatient:function(){this.$router.push({path:"/arts/patienten/"+this.patientId})}},computed:{startTijd:function(){return n()(this.start).format("H:mm")},eindTijd:function(){return n()(this.eind).format("H:mm")},patient:function(){var t=this.$store.getters.getPatients;for(var e in t)if(t[e].id===this.patientId)return t[e].firstname+" "+t[e].lastname}},created:function(){this.calculateTopOffset(),this.calculateLength(),this.calculateLeftOffset()},beforeUpdate:function(){this.calculateTopOffset(),this.calculateLength(),this.calculateLeftOffset()}}},327:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".afspraak-card[data-v-303f516e]{width:20%;background-color:#e74c3c;position:absolute;transition:none!important}.afspraak-card .card-title[data-v-303f516e]{color:#fff}.modal-image[data-v-303f516e]{height:250px;width:600px;overflow:hidden;background-image:url("+a(329)+");background-size:cover;background-position:50%}.modal-image .close-btn[data-v-303f516e]{font-size:20px;position:absolute;font-weight:700;color:#fff;top:15px;right:15px;cursor:pointer}.modal-title[data-v-303f516e]{background-color:#e74c3c;padding:1rem}.modal-title h4[data-v-303f516e]{font-size:22px;color:#fff;margin-left:.8rem}.modal-text[data-v-303f516e]{padding:1rem}.modal-text ul[data-v-303f516e]{list-style-type:none;padding:0;margin-left:.8rem}.modal-text ul i[data-v-303f516e]{margin-right:1rem;font-size:20px}.modal-text ul li[data-v-303f516e]{margin-bottom:1rem}.modal-text ul .patient-list-item[data-v-303f516e]{cursor:pointer}.modal-text ul .patient-list-item[data-v-303f516e]:hover{color:#e74c3c}",""])},328:function(t,e,a){var i=a(327);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("680cba34",i,!0)},329:function(t,e,a){t.exports=a.p+"img/appointment-background.c6c53a8.png"},330:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"card primary afspraak-card",style:{top:t.topOffset,height:t.height,left:t.leftOffset},on:{click:function(e){t.$refs.appointmentModal.open()}}},[t._v("\n    "+t._s(t.name)+"\n\n\n  ")]),t._v(" "),a("q-modal",{ref:"appointmentModal",staticClass:"minimized appointment-modal"},[a("div",{staticClass:"modal-image"},[a("i",{staticClass:"close-btn",on:{click:function(e){t.$refs.appointmentModal.close()}}},[t._v("close")])]),t._v(" "),a("div",{staticClass:"modal-title"},[a("h4",[t._v(t._s(t.name))])]),t._v(" "),a("div",{staticClass:"modal-text"},[a("ul",[a("li",[a("i",[t._v("access_time")]),t._v(t._s(t.startTijd)+" - "+t._s(t.eindTijd))]),t._v(" "),a("li",{staticClass:"patient-list-item",on:{click:function(e){t.clickPatient()}}},[a("i",[t._v("person")]),t._v(t._s(t.patient))])])])])],1)},staticRenderFns:[]}},355:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=a.n(i),o=a(275),s=a.n(o);e.default={name:"afspraken-kolom",props:["xPos","yPos","week"],components:{AfspraakCard:s.a},data:function(){return{isCreating:!1,appointment:{title:"",start:this.startDate,end:this.endDate,therapy_id:1,patient_id:1,doctor_id:this.doctorId,patientName:"",therapyName:""},patientTerms:"",therapyTerms:""}},methods:{openAppointmentCreator:function(){this.isCreating=!0},closeAppointmentCreator:function(){this.isCreating=!1},openPopover:function(){this.$refs["appointmentPopover"+this.xPos+this.yPos].open()},closePopover:function(){this.$refs["appointmentPopover"+this.xPos+this.yPos].close()},addAppointment:function(){this.$store.dispatch("ADD_APPOINTMENT",this.appointment),this.closePopover()},searchPatient:function(t,e){var a=[];this.patients.map(function(e){(_.includes(e.firstname.toLowerCase(),t.toLowerCase())||_.includes(e.lastname.toLowerCase(),t.toLowerCase()))&&a.push({label:e.firstname+" "+e.lastname,id:e.id,value:e.firstname+" "+e.lastname,type:"patient"})}),e(a)},searchTherapy:function(t,e){var a=[];this.therapies.map(function(e){_.includes(e.name.toLowerCase(),t.toLowerCase())&&a.push({label:e.name,id:e.id,value:e.name,type:"therapy"})}),e(a)},selected:function(t){"patient"==t.type?(this.$store.dispatch("FETCH_PATIENT_DATA",t.id),this.appointment.patient_id=t.id,this.appointment.patientName=t.label):(this.appointment.therapy_id=t.id,this.appointment.therapyName=t.label,console.log(this.appointment))}},computed:{doctorId:function(){return this.$store.getters.getDoctorInfo.id},startDate:function(){return n()("2017").locale("nl").add(this.week,"weeks").startOf("week").add(this.xPos-1,"day").add(9,"hours").add(30*(this.yPos-1),"minutes").format("YYYY-MM-DD H:mm:ss")},endDate:function(){return n()("2017").locale("nl").add(this.week,"weeks").startOf("week").add(this.xPos-1,"day").add(9,"hours").add(30*this.yPos,"minutes").format("YYYY-MM-DD H:mm:ss")},patients:function(){return this.$store.getters.getPatients},therapies:function(){return this.$store.getters.getPatientBehandelingen}},created:function(){this.appointment.start=this.startDate,this.appointment.end=this.endDate,this.appointment.doctor_id=this.doctorId}}},356:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(409),n=a.n(i);e.default={name:"afspraken-tijd-rij",props:["rowNumber","week"],components:{AfspraakKolom:n.a}}},357:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=a.n(i);e.default={name:"kalender-top",props:["week"],data:function(){return{dagen:"",huidigeWeek:this.week}},watch:{week:function(){this.huidigeWeek=this.week,this.getDagen()}},methods:{getDagen:function(){for(var t=[],e=0;e<5;e++)t.push({dayNumber:n()("2017").locale("nl").add(this.huidigeWeek,"weeks").startOf("week").add(e,"day").format("DD"),day:n()("2017").locale("nl").add(this.huidigeWeek,"weeks").startOf("week").add(e,"day").format("dddd"),month:n()("2017").locale("nl").add(this.huidigeWeek,"weeks").startOf("week").add(e,"day").format("MMMM")});this.dagen=t}},created:function(){this.getDagen()}}},373:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".box-event[data-v-00d5c7f8]{min-height:40px}.box-day[data-v-00d5c7f8]{min-height:100px}.box-event[data-v-00d5c7f8]{padding:.7rem;background-color:#fff;width:100%;border-right:1px solid #e4e4e4}.box-event[data-v-00d5c7f8]:hover{background-color:#fafafa}.popover[data-v-00d5c7f8]{width:20%}.popover button[data-v-00d5c7f8]{margin-bottom:1rem}.create-appointment[data-v-00d5c7f8]{padding:1rem}.box-creating[data-v-00d5c7f8]{background-color:#e74c3c;color:#fff}.box-creating[data-v-00d5c7f8]:hover{background-color:#e74c3c}",""])},380:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".row[data-v-4b017130]{border-bottom:1px solid #e4e4e4;position:relative}.box-day[data-v-4b017130]{min-height:100px;font-size:14px}.box-day[data-v-4b017130],.box-event[data-v-4b017130]{padding:.7rem;background-color:#fff;width:100%;border-right:1px solid #e4e4e4}.day-date[data-v-4b017130]{font-size:40px;display:block}.day-text[data-v-4b017130]{color:#bdbdbd}.day-text[data-v-4b017130]:first-letter{text-transform:uppercase}.month-date[data-v-4b017130]{float:right;color:#bdbdbd;font-size:13px;font-weight:400}.month-date[data-v-4b017130]:first-letter{text-transform:uppercase}",""])},382:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".timestamp[data-v-5587c994]{position:absolute;left:-40px;top:-8px;font-size:14px}.row[data-v-5587c994]{border-bottom:1px solid #e4e4e4;position:relative}",""])},391:function(t,e,a){var i=a(373);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("66d82254",i,!0)},398:function(t,e,a){var i=a(380);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("72aa4cab",i,!0)},400:function(t,e,a){var i=a(382);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("1113fcef",i,!0)},409:function(t,e,a){function i(t){a(391)}var n=a(4)(a(355),a(410),i,"data-v-00d5c7f8",null);t.exports=n.exports},410:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"width-1of5"},[a("div",{staticClass:"box-event",class:{"box-creating":t.isCreating},on:{click:function(e){t.openAppointmentCreator()}}},[a("q-popover",{ref:"appointmentPopover"+t.xPos+t.yPos,staticClass:"popover",on:{close:function(e){t.closeAppointmentCreator()}}},[a("div",{staticClass:"create-appointment"},[a("p",[t._v("Afspraak maken")]),t._v(" "),a("span",{staticClass:"afspraak-date"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.appointment.title,expression:"appointment.title"}],attrs:{placeholder:"Afspraak omschrijving"},domProps:{value:t.appointment.title},on:{input:function(e){e.target.composing||(t.appointment.title=e.target.value)}}}),t._v(" "),a("div",{staticClass:"stacked-label"},[a("q-autocomplete",{on:{selected:t.selected,close:function(e){t.openPopover()},search:t.searchPatient},model:{value:t.patientTerms,callback:function(e){t.patientTerms=e},expression:"patientTerms"}}),t._v(" "),a("label",[t._v("Patient")])],1),t._v(" "),a("div",{staticClass:"stacked-label"},[a("q-autocomplete",{on:{selected:t.selected,close:function(e){t.openPopover()},search:t.searchTherapy},model:{value:t.therapyTerms,callback:function(e){t.therapyTerms=e},expression:"therapyTerms"}}),t._v(" "),a("label",[t._v("Behandeling")])],1),t._v(" "),a("button",{staticClass:"primary small outline float-right",on:{click:function(e){t.addAppointment()}}},[t._v("Toevoegen")])])])],1)])},staticRenderFns:[]}},417:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.dagen,function(e){return a("div",{key:e,staticClass:"width-1of5"},[a("div",{staticClass:"box-day"},[a("span",{staticClass:"day-text"},[t._v(t._s(e.day))]),t._v(" "),a("span",{staticClass:"day-date"},[t._v(t._s(e.dayNumber))]),t._v(" "),a("span",{staticClass:"month-date"},[t._v(t._s(e.month))])])])}))},staticRenderFns:[]}},419:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"timestamp"},[t.rowNumber%2!=0?a("span",[t._v(t._s(8+Math.round(t.rowNumber/2))+":00")]):t._e()]),t._v(" "),t._l(5,function(e){return a("afspraak-kolom",{attrs:{week:t.week,xPos:e,yPos:t.rowNumber}})})],2)},staticRenderFns:[]}},432:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(282),n=a.n(i),o=a(275),s=a.n(o),r=a(283),d=a.n(r),c=a(0),l=a.n(c);e.default={name:"afspraken",components:{AfspraakTijdRij:n.a,AfspraakCard:s.a,KalenderTop:d.a},data:function(){return{huidigeWeek:l()().format("w"),isFetching:!0}},computed:{appointments:function(){return this.$store.getters.getAppointments}},methods:{changeWeek:function(t){"previous"==t?this.huidigeWeek--:this.huidigeWeek++,this.fetchAfspraken()},fetchAfspraken:function(){var t=this;this.isFetching=!0,this.$store.dispatch("FETCH_AFSPRAKEN",this.huidigeWeek).then(function(){t.isFetching=!1})}},created:function(){this.fetchAfspraken()}}},461:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".layout-padding[data-v-481c5a20]{padding-top:1.5rem}.calendar[data-v-481c5a20]{position:relative;border:1px solid #e4e4e4}.loading-spinner[data-v-481c5a20]{position:absolute;left:50%;margin:auto;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},484:function(t,e,a){var i=a(461);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("8ad22cb6",i,!0)},510:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-view"},[a("div",{staticClass:"layout-padding"},[a("div",{staticClass:"row small-gutter"},[a("div",{staticClass:"width-1of5"},[a("button",{staticClass:"primary outline",on:{click:function(e){t.changeWeek("previous")}}},[a("i",[t._v("keyboard_arrow_left")]),t._v("Vorige week")])]),t._v(" "),a("div",{staticClass:"width-3of5"}),t._v(" "),a("div",{staticClass:"width-1of5"},[a("button",{staticClass:"primary outline float-right",on:{click:function(e){t.changeWeek("next")}}},[t._v("Volgende week"),a("i",[t._v("keyboard_arrow_right")])])])]),t._v(" "),a("div",{staticClass:"calendar"},[a("kalender-top",{attrs:{week:t.huidigeWeek}}),t._v(" "),t._l(18,function(e){return a("afspraak-tijd-rij",{key:e,attrs:{rowNumber:e,week:t.huidigeWeek}})}),t._v(" "),t._l(t.appointments,function(e,i){return t.isFetching?t._e():a("afspraak-card",{key:i,attrs:{start:e.start,eind:e.end,name:e.title,patientId:e.patient_id}})}),t._v(" "),t.isFetching?a("spinner",{staticClass:"loading-spinner",attrs:{color:"#e74c3c"}}):t._e()],2)])])},staticRenderFns:[]}}});