import{o as ae,r as M,j as a,N as B}from"./index-BYxwSGlb.js";var N=function(){return N=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},N.apply(this,arguments)};function Se(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var v="-ms-",se="-moz-",f="-webkit-",ht="comm",Ce="rule",qe="decl",Kt="@import",gt="@keyframes",Ut="@layer",mt=Math.abs,Ke=String.fromCharCode,Le=Object.assign;function Xt(e,t){return A(e,0)^45?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}function yt(e){return e.trim()}function W(e,t){return(e=t.exec(e))?e[0]:e}function p(e,t,r){return e.replace(t,r)}function ye(e,t,r){return e.indexOf(t,r)}function A(e,t){return e.charCodeAt(t)|0}function Z(e,t,r){return e.slice(t,r)}function O(e){return e.length}function xt(e){return e.length}function ie(e,t){return t.push(e),e}function Zt(e,t){return e.map(t).join("")}function Ve(e,t){return e.filter(function(r){return!W(r,t)})}var Ie=1,J=1,vt=0,_=0,C=0,te="";function Ae(e,t,r,n,o,i,s,c){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ie,column:J,length:s,return:"",siblings:c}}function L(e,t){return Le(Ae("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function U(e){for(;e.root;)e=L(e.root,{children:[e]});ie(e,e.siblings)}function Jt(){return C}function Qt(){return C=_>0?A(te,--_):0,J--,C===10&&(J=1,Ie--),C}function P(){return C=_<vt?A(te,_++):0,J++,C===10&&(J=1,Ie++),C}function Y(){return A(te,_)}function xe(){return _}function Ne(e,t){return Z(te,e,t)}function Fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vt(e){return Ie=J=1,vt=O(te=e),_=0,[]}function er(e){return te="",e}function De(e){return yt(Ne(_-1,Be(e===91?e+2:e===40?e+1:e)))}function tr(e){for(;(C=Y())&&C<33;)P();return Fe(e)>2||Fe(C)>3?"":" "}function rr(e,t){for(;--t&&P()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return Ne(e,xe()+(t<6&&Y()==32&&P()==32))}function Be(e){for(;P();)switch(C){case e:return _;case 34:case 39:e!==34&&e!==39&&Be(C);break;case 40:e===41&&Be(e);break;case 92:P();break}return _}function nr(e,t){for(;P()&&e+C!==57;)if(e+C===84&&Y()===47)break;return"/*"+Ne(t,_-1)+"*"+Ke(e===47?e:P())}function or(e){for(;!Fe(Y());)P();return Ne(e,_)}function ir(e){return er(ve("",null,null,null,[""],e=Vt(e),0,[0],e))}function ve(e,t,r,n,o,i,s,c,u){for(var g=0,h=0,m=s,y=0,d=0,w=0,k=1,$=1,E=1,S=0,b="",j=o,I=i,x=n,l=b;$;)switch(w=S,S=P()){case 40:if(w!=108&&A(l,m-1)==58){ye(l+=p(De(S),"&","&\f"),"&\f",mt(g?c[g-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:l+=De(S);break;case 9:case 10:case 13:case 32:l+=tr(w);break;case 92:l+=rr(xe()-1,7);continue;case 47:switch(Y()){case 42:case 47:ie(sr(nr(P(),xe()),t,r,u),u);break;default:l+="/"}break;case 123*k:c[g++]=O(l)*E;case 125*k:case 59:case 0:switch(S){case 0:case 125:$=0;case 59+h:E==-1&&(l=p(l,/\f/g,"")),d>0&&O(l)-m&&ie(d>32?tt(l+";",n,r,m-1,u):tt(p(l," ","")+";",n,r,m-2,u),u);break;case 59:l+=";";default:if(ie(x=et(l,t,r,g,h,o,c,b,j=[],I=[],m,i),i),S===123)if(h===0)ve(l,t,x,x,j,i,m,c,I);else switch(y===99&&A(l,3)===110?100:y){case 100:case 108:case 109:case 115:ve(e,x,x,n&&ie(et(e,x,x,0,0,o,c,b,o,j=[],m,I),I),o,I,m,c,n?j:I);break;default:ve(l,x,x,x,[""],I,0,c,I)}}g=h=d=0,k=E=1,b=l="",m=s;break;case 58:m=1+O(l),d=w;default:if(k<1){if(S==123)--k;else if(S==125&&k++==0&&Qt()==125)continue}switch(l+=Ke(S),S*k){case 38:E=h>0?1:(l+="\f",-1);break;case 44:c[g++]=(O(l)-1)*E,E=1;break;case 64:Y()===45&&(l+=De(P())),y=Y(),h=m=O(b=l+=or(xe())),S++;break;case 45:w===45&&O(l)==2&&(k=0)}}return i}function et(e,t,r,n,o,i,s,c,u,g,h,m){for(var y=o-1,d=o===0?i:[""],w=xt(d),k=0,$=0,E=0;k<n;++k)for(var S=0,b=Z(e,y+1,y=mt($=s[k])),j=e;S<w;++S)(j=yt($>0?d[S]+" "+b:p(b,/&\f/g,d[S])))&&(u[E++]=j);return Ae(e,t,r,o===0?Ce:c,u,g,h,m)}function sr(e,t,r,n){return Ae(e,t,r,ht,Ke(Jt()),Z(e,2,-2),0,n)}function tt(e,t,r,n,o){return Ae(e,t,r,qe,Z(e,0,n),Z(e,n+1,-1),n,o)}function bt(e,t,r){switch(Xt(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 4789:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+se+e+v+e+e;case 5936:switch(A(e,t+11)){case 114:return f+e+v+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+v+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+v+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return f+e+v+e+e;case 6165:return f+e+v+"flex-"+e+e;case 5187:return f+e+p(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+v+"flex-$1$2")+e;case 5443:return f+e+v+"flex-item-"+p(e,/flex-|-self/g,"")+(W(e,/flex-|baseline/)?"":v+"grid-row-"+p(e,/flex-|-self/g,""))+e;case 4675:return f+e+v+"flex-line-pack"+p(e,/align-content|flex-|-self/g,"")+e;case 5548:return f+e+v+p(e,"shrink","negative")+e;case 5292:return f+e+v+p(e,"basis","preferred-size")+e;case 6060:return f+"box-"+p(e,"-grow","")+f+e+v+p(e,"grow","positive")+e;case 4554:return f+p(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4200:if(!W(e,/flex-|baseline/))return v+"grid-column-align"+Z(e,t)+e;break;case 2592:case 3360:return v+p(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,W(n.props,/grid-\w+-end/)})?~ye(e+(r=r[t].value),"span",0)?e:v+p(e,"-start","")+e+v+"grid-row-span:"+(~ye(r,"span",0)?W(r,/\d+/):+W(r,/\d+/)-+W(e,/\d+/))+";":v+p(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return W(n.props,/grid-\w+-start/)})?e:v+p(p(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-t>6)switch(A(e,t+1)){case 109:if(A(e,t+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+se+(A(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ye(e,"stretch",0)?bt(p(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return p(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,c,u,g){return v+o+":"+i+g+(s?v+o+"-span:"+(c?u:+u-+i)+g:"")+e});case 4949:if(A(e,t+6)===121)return p(e,":",":"+f)+e;break;case 6444:switch(A(e,A(e,14)===45?18:11)){case 120:return p(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+f+(A(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+v+"$2box$3")+e;case 100:return p(e,":",":"+v)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(e,"scroll-","scroll-snap-")+e}return e}function je(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ar(e,t,r,n){switch(e.type){case Ut:if(e.children.length)break;case Kt:case qe:return e.return=e.return||e.value;case ht:return"";case gt:return e.return=e.value+"{"+je(e.children,n)+"}";case Ce:if(!O(e.value=e.props.join(",")))return""}return O(r=je(e.children,n))?e.return=e.value+"{"+r+"}":""}function cr(e){var t=xt(e);return function(r,n,o,i){for(var s="",c=0;c<t;c++)s+=e[c](r,n,o,i)||"";return s}}function ur(e){return function(t){t.root||(t=t.return)&&e(t)}}function pr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case qe:e.return=bt(e.value,e.length,r);return;case gt:return je([L(e,{value:p(e.value,"@","@"+f)})],n);case Ce:if(e.length)return Zt(r=e.props,function(o){switch(W(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":U(L(e,{props:[p(o,/:(read-\w+)/,":"+se+"$1")]})),U(L(e,{props:[o]})),Le(e,{props:Ve(r,n)});break;case"::placeholder":U(L(e,{props:[p(o,/:(plac\w+)/,":"+f+"input-$1")]})),U(L(e,{props:[p(o,/:(plac\w+)/,":"+se+"$1")]})),U(L(e,{props:[p(o,/:(plac\w+)/,v+"input-$1")]})),U(L(e,{props:[o]})),Le(e,{props:Ve(r,n)});break}return""})}}var lr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},R={},Q=typeof process<"u"&&R!==void 0&&(R.REACT_APP_SC_ATTR||R.SC_ATTR)||"data-styled",wt="active",St="data-styled-version",$e="6.1.15",Ue=`/*!sc*/
`,ke=typeof window<"u"&&"HTMLElement"in window,dr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&R!==void 0&&R.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&R.REACT_APP_SC_DISABLE_SPEEDY!==""?R.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&R.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&R!==void 0&&R.SC_DISABLE_SPEEDY!==void 0&&R.SC_DISABLE_SPEEDY!==""&&R.SC_DISABLE_SPEEDY!=="false"&&R.SC_DISABLE_SPEEDY),Re=Object.freeze([]),V=Object.freeze({});function fr(e,t,r){return r===void 0&&(r=V),e.theme!==r.theme&&e.theme||t||r.theme}var jt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gr=/(^-|-$)/g;function rt(e){return e.replace(hr,"-").replace(gr,"")}var mr=/(a)(d)/gi,ge=52,nt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Me(e){var t,r="";for(t=Math.abs(e);t>ge;t=t/ge|0)r=nt(t%ge)+r;return(nt(t%ge)+r).replace(mr,"$1-$2")}var We,kt=5381,X=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Et=function(e){return X(kt,e)};function yr(e){return Me(Et(e)>>>0)}function xr(e){return e.displayName||e.name||"Component"}function ze(e){return typeof e=="string"&&!0}var Ct=typeof Symbol=="function"&&Symbol.for,It=Ct?Symbol.for("react.memo"):60115,vr=Ct?Symbol.for("react.forward_ref"):60112,br={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},At={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sr=((We={})[vr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},We[It]=At,We);function ot(e){return("type"in(t=e)&&t.type.$$typeof)===It?At:"$$typeof"in e?Sr[e.$$typeof]:br;var t}var jr=Object.defineProperty,kr=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,Er=Object.getOwnPropertyDescriptor,Cr=Object.getPrototypeOf,st=Object.prototype;function Nt(e,t,r){if(typeof t!="string"){if(st){var n=Cr(t);n&&n!==st&&Nt(e,n,r)}var o=kr(t);it&&(o=o.concat(it(t)));for(var i=ot(e),s=ot(t),c=0;c<o.length;++c){var u=o[c];if(!(u in wr||r&&r[u]||s&&u in s||i&&u in i)){var g=Er(t,u);try{jr(e,u,g)}catch{}}}}return e}function ee(e){return typeof e=="function"}function Xe(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function at(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function ce(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ge(e,t,r){if(r===void 0&&(r=!1),!r&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ge(e[n],t[n]);else if(ce(t))for(var n in t)e[n]=Ge(e[n],t[n]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function ue(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ir=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw ue(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),u=(s=0,r.length);s<u;s++)this.tag.insertRule(c,r[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Ue);return r},e}(),be=new Map,Ee=new Map,we=1,me=function(e){if(be.has(e))return be.get(e);for(;Ee.has(we);)we++;var t=we++;return be.set(e,t),Ee.set(t,e),t},Ar=function(e,t){we=t+1,be.set(e,t),Ee.set(t,e)},Nr="style[".concat(Q,"][").concat(St,'="').concat($e,'"]'),$r=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rr=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},_r=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ue),o=[],i=0,s=n.length;i<s;i++){var c=n[i].trim();if(c){var u=c.match($r);if(u){var g=0|parseInt(u[1],10),h=u[2];g!==0&&(Ar(h,g),Rr(e,h,u[3]),e.getTag().insertRules(g,o)),o.length=0}else o.push(c)}}},ct=function(e){for(var t=document.querySelectorAll(Nr),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Q)!==wt&&(_r(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Pr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $t=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var u=Array.from(c.querySelectorAll("style[".concat(Q,"]")));return u[u.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Q,wt),n.setAttribute(St,$e);var s=Pr();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},Or=function(){function e(t){this.element=$t(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw ue(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Dr=function(){function e(t){this.element=$t(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Wr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ut=ke,zr={isServer:!ke,useCSSOMInjection:!dr},Rt=function(){function e(t,r,n){t===void 0&&(t=V),r===void 0&&(r={});var o=this;this.options=N(N({},zr),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&ke&&ut&&(ut=!1,ct(this)),Ze(this,function(){return function(i){for(var s=i.getTag(),c=s.length,u="",g=function(m){var y=function(E){return Ee.get(E)}(m);if(y===void 0)return"continue";var d=i.names.get(y),w=s.getGroup(m);if(d===void 0||!d.size||w.length===0)return"continue";var k="".concat(Q,".g").concat(m,'[id="').concat(y,'"]'),$="";d!==void 0&&d.forEach(function(E){E.length>0&&($+="".concat(E,","))}),u+="".concat(w).concat(k,'{content:"').concat($,'"}').concat(Ue)},h=0;h<c;h++)g(h);return u}(o)})}return e.registerId=function(t){return me(t)},e.prototype.rehydrate=function(){!this.server&&ke&&ct(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(N(N({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Wr(o):n?new Or(o):new Dr(o)}(this.options),new Ir(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(me(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(me(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(me(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Tr=/&/g,Lr=/^\s*\/\/.*$/gm;function _t(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=_t(r.children,t)),r})}function Fr(e){var t,r,n,o=V,i=o.options,s=i===void 0?V:i,c=o.plugins,u=c===void 0?Re:c,g=function(y,d,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):y},h=u.slice();h.push(function(y){y.type===Ce&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Tr,r).replace(n,g))}),s.prefix&&h.push(pr),h.push(ar);var m=function(y,d,w,k){d===void 0&&(d=""),w===void 0&&(w=""),k===void 0&&(k="&"),t=k,r=d,n=new RegExp("\\".concat(r,"\\b"),"g");var $=y.replace(Lr,""),E=ir(w||d?"".concat(w," ").concat(d," { ").concat($," }"):$);s.namespace&&(E=_t(E,s.namespace));var S=[];return je(E,cr(h.concat(ur(function(b){return S.push(b)})))),S};return m.hash=u.length?u.reduce(function(y,d){return d.name||ue(15),X(y,d.name)},kt).toString():"",m}var Br=new Rt,Ye=Fr(),Pt=ae.createContext({shouldForwardProp:void 0,styleSheet:Br,stylis:Ye});Pt.Consumer;ae.createContext(void 0);function pt(){return M.useContext(Pt)}var Mr=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Ye);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ze(this,function(){throw ue(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ye),this.name+t.hash},e}(),Gr=function(e){return e>="A"&&e<="Z"};function lt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Gr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ot=function(e){return e==null||e===!1||e===""},Dt=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ot(i)&&(Array.isArray(i)&&i.isCss||ee(i)?n.push("".concat(lt(o),":"),i,";"):ce(i)?n.push.apply(n,Se(Se(["".concat(o," {")],Dt(i),!1),["}"],!1)):n.push("".concat(lt(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in lr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function H(e,t,r,n){if(Ot(e))return[];if(Xe(e))return[".".concat(e.styledComponentId)];if(ee(e)){if(!ee(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return H(o,t,r,n)}var i;return e instanceof Mr?r?(e.inject(r,n),[e.getName(n)]):[e]:ce(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(Re,e.map(function(s){return H(s,t,r,n)})):[e.toString()]}function Yr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ee(r)&&!Xe(r))return!1}return!0}var Hr=Et($e),qr=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Yr(t),this.componentId=r,this.baseHash=X(Hr,r),this.baseStyle=n,Rt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=G(o,this.staticRulesId);else{var i=at(H(this.rules,t,r,n)),s=Me(X(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var c=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,c)}o=G(o,s),this.staticRulesId=s}else{for(var u=X(this.baseHash,n.hash),g="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")g+=m;else if(m){var y=at(H(m,t,r,n));u=X(u,y+h),g+=y}}if(g){var d=Me(u>>>0);r.hasNameForId(this.componentId,d)||r.insertRules(this.componentId,d,n(g,".".concat(d),void 0,this.componentId)),o=G(o,d)}}return o},e}(),Wt=ae.createContext(void 0);Wt.Consumer;var Te={};function Kr(e,t,r){var n=Xe(e),o=e,i=!ze(e),s=t.attrs,c=s===void 0?Re:s,u=t.componentId,g=u===void 0?function(j,I){var x=typeof j!="string"?"sc":rt(j);Te[x]=(Te[x]||0)+1;var l="".concat(x,"-").concat(yr($e+x+Te[x]));return I?"".concat(I,"-").concat(l):l}(t.displayName,t.parentComponentId):u,h=t.displayName,m=h===void 0?function(j){return ze(j)?"styled.".concat(j):"Styled(".concat(xr(j),")")}(e):h,y=t.displayName&&t.componentId?"".concat(rt(t.displayName),"-").concat(t.componentId):t.componentId||g,d=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,w=t.shouldForwardProp;if(n&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;w=function(j,I){return k(j,I)&&$(j,I)}}else w=k}var E=new qr(r,y,n?o.componentStyle:void 0);function S(j,I){return function(x,l,K){var pe=x.attrs,Ft=x.componentStyle,Bt=x.defaultProps,Mt=x.foldedComponentIds,Gt=x.styledComponentId,Yt=x.target,Ht=ae.useContext(Wt),qt=pt(),_e=x.shouldForwardProp||qt.shouldForwardProp,Je=fr(l,Ht,Bt)||V,D=function(de,ne,fe){for(var oe,F=N(N({},ne),{className:void 0,theme:fe}),Oe=0;Oe<de.length;Oe+=1){var he=ee(oe=de[Oe])?oe(F):oe;for(var T in he)F[T]=T==="className"?G(F[T],he[T]):T==="style"?N(N({},F[T]),he[T]):he[T]}return ne.className&&(F.className=G(F.className,ne.className)),F}(pe,l,Je),le=D.as||Yt,re={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&D.theme===Je||(z==="forwardedAs"?re.as=D.forwardedAs:_e&&!_e(z,le)||(re[z]=D[z]));var Qe=function(de,ne){var fe=pt(),oe=de.generateAndInjectStyles(ne,fe.styleSheet,fe.stylis);return oe}(Ft,D),Pe=G(Mt,Gt);return Qe&&(Pe+=" "+Qe),D.className&&(Pe+=" "+D.className),re[ze(le)&&!jt.has(le)?"class":"className"]=Pe,K&&(re.ref=K),M.createElement(le,re)}(b,j,I)}S.displayName=m;var b=ae.forwardRef(S);return b.attrs=d,b.componentStyle=E,b.displayName=m,b.shouldForwardProp=w,b.foldedComponentIds=n?G(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=y,b.target=n?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=n?function(I){for(var x=[],l=1;l<arguments.length;l++)x[l-1]=arguments[l];for(var K=0,pe=x;K<pe.length;K++)Ge(I,pe[K],!0);return I}({},o.defaultProps,j):j}}),Ze(b,function(){return".".concat(b.styledComponentId)}),i&&Nt(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function dt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var ft=function(e){return Object.assign(e,{isCss:!0})};function Ur(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ee(e)||ce(e))return ft(H(dt(Re,Se([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?H(n):ft(H(dt(n,t)))}function He(e,t,r){if(r===void 0&&(r=V),!t)throw ue(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,Ur.apply(void 0,Se([o],i,!1)))};return n.attrs=function(o){return He(e,t,N(N({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return He(e,t,N(N({},r),o))},n}var zt=function(e){return He(Kr,e)},q=zt;jt.forEach(function(e){q[e]=zt(e)});const Xr=q.div`
  max-width: 450px;
  margin: 0 auto;

  @media (min-width: 1439px) {
    max-width: 1320px;
  }
`,an=({children:e})=>a.jsx(Xr,{children:e}),Zr=({handleClick:e})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:22,fill:"none",cursor:"pointer",onClick:e,children:[a.jsx("rect",{width:40,height:4,fill:"#1E1E1E",rx:2}),a.jsx("rect",{width:30,height:4,x:5,y:9,fill:"#1E1E1E",rx:2}),a.jsx("rect",{width:40,height:4,y:18,fill:"#1E1E1E",rx:2})]}),Jr=({handleClick:e})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:32,fill:"none",cursor:"pointer",onClick:e,children:[a.jsx("rect",{width:40,height:4,x:6.828,y:.5,fill:"#1E1E1E",rx:2,transform:"rotate(45 6.828 .5)"}),a.jsx("rect",{width:40,height:4,x:4,y:28.784,fill:"#1E1E1E",rx:2,transform:"rotate(-45 4 28.784)"})]}),Qr=q.button`
  padding: 10px 20px;
  background-color: var(--color-dark);
  color: white;
  width: 110px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--animation);
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    background-color: white;
    border-color: var(--color-blue);
    color: var(--color-blue);
    cursor: pointer;
  }
`,Vr=q.button`
  padding: 10px 20px;
  border: 2px solid var(--color-dark);
  color: var(--color-dark);
  width: 99px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--animation);
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: var(--color-blue);
    color: white;
    cursor: pointer;
  }
