webpackJsonp([15],{250:function(e,a,i){function t(e){i(349)}var n=i(3)(i(324),i(369),t,"data-v-3ab4d3a4",null);e.exports=n.exports},324:function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=i(8),n=i.n(t);a.default={name:"medicatie",data:function(){return{medicijnSearch:"",medicijnen:[{naam:"ibuprofen"},{naam:"paracetamol"},{naam:"amfetamine"}]}},computed:{searchedMedicijnen:function(){var e=this;if(""!==this.medicijnSearch){var a=[];return this.medicijnen.map(function(i){n.a.includes(i.naam.toLowerCase(),e.medicijnSearch.toLowerCase())&&a.push(i)}),a}return this.medicijnen}}}},331:function(e,a,i){a=e.exports=i(218)(void 0),a.push([e.i,".page-title[data-v-3ab4d3a4]{font-size:.85rem;font-weight:500;color:#a8a8a8;margin:.5rem 0}",""])},349:function(e,a,i){var t=i(331);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);i(219)("11cbf981",t,!0)},369:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"layout-view"},[i("div",{staticClass:"layout-padding"},[i("p",{staticClass:"page-title"},[e._v("Medicatie")]),e._v(" "),i("q-search",{staticClass:"searchbar",attrs:{placeholder:"Zoek medicijn..."},model:{value:e.medicijnSearch,callback:function(a){e.medicijnSearch=a},expression:"medicijnSearch"}}),e._v(" "),i("div",{staticClass:"list bg-white striped"},e._l(e.searchedMedicijnen,function(a,t){return i("div",{staticClass:"item"},[i("div",{staticClass:"item-content"},[e._v("\n              "+e._s(a.naam)+"\n            ")])])}))],1)])},staticRenderFns:[]}}});