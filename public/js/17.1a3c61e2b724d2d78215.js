webpackJsonp([17,42],{285:function(t,e,n){function a(t){n(392)}var i=n(4)(n(361),n(407),a,null,null);t.exports=i.exports},301:function(t,e,n){function a(t){n(484)}var i=n(4)(n(421),n(509),a,null,null);t.exports=i.exports},361:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(17);e.default={name:"behandeling-card",props:["id","title","bodyparts","date"],methods:{cardClick:function(){this.$router.push({path:"behandeling/"+this.id})}}}},378:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,".card-content,.card-title{padding:.7rem 0}.chip.label{margin-top:.7rem;font-size:.8rem;height:26px}.chip.label i{margin-right:.5rem}.card{padding:0 1rem;box-shadow:0 1px 3px rgba(0,0,0,.22),0 3px 2px rgba(0,0,0,.05);background-color:#fff}.card .card-title{font-size:1rem}.card .card-content{font-size:.9rem}.card .card-date{color:grey;font-size:.8rem}.card button{padding:0}",""])},392:function(t,e,n){var a=n(378);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(273)("4b647c32",a,!0)},407:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",on:{click:t.cardClick}},[n("span",{staticClass:"chip label bg-primary text-white float-right"},[n("i",[t._v("group")]),t._v("\n        "+t._s(t.bodyparts)+"\n    ")]),t._v(" "),n("div",{staticClass:"card-title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"card-date"},[n("i",[t._v("access_time")]),t._v("\n        Behandeling loopt vanaf "+t._s(t.date)+"\n    ")]),t._v(" "),n("div",{staticClass:"card-content"})])},staticRenderFns:[]}},421:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(285),i=n.n(a);e.default={name:"behandelingen",components:{BehandelingCard:i.a},computed:{behandelingen:function(){return this.$store.getters.totalBehandelingen}}}},461:function(t,e,n){e=t.exports=n(272)(void 0),e.push([t.i,".layout-view{background-color:#f6f6f6}.page-title{font-size:.85rem;font-weight:500;color:#a8a8a8;margin:.5rem 0}",""])},484:function(t,e,n){var a=n(461);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(273)("28dcf8ca",a,!0)},509:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-view"},[n("div",{staticClass:"layout-padding"},[n("p",{staticClass:"page-title"},[t._v("Openstaande behandelingen")]),t._v(" "),t._l(t.behandelingen,function(t){return n("behandeling-card",{key:t.id,attrs:{id:t.id,title:t.name,bodyparts:t.bodyparts[0].name,date:t.start_date}})})],2)])},staticRenderFns:[]}}});