`,Tt=()=>a.jsxs(a.Fragment,{children:[a.jsx(Qr,{type:"button",children:"Register"}),a.jsx(Vr,{type:"button",children:"Sign in"})]}),en=({isDropped:e})=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:9,height:6,fill:"none",style:{transform:e?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease-in-out"},children:a.jsx("path",{fill:"#1E1E1E",fillRule:"evenodd",d:"M4.986 5.31a.7.7 0 0 1-.478.19.7.7 0 0 1-.478-.19L.206 1.62A.65.65 0 0 1 0 1.159.63.63 0 0 1 .198.69.68.68 0 0 1 .682.5a.7.7 0 0 1 .48.199l3.346 3.227L7.854.7a.69.69 0 0 1 .948.008.64.64 0 0 1 .198.455.64.64 0 0 1-.19.459z",clipRule:"evenodd"})}),Lt=({toggleDroppedList:e,isDroppedList:t})=>a.jsx(a.Fragment,{children:a.jsxs("ul",{className:"list",children:[a.jsx("li",{className:"listItem",children:a.jsx(B,{to:"/",children:"Home"})}),a.jsx("li",{className:"listItem",children:a.jsx(B,{to:"/about",children:"About us"})}),a.jsxs("li",{className:"listItem backdrop",children:[a.jsxs("div",{onClick:e,children:[a.jsx("p",{children:"Services"}),a.jsx(en,{isDropped:t})]}),a.jsxs("ul",{className:"dropped",children:[a.jsx("li",{children:a.jsx(B,{to:"/service1",className:"service",children:"Service 1"})}),a.jsx("li",{children:a.jsx(B,{to:"/service2",className:"service",children:"Service 2"})}),a.jsx("li",{children:a.jsx(B,{to:"/service3",className:"service",children:"Service 3"})})]})]}),a.jsx("li",{className:"listItem",children:a.jsx(B,{to:"/testimonials",children:"Testimonials"})})]})}),tn=q.div`
  position: fixed;
  top: 74px;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  transform: ${({$isOpen:e})=>e?"translateX(0)":"translateX(100%)"};
  transition: transform var(--animation);
  z-index: 100;
