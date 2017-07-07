webpackJsonp([24],{275:function(t,a,e){function i(t){e(331)}var n=e(4)(e(329),e(333),i,"data-v-303f516e",null);t.exports=n.exports},329:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(0),n=e.n(i);a.default={name:"afspraak-card",props:["id","start","eind","name","patientId"],data:function(){return{topOffset:"",height:"",leftOffset:""}},methods:{calculateTopOffset:function(){var t=100;t=t+1.366666*n()(this.start).diff(n()(this.start).startOf("day").add(9,"hours"),"minutes")+"px",this.topOffset=t},calculateLength:function(){var t=n()(this.eind).diff(n()(this.start),"minutes"),a=1.366666*t+"px";this.height=a},calculateLeftOffset:function(){var t=n()(this.start).diff(n()(this.start).startOf("week").add(1,"day"),"days"),a=20*t+"%";this.leftOffset=a},clickPatient:function(){this.$router.push({path:"/arts/patienten/"+this.patientId})},cancelAppointment:function(){var t=this;this.$store.dispatch("CANCEL_APPOINTMENT",this.id).then(function(){t.$refs.appointmentModal.close()})}},computed:{startTijd:function(){return n()(this.start).format("H:mm")},eindTijd:function(){return n()(this.eind).format("H:mm")},patient:function(){var t=this.$store.getters.getPatients;for(var a in t)if(t[a].id===this.patientId)return t[a].firstname+" "+t[a].lastname}},created:function(){this.calculateTopOffset(),this.calculateLength(),this.calculateLeftOffset()},beforeUpdate:function(){this.calculateTopOffset(),this.calculateLength(),this.calculateLeftOffset()}}},330:function(t,a,e){a=t.exports=e(272)(void 0),a.push([t.i,".afspraak-card[data-v-303f516e]{width:20%;background-color:#e74c3c;position:absolute;transition:none!important}.afspraak-card .card-title[data-v-303f516e]{color:#fff}.modal-image[data-v-303f516e]{height:250px;width:600px;overflow:hidden;background-image:url("+e(332)+");background-size:cover;background-position:50%}.modal-image .close-btn[data-v-303f516e]{font-size:20px;position:absolute;font-weight:700;color:#fff;top:15px;right:15px;cursor:pointer}.modal-title[data-v-303f516e]{background-color:#e74c3c;padding:1rem}.modal-title h4[data-v-303f516e]{font-size:22px;color:#fff;margin-left:.8rem}.modal-text[data-v-303f516e]{padding:1rem}.modal-text button[data-v-303f516e]{margin-bottom:1rem}.modal-text ul[data-v-303f516e]{list-style-type:none;padding:0;margin-left:.8rem}.modal-text ul i[data-v-303f516e]{margin-right:1rem;font-size:20px}.modal-text ul li[data-v-303f516e]{margin-bottom:1rem}.modal-text ul .patient-list-item[data-v-303f516e]{cursor:pointer}.modal-text ul .patient-list-item[data-v-303f516e]:hover{color:#e74c3c}",""])},331:function(t,a,e){var i=e(330);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(273)("680cba34",i,!0)},332:function(t,a,e){t.exports=e.p+"img/appointment-background.74c3a79.jpg"},333:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"card primary afspraak-card",style:{top:t.topOffset,height:t.height,left:t.leftOffset},on:{click:function(a){t.$refs.appointmentModal.open()}}},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),e("q-modal",{ref:"appointmentModal",staticClass:"minimized appointment-modal"},[e("div",{staticClass:"modal-image"},[e("i",{staticClass:"close-btn",on:{click:function(a){t.$refs.appointmentModal.close()}}},[t._v("close")])]),t._v(" "),e("div",{staticClass:"modal-title"},[e("h4",[t._v(t._s(t.name))])]),t._v(" "),e("div",{staticClass:"modal-text"},[e("ul",[e("li",[e("i",[t._v("access_time")]),t._v(t._s(t.startTijd)+" - "+t._s(t.eindTijd))]),t._v(" "),e("li",{staticClass:"patient-list-item",on:{click:function(a){t.clickPatient()}}},[e("i",[t._v("person")]),t._v(t._s(t.patient))])]),t._v(" "),e("button",{staticClass:"primary float-right outline",on:{click:function(a){t.cancelAppointment()}}},[t._v("Afspraak annuleren")])])])],1)},staticRenderFns:[]}}});