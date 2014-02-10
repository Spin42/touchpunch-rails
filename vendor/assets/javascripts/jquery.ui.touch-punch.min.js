/*!
 * jQuery UI Touch Punch Improved 0.3.1
 *
 *
 * Copyright 2013, Chris Hutchinson <chris@brushd.com>
 * Original jquery-ui-touch-punch Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 * jquery.ui.widget.js
 * jquery.ui.mouse.js
 */
(function(d){var a=window.navigator.pointerEnabled||window.navigator.msPointerEnabled;d.support.touch="ontouchend" in document||a;if(!d.support.touch||!d.ui.mouse){return}var e=d.ui.mouse.prototype,g=e._mouseInit,c;function b(l){var j=window.pageXOffset,i=window.pageYOffset,h=l.clientX,k=l.clientY;if(l.pageY===0&&Math.floor(k)>Math.floor(l.pageY)||l.pageX===0&&Math.floor(h)>Math.floor(l.pageX)){h=h-j;k=k-i}else{if(k<(l.pageY-i)||h<(l.pageX-j)){h=l.pageX-j;k=l.pageY-i}}return{clientX:h,clientY:k}}function f(i,j){if((!a&&i.originalEvent.touches.length>1)||(a&&!i.isPrimary)){return}var l=a?i.originalEvent:i.originalEvent.changedTouches[0],h=document.createEvent("MouseEvents"),k=b(l);if(d(l.target).is("input")||d(l.target).is("textarea")){i.stopPropagation()}else{i.preventDefault()}h.initMouseEvent(j,true,true,window,1,i.screenX||l.screenX,i.screenY||l.screenY,i.clientX||k.clientX,i.clientY||k.clientY,false,false,false,false,0,null);i.target.dispatchEvent(h)}e._touchStart=function(i){var h=this;if(c||(!a&&!h._mouseCapture(i.originalEvent.changedTouches[0]))){return}c=true;h._touchMoved=false;f(i,"mouseover");f(i,"mousemove");f(i,"mousedown")};e._touchMove=function(h){if(!c){return}this._touchMoved=true;f(h,"mousemove")};e._touchEnd=function(h){if(!c){return}f(h,"mouseup");f(h,"mouseout");if(!this._touchMoved){f(h,"click")}c=false};e._mouseInit=function(){var h=this;h.element.on({touchstart:d.proxy(h,"_touchStart"),touchmove:d.proxy(h,"_touchMove"),touchend:d.proxy(h,"_touchEnd"),pointerDown:d.proxy(h,"_touchStart"),pointerMove:d.proxy(h,"_touchMove"),pointerUp:d.proxy(h,"_touchEnd"),MSPointerDown:d.proxy(h,"_touchStart"),MSPointerMove:d.proxy(h,"_touchMove"),MSPointerUp:d.proxy(h,"_touchEnd")});g.call(h)}})(jQuery);