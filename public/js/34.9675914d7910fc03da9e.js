webpackJsonp([34],{283:function(t,e,a){function i(t){a(362)}var r=a(4)(a(345),a(370),i,null,null);t.exports=r.exports},345:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a(17);e.default={name:"behandeling-card",props:["id","title","bodyparts","date"],methods:{cardClick:function(){this.$router.push({path:"behandeling/"+this.id})}}}},354:function(t,e,a){e=t.exports=a(272)(void 0),e.push([t.i,".card-content,.card-title{padding:.7rem 0}.chip.label{margin-top:.7rem;font-size:.8rem;height:26px}.chip.label i{margin-right:.5rem}.card{padding:0 1rem;box-shadow:0 1px 3px rgba(0,0,0,.22),0 3px 2px rgba(0,0,0,.05);background-color:#fff}.card .card-title{font-size:1rem}.card .card-content{font-size:.9rem}.card .card-date{color:grey;font-size:.8rem}.card button{padding:0}",""])},362:function(t,e,a){var i=a(354);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(273)("4b647c32",i,!0)},370:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",on:{click:t.cardClick}},[a("span",{staticClass:"chip label bg-primary text-white float-right"},[a("i",[t._v("group")]),t._v("\n        "+t._s(t.bodyparts)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-date"},[a("i",[t._v("access_time")]),t._v("\n        Behandeling loopt vanaf "+t._s(t.date)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-content"})])},staticRenderFns:[]}}});