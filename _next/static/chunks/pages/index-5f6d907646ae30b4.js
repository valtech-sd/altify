(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4411)}])},4411:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var i=n(5893),s=n(9008),r=n.n(s),a=n(7294),l=n(2337),c=n(4848),o=n.n(c);let u="https://altify-api.azurewebsites.net";var d=n(7297),p=n(9521);function g(){let e=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n"]);return g=function(){return e},e}function h(){let e=(0,d.Z)(["\n  margin-right: 8px;\n"]);return h=function(){return e},e}let f=p.ZP.p(g()),x=p.ZP.b(h());function m(){let e=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return m=function(){return e},e}let j=p.ZP.div(m()),y=e=>{let{altText:t}=e;return(0,i.jsx)(j,{children:(0,i.jsxs)(f,{children:[(0,i.jsx)(x,{children:"Provided Alt Text: "}),t]})})};var w=n(5697),b=n(1749),v=n(5036);let C=["ImageType","Faces","Adult","Categories","Color","Tags","Description","Objects","Brands"],T=async e=>e.filter(e=>"text"===e.name.toLowerCase()),P=async e=>e.filter(e=>"handwriting"===e.name.toLowerCase()),_=e=>new Promise(t=>{setTimeout(t,e)});async function S(e){let t=new b.FV(new v.C({inHeader:{"Ocp-Apim-Subscription-Key":"b8de935b3a0b4bafaea5fe58efc98d22"}}),"https://valtech-sd-altify-cv-api.cognitiveservices.azure.com/"),n=await t.analyzeImage(e,{visualFeatures:C});return(T(n.tags)||P(n.tags))&&(n.text=await A(t,e)),{URL:e,...n}}let A=async(e,t)=>{let n=await e.read(t),i=n.operationLocation.split("/").slice(-1)[0],s=Date.now();for(console.log("".concat(s," -").concat(null==n?void 0:n.status," "));"succeeded"!==n.status;)await _(500),console.log("".concat(Date.now()-s," -").concat(null==n?void 0:n.status," ")),n=await e.getReadResult(i);return n.analyzeResult};async function k(e){let t=await fetch("".concat(u,"/openAPI"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tags:e})}),n=await t.json();return n.result}function Z(){let e=(0,d.Z)(["\n  padding: 12px 0;\n  color: black;\n  background-color: rgb(118, 248, 176);\n  border: none;\n  border-radius: 4px;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n"]);return Z=function(){return e},e}let N=p.ZP.input(Z()),O=e=>{let{onClick:t,header:n}=e;return(0,i.jsx)(N,{type:"button",value:"Get Suggestion (".concat(n,")"),onClick:t})};function R(){let e=(0,d.Z)(["\n  border-radius: 4px;\n  border: 1px solid #424242;\n  padding: 10px;\n"]);return R=function(){return e},e}function E(){let e=(0,d.Z)(["\n  color: rgb(118, 248, 176);\n  margin: 0,\n  text-align: center;\n"]);return E=function(){return e},e}let z=p.ZP.div(R()),G=p.ZP.h2(E()),L={onClick:w.func.isRequired,header:w.string.isRequired,fetched:w.bool.isRequired,suggestion:w.string,chatGTP:w.string},D=e=>{let{onClick:t,header:n,fetched:s,suggestion:r,chatGTP:a,altText:l}=e;return(0,i.jsx)("div",{style:{marginTop:5},children:s?(0,i.jsxs)(z,{children:[(0,i.jsx)(G,{children:n}),(0,i.jsxs)(f,{children:[(0,i.jsx)(x,{children:"Suggested: "}),r||(0,i.jsx)("span",{className:"loading-bar small"})]}),(0,i.jsxs)(f,{children:[(0,i.jsx)(x,{children:"GPT Suggestion: "}),a||(0,i.jsx)("span",{className:"loading-bar small"})]})]}):(0,i.jsx)(O,{onClick:t,header:n})})};D.propTypes=L,D.defaultProps={suggestion:"",chatGTP:""};let q={src:(0,w.shape)({image:w.string.isRequired,current:w.string})},I=e=>{let{src:t}=e,[n,s]=(0,a.useState)(!1),[r,l]=(0,a.useState)(null),[c,o]=(0,a.useState)(null);return(0,a.useEffect)(()=>{s(!1),l(null),o(null)},[t]),(0,i.jsx)(D,{src:t,onClick:function(){s(!0),S(t.image).then(async e=>{try{let t=e.tags.map(e=>e.name);t.push(e.description.captions[0].text);let n=await k(t);o(n),l(e.description.captions[0].text)}catch(i){console.log(i),s(!1)}})},alt:"",header:"Azure",fetched:n,suggestion:r,chatGTP:c})};async function B(e){try{let t=await fetch("".concat(u,"/suggestions"),{headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3030"),"Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization",image:e}}),n=await t.json();return n}catch(i){console.log(i)}}I.propTypes=q,I.defaultProps={src:{current:null}};let F={src:(0,w.shape)({image:w.string.isRequired,current:w.string})},H=e=>{let{src:t}=e,[n,s]=(0,a.useState)(!1),[r,l]=(0,a.useState)(null),[c,o]=(0,a.useState)(null);return(0,a.useEffect)(()=>{s(!1),l(null),o(null)},[t]),(0,i.jsx)(D,{src:t,onClick:function(){s(!0),B(t.image).then(async e=>{try{let t=await k(e);o(t),l(e.join(", "))}catch(n){console.log(n),s(!1)}})},alt:"",header:"Cloud Vision",fetched:n,suggestion:r,chatGTP:c})};function J(){let[e,t]=(0,a.useState)(""),[n,s]=(0,a.useState)(),[c,d]=(0,a.useState)(!1);async function p(t){t.preventDefault(),d(!0);let n=await fetch("".concat(u,"/generate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}),i=await n.json();s(i.result),d(!1)}return(0,i.jsxs)("div",{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"OpenAI Quickstart"}),(0,i.jsx)("link",{rel:"icon",href:"/valtechLogo-black.png"})]}),(0,i.jsxs)("main",{className:o().main,children:[(0,i.jsxs)("form",{onSubmit:p,children:[(0,i.jsx)("img",{src:"./valtechLogo-black.png",className:o().icon}),(0,i.jsx)("input",{type:"text",name:"image url",placeholder:"Enter an url",value:e,onChange:e=>t(e.target.value)}),(0,i.jsx)("input",{type:"submit",value:"Analize URL"})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"80%",marginTop:"20px"},children:[(0,i.jsx)("div",{style:{margin:"0 auto"},children:c&&(0,i.jsx)("div",{className:"loading-bar"})}),n&&(0,i.jsx)(l.G,{columnsCountBreakPoints:{350:1,750:2,900:3},children:(0,i.jsx)(l.Z,{gutter:"1.5rem",children:Array.isArray(n)&&n.map((e,t)=>(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)("img",{src:e.image,alt:"",style:{width:"100%"}}),(0,i.jsx)(y,{altText:e.current}),(0,i.jsx)(I,{src:e}),(0,i.jsx)(H,{src:e})]},"altify-image-".concat(t)))})})]})]})]})}H.propTypes=F,H.defaultProps={src:{current:null}}},4848:function(e){e.exports={main:"index_main__3wZvj",icon:"index_icon__CgRrC",result:"index_result__66e57"}}},function(e){e.O(0,[828,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);