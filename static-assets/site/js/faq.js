 WebFontConfig = {
    google: { families: [ 'PT+Sans:400,700:latin,cyrillic', 'PT+Serif:400,700:latin,cyrillic' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/*** СЛАЙДЕР ***/
/**
 * Copyright (c) 2012 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.7
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
(function($){$.fn.adGallery=function(options){var defaults={loader_image:'loader.gif',start_at_index:0,update_window_hash:true,description_wrapper:false,thumb_opacity:0.7,animate_first_image:false,animation_speed:400,width:false,height:false,display_next_and_prev:true,display_back_and_forward:true,scroll_jump:0,slideshow:{enable:true,autostart:false,speed:5000,start_label:'Start',stop_label:'Stop',stop_on_scroll:true,countdown_prefix:'(',countdown_sufix:')',onStart:false,onStop:false},effect:'slide-hori',enable_keyboard_move:true,cycle:true,hooks:{displayDescription:false},callbacks:{init:false,afterImageVisible:false,beforeImageVisible:false}};var settings=$.extend(false,defaults,options);if(options&&options.slideshow){settings.slideshow=$.extend(false,defaults.slideshow,options.slideshow);};if(!settings.slideshow.enable){settings.slideshow.autostart=false;};var galleries=[];$(this).each(function(){var gallery=new AdGallery(this,settings);galleries[galleries.length]=gallery;});return galleries;};function VerticalSlideAnimation(img_container,direction,desc){var current_top=parseInt(img_container.css('top'),10);if(direction=='left'){var old_image_top='-'+this.image_wrapper_height+'px';img_container.css('top',this.image_wrapper_height+'px');}else{var old_image_top=this.image_wrapper_height+'px';img_container.css('top','-'+this.image_wrapper_height+'px');};if(desc){desc.css('bottom','-'+desc[0].offsetHeight+'px');desc.animate({bottom:0},this.settings.animation_speed*2);};if(this.current_description){this.current_description.animate({bottom:'-'+this.current_description[0].offsetHeight+'px'},this.settings.animation_speed*2);};return{old_image:{top:old_image_top},new_image:{top:current_top}};};function HorizontalSlideAnimation(img_container,direction,desc){var current_left=parseInt(img_container.css('left'),10);if(direction=='left'){var old_image_left='-'+this.image_wrapper_width+'px';img_container.css('left',this.image_wrapper_width+'px');}else{var old_image_left=this.image_wrapper_width+'px';img_container.css('left','-'+this.image_wrapper_width+'px');};if(desc){desc.css('bottom','-'+desc[0].offsetHeight+'px');desc.animate({bottom:0},this.settings.animation_speed*2);};if(this.current_description){this.current_description.animate({bottom:'-'+this.current_description[0].offsetHeight+'px'},this.settings.animation_speed*2);};return{old_image:{left:old_image_left},new_image:{left:current_left}};};function ResizeAnimation(img_container,direction,desc){var image_width=img_container.width();var image_height=img_container.height();var current_left=parseInt(img_container.css('left'),10);var current_top=parseInt(img_container.css('top'),10);img_container.css({width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2});return{old_image:{width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2},new_image:{width:image_width,height:image_height,top:current_top,left:current_left}};};function FadeAnimation(img_container,direction,desc){img_container.css('opacity',0);return{old_image:{opacity:0},new_image:{opacity:1}};};function NoneAnimation(img_container,direction,desc){img_container.css('opacity',0);return{old_image:{opacity:0},new_image:{opacity:1},speed:0};};function AdGallery(wrapper,settings){this.init(wrapper,settings);};AdGallery.prototype={wrapper:false,image_wrapper:false,gallery_info:false,nav:false,loader:false,preloads:false,thumbs_wrapper:false,thumbs_wrapper_width:0,scroll_back:false,scroll_forward:false,next_link:false,prev_link:false,slideshow:false,image_wrapper_width:0,image_wrapper_height:0,current_index:-1,current_image:false,current_description:false,nav_display_width:0,settings:false,images:false,in_transition:false,animations:false,init:function(wrapper,settings){var context=this;this.wrapper=$(wrapper);this.settings=settings;this.setupElements();this.setupAnimations();if(this.settings.width){this.image_wrapper_width=this.settings.width;this.image_wrapper.width(this.settings.width);this.wrapper.width(this.settings.width);}else{this.image_wrapper_width=this.image_wrapper.width();};if(this.settings.height){this.image_wrapper_height=this.settings.height;this.image_wrapper.height(this.settings.height);}else{this.image_wrapper_height=this.image_wrapper.height();};this.nav_display_width=this.nav.width();this.current_index=-1;this.current_image=false;this.current_description=false;this.in_transition=false;this.findImages();if(this.settings.display_next_and_prev){this.initNextAndPrev();};var nextimage_callback=function(callback){return context.nextImage(callback);};this.slideshow=new AdGallerySlideshow(nextimage_callback,this.settings.slideshow);this.controls.append(this.slideshow.create());if(this.settings.slideshow.enable){this.slideshow.enable();}else{this.slideshow.disable();};if(this.settings.display_back_and_forward){this.initBackAndForward();};if(this.settings.enable_keyboard_move){this.initKeyEvents();};this.initHashChange();var start_at=parseInt(this.settings.start_at_index,10);if(typeof this.getIndexFromHash()!="undefined"){start_at=this.getIndexFromHash();};this.loading(true);this.showImage(start_at,function(){if(context.settings.slideshow.autostart){context.preloadImage(start_at+1);context.slideshow.start();};});this.fireCallback(this.settings.callbacks.init);},setupAnimations:function(){this.animations={'slide-vert':VerticalSlideAnimation,'slide-hori':HorizontalSlideAnimation,'resize':ResizeAnimation,'fade':FadeAnimation,'none':NoneAnimation};},setupElements:function(){this.controls=this.wrapper.find('.ad-controls');this.gallery_info=$('<p class="ad-info"></p>');this.controls.append(this.gallery_info);this.image_wrapper=this.wrapper.find('.ad-image-wrapper');this.image_wrapper.empty();this.nav=this.wrapper.find('.ad-nav');this.thumbs_wrapper=this.nav.find('.ad-thumbs');this.preloads=$('<div class="ad-preloads"></div>');this.loader=$('<img class="ad-loader" src="'+this.settings.loader_image+'">');this.image_wrapper.append(this.loader);this.loader.hide();$(document.body).append(this.preloads);},loading:function(bool){if(bool){this.loader.show();}else{this.loader.hide();};},addAnimation:function(name,fn){if($.isFunction(fn)){this.animations[name]=fn;};},findImages:function(){var context=this;this.images=[];var thumbs_loaded=0;var thumbs=this.thumbs_wrapper.find('a');var thumb_count=thumbs.length;if(this.settings.thumb_opacity<1){thumbs.find('img').css('opacity',this.settings.thumb_opacity);};thumbs.each(function(i){var link=$(this);link.data("ad-i",i);var image_src=link.attr('href');var thumb=link.find('img');context.whenImageLoaded(thumb[0],function(){var width=thumb[0].parentNode.parentNode.offsetWidth;if(thumb[0].width==0){width=100;};context.thumbs_wrapper_width+=width;thumbs_loaded++;});context._initLink(link);context.images[i]=context._createImageData(link,image_src);});var inter=setInterval(function(){if(thumb_count==thumbs_loaded){context._setThumbListWidth(context.thumbs_wrapper_width);clearInterval(inter);};},100);},_setThumbListWidth:function(wrapper_width){wrapper_width-=100;var list=this.nav.find('.ad-thumb-list');list.css('width',wrapper_width+'px');var i=1;var last_height=list.height();while(i<201){list.css('width',(wrapper_width+i)+'px');if(last_height!=list.height()){break;};last_height=list.height();i++;};if(list.width()<this.nav.width()){list.width(this.nav.width());};},_initLink:function(link){var context=this;link.click(function(){context.showImage(link.data("ad-i"));context.slideshow.stop();return false;}).hover(function(){if(!$(this).is('.ad-active')&&context.settings.thumb_opacity<1){$(this).find('img').fadeTo(300,1);};context.preloadImage(link.data("ad-i"));},function(){if(!$(this).is('.ad-active')&&context.settings.thumb_opacity<1){$(this).find('img').fadeTo(300,context.settings.thumb_opacity);};});},_createImageData:function(thumb_link,image_src){var link=false;var thumb_img=thumb_link.find("img");if(thumb_img.data('ad-link')){link=thumb_link.data('ad-link');}else if(thumb_img.attr('longdesc')&&thumb_img.attr('longdesc').length){link=thumb_img.attr('longdesc');};var desc=false;if(thumb_img.data('ad-desc')){desc=thumb_img.data('ad-desc');}else if(thumb_img.attr('alt')&&thumb_img.attr('alt').length){desc=thumb_img.attr('alt');};var title=false;if(thumb_img.data('ad-title')){title=thumb_img.data('ad-title');}else if(thumb_img.attr('title')&&thumb_img.attr('title').length){title=thumb_img.attr('title');};return{thumb_link:thumb_link,image:image_src,error:false,preloaded:false,desc:desc,title:title,size:false,link:link};},initKeyEvents:function(){var context=this;$(document).keydown(function(e){if(e.keyCode==39){context.nextImage();context.slideshow.stop();}else if(e.keyCode==37){context.prevImage();context.slideshow.stop();};});},getIndexFromHash:function(){if(window.location.hash&&window.location.hash.indexOf('ad-image-')===0){var id=window.location.hash.replace(/^#ad-image-/g,'');var thumb=this.thumbs_wrapper.find("#"+id);if(thumb.length){return this.thumbs_wrapper.find("a").index(thumb);}else if(!isNaN(parseInt(id,10))){return parseInt(id,10);};};return undefined;},removeImage:function(index){if(index<0||index>=this.images.length){throw"Cannot remove image for index "+index;};var image=this.images[index];this.images.splice(index,1);var thumb_link=image.thumb_link;var thumb_width=thumb_link[0].parentNode.offsetWidth;this.thumbs_wrapper_width-=thumb_width;thumb_link.remove();this._setThumbListWidth(this.thumbs_wrapper_width);this.gallery_info.html((this.current_index+1)+' / '+this.images.length);this.thumbs_wrapper.find('a').each(function(i){$(this).data("ad-i",i);});if(index==this.current_index&&this.images.length!=0){this.showImage(0);};},removeAllImages:function(){for(var i=this.images.length-1;i>=0;i--){this.removeImage(i);};},addImage:function(thumb_url,image_url,image_id,title,description){image_id=image_id||"";title=title||"";description=description||"";var li=$('<li><a href="'+image_url+'" id="'+image_id+'">'+'<img src="'+thumb_url+'" title="'+title+'" alt="'+description+'">'+'</a></li>');var context=this;this.thumbs_wrapper.find("ul").append(li);var link=li.find("a");var thumb=link.find("img");thumb.css('opacity',this.settings.thumb_opacity);this.whenImageLoaded(thumb[0],function(){var thumb_width=thumb[0].parentNode.parentNode.offsetWidth;if(thumb[0].width==0){thumb_width=100;};context.thumbs_wrapper_width+=thumb_width;context._setThumbListWidth(context.thumbs_wrapper_width);});var i=this.images.length;link.data("ad-i",i);this._initLink(link);this.images[i]=context._createImageData(link,image_url);this.gallery_info.html((this.current_index+1)+' / '+this.images.length);},initHashChange:function(){var context=this;if("onhashchange"in window){$(window).bind("hashchange",function(){var index=context.getIndexFromHash();if(typeof index!="undefined"&&index!=context.current_index){context.showImage(index);};});}else{var current_hash=window.location.hash;setInterval(function(){if(window.location.hash!=current_hash){current_hash=window.location.hash;var index=context.getIndexFromHash();if(typeof index!="undefined"&&index!=context.current_index){context.showImage(index);};};},200);};},initNextAndPrev:function(){this.next_link=$('<div class="ad-next"><div class="ad-next-image"></div></div>');this.prev_link=$('<div class="ad-prev"><div class="ad-prev-image"></div></div>');this.image_wrapper.append(this.next_link);this.image_wrapper.append(this.prev_link);var context=this;this.prev_link.add(this.next_link).mouseover(function(e){$(this).css('height',context.image_wrapper_height);$(this).find('div').show();}).mouseout(function(e){$(this).find('div').hide();}).click(function(){if($(this).is('.ad-next')){context.nextImage();context.slideshow.stop();}else{context.prevImage();context.slideshow.stop();};}).find('div').css('opacity',0.7);},initBackAndForward:function(){var context=this;this.scroll_forward=$('<div class="ad-forward"></div>');this.scroll_back=$('<div class="ad-back"></div>');this.nav.append(this.scroll_forward);this.nav.prepend(this.scroll_back);var has_scrolled=0;var thumbs_scroll_interval=false;$(this.scroll_back).add(this.scroll_forward).click(function(){var width=context.nav_display_width-50;if(context.settings.scroll_jump>0){var width=context.settings.scroll_jump;};if($(this).is('.ad-forward')){var left=context.thumbs_wrapper.scrollLeft()+width;}else{var left=context.thumbs_wrapper.scrollLeft()-width;};if(context.settings.slideshow.stop_on_scroll){context.slideshow.stop();};context.thumbs_wrapper.animate({scrollLeft:left+'px'});return false;}).css('opacity',0.6).hover(function(){var direction='left';if($(this).is('.ad-forward')){direction='right';};thumbs_scroll_interval=setInterval(function(){has_scrolled++;if(has_scrolled>30&&context.settings.slideshow.stop_on_scroll){context.slideshow.stop();};var left=context.thumbs_wrapper.scrollLeft()+1;if(direction=='left'){left=context.thumbs_wrapper.scrollLeft()-1;};context.thumbs_wrapper.scrollLeft(left);},10);$(this).css('opacity',1);},function(){has_scrolled=0;clearInterval(thumbs_scroll_interval);$(this).css('opacity',0.6);});},_afterShow:function(){this.gallery_info.html((this.current_index+1)+' / '+this.images.length);if(!this.settings.cycle){this.prev_link.show().css('height',this.image_wrapper_height);this.next_link.show().css('height',this.image_wrapper_height);if(this.current_index==(this.images.length-1)){this.next_link.hide();};if(this.current_index==0){this.prev_link.hide();};};if(this.settings.update_window_hash){var thumb_link=this.images[this.current_index].thumb_link;if(thumb_link.attr("id")){window.location.hash="#ad-image-"+thumb_link.attr("id");}else{window.location.hash="#ad-image-"+this.current_index;};};this.fireCallback(this.settings.callbacks.afterImageVisible);},_getContainedImageSize:function(image_width,image_height){if(image_height>this.image_wrapper_height){var ratio=image_width/image_height;image_height=this.image_wrapper_height;image_width=this.image_wrapper_height*ratio;};if(image_width>this.image_wrapper_width){var ratio=image_height/image_width;image_width=this.image_wrapper_width;image_height=this.image_wrapper_width*ratio;};return{width:image_width,height:image_height};},_centerImage:function(img_container,image_width,image_height){img_container.css('top','0px');if(image_height<this.image_wrapper_height){var dif=this.image_wrapper_height-image_height;img_container.css('top',(dif/2)+'px');};img_container.css('left','0px');if(image_width<this.image_wrapper_width){var dif=this.image_wrapper_width-image_width;img_container.css('left',(dif/2)+'px');};},_getDescription:function(image){var desc=false;if(image.desc.length||image.title.length){var title='';if(image.title.length){title='<strong class="ad-description-title">'+image.title+'</strong>';};var desc='';if(image.desc.length){desc='<span>'+image.desc+'</span>';};desc=$('<p class="ad-image-description">'+title+desc+'</p>');};return desc;},showImage:function(index,callback){if(this.images[index]&&!this.in_transition&&index!=this.current_index){var context=this;var image=this.images[index];this.in_transition=true;if(!image.preloaded){this.loading(true);this.preloadImage(index,function(){context.loading(false);context._showWhenLoaded(index,callback);});}else{this._showWhenLoaded(index,callback);};};},_showWhenLoaded:function(index,callback){if(this.images[index]){var context=this;var image=this.images[index];var img_container=$(document.createElement('div')).addClass('ad-image');var img=$(new Image()).attr('src',image.image);if(image.link){var link=$('<a href="'+image.link+'" target="_blank"></a>');link.append(img);img_container.append(link);}else{img_container.append(img);};this.image_wrapper.prepend(img_container);var size=this._getContainedImageSize(image.size.width,image.size.height);img.attr('width',size.width);img.attr('height',size.height);img_container.css({width:size.width+'px',height:size.height+'px'});this._centerImage(img_container,size.width,size.height);var desc=this._getDescription(image);if(desc){if(!this.settings.description_wrapper&&!this.settings.hooks.displayDescription){img_container.append(desc);var width=size.width-parseInt(desc.css('padding-left'),10)-parseInt(desc.css('padding-right'),10);desc.css('width',width+'px');}else if(this.settings.hooks.displayDescription){this.settings.hooks.displayDescription.call(this,image);}else{var wrapper=this.settings.description_wrapper;wrapper.append(desc);};};this.highLightThumb(this.images[index].thumb_link);var direction='right';if(this.current_index<index){direction='left';};this.fireCallback(this.settings.callbacks.beforeImageVisible);if(this.current_image||this.settings.animate_first_image){var animation_speed=this.settings.animation_speed;var easing='swing';var animation=this.animations[this.settings.effect].call(this,img_container,direction,desc);if(typeof animation.speed!='undefined'){animation_speed=animation.speed;};if(typeof animation.easing!='undefined'){easing=animation.easing;};if(this.current_image){var old_image=this.current_image;var old_description=this.current_description;old_image.animate(animation.old_image,animation_speed,easing,function(){old_image.remove();if(old_description)old_description.remove();});};img_container.animate(animation.new_image,animation_speed,easing,function(){context.current_index=index;context.current_image=img_container;context.current_description=desc;context.in_transition=false;context._afterShow();context.fireCallback(callback);});}else{this.current_index=index;this.current_image=img_container;context.current_description=desc;this.in_transition=false;context._afterShow();this.fireCallback(callback);};};},nextIndex:function(){if(this.current_index==(this.images.length-1)){if(!this.settings.cycle){return false;};var next=0;}else{var next=this.current_index+1;};return next;},nextImage:function(callback){var next=this.nextIndex();if(next===false)return false;this.preloadImage(next+1);this.showImage(next,callback);return true;},prevIndex:function(){if(this.current_index==0){if(!this.settings.cycle){return false;};var prev=this.images.length-1;}else{var prev=this.current_index-1;};return prev;},prevImage:function(callback){var prev=this.prevIndex();if(prev===false)return false;this.preloadImage(prev-1);this.showImage(prev,callback);return true;},preloadAll:function(){var context=this;var i=0;function preloadNext(){if(i<context.images.length){i++;context.preloadImage(i,preloadNext);};};context.preloadImage(i,preloadNext);},preloadImage:function(index,callback){if(this.images[index]){var image=this.images[index];if(!this.images[index].preloaded){var img=$(new Image());img.attr('src',image.image);if(!this.isImageLoaded(img[0])){this.preloads.append(img);var context=this;img.load(function(){image.preloaded=true;image.size={width:this.width,height:this.height};context.fireCallback(callback);}).error(function(){image.error=true;image.preloaded=false;image.size=false;});}else{image.preloaded=true;image.size={width:img[0].width,height:img[0].height};this.fireCallback(callback);};}else{this.fireCallback(callback);};};},whenImageLoaded:function(img,callback){if(this.isImageLoaded(img)){callback&&callback();}else{$(img).load(callback);};},isImageLoaded:function(img){if(typeof img.complete!='undefined'&&!img.complete){return false;};if(typeof img.naturalWidth!='undefined'&&img.naturalWidth==0){return false;};return true;},highLightThumb:function(thumb){this.thumbs_wrapper.find('.ad-active').removeClass('ad-active');thumb.addClass('ad-active');if(this.settings.thumb_opacity<1){this.thumbs_wrapper.find('a:not(.ad-active) img').fadeTo(300,this.settings.thumb_opacity);thumb.find('img').fadeTo(300,1);};var left=thumb[0].parentNode.offsetLeft;left-=(this.nav_display_width/2)-(thumb[0].offsetWidth/2);this.thumbs_wrapper.animate({scrollLeft:left+'px'});},fireCallback:function(fn){if($.isFunction(fn)){fn.call(this);};}};function AdGallerySlideshow(nextimage_callback,settings){this.init(nextimage_callback,settings);};AdGallerySlideshow.prototype={start_link:false,stop_link:false,countdown:false,controls:false,settings:false,nextimage_callback:false,enabled:false,running:false,countdown_interval:false,init:function(nextimage_callback,settings){var context=this;this.nextimage_callback=nextimage_callback;this.settings=settings;},create:function(){this.start_link=$('<span class="ad-slideshow-start">'+this.settings.start_label+'</span>');this.stop_link=$('<span class="ad-slideshow-stop">'+this.settings.stop_label+'</span>');this.countdown=$('<span class="ad-slideshow-countdown"></span>');this.controls=$('<div class="ad-slideshow-controls"></div>');this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);this.countdown.hide();var context=this;this.start_link.click(function(){context.start();});this.stop_link.click(function(){context.stop();});$(document).keydown(function(e){if(e.keyCode==83){if(context.running){context.stop();}else{context.start();};};});return this.controls;},disable:function(){this.enabled=false;this.stop();this.controls.hide();},enable:function(){this.enabled=true;this.controls.show();},toggle:function(){if(this.enabled){this.disable();}else{this.enable();};},start:function(){if(this.running||!this.enabled)return false;var context=this;this.running=true;this.controls.addClass('ad-slideshow-running');this._next();this.fireCallback(this.settings.onStart);return true;},stop:function(){if(!this.running)return false;this.running=false;this.countdown.hide();this.controls.removeClass('ad-slideshow-running');clearInterval(this.countdown_interval);this.fireCallback(this.settings.onStop);return true;},_next:function(){var context=this;var pre=this.settings.countdown_prefix;var su=this.settings.countdown_sufix;clearInterval(context.countdown_interval);this.countdown.show().html(pre+(this.settings.speed/1000)+su);var slide_timer=0;this.countdown_interval=setInterval(function(){slide_timer+=1000;if(slide_timer>=context.settings.speed){var whenNextIsShown=function(){if(context.running){context._next();};slide_timer=0;};if(!context.nextimage_callback(whenNextIsShown)){context.stop();};slide_timer=0;};var sec=parseInt(context.countdown.text().replace(/[^0-9]/g,''),10);sec--;if(sec>0){context.countdown.html(pre+sec+su);};},1000);},fireCallback:function(fn){if($.isFunction(fn)){fn.call(this);};}};})(jQuery);
// VERSION: 2.3 LAST UPDATE: 11.07.2013
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */
(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var ay,Q=this,Y,aj,v,al,T,Z,y,q,az,aE,au,i,I,h,j,aa,U,ap,X,t,A,aq,af,am,G,l,at,ax,x,av,aH,f,L,ai=true,P=true,aG=false,k=false,ao=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aH=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function ar(aQ){var aL,aN,aM,aJ,aI,aP,aO=false,aK=false;ay=aQ;if(Y===c){aI=D.scrollTop();aP=D.scrollLeft();D.css({overflow:"hidden",padding:0});aj=D.innerWidth()+f;v=D.innerHeight();D.width(aj);Y=b('<div class="jspPane" />').css("padding",aH).append(D.children());al=b('<div class="jspContainer" />').css({width:aj+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aO=ay.stickToBottom&&K();aK=ay.stickToRight&&B();aJ=D.innerWidth()+f!=aj||D.outerHeight()!=v;if(aJ){aj=D.innerWidth()+f;v=D.innerHeight();al.css({width:aj+"px",height:v+"px"})}if(!aJ&&L==T&&Y.outerHeight()==Z){D.width(aj);return}L=T;Y.css("width","");D.width(aj);al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aQ.contentWidth){T=aQ.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/aj;q=Z/v;az=q>1;aE=y>1;if(!(aE||az)){D.removeClass("jspScrollable");Y.css({top:0,width:al.width()-f});n();E();R();w()}else{D.addClass("jspScrollable");aL=ay.maintainPosition&&(I||aa);if(aL){aN=aC();aM=aA()}aF();z();F();if(aL){N(aK?(T-aj):aN,false);M(aO?(Z-v):aM,false)}J();ag();an();if(ay.enableKeyboardNavigation){S()}if(ay.clickOnTrack){p()}C();if(ay.hijackInternalLinks){m()}}if(ay.autoReinitialise&&!av){av=setInterval(function(){ar(ay)},ay.autoReinitialiseDelay)}else{if(!ay.autoReinitialise&&av){clearInterval(av)}}aI&&D.scrollTop(0)&&M(aI,false);aP&&D.scrollLeft(0)&&N(aP,false);D.trigger("jsp-initialised",[aE||az])}function aF(){if(az){al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=al.find(">.jspVerticalBar");ap=U.find(">.jspTrack");au=ap.find(">.jspDrag");if(ay.showArrows){aq=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aD(0,-1)).bind("click.jsp",aB);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aD(0,1)).bind("click.jsp",aB);if(ay.arrowScrollOnHover){aq.bind("mouseover.jsp",aD(0,-1,aq));af.bind("mouseover.jsp",aD(0,1,af))}ak(ap,ay.verticalArrowPositions,aq,af)}t=v;al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});au.hover(function(){au.addClass("jspHover")},function(){au.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);au.addClass("jspActive");var s=aI.pageY-au.position().top;b("html").bind("mousemove.jsp",function(aJ){V(aJ.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});o()}}function o(){ap.height(t+"px");I=0;X=ay.verticalGutter+ap.outerWidth();Y.width(aj-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aE){al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));am=al.find(">.jspHorizontalBar");G=am.find(">.jspTrack");h=G.find(">.jspDrag");if(ay.showArrows){ax=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aD(-1,0)).bind("click.jsp",aB);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aD(1,0)).bind("click.jsp",aB);
if(ay.arrowScrollOnHover){ax.bind("mouseover.jsp",aD(-1,0,ax));x.bind("mouseover.jsp",aD(1,0,x))}ak(G,ay.horizontalArrowPositions,ax,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);h.addClass("jspActive");var s=aI.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aJ){W(aJ.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});l=al.innerWidth();ah()}}function ah(){al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aE&&az){var aI=G.outerHeight(),s=ap.outerWidth();t-=aI;b(am).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;aj-=aI;G.parent().append(b('<div class="jspCorner" />').css("width",aI+"px"));o();ah()}if(aE){Y.width((al.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aE){at=Math.ceil(1/y*l);if(at>ay.horizontalDragMaxWidth){at=ay.horizontalDragMaxWidth}else{if(at<ay.horizontalDragMinWidth){at=ay.horizontalDragMinWidth}}h.width(at+"px");j=l-at;ae(aa)}if(az){A=Math.ceil(1/q*t);if(A>ay.verticalDragMaxHeight){A=ay.verticalDragMaxHeight}else{if(A<ay.verticalDragMinHeight){A=ay.verticalDragMinHeight}}au.height(A+"px");i=t-A;ad(I)}}function ak(aJ,aL,aI,s){var aN="before",aK="after",aM;if(aL=="os"){aL=/Mac/.test(navigator.platform)?"after":"split"}if(aL==aN){aK=aL}else{if(aL==aK){aN=aL;aM=aI;aI=s;s=aM}}aJ[aN](aI)[aK](s)}function aD(aI,s,aJ){return function(){H(aI,s,this,aJ);this.blur();return false}}function H(aL,aK,aO,aN){aO=b(aO).addClass("jspActive");var aM,aJ,aI=true,s=function(){if(aL!==0){Q.scrollByX(aL*ay.arrowButtonSpeed)}if(aK!==0){Q.scrollByY(aK*ay.arrowButtonSpeed)}aJ=setTimeout(s,aI?ay.initialDelay:ay.arrowRepeatFreq);aI=false};s();aM=aN?"mouseout.jsp":"mouseup.jsp";aN=aN||b("html");aN.bind(aM,function(){aO.removeClass("jspActive");aJ&&clearTimeout(aJ);aJ=null;aN.unbind(aM)})}function p(){w();if(az){ap.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageY-aO.top-I,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageY-aR.top-A/2,aP=v*ay.scrollPagePercent,aQ=i*aP/(Z-v);if(aM<0){if(I-aQ>aS){Q.scrollByY(-aP)}else{V(aS)}}else{if(aM>0){if(I+aQ<aS){Q.scrollByY(aP)}else{V(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}if(aE){G.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageX-aO.left-aa,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageX-aR.left-at/2,aP=aj*ay.scrollPagePercent,aQ=j*aP/(T-aj);if(aM<0){if(aa-aQ>aS){Q.scrollByX(-aP)}else{W(aS)}}else{if(aM>0){if(aa+aQ<aS){Q.scrollByX(aP)}else{W(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(ap){ap.unbind("mousedown.jsp")}}function aw(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(au){au.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aI){if(!az){return}if(s<0){s=0}else{if(s>i){s=i}}if(aI===c){aI=ay.animateScroll}if(aI){Q.animate(au,"top",s,ad)}else{au.css("top",s);ad(s)}}function ad(aI){if(aI===c){aI=au.position().top}al.scrollTop(0);I=aI;var aL=I===0,aJ=I==i,aK=aI/i,s=-aK*(Z-v);if(ai!=aL||aG!=aJ){ai=aL;aG=aJ;D.trigger("jsp-arrow-change",[ai,aG,P,k])}u(aL,aJ);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aL,aJ]).trigger("scroll")}function W(aI,s){if(!aE){return}if(aI<0){aI=0}else{if(aI>j){aI=j}}if(s===c){s=ay.animateScroll}if(s){Q.animate(h,"left",aI,ae)
}else{h.css("left",aI);ae(aI)}}function ae(aI){if(aI===c){aI=h.position().left}al.scrollTop(0);aa=aI;var aL=aa===0,aK=aa==j,aJ=aI/j,s=-aJ*(T-aj);if(P!=aL||k!=aK){P=aL;k=aK;D.trigger("jsp-arrow-change",[ai,aG,P,k])}r(aL,aK);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aL,aK]).trigger("scroll")}function u(aI,s){if(ay.showArrows){aq[aI?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aI,s){if(ay.showArrows){ax[aI?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aI){var aJ=s/(Z-v);V(aJ*i,aI)}function N(aI,s){var aJ=aI/(T-aj);W(aJ*j,s)}function ab(aV,aQ,aJ){var aN,aK,aL,s=0,aU=0,aI,aP,aO,aS,aR,aT;try{aN=b(aV)}catch(aM){return}aK=aN.outerHeight();aL=aN.outerWidth();al.scrollTop(0);al.scrollLeft(0);while(!aN.is(".jspPane")){s+=aN.position().top;aU+=aN.position().left;aN=aN.offsetParent();if(/^body|html$/i.test(aN[0].nodeName)){return}}aI=aA();aO=aI+v;if(s<aI||aQ){aR=s-ay.verticalGutter}else{if(s+aK>aO){aR=s-v+aK+ay.verticalGutter}}if(aR){M(aR,aJ)}aP=aC();aS=aP+aj;if(aU<aP||aQ){aT=aU-ay.horizontalGutter}else{if(aU+aL>aS){aT=aU-aj+aL+ay.horizontalGutter}}if(aT){N(aT,aJ)}}function aC(){return -Y.position().left}function aA(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aA()<10)}function B(){var s=T-aj;return(s>20)&&(s-aC()<10)}function ag(){al.unbind(ac).bind(ac,function(aL,aM,aK,aI){var aJ=aa,s=I;Q.scrollBy(aK*ay.mouseWheelSpeed,-aI*ay.mouseWheelSpeed,false);return aJ==aa&&s==I})}function n(){al.unbind(ac)}function aB(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aI,aK=[];aE&&aK.push(am[0]);az&&aK.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aN){if(aN.target!==this&&!(aK.length&&b(aN.target).closest(aK).length)){return}var aM=aa,aL=I;switch(aN.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aN.keyCode;aJ();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aI=aN.keyCode==s&&aM!=aa||aL!=I;return !aI}).bind("keypress.jsp",function(aL){if(aL.keyCode==s){aJ()}return !aI});if(ay.hideFocus){D.css("outline","none");if("hideFocus" in al[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in al[0]){D.attr("hideFocus",false)}}function aJ(){var aM=aa,aL=I;switch(s){case 40:Q.scrollByY(ay.keyboardSpeed,false);break;case 38:Q.scrollByY(-ay.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*ay.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*ay.scrollPagePercent,false);break;case 39:Q.scrollByX(ay.keyboardSpeed,false);break;case 37:Q.scrollByX(-ay.keyboardSpeed,false);break}aI=aM!=aa||aL!=I;return aI}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aK,aI,aJ=escape(location.hash.substr(1));try{aK=b("#"+aJ+', a[name="'+aJ+'"]')}catch(s){return}if(aK.length&&Y.find(aJ)){if(al.scrollTop()===0){aI=setInterval(function(){if(al.scrollTop()>0){ab(aK,true);b(document).scrollTop(al.position().top);clearInterval(aI)}},50)}else{ab(aK,true);b(document).scrollTop(al.position().top)}}}}function m(){if(b(document.body).data("jspHijack")){return}b(document.body).data("jspHijack",true);b(document.body).delegate("a[href*=#]","click",function(s){var aI=this.href.substr(0,this.href.indexOf("#")),aK=location.href,aO,aP,aJ,aM,aL,aN;if(location.href.indexOf("#")!==-1){aK=location.href.substr(0,location.href.indexOf("#"))}if(aI!==aK){return}aO=escape(this.href.substr(this.href.indexOf("#")+1));aP;try{aP=b("#"+aO+', a[name="'+aO+'"]')}catch(aQ){return}if(!aP.length){return}aJ=aP.closest(".jspScrollable");aM=aJ.data("jsp");aM.scrollToElement(aP,true);if(aJ[0].scrollIntoView){aL=b(a).scrollTop();aN=aP.offset().top;if(aN<aL||aN>aL+b(a).height()){aJ[0].scrollIntoView()}}s.preventDefault()
})}function an(){var aJ,aI,aL,aK,aM,s=false;al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aN){var aO=aN.originalEvent.touches[0];aJ=aC();aI=aA();aL=aO.pageX;aK=aO.pageY;aM=false;s=true}).bind("touchmove.jsp",function(aQ){if(!s){return}var aP=aQ.originalEvent.touches[0],aO=aa,aN=I;Q.scrollTo(aJ+aL-aP.pageX,aI+aK-aP.pageY);aM=aM||Math.abs(aL-aP.pageX)>5||Math.abs(aK-aP.pageY)>5;return aO==aa&&aN==I}).bind("touchend.jsp",function(aN){s=false}).bind("click.jsp-touchclick",function(aN){if(aM){aM=false;return false}})}function g(){var s=aA(),aI=aC();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ao.append(Y.children()));ao.scrollTop(s);ao.scrollLeft(aI);if(av){clearInterval(av)}}b.extend(Q,{reinitialise:function(aI){aI=b.extend({},ay,aI);ar(aI)},scrollToElement:function(aJ,aI,s){ab(aJ,aI,s)},scrollTo:function(aJ,s,aI){N(aJ,aI);M(s,aI)},scrollToX:function(aI,s){N(aI,s)},scrollToY:function(s,aI){M(s,aI)},scrollToPercentX:function(aI,s){N(aI*(T-aj),s)},scrollToPercentY:function(aI,s){M(aI*(Z-v),s)},scrollBy:function(aI,s,aJ){Q.scrollByX(aI,aJ);Q.scrollByY(s,aJ)},scrollByX:function(s,aJ){var aI=aC()+Math[s<0?"floor":"ceil"](s),aK=aI/(T-aj);W(aK*j,aJ)},scrollByY:function(s,aJ){var aI=aA()+Math[s<0?"floor":"ceil"](s),aK=aI/(Z-v);V(aK*i,aJ)},positionDragX:function(s,aI){W(s,aI)},positionDragY:function(aI,s){V(aI,s)},animate:function(aI,aL,s,aK){var aJ={};aJ[aL]=s;aI.animate(aJ,{duration:ay.animateDuration,easing:ay.animateEase,queue:false,step:aK})},getContentPositionX:function(){return aC()},getContentPositionY:function(){return aA()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aC()/(T-aj)},getPercentScrolledY:function(){return aA()/(Z-v)},getIsScrollableH:function(){return aE},getIsScrollableV:function(){return az},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:b.noop,destroy:function(){g()}});ar(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{b("script",f).filter('[type="text/javascript"],:not([type])').remove();g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);
/**
 * jQuery CoreUISelect
 * Special thanks to Artem Terekhin, Yuriy Khabarov, Alexsey Shein
 *
 * @author      Gennadiy Ukhanov
 * @version     0.0.3
 */
(function ($) {

    var defaultOption = {
        appendToBody : false,
        jScrollPane  : null,
        onInit       : null,
        onFocus      : null,
        onBlur       : null,
        onOpen       : null,
        onClose      : null,
        onChange     : null,
        onDestroy    : null
    }

    var allSelects = [];

    $.browser.mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
    $.browser.operamini = Object.prototype.toString.call(window.operamini) === "[object OperaMini]";

    /**
     * CoreUISelect - stylized standard select
     * @constructor
     */
    function CoreUISelect(__elem, __options, __templates) {

        this.domSelect = __elem;
        this.settings = __options || defaultOption;
        this.isSelectShow = false;
        this.isSelectFocus = false;
        this.isJScrollPane = this.isJScrollPane();

        // templates
        this.templates = __templates ||
        {
            select : {
                container : '<div class="b-core-ui-select"></div>',
                value : '<span class="b-core-ui-select__value"></span>',
                button : '<span class="b-core-ui-select__button"></span>'
            },
            dropdown : {
                container : '<div class="b-core-ui-select__dropdown"></div>',
                wrapper : '<div class="b-core-ui-select__dropdown__wrap"></div>',
                list : '<ul class="b-core-ui-select__dropdown__list"></ul>',
                optionLabel : '<li class="b-core-ui-select__dropdown__label"></li>',
                item : '<li class="b-core-ui-select__dropdown__item"></li>'
            }
        }

        this.init(this.settings);
    }

    CoreUISelect.prototype.init = function() {
        if($.browser.operamini) return this;
        this.buildUI();
        this.hideDomSelect();
        if(this.domSelect.is(':disabled')) {
            this.select.addClass('disabled');
            return this;
        }
        if(this.isJScrollPane) this.buildJScrollPane();
        this.bindUIEvents();
        this.settings.onInit && this.settings.onInit.apply(this, [this.domSelect, 'init']);

    }

    CoreUISelect.prototype.buildUI = function() {

        // Build select container
        this.select = $(this.templates.select.container)
            .insertBefore(this.domSelect);

        this.selectValue = $(this.templates.select.value)
            .appendTo(this.select);

        // TODO Add custom states for button
        this.selectButton = $(this.templates.select.button)
            .appendTo(this.select);

        // Build dropdown container
        this.dropdown = $(this.templates.dropdown.container);
        this.dropdownWrapper =  $(this.templates.dropdown.wrapper).appendTo(this.dropdown);

        this.settings.appendToBody ? this.dropdown.appendTo($('body')) : this.dropdown.insertBefore(this.domSelect);

        // Build dropdown
        this.dropdownList =  $(this.templates.dropdown.list).appendTo(this.dropdownWrapper);
        this.domSelect.find('option').each($.proxy(this, 'addItems'));


        // Build dropdown
        this.dropdownItem =  this.dropdown.find('.'+$(this.templates.dropdown.item).attr('class'));

        // Add classes for dropdown
        this.dropdownItem.filter(':first-child').addClass('first');
        this.dropdownItem.filter(':last-child').addClass('last');

        this.addOptionGroup();

        // Add placeholder value by selected option
        this.setSelectValue(this.getSelectedItem().text());
        this.updateDropdownPosition();

        // Set current item form option:selected
        this.currentItemOfDomSelect = this.currentItemOfDomSelect || this.domSelect.find('option:selected');

    }

    CoreUISelect.prototype.hideDomSelect = function() {

        this.domSelect.addClass('b-core-ui-select__select_state_hide');
        this.domSelect.css({
            'top' : this.select.position().top,
            'left' : this.select.position().left
        });
    }

    CoreUISelect.prototype.showDomSelect = function() {
        this.domSelect.css({
            'top' : 'auto',
            'left' : 'auto'
        })
        this.domSelect.removeClass('b-core-ui-select__select_state_hide') ;
    }

    CoreUISelect.prototype.bindUIEvents = function() {
        // Bind plugin elements
        this.domSelect.bind('focus', $.proxy(this, 'onFocus'));
        this.domSelect.bind('blur', $.proxy(this, 'onBlur'));
        this.domSelect.bind('change', $.proxy(this, 'onChange'));

        if( $.browser.mobile) this.domSelect.bind('change', $.proxy(this, 'changeDropdownData'));
        this.select.bind('click', $.proxy(this, 'onSelectClick'));
        this.dropdownItem.bind('click', $.proxy(this, 'onDropdownItemClick'));
    }

    CoreUISelect.prototype.getCurrentIndexOfItem = function(__item) {
        return this.domSelect.find('option').index($(this.domSelect).find('option:selected'));
    }

    CoreUISelect.prototype.scrollToCurrentDropdownItem = function(__item) {
        if(this.dropdownWrapper.data('jsp')) {
            this.dropdownWrapper.data('jsp').scrollToElement(__item);
            return this;
        }
        // Alternative scroll to element
        $(this.dropdownWrapper)
            .scrollTop($(this.dropdownWrapper)
            .scrollTop() + __item.position().top - $(this.dropdownWrapper).height()/2 + __item.height()/2);
    }

    CoreUISelect.prototype.buildJScrollPane = function() {
        this.dropdownWrapper.wrap($('<div class="j-scroll-pane"></div>'));
    }

    CoreUISelect.prototype.isJScrollPane = function() {
        if(this.settings.jScrollPane) {
            if($.fn.jScrollPane) return true;
            else throw new Error('jScrollPane no found');
        }
    }

    CoreUISelect.prototype.initJScrollPane = function () {
        this.dropdownWrapper.jScrollPane(this.settings.jScrollPane);
    }

    CoreUISelect.prototype.showDropdown = function() {
        this.domSelect.focus();
        this.settings.onOpen && this.settings.onOpen.apply(this, [this.domSelect, 'open']);
        if($.browser.mobile) return this;
        if(!this.isSelectShow) {
            this.isSelectShow = true;
            this.select.addClass('open');
            this.dropdown.addClass('show').removeClass('hide');
            if(this.isJScrollPane) this.initJScrollPane();
            this.scrollToCurrentDropdownItem(this.dropdownItem.eq(this.getCurrentIndexOfItem()));
            this.updateDropdownPosition();
        }
    }

    CoreUISelect.prototype.hideDropdown = function() {
        if(this.isSelectShow) {
            this.isSelectShow = false;
            this.select.removeClass('open');
            this.dropdown.removeClass('show').addClass('hide');
            this.settings.onClose && this.settings.onClose.apply(this, [this.domSelect, 'close']);
        }
        if(this.isSelectFocus) this.domSelect.focus();
    }

    CoreUISelect.prototype.hideAllDropdown = function() {
        for(var i in allSelects) {
            if(allSelects[i].hasOwnProperty(i)) {
                allSelects.dropdown.isSelectShow = false;
                allSelects.dropdown.domSelect.blur();
                allSelects.dropdown.addClass('hide').removeClass('show');
            }
        }
    }

    CoreUISelect.prototype.changeDropdownData = function(event) {
        if((this.isSelectShow || this.isSelectFocus)) {
            this.currentItemOfDomSelect = this.domSelect.find('option:selected');
            this.dropdownItem.removeClass("selected");
            this.dropdownItem.eq(this.getCurrentIndexOfItem()).addClass("selected");
            this.scrollToCurrentDropdownItem(this.dropdownItem.eq(this.getCurrentIndexOfItem()));
            this.setSelectValue(this.currentItemOfDomSelect.text());

        }
        if($.browser.mobile) this.settings.onChange && this.settings.onChange.apply(this, [this.domSelect, 'change']);
    }

    CoreUISelect.prototype.onDomSelectChange = function(_is) {
        this.domSelect.bind('change', $.proxy(this, 'onChange'));
        dispatchEvent(this.domSelect.get(0), 'change');
        if(!_is) this.settings.onChange && this.settings.onChange.apply(this, [this.domSelect, 'change']);
    }

    CoreUISelect.prototype.addListenerByServicesKey = function(event) {
        if(this.isSelectShow) {
            switch (event.which) {
                case 9:   // TAB
                case 13:  // ESQ
                case 27:  // ENTER
                    this.hideDropdown();
                    break;
            }
        }
    }

    CoreUISelect.prototype.onSelectClick = function() {
        if(!this.isSelectShow) this.showDropdown();
        else this.hideDropdown();
        return false;
    }

    CoreUISelect.prototype.onFocus = function () {
        this.isDocumentMouseDown = false;
        this.isSelectFocus = true;
        this.select.addClass('focus');
        this.settings.onFocus && this.settings.onFocus.apply(this, [this.domSelect, 'focus']);
    }

    CoreUISelect.prototype.onBlur = function() {
        if(!this.isDocumentMouseDown) {
            this.isSelectFocus = false;
            this.select.removeClass('focus');
            this.settings.onBlur && this.settings.onBlur.apply(this, [this.domSelect, 'blur']);
            //this.hideDropdown();
        }
    }

    CoreUISelect.prototype.onChange = function () {
        this.settings.onChange && this.settings.onChange.apply(this, [this.domSelect, 'change']);
    }

    CoreUISelect.prototype.onDropdownItemClick = function(event) {
        var item = $(event.currentTarget);
        if(!(item.hasClass('disabled') || item.hasClass('selected'))) {
            this.domSelect.unbind('change', $.proxy(this, 'onChange'));
            var index = this.dropdown.find('.'+$(this.templates.dropdown.item).attr('class')).index(item)
            this.dropdownItem.removeClass('selected');
            this.dropdownItem.eq(index).addClass('selected');
            this.domSelect.find('option').removeAttr('selected');
            this.domSelect.find('option').eq(index).attr('selected', true);
            this.setSelectValue(this.getSelectedItem().text());
            this.onDomSelectChange(true);

        }
        this.hideDropdown();
        return false;
    }

    CoreUISelect.prototype.onDocumentMouseDown = function(event) {
        this.isDocumentMouseDown = true;
        if($(event.target).closest(this.select).length == 0 && $(event.target).closest(this.dropdown).length== 0) {
            if($(event.target).closest('option').length==0) {  // Hack for Opera
                this.isDocumentMouseDown = false;
                this.hideDropdown();
            }
        }
        return false;
    }

    CoreUISelect.prototype.updateDropdownPosition = function() {
        if(this.isSelectShow) {
            if(this.settings.appendToBody) {
                this.dropdown.css({
                    'position' : 'absolute',
                    'top' : this.select.offset().top+this.select.outerHeight(true),
                    'left' : this.select.offset().left,
                    'z-index' : '9999'
                });
            } else {
                this.dropdown.css({
                    'position' : 'absolute',
                    'top' : this.select.position().top+this.select.outerHeight(true),
                    'left' : this.select.position().left,
                    'z-index' : '9999'
                });
            }

            var marginDifferenceBySelect = this.select.outerWidth() - this.select.width();
            var marginDifferenceByDropdown = this.dropdown.outerWidth() - this.dropdown.width();

            this.dropdown.width(this.select.outerWidth(true));

            if(this.dropdown.width() == this.select.outerWidth()) {
                this.dropdown.width((this.select.width()+marginDifferenceBySelect)-marginDifferenceByDropdown);
            }

            if(this.isJScrollPane) this.initJScrollPane();
        }
    }

    CoreUISelect.prototype.setSelectValue = function(_text) {
        this.selectValue.text(_text);
    }

    CoreUISelect.prototype.isOptionGroup = function() {
        return this.domSelect.find('optgroup').length>0;
    }

    CoreUISelect.prototype.addOptionGroup = function() {
        var optionGroup = this.domSelect.find('optgroup');
        for(var i=0; i<optionGroup.length; i++) {
            var index = this.domSelect.find("option").index($(optionGroup[i]).find('option:first-child'))
            $(this.templates.dropdown.optionLabel)
                .text($(optionGroup[i]).attr('label'))
                .insertBefore(this.dropdownItem.eq(index));
        }
    }

    CoreUISelect.prototype.addItems = function(index, el) {
        var el = $(el);
        var item = $(this.templates.dropdown.item).text(el.text());
        if(el.attr("disabled")) item.addClass('disabled');
        if(el.attr("selected")) {
            this.domSelect.find('option').removeAttr('selected');
            item.addClass('selected');
            el.attr('selected', 'selected');
        }
        item.appendTo(this.dropdownList);
    }

    CoreUISelect.prototype.getSelectedItem = function() {
        return this.dropdown.find('.selected').eq(0);
    }

    CoreUISelect.prototype.update = function() {
        this.destroy();
        this.init();
    }

    CoreUISelect.prototype.destroy = function() {
        // Unbind plugin elements
        this.domSelect.unbind('focus', $.proxy(this, 'onFocus'));
        this.domSelect.unbind('blur', $.proxy(this, 'onBlur'));
        this.domSelect.unbind('change', $.proxy(this, 'onChange'));
        this.select.unbind('click', $.proxy(this, 'onSelectClick'));
        this.dropdownItem.unbind('click', $.proxy(this, 'onDropdownItemClick'));
        // Remove select container
        this.select.remove();
        this.dropdown.remove();
        this.showDomSelect();
        this.settings.onDestroy && this.settings.onDestroy.apply(this, [this.domSelect, 'destroy']);
    }


    $.fn.coreUISelect = function(__options, __templates) {
        return this.each(function () {
            var select = $(this).data('coreUISelect');
            if(__options == 'destroy' && !select) return;
            if(select){
                __options = (typeof __options == "string" && select[__options]) ? __options : 'update';
                select[__options].apply(select);
                if(__options == 'destroy') {
                    $(this).removeData('coreUISelect');
                    for(var i=0; i<allSelects.length; i++) {
                        if(allSelects[i] == select) {
                            allSelects.splice(i, 1);
                            break;
                        }
                    }
                }
            } else {
                select = new CoreUISelect($(this), __options, __templates);
                allSelects.push(select);
                $(this).data('coreUISelect', select);
            }

        });
    };

    function dispatchEvent(obj, evt, doc) {
        var doc = doc || document;
        if(obj!==undefined || obj!==null) {
            if (doc.createEvent) {
                var evObj = doc.createEvent('MouseEvents');
                evObj.initEvent(evt, true, false);
                obj.dispatchEvent(evObj);
            } else if (doc.createEventObject) {
                var evObj = doc.createEventObject();
                obj.fireEvent('on' + evt, evObj);
            }
        }
    }

    $(document).bind('mousedown', function(event){
        for(var i=0; i<allSelects.length; i++){
            allSelects[i].onDocumentMouseDown(event);
        }
    });

    $(document).bind('keyup', function(event){
        for(var i=0; i<allSelects.length; i++){
            if($.browser.safari || $.browser.msie || $.browser.opera) allSelects[i].changeDropdownData(event); // Hack for Safari
            allSelects[i].addListenerByServicesKey(event);
        }
    });

    $(document).bind($.browser.safari ? 'keydown' : 'keypress', function(event){
        for(var i=0; i<allSelects.length; i++){
            allSelects[i].changeDropdownData(event);
        }
    });

    $(window).bind('resize', function(event){
        for(var i=0; i<allSelects.length; i++){
            allSelects[i].updateDropdownPosition(event);
        }
    });
})(jQuery);
 
$(document).ready(function() {

$('#order .ord').click(function(){
$('#alpha, #form').fadeIn();
})
$("#alpha").live('click',function(){
$('#alpha, #form').fadeOut();
})
 var galleries = $('#gallery').adGallery({
  width: 500, 
  height: 480,
  slideshow: {
    enable: false,
    autostart: true,
    speed: 5000,
    start_label: 'Start',
    stop_label: 'Stop',
    stop_on_scroll: true, 
    countdown_prefix: '(', 
    countdown_sufix: ')',
    onStart: function() {
    },
    onStop: function() {
    }
  },
  thumb_opacity: 1,
  callbacks: {
    afterImageVisible: function() {
		if(this.current_description) {
			var fav = this.current_description[0].textContent.split('##');
			if(fav[0]=='infav'){
				$('#tofav').removeClass().addClass('in').attr('href', fav[1]).text('В избранном');
			} else {
				$('#tofav').removeClass().attr('href', fav[1]).text('В избранное');
			}
		}
    }
}
});

 var galleries = $('#gallery2').adGallery({
  width: 500, 
  height: 480,
  slideshow: {
    enable: false,
    autostart: true,
    speed: 5000,
    start_label: 'Start',
    stop_label: 'Stop',
    stop_on_scroll: true, 
    countdown_prefix: '(', 
    countdown_sufix: ')',
    onStart: function() {
    },
    onStop: function() {
    }
  },
  thumb_opacity: 1
});

$('#gallery .info .know  a,#gallery2 .info .know  a').live('click',function(){
$(this).toggle();
$(this).parent().find('.phone').toggle();
return false
})
$('#popup .close').live('click',function(){
$('#alpha, #popup').fadeOut();
})














})