/**
 * Equal heights little jQuery plugin by Status201
 * @version 1.0.4
 * @requires jQuery 1.7+
 * @author Gijs Oliemans <gijs[at]status201.nl>
 * @license MIT
 */

!function(i){i.fn.equalHeights=function(n){var e,o={onResize:!0,onLoad:!0},t=i.extend({},o,n),h={},s=0,u=[],a=0,d=0,c=i(this);return c.length<2?this:(t.onResize&&i(window).resize(function(){e&&window.clearTimeout(e),e=window.setTimeout(function(){c.equalHeights({onResize:!1,onLoad:!1})},100)}),t.onLoad&&i(window).load(function(){c.equalHeights({onResize:!1,onLoad:!1})}),c.each(function(){u=i(this),u.height("auto"),a=u.height(),a>0&&(d=u.position().top,s=d in h,s?a>h[d]?(h[d]=a,i(c).filter(function(){return i(this).position().top==d}).height(a)):u.height(h[d]):(h[d]=a,u.height(h[d])))}),this)}}(jQuery);
