(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4639)}])},4639:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var s=n(5893),r=n(9008),a=n.n(r),i=n(7294),l=n(2337),o=n(4848),c=n.n(o);let u="https://altify-api.azurewebsites.net";var d=n(7297),p=n(9521);function g(){let e=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n"]);return g=function(){return e},e}function h(){let e=(0,d.Z)(["\n  margin-right: 8px;\n"]);return h=function(){return e},e}let f=p.ZP.p(g()),x=p.ZP.b(h());function m(){let e=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return m=function(){return e},e}let y=p.ZP.div(m()),j=e=>{let{altText:t,index:n,src:r}=e;return(0,s.jsxs)(y,{children:[(0,s.jsxs)(f,{children:[(0,s.jsxs)(x,{children:["#",n,": Current Alt Tag: "]}),(0,s.jsx)("p",{children:t})]}),(0,s.jsx)("a",{style:{wordBreak:"break-all"},href:r,target:"_blank",rel:"noreferrer",children:r})]})};var w=n(5697),v=n(1749),b=n(5036);let C=["ImageType","Faces","Adult","Categories","Color","Tags","Description","Objects","Brands"],T=async e=>e.filter(e=>"text"===e.name.toLowerCase()),P=async e=>e.filter(e=>"handwriting"===e.name.toLowerCase()),S=e=>new Promise(t=>{setTimeout(t,e)});async function _(e){let t=new v.FV(new b.C({inHeader:{"Ocp-Apim-Subscription-Key":"b8de935b3a0b4bafaea5fe58efc98d22"}}),"https://valtech-sd-altify-cv-api.cognitiveservices.azure.com/"),n=await t.analyzeImage(e,{visualFeatures:C});return(T(n.tags)||P(n.tags))&&(n.text=await k(t,e)),{URL:e,...n}}let k=async(e,t)=>{let n=await e.read(t),s=n.operationLocation.split("/").slice(-1)[0],r=Date.now();for(console.log("".concat(r," -").concat(null==n?void 0:n.status," "));"succeeded"!==n.status;)await S(500),console.log("".concat(Date.now()-r," -").concat(null==n?void 0:n.status," ")),n=await e.getReadResult(s);return n.analyzeResult};async function A(e,t){let n=await fetch("".concat(u,"/openAPI"),{method:"POST",headers:{"Content-Type":"application/json",authentication:t},body:JSON.stringify({tags:e})}),s=await n.json();return s.result}function Z(){let e=(0,d.Z)(["\n  padding: 12px 0;\n  color: black;\n  background-color: rgb(118, 248, 176);\n  border: none;\n  border-radius: 4px;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n"]);return Z=function(){return e},e}let N=p.ZP.input(Z()),O=e=>{let{onClick:t,header:n}=e;return(0,s.jsx)(N,{type:"button",value:"Get Suggestion (".concat(n,")"),onClick:t})};function R(){let e=(0,d.Z)(["\n  border-radius: 4px;\n  border: 1px solid #424242;\n  padding: 10px;\n"]);return R=function(){return e},e}function E(){let e=(0,d.Z)(["\n  color: rgb(118, 248, 176);\n  margin: 0,\n  text-align: center;\n"]);return E=function(){return e},e}let z=p.ZP.div(R()),G=p.ZP.h2(E()),L={onClick:w.func.isRequired,header:w.string.isRequired,fetched:w.bool.isRequired,suggestion:w.string,chatGTP:w.string},D=e=>{let{onClick:t,header:n,fetched:r,suggestion:a,chatGTP:i,altText:l}=e;return(0,s.jsx)("div",{style:{marginTop:5},children:r?(0,s.jsxs)(z,{children:[(0,s.jsx)(G,{children:n}),(0,s.jsxs)(f,{children:[(0,s.jsx)(x,{children:"Suggested: "}),a||(0,s.jsx)("span",{className:"loading-bar small"})]}),(0,s.jsxs)(f,{children:[(0,s.jsx)(x,{children:"GPT Suggestion: "}),i||(0,s.jsx)("span",{className:"loading-bar small"})]})]}):(0,s.jsx)(O,{onClick:t,header:n})})};D.propTypes=L,D.defaultProps={suggestion:"",chatGTP:""};let q={src:(0,w.shape)({image:w.string.isRequired,current:w.string})},I=e=>{let{src:t,password:n}=e,[r,a]=(0,i.useState)(!1),[l,o]=(0,i.useState)(null),[c,u]=(0,i.useState)(null);return(0,i.useEffect)(()=>{a(!1),o(null),u(null)},[t]),(0,s.jsx)(D,{src:t,onClick:function(){a(!0),_(t.image).then(async e=>{try{let t=e.tags.map(e=>e.name);t.push(e.description.captions[0].text);let s=await A(t,n);u(s),o(e.description.captions[0].text)}catch(r){console.log(r),a(!1)}})},alt:"",header:"Azure",fetched:r,suggestion:l,chatGTP:c})};async function B(e,t){try{let n=await fetch("".concat(u,"/suggestions"),{headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3030"),"Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization",image:e,authentication:t}}),s=await n.json();return s}catch(r){console.log(r)}}I.propTypes=q,I.defaultProps={src:{current:null}};let W={src:(0,w.shape)({image:w.string.isRequired,current:w.string}),password:w.string},F=e=>{let{src:t,password:n}=e,[r,a]=(0,i.useState)(!1),[l,o]=(0,i.useState)(null),[c,u]=(0,i.useState)(null);return(0,i.useEffect)(()=>{a(!1),o(null),u(null)},[t]),(0,s.jsx)(D,{src:t,onClick:function(){a(!0),B(t.image,n).then(async e=>{try{let t=await A(e,n);u(t),o(e.join(", "))}catch(s){console.log(s),a(!1)}})},alt:"",header:"Cloud Vision",fetched:r,suggestion:l,chatGTP:c})};F.propTypes=W,F.defaultProps={src:{current:null},password:null};let H={name:w.string,onChange:w.func,placeholder:w.string,type:w.string,value:w.string,disabled:w.bool},J=e=>{let{name:t,onChange:n,placeholder:r,type:a,value:i,disabled:l}=e;return(0,s.jsx)("input",{type:a,disabled:l,name:t,placeholder:r,value:i,onChange:n})};function U(){let[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)(""),[o,d]=(0,i.useState)(null),[p,g]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1),[x,m]=(0,i.useState)(0),y=0;async function w(t){t.preventDefault(),x>0&&d(null),g(!0);let s=await fetch("".concat(u,"/generate"),{method:"POST",headers:{"Content-Type":"application/json",authentication:n},body:JSON.stringify({url:e})});if(401===s.status){g(!1),alert("Wrong password");return}f(!0);let r=await s.json();if(0===r.result.length){g(!1),alert("No images found");return}d(r.result),g(!1)}return(0,i.useEffect)(()=>{let e=null==o?void 0:o.filter(e=>{var t;return null===(t=e.src)||void 0===t?void 0:t.endsWith(".svg")});m((null==o?void 0:o.length)-(null==e?void 0:e.length)||0)},[o]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"OpenAI Quickstart"}),(0,s.jsx)("link",{rel:"icon",href:"/valtechLogo-black.png"})]}),(0,s.jsxs)("main",{className:c().main,children:[(0,s.jsxs)("form",{onSubmit:w,children:[(0,s.jsx)("img",{src:"./valtechLogo-black.png",className:c().icon}),(0,s.jsx)(J,{type:"text",name:"image url",placeholder:"Enter a url",value:e,onChange:function(e){t(e.target.value)}}),(0,s.jsx)(J,{type:"password",disabled:h,name:"password",placeholder:"Enter the password",value:n,onChange:function(e){r(e.target.value)}}),(0,s.jsx)("input",{disabled:!n||!e,type:"submit",value:"Analyze URL"}),(0,s.jsxs)("p",{children:["Images found: ",x]})]}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"80%",marginTop:"20px"},children:[(0,s.jsx)("div",{style:{margin:"0 auto"},children:p&&(0,s.jsx)("div",{className:"loading-bar"})}),o&&(0,s.jsx)(l.G,{columnsCountBreakPoints:{350:1,750:2,900:3},children:(0,s.jsx)(l.Z,{gutter:"1.5rem",children:Array.isArray(o)&&o.map((e,t)=>{var r;return(null===(r=e.src)||void 0===r?void 0:r.endsWith(".svg"))?void 0:(y++,(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)("img",{src:e.image,alt:"",style:{width:"100%"}}),(0,s.jsx)(j,{altText:e.current,index:y,src:e.src}),(0,s.jsx)(I,{src:e,password:n}),(0,s.jsx)(F,{src:e,password:n})]},"altify-image-".concat(t)))})})})]})]})]})}J.propTypes=H,J.defaultProps={name:"",onChange(){},placeholder:"",type:"text",value:"",disabled:!1}},4848:function(e){e.exports={main:"index_main__3wZvj",icon:"index_icon__CgRrC",result:"index_result__66e57"}}},function(e){e.O(0,[828,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);