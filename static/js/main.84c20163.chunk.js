(this["webpackJsonpflorian-kuhn"]=this["webpackJsonpflorian-kuhn"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var c,r,s,l=n(2),i=n.n(l),a=n(46),o=n.n(a),d=(n(95),n(19)),j=n(61),f=n(3),x=function(e){e.title;var t=e.children;return Object(f.jsx)("div",{className:"w-full flex-1 overflow-hidden font-mono flex flex-col",children:Object(f.jsx)("article",{className:"flex-1 w-full text-xs overflow-y-hidden flex flex-col  ",children:t})})},u=n(47),h=n(20),b=Object(h.gql)(c||(c=Object(u.a)(['\n    query\n    {\n        vitaModel(id : "5yglcnQHMvW2FBOfnAPum4" ){\n            vitatext {\n                json\n            }\n            portrait {\n                url \n            }\n        }\n\n    }\n\n']))),O={renderText:function(e){return e.split("\n").flatMap((function(e,t){return[t>0&&Object(f.jsx)("br",{}),e]}))}},m=n(33),v=n(58),p=function(){var e=Object(h.useQuery)(b),t=(e.loading,e.error,e.data),n=Object(l.useState)({content:v.EMPTY_DOCUMENT,portraitUrl:""}),c=Object(d.a)(n,2),r=c[0],s=c[1];return Object(l.useEffect)((function(){if(t){var e=t.vitaModel.vitatext.json;console.log(e);var n=t.vitaModel.portrait.url;s({content:e,portraitUrl:n})}}),[t]),Object(f.jsx)(x,{title:"Vita",children:Object(f.jsxs)("div",{className:" flex overflow-y-scroll  px-10 flex-col  md:flex-row justify-start",children:[Object(f.jsx)("div",{className:"flex-1 order-2 flex flex-col md:order-1 space-y-5 ",children:r.content!==v.EMPTY_DOCUMENT?Object(m.documentToReactComponents)(r.content,O):""}),Object(f.jsx)("div",{className:"flex-1 order-1 md:order-2 flex flex-row justify-center ",children:r.portraitUrl?Object(f.jsx)("img",{src:r.portraitUrl,className:"w-96"}):"loading"})]})})},g=n(83),w=function(e){var t=e.titles;return Object(f.jsx)("aside",{className:"flex-none px-10 w-96",children:Object(f.jsx)("div",{className:" flex flex-col justify-start items-start space-y-3",children:t.map((function(e,n){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{onClick:function(t){return function(e){var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({block:"start",behavior:"smooth"})}(e)},className:"flex-1 flex w-full flex-col space-y-3 cursor-pointer text-xl",children:[Object(f.jsx)("span",{className:"flex-1",children:e}),n<t.length-1?Object(f.jsx)("hr",{className:"flex-initial w-3/5 gray-900"}):""]})})}))})})},N=Object(h.gql)(r||(r=Object(u.a)(["\n  query {\n     artworkCollection {\n         items{\n                description {\n                    json\n                }\n                title\n                creationDate\n                picturesCollection {\n                    items {\n                        title\n                        url(transform: {\n                            quality: 30\n                        })\n                    }\n                   \n                }\n            }\n        }\n    }\n\n    "]))),y=i.a.createContext({screenWidth:1e3}),k=function(){return Object(l.useContext)(y)},C=n(84),D=n.n(C),A=n(85),S=n.n(A),W=n(124);!function(e){e[e.FORWARD=0]="FORWARD",e[e.BACKWARD=1]="BACKWARD"}(s||(s={}));var I,E=Object(W.a)((function(e){return{clearIcon:{fontSize:40}}})),H=function(e){var t=e.images,n=e.handleClose,c=E(),r=Object(l.useState)(0),i=Object(d.a)(r,2),a=i[0],o=i[1],j=function(e){if(e===s.FORWARD){if(a===t.length-1)return void o(0);o(a+1)}if(e===s.BACKWARD){if(0===a)return void o(t.length-1);o(a-1)}};return Object(f.jsxs)("div",{className:"top-0 left-0 flex flex-col fixed h-screen w-screen bg-white justify-center items-center",children:[Object(f.jsx)("div",{className:"absolute top-5 right-14 text-xl gray-900 cursor-pointer",onClick:function(e){return n()},children:Object(f.jsx)(S.a,{className:c.clearIcon})}),t.length>1?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"absolute left-20 top-1/2 h-12 w-12 transform -translate-y-6 cursor-pointer",children:Object(f.jsx)("div",{className:"w-full h-full border-l-2 border-b-2 border-gray-300 transform rotate-45 hover:border-gray-500 ",onClick:function(e){return j(s.FORWARD)}})}),Object(f.jsx)("div",{className:"absolute right-20 top-1/2 h-12 w-12 transform -translate-y-6 cursor-pointer",children:Object(f.jsx)("div",{className:"w-full h-full border-r-2 border-b-2 border-gray-300 transform -rotate-45 hover:border-gray-500 ",onClick:function(e){return j(s.BACKWARD)}})})]}):"",Object(f.jsx)("div",{className:"flex flex-initial h-4/5 w-4/5 flex flex-col justify-center items-center",children:Object(f.jsx)("img",{className:"h-full",src:t.length>0?t[a].url:""})})]})},T=function(e){var t=e.artwork,n=(e.selectedArtwork,e.onSelectArtwork,Object(l.useState)(!1)),c=Object(d.a)(n,2),r=c[0],s=c[1];return Object(f.jsxs)("section",{id:t.title,className:"flex flex-row w-3/4 items-stretch",children:[r?Object(f.jsx)(H,{images:t.images,handleClose:function(){return s(!1)}}):"",Object(f.jsxs)("div",{className:"flex-1 flex flex-col justify-start w-3/5 space-y-3",children:[Object(f.jsx)("h2",{className:"flex-initial text-xl ",children:t.title}),Object(f.jsx)("div",{className:"flex-1 text-base",children:Object(m.documentToReactComponents)(t.description,O)}),Object(f.jsx)("div",{className:"flex-initial flex flex-row-reverse px-10 ",children:t.images.length>0?Object(f.jsx)("span",{className:"text-lg cursor-pointer text-blue-600",onClick:function(e){return s(!0)},children:"Open galery"}):""})]}),Object(f.jsx)("div",{className:"flex-1 flex flex-row justify-center items-start ",children:Object(f.jsx)(D.a,{height:800,offset:200,overflow:!0,scroll:!0,once:!0,placeholder:"loading",children:Object(f.jsx)("img",{className:"cursor-pointer",src:t.images[0].url,onClick:function(e){return s(!0)}})})})]})},R=function(e){var t=e.artwork,n=e.selectedArtwork,c=e.onSelectArtwork,r=k().screenWidth;return Object(f.jsxs)("section",{id:t.title,className:"flex flex-initial flex-col w-3/4 space-y-3",children:[Object(f.jsx)("header",{className:"flex text-xl leading-none",onClick:function(e){return c(t.title)},children:t.title}),Object(f.jsxs)("div",{className:n!==t.title&&r<=768?"flex flex-col space-y-10 h-0 overflow-hidden":"flex flex-col space-y-10 h-full overflow-hidden",children:[Object(f.jsx)("div",{className:"flex flex-col space-y-3",children:Object(m.documentToReactComponents)(t.description,O)}),Object(f.jsx)("div",{className:"flex flex-col space-y-10 pb-16 items-start",children:t.images.map((function(e){return Object(f.jsx)("div",{className:" flex flex-col justify-center",children:Object(f.jsx)("img",{className:"full",src:e.url})})}))})]})]})},F=function(e){var t=e.artworks,n=Object(l.useState)(""),c=Object(d.a)(n,2),r=c[0],s=c[1],i=function(e){s(r===e?"":e)},a=k().screenWidth;return Object(f.jsx)("div",{className:"flex-auto flex flex-col items-center space-y-2 md:space-y-20 overflow-y-auto px-10 pb-32",children:t.map((function(e){return Object(f.jsx)(f.Fragment,{children:a>768?Object(f.jsx)(T,{artwork:e,selectedArtwork:r,onSelectArtwork:i}):Object(f.jsx)(R,{artwork:e,selectedArtwork:r,onSelectArtwork:i})})}))})},M=function(){var e=Object(h.useQuery)(N),t=(e.loading,e.error,e.data),n=k().screenWidth,c=Object(l.useState)([]),r=Object(d.a)(c,2),s=r[0],i=r[1];Object(l.useEffect)((function(){if(t){var e,n=[],c=Object(g.a)(t.artworkCollection.items);try{for(c.s();!(e=c.n()).done;){var r=e.value,s=r.title,l=r.description.json,a=r.picturesCollection.items.map((function(e){return{title:e.title,url:e.url}})),o=new Date(r.creationDate);n.push({title:s,description:l,images:a,creationDate:o})}}catch(d){c.e(d)}finally{c.f()}n.sort((function(e,t){return e.creationDate.getTime()-t.creationDate.getTime()})),i(n)}}),[t]),Object(l.useEffect)((function(){}),[n]);var a=s.map((function(e){return e.title}));return Object(f.jsxs)(x,{title:"Work",children:[Object(f.jsxs)("div",{className:"flex-initial flex flex-row ",children:[n>768?Object(f.jsx)(w,{titles:a}):"",Object(f.jsx)(F,{artworks:s})]}),Object(f.jsx)("div",{className:""})]})},z=n(86),B=n.n(z),L=Object(W.a)((function(e){return{instagramIcon:{fontSize:80}}})),P=function(){var e=L();return Object(f.jsx)(x,{title:"Contact",children:Object(f.jsxs)("div",{className:"flex flex-col py-5 justify-evenly space-y-6 px-10",children:[Object(f.jsx)("section",{children:"Email: scarab@posteo.de"}),Object(f.jsx)("section",{children:Object(f.jsx)(B.a,{className:e.instagramIcon})}),Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:"Impressum und Datenschutz"}),Object(f.jsx)("p",{children:"asdsadsadsadsadsasdasd sadsadsadf asdsad asd sad asdsdads ad sad sa as fasfgasgawg asg asg asg sg sa "})]})]})})},q=n(87),U=n(34),K=n(10);!function(e){e[e.INITIAL=0]="INITIAL",e[e.SHOWN=1]="SHOWN",e[e.HIDDEN=2]="HIDDEN"}(I||(I={}));var V=function(e){var t=e.showNav,n=e.setShowNav;return Object(f.jsxs)("div",{className:t===I.SHOWN?"fixed top-0 right-20 h-8 w-12 flex flex-col justify-center items-center space-y-1 z-10 transition-right delay-100":"fixed top-0 right-3 h-8 w-12 flex flex-col justify-center items-center space-y-1 z-10 transition-right delay-100",onClick:function(e){return function(e){e.stopPropagation(),t===I.SHOWN?n(I.HIDDEN):n(I.SHOWN)}(e)},children:[Object(f.jsx)("div",{className:"w-8 h-0.5 bg-gray-400 rounded"}),Object(f.jsx)("div",{className:"w-7 h-0.5 bg-gray-400 rounded"}),Object(f.jsx)("div",{className:"w-8 h-0.5 bg-gray-400 rounded"})]})},J=function(e){var t=e.showNav,n=e.setShowNav,c=Object(K.e)();function r(e){console.log("pushing"),c.push(e),n(I.HIDDEN)}return Object(f.jsxs)("div",{className:t===I.SHOWN?"fixed h-full w-32 fixed bg-gray-50 top-0 right-0 flex flex-col items-start pl-10 pt-16 space-y-5 transition-right":"fixed h-full w-32 fixed bg-gray-50 top-0 -right-44 flex flex-col items-start pl-10 pt-16 space-y-5 transition-right",onClick:function(e){return e.stopPropagation()},children:[Object(f.jsx)("div",{className:"flex",onClick:function(e){return r("/")},children:"Home"}),Object(f.jsx)("div",{className:"flex",onClick:function(e){return r("/Work")},children:"Work"}),Object(f.jsx)("div",{className:"flex",onClick:function(e){return r("/Vita")},children:"Vita"}),Object(f.jsx)("div",{className:"flex",onClick:function(e){return r("/Contact")},children:"Contact"})]})},Q=Object(h.createHttpLink)({uri:"https://graphql.contentful.com/content/v1/spaces/uqk48amkbrqw"}),_=Object(q.a)((function(e,t){var n=t.headers;return{headers:Object(j.a)(Object(j.a)({},n),{},{authorization:"Bearer JT8H7SZJQ_56AaEcsLIXMz4rDUrOpmvVmrWzx10KMl4"})}})),Y=new h.ApolloClient({link:_.concat(Q),cache:new h.InMemoryCache});var X=function(){var e=Object(l.useState)(1e3),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(I.INITIAL),s=Object(d.a)(r,2),i=s[0],a=s[1];return Object(l.useEffect)((function(){function e(e){var t=window.innerWidth;console.log(t),c(t)}return c(window.innerWidth),window.addEventListener("resize",(function(t){return e()})),function(){return document.removeEventListener("resize",e)}}),[]),console.log(n),Object(f.jsx)(y.Provider,{value:{screenWidth:n},children:Object(f.jsx)(h.ApolloProvider,{client:Y,children:Object(f.jsx)(U.a,{children:Object(f.jsxs)("div",{className:"h-screen flex flex-col overflow-hidden",onClick:function(e){return a(I.HIDDEN)},children:[Object(f.jsx)("header",{className:" h-10 flex flex-row",children:Object(f.jsxs)("div",{className:"flex-1 flex px-5 flex flex-row content-stretch font-mono",children:[Object(f.jsx)("div",{className:"flex-1 text-2xl",children:"Florian Kuhn"}),n&&n>768?Object(f.jsx)("nav",{className:"hidden md:flex-1 md:flex md:flex-column md:justify-end",children:Object(f.jsxs)("ul",{className:"flex-1 list-none flex flex-row justify-evenly content-end py-2 leading-none",children:[Object(f.jsx)("li",{children:Object(f.jsx)(U.b,{to:"/work",children:"work"})}),Object(f.jsx)("li",{children:Object(f.jsx)(U.b,{to:"/vita",children:"vita"})}),Object(f.jsx)("li",{children:Object(f.jsx)(U.b,{to:"/contact",children:"contact"})})]})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(V,{showNav:i,setShowNav:a}),Object(f.jsx)(J,{showNav:i,setShowNav:a})]})]})}),Object(f.jsx)(K.a,{exact:!0,path:"/",children:"Home"}),Object(f.jsx)(K.a,{path:"/vita",component:p}),Object(f.jsx)(K.a,{path:"/work",component:M}),Object(f.jsx)(K.a,{path:"/contact",component:P})]})})})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),s(e),l(e)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root")),Z()},95:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.84c20163.chunk.js.map