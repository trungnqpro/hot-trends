(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(t,e,r){var content=r(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("1dc07fd6",content,!0,{sourceMap:!1})},200:function(t,e,r){"use strict";var n=r(199);r.n(n).a},201:function(t,e,r){(t.exports=r(62)(!1)).push([t.i,".spinner{transition:opacity .15s ease;-webkit-animation:rotator 1.4s linear infinite;animation:rotator 1.4s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.spinner.show{-webkit-animation-play-state:running;animation-play-state:running}.spinner.v-enter,.spinner.v-leave-active{opacity:0}.spinner.v-enter-active,.spinner.v-leave{opacity:1}.spinner .path{stroke:#f60;stroke-dasharray:126;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:dash 1.4s ease-in-out infinite;animation:dash 1.4s ease-in-out infinite}@-webkit-keyframes rotator{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}@-webkit-keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}",""])},202:function(t,e,r){"use strict";var n={name:"Spinner",props:{show:{type:Boolean,required:!0}}},o=(r(200),r(22)),l=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",[e("svg",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"spinner",class:{show:this.show},attrs:{width:"44px",height:"44px",viewBox:"0 0 44 44"}},[e("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},[],!1,null,null,null).exports,d={functional:!0,props:{loading:{type:Boolean,default:!1}},render:function(t,e){var r=e.props,n=e.children;return r.loading?t("div",{style:{"text-align":"center"}},[t(l,{props:{show:!0}})]):n}},c=Object(o.a)(d,void 0,void 0,!1,null,null,null);e.a=c.exports},205:function(t,e,r){var content=r(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("4f58d648",content,!0,{sourceMap:!1})},213:function(t,e,r){"use strict";var n=r(205);r.n(n).a},214:function(t,e,r){(t.exports=r(62)(!1)).push([t.i,".user-view{background-color:#fff;box-sizing:border-box;padding:2em 3em}.user-view h1{margin:0;font-size:1.5em}.user-view .meta{list-style-type:none;padding:0}.user-view .label{display:inline-block;min-width:4em}.user-view .about{margin:1em 0}.user-view .links a{text-decoration:underline}",""])},223:function(t,e,r){"use strict";r.r(e);var n={name:"UserView",components:{LazyWrapper:r(202).a},computed:{user:function(){return this.$store.state.users[this.$route.params.id]}},head:function(){return this.user?this.user.id:"User not found"},fetch:function(t){var e=t.store,r=t.route.params.id;return e.dispatch("FETCH_USER",{id:r})}},o=(r(213),r(22)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-view view"},[t.user?[r("h1",[t._v("User : "+t._s(t.user.id))]),t._v(" "),r("lazy-wrapper",{attrs:{loading:t.user.loading}},[r("ul",{staticClass:"meta"},[r("li",[r("span",{staticClass:"label"},[t._v("Created:")]),t._v(" "+t._s(t._f("timeAgo")(t.user.created_time))+" ago\n        ")]),t._v(" "),r("li",[r("span",{staticClass:"label"},[t._v("Karma:")]),t._v(" "+t._s(t.user.karma||"-")+"\n        ")]),t._v(" "),t.user.about?r("li",{staticClass:"about",domProps:{textContent:t._s(t.user.about)}}):t._e()])]),t._v(" "),r("p",{staticClass:"links"},[r("a",{attrs:{href:"https://news.ycombinator.com/submitted?id="+t.user.id}},[t._v("submissions")]),t._v(" |\n      "),r("a",{attrs:{href:"https://news.ycombinator.com/threads?id="+t.user.id}},[t._v("comments")])])]:[r("h1",[t._v("User not found.")])]],2)},[],!1,null,null,null);e.default=component.exports}}]);