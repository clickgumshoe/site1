function _log(){_HWIO.data.__debug&&console.log.apply(console,arguments)}function instr(a,b){for(var c=0;c<b.length;c++)if(-1!==a.toLowerCase().indexOf(b[c].toLowerCase()))return!0}function _sym(a,b){return String.fromCharCode.apply(void 0,a.split("").map(function(a){return a.charCodeAt(0)^(b||13)}))}function to_ascii(a){return unescape(encodeURIComponent(a))}function to_unicode(a){return decodeURIComponent(escape(a))}function enqueue_assets(list,deps,dep0,tp,cb){function listpath(a){var b=[],c={};return function(a,d){if(d=d||"","object"!=typeof a)return!0;for(var e in a)c[e]?c[e]++:c[e]=1,arguments.callee(a[e],d+"*"+e)&&b.push(d.substring(1)+"*"+e)}(a),[b,c]}var sortDict=function(a,b){var c={};return b.forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])}),a=_HWIO.assign(c,a)},i,load={},list,dep,stat={},path={};"js"!=tp||list[dep0]||(dep0="jquery");var path_dep=function(a,b){path[a]||(path[a]=""),-1===path[a].indexOf(b+",")&&(path[a]+=b+",")},rmArr=function(a,b){var c=a.indexOf(b);-1!==c&&a.splice(c,1)},jsonP=function(ar,p,rm,set){try{if(set)eval('ar["'+p.join('"]["')+'"]=rm;');else{if(!rm)return eval('ar["'+p.join('"]["')+'"]');eval('delete ar["'+p.join('"]["')+'"];')}}catch(a){_log(a)}};for(i in list)list[i].t==tp&&(list[i].deps?(dep=list[i].deps.split(","),dep.forEach(function(a,b){list[a]||(a=dep0),void 0==load[a]&&(load[a]={},stat[a]=0),load[a][i]=1,stat[i]=0,path_dep(i,a)})):(void 0==load[dep0]&&(load[dep0]={},stat[dep0]=0),i!=dep0&&(load[dep0][i]=1,stat[i]=0,path_dep(i,dep0))));var rm=[],queue={},queue1={},inject=function(a,b){for(var c in a)if(1==a[c])b&&b[c]&&(a[c]=b[c],rm.push(c));else for(var d in a[c])a[d]&&(a[c][d]=a[d],rm.push(d),inject(a[c][d],a))};inject(load,null),rm.forEach(function(a){delete load[a]}),load=sortDict(load,[dep0]);var load1=JSON.parse(JSON.stringify(load)),r1={},t=listpath(load1),paths=t[0],i,k,a,r={},jp;for(i=0;i<paths.length;i++)k=paths[i].split("*").pop(),r[k]?("string"==typeof r[k]&&(r[k]=[r[k].split("*").length+"|"+r[k]]),r[k].push(paths[i].split("*").length+"|"+paths[i])):r[k]=paths[i];for(k in r)if("object"==typeof r[k])for(r[k].sort().reverse(),i=1;i<r[k].length;i++)for(a=r[k][i].split("|")[1].split("*"),a.length>=3&&(r1[a[a.length-1]]=1),jsonP(load1,a,1);;){if(a.pop(),!(jp=jsonP(load1,a))||0!=Object.keys(jp).length)break;t[1][a[a.length-1]]>1?(jsonP(load1,a,1),t[1][a[a.length-1]]--):(jsonP(load1,a,1,1),r1[a[a.length-1]]=1)}load=load1;var load_assets=function(a,b){var c,d,e=function(){var a,b,c,d,e=1;for(a in queue1){for(c=[],e=1,b=0;b<queue1[a].kk.length;b++){if(!stat[queue1[a].kk[b]]){e=0;break}c.push(b)}e?(_log("*",a,path[a]),d=queue1[a].cb,delete queue1[a],_HWIO["_add"+tp](a,d)):(c.forEach(function(b){rmArr(queue1[a].kk,b)}),c.length&&(queue1[a].kk=queue1[a].kk.filter(function(a){return a})))}};for(c in a)a.hasOwnProperty(c)&&(!b&&deps[c]?queue[c]=a[c]:(d=function(b){return function(c){var d,f,g,h={};if(!c){if(stat[b]=1,"js"==tp&&"jquery"==b&&"undefined"!=typeof jQuery){var i=jQuery.fn.ready;jQuery.fn.ready=function(a){var b=this;return b[0]==document?(_HWIO.docReady(function(){a.apply(b,[jQuery])}),b):i.apply(b,arguments)}}"js"==tp&&_HWIO._readyjs_[b]&&(_HWIO._readyjs_[b].forEach(_HWIO._readyjs_cb),delete _HWIO._readyjs_[b]),"css"==tp&&"hpp-s-0"==b&&_HWIO.do_event("loadjs")}if(e(),!c){for(d in queue){for(f=0;f<deps[d].length&&(g=_HWIO.data["_"+tp+"_"][deps[d][f]]);f++);g&&(h[d]=queue[d],delete queue[d],load_assets(h,1))}load_assets(a[b])}}}(c),!function(a){if(!r1||!path[a])return!1;if(r1[a])return!0;var b,c=path[a].split(",");for(c.pop(),b=0;b<c.length;b++)if(r1[c[b]])return r1[a]=1,!0}(c)?_HWIO["_add"+tp](c,d):(queue1[c]={cb:d,kk:path[c].split(",")},queue1[c].kk.pop(),d(1))));-1===Object.values(stat).indexOf(0)&&(_HWIO.data["done_"+tp]||(_HWIO.data["done_"+tp]=1,delete _HWIO.data["_"+tp+"0_"],"function"==typeof cb&&cb()),_log("%c ..done","color:pink",tp))};return load_assets(load),load}function load_extra(a,b,c){var d=_HWIO.extra_assets;if("js"==a)return enqueue_assets(d,c||{},d["hpp-0"]?"hpp-0":"jquery","js",b);enqueue_assets(d,c||{},d["hpp-s-0"]?"hpp-s-0":"hpp-style","css",b)}function boot(){document.querySelectorAll("style[media]").forEach(function(a){"not all"==a.getAttribute("media")&&a.removeAttribute("media")})}function insertE(a,b,c){if(!a||!a.parentNode)return _log("%c failed to insert","color:red",b,a),console.trace();c?a.parentNode.insertBefore(b,a.nextSibling):a.parentNode.insertBefore(b,a)}function removeEvent(a,b,c){a.removeEventListener?a.removeEventListener(b,c):a.detachEvent&&a.detachEvent("on"+b,c)}function _fireOnce(a){a||(a={},_HWIO.forUser=_HWIO.readyjs),lazySizesConfig.init||lazySizes.init(),"click"==a.type&&a.preventDefault();var b=arguments.callee,c=function(){if(!_HWIO.__readyit){_HWIO.__readyit=1;var c,d=["click","mousemove","scroll","resize","touchmove","mousewheel"];for(c=0;c<d.length;c++)removeEvent(document,d[c],b),-1!==["scroll","resize"].indexOf(d[c])&&removeEvent(window,d[c],b);_log("%c remove init","color:orange",a.type),_HWIO._readyjs_._it.forEach(function(a){"function"==typeof a?_HWIO.readyjs(a):_HWIO.readyjs(a[0],a[1])}),_HWIO._readyjs_._it=[]}};b.fired||(b.fired=1,_HWIO._readyjs_cb=function(a){_HWIO.__readyit||_HWIO.do_event("run_script",1,"function"==typeof a?a.toString():a[0].toString())?"function"==typeof a?a("undefined"!=typeof jQuery?jQuery:null):_HWIO.waitForExist(function(){a[0].apply(this,a.slice(1))},a[1]):(_HWIO._readyjs_._it.push(a),_log("%c push readyjs to _it","color:orange"))},_HWIO.docReady(function(){boot();var a=function(){_HWIO.load_content(function(a){load_extra("js",function(){var a;_HWIO.__readyjs=1;for(a in _HWIO._readyjs_)"_it"!=a&&(_HWIO._readyjs_[a].forEach(_HWIO._readyjs_cb),delete _HWIO._readyjs_[a])})})};_HWIO.extra_assets["hpp-0"]?(_HWIO.add_event("loadjs",a),load_extra("css")):load_extra("css",a)},50),_log("%c add assets","color:orange",a.type)),"click"==a.type&&(c(),_HWIO.__readyjs||_HWIO.readyjs(function(){_HWIO.data.clicked=a.target,setTimeout(function(){a.target.click()}),_log("%c click on","color:blue",a.target)})),a.type&&setTimeout(c,10)}function _fireSecond(a){a&&_HWIO._readyuse_&&(["mousemove","mousewheel","scroll","touchmove"].forEach(function(a){removeEvent(document,a,_fireSecond)}),_HWIO._readyuse_.forEach(_HWIO.readyjs.bind(_HWIO)),delete _HWIO._readyuse_,_HWIO.__readyit_1=1)}!function(a,b){var c=function(a,b){"use strict";var c,d;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:d,noSupport:!0};var e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=function(){b=null,a()},e=function(){var a=f.now()-c;a<99?k(e,99-a):(m||d)(d)};return function(){c=f.now(),b||(b=k(e,99))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=-1,R=function(a){P--,(!a||P<0||!a.target)&&(P=0)},S=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},T=function(a,c){var d,f=a,g=S(a);for(G-=c,J+=c,H-=c,I+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},U=function(){var a,f,h,j,k,l,n,o,q,r,s,t,u=c.elements;if((p=d.loadMode)&&P<8&&(a=u.length)){for(f=0,Q++;f<a;f++)if(u[f]&&!u[f]._lazyRace)if(!N||c.prematureUnveil&&c.prematureUnveil(u[f]))aa(u[f]);else if((o=u[f][i]("data-expand"))&&(l=1*o)||(l=O),r||(r=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r,s=r*d.expFactor,t=d.hFac,K=null,O<s&&P<1&&Q>2&&p>2&&!b.hidden?(O=s,Q=0):O=p>1&&Q>1&&P<6?r:0),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[f].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(d.loadHidden||S(u[f]))&&(m&&P<3&&!o&&(p<3||Q<4)||T(u[f],l))){if(aa(u[f]),k=!0,P>9)break}else!k&&m&&!j&&P<4&&Q<4&&p>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[f][i](d.sizesAttr)))&&(j=g[0]||u[f]);j&&!k&&aa(j)}},V=B(U),W=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;R(a),s(b,d.loadedClass),t(b,d.loadingClass),u(b,Y),v(b,"lazyloaded")},X=A(W),Y=function(a){X({target:a.target})},Z=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},$=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},_=A(function(a,b,c,e,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,d.loadingClass),p&&(clearTimeout(o),o=k(R,2500),u(a,Y,!0)),l&&q.call(j.getElementsByTagName("source"),$),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?Z(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),W(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&P--},!0)}),aa=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,P++,_(a,b,f,e,c))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){3==d.loadMode&&(d.loadMode=2),ba()},da=function(){if(!m){if(f.now()-y<999)return void k(da,999);m=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){y=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+d.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&aa(a)})})}}),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){d.init&&F()}),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{}),function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],b):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(a,c){var d,e;g[a]||(d=b.createElement(c?"link":"script"),e=b.getElementsByTagName("script")[0],c?(d.rel="stylesheet",d.href=a):d.src=a,g[a]=!0,g[d.src||d.href]=!0,e.parentNode.insertBefore(d,e))}var e,f,g={};b.addEventListener&&(e=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(a){var b,g,h;if(a.detail.instance==c&&!a.defaultPrevented){var i=a.target;if("none"==i.preload&&(i.preload=i.getAttribute("data-preload")||"auto"),null!=i.getAttribute("data-autoplay"))if(i.getAttribute("data-expand")&&!i.autoplay)try{i.play()}catch(a){}else requestAnimationFrame(function(){i.setAttribute("data-expand","-10"),c.aC(i,c.cfg.lazyClass)});(b=i.getAttribute("data-link"))&&d(b,!0),(b=i.getAttribute("data-script"))&&d(b),(b=i.getAttribute("data-require"))&&(c.cfg.requireJs?c.cfg.requireJs([b]):d(b)),(g=i.getAttribute("data-bg"))&&(a.detail.firesLoad=!0,e(g,function(){i.style.backgroundImage="url("+(f.test(g)?JSON.stringify(g):g)+")",a.detail.firesLoad=!1,c.fire(i,"_lazyloaded",{},!0,!0)})),(h=i.getAttribute("data-poster"))&&(a.detail.firesLoad=!0,e(h,function(){i.poster=h,a.detail.firesLoad=!1,c.fire(i,"_lazyloaded",{},!0,!0)}))}},!(f=/\(|\)|\s|'/)))}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Object.values||(Object.values=function(a){return Object.keys(a).map(function(b){return a[b]})}),_HWIO.entity=function(a){var b,c={"&quot;":'"',"&amp;":"&","&lt;":"<","&gt;":">","&circ;":"ˆ","&tilde;":"˜","&lsquo;":"‘","&rsquo;":"’"};for(b in c)a=a.split(b).join(c[b]);return a},_HWIO.detectMob=function(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a},_HWIO.do_event=function(a,b,c){var d=[];return void 0!==this.filters[a]&&this.filters[a].length>0&&(this.filters[a].forEach(function(a){d[a.priority]=d[a.priority]||[],d[a.priority].push(a.callback)}),d.forEach(function(a){a.forEach(function(a){b=a(b,c)})})),b},_HWIO.load_content=function(a){function b(a,b,c){if(!a)return void g.push(c);if(a.parentNode){document.createRange().createContextualFragment(b).childNodes.forEach(function(b){insertE(a,b.cloneNode(!0),0)}),a.parentNode.removeChild(a)}}function c(a,f,h){h||(h=a,e[a]=0),_log("%c "+(-1!==g.indexOf(a)?"("+a+")":a)+" <- "+h,"color:gray"),e[h]&&e[h]--,b(document.querySelector('div[data-id="'+a+'"]'),d[a].text,a);var i=document.createRange().createContextualFragment(d[a].text).querySelectorAll("div[data-id]:empty");e[h]+=i.length,i.forEach(function(a){c(a.getAttribute("data-id"),f,h)}),!e[h]&&f&&setTimeout(f,500)}var d,e={},f=1,g=[];_HWIO.ajax.info?function(a,b){var c=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");c.onreadystatechange=function(){4===c.readyState&&b(c.responseText?JSON.parse(c.responseText):{})},c.open("GET",a),c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),c.send()}(_HWIO.ajax.ajax_url+"?action=hpp_dyna_content&"+Object.keys(_HWIO.ajax.info).map(function(a){return a+"="+_HWIO.ajax.info[a]}).join("&"),function(b){if(b.data&&!(b.data instanceof Array)){var e,g=Object.keys(b.data).length;d=b.data;for(e in b.data)c(e,function(){f++==g&&a(g)})}}):a(0)},(instr(location.href,["?cls=","&cls="])||!instr(navigator.userAgent,["ankgYGh5IH9kdQ==","YWRqIGV5ZWIgeH5o","fWRjaiBpYmB9IGxqaH4gfWhoaQ==","XVleWQ==","VTw8Ng==","en0/fiB9aGhp"].map(function(a){return to_unicode(_sym(atob(a))).split("-").join("")}))&&!navigator.webdriver)&&setTimeout(_fireOnce),_HWIO._addjs=function(a,b){return _HWIO.data._js0_||(_HWIO.data._js0_={}),_HWIO.data._js_||(_HWIO.data._js_={},document.querySelectorAll("script[src]").forEach(function(a){var b=a.getAttribute("src");b&&(_HWIO.data._js_[b]=1)})),"string"==typeof a&&(_HWIO.extra_assets[a]?(_log("%c #"+a,"color:gray"),a=_HWIO.assign(_HWIO.extra_assets[a],{id:a})):a=_HWIO.assign({l:arguments[0]},arguments[1]||{})),"object"==typeof b&&(a=_HWIO.assign(a,b)),a.l=_HWIO.entity(a.l),_HWIO.do_event("hpp_allow_js",1,a)?_HWIO.data._js_[a.l]?("function"==typeof b&&setTimeout(b),_log("%c exist js "+a.l,"color:red")):_HWIO.data._js0_[a.l]?void("function"==typeof b&&setTimeout(b)):(_HWIO.data._js0_[a.l]=1,void function(c,d,e,f){var g,h,i,j=_HWIO.data._lj_&&_HWIO.data._lj_.parentNode?null:c.querySelector('script[src*="optimize.js"]');i=c.createElement("script"),a.defer&&(i.defer=1),i.async=1,i.src=a.l;for(g in e)-1===["l","t","deps","async","defer","extra"].indexOf(g)&&(h=e[g],"id"!=g||e.extra||h.endsWith("-js")||(h+="-js"),i.setAttribute(g,h));i.onload=function(){_HWIO.data._js_[a.l]=1,_log("%c "+e.id,"color:blue",a.l),"function"==typeof b&&b()},i.onerror=function(){_HWIO.data._js_[a.l]=1,"function"==typeof b&&b()},insertE(_HWIO.data._lj_&&_HWIO.data._lj_.parentNode?_HWIO.data._lj_:j,i,1),_HWIO.data._lj_=i}(document,0,a,window)):void("function"==typeof b&&setTimeout(b))},_HWIO._addcss=function(a,b){if(_HWIO.data._css0_||(_HWIO.data._css0_={}),_HWIO.data._css_||(_HWIO.data._css_={},document.querySelectorAll('link[href][rel*="stylesheet"]').forEach(function(a){var b=a.getAttribute("href");b&&(_HWIO.data._css_[b]=1)})),"string"==typeof a&&(_HWIO.extra_assets[a]?(_log("%c ."+a,"color:gray"),a=_HWIO.assign(_HWIO.extra_assets[a],{id:a})):a=_HWIO.assign({l:arguments[0]},arguments[1]||{})),a.l=_HWIO.entity(a.l),!_HWIO.do_event("hpp_allow_css",1,a))return void("function"==typeof b&&setTimeout(b));if(_HWIO.data._css_[a.l])return"function"==typeof b&&setTimeout(b),_log("%c exist css "+a.l,"color:red");if(_HWIO.data._css0_[a.l])return void("function"==typeof b&&setTimeout(b));_HWIO.data._css0_[a.l]=1;var c,d,e=document.createElement("link"),f=_HWIO.assign(a,{rel:"stylesheet",media:a.media?a.media:"all",href:a.l}),g=_HWIO.data._ls_&&_HWIO.data._ls_.parentNode?null:document.getElementById("critical-css");a._id&&(f.id=a._id,delete a._id);for(c in f)-1===["l","t","deps","extra"].indexOf(c)&&(d=f[c],"id"!=c||f.extra||d.endsWith("-css")||(d+="-css"),e.setAttribute(c,d));e.onload=function(){_HWIO.data._css_[a.l]=1,_log("%c "+f.id,"color:green",a.l),"function"==typeof b&&b()},e.onerror=function(){_HWIO.data._css_[a.l]=1,"function"==typeof b&&b()},_HWIO.data._ls_&&_HWIO.data._ls_.parentNode?insertE(_HWIO.data._ls_,e,1):g?insertE(g,e,1):insertE(document.getElementsByTagName("head")[0].childNodes[0],e,1),_HWIO.data._ls_=e},_HWIO.addEvent(document,"click",_fireOnce),_HWIO.addEvent(document,"mousemove",_fireOnce),_HWIO.addEvent(document,"mousewheel",_fireOnce),_HWIO.addEvent(document,"scroll",_fireOnce),_HWIO.addEvent(document,"touchmove",_fireOnce),_HWIO.addEvent(window,"scroll",_fireOnce),["mousemove","mousewheel","scroll","touchmove"].forEach(function(a){_HWIO.addEvent(document,a,_fireSecond)});