_HWIO.events={},_HWIO.addEvent=function(e,t,s,n){this.events[e]||(this.events[e]={callback:[]}),"function"==typeof t&&this.events[e].callback.push({func:t,args:s}),n&&this.events[e]&&this.events[e].fired&&(s=s||{},this.events[e].args&&(s=_HWIO.assign(this.events[e].args,s)),this.fireEvent(e,s,1))},_HWIO.fireEvent=function(e,s,n){var r=this;this.events[e]?(_HWIO.events[e].args||(_HWIO.events[e].args={}),this.events[e].callback.forEach(function(e){var t;n&&e.executed||(e.executed=1,t={},(s||e.args)&&(t=_HWIO.assign({},s||{},e.args||{})),e.func.bind(r)(t))}),void 0!==this.events[e]&&(this.events[e].fired=1)):this.events[e]={fired:1,callback:[]}},_HWIO.hasEvent=function(e){return void 0!==this.events[e]},_HWIO.removeEvent=function(e){this.events[e]&&delete this.events[e]},_HWIO.isFireEvent=function(e){return!(!this.events[e]||!this.events[e].fired)},_HWIO.observer={data:{},init:function(){var r=this;"undefined"!=typeof MutationObserver?(this.observer=new MutationObserver(function(e){e.forEach(function(e){var t,s=jQuery(e.target).attr("id");if(!s&&(t=jQuery(e.target).attr("class")))for(var n in t=t.split(/[\s]+/g))if(r.data["done_observe_"+t[n]]){s=t[n];break}s&&r.data["done_observe_"+s]&&(r.data["done_observe_"+s].done||(_HWIO.fireEvent("observe_"+s,{mutation:e}),_log("\ttrigger success",s)))})}),_log("observer.init")):_log("%c not support Observer","color:red")},track:function(e,t,s,n){function r(){return"string"==typeof e?jQuery(e).get(0):e}var i=this;this.observer||this.init(),"string"!=typeof e||n||(n=e),t=t||{childList:!0,attributes:!0},"string"==typeof n?n=n.replace(/^(\.|\#)/g,""):(n=("hw"+Math.random()).replace(".",""),r()&&r().classList.add(n)),_HWIO.waitForExist(function(){var e=r();e&&i.observer.observe(e,t),_log("set observe",n,e?"success":"error")},r,1e3,10,"wait_observe_"+n),this.data["done_observe_"+n]={done:0,callback:function(e){void 0!==e&&(i.data["done_observe_"+n].done=e)}},_HWIO.addEvent("observe_"+n,function(e){s(e,i.data["done_observe_"+n].callback)},t)},is_support:function(){return"undefined"!=typeof MutationObserver}};

/*window.hpp_on_scroll=function(){}*/
!function(o){var n;jQuery(window).height();jQuery(window).scroll(function(){n&&window.clearTimeout(n),n=window.setTimeout(function(){o.hpp_on_scroll&&o.hpp_on_scroll()},500)})}(window);
/*https://github.com/customd/jquery-visible*/
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);
/*! js-cookie v3.0.0-rc.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};return function n(r,o){function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n=r.write(n,t);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=t.read(c[0]);if(o[f]=r.read(u,f),e===f)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(t,{path:"/"})});

_HWIO.cookies_enabled=function (){
  var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled){ 
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return cookieEnabled;
};
//_HWIO.data.gencss=0;
/*css*/
if(_HWIO.data.gencss)_HWIO.readyjs(function() {
    var critical = {
        //found: $('style[id="critical-css"][data-unique]').length? parseInt($('style[id="critical-css"][data-unique]').attr('data-unique'))==1: $('style[id="critical-css"][name]').length, 
        found: $('style[id="critical-css"][name]').length,
        key: $('meta[name="critical-css-name"]').attr('content'),
    };
    if(_HWIO.cookies_enabled() && (!document.referrer || document.referrer.indexOf(location.hostname)!==-1)
        && !instr(location.href,['?hpp-gen-critical=','&hpp-gen-critical=','/page/']) //prevent loop
        && (!critical.found) //|| $('style[id="critical-css"][data-unique]').attr('data-unique')==0) 
        && !navigator.webdriver 
    ) {
        if(!critical.key) critical.key = $('style[id="critical-css"][name]').attr('name');
        critical.key0 = critical.key.split('-');critical.key0.pop();critical.key0 = critical.key0.join('-');
        critical.name = critical.key.indexOf('page-')!==-1? critical.key: critical.key0;

        var queue=Cookies.get('hpp_gen_css')||{},fetch,
            classlist = Array.from(document.body.classList).filter(function(v){return v.indexOf('postid-')==0||v.indexOf('page-id-')==0}),pid=0;
        
        if(typeof queue=='string') queue = JSON.parse(queue);
        fetch=queue[critical.name]? 1:0;
        if(classlist.length) pid=classlist[0].replace(/^(postid-|page-id-)/g,'');
        //make sure no cache page
        if(!fetch && !instr(location.href,['?__hq=no-cache','&__hq=no-cache'])) {
            location.href+= (location.href.indexOf('?')!==-1? '&':'?')+'__hq=no-cache-'+(+new Date());return ;
        }
        //window.history.pushState( {} , '', location.pathname );
        if(!queue[critical.name]) {
            queue[critical.name] = 1;
            Cookies.set('hpp_gen_css',JSON.stringify(queue), { expires: 1 });
            //critical.fetch=0;
        }
        if(0&& fetch) {
            _log('%c wait css','color:pink');
            window.history.pushState( {} , '', location.pathname );
        }else {//jQuery.getJSON('https://api.ipify.org/?format=json').done(function(r){
            $.ajax({
                url: _HWIO.ajax.ajax_url,
                method: 'POST',
                //dataType:'json',
                data:{
                    action: 'hpp_generate_css', nonce: +new Date(), 
                    url: location.href.replace(/\?(gclid|fbclid|utm_source|__hq)=.*/g,'').split('#')[0], client_ip: '',//r.ip,
                    name: critical.key,name0: critical.key0, post_id: pid, fetch: fetch, 
                },
                success: function(dt){
                    if(dt.error) _log('[error_generate_css]',dt);
                    else if(dt.data.css){
                        _log('fetch css for this page success');
                    }
                    //else _log('wait');
                    window.history.pushState( {} , '', location.pathname );
                },
                error: function(e){
                    window.history.pushState( {} , '', location.pathname );_log('%c failed ajax','color:red');
                }
            });
            if(fetch) _log('%c wait css','color:pink');else _log('%c generating css','color:red');
        //});
        }
    }

})

//video
function hpp_fixVideoSource($) {
    //if(typeof mejs=='undefined') return;
    if(typeof mejs!='undefined' && mejs.i18n.language)mejs.i18n.language('vi');

    $('video source[data-src],audio source[data-src],audio[data-src]').each(function(){
        $(this).attr('src', $(this).data('src'));
        $(this).removeAttr('data-src');

        //if error, disable it: $('video, audio')
        $(this).mediaelementplayer({
            // Do not forget to put a final slash (/)
            pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
            // this will allow the CDN to use Flash without restrictions (by default, this is set as `sameDomain`)
            shimScriptAccess: 'always'
        });
    });
    //$('.mejs-container.wp-video-shortcode').css('height','');
    setTimeout(function(){
        $('.mejs-container video').each(function(){
            $(this).closest('.mejs-container').height($(this).height());
        });
    },500)
}

function hpp_delay_video($) {    
    //if(!$('.start-video').length) return;
    var alert=0;
    _HWIO._addjs('https://www.youtube.com/iframe_api');
    $('body').on('click','.start-video', function(){
        var id = 'v'+Math.random().toString(36).substring(7), video_wrapper = $(this).closest('.yt-video-place'), h=video_wrapper.width()*3/5,
            vid=document.createElement('div'), playNxt=$('#hpp_mPlayNxt');
        video_wrapper.height(h);
        $(this).closest('.video-fit.video').removeClass('lazy-vd');    //flatsome ux_video.php
        //_HWIO.detectMob()? 'height:150px':'height:300px'
        if(playNxt.length==0) {
            playNxt=$('<div id="hpp_mPlayNxt"></div>');
            playNxt.html('<div class="cover"></div><div class="yt-video-place embed-responsive">'+video_wrapper.html()+'</div>');
            playNxt.find('.start-video').click(function(){
                playNxt.data('pl').playVideo();playNxt.hide();video_wrapper[0].scrollIntoView();
            });
            playNxt.hide().appendTo('body');
        }
        else playNxt.find('img:eq(0)').attr('src', video_wrapper.find('img:eq(0)').attr('src'));
        
        video_wrapper.empty().append(vid);
        var player=function(){
            if(typeof YT=='object') {
                var _player=new YT.Player(vid, {
                  height: h+'px',
                  width: '100%',
                  videoId: video_wrapper.data('yt-url').replace(/\?.+/g, '').replace('https://www.youtube.com/embed/',''),
                  controls:1,
                  loop: 1,
                  events: {
                    onReady: function (event) {
                        //_player.setPlaybackRate(2);
                        event.target.playVideo();
                        playNxt.data('pl', event.target);
                        var pl=event.target;setTimeout(function(){pl.playVideo();},1000)    //if safari, try a least 1s
                        if(alert) setTimeout(function(){
                            //hit(event.data==YT.PlayerState.PLAYING);
                            if( [YT.PlayerState.PLAYING,YT.PlayerState.BUFFERING].indexOf(window.ytevt.data)===-1) {
                                playNxt.show();
                            }
                        },2000);
                    },
                    onStateChange: function(event){
                        window.ytevt=event;//_player.stopVideo();   //test
                        if(event.data==YT.PlayerState.ENDED) {
                            _player.seekTo(0);
                        }
                    }
                  }
                });
            }
            else video_wrapper.html('<iframe id="'+id+'" allowfullscreen frameborder="0" width="100%" style="height:'+(h)+'px !important" src="' + video_wrapper.data('yt-url') + '"></iframe>');
        };
        if(typeof YT=='object') player();else _HWIO.waitForExist(player, 'YT');
    });   
    
}
function hpp_run_lazy($) {
    //html tag ie: script
    var fix_attr = function(){
        this.setAttribute('src', this.getAttribute('data-src'));this.removeAttribute('data-src');this.classList.remove('lazy');
    };
    //img, div bg
    $(".h-lazy,.lazyload").addClass('lazy').removeClass('h-lazy lazyload');
    //$('.lazy').each(function(){lazySizes.loader.unveil(this);$(this).show();setTimeout(function(){$('.lazyloading').addClass('lazyloaded').removeClass('lazyloading')},3000);});   //no
    $('iframe[data-src]:not(.lazy)').each(fix_attr);
    $('img[srcset]').each(function(){ this.removeAttribute('srcset'); });//img[srcset*='data:image']
    $('script[data-src]').each(fix_attr); 
    $('script[type*="."]').each(function(){
        this.setAttribute('type', this.getAttribute('type').split('.')[1]);
    });
    setTimeout(function(){
        $('img.lazyloaded[src*="data:image"]').addClass('lazy');
        //$('img.lazy[src*="data:image"]').each(fix_attr);
    },1000);
}
/*
function hpp_tracklog() {
    var send = function(){
        ga('create', 'UA-175072400-61', 'auto',{'name':'w2p'});//197717477
        //ga('w2p.send', {'hitType': 'event','eventCategory': 'websites','eventAction': 'active','eventLabel': 'url','eventValue': location.hostname});
        ga('w2p.send', 'event', 'websites', 'play-wp2speed', location.hostname);
        _log('track log');
    };
    if(_HWIO.data.disalog || Cookies.get('w2ptrack')) return;
    Cookies.set('w2ptrack', 1, { expires: 7 });
    _HWIO.waitForExist(function(){
        if(typeof ga!='function') {
            _HWIO._addjs('https://www.google-analytics.com/analytics.js');
            _HWIO.waitForExist(send, 'ga');
        }
        else send();
    }, function(){return typeof ga=='function'}, 1000,5, 'ga');
}
*/
//_HWIO.readyjs
_HWIO.forUser(function($){
    if(typeof $=='undefined') $=jQuery;
    //make sure this file fired, may duplicate?
    setTimeout(function(){
        $(document).trigger('ready');
        $(window).trigger('load');
    });
    hpp_run_lazy($);

    hpp_fixVideoSource($);
    hpp_delay_video($);

    /*next-js*/
});
if(typeof $=='undefined') $=jQuery;
jQuery( document ).ajaxSuccess( function( event, jqxhr, settings ){
    hpp_run_lazy(jQuery);
});

//lazyload event
document.addEventListener('lazyloaded', function(e){
    //fix google map
    if(e.target.tagName.toLowerCase()=='iframe' && e.target.getAttribute('src') && e.target.getAttribute('src').indexOf('www.google.com/maps/embed')!==-1){
        e.target.setAttribute('src',e.target.getAttribute('src')+'&__tm'+Math.random());
    }
});
document.querySelector('body').classList.remove('hpp-loading');
//iframe[data-src*='www.google.com/maps/embed'],iframe[src*='www.google.com/maps/embed'];
//_HWIO.waitForExist(function(){},function(){return document.querySelectorAll("iframe").length})
document.querySelectorAll("iframe").forEach(function(e){e.style.setProperty('display','initial');});
//mobile-friendly,cls: should 1s
//setTimeout(function(){jQuery('.wp-caption img').css('visibility','visible');},900);
var _t=setInterval(function(){ if(i++<5)window.dispatchEvent(new Event('resize'));else clearInterval(_t)},1000),i=0;
//hpp_tracklog();
/*end-js*/

$('[data-animate]').removeAttr('data-animate');
$('.slider-wrapper').attr('style','max-height:initial !important;')
_HWIO.waitForExist(function(){
$("[data-countdown]").each(function(){var t=$(this),s=$(this).data("countdown"),n=$(this).data("text-hour"),a=$(this).data("text-min"),e=$(this).data("text-week"),r=jQuery(this).data("text-day"),o=jQuery(this).data("text-sec"),u=jQuery(this).data("text-min-p"),d=jQuery(this).data("text-hour-p"),i=jQuery(this).data("text-week-p"),p=jQuery(this).data("text-day-p"),h=jQuery(this).data("text-sec-p"),y=jQuery(this).data("text-plural"),g=n+y,j=r+y,Q=e+y,c=a,x=o;d&&(g=d),u&&(c=u),i&&(Q=i),p&&(j=p),h&&(x=h),t.countdown(s).on("update.countdown",function(t){var s="<span>%-H<strong>%!H:"+n+","+g+";</strong></span><span>%-M<strong>%!M:"+a+","+c+";</strong></span><span>%-S<strong>%!S:"+o+","+x+";</strong></span>";0<t.offset.days&&(s="<span>%-d<strong>%!d:"+r+","+j+";</strong></span>"+s),0<t.offset.weeks&&(s="<span>%-w<strong>%!w:"+e+","+Q+";</strong></span>"+s),jQuery(this).html(t.strftime(s))}).on("finish.countdown",function(t){var s="<span>%-H<strong>%!H:"+n+","+g+";</strong></span><span>%-M<strong>%!M:"+a+","+c+";</strong></span><span>%-S<strong>%!S:"+o+","+x+";</strong></span>";jQuery(this).html(t.strftime(s))})});
},function(){return $().countdown;});



$('.woocommerce-product-gallery').css({'overflow':'', 'max-height':''});
    
