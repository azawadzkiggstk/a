!function(){var e,t={44943:function(e,t,r){"use strict";var n=window.wp.i18n,o=window.wp.element,a=(0,o.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{fill:"#1e1e1e",d:"M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"})),l=r(94184),c=r.n(l),s=window.wp.blockEditor;const i={"subtle-light-gray":"#f3f4f5","subtle-pale-green":"#e9fbe5","subtle-pale-blue":"#e7f5fe","subtle-pale-pink":"#fcf0ef"};var u=[{attributes:{hasFixedLayout:{type:"boolean",default:!1},backgroundColor:{type:"string"},caption:{type:"string",source:"html",selector:"figcaption",default:""},head:{type:"array",default:[],source:"query",selector:"thead tr",query:{cells:{type:"array",default:[],source:"query",selector:"td,th",query:{content:{type:"string",source:"html"},tag:{type:"string",default:"td",source:"tag"},scope:{type:"string",source:"attribute",attribute:"scope"},align:{type:"string",source:"attribute",attribute:"data-align"}}}}},body:{type:"array",default:[],source:"query",selector:"tbody tr",query:{cells:{type:"array",default:[],source:"query",selector:"td,th",query:{content:{type:"string",source:"html"},tag:{type:"string",default:"td",source:"tag"},scope:{type:"string",source:"attribute",attribute:"scope"},align:{type:"string",source:"attribute",attribute:"data-align"}}}}},foot:{type:"array",default:[],source:"query",selector:"tfoot tr",query:{cells:{type:"array",default:[],source:"query",selector:"td,th",query:{content:{type:"string",source:"html"},tag:{type:"string",default:"td",source:"tag"},scope:{type:"string",source:"attribute",attribute:"scope"},align:{type:"string",source:"attribute",attribute:"data-align"}}}}}},supports:{anchor:!0,align:!0,__experimentalSelector:".wp-block-table > table"},save:e=>{let{attributes:t}=e;const{hasFixedLayout:r,head:n,body:a,foot:l,backgroundColor:i,caption:u}=t;if(!n.length&&!a.length&&!l.length)return null;const p=(0,s.getColorClassName)("background-color",i),m=c()(p,{"has-fixed-layout":r,"has-background":!!p}),d=!s.RichText.isEmpty(u),g=e=>{let{type:t,rows:r}=e;if(!r.length)return null;const n=`t${t}`;return(0,o.createElement)(n,null,r.map(((e,t)=>{let{cells:r}=e;return(0,o.createElement)("tr",{key:t},r.map(((e,t)=>{let{content:r,tag:n,scope:a,align:l}=e;const i=c()({[`has-text-align-${l}`]:l});return(0,o.createElement)(s.RichText.Content,{className:i||void 0,"data-align":l,tagName:n,value:r,key:t,scope:"th"===n?a:void 0})})))})))};return(0,o.createElement)("figure",s.useBlockProps.save(),(0,o.createElement)("table",{className:""===m?void 0:m},(0,o.createElement)(g,{type:"head",rows:n}),(0,o.createElement)(g,{type:"body",rows:a}),(0,o.createElement)(g,{type:"foot",rows:l})),d&&(0,o.createElement)(s.RichText.Content,{tagName:"figcaption",value:u}))},isEligible:e=>e.backgroundColor&&e.backgroundColor in i&&!e.style,migrate:e=>({...e,backgroundColor:void 0,style:{color:{background:i[e.backgroundColor]}}})},{attributes:{hasFixedLayout:{type:"boolean",default:!1},backgroundColor:{type:"string"},head:{type:"array",default:[],source:"query",selector:"thead tr",query:{cells:{type:"array",default:[],source:"query",selector:"td,th",query:{content:{type:"string",source:"html"},tag:{type:"string",default:"td",source:"tag"},scope:{type:"string",source:"attribute",attribute:"scope"}}}}},body:{type:"array",default:[],source:"query",selector:"tbody tr",query:{cells:{type:"array",default:[],source:"query",selector:"td,th",query:{content:{type:"string",source:"html"},tag:{type:"string",default:"td",source:"tag"},scope:{type:"string",source:"attribute",attribute:"scope"}}}}},foot:{type:"array",default:[],source:"query",selector:"tfoot tr",query:{cells:{type:"array",default:[],source:"query",selector:"td,th",query:{content:{type:"string",source:"html"},tag:{type:"string",default:"td",source:"tag"},scope:{type:"string",source:"attribute",attribute:"scope"}}}}}},supports:{align:!0},save(e){let{attributes:t}=e;const{hasFixedLayout:r,head:n,body:a,foot:l,backgroundColor:i}=t;if(!n.length&&!a.length&&!l.length)return null;const u=(0,s.getColorClassName)("background-color",i),p=c()(u,{"has-fixed-layout":r,"has-background":!!u}),m=e=>{let{type:t,rows:r}=e;if(!r.length)return null;const n=`t${t}`;return(0,o.createElement)(n,null,r.map(((e,t)=>{let{cells:r}=e;return(0,o.createElement)("tr",{key:t},r.map(((e,t)=>{let{content:r,tag:n,scope:a}=e;return(0,o.createElement)(s.RichText.Content,{tagName:n,value:r,key:t,scope:"th"===n?a:void 0})})))})))};return(0,o.createElement)("table",{className:p},(0,o.createElement)(m,{type:"head",rows:n}),(0,o.createElement)(m,{type:"body",rows:a}),(0,o.createElement)(m,{type:"foot",rows:l}))}}],p=window.wp.components,m=window.wp.primitives,d=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"})),g=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"})),h=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"})),y=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(m.Path,{d:"M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"})),f=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(m.Path,{d:"M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"})),v=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(m.Path,{d:"M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"})),b=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(m.Path,{d:"M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"})),w=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(m.Path,{d:"M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"})),x=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(m.Path,{d:"M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"})),E=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M4 6v11.5h16V6H4zm1.5 1.5h6V11h-6V7.5zm0 8.5v-3.5h6V16h-6zm13 0H13v-3.5h5.5V16zM13 11V7.5h5.5V11H13z"})),_=window.wp.blocks,k=window.lodash;const V=["align"];function C(e,t,r){if(!t)return e;const n=(0,k.pick)(e,["head","body","foot"]),{sectionName:o,rowIndex:a}=t;return(0,k.mapValues)(n,((e,n)=>o&&o!==n?e:e.map(((e,o)=>a&&a!==o?e:{cells:e.cells.map(((e,a)=>function(e,t){if(!e||!t)return!1;switch(t.type){case"column":return"column"===t.type&&e.columnIndex===t.columnIndex;case"cell":return"cell"===t.type&&e.sectionName===t.sectionName&&e.columnIndex===t.columnIndex&&e.rowIndex===t.rowIndex}}({sectionName:n,columnIndex:a,rowIndex:o},t)?r(e):e))}))))}function z(e,t){let{sectionName:r,rowIndex:n,columnCount:o}=t;const a=function(e){return N(e.head)?N(e.body)?N(e.foot)?void 0:e.foot[0]:e.body[0]:e.head[0]}(e),l=void 0===o?(0,k.get)(a,["cells","length"]):o;return l?{[r]:[...e[r].slice(0,n),{cells:Array.from({length:l}).map(((e,t)=>{const n=(0,k.get)(a,["cells",t],{});return{...(0,k.pick)(n,V),content:"",tag:"head"===r?"th":"td"}}))},...e[r].slice(n)]}:e}function H(e,t){return N(e[t])?z(e,{sectionName:t,rowIndex:0,columnCount:(0,k.get)(e,["body",0,"cells","length"],1)}):{[t]:[]}}function N(e){return!e||!e.length||e.every(S)}function S(e){return!(e.cells&&e.cells.length)}const I=[{icon:d,title:(0,n.__)("Align column left"),align:"left"},{icon:h,title:(0,n.__)("Align column center"),align:"center"},{icon:g,title:(0,n.__)("Align column right"),align:"right"}],F={head:(0,n.__)("Header cell text"),body:(0,n.__)("Body cell text"),foot:(0,n.__)("Footer cell text")},j={head:(0,n.__)("Header label"),foot:(0,n.__)("Footer label")};function O(e){let{name:t,...r}=e;const n=`t${t}`;return(0,o.createElement)(n,r)}var q=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/table","title":"Table","category":"text","description":"Create structured content in rows and columns to display information.","textdomain":"default","attributes":{"hasFixedLayout":{"type":"boolean","default":false},"caption":{"type":"string","source":"html","selector":"figcaption","default":""},"head":{"type":"array","default":[],"source":"query","selector":"thead tr","query":{"cells":{"type":"array","default":[],"source":"query","selector":"td,th","query":{"content":{"type":"string","source":"html"},"tag":{"type":"string","default":"td","source":"tag"},"scope":{"type":"string","source":"attribute","attribute":"scope"},"align":{"type":"string","source":"attribute","attribute":"data-align"}}}}},"body":{"type":"array","default":[],"source":"query","selector":"tbody tr","query":{"cells":{"type":"array","default":[],"source":"query","selector":"td,th","query":{"content":{"type":"string","source":"html"},"tag":{"type":"string","default":"td","source":"tag"},"scope":{"type":"string","source":"attribute","attribute":"scope"},"align":{"type":"string","source":"attribute","attribute":"data-align"}}}}},"foot":{"type":"array","default":[],"source":"query","selector":"tfoot tr","query":{"cells":{"type":"array","default":[],"source":"query","selector":"td,th","query":{"content":{"type":"string","source":"html"},"tag":{"type":"string","default":"td","source":"tag"},"scope":{"type":"string","source":"attribute","attribute":"scope"},"align":{"type":"string","source":"attribute","attribute":"data-align"}}}}}},"supports":{"anchor":true,"align":true,"color":{"__experimentalSkipSerialization":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalBorder":{"__experimentalSkipSerialization":true,"color":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"style":true,"width":true}},"__experimentalSelector":".wp-block-table > table"},"styles":[{"name":"regular","label":"Default","isDefault":true},{"name":"stripes","label":"Stripes"}],"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');const B=e=>{let{phrasingContentSchema:t}=e;return{tr:{allowEmpty:!0,children:{th:{allowEmpty:!0,children:t,attributes:["scope"]},td:{allowEmpty:!0,children:t}}}}};var M={from:[{type:"raw",selector:"table",schema:e=>({table:{children:{thead:{allowEmpty:!0,children:B(e)},tfoot:{allowEmpty:!0,children:B(e)},tbody:{allowEmpty:!0,children:B(e)}}}})}]};function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}function P(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=P(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var T=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=P(e))&&(n&&(n+=" "),n+=t);return n};function $(e){const{tag:t="div",className:r,children:n,...a}=e;return(0,o.createElement)(t,{className:T("skeleton",r),...a},[n,(0,o.createElement)("span",{key:"skeleton-activity",className:"skeleton__activity"},(0,o.createElement)("span",null))])}$.Inline=function(e){return(0,o.createElement)($,A({tag:"span"},e))},$.Text=function(e){const{tag:t="div",children:r,...n}=e,a=[r].flat().filter((e=>"string"==typeof e)).map((e=>e.split(" ").map(((e,t)=>(0,o.createElement)(o.Fragment,{key:t},(0,o.createElement)($.Inline,n,e)," ")))));return(0,o.createElement)(t,{},a.flat())},r(17563),window.wp.keycodes;var R=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),D=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),G=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),L=(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),U=window.wp.data,J=window.wp.hooks;(0,o.createElement)(p.Icon,{icon:R}),(0,o.createElement)(p.Icon,{icon:D}),(0,o.createElement)(p.Icon,{icon:G}),(0,o.createElement)(p.Icon,{icon:L}),(0,o.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(m.Path,{d:"M15.742 7.009a2.823 2.823 0 0 0-1.351-1.039 4.492 4.492 0 0 0-1.753-.345 4.692 4.692 0 0 0-1.076.123 3.075 3.075 0 0 0-.927.396 2.088 2.088 0 0 0-.65.716c-.166.28-.25.618-.25 1.013 0 .593.208 1.046.626 1.36.417.312.934.584 1.551.815a29.17 29.17 0 0 0 2.028.667c.734.214 1.41.51 2.028.89a4.984 4.984 0 0 1 1.551 1.507c.418.626.626 1.458.626 2.496 0 .938-.175 1.762-.526 2.47a4.998 4.998 0 0 1-1.426 1.73 6.001 6.001 0 0 1-2.053 1.038c-.785.23-1.61.346-2.478.346a9.407 9.407 0 0 1-3.179-.544c-1.018-.362-1.894-.972-2.628-1.828l2.378-2.274a4.085 4.085 0 0 0 1.502 1.36 4.466 4.466 0 0 0 2.002.468c.367 0 .735-.049 1.101-.147a3.428 3.428 0 0 0 1.002-.445 2.38 2.38 0 0 0 .725-.741 2.061 2.061 0 0 0 .276-1.063c0-.643-.208-1.137-.626-1.483-.417-.346-.934-.634-1.552-.864a22.188 22.188 0 0 0-2.028-.693 8.923 8.923 0 0 1-2.026-.864 5.092 5.092 0 0 1-1.553-1.482c-.417-.627-.625-1.458-.625-2.496 0-.906.184-1.689.55-2.347A5.17 5.17 0 0 1 8.46 4.118a6.481 6.481 0 0 1 2.102-.99 9.079 9.079 0 0 1 2.403-.32c.934 0 1.835.14 2.703.42.884.28 1.677.741 2.377 1.384l-2.302 2.397z"}));const{name:W}=q;var K,Q,X;K=W,Q=q,X={icon:a,example:{attributes:{head:[{cells:[{content:(0,n.__)("Version"),tag:"th"},{content:(0,n.__)("Jazz Musician"),tag:"th"},{content:(0,n.__)("Release Date"),tag:"th"}]}],body:[{cells:[{content:"5.2",tag:"td"},{content:"Jaco Pastorius",tag:"td"},{content:(0,n.__)("May 7, 2019"),tag:"td"}]},{cells:[{content:"5.1",tag:"td"},{content:"Betty Carter",tag:"td"},{content:(0,n.__)("February 21, 2019"),tag:"td"}]},{cells:[{content:"5.0",tag:"td"},{content:"Bebo Valdés",tag:"td"},{content:(0,n.__)("December 6, 2018"),tag:"td"}]}]}},transforms:M,edit:function(e){let{attributes:t,setAttributes:r,insertBlocksAfter:l,isSelected:i}=e;const{hasFixedLayout:u,caption:m,head:d,foot:g}=t,[h,V]=(0,o.useState)(2),[q,B]=(0,o.useState)(2),[M,A]=(0,o.useState)(),P=(0,s.__experimentalUseColorProps)(t),T=(0,s.__experimentalUseBorderProps)(t),$=(0,o.useRef)(),[R,D]=(0,o.useState)(!1);function G(e){M&&r(C(t,M,(t=>({...t,content:e}))))}function L(e){if(!M)return;const{sectionName:n,rowIndex:o}=M,a=o+e;r(z(t,{sectionName:n,rowIndex:a})),A({sectionName:n,rowIndex:a,columnIndex:0,type:"cell"})}function U(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!M)return;const{columnIndex:n}=M,o=n+e;r(function(e,t){let{columnIndex:r}=t;const n=(0,k.pick)(e,["head","body","foot"]);return(0,k.mapValues)(n,((e,t)=>N(e)?e:e.map((e=>S(e)||e.cells.length<r?e:{cells:[...e.cells.slice(0,r),{content:"",tag:"head"===t?"th":"td"},...e.cells.slice(r)]}))))}(t,{columnIndex:o})),A({rowIndex:0,columnIndex:o,type:"cell"})}(0,o.useEffect)((()=>{i||A()}),[i]),(0,o.useEffect)((()=>{R&&($?.current?.querySelector('td[contentEditable="true"]')?.focus(),D(!1))}),[R]);const J=["head","body","foot"].filter((e=>!N(t[e]))),W=[{icon:w,title:(0,n.__)("Insert row before"),isDisabled:!M,onClick:function(){L(0)}},{icon:b,title:(0,n.__)("Insert row after"),isDisabled:!M,onClick:function(){L(1)}},{icon:x,title:(0,n.__)("Delete row"),isDisabled:!M,onClick:function(){if(!M)return;const{sectionName:e,rowIndex:n}=M;A(),r(function(e,t){let{sectionName:r,rowIndex:n}=t;return{[r]:e[r].filter(((e,t)=>t!==n))}}(t,{sectionName:e,rowIndex:n}))}},{icon:f,title:(0,n.__)("Insert column before"),isDisabled:!M,onClick:function(){U(0)}},{icon:y,title:(0,n.__)("Insert column after"),isDisabled:!M,onClick:function(){U(1)}},{icon:v,title:(0,n.__)("Delete column"),isDisabled:!M,onClick:function(){if(!M)return;const{sectionName:e,columnIndex:n}=M;A(),r(function(e,t){let{columnIndex:r}=t;const n=(0,k.pick)(e,["head","body","foot"]);return(0,k.mapValues)(n,(e=>N(e)?e:e.map((e=>({cells:e.cells.length>=r?e.cells.filter(((e,t)=>t!==r)):e.cells}))).filter((e=>e.cells.length))))}(t,{sectionName:e,columnIndex:n}))}}],K=["head","body","foot"].map((e=>(0,o.createElement)(O,{name:e,key:e},t[e].map(((t,r)=>{let{cells:n}=t;return(0,o.createElement)("tr",{key:r},n.map(((t,n)=>{let{content:a,tag:l,scope:i,align:u}=t;return(0,o.createElement)(s.RichText,{tagName:l,key:n,className:c()({[`has-text-align-${u}`]:u},"wp-block-table__cell-content"),scope:"th"===l?i:void 0,value:a,onChange:G,unstableOnFocus:()=>{A({sectionName:e,rowIndex:r,columnIndex:n,type:"cell"})},"aria-label":F[e],placeholder:j[e]})})))}))))),Q=!J.length;return(0,o.createElement)("figure",(0,s.useBlockProps)({ref:$}),!Q&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.BlockControls,{group:"block"},(0,o.createElement)(s.AlignmentControl,{label:(0,n.__)("Change column alignment"),alignmentControls:I,value:function(){if(M)return function(e,t,r){const{sectionName:n,rowIndex:o,columnIndex:a}=t;return(0,k.get)(e,[n,o,"cells",a,"align"])}(t,M)}(),onChange:e=>function(e){if(!M)return;const n={type:"column",columnIndex:M.columnIndex},o=C(t,n,(t=>({...t,align:e})));r(o)}(e)})),(0,o.createElement)(s.BlockControls,{group:"other"},(0,o.createElement)(p.ToolbarDropdownMenu,{hasArrowIndicator:!0,icon:E,label:(0,n.__)("Edit table"),controls:W}))),!Q&&(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(p.PanelBody,{title:(0,n.__)("Settings"),className:"blocks-table-settings"},(0,o.createElement)(p.ToggleControl,{label:(0,n.__)("Fixed width table cells"),checked:!!u,onChange:function(){r({hasFixedLayout:!u})}}),(0,o.createElement)(p.ToggleControl,{label:(0,n.__)("Header section"),checked:!(!d||!d.length),onChange:function(){r(H(t,"head"))}}),(0,o.createElement)(p.ToggleControl,{label:(0,n.__)("Footer section"),checked:!(!g||!g.length),onChange:function(){r(H(t,"foot"))}}))),!Q&&(0,o.createElement)("table",{className:c()(P.className,T.className,{"has-fixed-layout":u,"has-individual-borders":(0,p.__experimentalHasSplitBorders)(t?.style?.border)}),style:{...P.style,...T.style}},K),!Q&&(0,o.createElement)(s.RichText,{tagName:"figcaption",className:(0,s.__experimentalGetElementClassName)("caption"),"aria-label":(0,n.__)("Table caption text"),placeholder:(0,n.__)("Add caption"),value:m,onChange:e=>r({caption:e}),unstableOnFocus:()=>A(),__unstableOnSplitAtEnd:()=>l((0,_.createBlock)((0,_.getDefaultBlockName)()))}),Q&&(0,o.createElement)(p.Placeholder,{label:(0,n.__)("Table"),icon:(0,o.createElement)(s.BlockIcon,{icon:a,showColors:!0}),instructions:(0,n.__)("Insert a table for sharing data.")},(0,o.createElement)("form",{className:"blocks-table__placeholder-form",onSubmit:function(e){e.preventDefault(),r(function(e){let{rowCount:t,columnCount:r}=e;return{body:Array.from({length:t}).map((()=>({cells:Array.from({length:r}).map((()=>({content:"",tag:"td"})))})))}}({rowCount:parseInt(h,10)||2,columnCount:parseInt(q,10)||2})),D(!0)}},(0,o.createElement)(p.TextControl,{type:"number",label:(0,n.__)("Column count"),value:q,onChange:function(e){B(e)},min:"1",className:"blocks-table__placeholder-input"}),(0,o.createElement)(p.TextControl,{type:"number",label:(0,n.__)("Row count"),value:h,onChange:function(e){V(e)},min:"1",className:"blocks-table__placeholder-input"}),(0,o.createElement)(p.Button,{className:"blocks-table__placeholder-button",variant:"primary",type:"submit"},(0,n.__)("Create Table")))))},save:function(e){let{attributes:t}=e;const{hasFixedLayout:r,head:n,body:a,foot:l,caption:i}=t;if(!n.length&&!a.length&&!l.length)return null;const u=(0,s.__experimentalGetColorClassesAndStyles)(t),p=(0,s.__experimentalGetBorderClassesAndStyles)(t),m=c()(u.className,p.className,{"has-fixed-layout":r}),d=!s.RichText.isEmpty(i),g=e=>{let{type:t,rows:r}=e;if(!r.length)return null;const n=`t${t}`;return(0,o.createElement)(n,null,r.map(((e,t)=>{let{cells:r}=e;return(0,o.createElement)("tr",{key:t},r.map(((e,t)=>{let{content:r,tag:n,scope:a,align:l}=e;const i=c()({[`has-text-align-${l}`]:l});return(0,o.createElement)(s.RichText.Content,{className:i||void 0,"data-align":l,tagName:n,value:r,key:t,scope:"th"===n?a:void 0})})))})))};return(0,o.createElement)("figure",s.useBlockProps.save(),(0,o.createElement)("table",{className:""===m?void 0:m,style:{...u.style,...p.style}},(0,o.createElement)(g,{type:"head",rows:n}),(0,o.createElement)(g,{type:"body",rows:a}),(0,o.createElement)(g,{type:"foot",rows:l})),d&&(0,o.createElement)(s.RichText.Content,{tagName:"figcaption",value:i,className:(0,s.__experimentalGetElementClassName)("caption")}))},deprecated:u},(0,J.addFilter)("blocks.registerBlockType",`statik/override/${K}`,((e,t,r)=>t===K&&(0,k.isNil)(r)?((0,U.select)("statik").getOverriddenBlocks().includes(K)||(0,U.dispatch)("statik").addOverriddenBlock(K),(0,k.merge)({},e,Q,X)):e))},94184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var l=Object.keys(t),c=0;c<l.length;c++){var s=l[c];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var l=n[a],c=e[l];(o?-1!==t.indexOf(l):t(l,c,e))&&(r[l]=c)}return r}},17563:function(e,t,r){"use strict";const n=r(70610),o=r(44020),a=r(80500),l=r(92806),c=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function m(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const l=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=l};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,l]=a(t.decode?o.replace(/\+/g," "):o,"=");l=void 0===l?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?l:u(l,t),r(u(e,t),l,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=g(r[e],t);else n[e]=g(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=d,t.parse=h,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[",o,"]"].join("")]:[...r,[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[]"].join("")]:[...r,[i(t,e),"[]=",i(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),":list="].join("")]:[...r,[i(t,e),":list=",i(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[i(r,e),t,i(o,e)].join("")]:[[n,i(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,i(t,e)]:[...r,[i(t,e),"=",i(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?i(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?i(r,t)+"[]":o.reduce(n(r),[]).join("&"):i(r,t)+"="+i(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:h(d(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);const n=m(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),l=Object.assign(a,e.query);let s=t.stringify(l,r);s&&(s=`?${s}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[c]?i(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${s}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:l(a,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},80500:function(e){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<l&&(l=a));if(c){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={5867:0,6056:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,l=r[0],c=r[1],s=r[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(r);i<l.length;i++)a=l[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkroot=self.webpackChunkroot||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[6056],(function(){return n(44943)}));o=n.O(o)}();