(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5104)}])},5104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ep}});var i=n(5893),l=n(9008),r=n.n(l),s=n(7294),a=n(4848),o=n.n(a);let d="https://altify-api.azurewebsites.net";var c=n(3321),u=n(657),p=n(1425),h=n(6514),g=n(4215),f=n(4776),x=n(5697),y=n(3264),m=n(8271);let b={disabled:x.bool,fullWidth:x.bool,name:x.string,onChange:x.func,placeholder:x.string,type:x.string,value:x.string,autoFocus:x.bool},j="rgb(118, 248, 176)",v=(0,y.Z)(m.Z)({"& input:valid + fieldset":{borderColor:j,borderWidth:2},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:j}},"& input:invalid + fieldset":{borderColor:"red",borderWidth:2},"& input:valid:focus + fieldset":{borderLeftWidth:6,padding:"4px",borderColor:j}}),w=e=>{let{name:t,onChange:n,placeholder:l,type:r,value:s,disabled:a,fullWidth:o,autoFocus:d}=e;return(0,i.jsx)(v,{sx:{marginBottom:3},autoFocus:d,type:r,disabled:a,name:t,placeholder:l,value:s,onChange:n,fullWidth:o})};w.propTypes=b,w.defaultProps={disabled:!1,fullWidth:!1,name:"",onChange(){},placeholder:"",type:"text",value:"",autoFocus:!1};let C=(0,y.Z)(c.Z)({color:"rgb(118, 248, 176)",fontWeight:"bold",letterSpacing:"1px"}),S=(0,s.forwardRef)(function(e,t){return(0,i.jsx)(f.Z,{direction:"down",ref:t,...e})}),T={setCorrectPassword:x.func.isRequired,handlePasswordChange:x.func.isRequired,password:x.string.isRequired},P=e=>{let{setCorrectPassword:t,handlePasswordChange:n,password:l}=e,[r,a]=(0,s.useState)(!0);async function o(e){if(e.preventDefault(),l)try{let n=await fetch("".concat(d,"/verifyPassword"),{method:"GET",headers:{"Content-Type":"application/json",authentication:l}});if(401===n.status){alert("Incorrect password");return}if(200===n.status){t(!0),a(!1);return}}catch(i){console.log("error: ",i)}}return(0,i.jsxs)(u.Z,{open:r,TransitionComponent:S,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[(0,i.jsx)(g.Z,{children:"Please enter the password"}),(0,i.jsx)(h.Z,{children:(0,i.jsx)("form",{onSubmit:o,children:(0,i.jsx)(w,{autoFocus:!0,type:"password",fullWidth:!0,value:l,onChange:n})})}),(0,i.jsx)(p.Z,{children:(0,i.jsx)(C,{onClick:o,children:"Enter"})})]})};P.propTypes=T;var Z=n(1749),k=n(5036);let R=["ImageType","Faces","Adult","Categories","Color","Tags","Description","Objects","Brands"],_=async e=>e.filter(e=>"text"===e.name.toLowerCase()),I=async e=>e.filter(e=>"handwriting"===e.name.toLowerCase()),W=e=>new Promise(t=>{setTimeout(t,e)});async function A(e){let t=new Z.FV(new k.C({inHeader:{"Ocp-Apim-Subscription-Key":"b8de935b3a0b4bafaea5fe58efc98d22"}}),"https://valtech-sd-altify-cv-api.cognitiveservices.azure.com/"),n=await t.analyzeImage(e,{visualFeatures:R});return(_(n.tags)||I(n.tags))&&(n.text=await E(t,e)),{URL:e,...n}}let E=async(e,t)=>{let n=await e.read(t),i=n.operationLocation.split("/").slice(-1)[0],l=Date.now();for(console.log("".concat(l," -").concat(null==n?void 0:n.status," "));"succeeded"!==n.status;)await W(500),console.log("".concat(Date.now()-l," -").concat(null==n?void 0:n.status," ")),n=await e.getReadResult(i);return n.analyzeResult};async function O(e,t,n){let i=Number(n),l=await fetch("".concat(d,"/openAPI"),{method:"POST",headers:{"Content-Type":"application/json",authentication:t},body:JSON.stringify({tags:e,creativity:i})}),r=await l.json();return r.result}var L=n(6319);let q=(0,y.Z)(L.Z)({color:"black",backgroundColor:"rgb(118, 248, 176)",border:"none",borderRadius:4,height:60,textAlign:"center",cursor:"pointer",width:"100%",padding:"0 20px",textTransform:"none",fontSize:16,"&:hover":{backgroundColor:"rgb(118, 248, 176)",border:"none"},"&:disabled":{cursor:"not-allowed",pointerEvents:"all !important"}}),F={onClick:x.func.isRequired,header:x.string.isRequired,loading:x.bool,disabled:x.bool},D=e=>{let{onClick:t,header:n,loading:l,disabled:r}=e;return(0,i.jsxs)(q,{loading:l,variant:"outlined",onClick:t,disabled:r,children:["Generate Tag ",n]})};D.propTypes=F,D.defaultProps={loading:!1,disabled:!1};var N=n(7297),z=n(186);function G(){let e=(0,N.Z)(["\n  display: flex;\n  margin-top: 5;\n  width: 100%;\n"]);return G=function(){return e},e}function M(){let e=(0,N.Z)(["\n  color: rgb(118, 248, 176);\n  margin: 0,\n  text-align: center;\n"]);return M=function(){return e},e}let B=z.ZP.div(G());z.ZP.h2(M());let H=(0,y.Z)("div")({fontWeight:"bold",paddingLeft:40,minWidth:200}),U={chatGTP:x.string,header:x.string.isRequired,loading:x.bool,onClick:x.func.isRequired,suggestion:x.string,unsupported:x.bool},V=e=>{let{onClick:t,header:n,suggestion:l,chatGTP:r,loading:s,unsupported:a}=e;return(0,i.jsx)(B,{children:(0,i.jsx)("div",{style:{flex:1},children:(0,i.jsxs)("div",{style:{flex:1,display:"flex",alignItems:"center"},children:[(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)(D,{disabled:a,onClick:t,header:"(".concat(n,")"),loading:s}),a&&(0,i.jsx)("div",{style:{color:"red",display:"flex",alignItems:"center",flexDirection:"column"},children:(0,i.jsx)("p",{style:{fontSize:12,margin:0},children:"Unsupported format: .GIF"})})]}),(0,i.jsxs)("div",{style:{flex:2,flexDirection:"column",display:"flex"},children:[(0,i.jsxs)("div",{style:{flex:2,alignItems:"center",display:"flex"},children:[(0,i.jsxs)(H,{children:[n," Tag:\xa0"]}),l&&(0,i.jsx)("p",{children:l})]}),r&&(0,i.jsxs)("div",{style:{flex:2,alignItems:"center",display:"flex"},children:[(0,i.jsx)(H,{children:"GPT Tag:\xa0"}),r&&(0,i.jsx)("p",{children:r})]})]})]})})})};V.propTypes=U,V.defaultProps={chatGTP:null,loading:!1,suggestion:null,unsupported:!1};let J={src:(0,x.shape)({image:x.string.isRequired,current:x.string})},X=e=>{let{src:t,password:n,creativity:l}=e,[r,a]=(0,s.useState)(!1),[o,d]=(0,s.useState)(null),[c,u]=(0,s.useState)(null),[p,h]=(0,s.useState)(null),[g,f]=(0,s.useState)(null),[x,y]=(0,s.useState)(null),[m,b]=(0,s.useState)(null);async function j(e){if(0==l&&p){b(p);return}if(.5==l&&g){b(g);return}if(1==l&&x){b(x);return}b(null),a(!0);let t=await O(e,n,l);0==l&&h(t),.5==l&&f(t),1==l&&y(t),b(t),a(!1)}return(0,s.useEffect)(()=>{a(!1),u(null),b(null)},[t]),(0,s.useEffect)(()=>{c&&j(o)},[l]),(0,i.jsx)(V,{onClick:function(){a(!0),A(t.image).then(e=>{try{let t=e.tags.map(e=>e.name);t.push(e.description.captions[0].text),u(e.description.captions[0].text),d(t),j(t)}catch(n){console.log(n)}finally{}})},alt:"",header:"Azure",suggestion:c,chatGTP:m,loading:r,unsupported:t.image.endsWith(".gif")})};async function K(e,t){try{let n=await fetch("".concat(d,"/suggestions"),{headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization",image:e,authentication:t}}),i=await n.json();return i}catch(l){console.log(l)}}X.propTypes=J,X.defaultProps={src:{current:null}};let Q={src:(0,x.shape)({image:x.string.isRequired,current:x.string}),password:x.string},Y=e=>{let{src:t,password:n,creativity:l}=e,[r,a]=(0,s.useState)(!1),[o,d]=(0,s.useState)(null),[c,u]=(0,s.useState)(null),[p,h]=(0,s.useState)(null),[g,f]=(0,s.useState)(null),[x,y]=(0,s.useState)(null),[m,b]=(0,s.useState)(null);async function j(e){if(0==l&&p){b(p);return}if(.5==l&&g){b(g);return}if(1==l&&x){b(x);return}b(null),a(!0);let t=await O(e,n,l);0==l&&h(t),.5==l&&f(t),1==l&&y(t),b(t),a(!1)}return(0,s.useEffect)(()=>{a(!1),u(null),b(null)},[t]),(0,s.useEffect)(()=>{c&&j(o)},[l]),(0,i.jsx)(V,{onClick:function(){a(!0),K(t.image,n).then(e=>{try{u(e.join(", ")),d(e),j(e)}catch(t){console.log(t)}finally{}})},alt:"",header:"Cloud Vision",suggestion:c,chatGTP:m,loading:r})};Y.propTypes=Q,Y.defaultProps={src:{current:null},password:null};var $=n(629);let ee=(0,y.Z)($.Z)({display:"flex",marginTop:50,boxShadow:"none",background:"#F7F7F7",border:"1px solid #909EB0"}),et=(0,y.Z)("div")({margin:0,flex:1,padding:20,display:"flex",flexDirection:"column",justifyContent:"space-between"}),en=(0,y.Z)("div")({flex:3,marginLeft:20,display:"flex",flexDirection:"column",borderLeft:"1px solid #909EB0"}),ei=(0,y.Z)("div")({borderTop:"1px solid #909EB0",display:"flex",flex:1,alignItems:"center",padding:"20px","&:nth-child(1)":{borderTop:"none"}}),el=(0,y.Z)("div")({fontSize:"18px",lineHeight:"18px",display:"flex",alignItems:"center"}),er={fontSize:18,color:"black",".MuiOutlinedInput-notchedOutline":{borderColor:"rgb(118, 248, 176)"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"rgb(118, 248, 176)"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"rgb(118, 248, 176)"},".MuiSvgIcon-root ":{fill:"black !important"}};var es=n(913),ea=n(7529),eo=n(5819);let ed={image:x.object.isRequired,password:x.string.isRequired,index:x.number.isRequired,total:x.number.isRequired},ec=[{value:"0",label:"Light"},{value:"0.5",label:"Medium"},{value:"1",label:"High"}],eu=e=>{let{image:t,password:n,index:l,total:r}=e,[a,o]=(0,s.useState)(0);return(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:(0,i.jsxs)(ee,{elevation:8,children:[(0,i.jsxs)(et,{children:[(0,i.jsxs)("p",{style:{height:"20px",margin:"0 0 20px 0",fontWeight:"bold"},children:["Image ",l+1]}),(0,i.jsx)("img",{src:t.image,alt:"",style:{width:"100%"}}),(0,i.jsx)("p",{style:{visibility:"hidden",height:"20px",margin:"20px 0 0 0"},children:"3"})]}),(0,i.jsxs)(en,{elevation:8,children:[(0,i.jsxs)(ei,{children:[(0,i.jsxs)("div",{style:{display:"flex",flex:1,justifyContent:"center"},children:[(0,i.jsx)(el,{children:"GPT Creativity Level:"}),(0,i.jsx)(es.Z,{sx:{width:120,marginLeft:2},children:(0,i.jsx)(ea.Z,{labelId:"creativity-select-label",id:"creativity-select",value:a,onChange:function(e){o(e.target.value)},sx:er,children:ec.map(e=>(0,i.jsx)(eo.Z,{value:e.value,children:e.label},e.label))})})]}),(0,i.jsxs)("div",{style:{display:"flex",flex:2,alignItems:"center"},children:[(0,i.jsx)("p",{style:{fontWeight:"bold",paddingLeft:40,minWidth:200},children:"Current Alt Tag: "}),(0,i.jsx)("p",{children:t.current})]})]}),(0,i.jsx)(ei,{children:(0,i.jsx)(X,{src:t,password:n,creativity:a})}),(0,i.jsx)(ei,{children:(0,i.jsx)(Y,{src:t,password:n,creativity:a})})]})]})})};function ep(){let[e,t]=(0,s.useState)(""),[n,l]=(0,s.useState)(""),[a,c]=(0,s.useState)(null),[u,p]=(0,s.useState)(!1),[h,g]=(0,s.useState)(!1);async function f(i){let l;i.preventDefault(),(null==a?void 0:a.length)>0&&c(null),(l=e.startsWith("www")?"https://".concat(e):e.startsWith("https://")?e:"https://".concat(e))!==e&&t(l),p(!0);let r=await fetch("".concat(d,"/generate"),{method:"POST",headers:{"Content-Type":"application/json",authentication:n},body:JSON.stringify({url:l})});if(401===r.status){p(!1),alert("Wrong password");return}g(!0);let s=await r.json();if(0===s.result.length){p(!1),alert("No image tags found");return}c(s.result),p(!1)}return h?(console.log("result",a),(0,i.jsxs)("div",{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Altify - Valtech Future Studio"}),(0,i.jsx)("link",{rel:"icon",href:"/valtechLogo-black.png"})]}),(0,i.jsxs)("main",{className:o().main,children:[(0,i.jsxs)("form",{onSubmit:f,children:[(0,i.jsx)("img",{src:"./valtechLogo-black.png",className:o().icon}),(0,i.jsx)(w,{autoFocus:!0,type:"text",name:"image url",placeholder:"Enter a url",value:e,onChange:function(e){t(e.target.value)},fullWidth:!0}),(0,i.jsx)("input",{disabled:!e,type:"submit",value:"Analyze URL",style:{width:320}})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"80%",marginTop:"20px"},children:[(0,i.jsx)("div",{style:{margin:"0 auto",height:36},children:u&&(0,i.jsx)("div",{className:"loading-bar"})}),(null==a?void 0:a.length)&&(0,i.jsxs)("p",{style:{marginBottom:-20},children:[a.length," Images Detected"]}),Array.isArray(a)&&a.map((e,t)=>(0,i.jsx)(eu,{index:t,image:e,password:n,total:null==a?void 0:a.length},"altify-image-".concat(t)))]})]})]})):(0,i.jsx)(P,{autoFocus:!0,setCorrectPassword:g,handlePasswordChange:function(e){l(e.target.value)},password:n})}eu.propTypes=ed,eu.defaultProps={}},4848:function(e){e.exports={main:"index_main__3wZvj",icon:"index_icon__CgRrC",result:"index_result__66e57"}}},function(e){e.O(0,[288,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);