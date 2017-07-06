webpackJsonp([52],{166:function(t,e,n){function a(t){n(254)}var i=n(4)(n(207),n(268),a,null,null);t.exports=i.exports},167:function(t,e,n){function a(t){n(249)}var i=n(4)(n(208),n(263),a,"data-v-17133cb4",null);t.exports=i.exports},168:function(t,e,n){function a(t){n(255)}var i=n(4)(n(209),n(269),a,null,null);t.exports=i.exports},169:function(t,e,n){function a(t){n(251)}var i=n(4)(n(210),n(265),a,"data-v-38b53ba2",null);t.exports=i.exports},170:function(t,e,n){function a(t){n(253)}var i=n(4)(n(211),n(267),a,null,null);t.exports=i.exports},171:function(t,e,n){function a(t){n(250)}var i=n(4)(n(212),n(264),a,"data-v-2819dca4",null);t.exports=i.exports},174:function(t,e,n){"use strict";var a=n(12),i=n(177),r=n(205),o=n(197),s=n(29);n.n(s);a.default.use(i.a);var c=new i.a.Store({modules:{patient:r.a,arts:o.a}});e.a=c},175:function(t,e){},176:function(t,e,n){function a(t){n(252)}var i=n(4)(n(206),n(266),a,null,null);t.exports=i.exports},195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),i=n(5),r=n.n(i),o=n(28),s=n(174);n(175),a.default.use(r.a),r.a.start(function(){new a.default({el:"#q-app",router:o.a,store:s.a,render:function(t){return t(n(176))}})})},196:function(t,e,n){"use strict";var a=n(35),i=n.n(a),r=n(18),o=n.n(r),s=n(5),c=(n.n(s),n(260)),u=n.n(c),d=n(0),p=n.n(d),l="http://www.mijnnazorg.nl/api/";e.a={CHECK_TOKEN:function(t){(0,t.commit)("CHECK_TOKEN",s.LocalStorage.get.item("token"))},FETCH_PATIENTS:function(t){var e=t.commit,n=t.state;o.a.get(l+"patient",{headers:{Authorization:"Bearer "+n.token}}).then(function(t){e("FETCH_PATIENTS",t.data.patients)}).catch(function(t){})},ADD_PATIENT:function(t,e){var n=t.commit,a=t.state;return new i.a(function(t,i){o()({method:"post",url:l+"patient",data:u.a.stringify({gender:e.gender,firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,birthday:p()(e.birthday).format("YYYY-MM-DD"),street:e.street,street_number:e.streetnumber,postal_code:e.postalcode,city:e.city}),headers:{Authorization:"Bearer "+a.token}}).then(function(e){n("ADD_PATIENT",e.data.patient),t()}).catch(function(t){console.log(t),i()})})},UPDATE_PATIENT:function(t,e){var n=t.commit,a=t.state;return console.log(e),new i.a(function(t,i){o()({method:"put",url:l+"patient/"+e.id,data:u.a.stringify({id:e.id,gender:e.gender,firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,birthday:p()(e.birthday).format("YYYY-MM-DD"),street:e.street,street_number:e.street_number,postal_code:e.postal_code,city:e.city}),headers:{Authorization:"Bearer "+a.token}}).then(function(e){console.log(e),n("UPDATE_PATIENT",e.data.patient),t()}).catch(function(t){console.log(t),i()})})},FETCH_PATIENT_DATA:function(t,e){var n=t.commit,a=t.state;return new i.a(function(t,i){o.a.get(l+"therapy/"+e,{headers:{Authorization:"Bearer "+a.token}}).then(function(e){n("SET_PATIENT_DATA",e.data.therapies),t()}).catch(function(t){console.log(t),i()})})},FETCH_ALL_MEDICINES:function(t){var e=t.commit,n=t.state;return new i.a(function(t,a){o.a.get(l+"medicine",{headers:{Authorization:"Bearer "+n.token}}).then(function(n){e("SET_ALL_MEDICINES",n.data.medicines),t()}).catch(function(t){console.log(t),a()})})},FETCH_ALL_NOTES:function(t,e){var n=(t.commit,t.state);return new i.a(function(t,a){o.a.get(l+"doctor/notes/"+e,{headers:{Authorization:"Bearer "+n.token}}).then(function(e){t()}).catch(function(t){console.log(t),a()})})},FETCH_ALL_EXERCISES:function(t){var e=t.commit,n=t.state;o.a.get(l+"excercise",{headers:{Authorization:"Bearer "+n.token}}).then(function(t){e("SET_ALL_EXERCISES",t.data.excercises)}).catch(function(t){console.log(t)})},ADD_MEDICINE:function(t,e){var n=t.commit,a=t.state;return new i.a(function(t,i){o()({method:"post",url:l+"medicine_todo",data:u.a.stringify({amount:e.amount,amount_per_day:e.amount_per_day,therapy_id:e.therapy_id,medicine_id:e.id,start_date:p()(e.start_date).format("YYYY-MM-DD"),end_date:p()(e.end_date).format("YYYY-MM-DD")}),headers:{Authorization:"Bearer "+a.token}}).then(function(e){console.log("MADE IT"),n("ADD_MEDICINE",e.data),t()}).catch(function(t){console.log(t),i()})})},ADD_DOCTOR_NOTE:function(t,e){var n=t.commit,a=t.state;return console.log(e),new i.a(function(t,i){o()({method:"post",url:l+"doctor_note",data:u.a.stringify({title:e.title,added_by:e.added_by,therapy_id:e.therapy_id,note:e.note}),headers:{Authorization:"Bearer "+a.token}}).then(function(e){n("ADD_DOCTOR_NOTE",e.data),t()}).catch(function(t){console.log(t),i()})})},ADD_EXCERCISE:function(t,e){var n=t.commit,a=t.state;return console.log(e),new i.a(function(t,i){o()({method:"post",url:l+"excercise_todo",data:u.a.stringify({sets:e.sets,sets_amount:e.sets_amount,per_day:e.per_day,therapy_id:e.therapy_id,excercise_id:e.id,start_date:p()(e.start_date).format("YYYY-MM-DD"),end_date:p()(e.end_date).format("YYYY-MM-DD")}),headers:{Authorization:"Bearer "+a.token}}).then(function(e){console.log(e.data),n("ADD_EXCERCISE",e.data),t()}).catch(function(t){console.log(t),i()})})},ADD_APPOINTMENT:function(t,e){var n=t.commit,a=t.state;console.log("APPOINTMENT DATA",e),o()({method:"post",url:l+"appointment",data:u.a.stringify({title:e.title,start:e.start,end:e.end,therapy_id:e.therapy_id,patient_id:e.patient_id,doctor_id:e.doctor_id}),headers:{Authorization:"Bearer "+a.token}}).then(function(t){n("ADD_APPOINTMENT",e)}).catch(function(t){console.log(t)})},ADD_THERAPY:function(t,e){var n=t.commit,a=t.state;return new i.a(function(t,i){o()({method:"post",url:l+"therapy",data:u.a.stringify({patient_id:e.patient_id,name:e.name,department_id:e.department_id,created_by:e.created_by,bodyparts:e.bodyparts}),headers:{Authorization:"Bearer "+a.token}}).then(function(e){console.log(e),n("ADD_THERAPY",e.data.therapies[0]),t()}).catch(function(t){console.log(t),i()})})},FINISH_THERAPY:function(t,e){var n=(t.commit,t.state);return new i.a(function(t,a){o()({method:"post",url:l+"therapy/finish/"+e,headers:{Authorization:"Bearer "+n.token}}).then(function(e){console.log(e),t()}).catch(function(t){console.log(t),a()})})},FETCH_AFSPRAKEN:function(t,e){var n=t.commit,a=t.state;return new i.a(function(t,i){o.a.get(l+"doctor/appointments/"+a.doctorData.id+"/"+e,{headers:{Authorization:"Bearer "+a.token}}).then(function(e){n("SET_AFSPRAKEN",e.data.appointments),t()}).catch(function(t){i(),console.log(t)})})},FETCH_APPOINTMENTS_TODAY:function(t){var e=t.commit,n=t.state;o.a.get(l+"doctor/today_appointments/"+n.doctorData.id,{headers:{Authorization:"Bearer "+n.token}}).then(function(t){e("SET_APPOINTMENTS_TODAY",t.data)}).catch(function(t){console.log(t)})},DELETE_ITEM:function(t,e){var n=t.commit,a=t.state;return new i.a(function(t,i){var r="medicine"==e.type?"delete/medicine_todo":"delete/excercise_todo",s={therapy_id:e.therapy_id};"medicine"==e.type?s.medicine_id=e.id:"excercise"==e.type&&(s.excercise_id=e.id),console.log("DATA",s),o()({method:"post",url:l+r,data:u.a.stringify(s),headers:{Authorization:"Bearer "+a.token}}).then(function(a){console.log(a),n("DELETE_ITEM",e),t()}).catch(function(t){console.log(t),i()})})}}},197:function(t,e,n){"use strict";var a=n(196),i=n(200),r=n(198),o={state:{doctorData:{},patients:{},patientBehandelingen:{},doctorNotes:[],token:"",isFetching:!1,medicines:[],excercises:[],appointments:[],appointmentsToday:[],appointmentsTomorrow:[]},actions:a.a,mutations:i.a,getters:r.a};e.a=o},198:function(t,e,n){"use strict";e.a={getTokenArts:function(t){return t.token},getPatients:function(t){return t.patients},getTotalPatientCount:function(t){return t.patients.length},getDoctorInfo:function(t){return t.doctorData},getPatientBehandelingen:function(t){return t.patientBehandelingen},getAllMedicines:function(t){return t.medicines},getAllExercises:function(t){return t.excercises},getAppointments:function(t){return t.appointments},getAppointmentsToday:function(t){return t.appointmentsToday},getDoctorNotes:function(t){return t.doctorNotes}}},199:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return p}),n.d(e,"j",function(){return l}),n.d(e,"k",function(){return f}),n.d(e,"m",function(){return h}),n.d(e,"l",function(){return m}),n.d(e,"n",function(){return _}),n.d(e,"o",function(){return g}),n.d(e,"p",function(){return v}),n.d(e,"q",function(){return T});var a="FETCH_DOCTOR",i="CHECK_TOKEN",r="FETCH_PATIENTS",o="ADD_PATIENT",s="UPDATE_PATIENT",c="SET_PATIENT_DATA",u="SET_ALL_MEDICINES",d="SET_ALL_EXERCISES",p="SET_AFSPRAKEN",l="SET_APPOINTMENTS_TODAY",f="ADD_MEDICINE",h="ADD_EXCERCISE",m="ADD_DOCTOR_NOTE",_="ADD_APPOINTMENT",g="ADD_THERAPY",v="LOG_DOCTOR_OUT",T="DELETE_ITEM"},200:function(t,e,n){"use strict";var a,i=n(36),r=n.n(i),o=n(199),s=n(5);n.n(s);e.a=(a={},r()(a,o.a,function(t,e,n){t.doctorData=e}),r()(a,o.b,function(t,e){t.token=e}),r()(a,o.c,function(t,e){t.patients=e}),r()(a,o.d,function(t,e){t.patients.push(e)}),r()(a,o.e,function(t,e){t.patients.map(function(t){if(t.id==e.id)for(var n in t)t[n]=e[n]})}),r()(a,o.f,function(t,e){t.patientBehandelingen=e}),r()(a,o.g,function(t,e){t.medicines=e}),r()(a,o.h,function(t,e){t.excercises=e}),r()(a,o.i,function(t,e){t.appointments=e}),r()(a,o.j,function(t,e){t.appointmentsToday=e}),r()(a,o.k,function(t,e){console.log(e),t.patientBehandelingen.map(function(t){t.id==e.pivot.therapy_id&&t.medicines.push(e)})}),r()(a,o.l,function(t,e){t.patientBehandelingen.map(function(t){t.id==e.doctor_note.therapy_id&&t.doctor_notes.push(e.doctor_note)})}),r()(a,o.m,function(t,e){t.patientBehandelingen.map(function(t){t.id==e.pivot.therapy_id&&t.excercises.push(e)})}),r()(a,o.n,function(t,e){t.appointments.push({title:e.title,start:e.start,end:e.end})}),r()(a,o.o,function(t,e){t.patientBehandelingen.push(e)}),r()(a,o.p,function(t,e){s.LocalStorage.clear("token")}),r()(a,o.q,function(t,e){t.patientBehandelingen.map(function(t){if(t.id==e.therapy_id){var n=0;if("medicine"==e.type){for(var a in t.medicines)t.medicines[a].id==e.id&&(n=a);t.medicines.splice(n,1)}else if("excercise"==e.type){for(var i in t.excercises)t.excercises[i].id==e.id&&(n=i);t.excercises.splice(n,1)}}})}),a)},201:function(t,e,n){"use strict";var a=n(35),i=n.n(a),r=n(18),o=n.n(r),s=n(5),c=(n.n(s),n(28)),u="http://www.mijnnazorg.nl/api/";e.a={CHECK_TOKEN:function(t){(0,t.commit)("CHECK_TOKEN",s.LocalStorage.get.item("token"))},FETCH_PATIENT:function(t){var e=t.commit,n=t.state;o.a.get(u+"authenticate/checkuser",{headers:{Authorization:"Bearer "+n.token}}).then(function(t){var a=t.data.user.id;n.userType=t.data.user.type,o.a.get(u+t.data.user.type+"/user/"+a,{headers:{Authorization:"Bearer "+n.token}}).then(function(t){"patient"===n.userType?(e("FETCH_PATIENT",t.data.patient),c.a.push({path:"/"})):(e("FETCH_DOCTOR",t.data.doctor),o.a.get(u+"patient",{headers:{Authorization:"Bearer "+n.token}}).then(function(t){e("FETCH_PATIENTS",t.data.patients)}).catch(function(t){}),c.a.push({path:"/arts"})),n.isFetching&&e("TOGGLE_IS_FETCHING")}).catch(function(t){return console.log("error2 "+t)})}).catch(function(t){console.log("error1 "+t)})},FETCH_TOKEN:function(t,e){var n=t.commit;t.state;return new i.a(function(t,a){o.a.post(u+"authenticate",{username:e.username,password:e.password}).then(function(e){s.LocalStorage.set("token",e.data.token),n("CHECK_TOKEN",e.data.token),t()}).catch(function(t){console.log(t),n("CHECK_TOKEN","unauthorized"),a()})})},TOGGLE_TODO:function(t,e){var n=t.commit,a=t.state;o()({method:"put",url:"http://178.62.240.123/api/"+e.type+"/"+e.id,data:{done:+!e.completed},headers:{Authorization:"Bearer "+a.token}}).then(function(t){console.log(t),n("TOGGLE_TODO",e)}).catch(function(t){console.log(t)})},ADD_NOTE:function(t,e){var n=t.commit,a=t.state;o()({method:"post",url:u+"patient_note",data:{title:e.title,patient_id:e.patientId,note:e.note},headers:{Authorization:"Bearer "+a.token}}).then(function(t){n("ADD_NOTE",e)}).catch(function(t){})}}},202:function(t,e,n){"use strict";e.a={isFetching:function(t){return t.isFetching},getToken:function(t){return t.token},getUserType:function(t){return t.userType},totalBehandelingen:function(t){return t.patientData.therapys},getCurrentBehandelingType:function(t){return t.currentBehandeling.id},getBehandeling:function(t){return t.currentBehandeling},getMedicatie:function(t){return t.currentBehandeling.medicatie},getOefening:function(t){return t.currentOefening},getAllAppointsments:function(t){var e=[];return t.patientData.appointments&&t.patientData.appointments.map(function(t){e.push(t)}),e},getAllTodos:function(t){var e=[];if(t.patientData.therapys)return t.patientData.therapys.map(function(t){t.medicine_todo.length>0&&t.medicine_todo.map(function(t){e.push(t)}),t.excercise_todo.length>0&&t.excercise_todo.map(function(t){e.push(t)})}),e},getAllMedicatie:function(t){var e=[];if(t.patientData.therapys)return t.patientData.therapys.map(function(t){t.medicines.length>0&&t.medicines.map(function(t){e.push(t)})}),e},getArtsNotities:function(t){var e=[];if(t.patientData.therapys)return t.patientData.therapys.map(function(t){t.doctor_notes.map(function(t){e.push(t)})}),e},getPatientNotities:function(t){return t.patientData.notes},getAllOefeningen:function(t){var e=[];if(t.patientData.therapys)return t.patientData.therapys.map(function(t){t.excercises.length>0&&t.excercises.map(function(t){e.push(t)})}),e},getNotities:function(t){return t.currentBehandeling.notities},getMedicijn:function(t){return t.currentMedicijn},getPatientInfo:function(t){return{name:t.patientData.firstname+" "+t.patientData.lastname,email:t.patientData.email,phone:t.patientData.phone,address:t.patientData.street+" "+t.patientData.street_number,city:t.patientData.postal_code+" "+t.patientData.city,birthday:t.patientData.birthday,avatar:t.patientData.avatar}},getPatientId:function(t){return t.patientData.id}}},203:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return p});var a="CHANGE_CURRENT_BEHANDELING",i="CHANGE_CURRENT_MEDICIJN",r="CHANGE_CURRENT_OEFENING",o="TOGGLE_TODO",s="ADD_NOTE",c="FETCH_PATIENT",u="CHECK_TOKEN",d="TOGGLE_IS_FETCHING",p="LOG_OUT"},204:function(t,e,n){"use strict";var a,i=n(36),r=n.n(i),o=n(203),s=n(29),c=(n.n(s),n(18)),u=(n.n(c),n(5));n.n(u);e.a=(a={},r()(a,o.a,function(t,e){t.currentBehandeling=t.patientData.therapys.filter(function(t){return t.id===e})[0]}),r()(a,o.b,function(t,e){t.patientData.therapys.map(function(n){n.medicines.map(function(n){n.id==e&&(t.currentMedicijn=n)})})}),r()(a,o.c,function(t,e){t.patientData.therapys.map(function(n){n.excercises.map(function(n){n.id==e&&(t.currentOefening=n)})})}),r()(a,o.d,function(t,e){t.patientData.therapys.map(function(t){t.medicine_todo.length>0&&"medicine_todo"==e.type&&t.medicine_todo.map(function(t){t.id===e.id&&(t.done=1==t.done?0:1)}),t.excercise_todo.length>0&&"excercise_todo"==e.type&&t.excercise_todo.map(function(t){t.id===e.id&&(t.done=1==t.done?0:1)})})}),r()(a,o.e,function(t,e){t.patientData.notes.push({title:e.title,note:e.note})}),r()(a,o.f,function(t,e){t.patientData=e}),r()(a,o.g,function(t,e){t.token=e}),r()(a,o.h,function(t){t.isFetching=!t.isFetching}),r()(a,o.i,function(t){u.LocalStorage.clear("token")}),a)},205:function(t,e,n){"use strict";var a=n(201),i=n(204),r=n(202),o={state:{patientData:{},userType:"",token:"",isFetching:!1,currentBehandeling:{},currentMedicijn:{},currentOefening:{}},actions:a.a,mutations:i.a,getters:r.a};e.a=o},206:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(169),i=n.n(a),r=n(170),o=n.n(r),s=n(167),c=n.n(s),u=n(166),d=n.n(u),p=n(171),l=n.n(p),f=n(5);n.n(f),n(17);e.default={components:{TopHeader:i.a,Navigation:o.a,ArtsTopHeader:c.a,ArtsDrawer:d.a,NotitieTabs:l.a},computed:{isFetching:function(){return this.$store.getters.isFetching}},beforeCreate:function(){var t=this;f.LocalStorage.get.item("token")&&(this.$store.commit("TOGGLE_IS_FETCHING"),this.$store.dispatch("CHECK_TOKEN").then(function(){t.$store.dispatch("FETCH_PATIENT").then(function(){})}))},beforeUpdate:function(){null===f.LocalStorage.get.item("token")?this.$router.push({path:"/login"}):this.$store.dispatch("CHECK_TOKEN")}}},207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"arts-drawer",computed:{doctorData:function(){return this.$store.getters.getDoctorInfo}},methods:{logOut:function(){console.log("CLICKED"),this.$store.commit("LOG_DOCTOR_OUT"),this.$router.push({path:"/login"})}}}},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(165);n.n(a);e.default={name:"arts-top-header",components:{},mixins:[a.mixin],data:function(){return{searching:!1,searchText:""}},methods:{closeSearch:function(){this.searching=!1}},computed:{doctorData:function(){return this.$store.getters.getDoctorInfo}}}},209:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"drawer",computed:{behandelingType:function(){return this.$store.getters.getCurrentBehandelingType},patientInfo:function(){return this.$store.getters.getPatientInfo}},methods:{openPatientInfo:function(){this.$router.push({path:"/patientinformatie"}),this.$refs.drawer.close()}}}},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(165),i=(n.n(a),n(168)),r=n.n(i);n(17);e.default={name:"top-header",components:{Drawer:r.a},mixins:[a.mixin],data:function(){return{searching:!1,searchText:""}},methods:{closeSearch:function(){this.searching=!1},logOut:function(){this.$store.commit("LOG_OUT"),this.$router.push({path:"/login"})}}}},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigation"}},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"notitie-tabs"}},249:function(t,e){},250:function(t,e){},251:function(t,e){},252:function(t,e){},253:function(t,e){},254:function(t,e){},255:function(t,e){},258:function(t,e,n){function a(t){return n(i(t))}function i(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":48,"./af.js":48,"./ar":55,"./ar-dz":49,"./ar-dz.js":49,"./ar-kw":50,"./ar-kw.js":50,"./ar-ly":51,"./ar-ly.js":51,"./ar-ma":52,"./ar-ma.js":52,"./ar-sa":53,"./ar-sa.js":53,"./ar-tn":54,"./ar-tn.js":54,"./ar.js":55,"./az":56,"./az.js":56,"./be":57,"./be.js":57,"./bg":58,"./bg.js":58,"./bn":59,"./bn.js":59,"./bo":60,"./bo.js":60,"./br":61,"./br.js":61,"./bs":62,"./bs.js":62,"./ca":63,"./ca.js":63,"./cs":64,"./cs.js":64,"./cv":65,"./cv.js":65,"./cy":66,"./cy.js":66,"./da":67,"./da.js":67,"./de":70,"./de-at":68,"./de-at.js":68,"./de-ch":69,"./de-ch.js":69,"./de.js":70,"./dv":71,"./dv.js":71,"./el":72,"./el.js":72,"./en-au":73,"./en-au.js":73,"./en-ca":74,"./en-ca.js":74,"./en-gb":75,"./en-gb.js":75,"./en-ie":76,"./en-ie.js":76,"./en-nz":77,"./en-nz.js":77,"./eo":78,"./eo.js":78,"./es":80,"./es-do":79,"./es-do.js":79,"./es.js":80,"./et":81,"./et.js":81,"./eu":82,"./eu.js":82,"./fa":83,"./fa.js":83,"./fi":84,"./fi.js":84,"./fo":85,"./fo.js":85,"./fr":88,"./fr-ca":86,"./fr-ca.js":86,"./fr-ch":87,"./fr-ch.js":87,"./fr.js":88,"./fy":89,"./fy.js":89,"./gd":90,"./gd.js":90,"./gl":91,"./gl.js":91,"./gom-latn":92,"./gom-latn.js":92,"./he":93,"./he.js":93,"./hi":94,"./hi.js":94,"./hr":95,"./hr.js":95,"./hu":96,"./hu.js":96,"./hy-am":97,"./hy-am.js":97,"./id":98,"./id.js":98,"./is":99,"./is.js":99,"./it":100,"./it.js":100,"./ja":101,"./ja.js":101,"./jv":102,"./jv.js":102,"./ka":103,"./ka.js":103,"./kk":104,"./kk.js":104,"./km":105,"./km.js":105,"./kn":106,"./kn.js":106,"./ko":107,"./ko.js":107,"./ky":108,"./ky.js":108,"./lb":109,"./lb.js":109,"./lo":110,"./lo.js":110,"./lt":111,"./lt.js":111,"./lv":112,"./lv.js":112,"./me":113,"./me.js":113,"./mi":114,"./mi.js":114,"./mk":115,"./mk.js":115,"./ml":116,"./ml.js":116,"./mr":117,"./mr.js":117,"./ms":119,"./ms-my":118,"./ms-my.js":118,"./ms.js":119,"./my":120,"./my.js":120,"./nb":121,"./nb.js":121,"./ne":122,"./ne.js":122,"./nl":124,"./nl-be":123,"./nl-be.js":123,"./nl.js":124,"./nn":125,"./nn.js":125,"./pa-in":126,"./pa-in.js":126,"./pl":127,"./pl.js":127,"./pt":129,"./pt-br":128,"./pt-br.js":128,"./pt.js":129,"./ro":130,"./ro.js":130,"./ru":131,"./ru.js":131,"./sd":132,"./sd.js":132,"./se":133,"./se.js":133,"./si":134,"./si.js":134,"./sk":135,"./sk.js":135,"./sl":136,"./sl.js":136,"./sq":137,"./sq.js":137,"./sr":139,"./sr-cyrl":138,"./sr-cyrl.js":138,"./sr.js":139,"./ss":140,"./ss.js":140,"./sv":141,"./sv.js":141,"./sw":142,"./sw.js":142,"./ta":143,"./ta.js":143,"./te":144,"./te.js":144,"./tet":145,"./tet.js":145,"./th":146,"./th.js":146,"./tl-ph":147,"./tl-ph.js":147,"./tlh":148,"./tlh.js":148,"./tr":149,"./tr.js":149,"./tzl":150,"./tzl.js":150,"./tzm":152,"./tzm-latn":151,"./tzm-latn.js":151,"./tzm.js":152,"./uk":153,"./uk.js":153,"./ur":154,"./ur.js":154,"./uz":156,"./uz-latn":155,"./uz-latn.js":155,"./uz.js":156,"./vi":157,"./vi.js":157,"./x-pseudo":158,"./x-pseudo.js":158,"./yo":159,"./yo.js":159,"./zh-cn":160,"./zh-cn.js":160,"./zh-hk":161,"./zh-hk.js":161,"./zh-tw":162,"./zh-tw.js":162};a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id=258},263:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("q-drawer",{ref:"drawer",attrs:{id:"drawer"}},[n("div",{staticClass:"toolbar light"},[n("q-toolbar-title",{attrs:{padding:1}},[t._v("\n              Hallo "+t._s(t.doctorData.firstname)+"\n          ")])],1),t._v(" "),n("div",{staticClass:"list no-border platform-delimiter"},[n("q-drawer-link",{attrs:{icon:"home",to:"/arts",exact:""}},[t._v("\n            Home\n          ")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"list-label"},[t._v("Opties")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"assignment",to:"/arts/Patienten"}},[t._v("\n            Patienten\n          ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"event",to:"/arts/Afspraken"}},[t._v("\n            Afspraken\n          ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"assignment",to:"/arts/medicatie"}},[t._v("\n            Medicatie\n          ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"insert_drive_file",to:"/arts/Informatie"}},[t._v("\n            Informatie\n          ")])],1)]),t._v(" "),n("button",{staticClass:"drawer-button hide-on-drawer-visible",on:{click:function(e){t.$refs.drawer.open()}}},[n("i",[t._v("menu")])]),t._v(" "),n("q-toolbar-title",{staticClass:"header-title"},[n("span",{staticClass:"bold"},[t._v("mijn")]),n("span",{staticClass:"light"},[t._v("nazorg.nl")])]),t._v(" "),t.searching?n("q-search",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeSearch,expression:"closeSearch"}],attrs:{placeholder:"Zoeken"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}):t._e(),t._v(" "),t.searching?t._e():n("button",{staticClass:"hide-on-drawer-visible",on:{click:function(e){t.searching=!t.searching}}},[n("i",[t._v("search")])])],1)},staticRenderFns:[]}},264:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-tabs",{attrs:{refs:t.$refs,"default-tab":"tab-1"}},[n("q-tab",{attrs:{name:"tab-1",route:"/notities"}},[t._v("\n        Mijn notities\n    ")]),t._v(" "),n("q-tab",{attrs:{name:"tab-2",route:"/notities-arts"}},[t._v("\n        Arts notities\n    ")])],1)},staticRenderFns:[]}},265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("drawer"),t._v(" "),n("q-toolbar-title",[n("span",{staticClass:"bold"},[t._v("mijn")]),n("span",{staticClass:"light"},[t._v("nazorg.nl")])]),t._v(" "),n("button",{ref:"target",staticClass:"hide-on-drawer-visible"},[n("i",[t._v("more_vert")]),t._v(" "),n("q-popover",{ref:"popover",attrs:{"max-height":"500px",self:"top right",anchor:"top right"}},[n("div",{staticClass:"list highlight"},[n("div",{staticClass:"item item-link",on:{click:function(e){t.$router.push({path:"/patientinformatie"}),t.$refs.popover.close()}}},[n("button",[t._v("Gegevens")])]),t._v(" "),n("div",{staticClass:"item item-link",on:{click:function(e){t.logOut(),t.$refs.popover.close()}}},[n("button",[t._v("Uitloggen")])])])])],1)],1)},staticRenderFns:[]}},266:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("q-layout",["/login"===this.$route.path||this.$route.path.includes("/arts")?t._e():n("top-header",{slot:"header"}),t._v(" "),"/behandeling"===this.$route.path||"/"===this.$route.path?n("navigation",{slot:"navigation"}):t._e(),t._v(" "),"/notities"===this.$route.path||"/notities-arts"===this.$route.path?n("notitie-tabs",{slot:"navigation"}):t._e(),t._v(" "),this.$route.path.includes("/arts")?n("arts-top-header",{slot:"header"}):t._e(),t._v(" "),this.$route.path.includes("/arts")?n("arts-drawer"):t._e(),t._v(" "),t.isFetching?t._e():n("router-view"),t._v(" "),t.isFetching?n("spinner",{staticClass:"loading",attrs:{color:"#e74c3c",name:"tail"}}):t._e()],1)],1)},staticRenderFns:[]}},267:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-tabs",{attrs:{refs:t.$refs,"default-tab":"tab-1"}},[n("q-tab",{attrs:{name:"tab-1",route:"/"}},[t._v("\n        Overzicht\n    ")]),t._v(" "),n("q-tab",{attrs:{name:"tab-2",route:"/behandeling"}},[t._v("\n        Behandelingen\n    ")])],1)},staticRenderFns:[]}},268:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-drawer",{attrs:{id:"drawer"}},[n("div",{staticClass:"toolbar light"},[n("q-toolbar-title",{attrs:{padding:1}},[t._v("\n          Hallo "+t._s(t.doctorData.firstname)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"list no-border platform-delimiter"},[n("q-drawer-link",{attrs:{icon:"home",to:"/arts",exact:""}},[t._v("\n        Dashboard\n      ")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"list-label"},[t._v("Opties")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"person",to:"/arts/patienten"}},[t._v("\n        Patienten\n      ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"event",to:"/arts/afspraken"}},[t._v("\n        Afspraken\n      ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"assignment",to:"/arts/medicatie"}},[t._v("\n        Medicatie\n      ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"accessibility",to:"/arts/oefeningen"}},[t._v("\n        Oefeningen\n      ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"info",to:"/arts/informatie"}},[t._v("\n        Informatie\n      ")]),t._v(" "),n("div",{staticClass:"item item-link drawer-closer",on:{click:function(e){t.logOut()}}},[n("i",{staticClass:"item-primary"},[t._v("exit_to_app")]),t._v(" "),n("div",{staticClass:"item-content"},[t._v("\n          Uitloggen\n        ")])])],1)])},staticRenderFns:[]}},269:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-drawer",{ref:"drawer",attrs:{id:"drawer"}},[n("div",{staticClass:"toolbar bg-primary"},[n("q-toolbar-title",{attrs:{padding:1}},[t._v("\n              IPMEDT4\n          ")])],1),t._v(" "),n("div",{staticClass:"list no-border platform-delimiter"},[n("div",{staticClass:"patient-info bg-light",on:{click:t.openPatientInfo}},[n("img",{staticClass:"patient-avatar",attrs:{src:t.patientInfo.avatar,alt:""}}),t._v(" "),n("p",{staticClass:"text-center"},[t._v(t._s(t.patientInfo.name))])]),t._v(" "),n("q-drawer-link",{attrs:{icon:"home",to:"/",exact:""}},[t._v("\n            Overzicht\n          ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"assignment",to:"/medicatie"}},[t._v("\n            Medicatie\n          ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"insert_drive_file",to:"/notities"}},[t._v("\n            Notities\n          ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"accessibility",to:"/oefeningen"}},[t._v("\n            Oefeningen\n          ")]),t._v(" "),n("q-drawer-link",{attrs:{icon:"date_range",to:"/afspraken"}},[t._v("\n            Afspraken\n          ")])],1)]),t._v(" "),n("button",{staticClass:"hide-on-drawer-visible",on:{click:function(e){t.$refs.drawer.open()}}},[n("i",[t._v("menu")])])],1)},staticRenderFns:[]}},271:function(t,e,n){function a(t){var e=i[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"./Error404.vue":[301,50],"./Login.vue":[302,21],"./arts/ArtsDrawer.vue":[166],"./arts/ArtsHeader.vue":[167],"./arts/ArtsInfo.vue":[303,20],"./arts/afspraken/AfspraakCard.vue":[275,24],"./arts/afspraken/AfspraakTijdRij.vue":[282,4],"./arts/afspraken/Afspraakkolom.vue":[304,8],"./arts/afspraken/Afspraken.vue":[305,2],"./arts/afspraken/KalenderTop.vue":[283,49],"./arts/behandeling/BehandelingInformatie.vue":[284,48],"./arts/behandeling/BehandelingMedicatie.vue":[285,19],"./arts/behandeling/BehandelingNotities.vue":[286,18],"./arts/behandeling/BehandelingOefeningen.vue":[287,17],"./arts/behandeling/BehandelingPage.vue":[306,1],"./arts/behandeling/Behandelingen.vue":[307,47],"./arts/behandeling/ListItem.vue":[274,46],"./arts/dashboard/CountCard.vue":[276,45],"./arts/dashboard/Dashboard.vue":[308,0],"./arts/dashboard/DashboardAfspraakCard.vue":[277,44],"./arts/dashboard/DashboardAfspraken.vue":[288,16],"./arts/dashboard/DashboardNotificatieItem.vue":[278,43],"./arts/dashboard/DashboardNotificaties.vue":[289,15],"./arts/dashboard/DashboardPatientCard.vue":[279,42],"./arts/dashboard/DashboardPatientModal.vue":[280,41],"./arts/dashboard/DashboardPatienten.vue":[290,5],"./arts/medicatie/Medicatie.vue":[309,7],"./arts/medicatie/MedicatieListItem.vue":[291,23],"./arts/oefeningen/OefeningListItem.vue":[292,40],"./arts/oefeningen/Oefeningen.vue":[310,6],"./arts/patient/PatientCard.vue":[293,39],"./arts/patient/Patienten.vue":[311,14],"./arts/patient/PatientenPage.vue":[312,22],"./patient/Drawer.vue":[168],"./patient/Header.vue":[169],"./patient/Navigation.vue":[170],"./patient/PatientInformatie.vue":[313,38],"./patient/afspraken/Afspraken.vue":[314,13],"./patient/afspraken/AfsprakenTimelineItem.vue":[294,37],"./patient/behandeling/BehandelingCard.vue":[295,36],"./patient/behandeling/BehandelingPage.vue":[315,35],"./patient/behandeling/Behandelingen.vue":[316,12],"./patient/medicatie/Medicatie.vue":[317,11],"./patient/medicatie/MedicatiePage.vue":[318,34],"./patient/medicatie/MedicijnCard.vue":[296,33],"./patient/notities/AddNoteModal.vue":[319,32],"./patient/notities/ArtsNotitiesPage.vue":[320,31],"./patient/notities/NotitieTabs.vue":[171],"./patient/notities/NotitiesPage.vue":[321,30],"./patient/oefeningen/OefeningCard.vue":[297,29],"./patient/oefeningen/OefeningPage.vue":[322,28],"./patient/oefeningen/Oefeningen.vue":[323,10],"./patient/overzicht/MedicatieList.vue":[298,27],"./patient/overzicht/OefeningenList.vue":[299,26],"./patient/overzicht/Overzicht.vue":[324,3],"./patient/overzicht/Todo.vue":[281,25],"./patient/overzicht/TodoList.vue":[300,9]};a.keys=function(){return Object.keys(i)},t.exports=a,a.id=271},28:function(t,e,n){"use strict";function a(t){return function(){return n(271)("./"+t+".vue")}}var i=n(12),r=n(17);i.default.use(r.a),e.a=new r.a({routes:[{path:"/",component:a("patient/overzicht/Overzicht")},{path:"/behandeling",component:a("patient/behandeling/Behandelingen")},{path:"/medicatie",component:a("patient/medicatie/Medicatie")},{path:"/notities",component:a("patient/notities/NotitiesPage")},{path:"/notities-arts",component:a("patient/notities/ArtsNotitiesPage")},{path:"/oefeningen",component:a("patient/oefeningen/Oefeningen")},{path:"/afspraken",component:a("patient/afspraken/Afspraken")},{path:"/login",component:a("Login")},{path:"/patientinformatie",component:a("patient/PatientInformatie")},{path:"/behandeling/:typeBehandeling",component:a("BehandelingPage")},{path:"/behandeling/:typeBehandeling/medicatie/:typeMedicijn",component:a("patient/medicatie/MedicatiePage")},{path:"/behandeling/:typeBehandeling/oefeningen/:typeOefening",component:a("patient/oefeningen/OefeningPage")},{path:"/arts",component:a("arts/dashboard/Dashboard")},{path:"/arts/patienten",component:a("arts/patient/Patienten")},{path:"/arts/patienten/:patientId",component:a("arts/patient/PatientenPage")},{path:"/arts/patienten/:patientId/behandelingen/:behandelingId",component:a("arts/behandeling/BehandelingPage")},{path:"/arts/informatie",component:a("arts/ArtsInfo")},{path:"/arts/medicatie",component:a("arts/medicatie/Medicatie")},{path:"/arts/oefeningen",component:a("arts/oefeningen/Oefeningen")},{path:"/arts/afspraken",component:a("arts/afspraken/Afspraken")},{path:"*",component:a("Error404")}]})}},[195]);