(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df495"],{"88ed":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticStyle:{padding:"10px"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"d-flex flex-column align-items-center text-center"},[r("el-image",{staticStyle:{width:"200px",height:"200px"},attrs:{src:e.userProfile().avatar_url,alt:"Admin"}}),r("div",{staticClass:"mt-3"},[r("h4",[e._v(e._s(e.userProfile().name))]),r("div",[r("b",[e._v(e._s(e.userProfile().followers))]),e._v(" Followers ")]),r("div",[r("b",[e._v(e._s(e.userProfile().public_repos))]),e._v(" Repos ")]),r("div",[e._v(" Created at "),r("b",[e._v(e._s(e._f("moment")(e.userProfile().created_at)))])])])],1)])])])},i=[],a=r("5530"),n=r("2b0e"),l=r("2f62"),u=r("c1df"),c=r.n(u),d=n["default"].extend({computed:Object(a["a"])(Object(a["a"])({},Object(l["b"])("user",["getUserById"])),{},{userId:function(){var e=this;return function(){return e.$route.params.id}},userProfile:function(){var e=this;return function(){return e.getUserById(e.userId())}}}),filters:{moment:function(e){return c()(e).format("YYYY-MM-DD")}}}),o=d,f=r("2877"),v=Object(f["a"])(o,s,i,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0df495.d12734dd.js.map