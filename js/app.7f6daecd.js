(function(e){function t(t){for(var n,u,s=t[0],i=t[1],c=t[2],l=0,h=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&h.push(a[u][0]),a[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b307d":"382d23cc","chunk-4839aa46":"52a62699","chunk-2d0df495":"36cfb461","chunk-6bf3b05e":"41cd0a04"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(e);var c=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/applyid/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0c1e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-container",[r("el-header",[r("el-col",{attrs:{span:6,offset:4}},[r("h3",[e._v("ApplyId")])]),r("el-dropdown",{staticStyle:{float:"right","margin-top":"15px"}},[r("i",{staticClass:"el-icon-user",staticStyle:{"font-size":"2rem"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.logout.apply(null,arguments)}}},[e._v("Log out")])],1)],1)],1),r("el-row",[r("el-col",{attrs:{offset:4}},[r("el-row",[r("el-col",{attrs:{span:4}},[r("el-menu",{staticClass:"el-menu-vertical-demo"},[r("el-menu-item",[r("router-link",{attrs:{to:"/users"}},[e._v("Users")])],1)],1)],1),r("el-col",{attrs:{span:20}},[r("router-view")],1)],1)],1)],1)],1)],1)},a=[],o={methods:{logout:function(){this.$router.push({name:"home"})}}},u=o,s=r("2877"),i=Object(s["a"])(u,n,a,!1,null,null,null);t["default"]=i.exports},1:function(e,t){},3898:function(e,t,r){var n={"./AsyncButton.vue":"f89b","./HelloWorld.vue":"fdab","./TestComponent.vue":"536b","./layout/dashBoardLayout.vue":"0c1e","./layout/defaultLayout.vue":"bbb7"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="3898"},"39fa":function(e,t,r){"use strict";r("5a22")},"4c02":function(e,t,r){"use strict";r("f01a")},"536b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"test"}},[r("div",{staticClass:"nav-background"},[r("h3",[e._v("Let us test your arithmetic.")]),r("p",[e._v("What is the sum of the two numbers?")]),r("div",{staticClass:"inline"},[r("p",[e._v(e._s(e.x1)+" + "+e._s(e.x2)+" =")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.guess,expression:"guess"}],domProps:{value:e.guess},on:{input:function(t){t.target.composing||(e.guess=t.target.value)}}}),e._v(" "),r("button",{attrs:{name:"check answer"},on:{click:e.check}},[e._v("Check Answer")])]),r("button",{on:{click:e.refresh}},[e._v("Refresh")]),r("router-link",{attrs:{to:"/login"}},[e._v("Go to Foo")]),r("p",[e._v(e._s(e.message))])],1)])},a=[],o=r("1da1"),u=(r("96cf"),{name:"TestComponent",created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("a/getUsers");case 2:return t.next=4,e.$store.dispatch("a/getUsers2");case 4:return t.next=6,e.$store.commit("a/removeUser",{user:{id:1}});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{x1:Math.ceil(100*Math.random()),x2:Math.ceil(100*Math.random()),guess:"",message:""}},methods:{check:function(){this.x1+this.x2===parseInt(this.guess)?this.message="SUCCESS!":this.message="TRY AGAIN"},refresh:function(){this.x1=Math.ceil(100*Math.random()),this.x2=Math.ceil(100*Math.random())}}}),s=u,i=(r("39fa"),r("2877")),c=Object(i["a"])(s,n,a,!1,null,null,null);t["default"]=c.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("2f62"),o=r("1da1"),u=r("d4ec"),s=r("bee2"),i=(r("96cf"),r("d81d"),r("d3b7"),r("3ca3"),r("ddb0"),function(){function e(t,r){Object(u["a"])(this,e),this.axios=t,this.octokit=r}return Object(s["a"])(e,[{key:"searchUsersByName",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.axios.withAuth().get("https://api.github.com/search/users?q=".concat(t,"+in:name"));case 2:return r=e.sent,n=r.data.items,a=n.map((function(e){return u.getByName(e.login)})),e.next=7,Promise.all(a);case 7:return o=e.sent,e.abrupt("return",o.map((function(e){return e.data})));case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getByName",value:function(e){return this.axios.withAuth().get("https://api.github.com/users/".concat(e))}}]),e}()),c=function(e,t){return{githubService:new i(e,t)}},l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},f=[],h={name:"App"},p=h,d=(r("5c0b"),r("2877")),v=Object(d["a"])(p,l,f,!1,null,null,null),m=v.exports,b=r("8c4f"),g=new b["a"]({mode:"history",base:"/applyid/",routes:[{path:"",name:"index",component:function(){return Promise.resolve().then(r.bind(null,"bbb7"))},redirect:{name:"home"}}]}),_=g,w=(r("159b"),r("b0c0"),r("07ac"),{namespaced:!0,state:function(){return{users:{},posts:{}}},mutations:{saveUsers:function(e,t){var r=t.users;r.forEach((function(t){n["default"].set(e.users,t.id,t)}))},removeUser:function(e,t){var r=t.user;n["default"].delete(e.users,r.id)}},actions:{getData:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},searchUsersByName:function(e,t){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,o=t.name,n.next=4,r.services.githubService.searchUsersByName(o);case 4:return u=n.sent,a("saveUsers",{users:u}),n.abrupt("return",u);case 7:case"end":return n.stop()}}),n)})))()},getUserByName:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.services.userService.getUsers();case 3:a=r.sent,o=a.data.items,n("saveUsers",{users:o});case 6:case"end":return r.stop()}}),r)})))()}},getters:{getUsers:function(e){return function(){return Object.values(e.users)}},getUserById:function(e){return function(t){return e.users[t]}}}}),k={modules:{user:w}},x=r("5c96"),y=r.n(x),j=(r("0fae"),r("3835")),O=(r("ac1f"),r("5319"),r("1276"),function(){var e=r("3898");e.keys().forEach((function(t){var r=e(t),a=t.split("/").pop().replace(/\.\w+$/,"").replace(/(^[A-Z])/,(function(e){var t=Object(j["a"])(e,1),r=t[0];return r.toLowerCase()})).replace(/([A-Z])/g,(function(e){var t=Object(j["a"])(e,1),r=t[0];return"-".concat(r.toLowerCase())}));n["default"].component(a,r.default||r)}))}),R=function(e){var t=e.router;t.addRoute({path:"",name:"home",component:function(){return Promise.resolve().then(r.bind(null,"bbb7"))},redirect:{name:"home.index"},children:[{path:"",name:"home.index",component:function(){return r.e("chunk-2d0b307d").then(r.bind(null,"2746"))}}]})},U={install:function(e,t){var r=t.store,n=t.router;R({store:r,router:n})}},C=function(e){var t=e.router;t.addRoute({path:"",name:"users",component:function(){return Promise.resolve().then(r.bind(null,"0c1e"))},redirect:{name:"users.index"},children:[{path:"/users",name:"users.index",component:function(){return Promise.all([r.e("chunk-4839aa46"),r.e("chunk-6bf3b05e")]).then(r.bind(null,"d2e2"))}},{path:"/users/:id",name:"users.detail",component:function(){return Promise.all([r.e("chunk-4839aa46"),r.e("chunk-2d0df495")]).then(r.bind(null,"88ed"))}}]})},E={install:function(e,t){var r=t.store,n=t.router;C({store:r,router:n})}},A=r("bc3a"),S=r.n(A),$=function(){function e(){Object(u["a"])(this,e)}return Object(s["a"])(e,[{key:"withAuth",value:function(){var e=S.a.create({headers:{Authorization:"token ghp_".concat("4RTFKRVa86wSxilMUobeU0Ow95Ftyf1nO8kx")}});return e}},{key:"withBasicAuth",value:function(){var e=S.a.create({headers:{Authorization:"Basic ghp_".concat("4RTFKRVa86wSxilMUobeU0Ow95Ftyf1nO8kx")}});return e}},{key:"withoutAuth",value:function(){var e=S.a.create({});return e}}]),e}(),P=r("9355");n["default"].use(y.a),n["default"].use(a["a"]),n["default"].use(b["a"]),O();var M=new a["a"].Store(k),T=new $,L=new P["a"]({auth:"ghp_".concat("4RTFKRVa86wSxilMUobeU0Ow95Ftyf1nO8kx")});M.services=c(T,L),n["default"].use(U,{store:M,router:_}),n["default"].use(E,{store:M,router:_}),n["default"].config.productionTip=!0,new n["default"]({router:_,store:M,render:function(e){return e(m)}}).$mount("#app")},"5a22":function(e,t,r){},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},bbb7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("router-view")],1)},a=[],o=r("2877"),u={},s=Object(o["a"])(u,n,a,!1,null,null,null);t["default"]=s.exports},f01a:function(e,t,r){},f89b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-button",{staticClass:"login-button",attrs:{loading:e.loading,type:"primary",block:""},on:{click:e.buttonAction}},[e._v(e._s(e.buttonLabel))])],1)},a=[],o=r("1da1"),u=(r("96cf"),{name:"TestComponent",props:["label"],computed:{buttonLabel:function(){return this.label?this.label:"OK"}},data:function(){return{loading:!1}},methods:{buttonAction:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,setTimeout(Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$emit("nextAction");case 2:e.loading=!1;case 3:case"end":return t.stop()}}),t)}))),1e3);case 3:case"end":return t.stop()}}),t)})))()}}}),s=u,i=r("2877"),c=Object(i["a"])(s,n,a,!1,null,null,null);t["default"]=c.exports},fdab:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],o=r("1da1"),u=(r("96cf"),{name:"HelloWorld",props:{msg:String},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("a/getData");case 2:case"end":return t.stop()}}),t)})))()}}),s=u,i=(r("4c02"),r("2877")),c=Object(i["a"])(s,n,a,!1,null,"bb3d52ba",null);t["default"]=c.exports}});
//# sourceMappingURL=app.7f6daecd.js.map