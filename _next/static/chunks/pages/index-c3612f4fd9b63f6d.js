(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5104)}])},5104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var l=n(5893),i=n(9008),r=n.n(i),s=n(7294),a=n(4848),o=n.n(a);let d="https://altify-api.azurewebsites.net";var c=n(3321),u=n(657),p=n(1425),f=n(6514),g=n(4215),h=n(4776),x=n(5697),y=n(3264),v=n(1903);let m={disabled:x.bool,fullWidth:x.bool,name:x.string,onChange:x.func,placeholder:x.string,type:x.string,value:x.string},j="rgb(118, 248, 176)",b=(0,y.Z)(v.Z)({"& input:valid + fieldset":{borderColor:j,borderWidth:2},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:j}},"& input:invalid + fieldset":{borderColor:"red",borderWidth:2},"& input:valid:focus + fieldset":{borderLeftWidth:6,padding:"4px !important",borderColor:j}}),w=e=>{let{name:t,onChange:n,placeholder:i,type:r,value:s,disabled:a,fullWidth:o}=e;return(0,l.jsx)(b,{sx:{marginBottom:3},type:r,disabled:a,name:t,placeholder:i,value:s,onChange:n,fullWidth:o})};w.propTypes=m,w.defaultProps={disabled:!1,fullWidth:!1,name:"",onChange(){},placeholder:"",type:"text",value:""};let C=(0,y.Z)(c.Z)({color:"rgb(118, 248, 176)",fontWeight:"bold",letterSpacing:"1px"}),T=(0,s.forwardRef)(function(e,t){return(0,l.jsx)(h.Z,{direction:"down",ref:t,...e})}),S={setCorrectPassword:x.func.isRequired,handlePasswordChange:x.func.isRequired,password:x.string.isRequired},P=e=>{let{setCorrectPassword:t,handlePasswordChange:n,password:i}=e,[r,a]=(0,s.useState)(!0);async function o(){if(i)try{let e=await fetch("".concat(d,"/verifyPassword"),{method:"GET",headers:{"Content-Type":"application/json",authentication:i}});if(401===e.status){alert("Incorrect password");return}if(200===e.status){t(!0),a(!1);return}}catch(n){console.log("error: ",n)}}return(0,l.jsx)("div",{children:(0,l.jsxs)(u.Z,{open:r,TransitionComponent:T,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[(0,l.jsx)(g.Z,{children:"Please enter the password"}),(0,l.jsx)(f.Z,{children:(0,l.jsx)(w,{type:"password",fullWidth:!0,value:i,onChange:n})}),(0,l.jsx)(p.Z,{children:(0,l.jsx)(C,{onClick:o,children:"Enter"})})]})})};P.propTypes=S;var Z=n(1749),R=n(5036);let _=["ImageType","Faces","Adult","Categories","Color","Tags","Description","Objects","Brands"],k=async e=>e.filter(e=>"text"===e.name.toLowerCase()),L=async e=>e.filter(e=>"handwriting"===e.name.toLowerCase()),A=e=>new Promise(t=>{setTimeout(t,e)});async function W(e){let t=new Z.FV(new R.C({inHeader:{"Ocp-Apim-Subscription-Key":"b8de935b3a0b4bafaea5fe58efc98d22"}}),"https://valtech-sd-altify-cv-api.cognitiveservices.azure.com/"),n=await t.analyzeImage(e,{visualFeatures:_});return(k(n.tags)||L(n.tags))&&(n.text=await q(t,e)),{URL:e,...n}}let q=async(e,t)=>{let n=await e.read(t),l=n.operationLocation.split("/").slice(-1)[0],i=Date.now();for(console.log("".concat(i," -").concat(null==n?void 0:n.status," "));"succeeded"!==n.status;)await A(500),console.log("".concat(Date.now()-i," -").concat(null==n?void 0:n.status," ")),n=await e.getReadResult(l);return n.analyzeResult};async function E(e,t,n){let l=Number(n),i=await fetch("".concat(d,"/openAPI"),{method:"POST",headers:{"Content-Type":"application/json",authentication:t},body:JSON.stringify({tags:e,creativity:l})}),r=await i.json();return r.result}var I=n(6319);let N=(0,y.Z)(I.Z)({color:"black",backgroundColor:"rgb(118, 248, 176)",border:"none",borderRadius:4,textAlign:"center",cursor:"pointer",width:"100%",height:40,padding:"0 20px",textTransform:"none",fontSize:16,"&:hover":{backgroundColor:"rgb(118, 248, 176)",border:"none"},"&:disabled":{cursor:"not-allowed",pointerEvents:"all !important"}}),O={onClick:x.func.isRequired,header:x.string.isRequired,loading:x.bool,disabled:x.bool},G=e=>{let{onClick:t,header:n,loading:i,disabled:r}=e;return(0,l.jsxs)(N,{loading:i,variant:"outlined",onClick:t,disabled:r,children:["Generate Tag ",n]})};G.propTypes=O,G.defaultProps={loading:!1,disabled:!1};var z=n(7297),D=n(186);function H(){let e=(0,z.Z)(["\n  display: flex;\n  marginTop: 5;\n  width: 100%;\n"]);return H=function(){return e},e}function B(){let e=(0,z.Z)(["\n  color: rgb(118, 248, 176);\n  margin: 0,\n  text-align: center;\n"]);return B=function(){return e},e}let M=D.ZP.div(H());D.ZP.h2(B()),(0,y.Z)("div")({});let F={chatGTP:x.string,header:x.string.isRequired,loading:x.bool,onClick:x.func.isRequired,suggestion:x.string,unsupported:x.bool},U=e=>{let{onClick:t,header:n,suggestion:i,chatGTP:r,loading:s,unsupported:a}=e;return(0,l.jsx)(M,{children:(0,l.jsxs)("div",{style:{flex:1},children:[(0,l.jsxs)("div",{style:{display:"flex",flex:1},children:[(0,l.jsxs)("div",{style:{flex:2},children:[(0,l.jsx)(G,{disabled:a,onClick:t,header:n,loading:s}),a&&(0,l.jsx)("div",{style:{color:"red",display:"flex",alignItems:"center",flexDirection:"column"},children:(0,l.jsx)("p",{style:{fontSize:12,margin:0},children:"Unsupported format: .GIF"})})]}),(0,l.jsx)("div",{style:{flex:2},children:(0,l.jsxs)("p",{style:{fontWeight:"bold",marginTop:0,marginBottom:50,marginLeft:20},children:[n," Tag:\xa0"]})}),(0,l.jsx)("div",{style:{flex:3,marginLeft:-80},children:(0,l.jsx)("div",{style:{flex:5},children:i&&(0,l.jsx)("p",{style:{marginTop:0},children:i})})})]}),(0,l.jsxs)("div",{style:{flex:1,display:"flex"},children:[(0,l.jsx)("div",{style:{flex:2}}),(0,l.jsx)("div",{style:{flex:2},children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{style:{fontWeight:"bold",marginLeft:20,marginTop:0},children:"GPT Tag:\xa0"})})}),(0,l.jsx)("div",{style:{flex:3,marginLeft:-80},children:(0,l.jsx)("div",{style:{minHeight:150,maxHeight:150,overflowY:"auto"},children:r&&(0,l.jsx)("p",{style:{marginTop:0},children:r})})})]})]})})};U.propTypes=F,U.defaultProps={chatGTP:null,loading:!1,suggestion:null,unsupported:!1};let J={src:(0,x.shape)({image:x.string.isRequired,current:x.string})},V=e=>{let{src:t,password:n,creativity:i}=e,[r,a]=(0,s.useState)(!1),[o,d]=(0,s.useState)(null),[c,u]=(0,s.useState)(null),[p,f]=(0,s.useState)(null),[g,h]=(0,s.useState)(null),[x,y]=(0,s.useState)(null),[v,m]=(0,s.useState)(null);async function j(e){if(0==i&&p){m(p);return}if(.5==i&&g){m(g);return}if(1==i&&x){m(x);return}m(null),a(!0);let t=await E(e,n,i);0==i&&f(t),.5==i&&h(t),1==i&&y(t),m(t),a(!1)}return(0,s.useEffect)(()=>{a(!1),u(null),m(null)},[t]),(0,s.useEffect)(()=>{c&&j(o)},[i]),(0,l.jsx)(U,{onClick:function(){a(!0),W(t.image).then(e=>{try{let t=e.tags.map(e=>e.name);t.push(e.description.captions[0].text),u(e.description.captions[0].text),d(t),j(t)}catch(n){console.log(n)}finally{}})},alt:"",header:"Azure",suggestion:c,chatGTP:v,loading:r,unsupported:t.image.endsWith(".gif")})};async function X(e,t){try{let n=await fetch("".concat(d,"/suggestions"),{headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization",image:e,authentication:t}}),l=await n.json();return l}catch(i){console.log(i)}}V.propTypes=J,V.defaultProps={src:{current:null}};let K={src:(0,x.shape)({image:x.string.isRequired,current:x.string}),password:x.string},Q=e=>{let{src:t,password:n,creativity:i}=e,[r,a]=(0,s.useState)(!1),[o,d]=(0,s.useState)(null),[c,u]=(0,s.useState)(null),[p,f]=(0,s.useState)(null),[g,h]=(0,s.useState)(null),[x,y]=(0,s.useState)(null),[v,m]=(0,s.useState)(null);async function j(e){if(0==i&&p){m(p);return}if(.5==i&&g){m(g);return}if(1==i&&x){m(x);return}m(null),a(!0);let t=await E(e,n,i);0==i&&f(t),.5==i&&h(t),1==i&&y(t),m(t),a(!1)}return(0,s.useEffect)(()=>{a(!1),u(null),m(null)},[t]),(0,s.useEffect)(()=>{c&&j(o)},[i]),(0,l.jsx)(U,{onClick:function(){a(!0),X(t.image,n).then(e=>{try{u(e.join(", ")),d(e),j(e)}catch(t){console.log(t)}finally{}})},alt:"",header:"Cloud Vision",suggestion:c,chatGTP:v,loading:r})};Q.propTypes=K,Q.defaultProps={src:{current:null},password:null};var Y=n(629);let $=(0,y.Z)(Y.Z)({display:"flex",marginTop:50}),ee=(0,y.Z)("div")({margin:"auto",flex:1,padding:20}),et=(0,y.Z)("div")({flex:3,marginLeft:20,display:"flex",flexDirection:"column"}),en=(0,y.Z)("div")({display:"flex",flex:1,alignItems:"center",padding:"20px"});var el=n(913),ei=n(3841),er=n(7529),es=n(5819);let ea={image:x.object.isRequired,password:x.string.isRequired,index:x.number.isRequired,total:x.number.isRequired},eo=[{value:"0",label:"Light"},{value:"0.5",label:"Medium"},{value:"1",label:"High"}],ed=e=>{let{image:t,password:n,index:i,total:r}=e,[a,o]=(0,s.useState)(0);return(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,l.jsxs)($,{elevation:8,children:[(0,l.jsx)(ee,{children:(0,l.jsx)("img",{src:t.image,alt:"",style:{width:"100%"}})}),(0,l.jsxs)(et,{elevation:8,children:[(0,l.jsxs)(en,{children:[(0,l.jsx)("div",{style:{display:"flex",flex:2},children:(0,l.jsxs)(el.Z,{fullWidth:!0,children:[(0,l.jsx)(ei.Z,{id:"creativity-select-label",children:"GPT Creativity Level"}),(0,l.jsx)(er.Z,{labelId:"creativity-select-label",id:"creativity-select",value:a,label:"GPT Creativity Level",onChange:function(e){o(e.target.value)},children:eo.map(e=>(0,l.jsx)(es.Z,{value:e.value,children:e.label},e.label))})]})}),(0,l.jsx)("div",{style:{display:"flex",flex:2,alignItems:"space-evenly"},children:(0,l.jsx)("p",{style:{fontWeight:"bold",marginLeft:20},children:"Current Alt Tag: "})}),(0,l.jsx)("div",{style:{display:"flex",flex:3,marginLeft:-80},children:(0,l.jsx)("p",{children:t.current})})]}),(0,l.jsx)(en,{children:(0,l.jsx)(V,{src:t,password:n,creativity:a})}),(0,l.jsx)(en,{children:(0,l.jsx)(Q,{src:t,password:n,creativity:a})})]})]}),(0,l.jsxs)("p",{children:["#",i+1,"/",r]})]})};function ec(){let[e,t]=(0,s.useState)(""),[n,i]=(0,s.useState)(""),[a,c]=(0,s.useState)(null),[u,p]=(0,s.useState)(!1),[f,g]=(0,s.useState)(!1);async function h(t){t.preventDefault(),(null==a?void 0:a.length)>0&&c(null),p(!0);let l=await fetch("".concat(d,"/generate"),{method:"POST",headers:{"Content-Type":"application/json",authentication:n},body:JSON.stringify({url:e})});if(401===l.status){p(!1),alert("Wrong password");return}g(!0);let i=await l.json();if(0===i.result.length){p(!1),alert("No images found");return}c(i.result.filter(e=>{var t;return!(null===(t=e.src)||void 0===t?void 0:t.endsWith(".svg"))})),p(!1)}return f?(0,l.jsxs)("div",{children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:"OpenAI Quickstart"}),(0,l.jsx)("link",{rel:"icon",href:"/valtechLogo-black.png"})]}),(0,l.jsxs)("main",{className:o().main,children:[(0,l.jsxs)("form",{onSubmit:h,children:[(0,l.jsx)("img",{src:"./valtechLogo-black.png",className:o().icon}),(0,l.jsx)(w,{type:"text",name:"image url",placeholder:"Enter a url",value:e,onChange:function(e){t(e.target.value)}}),(0,l.jsx)("input",{disabled:!e,type:"submit",value:"Analyze URL"})]}),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"80%",marginTop:"20px"},children:[(0,l.jsx)("div",{style:{margin:"0 auto",height:36},children:u&&(0,l.jsx)("div",{className:"loading-bar"})}),(null==a?void 0:a.length)&&(0,l.jsxs)("p",{style:{marginBottom:-20},children:["Images found: ",a.length]}),Array.isArray(a)&&a.map((e,t)=>(0,l.jsx)(ed,{index:t,image:e,password:n,total:null==a?void 0:a.length},"altify-image-".concat(t)))]})]})]}):(0,l.jsx)(P,{setCorrectPassword:g,handlePasswordChange:function(e){i(e.target.value)},password:n})}ed.propTypes=ea,ed.defaultProps={}},4848:function(e){e.exports={main:"index_main__3wZvj",icon:"index_icon__CgRrC",result:"index_result__66e57"}}},function(e){e.O(0,[514,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);