(()=>{var e={};e.id=928,e.ids=[928],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},6113:e=>{"use strict";e.exports=require("crypto")},7147:e=>{"use strict";e.exports=require("fs")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7151:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>c});var s=t(7096),a=t(6132),o=t(7284),n=t.n(o),i=t(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let c=["",{children:["gallery",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8260)),"C:\\Users\\pc\\Desktop\\Project\\france_andrei-master\\app\\gallery\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,979)),"C:\\Users\\pc\\Desktop\\Project\\france_andrei-master\\app\\gallery\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,8599)),"C:\\Users\\pc\\Desktop\\Project\\france_andrei-master\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Users\\pc\\Desktop\\Project\\france_andrei-master\\app\\gallery\\page.tsx"],d="/gallery/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/gallery/page",pathname:"/gallery",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9006:(e,r,t)=>{Promise.resolve().then(t.bind(t,4985))},779:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6686,23))},4985:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>GalleryLayout});var s=t(784),a=t(9885),o=t(2137),n=t.n(o);t(8593);var i=t(2701);function GalleryLayout({children:e}){return(0,a.useEffect)(()=>{n().init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),(0,s.jsxs)(s.Fragment,{children:[s.jsx("main",{className:"grow",children:e}),s.jsx(i.Z,{})]})}},979:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>n,__esModule:()=>o,default:()=>l});var s=t(5153);let a=(0,s.createProxy)(String.raw`C:\Users\pc\Desktop\Project\france_andrei-master\app\gallery\layout.tsx`),{__esModule:o,$$typeof:n}=a,i=a.default,l=i},8260:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>page,metadata:()=>u});var s=t(4656);t(3542);var a=t(8639),o=t.n(a),n=t(7147),i=t.n(n),l=t(1017),c=t.n(l);let p=c().join(process.cwd(),"public/images/photos"),d=i().readdirSync(p).map(e=>({src:`/images/photos/${e}`}));function Gallery(){return s.jsx("div",{className:"grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-3 max-w-6xl mx-auto px-4 sm:px-6","data-aos":"zoom-y-out",children:d.map((e,r)=>s.jsx("div",{className:"relative xs:w-full xs:h-80 sm:w-full sm:h-80 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-lg  lg:overflow-visible sm:overflow-hidden",children:s.jsx(o(),{src:e.src,width:100,height:100,alt:`Photo ${r}`,className:"absolute left-0 top-0 w-full h-full z-0 object-cover rounded-lg cursor-pointer anim"})},r))})}let u={title:"Галерея",description:"Галерея фото"};t(6718).config();let page=()=>s.jsx(s.Fragment,{children:s.jsx("section",{className:"relative sm:mt-20 md:mt-30 lg:mt-32 lg:mb-16",children:s.jsx(Gallery,{})})})}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[758,724,687,5,701],()=>__webpack_exec__(7151));module.exports=t})();