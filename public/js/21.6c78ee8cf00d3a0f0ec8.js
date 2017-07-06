webpackJsonp([21],{275:function(t,e,a){function i(t){a(328)}var n=a(4)(a(326),a(330),i,"data-v-303f516e",null);t.exports=n.exports},326:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=a.n(i);e.default={name:"afspraak-card",props:["start","eind","name","patientId"],data:function(){return{topOffset:"",height:"",leftOffset:""}},methods:{calculateTopOffset:function(){var t=100;t=t+1.366666*n()(this.start).diff(n()(this.start).startOf("day").add(9,"hours"),"minutes")+"px",this.topOffset=t},calculateLength:function(){var t=n()(this.eind).diff(n()(this.start),"minutes"),e=1.366666*t+"px";this.height=e},calculateLeftOffset:function(){var t=n()(this.start).diff(n()(this.start).startOf("week").add(1,"day"),"days"),e=20*t+"%";this.leftOffset=e},clickPatient:function(){this.$router.push({path:"/arts/patienten/"+this.patientId})}},computed:{startTijd:function(){return n()(this.start).format("H:mm")},eindTijd:function(){return n()(this.eind).format("H:mm")},patient:function(){var t=this.$store.getters.getPatients;for(var e in t)if(t[e].id===this.patientId)return t[e].firstname+" "+t[e].lastname}},created:function(){this.calculateTopOffset(),this.calculateLength(),this.calculateLeftOffset()},beforeUpdate:function(){this.calculateTopOffset(),this.calculateLength(),this.calculateLeftOffset()}}},327:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".afspraak-card[data-v-303f516e]{width:20%;background-color:#e74c3c;position:absolute;transition:none!important}.afspraak-card .card-title[data-v-303f516e]{color:#fff}.modal-image[data-v-303f516e]{height:250px;width:600px;overflow:hidden;background-image:url("+a(329)+");background-size:cover;background-position:50%}.modal-image .close-btn[data-v-303f516e]{font-size:20px;position:absolute;font-weight:700;color:#fff;top:15px;right:15px;cursor:pointer}.modal-title[data-v-303f516e]{background-color:#e74c3c;padding:1rem}.modal-title h4[data-v-303f516e]{font-size:22px;color:#fff;margin-left:.8rem}.modal-text[data-v-303f516e]{padding:1rem}.modal-text ul[data-v-303f516e]{list-style-type:none;padding:0;margin-left:.8rem}.modal-text ul i[data-v-303f516e]{margin-right:1rem;font-size:20px}.modal-text ul li[data-v-303f516e]{margin-bottom:1rem}.modal-text ul .patient-list-item[data-v-303f516e]{cursor:pointer}.modal-text ul .patient-list-item[data-v-303f516e]:hover{color:#e74c3c}",""])},328:function(t,e,a){var i=a(327);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("680cba34",i,!0)},329:function(t,e,a){t.exports=a.p+"img/appointment-background.c6c53a8.png"},330:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"card primary afspraak-card",style:{top:t.topOffset,height:t.height,left:t.leftOffset},on:{click:function(e){t.$refs.appointmentModal.open()}}},[t._v("\n    "+t._s(t.name)+"\n\n\n  ")]),t._v(" "),a("q-modal",{ref:"appointmentModal",staticClass:"minimized appointment-modal"},[a("div",{staticClass:"modal-image"},[a("i",{staticClass:"close-btn",on:{click:function(e){t.$refs.appointmentModal.close()}}},[t._v("close")])]),t._v(" "),a("div",{staticClass:"modal-title"},[a("h4",[t._v(t._s(t.name))])]),t._v(" "),a("div",{staticClass:"modal-text"},[a("ul",[a("li",[a("i",[t._v("access_time")]),t._v(t._s(t.startTijd)+" - "+t._s(t.eindTijd))]),t._v(" "),a("li",{staticClass:"patient-list-item",on:{click:function(e){t.clickPatient()}}},[a("i",[t._v("person")]),t._v(t._s(t.patient))])])])])],1)},staticRenderFns:[]}}});