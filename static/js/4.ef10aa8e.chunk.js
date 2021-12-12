(this["webpackJsonpphonebook-with-registration"]=this["webpackJsonpphonebook-with-registration"]||[]).push([[4],{104:function(t,e,n){"use strict";var a=n(15),c=n(115),r=n(5),o=n(19),s=(n(105),n(106)),i=n.n(s),u=n(2);e.a=function(t){var e=t.logoutButton,n=void 0!==e&&e,s=Object(a.b)(),l=Object(a.c)(o.d);return Object(u.jsxs)("header",{className:i.a.header,children:[Object(u.jsx)(c.a,{timeout:500,classNames:"animation",appear:!0,in:!0,children:Object(u.jsx)("h1",{className:i.a.title,children:"Phonebook"})}),n&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:i.a.title,children:["Hello, ",l]}),Object(u.jsx)("button",{type:"button",onClick:function(){s(r.c())},children:"Log out"})]})]})}},105:function(t,e,n){},106:function(t,e,n){t.exports={header:"Header_header__2_xBj",title:"Header_title__2BQ0l"}},107:function(t,e,n){t.exports={label:"ContactFilter_label__1eocN",input:"ContactFilter_input__BxPAK"}},112:function(t,e,n){t.exports={form:"ContactForm_form__14Oge",label:"ContactForm_label__1Kxsq",input:"ContactForm_input__1dwTJ",button:"ContactForm_button__3ZOIb"}},113:function(t,e,n){t.exports={contactItem:"ContactItem_contactItem__2imG9",button:"ContactItem_button__6tc1P"}},114:function(t,e,n){t.exports={contactList:"ContactList_contactList__2agxJ"}},116:function(t,e,n){"use strict";n.r(e);var a=n(6),c=n.n(a),r=n(17),o=n(108),s=n(0),i=n(15),u=function(t){return t.phonebook.contacts},l=function(t){return t.phonebook.filter},b=function(t){return t.phonebook.error},j=n(16),m=n(42),d=n(31),h=n.n(d),f=n(112),O=n.n(f),p=n(2);var x=function(){var t=Object(i.b)(),e=Object(i.c)(u),n=Object(i.c)(b),a=Object(s.useState)(""),l=Object(o.a)(a,2),d=l[0],f=l[1],x=Object(s.useState)(""),_=Object(o.a)(x,2),N=_[0],g=_[1],v=Object(s.useState)(!1),C=Object(o.a)(v,2),y=C[0],w=C[1];function k(){return(k=Object(r.a)(c.a.mark((function n(a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w(!0),a.preventDefault(),!e.find((function(t){return t.name.toLowerCase()===d.toLowerCase()}))){n.next=6;break}return h.a.Notify.failure("".concat(d," is already in contacts")),w(!1),n.abrupt("return");case 6:t(j.a({name:d,number:N})).finally((function(){return h.a.Notify.success("The contacts is added")}),w(!1));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(t){switch(t.target.name){case"name":return f(t.target.value);case"number":return g(t.target.value);default:return}}return Object(s.useEffect)((function(){f(""),g("")}),[e.length]),Object(s.useEffect)((function(){n&&h.a.Notify.failure("Something gone wrong, try again")}),[e,n]),Object(p.jsxs)("form",{className:O.a.form,autoComplete:"on",onSubmit:function(t){return k.apply(this,arguments)},children:[Object(p.jsxs)("label",{className:O.a.label,children:["Name:",Object(p.jsx)("input",{className:O.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name",required:!0,value:d,onChange:L})]}),Object(p.jsxs)("label",{className:O.a.label,children:["Number:",Object(p.jsx)("input",{className:O.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Number",required:!0,value:N,onChange:L})]}),Object(p.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"}),y&&Object(p.jsx)(m.a,{})]})},_=n(44),N=n(107),g=n.n(N);var v=function(){var t=Object(i.b)(),e=Object(s.useState)(""),n=Object(o.a)(e,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){t(_.a(a))}),[t,a]),Object(p.jsxs)("label",{className:g.a.label,children:["Find contacts by name:",Object(p.jsx)("input",{className:g.a.input,title:"Start to write name of contact to find",type:"text",placeholder:"Name",value:a,onChange:function(t){return c(t.target.value)}})]})},C=n(113),y=n.n(C);var w=function(t){var e=t.id,n=t.name,a=t.number,c=Object(i.b)();return Object(p.jsxs)("li",{className:y.a.contactItem,children:[Object(p.jsxs)("span",{children:[n,": "]}),Object(p.jsxs)("span",{children:[a," "]}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{className:y.a.button,id:e,type:"button",onClick:function(){return c(j.c(e))},children:"Delete"})})]},e)},k=n(114),L=n.n(k);var F=function(){var t=Object(i.b)(),e=Object(i.c)(u),n=Object(i.c)(l);Object(s.useEffect)((function(){t(j.b())}),[t]);var a=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(p.jsxs)("ul",{className:L.a.contactList,children:[0===e.length&&Object(p.jsx)("h4",{children:"No contacts here."}),e.length>0&&0===a.length&&Object(p.jsx)("h4",{children:"Sorry, there are no contacts with this name."}),a.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(p.jsx)(w,{id:e,name:n,number:a},e)}))]})},S=n(104);e.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S.a,{logoutButton:!0}),Object(p.jsx)(x,{}),Object(p.jsx)("h2",{children:"Your contacts:"}),Object(p.jsx)(v,{}),Object(p.jsx)(F,{})]})}}}]);
//# sourceMappingURL=4.ef10aa8e.chunk.js.map