`,rn=q.div`
  padding: 20px;
  padding-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 450px;
  gap: 20px;
  margin: 0 auto;

  .list {
    list-style: none;
    padding: 0;
  }

  .listItem:not(:nth-last-child(-n + 2)) {
    margin-bottom: 20px;
  }

  .backdrop li {
    margin-bottom: 20px;
  }

  .backdrop {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .backdrop div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .backdrop div:hover {
    cursor: pointer;
  }

  .dropped {
    max-height: ${({$isDropped:e})=>e?"500px":"0"};
    opacity: ${({$isDropped:e})=>e?"1":"0"};
    overflow: hidden;
    transition: max-height var(--animation), opacity var(--animation);
  }

  .authButtons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  nav ul li a {
    color: var(--color-dark);
    transition: color 0.2s ease-in-out;
  }

  nav ul li p {
    transition: color 0.2s ease-in-out;
  }

  nav ul li a:hover,
  nav ul li a:focus {
    color: var(--color-blue);
  }

  nav ul li p:hover,
  nav ul li p:focus {
    color: var(--color-blue);
  }
`,nn=({isOpen:e})=>{const[t,r]=M.useState(!1),n=()=>{r(o=>!o)};return a.jsx(a.Fragment,{children:a.jsx(tn,{$isOpen:e,children:a.jsxs(rn,{$isDropped:t,children:[a.jsx("nav",{children:a.jsx(Lt,{isDroppedList:t,toggleDroppedList:n})}),a.jsx("div",{className:"authButtons",children:a.jsx(Tt,{})})]})})})},on=q.header`
  .headerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
    box-sizing: content-box;
  }

  .logo {
    font-size: 30px;
    font-weight: 800;
    color: transparent;
    -webkit-text-stroke: 2px var(--color-dark);
    letter-spacing: -0.03em;
    line-height: 34px;
  }

  .buttonWrapper {
    display: none;
  }

  .navWrapper {
    display: none;
  }

  .mobileMenu {
    max-height: 34px;
  }

  @media (min-width: 1439px) {
    .logo {
      font-size: 40px;
      width: 265px;
    }

    .mobileMenu {
      display: none;
    }

    .buttonWrapper {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .navWrapper {
      display: block;
    }

    .navWrapper .list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }

    .navWrapper .list a {
      color: var(--color-dark);
      transition: var(--animation);
    }

    .navWrapper .list .listItem {
      transition: var(--animation);
    }

    .navWrapper .list .listItem:hover,
    .navWrapper .list .listItem:focus {
      color: var(--color-blue);
    }

    .navWrapper .list a:hover,
    .navWrapper .list a:focus {
      color: var(--color-blue);
    }

    .backdrop {
      position: relative;
    }

    .navWrapper .backdrop div {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .navWrapper .backdrop div:hover {
      cursor: pointer;
    }

    /* Випадаючий список */
    .navWrapper ul .dropped {
      display: flex;
      flex-direction: column;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 138px;
    }

    .navWrapper ul .dropped li {
      transition: var(--animation);
      width: 100%;
    }

    .navWrapper ul .dropped li a {
      display: block;
      width: 100%;
      padding: 12px 32px;
      text-decoration: none;
      color: var(--color-dark);
      transition: color var(--animation);
      box-sizing: border-box;
    }

    .navWrapper ul .dropped li:hover,
    .navWrapper ul .dropped li:focus {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    .navWrapper ul .dropped li:hover a,
    .navWrapper ul .dropped li:focus a {
      color: var(--color-blue);
    }

    .dropped {
      position: absolute;
      top: 37px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      max-height: ${({$isDropped:e})=>e?"500px":"0"};
      opacity: ${({$isDropped:e})=>e?"1":"0"};
      overflow: hidden;
      transition: max-height var(--animation), opacity var(--animation);
    }
  }
`,cn=()=>{const[e,t]=M.useState(!1),[r,n]=M.useState(!1),o=M.useRef(null),i=()=>{t(c=>!c)},s=()=>{n(c=>!c)};return M.useEffect(()=>{const c=u=>{o.current&&!o.current.contains(u.target)&&n(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]),a.jsx(on,{$isDropped:r,children:a.jsxs("div",{className:"headerWrapper",children:[a.jsx("nav",{className:"navWrapper",ref:o,children:a.jsx(Lt,{isDroppedList:r,toggleDroppedList:s})}),a.jsx(B,{to:"/",className:"logo",children:"Logo"}),a.jsx("div",{className:"buttonWrapper",children:a.jsx(Tt,{})}),a.jsxs("div",{className:"mobileMenu",children:[e?a.jsx(Jr,{handleClick:i}):a.jsx(Zr,{handleClick:i}),a.jsx(nn,{isOpen:e})]})]})})};export{an as C,cn as H,q as d};
