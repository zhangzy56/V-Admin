import{r as u,o as p,c as w,w as i,a as r,b as l,d as m}from"./index-18b1401e.js";function b(n,a,d){const s=new Blob([n],{type:d||"application/octet-stream"}),e=window.URL.createObjectURL(s),t=document.createElement("a");t.style.display="none",t.href=e,t.setAttribute("download",a),typeof t.download>"u"&&t.setAttribute("target","_blank"),document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(e)}function h(n,a){return new Promise((d,s)=>{let e=document.createElement("CANVAS");const t=e.getContext("2d"),o=new Image;o.crossOrigin="",o.onload=function(){if(!e||!t)return s();e.height=o.height,e.width=o.width,t.drawImage(o,0,0);const c=e.toDataURL(a||"image/png");e=null,d(c)},o.src=n})}function y(n){const a=n.split(","),s=a[0].match(/:(.*?);/)[1],e=window.atob(a[1]);let t=e.length;const o=new Uint8Array(t);for(;t--;)o[t]=e.charCodeAt(t);return new Blob([o],{type:s})}function g(n,a,d,s){const e=typeof s<"u"?[s,n]:[n],t=new Blob(e,{type:d||"application/octet-stream"}),o=window.URL.createObjectURL(t),c=document.createElement("a");c.style.display="none",c.href=o,c.setAttribute("download",a),typeof c.download>"u"&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(o)}function x(n,a,d,s){const e=y(n);g(e,a,d,s)}function U(n,a,d,s){a||(a=n.slice(n.lastIndexOf("/")+1)),h(n).then(e=>{x(e,a,d,s)})}function _({url:n,target:a="_self",fileName:d}){const s=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,e=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return console.error("Your browser does not support download!"),!1;if(s||e){const t=document.createElement("a");if(t.href=n,t.target=a,t.download!==void 0&&(t.download=d||n.substring(n.lastIndexOf("/")+1,n.length)),document.createEvent){const o=document.createEvent("MouseEvents");return o.initEvent("click",!0,!0),t.dispatchEvent(o),!0}}return n.indexOf("?")===-1&&(n+="?download"),openWindow(n,{target:a}),!0}const k={__name:"index",setup(n){function a(){const e="https://pure-admin.github.io/pure-admin-doc/pdf/Cookie%E5%92%8CSession%E5%8C%BA%E5%88%AB%E7%94%A8%E6%B3%95.pdf";m({method:"GET",url:e,responseType:"blob",withCredentials:!1}).then(t=>{const o=e.lastIndexOf(".")+1,f=`\u6587\u4EF6.${e.substring(o)}`;b(t.data,f,t.headers["content-type"])}).catch(t=>{console.log("err",t)})}function d(){U("https://img0.baidu.com/it/u=3906269906,2494252993&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500","corgi.png")}function s(){_({url:"http://cdn.sckaiwu.cn/saas/uploads/2023-03/8bb025405df50d979b07a67ac07050ab.xlsx"})}return(e,t)=>{const o=u("a-button"),c=u("a-space");return p(),w(c,null,{default:i(()=>[r(o,{type:"primary",onClick:a},{default:i(()=>[l("\u70B9\u51FB\u4E0B\u8F7D \u5728\u7EBFPdf")]),_:1}),r(o,{type:"primary",onClick:d},{default:i(()=>[l("\u70B9\u51FB\u4E0B\u8F7D \u5728\u7EBF\u56FE\u7247")]),_:1}),r(o,{type:"primary",onClick:s},{default:i(()=>[l("\u70B9\u51FB\u4E0B\u8F7D \u5728\u7EBFxlsx")]),_:1})]),_:1})}}};export{k as default};
//# sourceMappingURL=index-6ea4e114.js.map