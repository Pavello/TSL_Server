(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190f56b6"],{"01a5":function(t,e,n){"use strict";var r=n("ce6c"),i=n.n(r);i.a},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),c=n("9112");for(var a in i){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==o)try{c(s,"forEach",o)}catch(f){s.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),c=i("forEach"),a=o("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"30be":function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"743d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"league"}},[n("div",{staticClass:"container"},[n("LeagueSelectionComponent"),n("div",{attrs:{id:"league-nav"}}),0!=t.getSelectedLeagueId?n("LeagueTableComponent"):t._e()],1)])},i=[];n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"league"}},[n("div",{staticClass:"container"},t._l(t.getActiveLeagues,(function(e){return n("button",{key:e.id,on:{click:function(n){return t.selectAndGetLeagueStats(e.id)}}},[t._v(" Liga "+t._s(e.leagueCategory)+" "+t._s(e.year)+" ")])})),0)])},f=[],l={methods:a(a({},Object(u["b"])(["selectLeague","getLeagueStatsById"])),{},{selectAndGetLeagueStats:function(t){this.selectLeague(t),this.getLeagueStatsById()}}),computed:a({},Object(u["c"])(["getActiveLeagues"]))},d=l,b=(n("01a5"),n("2877")),g=Object(b["a"])(d,s,f,!1,null,"76f8be24",null),p=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"league-navbar"}},[n("div",{attrs:{id:"left-title-section"}}),n("div",{attrs:{id:"right-icon-section"}},[n("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:"calendar-alt",size:"2x"}}),n("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:"calendar-check",size:"2x"}})],1)]),n("div",{attrs:{id:"league-table-container"}},[n("table",[t._m(0),n("tbody",t._l(t.getLeagueStatsSortedByPoints,(function(e,r){return n("tr",{key:e.id},[n("td",[t._v(t._s(r+1))]),n("td",[t._v(t._s(e.player.firstName)+" "+t._s(e.player.lastName))]),n("td",[t._v(t._s(e.playerLeagueMatchesPlayed))]),n("td",[t._v(t._s(e.playerLeagueSetsWon))]),n("td",[t._v(t._s(e.playerLeagueSetsLost))]),n("td",[t._v(t._s(e.playerLeaguePoints))])])})),0)])])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Ranking")]),n("th",[t._v("Gracz")]),n("th",[t._v("Mecze rozegrane")]),n("th",[t._v("Sety wygrane")]),n("th",[t._v("Sety przegrane")]),n("th",[t._v("Punkty")])])])}],h={computed:a({},Object(u["c"])(["getSelectedLeagueId","getLeagueStatsSortedByPoints"]))},m=h,S=(n("8bd6"),Object(b["a"])(m,v,y,!1,null,"01525503",null)),L=S.exports,O={name:"welcomingComponent",components:{LeagueSelectionComponent:p,LeagueTableComponent:L},created:function(){this.getAllLeagues()},methods:a({},Object(u["b"])(["getAllLeagues"])),computed:a({},Object(u["c"])(["getSelectedLeagueId"]))},w=O,j=(n("d846"),Object(b["a"])(w,r,i,!1,null,"2075511c",null));e["default"]=j.exports},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?i.f(t,c,o(0,n)):t[c]=n}},"8bd6":function(t,e,n){"use strict";var r=n("b855"),i=n.n(r);i.a},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),c=n("c430"),a=n("83ab"),u=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),g=n("825a"),p=n("7b0b"),v=n("fc6a"),y=n("c04e"),h=n("5c6c"),m=n("7c73"),S=n("df75"),L=n("241c"),O=n("057f"),w=n("7418"),j=n("06cf"),_=n("9bf2"),P=n("d1e7"),E=n("9112"),T=n("6eeb"),k=n("5692"),C=n("f772"),x=n("d012"),D=n("90e3"),M=n("b622"),N=n("e538"),A=n("746f"),G=n("d44e"),I=n("69f3"),V=n("b727").forEach,z=C("hidden"),B="Symbol",R="prototype",F=M("toPrimitive"),H=I.set,J=I.getterFor(B),$=Object[R],W=i.Symbol,q=o("JSON","stringify"),Q=j.f,K=_.f,U=O.f,X=P.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),nt=k("wks"),rt=i.QObject,it=!rt||!rt[R]||!rt[R].findChild,ot=a&&f((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q($,e);r&&delete $[e],K(t,e,n),r&&t!==$&&K($,e,r)}:K,ct=function(t,e){var n=Y[t]=m(W[R]);return H(n,{type:B,tag:t,description:e}),a||(n.description=e),n},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ut=function(t,e,n){t===$&&ut(Z,e,n),g(t);var r=y(e,!0);return g(n),l(Y,r)?(n.enumerable?(l(t,z)&&t[z][r]&&(t[z][r]=!1),n=m(n,{enumerable:h(0,!1)})):(l(t,z)||K(t,z,h(1,{})),t[z][r]=!0),ot(t,r,n)):K(t,r,n)},st=function(t,e){g(t);var n=v(e),r=S(n).concat(gt(n));return V(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===$&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,z)&&this[z][e])||n)},dt=function(t,e){var n=v(t),r=y(e,!0);if(n!==$||!l(Y,r)||l(Z,r)){var i=Q(n,r);return!i||!l(Y,r)||l(n,z)&&n[z][r]||(i.enumerable=!0),i}},bt=function(t){var e=U(v(t)),n=[];return V(e,(function(t){l(Y,t)||l(x,t)||n.push(t)})),n},gt=function(t){var e=t===$,n=U(e?Z:v(t)),r=[];return V(n,(function(t){!l(Y,t)||e&&!l($,t)||r.push(Y[t])})),r};if(u||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),n=function(t){this===$&&n.call(Z,t),l(this,z)&&l(this[z],e)&&(this[z][e]=!1),ot(this,e,h(1,t))};return a&&it&&ot($,e,{configurable:!0,set:n}),ct(e,t)},T(W[R],"toString",(function(){return J(this).tag})),T(W,"withoutSetter",(function(t){return ct(D(t),t)})),P.f=lt,_.f=ut,j.f=dt,L.f=O.f=bt,w.f=gt,N.f=function(t){return ct(M(t),t)},a&&(K(W[R],"description",{configurable:!0,get:function(){return J(this).description}}),c||T($,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),V(S(nt),(function(t){A(t)})),r({target:B,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:gt}),r({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),q){var pt=!u||f((function(){var t=W();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,q.apply(null,i)}})}W[R][F]||E(W[R],F,W[R].valueOf),G(W,B),x[z]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),c=n("d039"),a=c((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b855:function(t,e,n){},ce6c:function(t,e,n){},d846:function(t,e,n){"use strict";var r=n("30be"),i=n.n(r);i.a},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),c=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),i=a.f,s=o(r),f={},l=0;while(s.length>l)n=i(r,e=s[l++]),void 0!==n&&u(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),c=n("06cf").f,a=n("83ab"),u=i((function(){c(1)})),s=!a||u;r({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-190f56b6.c76ad046.js.map