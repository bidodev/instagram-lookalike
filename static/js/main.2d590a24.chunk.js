(this["webpackJsonpinstagram-copy"]=this["webpackJsonpinstagram-copy"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){},,function(e){e.exports=JSON.parse('[{"id":1,"name":"Hadi","likes":"299.9k","comments":"13k","url":"./img/doggo"},{"id":2,"name":"Ali","likes":"200.9k","comments":"11.2k","url":"./img/doggo"},{"id":3,"name":"Olga","likes":"309.9k","comments":"5k","url":"./img/doggo"},{"id":4,"name":"Hadi","likes":"209.9k","comments":"12k","url":"./img/doggo"},{"id":5,"name":"Ali","likes":"125.9k","comments":"12k","url":"./img/doggo"},{"id":6,"name":"Olga","likes":"175.9k","comments":"5.3k","url":"./img/doggo"},{"id":7,"name":"Olga","likes":"275.9k","comments":"7k","url":"./img/doggo"},{"id":8,"name":"Olga","likes":"205.9k","comments":"15.2k","url":"./img/doggo"},{"id":9,"name":"Olga","likes":"86.9k","comments":"214","url":"./img/doggo"}]')},function(e,a,t){e.exports=t(30)},,,,,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),i=(t(11),t(5)),m=t(6),s=t(8),o=t(7),u=t(4),d=t(3);u.b.add(d.d,d.e,d.b,d.c,d.a);t(22);var g=function(e){var a=e.placeholder,t=e.handleChange;return l.a.createElement("input",{className:"header-search",type:"search",placeholder:a,onChange:t})},E=t(2),v=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:"./img/instagram.png",alt:"logo"})),l.a.createElement(g,{placeholder:"\ud83d\udd0d Search"}),l.a.createElement("ul",{className:"header-icons"},l.a.createElement("div",null,l.a.createElement(E.a,{icon:"home",className:"icon"}),l.a.createElement(E.a,{icon:"paper-plane",className:"icon"}),l.a.createElement(E.a,{icon:"compass",className:"icon"}),l.a.createElement(E.a,{icon:"heart",className:"icon"}),l.a.createElement("img",{src:"./img/avatar.jpg",alt:"avatar-nav"}))))},p=(t(25),function(e){return l.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}),b=function(){return l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"profile-img"},l.a.createElement("img",{src:"./img/profile.jpg",alt:"avatar-nav"})),l.a.createElement("aside",{className:"profile-aside"},l.a.createElement("div",{className:"profile-aside-buttons"},l.a.createElement("h2",null,"pubitypets"),l.a.createElement("div",null,"b"),l.a.createElement("div",null,"c"),l.a.createElement("div",null,"d"),l.a.createElement("div",null,"e")),l.a.createElement("div",{className:"profile-aside-stats"},l.a.createElement("div",null,"a"),l.a.createElement("div",null,"b"),l.a.createElement("div",null,"c")),l.a.createElement("div",{className:"profile-aside-description"},l.a.createElement("h3",null,"Pubity Pets"),l.a.createElement("li",null,l.a.createElement(p,{symbol:"\ud83d\udc36",label:"beer"}),"Posting the best Animal videos on instagram ",l.a.createElement(p,{symbol:"\ud83d\ude4a",label:"monkey"})),l.a.createElement("li",null,l.a.createElement(p,{symbol:"\ud83d\udc31",label:"tiger"}),"Funny videos"),l.a.createElement("li",null,l.a.createElement(p,{symbol:"\ud83d\udce7",label:"contact"}),"contact - pubitypets@gmail.com"),l.a.createElement("li",null,l.a.createElement(p,{symbol:"\u2b07",label:"arrow-down"})," Submit your videos below ",l.a.createElement(p,{symbol:"\u2b07",label:"arrow-down"})),l.a.createElement("li",null,l.a.createElement("a",{href:"pubityvideos.com"},"pubityvideos.com")," ")),l.a.createElement("div",{className:"profile-aside-followed"},"Followed by pubity and stacyseven")))},f=(t(26),t(27),function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement("li",{className:"active"},l.a.createElement("i",{className:"fas fa-stream"}),"Posts"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-video"}),"Igtv"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-id-card-alt"}),"Tagged")))}),h=(t(28),t(29),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleMouseHover=function(){e.setState(e.toggleHoverState)},e.toggleHoverState=function(e){return{isHovering:!e.isHovering}},e.state={isHovering:!1},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.card,a=e.url,t=e.id,n=e.name,c=e.likes,r=e.comments;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},l.a.createElement("img",{src:"".concat(a,"-").concat(t,".png"),alt:n}),this.state.isHovering&&l.a.createElement("div",null,l.a.createElement(E.a,{icon:"heart",className:"icon"}),c," ",l.a.createElement(E.a,{icon:"comments",className:"icon"}),r)))}}]),t}(n.Component)),k=function(e){return l.a.createElement("div",{className:"card-list"},e.cards.map((function(e){return l.a.createElement(h,{key:e.id,card:e})})))},N=function(e){return l.a.createElement("div",{className:"inner-content"},l.a.createElement(f,null),l.a.createElement(k,{cards:e.data}))},y=t(13),O=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={data:y},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement("div",{className:"main"},l.a.createElement(b,null),l.a.createElement(N,{data:this.state.data})))}}]),t}(n.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.2d590a24.chunk.js.map