(this["webpackJsonpphonebook-with-registration"]=this["webpackJsonpphonebook-with-registration"]||[]).push([[5],{104:function(e,t,a){"use strict";var n=a(15),s=a(115),c=a(5),i=a(19),r=(a(105),a(106)),o=a.n(r),l=a(2);t.a=function(e){var t=e.logoutButton,a=void 0!==t&&t,r=Object(n.b)(),b=Object(n.c)(i.d);return Object(l.jsxs)("header",{className:o.a.header,children:[Object(l.jsx)(s.a,{timeout:500,classNames:"animation",appear:!0,in:!0,children:Object(l.jsx)("h1",{className:o.a.title,children:"Phonebook"})}),a&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{className:o.a.title,children:["Hello, ",b]}),Object(l.jsx)("button",{type:"button",onClick:function(){r(c.c())},children:"Log out"})]})]})}},105:function(e,t,a){},106:function(e,t,a){e.exports={header:"Header_header__2_xBj",title:"Header_title__2BQ0l"}},107:function(e,t,a){e.exports={label:"ContactFilter_label__1eocN",input:"ContactFilter_input__BxPAK"}},109:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(21),s=a(104),c=a(20),i=a(108),r=a(0),o=a(15),l=a(5),b=a(19),u=a(31),j=a.n(u),d=a(107),h=a.n(d),p=a(2);var m=function(){var e=Object(r.useState)({email:"",password:""}),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(o.b)(),u=Object(o.c)(b.a);return Object(r.useEffect)((function(){u&&j.a.Notify.failure("Wrong email or password")}),[u]),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(l.b({email:a.email,password:a.password}))},children:[Object(p.jsxs)("label",{className:h.a.label,children:["Email",Object(p.jsx)("input",{className:h.a.input,type:"email",name:"email",required:!0,title:"Place for your email. @ symbol is necessarily",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",value:a.email,placeholder:"Email",onChange:function(e){n(Object(c.a)(Object(c.a)({},a),{},{email:e.target.value}))}})]}),Object(p.jsxs)("label",{className:h.a.label,children:["Password",Object(p.jsx)("input",{className:h.a.input,type:"password",name:"password",required:!0,title:"Place here your password. You need at least 6 characters",value:a.password,minLength:"6",placeholder:"Password",onChange:function(e){n(Object(c.a)(Object(c.a)({},a),{},{password:e.target.value}))}})]}),Object(p.jsx)("button",{type:"submit",children:"Log in"})]})};a(109);t.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsx)("h2",{children:"Log in:"}),Object(p.jsx)(m,{}),Object(p.jsx)("span",{children:"\ud83e\udc17 If you want to register account \ud83e\udc17"})," ",Object(p.jsx)("br",{}),Object(p.jsx)(n.b,{to:"/register",children:"Registration form"})]})}}}]);
//# sourceMappingURL=5.245aa90f.chunk.js.map