(this["webpackJsonptestcourt-frontend"]=this["webpackJsonptestcourt-frontend"]||[]).push([[0],{161:function(e,t){},170:function(e,t,n){},244:function(e,t,n){},306:function(e,t){},307:function(e,t){},308:function(e,t){},309:function(e,t){},310:function(e,t){},323:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"db",(function(){return tt})),n.d(r,"auth",(function(){return nt})),n.d(r,"facebookProvider",(function(){return rt}));var a={};n.r(a),n.d(a,"doCreateUserWithEmailAndPassword",(function(){return at})),n.d(a,"doSignInWithEmailAndPassword",(function(){return ct})),n.d(a,"doSignOut",(function(){return st})),n.d(a,"doPasswordReset",(function(){return it})),n.d(a,"doPasswordChange",(function(){return ot}));var c={};n.r(c),n.d(c,"doCreateUser",(function(){return lt})),n.d(c,"onceGetUsers",(function(){return ut})),n.d(c,"doGetAUser",(function(){return dt}));var s=n(3),i=n(1),o=n.n(i),l=n(20),u=n.n(l),d=n(31),j=n(68),h=n(211),b="SET_SELECTED",p="SET_REVIEW_FILTER",f="FETCH_REVIEW_SUCCESS",O="FETCH_REVIEW_REQUEST",v="FETCH_DOCUMENTS_SUCCESS",g="SET_NEW_REVIEW_FIELD",x="FETCH_ALL_PACKAGE_TYPES_SUCCESS",m="FETCH_CHECKLIST_FOR_PACTYPE_SUCCESS",y=n(17),w={WAITING:"waiting",APPROVED:"approved",REJECTED:"rejected"},C={reviewFilter:w.WAITING},S={},E=n(55),k={},A={},R=Object(j.combineReducers)({docs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var n=t.payload.index;return Object(y.a)(Object(y.a)({},e),{},{curDoc:n});case v:var r=t.payload;return Object(y.a)(Object(y.a)({},e),{},{documents:r});case p:var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{reviewFilter:a});default:return e}},review:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(y.a)({},e);case f:var n=t.payload;return Object(y.a)(Object(y.a)({},e),n);default:return e}},checkLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=t.payload;return Object(y.a)(Object(y.a)({},e),{},{packageoptions:n.map((function(e){return e.name}))});case m:var r=t.payload;return Object(y.a)(Object(y.a)({},e),r);default:return e}},newReview:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var n=t.payload,r=n.field,a=n.value;return Object(y.a)(Object(y.a)({},e),{},Object(E.a)({},r,a));default:return e}}}),T=n(212),D=Object(j.createStore)(R,Object(T.composeWithDevTools)(Object(j.applyMiddleware)(h.a))),P=(n(244),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,442)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),F=(n(245),n(33)),N=n(25),_="/signup",I="/login",U="/newreview",L="/home",B="/account",W=(n(170),n(433)),H=n(438),V=o.a.createContext(null),G=n(417),M=function(e){var t=e.history;return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)(W.a,{expand:"lg",children:[Object(s.jsxs)(W.a.Brand,{onClick:function(){t.push(L)},children:[" ",Object(s.jsxs)("div",{children:[Yt,Object(s.jsx)("img",{src:"http://localhost:3006/gavel.svg",style:{paddingLeft:5,paddingBottom:5}})]})," "]}),Object(s.jsx)(W.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(W.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsxs)(H.a,{className:"ml-auto",children:[Object(s.jsx)(H.a.Link,{onClick:function(){t.push(_)},children:" Sign up "}),Object(s.jsx)(H.a.Link,{onClick:function(){t.push(I)},children:" Login "})]})})]}),Object(s.jsx)(G.a,{})]})},Y=function(e){e.userInfo;var t=e.history;return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)(W.a,{expand:"lg",children:[Object(s.jsxs)(W.a.Brand,{onClick:function(){t.push(L)},children:[" ",Object(s.jsxs)("div",{children:[Yt,Object(s.jsx)("img",{src:"http://localhost:3006/gavel.svg",style:{paddingLeft:5,paddingBottom:5}})]})," "]}),Object(s.jsx)(W.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(W.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsx)(H.a,{className:"ml-auto",children:Object(s.jsx)(H.a.Link,{onClick:function(){t.push(B)},children:" Account "})})})]}),Object(s.jsx)(G.a,{})]})},q=Object(N.g)((function(e){var t=e.history;return Object(s.jsx)(V.Consumer,{children:function(e){return e?Object(s.jsx)(Y,{userInfo:e,history:t}):Object(s.jsx)(M,{history:t})}})})),J=n(41),K=n(419),Q=n(436),z=n(420),X=n(423),Z=n(424),$=n(103),ee=n(26),te=n.n(ee),ne=n(53),re="http://138.197.138.237:3000";function ae(){return(ae=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/documents/getAll"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(ne.a)(te.a.mark((function e(t){var n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/documents/getReview/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(ne.a)(te.a.mark((function e(t,n){var r,a,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify({status:n}),a={method:"POST",headers:{"Content-Type":"application/json"},body:r},e.next=4,fetch("".concat(re,"/documents/updateStatus/").concat(t),a);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(161);var ie="http://138.197.138.237:3000";function oe(){return(oe=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ie,"/checklist/getAllPackageTypes"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(ne.a)(te.a.mark((function e(t){var n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ie,"/checklist/").concat(t));case 2:return n=e.sent,console.log("GETCHECKLIST ",n),e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(){return function(e){e({type:"FETCH_DOCUMENTS_REQUEST",payload:""}),function(){return ae.apply(this,arguments)}().then((function(t){e({type:v,payload:t})})).catch((function(e){console.log("DIDNT GET A SUCCESS",e)}))}},de=function(e){return function(t){t({type:O,payload:{}}),function(e){return ce.apply(this,arguments)}(e).then((function(e){t(function(e){return{type:f,payload:e}}(e))})).catch((function(e){console.log("DIDNT GET A SUCCESS",e)}))}},je=function(e){return function(t){t(function(e){return{type:"FETCH_CHECKLIST_FOR_PACTYPE_REQUEST",payload:e}}(e)),function(e){return le.apply(this,arguments)}(e).then((function(n){var r;console.log(n),t((r=Object(E.a)({},e,n),{type:m,payload:r}))})).catch((function(e){console.log("DIDNT GET A SUCCESS",e)}))}},he=function(e){return function(e){e({type:"FETCH_ALL_PACKAGE_TYPES_REQUEST",payload:""}),function(){return oe.apply(this,arguments)}().then((function(t){e({type:x,payload:t})})).catch((function(e){console.log("DIDNT GET A SUCCESS",e)}))}},be=function(e,t){return function(n){n({type:"SUBMIT_VERDICT_REQUEST"}),function(e,t){return se.apply(this,arguments)}(e,t).then((function(e){n({type:"SUBMIT_VERDICT_SUCCESS"})})).catch((function(e){console.log("DIDNT GET A SUCCESS",e)}))}},pe=function(e){return e.docs},fe=function(e){return e.checkLists},Oe=function(e){if(pe(e)){var t=pe(e).reviewFilter,n=pe(e).documents;if(null!=n)return n.filter((function(e){return e.status==t}))}return[]},ve=function(e){return pe(e)?pe(e).curDoc:-1},ge=function(e){var t=function(e){if(pe(e)){var t=pe(e).reviewFilter,n=pe(e).documents;if(null!=n)return n.filter((function(e){return e.status==t}))}return[]}(e),n=ve(e);return null!=t&&t.length>0&&null!=n?(n>t.length-1&&(n=0),t[n]):{}},xe=function(e,t){var n=[];return t.forEach((function(t){var r=function(e,t){return fe(e)[t]?fe(e)[t]:[]}(e,t);r.length>0&&(n=n.concat(r))})),n},me=function(e){return e.newReview},ye=function(e){return e.review},we=n(434),Ce=n(422),Se=n(421),Ee=n(34),ke=n(35),Ae=n(37),Re=n(36),Te=n(131),De=(n(379),function(e){Object(Ae.a)(n,e);var t=Object(Re.a)(n);function n(e){var r;return Object(Ee.a)(this,n),(r=t.call(this,e)).state={status:e.status},r}return Object(ke.a)(n,[{key:"render",value:function(){switch(this.state.status){case w.WAITING:return Object(s.jsx)(Te.a,{pill:!0,variant:"primary",children:"Waiting For Review"});case w.APPROVED:return Object(s.jsx)(Te.a,{pill:!0,variant:"success",children:"Approved"});case w.REJECTED:return Object(s.jsx)(Te.a,{pill:!0,variant:"danger",children:"Rejected"})}}}]),n}(i.Component)),Pe=n(425),Fe=n(221),Ne=n.n(Fe),_e=Object(K.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper,overflowY:"scroll",height:"100vh",paddingTop:0,borderRightStyle:"solid",borderRightWidth:"thin",borderColor:"rgba(0, 0, 0, 0.12)"},inline:{display:"inline"},tab:{minWidth:100,width:100}}}));var Ie=Object(d.b)((function(e){return{curDoc:ve(e),docs:Oe(e)}}),(function(e){return{setCurDoc:function(t){return e(function(e){return{type:b,payload:{index:e}}}(t))},fetchDocs:function(){return e(ue())},setReviewFilter:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))(Object(N.g)((function(e){var t=_e(),n=e.docs||[],r=o.a.useState(0),a=Object(J.a)(r,2),c=a[0],l=a[1];function u(t,n){return function(n){n.preventDefault(),e.setCurDoc(t)}}return Object(i.useEffect)((function(){e.fetchDocs()}),[]),Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsxs)(z.a,{className:t.root,children:[Object(s.jsx)(Se.a,{square:!0,children:Object(s.jsxs)(we.a,{value:c,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",onChange:function(t,n){var r=w.WAITING;1==n&&(r=w.APPROVED),2==n&&(r=w.REJECTED),e.setReviewFilter(r),l(n)},children:[Object(s.jsx)(Ce.a,{classes:{root:t.tab},label:"Waiting"}),Object(s.jsx)(Ce.a,{classes:{root:t.tab},label:"Approved"}),Object(s.jsx)(Ce.a,{classes:{root:t.tab},label:"Rejected"})]})}),n.length>0?n.map((function(n,r){return Object(s.jsxs)("div",{children:[Object(s.jsxs)(X.a,{className:"DocElement",selected:e.curDoc===r,alignItems:"flex-start",onClick:u(r),children:[Object(s.jsx)(Z.a,{primary:n.name,secondary:Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsx)($.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary",children:n.case_number}),Object(s.jsx)("br",{}),n.description]})}),Object(s.jsx)(De,{status:n.status},n.status+r)]}),Object(s.jsx)(G.a,{component:"li"})]})})):"Nothing to review!"]}),Object(s.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:Object(s.jsx)(Q.a,{title:"New Package Review",children:Object(s.jsx)(Pe.a,{onClick:function(){e.history.push(U)},style:{bottom:10,position:"fixed",marginRight:10},size:"large",color:"primary","aria-label":"add",children:Object(s.jsx)(Ne.a,{})})})})]})}))),Ue=n(230),Le=n(439),Be=n(441),We=n(426),He=n(427),Ve=n(51),Ge=n(435),Me=n(149),Ye=n.n(Me),qe=Object(K.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)}}})),Je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};var Ke=Object(d.b)((function(e){return{curReview:ye(e),checklists:function(t){return xe(e,t)},checkListsState:fe(e)}}),(function(e){return{fetchReviewById:function(t){return e(de(t))},fetchChecklist:function(t){return e(je(t))},submitVerdictRequest:function(t,n){return e(be(t,n))}}}))((function(e){var t=e.curReview,n=e.checklists,r="Are you sure you want to approve this package?",a=qe(),c=Object(i.useState)([]),o=Object(J.a)(c,2),l=o[0],u=o[1],d=Object(i.useState)(!1),j=Object(J.a)(d,2),h=j[0],b=j[1],p=Object(i.useState)(!1),f=Object(J.a)(p,2),O=f[0],v=f[1],g=Object(i.useState)(w.APPROVED),x=Object(J.a)(g,2),m=x[0],y=x[1],C=Object(i.useState)(r),S=Object(J.a)(C,2),E=S[0],k=S[1];if(Object(i.useEffect)((function(){Object.entries(t).length>0&&t.package_types.forEach((function(t){t&&e.fetchChecklist(t)}))}),[t]),Object(i.useEffect)((function(){t.package_types&&u(n(t.package_types).map((function(e){return{label:e,checked:!1}})))}),[e.checkListsState]),0==Object.entries(t)||0==n.length)return Object(s.jsx)("p",{children:"Loading"});var A=function(e){return function(t){var n=Object(Ue.a)(l);n[e].checked=!n[e].checked,u(n)}},R=function(e){return function(){e==w.APPROVED?function(){for(var e=0;e<l.length;e++)if(!l[e].checked)return!1;return!0}()?k(r):(k("Please check off all items on the checklist"),y("block")):(k("Are you sure you want to reject this review"),y(e));b(!0)}},T=function(){b(!1)};return O?null:Object(s.jsxs)("div",{style:{flex:"1",height:"100vh",maxHeight:"100vh",overflowY:"scroll",backgroundColor:"#eeeee"},children:[Object(s.jsxs)(Le.a,{style:{width:"100%"},children:[Object(s.jsx)(Le.a.Body,{children:Object(s.jsx)(Le.a.Title,{children:"Approval"})}),Object(s.jsx)(G.a,{}),Object(s.jsx)("div",{style:{marginTop:"10px"},children:"Check this list before approving:"}),Object(s.jsx)(Be.a,{required:!0,error:!0,component:"fieldset",className:a.formControl,style:{overflowY:"scroll",paddingLeft:10,paddingRight:10},children:Object(s.jsx)(We.a,{children:l.map((function(e,t){return Object(s.jsx)(He.a,{style:{textAlign:"left"},control:Object(s.jsx)(Ge.a,{checked:e.checked,onChange:A(t),name:"gilad"},t),label:e.label},t)}))})}),Object(s.jsxs)(Le.a.Body,{children:[Object(s.jsx)(Ve.a,{variant:"success",style:{marginRight:8},onClick:R(w.APPROVED),children:"Approve"}),Object(s.jsx)(Ve.a,{variant:"danger",onClick:R(w.REJECTED),children:"Reject"})]})]}),Object(s.jsx)(Ye.a,{isOpen:h,style:Je,contentLabel:"Confirmation modal",ariaHideApp:!1,children:Object(s.jsxs)(Le.a,{style:{width:"100%"},children:[Object(s.jsx)(Le.a.Body,{children:Object(s.jsx)(Le.a.Title,{children:E})}),Object(s.jsxs)(Le.a.Body,{children:[Object(s.jsx)(Ve.a,{onClick:function(){var t=m;T(),"block"!=t&&(e.submitVerdictRequest(e.id,t),v(!0))},variant:"primary",style:{marginRight:"3px"},children:"Confirm"}),Object(s.jsx)(Ve.a,{variant:"outline-secondary",onClick:T,children:"Close"})]})]})})]})})),Qe=n(121),ze=n.n(Qe),Xe=n(226);var Ze=function(e){var t=Object(i.useState)(null),n=Object(J.a)(t,2);return n[0],n[1],Object(s.jsx)(Xe.a,{seconds:0,minutes:0,hours:0,render:function(e){var t=e.formatted;e.hours,e.minutes,e.seconds;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(N.a,{when:!0,message:"\n\nNot done yet!\n\n"+"You need to Dock-it this time ".concat(t,".\n")+"Do it now so you don't forget."}),Object(s.jsxs)("div",{children:["Reviewed for ",t]})]})}})};var $e=Object(d.b)((function(e){return{curReview:ye(e)}}),(function(e){return{fetchReviewById:function(t){return e(de(t))}}}))((function(e){var t=e.curReview;if(Object(i.useEffect)((function(){e.fetchReviewById(e.id)}),[]),0==Object.entries(t))return"Loading";for(var n=[],r=0;r<t.urls.length;r++)n.push({uri:t.urls[r]});return Object(s.jsxs)("div",{style:{flex:"3",height:"100vh"},children:[Object(s.jsx)(Ze,{}),Object(s.jsx)(ze.a,{style:{height:"100vh"},pluginRenderers:Qe.DocViewerRenderers,documents:n})]})})),et=n(92);n(319),n(321);et.a.apps.length||et.a.initializeApp({apiKey:"AIzaSyA-XFHNa8AHtMmj4p9UezuJrQL9KXUc5Ug",authDomain:"testcourt-4db3c.firebaseapp.com",projectId:"testcourt-4db3c",storageBucket:"testcourt-4db3c.appspot.com",messagingSenderId:"787262980802",appId:"1:787262980802:web:dfc5e4671184c84a39715b",measurementId:"G-VVYS60PC3F"});var tt=et.a.database(),nt=et.a.auth(),rt=new et.a.auth.FacebookAuthProvider,at=function(e,t){return nt.createUserWithEmailAndPassword(e,t)},ct=function(e,t){return nt.signInWithEmailAndPassword(e,t)},st=function(){return nt.signOut()},it=function(e){return nt.sendPasswordResetEmail(e)},ot=function(e){return nt.currentUser.updatePassword(e)},lt=function(e,t,n){return tt.ref("users/".concat(e)).set({username:t,email:n})},ut=function(){return tt.ref("users").once("value")},dt=function(e){return tt.ref("users/".concat(e)).once("value")},jt=function(e){return function(t){var n=function(n){Object(Ae.a)(c,n);var a=Object(Re.a)(c);function c(){return Object(Ee.a)(this,c),a.apply(this,arguments)}return Object(ke.a)(c,[{key:"componentDidMount",value:function(){var t=this;r.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push(I)}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)(V.Consumer,{children:function(n){return n?Object(s.jsx)(t,Object(y.a)(Object(y.a)({},e.props),{},{loggedUser:n})):null}})}}]),c}(o.a.Component);return Object(N.g)(n)}},ht=n(428),bt=n(228),pt=Object(K.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)}}}));var ft=Object(d.b)((function(e){return{curDoc:ge(e)}}),(function(e){return{setInReview:function(t){return e(function(e){return{type:"SET_IN_REVIEW",payload:e}}(t))}}}))(Object(N.g)((function(e){pt();var t=e.curDoc,n=e.history;return 0==Object.entries(t)?Object(s.jsx)("p",{style:{margin:"auto"},children:" Please select a package to review "}):Object(s.jsx)("div",{style:{flex:"1",height:"100vh",maxHeight:"100vh",overflowY:"scroll",backgroundColor:"#eeeee",padding:85,paddingTop:20},children:Object(s.jsxs)(Le.a,{style:{width:"100%"},children:[Object(s.jsx)(Le.a.Body,{children:Object(s.jsx)(Le.a.Title,{children:"Package Preview"})}),Object(s.jsxs)("div",{style:{display:"flex",borderTopStyle:"solid",borderBlockColor:"inherit"},children:[Object(s.jsxs)(ht.a,{className:"list-group-flush",style:{textAlign:"left",flex:1,borderRightStyle:"inset"},children:[Object(s.jsx)(bt.a,{style:{textAlign:"center"},children:Object(s.jsx)("b",{children:"Package info"})}),Object(s.jsxs)(bt.a,{children:[Object(s.jsx)("b",{children:"Client Name"}),": ",t.name]}),Object(s.jsxs)(bt.a,{children:[Object(s.jsx)("b",{children:"Case #"}),": ",t.case_number]}),Object(s.jsxs)(bt.a,{children:[Object(s.jsx)("b",{children:"Due Date"}),": ",new Date(t.due_date).toLocaleDateString("en-US")]}),Object(s.jsxs)(bt.a,{children:[Object(s.jsx)("b",{children:"Package Type"}),": ",t.package_types.join(", ")]}),Object(s.jsxs)(bt.a,{children:[" ",Object(s.jsx)("b",{children:"Description"}),": ",t.description]})]}),Object(s.jsxs)(ht.a,{className:"list-group-flush",style:{textAlign:"left",flex:1},children:[Object(s.jsx)(bt.a,{style:{textAlign:"center"},children:Object(s.jsx)("b",{children:"Poster info"})}),Object(s.jsxs)(bt.a,{children:[" ",Object(s.jsx)("b",{children:"Status"}),": ",Object(s.jsx)(De,{status:t.status},t.status+t.id)," "]}),Object(s.jsxs)(bt.a,{children:[Object(s.jsx)("b",{children:"Posted By"}),": ",t.posted_by]}),Object(s.jsxs)(bt.a,{children:[Object(s.jsx)("b",{children:"Created"}),": ",new Date(t.created_at).toLocaleDateString("en-US")]}),Object(s.jsxs)(bt.a,{children:[" ",Object(s.jsx)("b",{children:"Notes"}),": ",t.notes]})]})]}),Object(s.jsx)(G.a,{}),Object(s.jsx)(Le.a.Body,{children:Object(s.jsx)(Ve.a,{variant:"primary",onClick:function(){n.push("/review/"+t.id)},children:"Start Review"})})]})})})));var Ot=Object(d.b)((function(e){return{}}),(function(e){return{}}))(jt((function(e){return!!e}))((function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ie,{})," ",Object(s.jsx)(ft,{})]})})}))),vt=n(40),gt=(n(323),function(e){Object(Ae.a)(n,e);var t=Object(Re.a)(n);function n(e){var r;return Object(Ee.a)(this,n),(r=t.call(this,e)).state={hightlight:!1},r.fileInputRef=o.a.createRef(),r.openFileDialog=r.openFileDialog.bind(Object(vt.a)(r)),r.onFilesAdded=r.onFilesAdded.bind(Object(vt.a)(r)),r.onDragOver=r.onDragOver.bind(Object(vt.a)(r)),r.onDragLeave=r.onDragLeave.bind(Object(vt.a)(r)),r.onDrop=r.onDrop.bind(Object(vt.a)(r)),r}return Object(ke.a)(n,[{key:"openFileDialog",value:function(){this.props.disabled||this.fileInputRef.current.click()}},{key:"onFilesAdded",value:function(e){if(!this.props.disabled){var t=e.target.files;if(this.props.onFilesAdded){var n=this.fileListToArray(t);this.props.onFilesAdded(n)}}}},{key:"onDragOver",value:function(e){e.preventDefault(),this.props.disabed||this.setState({hightlight:!0})}},{key:"onDragLeave",value:function(e){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.props.disabed){var t=e.dataTransfer.files;if(this.props.onFilesAdded){var n=this.fileListToArray(t);this.props.onFilesAdded(n)}this.setState({hightlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.item(n));return t}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Dropzone ".concat(this.state.hightlight?"Highlight":""),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,onClick:this.openFileDialog,style:{cursor:this.props.disabled?"default":"pointer"},children:[Object(s.jsx)("input",{ref:this.fileInputRef,className:"FileInput",type:"file",multiple:!0,onChange:this.onFilesAdded}),Object(s.jsx)("img",{alt:"upload",className:"Icon",src:"baseline-cloud_upload-24px.svg"}),Object(s.jsx)("span",{children:"Upload Files"})]})}}]),n}(i.Component)),xt=(n(324),function(e){Object(Ae.a)(n,e);var t=Object(Re.a)(n);function n(e){var r;return Object(Ee.a)(this,n),(r=t.call(this,e)).state={},r}return Object(ke.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"ProgressBar",children:Object(s.jsx)("div",{className:"Progress",style:{width:this.props.progress+"%"}})})}}]),n}(i.Component)),mt=n(437),yt=(n(325),"http://localhost:3000"),wt=function(e){Object(Ae.a)(n,e);var t=Object(Re.a)(n);function n(e){var r;return Object(Ee.a)(this,n),(r=t.call(this,e)).state={files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1,newReviewForms:e.newReviewFields},r.onFilesAdded=r.onFilesAdded.bind(Object(vt.a)(r)),r.uploadFiles=r.uploadFiles.bind(Object(vt.a)(r)),r.sendRequest=r.sendRequest.bind(Object(vt.a)(r)),r.uploadReview=r.uploadReview.bind(Object(vt.a)(r)),r.uploadForm=r.uploadForm.bind(Object(vt.a)(r)),r.renderActions=r.renderActions.bind(Object(vt.a)(r)),r}return Object(ke.a)(n,[{key:"onFilesAdded",value:function(e){this.setState((function(t){return{files:t.files.concat(e)}}))}},{key:"uploadReview",value:function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n=this;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(mt.a)(),this.setState({id:t},(function(){return n.uploadForm(t).then((function(){return n.uploadFiles(t)})).then((function(){n.props.history.push(L)})).catch((function(){}))}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validForm",value:function(){var e=this.props.newReviewFields;return console.log(e),null!=e.name&&null!=e.casenumber&&null!=e.due_date&&null!=e.packagetypes&&null!=e.description&&0!=this.state.files.length}},{key:"uploadForm",value:function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,r,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.validForm()){e.next=3;break}throw alert("One or more fields not filled out"),"";case 3:return n=Object(y.a)(Object(y.a)({},this.props.newReviewFields),{},{posted_by:this.props.loggedUser.email}),r=JSON.stringify(n),a={method:"POST",headers:{"Content-Type":"application/json"},body:r},e.next=8,fetch("".concat(yt,"/upload/form/").concat(t),a);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"uploadFiles",value:function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,r=this;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({uploadProgress:{},uploading:!0}),n=[],this.state.files.forEach((function(e){n.push(r.sendRequest(e,t))})),e.prev=3,e.next=6,Promise.all(n);case 6:this.setState({successfullUploaded:!0,uploading:!1}),e.next=14;break;case 9:throw e.prev=9,e.t0=e.catch(3),alert("Could not upload files."),this.setState({successfullUploaded:!0,uploading:!1}),e.t0;case 14:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"sendRequest",value:function(e,t){var n=this;return new Promise((function(r,a){var c=new XMLHttpRequest;c.upload.addEventListener("progress",(function(t){if(t.lengthComputable){var r=Object(y.a)({},n.state.uploadProgress);r[e.name]={state:"pending",percentage:t.loaded/t.total*100},n.setState({uploadProgress:r})}})),c.upload.addEventListener("load",(function(t){var a=Object(y.a)({},n.state.uploadProgress);a[e.name]={state:"done",percentage:100},n.setState({uploadProgress:a}),r(c.response)})),c.upload.addEventListener("error",(function(t){var r=Object(y.a)({},n.state.uploadProgress);r[e.name]={state:"error",percentage:0},n.setState({uploadProgress:r}),a(c.response)}));var s=new FormData;s.append("file",e,e.name),c.open("POST","".concat(yt,"/upload/file/").concat(t)),c.send(s)}))}},{key:"renderProgress",value:function(e){var t=this.state.uploadProgress[e.name];return Object(s.jsxs)("div",{className:"ProgressWrapper",children:[Object(s.jsx)(xt,{progress:t?t.percentage:0}),Object(s.jsx)("img",{className:"CheckIcon",alt:"done",src:"baseline-check_circle_outline-24px.svg",style:{opacity:t&&"done"===t.state?.5:0}})]})}},{key:"renderActions",value:function(){var e=this;return this.state.successfullUploaded?Object(s.jsx)("button",{onClick:function(){return e.setState({files:[],successfullUploaded:!1})},children:"Clear"}):Object(s.jsx)("button",{disabled:this.state.files.length<0||this.state.uploading,onClick:this.uploadReview,children:"Submit"})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"Upload",children:[Object(s.jsxs)("div",{className:"Content",children:[Object(s.jsx)("div",{style:{paddingLeft:"5px"},children:Object(s.jsx)(gt,{onFilesAdded:this.onFilesAdded,disabled:this.state.uploading||this.state.successfullUploaded})}),Object(s.jsx)("div",{className:"Files",children:this.state.files.map((function(t){return Object(s.jsxs)("div",{className:"Row",children:[Object(s.jsx)("span",{className:"Filename",children:t.name}),e.renderProgress(t)]},t.name)}))})]}),Object(s.jsx)("div",{className:"Actions",children:this.renderActions()})]})}}]),n}(i.Component),Ct=Object(d.b)((function(e){return{newReviewFields:me(e)}}),(function(e){return{submitNewReview:function(t){return e({type:"UPLOAD_NEW_REQUEST_FORM",payload:""})}}}))(Object(N.g)(wt)),St=n(151),Et=n.n(St),kt=(n(326),n(327),n(229)),At=n.n(kt),Rt=Object(K.a)((function(e){return{formControl:{margin:e.spacing(3)}}}));var Tt=Object(d.b)((function(e){return{newReviewFields:me(e),packageOptions:(t=e,fe(t)?fe(t).packageoptions:[])};var t}),(function(e){return{setNewReviewField:function(t,n){return e(function(e,t){return{type:g,payload:{field:e,value:t}}}(t,n))},getAllPackageTypes:function(){return e(he())}}}))(jt((function(e){return!!e}))((function(e){e.newReviewFields.name;var t=Object(i.useState)(!1),n=Object(J.a)(t,2),r=(n[0],n[1],Object(i.useState)(null)),a=Object(J.a)(r,2),c=a[0],o=a[1],l=Object(i.useState)(null),u=Object(J.a)(l,2),d=(u[0],u[1]);Rt(),Object(i.useEffect)((function(){e.getAllPackageTypes()}),[]);var j=function(t){e.setNewReviewField(t.target.name,t.target.value)};return Object(s.jsxs)("div",{className:"Card",style:{display:"flex",flexDirection:"column",margin:"auto"},children:[Object(s.jsxs)("form",{style:{margin:"auto",textAlign:"left"},children:[Object(s.jsx)("h2",{style:{textAlign:"center",paddingBottom:25},children:"New Review"}),Object(s.jsxs)("fieldset",{style:{display:"flex",flexDirection:"column"},children:[Object(s.jsxs)("label",{children:[Object(s.jsx)("p",{children:"Client Name"}),Object(s.jsx)("input",{name:"name",onChange:j})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("p",{children:"Case #"}),Object(s.jsx)("input",{name:"casenumber",onChange:j})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("p",{children:"Due Date"}),Object(s.jsx)(Et.a,{name:"due_date",selected:c,onChange:function(t){return function(t){o(t),e.setNewReviewField("due_date",t)}(t)}})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("p",{children:"Package Type"}),Object(s.jsx)(At.a,{onChange:function(t){console.log("OPTION",t.value),d(t.value),e.setNewReviewField("packagetypes",t.value)},options:e.packageOptions,placeholder:"Select an option"})]}),Object(s.jsx)("label",{children:Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(s.jsx)("p",{children:"Brief Description"}),Object(s.jsx)("textarea",{maxLength:"254",name:"description",rows:"5",cols:"40",onChange:j}),"255 char limit"]})}),Object(s.jsx)("label",{children:Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(s.jsx)("p",{children:"Additional Notes"}),Object(s.jsx)("textarea",{maxLength:"254",name:"notes",rows:"2",cols:"40",onChange:j}),"(Optional) 255 char limit"]})})]})]}),Object(s.jsx)(Ct,{style:{margin:"auto"},loggedUser:e.loggedUser})]})}))),Dt=n(440),Pt=n(429),Ft=n(430),Nt=n(431),_t={username:"",email:"",passwordOne:"",passwordTwo:"",error:null,showingAlert:!1},It=function(e,t){return function(){return Object(E.a)({},e,t)}},Ut=function(e){Object(Ae.a)(n,e);var t=Object(Re.a)(n);function n(){var e;Object(Ee.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state=Object(y.a)({},_t),e.onSubmit=function(t){var n=e.state,r=n.username,s=n.email,i=n.passwordOne,o=e.props.history;a.doCreateUserWithEmailAndPassword(s,i).then((function(t){c.doCreateUser(t.user.uid,r,s).then((function(){e.setState(Object(y.a)({},_t)),o.push(L)})).catch((function(t){e.setState(It("error",t)),e.timer()}))})).catch((function(t){e.setState(It("error",t)),e.timer()})),t.preventDefault()},e.timer=function(){e.setState({showingAlert:!0}),setTimeout((function(){e.setState({showingAlert:!1})}),4e3)},e}return Object(ke.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.username,r=t.email,a=t.passwordOne,c=t.passwordTwo,i=t.error,o=t.showingAlert,l=a!==c||""===a||""===r||""===n;return Object(s.jsxs)("div",{children:[o&&Object(s.jsx)(Dt.a,{color:"danger",onLoad:this.timer,children:i.message}),Object(s.jsxs)(Pt.a,{onSubmit:this.onSubmit,children:[Object(s.jsx)(Ft.a,{children:Object(s.jsx)(Nt.a,{type:"username",name:"username",id:"userName",placeholder:"First and Last Name",value:n,onChange:function(t){return e.setState(It("username",t.target.value))}})}),Object(s.jsx)(Ft.a,{children:Object(s.jsx)(Nt.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"Email",value:r,onChange:function(t){return e.setState(It("email",t.target.value))}})}),Object(s.jsx)(Ft.a,{children:Object(s.jsx)(Nt.a,{type:"password",name:"password",id:"examplePassword1",placeholder:"Password",value:a,onChange:function(t){return e.setState(It("passwordOne",t.target.value))}})}),Object(s.jsx)(Ft.a,{children:Object(s.jsx)(Nt.a,{type:"password",name:"password",id:"examplePassword2",placeholder:"Confirm Password",value:c,onChange:function(t){return e.setState(It("passwordTwo",t.target.value))}})}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(Ve.a,{disabled:l,type:"submit",children:"Sign Up"})})]})]})}}]),n}(i.Component),Lt=(Object(N.g)((function(e){var t=e.history;return Object(s.jsx)("div",{className:"div-flex",children:Object(s.jsxs)("div",{className:"marginTop60",children:[Object(s.jsx)("h1",{className:"centered",children:"Sign Up"}),Object(s.jsx)(Ut,{history:t})]})})})),function(e,t){return function(){return Object(E.a)({},e,t)}}),Bt={email:"",password:"",error:null,showingAlert:!1},Wt=function(e){Object(Ae.a)(n,e);var t=Object(Re.a)(n);function n(){var e;Object(Ee.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(y.a)({},Bt),e.onSubmit=function(t){var n=e.state,r=n.email,c=n.password,s=e.props.history;a.doSignInWithEmailAndPassword(r,c).then((function(){e.setState(Object(y.a)({},Bt)),s.push(L)})).catch((function(t){e.setState(Lt("error",t)),e.timer()})),t.preventDefault()},e.timer=function(){e.setState({showingAlert:!0}),setTimeout((function(){e.setState({showingAlert:!1})}),4e3)},e}return Object(ke.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,r=t.password,a=t.error,c=t.showingAlert,i=""===r||""===n;return Object(s.jsxs)("div",{children:[c&&Object(s.jsx)(Dt.a,{color:"danger",onLoad:this.timer,children:a.message}),Object(s.jsxs)(Pt.a,{onSubmit:this.onSubmit,children:[Object(s.jsx)(Ft.a,{children:Object(s.jsx)(Nt.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"Email",value:n,onChange:function(t){return e.setState(Lt("email",t.target.value))}})}),Object(s.jsx)(Ft.a,{children:Object(s.jsx)(Nt.a,{type:"password",name:"password",id:"examplePassword",placeholder:"Password",value:r,onChange:function(t){return e.setState(Lt("password",t.target.value))}})}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(Ve.a,{disabled:i,type:"submit",children:"Sign In"})})]}),Object(s.jsx)("hr",{})]})}}]),n}(i.Component),Ht=Object(N.g)((function(e){var t=e.history;return Object(s.jsx)("div",{className:"div-flex",children:Object(s.jsxs)("div",{className:"marginTop60",children:[Object(s.jsx)("h1",{children:"Sign In"}),Object(s.jsx)(Wt,{history:t})]})})}));var Vt=Object(d.b)((function(e){return{}}),(function(e){return{}}))(jt((function(e){return!!e}))((function(e){var t=e.match.params.id;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(s.Fragment,{children:[" ",Object(s.jsx)($e,{id:t})," ",Object(s.jsx)(Ke,{id:t})," "]})})}))),Gt=n(432);var Mt=jt((function(e){return!!e}))((function(e){return Object(i.useEffect)((function(){}),[]),Object(s.jsxs)("div",{className:"Card",style:{display:"flex",flexDirection:"column",margin:"auto"},children:[Object(s.jsxs)(Le.a,{style:{width:"100%"},children:[Object(s.jsx)(Le.a.Body,{children:Object(s.jsx)(Le.a.Title,{children:"Profile"})}),Object(s.jsx)("div",{style:{display:"flex",borderTopStyle:"solid",borderBlockColor:"inherit"},children:Object(s.jsx)(ht.a,{className:"list-group-flush",style:{textAlign:"left",flex:1,borderRightStyle:"inset"},children:Object(s.jsxs)(bt.a,{children:[Object(s.jsx)("b",{children:"Email"}),": ",e.loggedUser.email]})})})]}),Object(s.jsx)(Gt.a,{style:{width:100,marginLeft:"auto",marginRight:"auto"},color:"info",onClick:a.doSignOut,children:"Sign Out"})]})})),Yt="ReviewCounsel";var qt=function(e){return function(t){Object(Ae.a)(a,t);var n=Object(Re.a)(a);function a(){var e;Object(Ee.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={authUser:null},e}return Object(ke.a)(a,[{key:"componentDidMount",value:function(){var e=this;r.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"render",value:function(){var t=this.state.authUser;return console.log("withAuthentication file authUser",t),Object(s.jsx)(V.Provider,{value:t,children:Object(s.jsx)(e,Object(y.a)({},this.props))})}}]),a}(o.a.Component)}((function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)(q,{}),Object(s.jsx)("div",{className:"App",style:{display:"flex",backgroundColor:"#EEEEEE"},children:Object(s.jsxs)(N.d,{children:[Object(s.jsx)(N.b,{exact:!0,path:L,component:Ot}),Object(s.jsx)(N.b,{exact:!0,path:U,component:Tt}),Object(s.jsx)(N.b,{exact:!0,path:I,component:Ht}),Object(s.jsx)(N.b,{path:"/review/:id",component:Vt}),Object(s.jsx)(N.b,{path:B,component:Mt})]})})]})})}));u.a.render(Object(s.jsx)(d.a,{store:D,children:Object(s.jsx)(qt,{})}),document.getElementById("root")),P()}},[[376,1,2]]]);
//# sourceMappingURL=main.8ed2ebe0.chunk.js.map