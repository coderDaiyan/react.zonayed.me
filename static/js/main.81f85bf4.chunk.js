(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(38),c=a.n(l),o=a(14),i=a(4),s=a(40),u=a.n(s),m=a(8),d=a(9),p=a(12),f=a(11),E=a(13),h=a(119),v=a(120),g=a(23),b=a.n(g),y=new(function(){function e(){Object(m.a)(this,e),this.readData=JSON.parse(localStorage.getItem("reactZunoPostsRead")),this.favData=JSON.parse(localStorage.getItem("reactZunoPosts"))}return Object(d.a)(e,[{key:"setFavoriteItem",value:function(e){var t=e.id,a=e.title;console.log(t,a);var n={id:t,title:a};this.favData?this.favData.length>=3?(this.favData.shift(),this.favData.push(n)):this.favData.push(n):this.favData=[n];var r=JSON.stringify(this.favData);return localStorage.setItem("reactZunoPosts",r),this.favData}},{key:"getFavItems",get:function(){return this.favData?this.favData:[]}}]),e}()),S=a(41),O=a.n(S),N=function(){return r.a.createElement("a",{href:"https://react.zonayed.me",className:"brand"},r.a.createElement("img",{className:"logo",alt:"\u09b0\u09bf\u0985\u09cd\u09af\u09be\u0995\u09cd\u099f \u09ac\u09be\u0982\u09b2\u09be",src:O.a}),r.a.createElement("span",null,"\u09b0\u09bf\u0985\u09cd\u09af\u09be\u0995\u09cd\u099f \u09ac\u09be\u0982\u09b2\u09be"))},_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.handleChange=function(e){var t=e.target.value,n=a.props,r=n.basic,l=n.searchVisibility,c=n.getSearchResult;a.setState({term:t}),c(r,a.state.term),l(t.length)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.term;return r.a.createElement("div",{className:"search-area"},r.a.createElement("input",{value:e,onChange:this.handleChange,placeholder:"\u0995\u09bf \u0996\u09c1\u0981\u099c\u09a4\u09c7 \u099a\u09be\u099a\u09cd\u099b\u09c7\u09a8?"}),r.a.createElement("span",null,"\u09ac\u09be\u0982\u09b2\u09be\u09df \u09b8\u09be\u09b0\u09cd\u099a \u0995\u09b0\u09c1\u09a8"))}}]),t}(n.Component),P=Object(i.b)(function(e){return{basic:e.basicReducer}},{searchVisibility:function(e){return{type:"SHOW_SEARCH_RESULT",visible:e}},getSearchResult:function(e,t){return{type:"GET_SEARCH_RESULT",term:t,data:e}}})(_),w=function(){return r.a.createElement("section",{className:"intro-area"},r.a.createElement("div",{className:"area"},r.a.createElement(N,null),r.a.createElement("div",{className:"intro"},r.a.createElement("h2",null,"\u09b0\u09bf\u0985\u09cd\u09af\u09be\u0995\u09cd\u099f \u099c\u09c7\u098f\u09b8 \u09b6\u09bf\u0996\u09c1\u09a8"),r.a.createElement("p",null,"\u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a8 \u09ac\u09be\u0982\u09b2\u09be\u09df \u099c\u09c1\u09a8\u09be\u09df\u09c7\u09a6 \u0986\u09b9\u09ae\u09c7\u09a6 \u098f\u09b0 \u09b8\u09be\u09a5\u09c7"),r.a.createElement(P,null))))},R=a(118),T=function(e){return e.split("\u0983")[1].trim()},j=a(16),k=a.n(j),A=function(e){var t=e.id,a=e.title;return r.a.createElement("li",null,r.a.createElement("h4",null,r.a.createElement(R.a,{to:"/post/".concat(t)},T(a))),r.a.createElement("img",{alt:"\u09aa\u099b\u09a8\u09cd\u09a6",src:k.a}))},D=a(42),C=a.n(D),I=function(e){var t=e.id,a=e.title;return r.a.createElement("li",null,r.a.createElement("h4",null,r.a.createElement(R.a,{to:"/post/".concat(t)},T(a.rendered))),r.a.createElement("img",{alt:"\u0996\u09cb\u0981\u099c\u09be",src:C.a}))},z=Object(i.b)(function(e){return{searchVisibility:e.searchVisibilityReducer,favorite:e.favoriteReducer,search:e.searchReducer}})(function(e){var t=e.searchVisibility,a=e.search,n=e.favorite;return r.a.createElement("section",{className:"search-fav-area"},r.a.createElement("div",{className:"area"},r.a.createElement("ul",null,t?a&&(a.length<=0?r.a.createElement("div",{className:"no-result"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/zonayedpca/react.zonayed.me",className:"btn-suggest"},"\u09a8\u09a4\u09c1\u09a8 \u099f\u09aa\u09bf\u0995 \u09b8\u09be\u099c\u09c7\u09b8\u09cd\u099f \u0995\u09b0\u09c1\u09a8")):a.map(function(e){var t=e.id,a=e.title;return r.a.createElement(I,{key:t,id:t,title:a})})):n.length>0?n.map(function(e){var t=e.id,a=e.title;return r.a.createElement(A,{key:t,id:t,title:a})}):r.a.createElement("p",{className:"no-fav-post"},"\u0986\u09aa\u09a8\u09bf \u099a\u09be\u0987\u09b2\u09c7 \u098f\u0996\u09be\u09a8\u09c7 \u0986\u09aa\u09a8\u09be\u09b0 \u09aa\u09cd\u09b0\u09bf\u09df \u09aa\u09cb\u09b8\u09cd\u099f \u09af\u09c1\u0995\u09cd\u09a4 \u0995\u09b0\u09a4\u09c7 \u09aa\u09be\u09b0\u09ac\u09c7\u09a8, \u0985\u09a5\u09ac\u09be \u0995\u09cb\u09a8\u09cb \u099f\u09aa\u09bf\u0995 \u0996\u09c1\u0981\u099c\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u09a8"))))}),F=a(43),J=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement(F.BarLoader,{sizeUnit:"px",size:150,color:"#333"}))},x=a(44),V=a.n(x),Z=function(e){var t=e.id,a=e.type,n=e.title.rendered;return r.a.createElement("li",null,r.a.createElement("h4",null,r.a.createElement(R.a,{to:"/".concat(a,"/").concat(t)},T(n))),r.a.createElement("img",{alt:"next",src:V.a}))},G=a(45),U=a.n(G),L=Object(i.b)(function(e){return{basic:e.basicReducer}})(function(e){var t=e.basic;return t?r.a.createElement("div",{className:"series basic"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h3",null,"\u09ac\u09cd\u09af\u09be\u09b8\u09bf\u0995"),r.a.createElement("span",null,r.a.createElement("img",{alt:"down",src:U.a}))),r.a.createElement("ul",{className:"list basic-list"},t.map(function(e){var t=e.id,a=e.title;return r.a.createElement(Z,{key:t,id:t,type:"basic",title:a})}))):r.a.createElement(J,null)}),B=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getBasicPosts)()}},{key:"render",value:function(){return r.a.createElement("section",{className:"series-area"},r.a.createElement("div",{className:"area"},r.a.createElement(L,null)))}}]),t}(n.Component),H=Object(i.b)(null,{getBasicPosts:function(){return{type:"GET_BASIC_POSTS",payload:b()("https://with.zonayed.me/wp-json/wp/v2/posts?tags=172&order=asc&per_page=30&fields=id,title")}}})(B),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(z,null),r.a.createElement(H,null))},W=function(){return r.a.createElement("section",{className:"navbar-post-area"},r.a.createElement("div",null,r.a.createElement(N,null)),r.a.createElement("div",{className:"feedback"},r.a.createElement("a",{className:"btn-problem",href:"https://github.com/zonayedpca/react.zonayed.me/issues",target:"_blank",rel:"noopener noreferrer"},"\u09b8\u09ae\u09b8\u09cd\u09af\u09be")))},$=a(24),q=a.n($),K=Object(i.b)(function(e){return{read:e.readReducer,favorite:e.favoriteReducer}},{setReadPost:function(e){var t,a=JSON.parse(localStorage.getItem("reactZunoPostsRead"));return a?a.push(e):a=[e],t=a,a=JSON.stringify(a),localStorage.setItem("reactZunoPostsRead",a),{type:"SET_READ_POST",payload:t}},unsetReadPost:function(e){var t,a=JSON.parse(localStorage.getItem("reactZunoPostsRead"));return a.push(e),t=a=a.filter(function(t){return t!==e}),a=JSON.stringify(a),localStorage.setItem("reactZunoPostsRead",a),{type:"UNSET_READ_POST",payload:t}},setFavoritePost:function(e){var t={id:e.id,title:e.title},a=JSON.parse(localStorage.getItem("reactZunoPosts"));a?a.length>=3?(a.shift(),a.push(t)):a.push(t):a=[t];var n=JSON.stringify(a);return localStorage.setItem("reactZunoPosts",n),{type:"SET_FAV_POST",payload:a}},unsetFavoritePost:function(e){var t=JSON.parse(localStorage.getItem("reactZunoPosts"));t=t.filter(function(t){return t.id!==e});var a=JSON.stringify(t);return localStorage.setItem("reactZunoPosts",a),{type:"UNSET_FAV_POST",payload:t}}})(function(e){var t=e.id,a=e.title,n=e.favorite,l=e.read,c=e.setReadPost,o=e.unsetReadPost,i=e.setFavoritePost,s=e.unsetFavoritePost;return r.a.createElement("section",{className:"action-button-area"},l.some(function(e){return e===t})?r.a.createElement("div",{className:"read on-read",onClick:function(){return o(t)}},r.a.createElement("img",{alt:"read?",src:q.a}),r.a.createElement("span",null,"\u09aa\u09dc\u09be \u09b9\u09df\u09a8\u09bf")):r.a.createElement("div",{className:"read",onClick:function(){return c(t)}},r.a.createElement("img",{alt:"read?",src:q.a}),r.a.createElement("span",null,"\u09aa\u09dc\u09be \u09b9\u09df\u09c7 \u0997\u09c7\u099b\u09c7")),n.some(function(e){return t===e.id})?r.a.createElement("div",{className:"favorite on-favorite",onClick:function(){return s(t)}},r.a.createElement("img",{className:"in-fav",alt:"favorite",src:k.a}),r.a.createElement("span",null,"\u09b8\u09b0\u09bf\u09df\u09c7 \u09ab\u09c7\u09b2\u09c1\u09a8")):r.a.createElement("div",{className:"favorite",onClick:function(){return i({id:t,title:a})}},r.a.createElement("img",{className:"in-fav",alt:"favorite",src:k.a}),r.a.createElement("span",null,"\u09ad\u09be\u09b2\u09cb \u09b2\u09c7\u0997\u09c7\u099b\u09c7")))}),Q=Object(i.b)(function(e){return{post:e.postReducer}})(function(e){var t,a=e.post;return a?r.a.createElement("section",{className:"content-area"},r.a.createElement("div",{className:"title"},a.title.rendered),r.a.createElement("div",{className:"content"},r.a.createElement("div",{dangerouslySetInnerHTML:(t=a.content.rendered,{__html:t})}),r.a.createElement(K,{id:a.id,title:a.title.rendered}))):r.a.createElement(J,null)}),X=function(){return r.a.createElement("section",{className:"comment-area"})},Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).setTitle=function(){a.props.post&&(document.title="".concat(a.props.post.title.rendered," - \u09b0\u09bf\u0985\u09cd\u09af\u09be\u0995\u09cd\u099f \u099c\u09c7\u098f\u09b8 \u09b6\u09bf\u0996\u09c1\u09a8"))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=this.props.match.params.id;this.props.getPost(e)}},{key:"render",value:function(){return this.setTitle(),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(Q,null),r.a.createElement(X,null))}}]),t}(n.Component),ee=Object(i.b)(function(e){return{post:e.postReducer}},{getPost:function(e){return{type:"GET_POST",payload:b()("https://with.zonayed.me/wp-json/wp/v2/posts/".concat(e))}}})(Y),te=function(){return r.a.createElement("footer",{className:"footer-area"},r.a.createElement("div",{className:"footer area"},r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"\u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7\u0983"),r.a.createElement("li",null,r.a.createElement("p",null,"\u09aa\u09cd\u09b0\u09cb\u099c\u09c7\u0995\u09cd\u099f\u099f\u09bf \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09b8\u09cb\u09b0\u09cd\u09b8 \u0995\u09cb\u09a1\u09b8\u09b9 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/zonayedpca/react.zonayed.me"},"\u0997\u09bf\u099f\u09b9\u09be\u09ac\u09c7")," \u09b0\u09df\u09c7\u099b\u09c7\u0964 \u0986\u09aa\u09a8\u09be\u09b0 \u09ad\u09be\u09b2\u09cb \u09b2\u09c7\u0997\u09c7 \u09a5\u09be\u0995\u09b2\u09c7 \u09b8\u09cd\u099f\u09be\u09b0 \u09a6\u09bf\u09df\u09c7 \u0986\u09b8\u09ac\u09c7\u09a8\u0964 \u0986\u09aa\u09a8\u09be\u09b0 \u09aa\u09b0\u09be\u09ae\u09b0\u09cd\u09b6, \u09ae\u09a8\u09cd\u09a4\u09ac\u09cd\u09af \u098f\u09ac\u0982 \u09ad\u09c1\u09b2\u09a4\u09cd\u09b0\u09c1\u099f\u09bf \u0997\u09bf\u099f\u09b9\u09be\u09ac\u09c7 \u0987\u09b8\u09cd\u09af\u09c1 \u0995\u09b0\u09c7 \u09a6\u09c7\u0993\u09df\u09be\u09b0 \u099c\u09a8\u09cd\u09af\u09c7 \u0985\u09a8\u09c1\u09b0\u09cb\u09a7 \u09a5\u09be\u0995\u09b2\u09cb"))),r.a.createElement("div",{className:"resource"},r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"\u0986\u09aa\u09a8\u09be\u09b0 \u099c\u09a8\u09cd\u09af\u09c7\u0983"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://js.zonayed.me"},"\u099c\u09be\u09ad\u09be\u09b8\u09cd\u0995\u09cd\u09b0\u09bf\u09aa\u09cd\u099f \u09b6\u09bf\u0996\u09c1\u09a8")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@zonayedpca"},"\u0986\u09ae\u09bf \u09ae\u09bf\u09a1\u09bf\u09df\u09be\u09ae\u09c7")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://with.zonayed.me/bn"},"\u0986\u09ae\u09be\u09b0 \u09ac\u09cd\u09b2\u0997"))),r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"\u09b0\u09bf\u09b8\u09cb\u09b0\u09cd\u09b8\u0983"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://js.zonayed.me"},"\u0985\u09ab\u09bf\u09b6\u09bf\u09df\u09be\u09b2 \u09a1\u0995\u09c1\u09ae\u09c7\u09a8\u09cd\u099f\u09c7\u09b6\u09a8")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@zonayedpca"},"\u0987\u0989\u09a1\u09c7\u09ae\u09bf \u0995\u09cb\u09b0\u09cd\u09b8")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://with.zonayed.me/bn"},"\u09b0\u09bf\u09a1\u09be\u0995\u09cd\u09b8 \u09a1\u0995\u09c1\u09ae\u09c7\u09a8\u09cd\u099f\u09c7\u09b6\u09a8")))),r.a.createElement("div",{className:"credit"},r.a.createElement("p",null,r.a.createElement("span",{className:"love"},"\u2764")," \u098f\u09b0 \u09b8\u09be\u09a5\u09c7 \u09a1\u09c7\u09ad\u09c7\u09b2\u09aa \u0995\u09b0\u09c7\u099b\u09c7 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.zonayed.me"},"\u099c\u09c1\u09a8\u09be\u09df\u09c7\u09a6 \u0986\u09b9\u09ae\u09c7\u09a6")))))},ae=(a(112),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getFavoritePosts(),this.props.getReadPost()}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(v.a,{exact:!0,path:"/:type/:id",render:function(e){return r.a.createElement(ee,e)}}),r.a.createElement(te,null)))}}]),t}(n.Component)),ne=Object(i.b)(null,{getReadPost:function(){var e=JSON.parse(localStorage.getItem("reactZunoPostsRead"));return{type:"GET_READ_POST",payload:e||[]}},getFavoritePosts:function(){return{type:"GET_FAV_POSTS",payload:y.getFavItems}}})(ae),re=Object(o.c)({basicReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BASIC_POSTS":return t.payload.data;default:return e}},searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCH_RESULT":return t.data?t.data.filter(function(e,a){return e.title.rendered.toLowerCase().includes(t.term.trim().toLowerCase())}).slice(0,3):e;default:return e}},favoriteReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FAV_POSTS":case"SET_FAV_POST":case"UNSET_FAV_POST":return t.payload;default:return e}},readReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_READ_POST":case"SET_READ_POST":case"UNSET_READ_POST":return t.payload;default:return e}},searchVisibilityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_SEARCH_RESULT":return t.visible;default:return e}},postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POST":return t.payload.data;default:return e}}});a(115),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=Object(o.d)(re,Object(o.a)(u.a));c.a.render(r.a.createElement(i.a,{store:le},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},16:function(e,t,a){e.exports=a.p+"static/media/heart.f80307c5.svg"},24:function(e,t,a){e.exports=a.p+"static/media/reading.51e5d088.svg"},41:function(e,t,a){e.exports=a.p+"static/media/logo.46a04b1b.png"},42:function(e,t,a){e.exports=a.p+"static/media/search.79a51ec3.svg"},44:function(e,t,a){e.exports=a.p+"static/media/arrownext.357edffb.svg"},45:function(e,t,a){e.exports=a.p+"static/media/arrowdown.5b0f5fa3.svg"},47:function(e,t,a){e.exports=a(117)}},[[47,2,1]]]);
//# sourceMappingURL=main.81f85bf4.chunk.js.map