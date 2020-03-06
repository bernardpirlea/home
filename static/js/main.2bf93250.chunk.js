(this["webpackJsonpbernardpirlea.github.io"]=this["webpackJsonpbernardpirlea.github.io"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),i=a.n(r),c=a(7),o=a(11),s=a(2),m=a(3),u=a(5),d=a(4),h=a(6),b=992,p=768,f=991,g=767,E=320,y=425,j=function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},v=j(),O={width:v.width,height:v.height},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state=O,a.render=function(){var e=a.props,t=e.children,n=e.displayIn,r=a.state,i=r.width,c=r.height,o=a.shouldRender(n,i,c);return l.a.createElement(l.a.Fragment,null,o?t:null)},a.handleResize=function(){var e=j(),t=e.width,n=e.height;a.setState({width:t,height:n})},a.shouldRender=function(e,t,a){return-1!==e.indexOf("Laptop")&&t>=b||(-1!==e.indexOf("Tablet")&&t<=f&&t>=p||(-1!==e.indexOf("Mobile")&&t<=g||(-1!==e.indexOf("MobilePortrait")&&t<=g&&a>=y||!!(-1!==e.indexOf("MobileLandScape")&&t<=g&&a<=E))))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize,!1)}}]),t}(l.a.PureComponent),k=(a(28),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"navbar"},l.a.createElement("div",null,l.a.createElement(c.b,{id:"logo",className:"black-text",to:"/home"},"Bernard")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{className:"link grey-text text-darken-2",to:"/academic"},"Academic")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"link grey-text text-darken-2",to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"link grey-text text-darken-2",to:"/blog"},"Blog"))))}}]),t}(n.Component)),x=a(14),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onButtonClick=function(t){e.setState({show:!e.state.show,style:!e.state.style})},e.state={show:!1,style:!1},e.onButtonClick=e.onButtonClick.bind(Object(x.a)(e)),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.style?I:B;return l.a.createElement("div",{style:e},this.state.show?null:l.a.createElement("div",null,l.a.createElement(c.b,{id:"logo",className:"black-text",to:"/home"},"Bernard")),l.a.createElement("button",{onClick:this.onButtonClick,style:A},l.a.createElement("i",{className:"small material-icons"},"menu")),this.state.show?l.a.createElement("ul",{style:N},l.a.createElement("li",null,l.a.createElement(c.b,{className:"link grey-text text-darken-2",to:"/academic"},"Academic")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"link grey-text text-darken-2",to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"link grey-text text-darken-2",to:"/blog"},"Blog"))):null)}}]),t}(n.Component),N={display:"grid",gridTemplateColumns:"1fr",justifyContent:"center",alignItems:"center",textAlign:"center"},B={display:"grid",gridTemplateColumns:"2fr 1fr"},I={display:"grid",gridTemplateColumns:"1fr"},A={border:"0",padding:"0"},z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{displayIn:["Laptop"]},l.a.createElement(k,null)),l.a.createElement(w,{displayIn:["Mobile"]},l.a.createElement(C,null)))}}]),t}(n.Component),L=(a(34),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"mainContent"},l.a.createElement("h1",null,"Hello,"),l.a.createElement("h2",null,"I am a full stack developer, ",l.a.createElement("br",null)," and I try to learn new things everday"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/bernardpirlea/",className:"waves-effect waves-light btn-floating btn-large social linkedin"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/bernardpirlea",className:"waves-effect waves-light btn-floating btn-large social github"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:pirlea.bernard@gmail.com",className:"waves-effect waves-light btn-floating btn-large social google"},l.a.createElement("i",{className:"fa fa-google"}))))))}}]),t}(n.Component)),M=(n.Component,function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:R},l.a.createElement("h3",null,"Sorry, we are still working on this page "),l.a.createElement("i",{className:"large material-icons"},"build"))}}]),t}(n.Component)),R={textAlign:"center",padding:"30px"};var H=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(z,null),l.a.createElement(o.a,{exact:!0,path:"/academic",component:M}),l.a.createElement(o.a,{exact:!0,path:"/projects",component:M}),l.a.createElement(o.a,{exact:!0,path:"/blog",component:M}),l.a.createElement(o.a,{exact:!0,path:"/home",component:L})))};i.a.render(l.a.createElement(H,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2bf93250.chunk.js.map