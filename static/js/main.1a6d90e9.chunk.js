(this["webpackJsonpjwt-pg"]=this["webpackJsonpjwt-pg"]||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=a(22),l=a(19),u=a.n(l),m=a(32),i=(a(104),a(23)),p=a(8),h=a(30),f=a(44),b=a(34),d=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:""}),c=Object(s.a)(a,2),o=c[0],l=c[1],p=o.email,d=o.password,E=function(e){return l(Object(b.a)(Object(b.a)({},o),{},Object(f.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(m.a)(u.a.mark((function e(a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:p,password:d},e.next=5,fetch("http://tramdev.ino.nectec.or.th:5001/authentication/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).jwtToken?(localStorage.setItem("token",c.jwtToken),t(!0),h.a.success("Logged in Successfully")):(t(!1),h.a.error(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"mt-5 text-center"},"Login"),r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{type:"text",name:"email",value:p,onChange:function(e){return E(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"password",name:"password",value:d,onChange:function(e){return E(e)},className:"form-control my-3"}),r.a.createElement("button",{className:"btn btn-success btn-block"},"Submit")),r.a.createElement(i.b,{to:"/register"},"register"))},E=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:"",name:""}),c=Object(s.a)(a,2),o=c[0],l=c[1],p=o.email,d=o.password,E=o.name,g=function(e){return l(Object(b.a)(Object(b.a)({},o),{},Object(f.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(m.a)(u.a.mark((function e(a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:p,password:d,name:E},e.next=5,fetch("http://tramdev.ino.nectec.or.th:5001/authentication/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).jwtToken?(localStorage.setItem("token",c.jwtToken),t(!0),h.a.success("Register Successfully")):(t(!1),h.a.error(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"mt-5 text-center"},"Register"),r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{type:"text",name:"email",value:p,placeholder:"email",onChange:function(e){return g(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"password",name:"password",value:d,placeholder:"password",onChange:function(e){return g(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"text",name:"name",value:E,placeholder:"name",onChange:function(e){return g(e)},className:"form-control my-3"}),r.a.createElement("button",{className:"btn btn-success btn-block"},"Submit")),r.a.createElement(i.b,{to:"/login"},"login"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/index"},"bowTest")))},g=function(e){var t=e.setAuth,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1],i=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://tramdev.ino.nectec.or.th:5001/dashboard/",{method:"POST",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a.user_name),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{localStorage.removeItem("token"),t(!1),h.a.success("Logout successfully")}catch(n){console.error(n.message)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"mt-5"},"Dashboard"),r.a.createElement("h2",null,"Welcome ",o),r.a.createElement("button",{onClick:function(e){return p(e)},className:"btn btn-primary"},"Logout"))},v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page1 \u0e2b\u0e19\u0e49\u0e32\u0e40\u0e40\u0e23\u0e01\u0e2a\u0e38\u0e14\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07 login"))},j=(a(109),a(185)),y=a(187),w=function(){return r.a.createElement("div",null,r.a.createElement(j.a,{style:{height:"95vh"},center:[13,100],zoom:6,scrollWheelZoom:!0},r.a.createElement(y.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})))},O=a(186),k=a(188),x=a(189),S=function(){return r.a.createElement(O.a,{mode:"horizontal",theme:"dark"},r.a.createElement(O.a.Item,{key:"alipay"},r.a.createElement(i.b,{to:"/"},"Home test")),r.a.createElement(O.a.Item,{key:"app2",icon:r.a.createElement(k.a,null)},r.a.createElement(i.b,{to:"/map"},"map")),r.a.createElement(O.a.Item,{key:"app3",icon:r.a.createElement(k.a,null)},r.a.createElement(i.b,{to:"/dashboard"},"Dashboard")),r.a.createElement(O.a.Item,{key:"mail",style:{marginLeft:"auto"},icon:r.a.createElement(x.a,null)},r.a.createElement(i.b,{to:"/login"},"login")),r.a.createElement(O.a.Item,{key:"app",icon:r.a.createElement(k.a,null)},r.a.createElement(i.b,{to:"/register"},"register")))};a(177);h.a.configure();var N=function(){var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://tramdev.ino.nectec.or.th:5001/authentication/verify",{method:"POST",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(!0===a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){e()}),[]);var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],l=function(e){o(e)};return r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{basename:"/project_map_test"},r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/login",render:function(e){return c?r.a.createElement(p.a,{to:"/dashboard"}):r.a.createElement(d,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(p.b,{exact:!0,path:"/register",render:function(e){return c?r.a.createElement(p.a,{to:"/dashboard"}):r.a.createElement(E,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(p.b,{exact:!0,path:"/dashboard",render:function(e){return c?r.a.createElement(g,Object.assign({},e,{setAuth:l})):r.a.createElement(p.a,{to:"/login"})}}),r.a.createElement(p.b,{exact:!0,path:"/map",render:function(e){return c?r.a.createElement(w,Object.assign({},e,{setAuth:l})):r.a.createElement(p.a,{to:"/login"})}}),r.a.createElement(v,{path:"/",to:"/index"})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},99:function(e,t,a){e.exports=a(178)}},[[99,1,2]]]);
//# sourceMappingURL=main.1a6d90e9.chunk.js.map