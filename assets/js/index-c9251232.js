import{_ as y,K as Y,j as R,J as x,r as a,o as N,e as C,f as l,a as e,w as o,b as i,G as D,H as E}from"./index-18b1401e.js";import{u as I}from"./useTheme-cdb17de9.js";const J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAmCAYAAAAycj4zAAAEIElEQVR42u2bf0gTYRjHJYiKiIhiJkFkmCJBEQUR/iFRkVGRhBQVUf2ZZQoVJGFmIpUYTgspk5B+YGmUhJH9tLJSYmSbPzYtm+WvETqbyuZ22572Tu7ldtttd+ftdjfugQeO97648f34vs/zvLAYUEJSEaNYoAAJa3yo2OKXUQFkU2u2X8oBBpd1WQAJZr6UwYQyXS5QYuiGswmpQWFrNpNOHVvNKkUFwtVkKUGZCRAuRosBJSaYuSl7CgWHos08j5Mab1eVMiYfo21mgOYCJ9xPdcCN5XYoi7ODWjWdkt4hoWAIDYUOhI3pbDRUKNYRgNtrHBgAPSVdQyIJhM1/Px0MGyhN55zY/Nc5BDSpd8mny4r0DuEabKBUJP7BQN5dS5fXHBJtQFCUL5PH8RT1RxYu0qooAfJo1iKcCAQxMQlnknbA86QNUDdHBY/nx0HT5t3Q96BWuKKeWApfthVBd2EZ6LIuQHv2RegtrYIxjY5TUaeDCHdB/67NwInC5bLB8HAN6A1ZoNXtB137QfjZmw/msY/8214qkK1pufBi9UafNWp+2nsYUj5nzajtdU3Z4UfJLZ81arakFXHaRZECQhAWMBiyfdaoaewrBrfbyX0w9DE8/RBULlgBw41vwO1yeRM9NySswxpN5ukZAemrqoHuousw2fMLPN/Y+xkj71t8NNb+IVZ/11pegZMKgLpOptBAjMar0KU/AePjbZ43bm+iZ7RGavoHKrlfnVCBPF0cD9YBfzNspr9wd2Es1lk6DbyB6PNKwGmb8tMM1b/Emv57T1iB4FJDhABDBdLecQQcjlE/DUH8874jdTZbP38gnYXFMJg8EfBysaPgCtZ9y8nlDWS0+Wtgw34PYo3hklryQEymOkadyVSLdQODd/gD6Ylv9ZqPoNBvecfadFj3an0qbyCOMUtgkef4IjWoyEv9yLJajczfy/OO1HX3nOUPZCB52iz6LvH6RRBYhzqvcMwhpEZ3Mo+zWWK0vb5dlptRh4o5qUOdF28gJIhAQKha1A6HEwifAVJ8IOy0qB3mDQR1PGTQoYi5Q+QBRIQdYta0MQIRqoZECxCrtTf8NQR1UkxAhOqyogUI6qTC3mWhOcQ2ZPIDgtbqVQmCzCHRAmR6DjH7adBaR+cxYeYQNKmjqXywodHbcaGagp4bVq4VbFKPFiDkpG6xaPCkjp679MeFm9TtI6Mh77JQcVeAZADhHBf+LosOxDv6T0xCe/5leDZ3PdTOXhLwtlcBQrntNT0EveGUp73dx+u2V3WzKzgQpqKuBLc5RAEiUyAhjywFiAJEAcL3LksBIgKQunlLcUYCyNHuJpxSD63uAM6wAQl0TIkFhA4hklC2V+/0S7Ei6A92IgUjklCYzBcLSsR/QRXKdDGhhDJdDCgKEI5mhxvKfwXRebmfQ5hoAAAAAElFTkSuQmCC";const m=r=>(D("data-v-b48384fb"),r=r(),E(),r),K={class:"login"},H={class:"login-form"},O=m(()=>l("h2",{class:"title"},"V-Admin",-1)),Z=m(()=>l("img",{src:J,class:"code-img"},null,-1)),V=m(()=>l("div",{class:"copyright-wrap"},[l("p",{class:"en"},"copyright@2023 v-admin All Rights Reserved"),l("p",{class:"cn"},"v-admin \u7248\u6743\u6240\u6709")],-1)),j={__name:"index",setup(r){const f=Y();I().initThemeAndDark();const c=R(!1),t=x({username:"Admin",password:"123456",remember:!0,code:"phfp"}),A={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],code:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]};function g(h){t.username=="Admin"&&t.password=="123456"&t.code=="phfp"&&(c.value=!0,setTimeout(()=>{c.value=!1,localStorage.setItem("token","test-token"),f.push("/home")},1e3))}return(h,s)=>{const B=a("UserOutlined"),u=a("a-input"),d=a("a-form-item"),Q=a("LockOutlined"),v=a("a-input-password"),b=a("verified-outlined"),p=a("a-col"),U=a("a-row"),k=a("a-checkbox"),_=a("a-button"),w=a("a-form");return N(),C("div",K,[l("div",H,[O,e(w,{model:t,name:"normal_login",rules:A,onFinish:g},{default:o(()=>[e(d,{name:"username"},{default:o(()=>[e(u,{value:t.username,"onUpdate:value":s[0]||(s[0]=n=>t.username=n),placeholder:"\u8D26\u53F7",size:"large"},{prefix:o(()=>[e(B,{class:"icon"})]),_:1},8,["value"])]),_:1}),e(d,{name:"password"},{default:o(()=>[e(v,{value:t.password,"onUpdate:value":s[1]||(s[1]=n=>t.password=n),placeholder:"\u5BC6\u7801",size:"large"},{prefix:o(()=>[e(Q,{class:"icon"})]),_:1},8,["value"])]),_:1}),e(d,{name:"code"},{default:o(()=>[e(U,{gutter:8},{default:o(()=>[e(p,{span:17},{default:o(()=>[e(u,{value:t.code,"onUpdate:value":s[2]||(s[2]=n=>t.code=n),placeholder:"\u9A8C\u8BC1\u7801",size:"large"},{prefix:o(()=>[e(b,{class:"icon"})]),_:1},8,["value"])]),_:1}),e(p,{span:7},{default:o(()=>[Z]),_:1})]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(d,{name:"remember","no-style":""},{default:o(()=>[e(k,{checked:t.remember,"onUpdate:checked":s[3]||(s[3]=n=>t.remember=n)},{default:o(()=>[i("\u8BB0\u4F4F\u6211")]),_:1},8,["checked"])]),_:1}),e(_,{type:"link",class:"forgot"},{default:o(()=>[i("\u5FD8\u8BB0\u5BC6\u7801?")]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(_,{type:"primary",loading:c.value,style:{width:"100%"},size:"large","html-type":"submit"},{default:o(()=>[i("\u767B\u5F55")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),V])}}},T=y(j,[["__scopeId","data-v-b48384fb"]]);export{T as default};
//# sourceMappingURL=index-c9251232.js.map