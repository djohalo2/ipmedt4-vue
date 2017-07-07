webpackJsonp([22],{311:function(t,e,i){function a(t){i(491)}var n=i(4)(i(449),i(519),a,"data-v-2e2e3668",null);t.exports=n.exports},449:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(i(17),i(0)),n=i.n(a);e.default={name:"patienten-page",data:function(){return{patientId:0,editMode:!1,newTherapy:{patient_id:"",name:"",department_id:"",created_by:"",bodyparts:""},editPatient:{id:"",gender:"",firstname:"",lastname:"",email:"",phone:"",birthday:"",postal_code:"",street:"",street_number:"",city:""},isFetching:!1}},methods:{isBehandelingCompleted:function(t){return n()(t).diff(n()())<0},behandelingStatus:function(t){return n()(t).diff(n()())<0?"check_circle":"cached"},clickBehandeling:function(t){this.$router.push({path:this.patient.id+"/behandelingen/"+t})},addTherapy:function(){var t=this;this.newTherapy.patient_id=this.patient.id,this.newTherapy.department_id=this.doctorInfo.department_id,this.newTherapy.created_by=this.doctorInfo.id,this.$store.dispatch("ADD_THERAPY",this.newTherapy).then(function(){t.$refs.addTherapyModal.close();for(var e in t.newTherapy)t.newTherapy[e]=""})},toggleEditMode:function(){this.editMode||(this.editPatient.id=this.patient.id,this.editPatient.gender=this.patient.gender,this.editPatient.firstname=this.patient.firstname,this.editPatient.lastname=this.patient.lastname,this.editPatient.email=this.patient.email,this.editPatient.phone=this.patient.phone,this.editPatient.birthday=this.patient.birthday,this.editPatient.postal_code=this.patient.postal_code,this.editPatient.street=this.patient.street,this.editPatient.street_number=this.patient.street_number,this.editPatient.city=this.patient.city),this.editMode=!this.editMode},updatePatient:function(){var t=this;this.$store.dispatch("UPDATE_PATIENT",this.editPatient).then(function(){t.toggleEditMode()})}},computed:{doctorInfo:function(){return this.$store.getters.getDoctorInfo},patients:function(){return this.$store.getters.getPatients},notities:function(){return this.$store.getters.getNotities},behandelingen:function(){return this.$store.getters.getPatientBehandelingen},patient:function(){for(var t in this.patients)if(this.patients[t].id==this.$route.params.patientId)return this.patients[t]}},created:function(){var t=this;this.isFetching=!0,this.$store.dispatch("FETCH_PATIENT_DATA",this.patient.id).then(function(){t.isFetching=!1})}}},468:function(t,e,i){e=t.exports=i(272)(void 0),e.push([t.i,".layout-padding[data-v-2e2e3668]{padding-top:1rem}.profile-img[data-v-2e2e3668]{width:250px;display:block}.patientinfo-list[data-v-2e2e3668]{list-style-type:none;padding:0}.item-smaller p[data-v-2e2e3668]{font-size:14px}.item[data-v-2e2e3668]{border-bottom:1px solid #e0e0e0;cursor:pointer}.item[data-v-2e2e3668]:hover{background-color:#f6f6f6}.item-secondary[data-v-2e2e3668]{width:120px;font-size:13px;margin-top:25px;text-align:center}.loading-spinner[data-v-2e2e3668]{margin:0 auto;display:block}.background-green[data-v-2e2e3668]{background-color:#2ecc71;color:#fff}.patient-info[data-v-2e2e3668]{background-image:url("+i(511)+");background-size:cover}.patient-info .patient-info-card[data-v-2e2e3668]{margin-left:20%;-webkit-box-flex:0;-ms-flex:0 1 60%;flex:0 1 60%}.patient-info .patient-info-card .card .half-btn[data-v-2e2e3668]{width:50%!important;display:inline-block;border-radius:0}.patient-info .patient-info-card .card .patient-left[data-v-2e2e3668]{margin:0}.patient-info .patient-info-card .card .patient-right h4[data-v-2e2e3668]{font-size:28px;font-weight:600}.patient-info .patient-info-card .card .patient-right hr[data-v-2e2e3668]{border:1px solid #e6e6e6}.patient-info .patient-info-card .card .patient-right .table-cell[data-v-2e2e3668]{display:table-cell;width:150px;color:#000;font-weight:400;font-size:14px}.patient-info .patient-info-card .card .patient-right .table-cell span[data-v-2e2e3668]{color:#e74c3c;text-transform:uppercase;font-weight:800;font-size:12px}.patient-info .patient-info-card .card .patient-right .table-cell input[data-v-2e2e3668]{padding:0}.patient-info .patient-info-card .card .patient-right .table-cell .street-input[data-v-2e2e3668]{width:70%}.patient-info .patient-info-card .card .patient-right .table-cell .streetnumber-input[data-v-2e2e3668]{width:20%;margin-left:5%}.patient-info .patient-info-card .card .patient-right .table-row[data-v-2e2e3668]{display:table-row;height:30px}.patient-info .patient-info-card .card .patient-right .table[data-v-2e2e3668]{display:table}",""])},491:function(t,e,i){var a=i(468);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(273)("28d7beb6",a,!0)},511:function(t,e,i){t.exports=i.p+"img/patient-background.e3ac356.jpg"},519:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-view"},[i("div",{staticClass:"card patient-info"},[i("div",{staticClass:"card-title"},[i("p",{staticClass:"text-white"},[t._v("Gegevens")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"patient-info-card"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("div",{staticClass:"row medium-gutter sm-column"},[i("div",{staticClass:"width-1of3 patient-left"},[i("img",{staticClass:"profile-img",attrs:{src:t.patient.avatar}})]),t._v(" "),i("div",{staticClass:"width-2of3 patient-right"},[i("h4",[t._v(t._s(t.patient.firstname)+" "+t._s(t.patient.lastname))]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"table"},[i("div",{staticClass:"table-row"},[t._m(0),t._v(" "),i("div",{staticClass:"table-cell"},[t.editMode?t._e():i("div",[t._v(t._s(t.patient.birthday))]),t._v(" "),t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPatient.birthday,expression:"editPatient.birthday"}],domProps:{value:t.editPatient.birthday},on:{input:function(e){e.target.composing||(t.editPatient.birthday=e.target.value)}}}):t._e()])]),t._v(" "),i("div",{staticClass:"table-row"},[t._m(1),t._v(" "),i("div",{staticClass:"table-cell"},[t.editMode?t._e():i("div",[t._v(t._s(t.patient.email))]),t._v(" "),t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPatient.email,expression:"editPatient.email"}],domProps:{value:t.editPatient.email},on:{input:function(e){e.target.composing||(t.editPatient.email=e.target.value)}}}):t._e()])]),t._v(" "),i("div",{staticClass:"table-row"},[t._m(2),t._v(" "),i("div",{staticClass:"table-cell"},[t.editMode?t._e():i("div",[t._v(t._s(t.patient.phone))]),t._v(" "),t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPatient.phone,expression:"editPatient.phone"}],domProps:{value:t.editPatient.phone},on:{input:function(e){e.target.composing||(t.editPatient.phone=e.target.value)}}}):t._e()])]),t._v(" "),i("div",{staticClass:"table-row"},[t._m(3),t._v(" "),i("div",{staticClass:"table-cell"},[t.editMode?t._e():i("div",[t._v(t._s(t.patient.street)+" "+t._s(t.patient.street_number))]),t._v(" "),t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPatient.street,expression:"editPatient.street"}],staticClass:"street-input",domProps:{value:t.editPatient.street},on:{input:function(e){e.target.composing||(t.editPatient.street=e.target.value)}}}):t._e(),t._v(" "),t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPatient.street_number,expression:"editPatient.street_number"}],staticClass:"streetnumber-input",domProps:{value:t.editPatient.street_number},on:{input:function(e){e.target.composing||(t.editPatient.street_number=e.target.value)}}}):t._e()])]),t._v(" "),i("div",{staticClass:"table-row"},[t._m(4),t._v(" "),i("div",{staticClass:"table-cell"},[t.editMode?t._e():i("div",[t._v(t._s(t.patient.postal_code))]),t._v(" "),t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPatient.postal_code,expression:"editPatient.postal_code"}],domProps:{value:t.editPatient.postal_code},on:{input:function(e){e.target.composing||(t.editPatient.postal_code=e.target.value)}}}):t._e()])]),t._v(" "),i("div",{staticClass:"table-row"},[t._m(5),t._v(" "),i("div",{staticClass:"table-cell"},[t.editMode?t._e():i("div",[t._v(t._s(t.patient.city))]),t._v(" "),t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPatient.city,expression:"editPatient.city"}],domProps:{value:t.editPatient.city},on:{input:function(e){e.target.composing||(t.editPatient.city=e.target.value)}}}):t._e()])])])])])]),t._v(" "),t.editMode?t._e():i("button",{staticClass:"button primary full-width big",on:{click:function(e){t.toggleEditMode()}}},[t._v("Wijzigen")]),t._v(" "),t.editMode?i("button",{staticClass:"button primary half-btn big",on:{click:function(e){t.toggleEditMode()}}},[t._v("Annuleer")]):t._e(),t._v(" "),t.editMode?i("button",{staticClass:"button background-green half-btn float-right big",on:{click:function(e){t.updatePatient()}}},[t._v("Opslaan")]):t._e()])])])])]),t._v(" "),i("div",{staticClass:"layout-padding"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("i",{staticClass:"float-right add-icon",on:{click:function(e){t.$refs.addTherapyModal.open()}}},[t._v("add_circle")]),t._v(" "),i("p",{staticClass:"text-primary"},[t._v("Behandelingen")]),t._v(" "),t.isFetching?i("spinner",{staticClass:"loading-spinner",attrs:{color:"#e74c3c"}}):t._e(),t._v(" "),i("div",{staticClass:"list"},t._l(t.behandelingen,function(e){return i("div",{key:e.id,staticClass:"item three-lines",on:{click:function(i){t.clickBehandeling(e.id)}}},[i("i",{staticClass:"item-primary",class:{"text-positive":t.isBehandelingCompleted(e.end_date)}},[t._v(t._s(t.behandelingStatus(e.end_date)))]),t._v(" "),i("div",{staticClass:"item-content has-secondary"},[i("div",{staticClass:"item-title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"item-label item-smaller"},[t._v("\n                Loopt sinds "+t._s(e.start_date)),i("br"),t._v(" "),t._l(e.bodyparts,function(e,a){return i("p",{key:a},[t._v(t._s(e.name))])})],2)]),t._v(" "),i("button",{staticClass:"primary small item-secondary text-white"},[t._v("Bekijken")])])}))],1)]),t._v(" "),i("q-modal",{ref:"addTherapyModal",staticClass:"minimized patient-modal",attrs:{"content-css":{padding:"50px"}}},[i("p",[t._v("Behandeling toevoegen")]),t._v(" "),i("div",{staticClass:"row small-gutter"},[i("div",{staticClass:"width-1of2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTherapy.name,expression:"newTherapy.name"}],attrs:{placeholder:"Behandeling naam"},domProps:{value:t.newTherapy.name},on:{input:function(e){e.target.composing||(t.newTherapy.name=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"row small-gutter"},[i("div",{staticClass:"width-1of2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTherapy.bodyparts,expression:"newTherapy.bodyparts"}],attrs:{placeholder:"Categorie"},domProps:{value:t.newTherapy.bodyparts},on:{input:function(e){e.target.composing||(t.newTherapy.bodyparts=e.target.value)}}})])]),t._v(" "),i("button",{staticClass:"red",on:{click:function(e){t.addTherapy()}}},[t._v("Toevoegen")])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-cell"},[i("span",[t._v("geboortedatum")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-cell"},[i("span",[t._v("email")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-cell"},[i("span",[t._v("telefoon")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-cell"},[i("span",[t._v("straat")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-cell"},[i("span",[t._v("postcode")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-cell"},[i("span",[t._v("stad")])])}]}}});