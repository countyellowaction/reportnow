(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{268:function(t,e,r){var content=r(296);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("d277360e",content,!0,{sourceMap:!1})},269:function(t,e,r){var content=r(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("729ed8e4",content,!0,{sourceMap:!1})},270:function(t,e,r){var content=r(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("77686df2",content,!0,{sourceMap:!1})},295:function(t,e,r){"use strict";var n=r(268);r.n(n).a},296:function(t,e,r){(t.exports=r(27)(!1)).push([t.i,"",""])},301:function(t,e,r){"use strict";var n=r(269);r.n(n).a},302:function(t,e,r){(t.exports=r(27)(!1)).push([t.i,".filter-box input[data-v-027da175]:focus{outline:none}",""])},303:function(t,e,r){"use strict";var n=r(270);r.n(n).a},304:function(t,e,r){(t.exports=r(27)(!1)).push([t.i,"",""])},313:function(t,e,r){"use strict";r.r(e);r(42),r(20),r(16),r(11),r(33);var n=r(19),o=r(31),c=r(310);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var d={components:{},props:{center:{type:Object,required:!1,default:null},markerList:{type:Array,required:!1,default:null}},data:function(){return{map:null,geoLocationMarker:null,markerSource:null,markerLayer:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.b)("app",{geoLocation:"geoLocation"})),created:function(){window&&!window.ol&&(window.OL={ol:r(307),TileLayer:r(311).default,OSM:r(308).default,proj:r(219),condition:r(223),style:r(309),Point:r(258).default,SourceVector:r(285).default,LayerVector:r(284).default,Select:r(267).default})},watch:{center:function(){this.updateCenter(this.center)},geoLocation:function(t){if(t&&!this.geoLocationMarker){var e=OL,ol=e.ol,r=e.Point,n=e.proj,o=new ol.Feature({geometry:new r(n.fromLonLat([_.get(t,"coords.longitude",0),_.get(t,"coords.latitude",0)]))});this.$set(this,"geoLocationMarker",o),this.updateMarker()}},markerList:function(){this.updateMarker()}},mounted:function(){var t=this,e=OL,ol=e.ol,r=e.OSM,n=e.proj,o=e.TileLayer,c=e.SourceVector,l=e.LayerVector,d=e.Select,f=e.condition,map=new ol.Map({target:"map",layers:[new o({source:new r})],view:new ol.View({center:n.fromLonLat(this.center?[this.center.long,this.center.lat]:[114.0719,22.4253]),zoom:17})}),h=new c({features:[]}),m=new l({source:h});map.addLayer(m);var select=new d({condition:f.click});map.addInteraction(select),select.on("select",function(e){var r=e.target.getFeatures().item(0);if(r){var data=r.getProperties().data;t.$emit("clickMarker",data)}}),map.on("moveend",function(e){t.emitRect()}),this.$set(this,"map",map),this.$set(this,"markerSource",h),this.$set(this,"markerLayer",m),window.map=map,this.updateMarker()},methods:{updateCenter:function(t){var e=this,r=t.lat,n=t.long,o=t.zoomD,c=OL.proj,map=this.map;if(map){var view=map.getView();view&&(view.animate({center:c.fromLonLat([n,r]),duration:1e3,zoom:view.getZoom()>=19?view.getZoom()+(o||0):19}),_.delay(function(){e.emitRect()},1e3))}},emitRect:function(){var t=OL.proj,map=this.map;if(map){var view=map.getView(),e=t.transformExtent(view.calculateExtent(map.getSize()),"EPSG:900913","EPSG:4326"),r=[{long:e[0],lat:e[1]},{long:e[2],lat:e[3]}];this.$emit("updateRect",r)}},updateMarker:function(){var t=OL,ol=t.ol,e=t.Point,r=t.proj,style=t.style,source=this.markerSource;if(source){var n=_.round(this.map.getView().getZoom());if(n<15)source.clear();else{var o=_.max([_.min([-(13-n),12]),3]),l=_.reduce(_.groupBy(this.markerList,"data.roundKey.".concat(o)),function(t,e,r){return t.push({lat:_.get(e,"[0].lat",0),long:_.get(e,"[0].long",0),data:_.map(e,"data")}),t},[]),d=[].concat(Object(c.a)([this.geoLocationMarker]||!1),Object(c.a)(_.map(l,function(t){var n=t.lat,o=t.long,data=t.data,c=new ol.Feature({geometry:new e(r.fromLonLat([o,n])),data:data}),l=_.size(data),d=.2;return l>1?d=.25:l>4?d=.3:l>8?d=.35:l>10&&(d=.4),c.setStyle(new style.Style({image:new style.Icon({anchor:[.5,1],anchorXUnits:"fraction",anchorYUnits:"fraction",src:"pin.png",scale:d})})),c})));source.clear(),source.addFeatures(_.filter(d,_.identity))}}}}},f=(r(295),r(15)),map=Object(f.a)(d,function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map"},[e("div",{staticClass:"w-full h-full",attrs:{id:"map"}})])}],!1,null,"69bd86b1",null).exports,h=(r(297),r(115),r(43),r(116),r(3)),m=r.n(h);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var w={components:{},props:{list:{type:Array,default:null,required:!1}},data:function(){return{searchText:null,selectedShop:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.b)("shop",{fullList:"fullList"}),{filteredList:function(){var t=this;return 0===m.a.size(this.searchText)?this.list:m.a.filter(this.list,function(e){return-1!==(e.name||"").search(new RegExp(t.searchText,"i"))})},selectedShopId:function(){return m.a.get(this.selectedShop,"id",null)}}),watch:{filteredList:function(t){this.selectedShop&&(m.a.find(t,{id:this.selectedShop.id})||this.$set(this,"selectedShop",null))}},methods:{onClickShop:function(t){this.$emit("clickShop",t),this.$set(this,"selectedShop",t)}}};r(301);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var O={components:{mapView:map,filterBox:Object(f.a)(w,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter-box absolute\n    md:left-0 md:top-0 md:w-3/6 md:p-2\n    inset-x-0 bottom-0"},[r("div",{staticClass:"filter-box-content flex flex-col"},[r("div",{staticClass:"txt-search order-2 md:order-1 z-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"w-full px-2 py-1 border-solid border\n          md:rounded-full md:shadow-lg",attrs:{type:"text",placeholder:"搜尋"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),t.list&&t.list.length>0?r("div",{staticClass:"result-content bg-white order-1 md:order-2\n      md:rounded-t-none md:rounded md:-mt-4 md:pt-4"},[r("div",{staticClass:"result-list p-1 max-h-screen-1/2 overflow-auto"},t._l(t.filteredList,function(e,n){return r("div",{key:e.id,staticClass:"result-item p-2 cursor-pointer",class:{"border-t":0!==n,"shadow-inner":t.selectedShopId===e.id},on:{click:function(r){return t.onClickShop(e)}}},[r("div",{staticClass:"font-semibold text-gray-800"},[t._v(t._s(e.name))]),t._v(" "),e.name!==e.name_en?r("div",{staticClass:"text-xs text-gray-600"},[t._v(t._s(e.name_en))]):t._e(),t._v(" "),(e.address||"").length>0?r("div",{staticClass:"text-xs text-gray-600"},[r("i",{staticClass:"fas fa-map-marker-alt"}),t._v("\n            "+t._s(e.address)+"\n          ")]):t._e(),t._v(" "),(e.phoneNo||"").length>0?r("div",{staticClass:"text-xs text-gray-600"},[r("i",{staticClass:"fas fa-phone"}),t._v("\n            "+t._s(e.phoneNo)+"\n            ")]):t._e()])}),0)]):t._e()])])},[],!1,null,"027da175",null).exports},data:function(){return{local:{mapCenter:null}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.b)("app",{geoLocation:"geoLocation"}),{},Object(o.b)("shop",{hasFilter:"hasFilter",filteredList:"filteredList"}),{markerList:function(){return this.hasFilter?_.map(this.filteredList,function(data){return{lat:data.latitude,long:data.longitude,data:data}}):null}}),watch:{geoLocation:function(t,e){e||this.moveToCurrentLocation()}},mounted:function(){this.$store.dispatch("app/init"),this.geoLocation&&this.moveToCurrentLocation()},methods:{moveToCurrentLocation:function(){this.$set(this.local,"mapCenter",{lat:_.get(this.geoLocation,"coords.latitude",0),long:_.get(this.geoLocation,"coords.longitude",0)})},onUpdateRect:function(t){this.$store.dispatch("shop/applyFilter",{rect:t})},onClickMarker:function(data){var t=_.uniq(_.map(data,"latitude")),e=_.uniq(_.map(data,"longitude")),r=_.size(data);this.$set(this.local,"mapCenter",{lat:_.get(data,"[0].latitude",0),long:_.get(data,"[0].longitude",0),zoomD:r>1&&(_.size(t)>1||_.size(e)>1)?1:0})},onClickShop:function(t){this.$set(this.local,"mapCenter",{lat:_.get(t,"latitude",0),long:_.get(t,"longitude",0)})}}},L=(r(303),Object(f.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-page w-full h-full"},[e("no-ssr",[e("map-view",{ref:"map",staticClass:"w-full h-1/2 md:h-full",attrs:{center:this.local.mapCenter,markerList:this.markerList},on:{updateRect:this.onUpdateRect,clickMarker:this.onClickMarker}}),this._v(" "),e("div",{staticClass:"h-1/2 md:h-auto shadow-inner md:shadow-none"},[e("filter-box",{attrs:{list:this.filteredList},on:{clickShop:this.onClickShop}})],1)],1)],1)},[],!1,null,"72f16506",null));e.default=L.exports}}]);