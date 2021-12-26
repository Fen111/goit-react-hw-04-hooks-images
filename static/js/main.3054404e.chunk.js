(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3q6Ih",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3kEjK"}},16:function(e,t,a){e.exports={Modal:"Modal_Modal__2CKW4",Overlay:"Modal_Overlay___s50N"}},27:function(e,t,a){e.exports={App:"App_App__25jqV"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2JGp6"}},29:function(e,t,a){e.exports={Button:"Button_Button__3XfZm"}},33:function(e,t,a){e.exports={loaderContainer:"LoaderContainer_loaderContainer__1CkCX"}},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3k2u8",SearchForm:"Searchbar_SearchForm__3Szus",SearchFormButton:"Searchbar_SearchFormButton__2ROI6",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__QW7di",SearchFormInput:"Searchbar_SearchFormInput__iNrQ7"}},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=a(5),i=a.n(s),u=a(17),l=a(13),m=a(4),p=a(8),h=(a(41),a(26)),b=a.n(h).a.create({baseURL:"https://pixabay.com/api/",params:{key:"23914400-19c57926caa45a402450638cc",image_type:"photo",orientation:"horizontal"}});function j(){return d.apply(this,arguments)}function d(){return d=Object(l.a)(i.a.mark((function e(){var t,a,n,r,c,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:1,n=o.length>2&&void 0!==o[2]?o[2]:12,e.prev=3,e.next=6,b("",{params:{q:t,page:a,per_page:n}});case 6:return r=e.sent,c=r.data,e.abrupt("return",c.hits);case 11:e.prev=11,e.t0=e.catch(3),console.error("Image ".concat(t," not found"));case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),d.apply(this,arguments)}var f=a(27),O=a.n(f),g=a(6),v=a.n(g),_=a(1);function x(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],o=r[1];return Object(_.jsx)("header",{className:v.a.Searchbar,children:Object(_.jsxs)("form",{className:v.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):p.b.error("Enter your search term")},children:[Object(_.jsx)("button",{type:"submit",className:v.a.SearchFormButton,children:Object(_.jsx)("span",{className:v.a.SearchFormButtonLabel})}),Object(_.jsx)("input",{className:v.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:c,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var y=a(15),S=a.n(y);var I=a(28),k=a.n(I);function C(e){var t=e.images,a=e.onClick;return Object(_.jsx)("ul",{className:k.a.ImageGallery,children:t.map((function(e){return function(e,t){var a=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(_.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(_.jsx)("img",{className:S.a.ImageGalleryItemImage,src:n,alt:c,"data-img":r,onClick:t})},a)}(e,a)}))})}var w=a(29),N=a.n(w);function B(e){var t=e.onClick;return Object(_.jsx)("button",{className:N.a.Button,type:"button",onClick:t,children:"Load more"})}var F=a(30),G=a(31),L=a(35),M=a(34),D=a(16),E=a.n(D),A=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(F.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(G.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(_.jsx)("div",{className:E.a.Overlay,onClick:this.handleBackdropClick,children:Object(_.jsx)("div",{className:E.a.Modal,children:this.props.children})})}}]),a}(n.Component),K=a(32),R=a.n(K),T=a(33),U=a.n(T);function q(){return Object(_.jsx)("div",{className:U.a.loaderContainer,children:Object(_.jsx)(R.a,{type:"ThreeDots",color:"red",height:100,width:100,timeout:1e3})})}function J(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),s=o[0],h=o[1],b=Object(n.useState)(1),d=Object(m.a)(b,2),f=d[0],g=d[1],v=Object(n.useState)(!1),y=Object(m.a)(v,2),S=y[0],I=y[1],k=Object(n.useState)(""),w=Object(m.a)(k,2),N=w[0],F=w[1],G=Object(n.useState)(""),L=Object(m.a)(G,2),M=L[0],D=L[1],E=Object(n.useState)(!1),K=Object(m.a)(E,2),R=K[0],T=K[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,j(s,f);case 4:if(!((t=e.sent).length<1)){e.next=8;break}return p.b.error("Image ".concat(s," not found")),e.abrupt("return");case 8:r((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:return e.prev=14,T(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))).apply(this,arguments)}s&&function(){e.apply(this,arguments)}()}),[f,s]);return Object(_.jsxs)("div",{className:O.a.App,children:[Object(_.jsx)(x,{onSubmit:function(e){r([]),h(e),g(1)}}),Object(_.jsx)(p.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(_.jsx)(C,{images:a,onClick:function(e){"IMG"===e.target.nodeName&&(e.preventDefault(),F(e.target.dataset.img),I(!0),D(e.target.alt))}}),R&&Object(_.jsx)(q,{}),a.length>0&&Object(_.jsx)(B,{onClick:function(){g((function(e){return e+1}))}}),S&&Object(_.jsx)(A,{onClose:function(){I((function(e){return!e}))},children:Object(_.jsx)("img",{src:N,alt:M})})]})}a(81),a(82);o.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(J,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.3054404e.chunk.js.map