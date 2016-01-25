
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


/*! pace 0.4.17 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V=[].slice,W={}.hasOwnProperty,X=function(a,b){function c(){this.constructor=a}for(var d in b)W.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Y=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?V.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?V.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)W.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),S=["ajax","document","eventLag","elements"],O=0,Q=S.length;Q>O;O++)I=S[O],C[I]===!0&&(C[I]=t[I]);i=function(a){function b(){return T=b.__super__.constructor.apply(this,arguments)}return X(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),N=window.XMLHttpRequest,M=window.XDomainRequest,L=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},H=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Y.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return H(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new N(b),a(c),c},v(window.XMLHttpRequest,N),null!=M&&(window.XDomainRequest=function(){var b;return b=new M,a(b),b},v(window.XDomainRequest,M)),null!=L&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=new L(a,b),H("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,L))}return X(b,a),b}(h),P=null,x=function(){return null==P&&(P=new j),P},x().on("request",function(b){var c,d,e,f;return f=b.type,e=b.request,Pace.running||C.restartOnRequestAfter===!1&&"force"!==H(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(I=i[c],I instanceof a){I.watch.apply(I,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d;return d=a.type,b=a.request,c="socket"===d?new m(b):new n(b),this.elements.push(c)},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),J=null,G=null,q=null,K=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(R=window.history.pushState,window.history.pushState=function(){return y(),R.apply(window.history,arguments)}),null!=window.history.replaceState&&(U=window.history.replaceState,window.history.replaceState=function(){return y(),U.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=J=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&J.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)I=i[d],J.push(new I(C));return Pace.bar=q=new b,G=[],K=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){return Pace.running=!0,q.render(),r=!1,o=F(function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(j=100-q.progress,d=o=0,e=!0,h=p=0,t=J.length;t>p;h=++p)for(I=J[h],m=null!=G[h]?G[h]:G[h]=[],g=null!=(v=I.elements)?v:[I],i=s=0,u=g.length;u>s;i=++s)f=g[i],k=null!=m[i]?m[i]:m[i]=new l(f),e&=k.done,k.done||(d++,o+=k.tick(a));return c=o/d,q.update(K.tick(a,c)),n=B(),q.done()||e||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.min(C.minTime,B()-n)))):b()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);

/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */

(function() {
    var root = (typeof exports === 'undefined' ? window : exports);
    var config = {
        // An option to choose a suffix for 2x images
        retinaImageSuffix : '@2x',

        // Ensure Content-Type is an image before trying to load @2x image
        // https://github.com/imulus/retinajs/pull/45)
        check_mime_type: true,

        // Resize high-resolution images to original image's pixel dimensions
        // https://github.com/imulus/retinajs/issues/8
        force_original_dimensions: true
    };

    function Retina() {}

    root.Retina = Retina;

    Retina.configure = function(options) {
        if (options === null) {
            options = {};
        }

        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                config[prop] = options[prop];
            }
        }
    };

    Retina.init = function(context) {
        if (context === null) {
            context = root;
        }

        var existing_onload = context.onload || function(){};

        context.onload = function() {
            var images = document.getElementsByTagName('img'), retinaImages = [], i, image;
            for (i = 0; i < images.length; i += 1) {
                image = images[i];
                if (!!!image.getAttributeNode('data-no-retina')) {
                    retinaImages.push(new RetinaImage(image));
                }
            }
            existing_onload();
        };
    };

    Retina.isRetina = function(){
        var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';

        if (root.devicePixelRatio > 1) {
            return true;
        }

        if (root.matchMedia && root.matchMedia(mediaQuery).matches) {
            return true;
        }

        return false;
    };


    var regexMatch = /\.\w+$/;
    function suffixReplace (match) {
        return config.retinaImageSuffix + match;
    }

    function RetinaImagePath(path, at_2x_path) {
        this.path = path || '';
        if (typeof at_2x_path !== 'undefined' && at_2x_path !== null) {
            this.at_2x_path = at_2x_path;
            this.perform_check = false;
        } else {
            if (undefined !== document.createElement) {
                var locationObject = document.createElement('a');
                locationObject.href = this.path;
                locationObject.pathname = locationObject.pathname.replace(regexMatch, suffixReplace);
                this.at_2x_path = locationObject.href;
            } else {
                var parts = this.path.split('?');
                parts[0] = parts[0].replace(regexMatch, suffixReplace);
                this.at_2x_path = parts.join('?');
            }
            this.perform_check = true;
        }
    }

    root.RetinaImagePath = RetinaImagePath;

    RetinaImagePath.confirmed_paths = [];

    RetinaImagePath.prototype.is_external = function() {
        return !!(this.path.match(/^https?\:/i) && !this.path.match('//' + document.domain) );
    };

    RetinaImagePath.prototype.check_2x_variant = function(callback) {
        var http, that = this;
        if (this.is_external()) {
            return callback(false);
        } else if (!this.perform_check && typeof this.at_2x_path !== 'undefined' && this.at_2x_path !== null) {
            return callback(true);
        } else if (this.at_2x_path in RetinaImagePath.confirmed_paths) {
            return callback(true);
        } else {
            http = new XMLHttpRequest();
            http.open('HEAD', this.at_2x_path);
            http.onreadystatechange = function() {
                if (http.readyState !== 4) {
                    return callback(false);
                }

                if (http.status >= 200 && http.status <= 399) {
                    if (config.check_mime_type) {
                        var type = http.getResponseHeader('Content-Type');
                        if (type === null || !type.match(/^image/i)) {
                            return callback(false);
                        }
                    }

                    RetinaImagePath.confirmed_paths.push(that.at_2x_path);
                    return callback(true);
                } else {
                    return callback(false);
                }
            };
            http.send();
        }
    };


    function RetinaImage(el) {
        this.el = el;
        this.path = new RetinaImagePath(this.el.getAttribute('src'), this.el.getAttribute('data-at2x'));
        var that = this;
        this.path.check_2x_variant(function(hasVariant) {
            if (hasVariant) {
                that.swap();
            }
        });
    }

    root.RetinaImage = RetinaImage;

    RetinaImage.prototype.swap = function(path) {
        if (typeof path === 'undefined') {
            path = this.path.at_2x_path;
        }

        var that = this;
        function load() {
            if (! that.el.complete) {
                setTimeout(load, 5);
            } else {
                if (config.force_original_dimensions) {
                    that.el.setAttribute('width', that.el.offsetWidth);
                    that.el.setAttribute('height', that.el.offsetHeight);
                }

                that.el.setAttribute('src', path);
            }
        }
        load();
    };


    if (Retina.isRetina()) {
        Retina.init(root);
    }
})();


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*! device.js 0.1.57 */
(function(){var a,b,c,d,e,f,g,h,i;window.device={},b=window.document.documentElement,i=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return c("iphone")},device.ipod=function(){return c("ipod")},device.ipad=function(){return c("ipad")},device.android=function(){return c("android")},device.androidPhone=function(){return device.android()&&c("mobile")},device.androidTablet=function(){return device.android()&&!c("mobile")},device.blackberry=function(){return c("blackberry")||c("bb10")||c("rim")},device.blackberryPhone=function(){return device.blackberry()&&!c("tablet")},device.blackberryTablet=function(){return device.blackberry()&&c("tablet")},device.windows=function(){return c("windows")},device.windowsPhone=function(){return device.windows()&&c("phone")},device.windowsTablet=function(){return device.windows()&&c("touch")},device.fxos=function(){return c("(mobile; rv:")||c("(tablet; rv:")},device.fxosPhone=function(){return device.fxos()&&c("mobile")},device.fxosTablet=function(){return device.fxos()&&c("tablet")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},c=function(a){return-1!==i.indexOf(a)},e=function(a){var c;return c=new RegExp(a,"i"),b.className.match(c)},a=function(a){return e(a)?void 0:b.className+=" "+a},g=function(a){return e(a)?b.className=b.className.replace(a,""):void 0},device.ios()?device.ipad()?a("ios ipad tablet"):device.iphone()?a("ios iphone mobile"):device.ipod()&&a("ios ipod mobile"):device.android()?device.androidTablet()?a("android tablet"):a("android mobile"):device.blackberry()?device.blackberryTablet()?a("blackberry tablet"):a("blackberry mobile"):device.windows()?device.windowsTablet()?a("windows tablet"):device.windowsPhone()?a("windows mobile"):a("desktop"):device.fxos()?device.fxosTablet()?a("fxos tablet"):a("fxos mobile"):a("desktop"),d=function(){return device.landscape()?(g("portrait"),a("landscape")):(g("landscape"),a("portrait"))},h="onorientationchange"in window,f=h?"orientationchange":"resize",window.addEventListener?window.addEventListener(f,d,!1):window.attachEvent?window.attachEvent(f,d):window[f]=d,d()}).call(this);

(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, _i, _len, _ref;
      _ref = this.keys;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, _i, _len, _ref;
      _ref = this.keys;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var _ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, char) {
          return char.toUpperCase();
        });
      }
      return ((_ref = el.currentStyle) != null ? _ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      this.animationNameCache = new WeakMap();
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.stopped = false;
      this.boxes = (function() {
        var _i, _len, _ref, _results;
        _ref = this.element.querySelectorAll("." + this.config.boxClass);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box);
        }
        return _results;
      }).call(this);
      this.all = (function() {
        var _i, _len, _ref, _results;
        _ref = this.boxes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box);
        }
        return _results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var node, record, _j, _len1, _results;
            _results = [];
            for (_j = 0, _len1 = records.length; _j < _len1; _j++) {
              record = records[_j];
              _results.push((function() {
                var _k, _len2, _ref1, _results1;
                _ref1 = record.addedNodes || [];
                _results1 = [];
                for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                  node = _ref1[_k];
                  _results1.push(this.doSync(node));
                }
                return _results1;
              }).call(_this));
            }
            return _results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, _i, _len, _ref, _results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      _ref = element.querySelectorAll("." + this.config.boxClass);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        if (__indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          _results.push(this.scrolled = true);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.style.visibility = 'visible');
      }
      return _results;
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, value, vendor, _results;
      _results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        _results.push((function() {
          var _i, _len, _ref, _results1;
          _ref = this.vendors;
          _results1 = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            vendor = _ref[_i];
            _results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var result, style, vendor, _i, _len, _ref;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      _ref = this.vendors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        vendor = _ref[_i];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (_error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

/*
* touchSwipe - jQuery Plugin
* https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* http://labs.skinkers.com/touchSwipe/
* http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson (www.skinkers.com)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* $version: 1.6.3
*/(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false)}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){return J[a7].distance}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}})(jQuery);

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it	
		function update (){
			
			$this.each(function(){
								
				firstTop = $this.offset().top;
			});
	
			if (outerHeight) {
				getHeight = function(jqo) {
					return jqo.outerHeight(true);
				};
			} else {
				getHeight = function(jqo) {
					return jqo.height();
				};
			}
				
			// setup defaults if arguments aren't specified
			if (arguments.length < 1 || xpos === null) xpos = "50%";
			if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
			if (arguments.length < 3 || outerHeight === null) outerHeight = true;
			
			// function to be called whenever the window is scrolled or resized
			
				var pos = $window.scrollTop();				
	
				$this.each(function(){
					var $element = $(this);
					var top = $element.offset().top;
					var height = getHeight($element);
	
					// Check if totally above or totally below viewport
					if (top + height < pos || top > pos + windowHeight) {
						return;
					}
					
					$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
					
				});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
/*
jQuery Waypoints - v1.1.7
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
(function($,k,m,i,d){var e=$(i),g="waypoint.reached",b=function(o,n){o.element.trigger(g,n);if(o.options.triggerOnce){o.element[k]("destroy")}},h=function(p,o){if(!o){return -1}var n=o.waypoints.length-1;while(n>=0&&o.waypoints[n].element[0]!==p[0]){n-=1}return n},f=[],l=function(n){$.extend(this,{element:$(n),oldScroll:0,waypoints:[],didScroll:false,didResize:false,doScroll:$.proxy(function(){var q=this.element.scrollTop(),p=q>this.oldScroll,s=this,r=$.grep(this.waypoints,function(u,t){return p?(u.offset>s.oldScroll&&u.offset<=q):(u.offset<=s.oldScroll&&u.offset>q)}),o=r.length;if(!this.oldScroll||!q){$[m]("refresh")}this.oldScroll=q;if(!o){return}if(!p){r.reverse()}$.each(r,function(u,t){if(t.options.continuous||u===o-1){b(t,[p?"down":"up"])}})},this)});$(n).bind("scroll.waypoints",$.proxy(function(){if(!this.didScroll){this.didScroll=true;i.setTimeout($.proxy(function(){this.doScroll();this.didScroll=false},this),$[m].settings.scrollThrottle)}},this)).bind("resize.waypoints",$.proxy(function(){if(!this.didResize){this.didResize=true;i.setTimeout($.proxy(function(){$[m]("refresh");this.didResize=false},this),$[m].settings.resizeThrottle)}},this));e.load($.proxy(function(){this.doScroll()},this))},j=function(n){var o=null;$.each(f,function(p,q){if(q.element[0]===n){o=q;return false}});return o},c={init:function(o,n){this.each(function(){var u=$.fn[k].defaults.context,q,t=$(this);if(n&&n.context){u=n.context}if(!$.isWindow(u)){u=t.closest(u)[0]}q=j(u);if(!q){q=new l(u);f.push(q)}var p=h(t,q),s=p<0?$.fn[k].defaults:q.waypoints[p].options,r=$.extend({},s,n);r.offset=r.offset==="bottom-in-view"?function(){var v=$.isWindow(u)?$[m]("viewportHeight"):$(u).height();return v-$(this).outerHeight()}:r.offset;if(p<0){q.waypoints.push({element:t,offset:null,options:r})}else{q.waypoints[p].options=r}if(o){t.bind(g,o)}if(n&&n.handler){t.bind(g,n.handler)}});$[m]("refresh");return this},remove:function(){return this.each(function(o,p){var n=$(p);$.each(f,function(r,s){var q=h(n,s);if(q>=0){s.waypoints.splice(q,1);if(!s.waypoints.length){s.element.unbind("scroll.waypoints resize.waypoints");f.splice(r,1)}}})})},destroy:function(){return this.unbind(g)[k]("remove")}},a={refresh:function(){$.each(f,function(r,s){var q=$.isWindow(s.element[0]),n=q?0:s.element.offset().top,p=q?$[m]("viewportHeight"):s.element.height(),o=q?0:s.element.scrollTop();$.each(s.waypoints,function(u,x){if(!x){return}var t=x.options.offset,w=x.offset;if(typeof x.options.offset==="function"){t=x.options.offset.apply(x.element)}else{if(typeof x.options.offset==="string"){var v=parseFloat(x.options.offset);t=x.options.offset.indexOf("%")?Math.ceil(p*(v/100)):v}}x.offset=x.element.offset().top-n+o-t;if(x.options.onlyOnScroll){return}if(w!==null&&s.oldScroll>w&&s.oldScroll<=x.offset){b(x,["up"])}else{if(w!==null&&s.oldScroll<w&&s.oldScroll>=x.offset){b(x,["down"])}else{if(!w&&s.element.scrollTop()>x.offset){b(x,["down"])}}}});s.waypoints.sort(function(u,t){return u.offset-t.offset})})},viewportHeight:function(){return(i.innerHeight?i.innerHeight:e.height())},aggregate:function(){var n=$();$.each(f,function(o,p){$.each(p.waypoints,function(q,r){n=n.add(r.element)})});return n}};$.fn[k]=function(n){if(c[n]){return c[n].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof n==="function"||!n){return c.init.apply(this,arguments)}else{if(typeof n==="object"){return c.init.apply(this,[null,n])}else{$.error("Method "+n+" does not exist on jQuery "+k)}}}};$.fn[k].defaults={continuous:true,offset:0,triggerOnce:false,context:i};$[m]=function(n){if(a[n]){return a[n].apply(this)}else{return a.aggregate()}};$[m].settings={resizeThrottle:200,scrollThrottle:100};e.load(function(){$[m]("refresh")})})(jQuery,"waypoint","waypoints",window);
/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));

/* =============================================================

    Smooth Scroll 1.1
    Animated scroll to anchor links.

    Script by Charlie Evans.
    http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links

    Rebounded by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */





/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

        if( !device.tablet() && !device.mobile() ) {

            (function($) {
                jQuery(document).ready(function($) {
                    $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
                        event.preventDefault(); // Prevent the default action from occurring
                        $('html,body').animate({scrollTop:$(this.hash).offset().top-10}, 1000, 'easeInSine'); // Animate the scroll to this link's href value
                    });
                });
            })(jQuery);
                        
        } else {
            
            (function($) {
                jQuery(document).ready(function($) {
                    $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
                        event.preventDefault(); // Prevent the default action from occurring
                        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'easeInSine'); // Animate the scroll to this link's href value
                    });
                });
            })(jQuery);
            
        }
        
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,
		slideZIndex: 50,
		wrapperClass: 'bx-wrapper',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		autoSlideForOnePage: false,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {},
		onSliderResize: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true and has more than 1 page, start the show
			if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}

			if(slider.viewport.css('box-sizing') == 'border-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
							parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
			}else if(slider.viewport.css('box-sizing') == 'padding-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
			}

			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width() + slider.settings.slideMargin;
					slidesShowing = Math.floor((slider.viewport.width() +
						slider.settings.slideMargin) / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = Math.ceil(slider.children.length / getMoveBy());
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.on('click', 'a', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
			slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			if(pagerLink.attr('data-slide-index') !== undefined){
				var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
				// if clicked pager link is not active, continue with the goToSlide call
				if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
				e.preventDefault();
			}
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if(position){
					if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
					else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
				}
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// don't do anything if slider isn't initialized.
			if(!slider.initialized) return;
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
				// Call user resize handler
				slider.settings.onSliderResize.call(el, slider.active.index);
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns current slide element
		 */
		el.getCurrentSlideElement = function(){
			return slider.children.eq(slider.active.index);
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);

/**
 * jquery.slimmenu.js
 * http://adnantopal.github.io/slimmenu/
 * Author: @adnantopal
 * Copyright 2013, Adnan Topal (atopal.com)
 * Licensed under the MIT license.
 */
;(function ( $, window, document, undefined )
{
    var pluginName = "slimmenu",
        defaults =
        {
            resizeWidth: '768',
            collapserTitle: 'Main Menu',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;&nbsp;'
        };

    function Plugin( element, options )
    {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this.init();
    }

    Plugin.prototype = {

        init: function()
        {
            var $options = this.options,
                $menu = this.$elem,
                $collapser = '<div class="menu-collapser">'+$options.collapserTitle+'<div class="collapse-button"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>',
                $menu_collapser;

            $menu.before($collapser);
            $menu_collapser = $menu.prev('.menu-collapser');

            $menu.on('click', '.sub-collapser', function(e)
            {
                e.preventDefault();
                e.stopPropagation();

                var $parent_li = $(this).closest('li');

                if ($(this).hasClass('expanded'))
                {
                    $(this).removeClass('expanded');
                    $(this).find('i').html('&#9660;');
                    $parent_li.find('>ul').slideUp($options.animSpeed, $options.easingEffect);
                }
                else
                {
                    $(this).addClass('expanded');
                    $(this).find('i').html('&#9650;');
                    $parent_li.find('>ul').slideDown($options.animSpeed, $options.easingEffect);
                }
            });

            $menu_collapser.on('click', '.collapse-button', function(e)
            {
                e.preventDefault();
                $menu.slideToggle($options.animSpeed, $options.easingEffect);
            });

            this.resizeMenu({ data: { el: this.element, options: this.options } });
            $(window).on('resize', { el: this.element, options: this.options }, this.resizeMenu);
        },

        resizeMenu: function(event)
        {
            var $window = $(window),
                $options = event.data.options,
                $menu = $(event.data.el),
                $menu_collapser = $('body').find('.menu-collapser');

            $menu.find('li').each(function()
            {
                if ($(this).has('ul').length)
                {
                    if ($(this).has('.sub-collapser').length)
                    {
                        $(this).children('.sub-collapser i').html('&#9660;');
                    }
                    else
                    {
                        $(this).append('<span class="sub-collapser"><i>&#9660;</i></span>');
                    }
                }

                $(this).children('ul').hide();
                $(this).find('.sub-collapser').removeClass('expanded').children('i').html('&#9660;');
            });

            if ($options.resizeWidth >= $window.width())
            {
                if ($options.indentChildren)
                {
                    $menu.find('ul').each(function()
                    {
                        var $depth = $(this).parents('ul').length;
                        if (!$(this).children('li').children('a').has('i').length)
                        {
                            $(this).children('li').children('a').prepend(Plugin.prototype.indent($depth, $options));
                        }
                    });
                }

                $menu.find('li').has('ul').off('mouseenter mouseleave');
                $menu.addClass('collapsed').hide();
                $menu_collapser.show();
            }
            else
            {
                $menu.find('li').has('ul').on('mouseenter', function()
                {
                    $(this).find('>ul').stop().slideDown($options.animSpeed, $options.easingEffect);
                })
                .on('mouseleave', function()
                {
                    $(this).find('>ul').stop().slideUp($options.animSpeed, $options.easingEffect);
                });

                $menu.find('li > a > i').remove();
                $menu.removeClass('collapsed').show();
                $menu_collapser.hide();
            }
        },

        indent: function(num, options)
        {
            var $indent = '';
            for (var i=0; i < num; i++)
            {
                $indent += options.childrenIndenter;
            }
            return '<i>'+$indent+'</i>';
        }
    };

    $.fn[pluginName] = function ( options )
    {
        return this.each(function ()
        {
            if (!$.data(this, "plugin_" + pluginName))
            {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

;( function( $, window, undefined ) {

	'use strict';

	$.CatSlider = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	$.CatSlider.prototype = {

		_init : function( options ) {

			// the categories (ul)
			this.$categories = this.$el.children( 'ul' );
			// the navigation
			this.$navcategories = this.$el.find( 'nav > a' );
			var animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			};
			// animation end event name
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
			// animations and transforms support
			this.support = Modernizr.csstransforms && Modernizr.cssanimations;
			// if currently animating
			this.isAnimating = false;
			// current category
			this.current = 0;
			var $currcat = this.$categories.eq( 0 );
			if( !this.support ) {
				this.$categories.hide();
				$currcat.show();
			}
			else {
				$currcat.addClass( 'mi-current' );
			}
			// current nav category
			this.$navcategories.eq( 0 ).addClass( 'mi-selected' );
			// initialize the events
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;
			this.$navcategories.on( 'click.catslider', function() {
				self.showCategory( $( this ).index() );
				return false;
			} );

			// reset on window resize..
			$( window ).on( 'resize', function() {
				self.$categories.removeClass().eq( 0 ).addClass( 'mi-current' );
				self.$navcategories.eq( self.current ).removeClass( 'mi-selected' ).end().eq( 0 ).addClass( 'mi-selected' );
				self.current = 0;
			} );

		},
		showCategory : function( catidx ) {

			if( catidx === this.current || this.isAnimating ) {
				return false;
			}
			this.isAnimating = true;
			// update selected navigation
			this.$navcategories.eq( this.current ).removeClass( 'mi-selected' ).end().eq( catidx ).addClass( 'mi-selected' );

			var dir = catidx > this.current ? 'right' : 'left',
				toClass = dir === 'right' ? 'mi-moveToLeft' : 'mi-moveToRight',
				fromClass = dir === 'right' ? 'mi-moveFromRight' : 'mi-moveFromLeft',
				// current category
				$currcat = this.$categories.eq( this.current ),
				// new category
				$newcat = this.$categories.eq( catidx ),
				$newcatchild = $newcat.children(),
				lastEnter = dir === 'right' ? $newcatchild.length - 1 : 0,
				self = this;

			if( this.support ) {

				$currcat.removeClass().addClass( toClass );
				
				setTimeout( function() {

					$newcat.removeClass().addClass( fromClass );
					$newcatchild.eq( lastEnter ).on( self.animEndEventName, function() {

						$( this ).off( self.animEndEventName );
						$newcat.addClass( 'mi-current' );
						self.current = catidx;
						var $this = $( this );
						// solve chrome bug
						self.forceRedraw( $this.get(0) );
						self.isAnimating = false;

					} );

				}, $newcatchild.length * 90 );

			}
			else {

				$currcat.hide();
				$newcat.show();
				this.current = catidx;
				this.isAnimating = false;

			}

		},
		// based on http://stackoverflow.com/a/8840703/989439
		forceRedraw : function(element) {
			if (!element) { return; }
			var n = document.createTextNode(' '),
				position = element.style.position;
			element.appendChild(n);
			element.style.position = 'relative';
			setTimeout(function(){
				element.style.position = position;
				n.parentNode.removeChild(n);
			}, 25);
		}

	}

	$.fn.catslider = function( options ) {
		var instance = $.data( this, 'catslider' );
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				instance ? instance._init() : instance = $.data( this, 'catslider', new $.CatSlider( options, this ) );
			});
		}
		return instance;
	};

} )( jQuery, window );

/* 
 * VenoBox - jQuery Plugin
 * version: 1.3.2
 * @requires jQuery
 *
 * Examples at http://lab.veno.it/venobox/
 * License: Creative Commons Attribution 3.0 License
 * License URI: http://creativecommons.org/licenses/by/3.0/
 * Copyright 2013-2014 Nicola Franchini - @nicolafranchini
 *
 */
(function(e){function P(){e.ajax({url:u,cache:false}).done(function(e){s.html('<div class="vbox-inline">'+e+"</div>");q(true)}).fail(function(){s.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>');q(true)})}function H(){s.html('<iframe class="venoframe" src="'+u+'"></iframe>');q()}function B(){var e=u.split("/");var t=e[e.length-1];s.html('<iframe class="venoframe" src="http://player.vimeo.com/video/'+t+'"></iframe>');q()}function j(){var e=u.split("/");var t=e[e.length-1];s.html('<iframe class="venoframe" src="http://www.youtube.com/embed/'+t+'"></iframe>');q()}function F(){s.html('<div class="vbox-inline">'+e(u).html()+"</div>");q()}function I(){h=e(".vbox-content").find("img");h.one("load",function(){q()}).each(function(){if(this.complete)e(this).load()})}function q(t){t=t||false;if(t!=true){e(window).scrollTop(0)}C.html(S);s.find(">:first-child").addClass("figlio");e(".figlio").css("width",p).css("height",d).css("padding",v).css("background",m);f=s.outerHeight();l=e(window).height();if(f+80<l){c=(l-f)/2;s.css("margin-top",c);s.css("margin-bottom",c)}else{s.css("margin-top","40px");s.css("margin-bottom","40px")}s.animate({opacity:"1"},"slow")}function R(){if(e(".vbox-content").length){f=s.height();l=e(window).height();if(f+80<l){c=(l-f)/2;s.css("margin-top",c);s.css("margin-bottom",c)}else{s.css("margin-top","40px");s.css("margin-bottom","40px")}}}var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;e.fn.extend({venobox:function(f){var l={framewidth:"",frameheight:"",border:"0",bgcolor:"#fff",numeratio:false,infinigall:false};var f=e.extend(l,f);return this.each(function(){var l=e(this);l.addClass("vbox-item");l.data("framewidth",f.framewidth);l.data("frameheight",f.frameheight);l.data("border",f.border);l.data("bgcolor",f.bgcolor);l.data("numeratio",f.numeratio);l.data("infinigall",f.infinigall);l.click(function(f){function c(){y=l.data("gall");L=l.data("numeratio");D=l.data("infinigall");b=e('.vbox-item[data-gall="'+y+'"]');if(b.length>0&&L===true){k.html(b.index(l)+1+" / "+b.length);k.fadeIn()}else{k.fadeOut()}w=b.eq(b.index(l)+1);E=b.eq(b.index(l)-1);if(l.attr("title")){S=l.attr("title");C.fadeIn()}else{S="";C.fadeOut()}if(D===true){x=true;T=true;if(w.length<1){w=b.eq(0)}if(b.index(l)<1){E=b.eq(b.index(b.length))}}else{if(w.length>0){e(".vbox-next").css("display","block");x=true}else{e(".vbox-next").css("display","none");x=false}if(b.index(l)>0){e(".vbox-prev").css("display","block");T=true}else{e(".vbox-prev").css("display","none");T=false}}}f.stopPropagation();f.preventDefault();l=e(this);t=l.data("overlay");p=l.data("framewidth");d=l.data("frameheight");v=l.data("border");m=l.data("bgcolor");x=false;T=false;N=false;u=l.attr("href");a=e(window).scrollTop();a=-a;e("body").wrapInner('<div class="vwrap"></div>');r=e(".vwrap");o='<div class="vbox-overlay" style="background:'+t+'"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>';e("body").append(o);n=e(".vbox-overlay");i=e(".vbox-container");s=e(".vbox-content");k=e(".vbox-num");C=e(".vbox-title");s.html("");s.css("opacity","0");c();n.css({opacity:"1","min-height":e(window).outerHeight()+130});if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){r.css({position:"fixed",top:a,opacity:"0"}).data("top",a)}else{r.css({position:"fixed",top:a}).data("top",a);e(window).scrollTop(0)}n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){n.css({"min-height":e(window).outerHeight(),height:"auto"});if(l.data("type")=="iframe"){H()}else if(l.data("type")=="inline"){F()}else if(l.data("type")=="ajax"){P()}else if(l.data("type")=="vimeo"){B()}else if(l.data("type")=="youtube"){j()}else{s.html('<img src="'+u+'">');I()}});e("body").keydown(function(r){if(N)return;if(r.keyCode==37&&T==true){N=true;t=E.data("overlay");p=E.data("framewidth");d=E.data("frameheight");v=E.data("border");m=E.data("bgcolor");u=E.attr("href");if(E.attr("title")){S=E.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(E.data("type")=="iframe"){H()}else if(E.data("type")=="inline"){F()}else if(E.data("type")=="ajax"){P()}else if(E.data("type")=="youtube"){j()}else if(E.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=E;c();N=false})}if(r.keyCode==39&&x==true){N=true;t=w.data("overlay");p=w.data("framewidth");d=w.data("frameheight");v=w.data("border");m=w.data("bgcolor");u=w.attr("href");if(w.attr("title")){S=w.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(w.data("type")=="iframe"){H()}else if(w.data("type")=="inline"){F()}else if(w.data("type")=="ajax"){P()}else if(w.data("type")=="youtube"){j()}else if(w.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=w;c();N=false})}});e(".vbox-next").click(function(){t=w.data("overlay");p=w.data("framewidth");d=w.data("frameheight");v=w.data("border");m=w.data("bgcolor");u=w.attr("href");if(w.attr("title")){S=w.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(w.data("type")=="iframe"){H()}else if(w.data("type")=="inline"){F()}else if(w.data("type")=="ajax"){P()}else if(w.data("type")=="youtube"){j()}else if(w.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=w;c()})});e(".vbox-prev").click(function(){t=E.data("overlay");p=E.data("framewidth");d=E.data("frameheight");v=E.data("border");m=E.data("bgcolor");u=E.attr("href");if(E.attr("title")){S=E.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(E.data("type")=="iframe"){H()}else if(E.data("type")=="inline"){F()}else if(E.data("type")=="ajax"){P()}else if(E.data("type")=="youtube"){j()}else if(E.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=E;c()})});e(".vbox-close, .vbox-overlay").click(function(t){M=".figlio";O=".vbox-prev";A=".vbox-next";_=".figlio *";if(!e(t.target).is(M)&&!e(t.target).is(A)&&!e(t.target).is(O)&&!e(t.target).is(_)){n.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){n.remove();if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){e(".vwrap").css("opacity","1");e(".vwrap").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){e(".vwrap").children().unwrap();e(window).scrollTop(-a)})}else{e(".vwrap").children().unwrap();e(window).scrollTop(-a)}N=false});n.css("opacity","0")}});return false})})}});e(window).resize(function(){R()})})(jQuery)

/*!
 * Cube Portfolio - Responsive jQuery Grid Plugin
 *
 * version: 1.6.0 (7 November, 2014)
 * requires jQuery v1.7 or later
 *
 * Copyright (c) 2014, Mihai Buricea (http://scriptpie.com)
 * Released under CodeCanyon License http://codecanyon.net/licenses
 *
 */
!function(a,b,c,d){"use strict";var e="cbp",f="."+e;"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete};var g={init:function(a,b){var c,d=this;return d.cubeportfolio=a,d.type=b,d.isOpen=!1,d.options=d.cubeportfolio.options,"singlePageInline"===b?(d.matrice=[-1,-1],d.height=0,void d._createMarkupSinglePageInline()):(d._createMarkup(),void(d.options.singlePageDeeplinking&&"singlePage"===b&&(d.url=location.href,"#"===d.url.slice(-1)&&(d.url=d.url.slice(0,-1)),c=d.cubeportfolio.blocksAvailable.find(d.options.singlePageDelegate).filter(function(){return d.url.split("#cbp=")[1]===this.getAttribute("href")})[0],c&&(d.url=d.url.replace(/#cbp=(.+)/gi,""),d.openSinglePage(d.cubeportfolio.blocksAvailable.find(d.options.singlePageDelegate),c)))))},_createMarkup:function(){var b=this,d="";"singlePage"===b.type&&"left"!==b.options.singlePageAnimation&&(d=" cbp-popup-singlePage-"+b.options.singlePageAnimation),b.wrap=a("<div/>",{"class":"cbp-popup-wrap cbp-popup-"+b.type+d,"data-action":"lightbox"===b.type?"close":""}).on("click"+f,function(c){if(!b.stopEvents){var d=a(c.target).attr("data-action");b[d]&&(b[d](),c.preventDefault())}}),b.content=a("<div/>",{"class":"cbp-popup-content"}).appendTo(b.wrap),a("<div/>",{"class":"cbp-popup-loadingBox"}).appendTo(b.wrap),"ie8"===b.cubeportfolio.browser&&(b.bg=a("<div/>",{"class":"cbp-popup-ie8bg","data-action":"lightbox"===b.type?"close":""}).appendTo(b.wrap)),b.navigationWrap=a("<div/>",{"class":"cbp-popup-navigation-wrap"}).appendTo(b.wrap),b.navigation=a("<div/>",{"class":"cbp-popup-navigation"}).appendTo(b.navigationWrap),b.closeButton=a("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(b.navigation),b.nextButton=a("<div/>",{"class":"cbp-popup-next",title:"Next (Right arrow key)","data-action":"next"}).appendTo(b.navigation),b.prevButton=a("<div/>",{"class":"cbp-popup-prev",title:"Previous (Left arrow key)","data-action":"prev"}).appendTo(b.navigation),"singlePage"===b.type&&(b.options.singlePageCounter&&(b.counter=a(b.options.singlePageCounter).appendTo(b.navigation),b.counter.text("")),b.content.on("click"+f,b.options.singlePageDelegate,function(a){a.preventDefault();var c,d=b.dataArray.length,e=this.getAttribute("href");for(c=0;d>c&&b.dataArray[c].url!==e;c++);b.singlePageJumpTo(c-b.current)}),b.wrap.on("mousewheel"+f+" DOMMouseScroll"+f,function(a){a.stopImmediatePropagation()})),a(c).on("keydown"+f,function(a){b.isOpen&&(b.stopEvents||(37===a.keyCode?b.prev():39===a.keyCode?b.next():27===a.keyCode&&b.close()))})},_createMarkupSinglePageInline:function(){var b=this;b.wrap=a("<div/>",{"class":"cbp-popup-singlePageInline"}).on("click"+f,function(c){if(!b.stopEvents){var d=a(c.target).attr("data-action");d&&b[d]&&(b[d](),c.preventDefault())}}),b.content=a("<div/>",{"class":"cbp-popup-content"}).appendTo(b.wrap),a("<div/>",{"class":"cbp-popup-loadingBox"}).appendTo(b.wrap),b.navigation=a("<div/>",{"class":"cbp-popup-navigation"}).appendTo(b.wrap),b.closeButton=a("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(b.navigation)},destroy:function(){var b=this,d=a("body");a(c).off("keydown"+f),d.off("click"+f,b.options.lightboxDelegate),d.off("click"+f,b.options.singlePageDelegate),b.content.off("click"+f,b.options.singlePageDelegate),b.cubeportfolio.$obj.off("click"+f,b.options.singlePageInlineDelegate),b.cubeportfolio.$obj.off("click"+f,b.options.lightboxDelegate),b.cubeportfolio.$obj.off("click"+f,b.options.singlePageDelegate),b.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),b.cubeportfolio.blocks.removeClass("cbp-singlePageInline-active cbp-singlePageInline-active-loading"),b.wrap.remove()},openLightbox:function(d,e){var f,g,h=this,i=0,j=[];if(!h.isOpen){if(h.isOpen=!0,h.stopEvents=!1,h.dataArray=[],h.current=null,f=e.getAttribute("href"),null===f)throw new Error("HEI! Your clicked element doesn't have a href attribute.");a.each(d,function(b,c){var d,e=c.getAttribute("href"),g=e,k="isImage";if(-1===a.inArray(e,j)){if(f===e)h.current=i;else if(!h.options.lightboxGallery)return;/youtube/i.test(e)?(d=e.substring(e.lastIndexOf("v=")+2),/autoplay=/i.test(d)||(d+="&autoplay=1"),d=d.replace(/\?|&/,"?"),g="//www.youtube.com/embed/"+d,k="isYoutube"):/vimeo/i.test(e)?(d=e.substring(e.lastIndexOf("/")+1),/autoplay=/i.test(d)||(d+="&autoplay=1"),d=d.replace(/\?|&/,"?"),g="//player.vimeo.com/video/"+d,k="isVimeo"):/ted\.com/i.test(e)?(g="http://embed.ted.com/talks/"+e.substring(e.lastIndexOf("/")+1)+".html",k="isTed"):/(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(e)&&(g=e.split(-1!==e.indexOf("|")?"|":"%7C"),k="isSelfHosted"),h.dataArray.push({src:g,title:c.getAttribute(h.options.lightboxTitleSrc),type:k}),i++}j.push(e)}),h.counterTotal=h.dataArray.length,1===h.counterTotal?(h.nextButton.hide(),h.prevButton.hide(),h.dataActionImg=""):(h.nextButton.show(),h.prevButton.show(),h.dataActionImg='data-action="next"'),h.wrap.appendTo(c.body),h.scrollTop=a(b).scrollTop(),h.originalStyle=a("html").attr("style"),a("html").css({overflow:"hidden",paddingRight:b.innerWidth-a(c).width()}),h.wrap.show(),g=h.dataArray[h.current],h[g.type](g)}},openSinglePage:function(d,e){var f,g=this,h=0,i=[];if(!g.isOpen){if(g.cubeportfolio.singlePageInline&&g.cubeportfolio.singlePageInline.isOpen&&g.cubeportfolio.singlePageInline.close(),g.isOpen=!0,g.stopEvents=!1,g.dataArray=[],g.current=null,f=e.getAttribute("href"),null===f)throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(a.each(d,function(b,c){var d=c.getAttribute("href");-1===a.inArray(d,i)&&(f===d&&(g.current=h),g.dataArray.push({url:d,element:c}),h++),i.push(d)}),g.counterTotal=g.dataArray.length,1===g.counterTotal?(g.nextButton.hide(),g.prevButton.hide()):(g.nextButton.show(),g.prevButton.show()),g.wrap.appendTo(c.body),g.scrollTop=a(b).scrollTop(),a("html").css({overflow:"hidden",paddingRight:b.innerWidth-a(c).width()}),g.wrap.scrollTop(0),a.isFunction(g.options.singlePageCallback)&&g.options.singlePageCallback.call(g,g.dataArray[g.current].url,g.dataArray[g.current].element),g.wrap.show(),g.wrap.one(g.cubeportfolio.transitionEnd,function(){var a;g.options.singlePageStickyNavigation&&(g.wrap.addClass("cbp-popup-singlePage-sticky"),a=g.wrap[0].clientWidth,g.navigationWrap.width(a))}),("ie8"===g.cubeportfolio.browser||"ie9"===g.cubeportfolio.browser)&&(setTimeout(function(){g.wrap.addClass("cbp-popup-singlePage-sticky")},1e3),g.options.singlePageStickyNavigation)){var j=g.wrap[0].clientWidth;g.navigationWrap.width(j)}setTimeout(function(){g.wrap.addClass("cbp-popup-singlePage-open")},20),g.options.singlePageDeeplinking&&(location.href=g.url+"#cbp="+g.dataArray[g.current].url)}},openSinglePageInline:function(b,c,d){var e,f,g,h,i,j,k=this,l=0,m=0,n=0;if(d=d||!1,k.storeBlocks=b,k.storeCurrentBlock=c,k.isOpen)return h=a(c).closest(".cbp-item").index(".cbp-item"),void(k.dataArray[k.current].url!==c.getAttribute("href")||k.current!==h?k.cubeportfolio.singlePageInline.close("open",{blocks:b,currentBlock:c,fromOpen:!0}):k.close());if(k.wrap.addClass("cbp-popup-loading"),k.isOpen=!0,k.stopEvents=!1,k.dataArray=[],k.current=null,e=c.getAttribute("href"),null===e)throw new Error("HEI! Your clicked element doesn't have a href attribute.");i=a(c).closest(".cbp-item")[0],a.each(b,function(a,b){i===b&&(k.current=a)}),k.dataArray[k.current]={url:e,element:c},j=a(k.dataArray[k.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"),d||j.addClass("cbp-singlePageInline-active-loading"),k.counterTotal=b.length,k.wrap.insertBefore(k.cubeportfolio.$ul),"top"===k.options.singlePageInlinePosition?(m=0,n=k.cubeportfolio.cols-1):"bottom"===k.options.singlePageInlinePosition?(m=k.counterTotal,n=k.counterTotal,k.lastColumn=!0,d?k.lastColumn&&(k.top=k.lastColumnHeight):(k.lastColumnHeight=k.cubeportfolio.height,k.top=k.lastColumnHeight)):"above"===k.options.singlePageInlinePosition?(l=Math.floor(k.current/k.cubeportfolio.cols),m=k.cubeportfolio.cols*l,n=k.cubeportfolio.cols*(l+1)-1):(l=Math.floor(k.current/k.cubeportfolio.cols),m=Math.min(k.cubeportfolio.cols*(l+1),k.counterTotal),n=Math.min(k.cubeportfolio.cols*(l+2)-1,k.counterTotal),f=Math.ceil((k.current+1)/k.cubeportfolio.cols),g=Math.ceil(k.counterTotal/k.cubeportfolio.cols),k.lastColumn=f===g,d?k.lastColumn&&(k.top=k.lastColumnHeight):(k.lastColumnHeight=k.cubeportfolio.height,k.top=k.lastColumnHeight)),k.matrice=[m,n],a.isFunction(k.options.singlePageInlineCallback)&&k.options.singlePageInlineCallback.call(k,k.dataArray[k.current].url,k.dataArray[k.current].element)},_resizeSinglePageInline:function(c){var d,e=this;c=c||!1,e.height=e.content.outerHeight(!0),e.cubeportfolio._layout(),e.cubeportfolio._processStyle(e.cubeportfolio.transition),c&&e.wrap.removeClass("cbp-popup-loading"),e.cubeportfolio.$obj.addClass("cbp-popup-isOpening"),e.wrap.css({height:e.height}),e.wrap.css({top:e.top}),d=e.lastColumn?e.height:0,e.cubeportfolio._resizeMainContainer(e.cubeportfolio.transition,d),e.options.singlePageInlineInFocus&&(e.scrollTop=a(b).scrollTop(),a("body,html").animate({scrollTop:e.wrap.offset().top-150})),a(".cbp-singlePageInline-active").removeClass("cbp-singlePageInline-active-loading")},appendScriptsToWrap:function(a){var b=this,d=0,e=function(f){var g=c.createElement("script"),h=f.src;g.type="text/javascript",g.readyState?g.onreadystatechange=function(){("loaded"==g.readyState||"complete"==g.readyState)&&(g.onreadystatechange=null,d++,a[d]&&e(a[d]))}:g.onload=function(){d++,a[d]&&e(a[d])},h?g.src=h:g.text=f.text,b.content[0].appendChild(g)};e(a[0])},updateSinglePage:function(b,c,d){var e,f,g=this;g.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"),d===!1&&g.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"),g.content.html(b),c&&(g.wrap.hasClass("cbp-popup-ready")?g.appendScriptsToWrap(c):g.wrap.one(g.cubeportfolio.transitionEnd,function(){g.appendScriptsToWrap(c)})),g.wrap.addClass("cbp-popup-ready"),g.wrap.removeClass("cbp-popup-loading"),g.counter&&(f=a(g._getCounterMarkup(g.options.singlePageCounter,g.current+1,g.counterTotal)),g.counter.text(f.text())),e=g.content.find(".cbp-slider"),e?(g.slider=Object.create(h),g.slider._init(g,e)):g.slider=null,g.wrap.one(g.cubeportfolio.transitionEnd,function(){("android"===g.cubeportfolio.browser||"ios"===g.cubeportfolio.browser)&&a("html").css({position:"fixed"})})},updateSinglePageInline:function(a,b){var c,d=this;d.content.html(a),d._loadSinglePageInline(),b&&d.appendScriptsToWrap(b),c=d.content.find(".cbp-slider"),c?(d.slider=Object.create(h),d.slider._init(d,c)):d.slider=null},_loadSinglePageInline:function(){var b,c,d,e=this,g=[],h=/url\((['"]?)(.*?)\1\)/g;if(d=e.wrap.children().css("backgroundImage"))for(var i;i=h.exec(d);)g.push({src:i[2]});e.wrap.find("*").each(function(){var b=a(this);if(b.is("img:uncached")&&g.push({src:b.attr("src"),element:b[0]}),d=b.css("backgroundImage"))for(var c;c=h.exec(d);)g.push({src:c[2],element:b[0]})});var j=g.length,k=0;0===j&&setTimeout(function(){e._resizeSinglePageInline(!0)},0);var l=function(){k++,k===j&&setTimeout(function(){e._resizeSinglePageInline(!0)},0)};for(b=0;j>b;b++)c=new Image,a(c).on("load"+f+" error"+f,l),c.src=g[b].src},isImage:function(b){var c=this,d=new Image;c.tooggleLoading(!0),a('<img src="'+b.src+'">').is("img:uncached")?(a(d).on("load"+f+" error"+f,function(){c.updateImagesMarkup(b.src,b.title,c._getCounterMarkup(c.options.lightboxCounter,c.current+1,c.counterTotal)),c.tooggleLoading(!1)}),d.src=b.src):(c.updateImagesMarkup(b.src,b.title,c._getCounterMarkup(c.options.lightboxCounter,c.current+1,c.counterTotal)),c.tooggleLoading(!1))},isVimeo:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b._getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isYoutube:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b._getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isTed:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b._getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isSelfHosted:function(a){var b=this;b.updateSelfHostedVideo(a.src,a.title,b._getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},_getCounterMarkup:function(a,b,c){var d;return a.length?(d={current:b,total:c},a.replace(/\{\{current}}|\{\{total}}/gi,function(a){return d[a.slice(2,-2)]})):""},updateSelfHostedVideo:function(a,b,c){var d,e=this;e.wrap.addClass("cbp-popup-lightbox-isIframe");var f='<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';for(d=0;d<a.length;d++)/(\.mp4)/i.test(a[d])?f+='<source src="'+a[d]+'" type="video/mp4">':/(\.ogg)|(\.ogv)/i.test(a[d])?f+='<source src="'+a[d]+'" type="video/ogg">':/(\.webm)/i.test(a[d])&&(f+='<source src="'+a[d]+'" type="video/webm">');f+='Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>",e.content.html(f),e.wrap.addClass("cbp-popup-ready"),e.preloadNearbyImages()},updateVideoMarkup:function(a,b,c){var d=this;d.wrap.addClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-iframe"><iframe src="'+a+'" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.preloadNearbyImages()},updateImagesMarkup:function(a,b,c){var d=this;d.wrap.removeClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-figure"><img src="'+a+'" class="cbp-popup-lightbox-img" '+d.dataActionImg+' /><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.resizeImage(),d.preloadNearbyImages()},next:function(){var a=this;a[a.type+"JumpTo"](1)},prev:function(){var a=this;a[a.type+"JumpTo"](-1)},lightboxJumpTo:function(a){var b,c=this;c.current=c.getIndex(c.current+a),b=c.dataArray[c.current],c[b.type](b)},singlePageJumpTo:function(b){var c=this;c.current=c.getIndex(c.current+b),a.isFunction(c.options.singlePageCallback)&&(c.resetWrap(),c.wrap.scrollTop(0),c.wrap.addClass("cbp-popup-loading"),c.options.singlePageCallback.call(c,c.dataArray[c.current].url,c.dataArray[c.current].element),c.options.singlePageDeeplinking&&(location.href=c.url+"#cbp="+c.dataArray[c.current].url))},resetWrap:function(){var a=this;"singlePage"===a.type&&a.options.singlePageDeeplinking&&(location.href=a.url+"#")},getIndex:function(a){var b=this;return a%=b.counterTotal,0>a&&(a=b.counterTotal+a),a},close:function(c,d){var e=this;e.isOpen=!1,"singlePageInline"===e.type?"open"===c?(e.wrap.addClass("cbp-popup-loading"),a(e.dataArray[e.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active cbp-singlePageInline-active-loading"),e.openSinglePageInline(d.blocks,d.currentBlock,d.fromOpen)):(e.matrice=[-1,-1],e.cubeportfolio._layout(),e.cubeportfolio._processStyle(e.cubeportfolio.transition),e.cubeportfolio._resizeMainContainer(e.cubeportfolio.transition),e.wrap.css({height:0}),a(e.dataArray[e.current].element).parents(".cbp-item").removeClass("cbp-singlePageInline-active cbp-singlePageInline-active-loading"),"ie8"===e.cubeportfolio.browser||"ie9"===e.cubeportfolio.browser?(e.content.html(""),e.wrap.detach(),e.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),"promise"===c&&a.isFunction(d.callback)&&d.callback.call(e.cubeportfolio)):e.wrap.one(e.cubeportfolio.transitionEnd,function(){e.content.html(""),e.wrap.detach(),e.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),"promise"===c&&a.isFunction(d.callback)&&d.callback.call(e.cubeportfolio)}),e.options.singlePageInlineInFocus&&a("body, html").animate({scrollTop:e.scrollTop})):"singlePage"===e.type?(e.resetWrap(),e.wrap.removeClass("cbp-popup-ready"),("android"===e.cubeportfolio.browser||"ios"===e.cubeportfolio.browser)&&a("html").css({position:""}),a(b).scrollTop(e.scrollTop),setTimeout(function(){e.stopScroll=!0,e.navigationWrap.css({top:e.wrap.scrollTop()}),e.wrap.removeClass("cbp-popup-singlePage-open cbp-popup-singlePage-sticky"),("ie8"===e.cubeportfolio.browser||"ie9"===e.cubeportfolio.browser)&&(e.content.html(""),e.wrap.detach(),a("html").css({overflow:"",paddingRight:""}),e.navigationWrap.removeAttr("style"))},0),e.wrap.one(e.cubeportfolio.transitionEnd,function(){e.content.html(""),e.wrap.detach(),a("html").css({overflow:"",paddingRight:""}),e.navigationWrap.removeAttr("style")})):(e.originalStyle?a("html").attr("style",e.originalStyle):a("html").css({overflow:"",paddingRight:""}),a(b).scrollTop(e.scrollTop),e.content.html(""),e.wrap.detach())},tooggleLoading:function(a){var b=this;b.stopEvents=a,b.wrap[a?"addClass":"removeClass"]("cbp-popup-loading")},resizeImage:function(){if(this.isOpen){var c=a(b).height(),d=this.content.find("img"),e=parseInt(d.css("margin-top"),10)+parseInt(d.css("margin-bottom"),10);d.css("max-height",c-e+"px")}},preloadNearbyImages:function(){var b,c,d=[],e=this;d.push(e.getIndex(e.current+1)),d.push(e.getIndex(e.current+2)),d.push(e.getIndex(e.current+3)),d.push(e.getIndex(e.current-1)),d.push(e.getIndex(e.current-2)),d.push(e.getIndex(e.current-3));for(var f=d.length-1;f>=0;f--)"isImage"===e.dataArray[d[f]].type&&(c=e.dataArray[d[f]].src,b=new Image,a('<img src="'+c+'">').is("img:uncached")&&(b.src=c))}},h={_init:function(b,c){var d=this;d.current=0,d.obj=c,d.$obj=a(c),d._createMarkup(),d._events()},_createMarkup:function(){var b,c,d=this;d.$ul=d.$obj.children(".cbp-slider-wrap"),d.$li=d.$ul.children(".cbp-slider-item"),d.$li.eq(0).addClass("cbp-slider-item-current"),d.$liLength=d.$li.length,b=a("<div/>",{"class":"cbp-slider-arrowWrap"}).appendTo(d.$obj),a("<div/>",{"class":"cbp-slider-arrowNext","data-action":"nextItem"}).appendTo(b),a("<div/>",{"class":"cbp-slider-arrowPrev","data-action":"prevItem"}).appendTo(b),c=a("<div/>",{"class":"cbp-slider-bulletWrap"}).appendTo(d.$obj);for(var e=0;e<d.$liLength;e++){var f=0===e?" cbp-slider-bullet-current":"";a("<div/>",{"class":"cbp-slider-bullet"+f,"data-action":"jumpToItem"}).appendTo(c)}},_events:function(){var b=this;b.$obj.on("click"+f,function(c){var d=a(c.target).attr("data-action");b[d]&&(b[d](c),c.preventDefault())})},nextItem:function(){this.jumpTo(1)},prevItem:function(){this.jumpTo(-1)},jumpToItem:function(b){var c=a(b.target),d=c.index();this.jumpTo(d-this.current)},jumpTo:function(b){var c,d=this,e=this.$li.eq(this.current);this.current=this.getIndex(this.current+b),c=this.$li.eq(this.current),c.addClass("cbp-slider-item-next"),c.animate({opacity:1},function(){e.removeClass("cbp-slider-item-current"),c.removeClass("cbp-slider-item-next").addClass("cbp-slider-item-current").removeAttr("style");var b=a(".cbp-slider-bullet");b.removeClass("cbp-slider-bullet-current"),b.eq(d.current).addClass("cbp-slider-bullet-current")})},getIndex:function(a){return a%=this.$liLength,0>a&&(a=this.$liLength+a),a}},i={_main:function(b,c,d){var e=this;e.styleQueue=[],e.isAnimating=!1,e.defaultFilter="*",e.registeredEvents=[],a.isFunction(d)&&e._registerEvent("initFinish",d,!0),e._extendOptions(c),e.obj=b,e.$obj=a(b),e.width=e.$obj.width(),e.$obj.addClass("cbp cbp-loading"),e.$ul=e.$obj.children(),e.$ul.addClass("cbp-wrapper"),("lazyLoading"===e.options.displayType||"fadeIn"===e.options.displayType)&&e.$ul.css({opacity:0}),"fadeInToTop"===e.options.displayType&&e.$ul.css({opacity:0,marginTop:30}),e._browserInfo(),e._initCSSandEvents(),e._prepareBlocks(),"lazyLoading"===e.options.displayType||"sequentially"===e.options.displayType||"bottomToTop"===e.options.displayType||"fadeInToTop"===e.options.displayType?e._load():e._beforeDisplay()},_extendOptions:function(b){var c=this;b&&!b.hasOwnProperty("lightboxCounter")&&b.lightboxShowCounter===!1&&(b.lightboxCounter=""),b&&!b.hasOwnProperty("singlePageCounter")&&b.singlePageShowCounter===!1&&(b.singlePageCounter=""),c.options=a.extend({},a.fn.cubeportfolio.options,b)},_browserInfo:function(){var a,c,d=this,e=navigator.appVersion;d.browser=-1!==e.indexOf("MSIE 8.")?"ie8":-1!==e.indexOf("MSIE 9.")?"ie9":-1!==e.indexOf("MSIE 10.")?"ie10":b.ActiveXObject||"ActiveXObject"in b?"ie11":/android/gi.test(e)?"android":/iphone|ipad|ipod/gi.test(e)?"ios":/chrome/gi.test(e)?"chrome":"",d.browser&&d.$obj.addClass("cbp-"+d.browser),a=d._styleSupport("transition"),c=d._styleSupport("animation"),d.transition=d.transitionByFilter=a?"css":"animate","animate"!==d.transition&&(d.transitionEnd={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}[a],d.animationEnd={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"Animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"}[c],d.supportCSSTransform=d._styleSupport("transform"),d.supportCSSTransform&&d._cssHooks())},_styleSupport:function(a){var b,d,e,f=a.charAt(0).toUpperCase()+a.slice(1),g=["Moz","Webkit","O","ms"],h=c.createElement("div");if(a in h.style)d=a;else for(e=g.length-1;e>=0;e--)if(b=g[e]+f,b in h.style){d=b;break}return h=null,d},_cssHooks:function(){function b(b,e,f){var g,h,i,j,k,l,m=a(b),n=m.data("transformFn")||{},o={},p={};o[f]=e,a.extend(n,o);for(g in n)n.hasOwnProperty(g)&&(h=n[g],p[g]=c[g](h));i=p.translate||"",j=p.scale||"",l=p.skew||"",k=i+j+l,m.data("transformFn",n),b.style[d.supportCSSTransform]=k}var c,d=this;c=d._has3d()?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "},skew:function(a){return"skew("+a[0]+"deg, "+a[1]+"deg) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "},skew:function(a){return"skew("+a[0]+"deg, "+a[1]+"deg) "}},a.cssNumber.scale=!0,a.cssHooks.scale={set:function(a,c){"string"==typeof c&&(c=parseFloat(c)),b(a,c,"scale")},get:function(b){var c=a.data(b,"transformFn");return c&&c.scale?c.scale:1}},a.fx.step.scale=function(b){a.cssHooks.scale.set(b.elem,b.now+b.unit)},a.cssNumber.translate=!0,a.cssHooks.translate={set:function(a,c){b(a,c,"translate")},get:function(b){var c=a.data(b,"transformFn");return c&&c.translate?c.translate:[0,0]}},a.cssNumber.skew=!0,a.cssHooks.skew={set:function(a,c){b(a,c,"skew")},get:function(b){var c=a.data(b,"transformFn");return c&&c.skew?c.skew:[0,0]}}},_has3d:function(){var a,e,f=c.createElement("p"),g={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};c.body.insertBefore(f,null);for(a in g)g.hasOwnProperty(a)&&f.style[a]!==d&&(f.style[a]="translate3d(1px,1px,1px)",e=b.getComputedStyle(f).getPropertyValue(g[a]));return c.body.removeChild(f),e!==d&&e.length>0&&"none"!==e},_prepareBlocks:function(){var a=this;a.blocks=a.$ul.children(".cbp-item"),a.blocksAvailable=a.blocks,a.blocks.wrapInner('<div class="cbp-item-wrapper"></div>'),a.options.caption&&a._captionInit()},_captionInit:function(){var a=this;a.$obj.addClass("cbp-caption-"+a.options.caption),a["_"+a.options.caption+"Caption"]()},_captionDestroy:function(){var a=this;a.$obj.removeClass("cbp-caption-"+a.options.caption),a["_"+a.options.caption+"CaptionDestroy"]()},_noneCaption:function(){},_noneCaptionDestroy:function(){},_pushTopCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({bottom:"100%"},"fast"),d.animate({bottom:0},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({bottom:0},"fast"),d.animate({bottom:"-100%"},"fast")})},_pushTopCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_pushDownCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({bottom:"-100%"},"fast"),d.animate({bottom:0},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({bottom:0},"fast"),d.animate({bottom:"100%"},"fast")})},_pushDownCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_revealBottomCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap");c.animate({bottom:"100%"},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap");c.animate({bottom:0},"fast")})},_revealBottomCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"))},_revealTopCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap");c.animate({bottom:"-100%"},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap");c.animate({bottom:0},"fast")})},_revealTopCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"))},_overlayBottomRevealCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap").height();c.animate({bottom:d},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap");c.animate({bottom:0},"fast")})},_overlayBottomRevealCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"))},_overlayBottomPushCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap"),e=d.height();c.animate({bottom:e},"fast"),d.animate({bottom:0},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap"),e=d.height();c.animate({bottom:0},"fast"),d.animate({bottom:-e},"fast")})},_overlayBottomPushCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_overlayBottomCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){a(this).find(".cbp-caption-activeWrap").animate({bottom:0},"fast")}).on("mouseleave"+f,function(){var b=a(this).find(".cbp-caption-activeWrap");b.animate({bottom:-b.height()},"fast")})},_overlayBottomCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_moveRightCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){a(this).find(".cbp-caption-activeWrap").animate({left:0},"fast")}).on("mouseleave"+f,function(){var b=a(this).find(".cbp-caption-activeWrap");b.animate({left:-b.width()},"fast")})},_moveRightCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_revealLeftCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){a(this).find(".cbp-caption-activeWrap").animate({left:0},"fast")}).on("mouseleave"+f,function(){var b=a(this).find(".cbp-caption-activeWrap");b.animate({left:b.width()},"fast")})},_revealLeftCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_minimalCaption:function(){},_minimalCaptionDestroy:function(){},_fadeInCaption:function(){var b,c=this;("ie8"===c.browser||"ie9"===c.browser)&&(b="ie9"===c.browser?1:.8,a(".cbp-caption").on("mouseenter"+f,function(){a(this).find(".cbp-caption-activeWrap").animate({opacity:b},"fast")}).on("mouseleave"+f,function(){a(this).find(".cbp-caption-activeWrap").animate({opacity:0},"fast")}))},_fadeInCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_overlayRightAlongCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({left:d.width()/2},"fast"),d.animate({left:0},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({left:0},"fast"),d.animate({left:-d.width()},"fast")})},_overlayRightAlongCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_overlayBottomAlongCaption:function(){var b=this;("ie8"===b.browser||"ie9"===b.browser)&&a(".cbp-caption").on("mouseenter"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({bottom:d.height()/2},"fast"),d.animate({bottom:0},"fast")}).on("mouseleave"+f,function(){var b=a(this),c=b.find(".cbp-caption-defaultWrap"),d=b.find(".cbp-caption-activeWrap");c.animate({bottom:0},"fast"),d.animate({bottom:-d.height()},"fast")})},_overlayBottomAlongCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-defaultWrap").removeAttr("style"),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_zoomCaption:function(){var b,c=this;("ie8"===c.browser||"ie9"===c.browser)&&(b="ie9"===c.browser?1:.8,a(".cbp-caption").on("mouseenter"+f,function(){a(this).find(".cbp-caption-activeWrap").animate({opacity:b},"fast")}).on("mouseleave"+f,function(){a(this).find(".cbp-caption-activeWrap").animate({opacity:0},"fast")}))},_zoomCaptionDestroy:function(){var b=this,c=a(".cbp-caption");("ie8"===b.browser||"ie9"===b.browser)&&(c.off("mouseenter"+f+" mouseleave"+f),c.find(".cbp-caption-activeWrap").removeAttr("style"))},_initCSSandEvents:function(){var c,e,g,h,i=this;a(b).on("resize"+f,function(){c&&clearTimeout(c),c=setTimeout(function(){if("ie8"===i.browser){if(h=a(b).width(),g!==d&&g===h)return;g=h}i.$obj.removeClass("cbp-no-transition cbp-appendItems-loading"),"responsive"===i.options.gridAdjustment&&i._responsiveLayout(),i._layout(),i._processStyle(i.transition),i._resizeMainContainer(i.transition),i.lightbox&&i.lightbox.resizeImage(),i.singlePage&&i.singlePage.options.singlePageStickyNavigation&&(e=i.singlePage.wrap[0].clientWidth,e>0&&(i.singlePage.navigationWrap.width(e),i.singlePage.navigation.width(e))),i.singlePageInline&&i.singlePageInline.isOpen&&i.singlePageInline.close()
},50)})},_load:function(){var b,c,d,e=this,g=[],h=/url\((['"]?)(.*?)\1\)/g;if(d=e.$obj.children().css("backgroundImage"))for(var i;i=h.exec(d);)g.push({src:i[2]});e.$obj.find("*").each(function(){var b=a(this);if(b.is("img:uncached")&&g.push({src:b.attr("src"),element:b[0]}),d=b.css("backgroundImage"))for(var c;c=h.exec(d);)g.push({src:c[2],element:b[0]})});var j=g.length,k=0;0===j&&e._beforeDisplay();var l=function(){return k++,k===j?(e._beforeDisplay(),!1):void 0};for(b=0;j>b;b++)c=new Image,a(c).on("load"+f+" error"+f,l),c.src=g[b].src},_beforeDisplay:function(){var a=this;a.options.animationType&&(a["_"+a.options.animationType+"Init"]&&a["_"+a.options.animationType+"Init"](),a.$obj.addClass("cbp-animation-"+a.options.animationType),a.localColumnWidth=a.blocks.eq(0).outerWidth()+a.options.gapVertical,a._filterFromUrl(),""===a.options.defaultFilter||"*"===a.options.defaultFilter?a._display():a.filter(a.options.defaultFilter,function(){a._display()},a))},_filterFromUrl:function(){var a=this,b=/#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href);null!==b&&(a.options.defaultFilter=b[1])},_display:function(){var b,d,e=this,h=a(c.body);"responsive"===e.options.gridAdjustment&&e._responsiveLayout(),e._layout(),e._processStyle("css"),e._resizeMainContainer("css"),("lazyLoading"===e.options.displayType||"fadeIn"===e.options.displayType)&&e.$ul.animate({opacity:1},e.options.displayTypeSpeed),"fadeInToTop"===e.options.displayType&&e.$ul.animate({opacity:1,marginTop:0},e.options.displayTypeSpeed,function(){e.$ul.css({marginTop:0}),e.$ulClone.css({marginTop:0})}),"sequentially"===e.options.displayType&&(b=0,e.blocks.css("opacity",0),function i(){d=e.blocksAvailable.eq(b++),d.length&&(d.animate({opacity:1}),setTimeout(i,e.options.displayTypeSpeed))}()),"bottomToTop"===e.options.displayType&&(b=0,e.blocks.css({opacity:0,marginTop:80}),function j(){d=e.blocksAvailable.eq(b++),d.length?(d.animate({opacity:1,marginTop:0},400),setTimeout(j,e.options.displayTypeSpeed)):(e.blocks.css({marginTop:0}),e.blocksClone&&e.blocksClone.css({marginTop:0}))}()),setTimeout(function(){e.$obj.removeClass("cbp-loading"),e._triggerEvent("initFinish"),e.$obj.trigger("initComplete"+f),e.$obj.addClass("cbp-ready")},0),e.lightbox=null,e.$obj.find(e.options.lightboxDelegate)&&(e.lightbox=Object.create(g),e.lightbox.init(e,"lightbox"),e.$obj.on("click"+f,e.options.lightboxDelegate,function(b){b.preventDefault();var c=a(this);c.closest(a(".cbp-popup-singlePageInline")).length||e.lightbox.openLightbox(e.blocksAvailable.find(e.options.lightboxDelegate),this)})),1!=h.data("cbpLightboxIsOn")&&(h.on("click"+f,e.options.lightboxDelegate,function(b){b.preventDefault();var c=a(this),d=c.data("cbpLightbox");c.closest(a(".cbp-wrapper")).length||(d?e.lightbox.openLightbox(a(e.options.lightboxDelegate).filter("[data-cbp-lightbox="+d+"]"),this):e.lightbox.openLightbox(c,this))}),h.data("cbpLightboxIsOn",!0)),e.singlePage=null,e.$obj.find(e.options.singlePageDelegate)&&(e.singlePage=Object.create(g),e.singlePage.init(e,"singlePage"),e.$obj.on("click"+f,e.options.singlePageDelegate,function(a){a.preventDefault(),e.singlePage.openSinglePage(e.blocksAvailable.find(e.options.singlePageDelegate),this)})),1!=h.data("cbpSinglePageIsOn")&&(h.on("click"+f,e.options.singlePageDelegate,function(b){b.preventDefault();var c=a(this),d=c.data("cbpSinglepage");c.closest(a(".cbp")).length||(d?e.singlePage.openSinglePage(a(e.options.singlePageDelegate).filter("[data-cbp-singlePage="+d+"]"),this):e.singlePage.openSinglePage(c,this))}),h.data("cbpSinglePageIsOn",!0)),e.singlePageInline=null,e.$obj.find(e.options.singlePageInlineDelegate)&&(e.singlePageInline=Object.create(g),e.singlePageInline.init(e,"singlePageInline"),e.$obj.on("click"+f,e.options.singlePageInlineDelegate,function(a){a.preventDefault(),e.singlePageInline.openSinglePageInline(e.blocksAvailable,this)}))},_layout:function(){var b=this;b._layoutReset(),b.blocksAvailable.each(function(c,d){var e=a(d),f=Math.ceil(e.outerWidth()/b.localColumnWidth),g=0;if(f=Math.min(f,b.cols),b.singlePageInline&&c>=b.singlePageInline.matrice[0]&&c<=b.singlePageInline.matrice[1]&&(g=b.singlePageInline.height),1===f)b._placeBlocks(e,b.colVert,g);else{var h,i,j=b.cols+1-f,k=[];for(i=0;j>i;i++)h=b.colVert.slice(i,i+f),k[i]=Math.max.apply(Math,h);b._placeBlocks(e,k,g)}}),b.$obj.removeClass(function(a,b){return(b.match(/\bcbp-cols-\d+/gi)||[]).join(" ")}),b.$obj.addClass("cbp-cols-"+b.cols)},_layoutReset:function(){var a,b=this;for("alignCenter"===b.options.gridAdjustment?(b.$obj.attr("style",""),b.width=b.$obj.width(),b.cols=Math.max(Math.floor((b.width+b.options.gapVertical)/b.localColumnWidth),1),b.width=b.cols*b.localColumnWidth-b.options.gapVertical,b.$obj.css("max-width",b.width)):(b.width=b.$obj.width(),b.cols=Math.max(Math.floor((b.width+b.options.gapVertical)/b.localColumnWidth),1)),b.colVert=[],a=b.cols;a--;)b.colVert.push(0)},_responsiveLayout:function(){var b,c,d=this;d.columnWidthCache?d.localColumnWidth=d.columnWidthCache:d.columnWidthCache=d.localColumnWidth,d.width=d.$obj.outerWidth()+d.options.gapVertical,d.cols=Math.max(Math.round(d.width/d.localColumnWidth),1),c=d.width-d.options.gapVertical*d.cols,d.localColumnWidth=parseInt(c/d.cols,10)+d.options.gapVertical,b=d.localColumnWidth/d.columnWidthCache,d.blocks.each(function(){var c=a(this),e=a.data(this,"cbp-wxh");e||(e=a.data(this,"cbp-wxh",{width:c.outerWidth(),height:c.outerHeight()})),c.css("width",d.localColumnWidth-d.options.gapVertical),c.css("height",Math.floor(e.height*b))}),d.blocksClone&&d.blocksClone.each(function(){var c=a(this),e=a.data(this,"cbp-wxh");e||(e=a.data(this,"cbp-wxh",{width:c.outerWidth(),height:c.outerHeight()})),c.css("width",d.localColumnWidth-d.options.gapVertical),c.css("height",Math.floor(e.height*b))})},_resizeMainContainer:function(a,b){var c=this;b=b||0,c.height=Math.max.apply(Math,c.colVert)+b,c.$obj[a]({height:c.height-c.options.gapHorizontal},400)},_processStyle:function(a){for(var b=this,c=b.styleQueue.length-1;c>=0;c--)b.styleQueue[c].$el[a](b.styleQueue[c].style);b.styleQueue=[]},_placeBlocks:function(a,b,c){var d,e,f,g,h,i,j=this,k=Math.min.apply(Math,b),l=0;for(h=0,i=b.length;i>h;h++)if(b[h]===k){l=h;break}for(j.singlePageInline&&0!==c&&(j.singlePageInline.top=k),k+=c,d=Math.round(j.localColumnWidth*l),e=Math.round(k),j.styleQueue.push({$el:a,style:j.supportCSSTransform?j._withCSS3(d,e):j._withCSS2(d,e)}),f=k+a.outerHeight()+j.options.gapHorizontal,g=j.cols+1-i,h=0;g>h;h++)j.colVert[l+h]=f},_withCSS2:function(a,b){return{left:a,top:b}},_withCSS3:function(a,b){return{translate:[a,b]}},_duplicateContent:function(a){var b=this;b.$ulClone=b.$ul.clone(),b.blocksClone=b.$ulClone.children(),b.$ulClone.css(a),b.ulHidden="clone",b.$obj.append(b.$ulClone)},_fadeOutFilter:function(a,b,c){var d=this;"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),d.blocksAvailable=d.blocks.filter(c),a.length&&d.styleQueue.push({$el:a,style:{opacity:0}}),b.length&&d.styleQueue.push({$el:b,style:{opacity:1}}),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),setTimeout(function(){d._filterFinish()},400)},_quicksandFilter:function(a,b,c){var d=this;"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),d.blocksAvailable=d.blocks.filter(c),a.length&&d.styleQueue.push({$el:a,style:{scale:.01,opacity:0}}),b.length&&d.styleQueue.push({$el:b,style:{scale:1,opacity:1}}),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),setTimeout(function(){d._filterFinish()},400)},_flipOutFilter:function(a,b,c){var d=this;"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),d.blocksAvailable=d.blocks.filter(c),a.length&&("ie8"===d.browser||"ie9"===d.browser?d.styleQueue.push({$el:a,style:{opacity:0}}):a.find(".cbp-item-wrapper").removeClass("cbp-animation-flipOut-in").addClass("cbp-animation-flipOut-out")),b.length&&("ie8"===d.browser||"ie9"===d.browser?d.styleQueue.push({$el:b,style:{opacity:1}}):b.find(".cbp-item-wrapper").removeClass("cbp-animation-flipOut-out").addClass("cbp-animation-flipOut-in")),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),setTimeout(function(){d._filterFinish()},400)},_flipBottomFilter:function(a,b,c){var d=this;"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),d.blocksAvailable=d.blocks.filter(c),a.length&&("ie8"===d.browser||"ie9"===d.browser?d.styleQueue.push({$el:a,style:{opacity:0}}):a.find(".cbp-item-wrapper").removeClass("cbp-animation-flipBottom-in").addClass("cbp-animation-flipBottom-out")),b.length&&("ie8"===d.browser||"ie9"===d.browser?d.styleQueue.push({$el:b,style:{opacity:1}}):b.find(".cbp-item-wrapper").removeClass("cbp-animation-flipBottom-out").addClass("cbp-animation-flipBottom-in")),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),setTimeout(function(){d._filterFinish()},400)},_scaleSidesFilter:function(a,b,c){var d=this;"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),d.blocksAvailable=d.blocks.filter(c),a.length&&("ie8"===d.browser||"ie9"===d.browser?d.styleQueue.push({$el:a,style:{opacity:0}}):a.find(".cbp-item-wrapper").removeClass("cbp-animation-scaleSides-in").addClass("cbp-animation-scaleSides-out")),b.length&&("ie8"===d.browser||"ie9"===d.browser?d.styleQueue.push({$el:b,style:{opacity:1}}):b.find(".cbp-item-wrapper").removeClass("cbp-animation-scaleSides-out").addClass("cbp-animation-scaleSides-in")),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),setTimeout(function(){d._filterFinish()},400)},_skewFilter:function(a,b,c){var d=this;"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),d.blocksAvailable=d.blocks.filter(c),a.length&&d.styleQueue.push({$el:a,style:{skew:[50,0],scale:.01,opacity:0}}),b.length&&d.styleQueue.push({$el:b,style:{skew:[0,0],scale:1,opacity:1}}),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),setTimeout(function(){d._filterFinish()},400)},_sequentiallyInit:function(){this.transitionByFilter="css"},_sequentiallyFilter:function(a,b,c){var d=this,e=d.blocksAvailable;d.blocksAvailable=d.blocks.filter(c),d.$obj.addClass("cbp-no-transition"),"ie8"===d.browser||"ie9"===d.browser?e[d.transition]({top:"-=30",opacity:0},300):e[d.transition]({top:-30,opacity:0}),setTimeout(function(){"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),a.length&&a.css({display:"none"}),b.length&&b.css("display","block"),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),("ie8"===d.browser||"ie9"===d.browser)&&d.blocksAvailable.css("top","-=30");var e,f=0;!function g(){e=d.blocksAvailable.eq(f++),e.length?(e[d.transition]("ie8"===d.browser||"ie9"===d.browser?{top:"+=30",opacity:1}:{top:0,opacity:1}),setTimeout(g,130)):setTimeout(function(){d._filterFinish()},600)}()},600)},_fadeOutTopInit:function(){this.transitionByFilter="css"},_fadeOutTopFilter:function(a,b,c){var d=this;d.blocksAvailable=d.blocks.filter(c),"ie8"===d.browser||"ie9"===d.browser?d.$ul[d.transition]({top:-30,opacity:0},350):d.$ul[d.transition]({top:-30,opacity:0}),d.$obj.addClass("cbp-no-transition"),setTimeout(function(){"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),a.length&&a.css("opacity",0),b.length&&b.css("opacity",1),d._layout(),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition),"ie8"===d.browser||"ie9"===d.browser?d.$ul[d.transition]({top:0,opacity:1},350):d.$ul[d.transition]({top:0,opacity:1}),setTimeout(function(){d._filterFinish()},400)},400)},_boxShadowInit:function(){var a=this;"ie8"===a.browser||"ie9"===a.browser?a.options.animationType="fadeOut":a.blocksAvailable.append('<div class="cbp-animation-boxShadowMask"></div>')},_boxShadowFilter:function(a,b,c){var d=this;"*"!==c&&(b=b.filter(c),a=d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden");var e=d.blocks.find(".cbp-animation-boxShadowMask");e.addClass("cbp-animation-boxShadowShow"),e.removeClass("cbp-animation-boxShadowActive cbp-animation-boxShadowInactive"),d.blocksAvailable=d.blocks.filter(c);var f={};a.length&&(a.find(".cbp-animation-boxShadowMask").addClass("cbp-animation-boxShadowActive"),d.styleQueue.push({$el:a,style:{opacity:0}}),f=a.last()),b.length&&(b.find(".cbp-animation-boxShadowMask").addClass("cbp-animation-boxShadowInactive"),d.styleQueue.push({$el:b,style:{opacity:1}}),f=b.last()),d._layout(),f.length?f.one(d.transitionEnd,function(){e.removeClass("cbp-animation-boxShadowShow"),d._filterFinish()}):(e.removeClass("cbp-animation-boxShadowShow"),d._filterFinish()),d._processStyle(d.transitionByFilter),d._resizeMainContainer(d.transition)},_bounceLeftInit:function(){var a=this;a._duplicateContent({left:"-100%",opacity:0}),a.transitionByFilter="css",a.$ul.addClass("cbp-wrapper-front")},_bounceLeftFilter:function(a,b,c){var d,e,f,g=this;g.$obj.addClass("cbp-no-transition"),"clone"===g.ulHidden?(g.ulHidden="first",d=g.$ulClone,f=g.$ul,e=g.blocksClone):(g.ulHidden="clone",d=g.$ul,f=g.$ulClone,e=g.blocks),b=e.filter(".cbp-item-hidden"),"*"!==c&&(b=b.filter(c),e.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),g.blocksAvailable=e.filter(c),g._layout(),f[g.transition]({left:"-100%",opacity:0}).removeClass("cbp-wrapper-front").addClass("cbp-wrapper-back"),d[g.transition]({left:0,opacity:1}).addClass("cbp-wrapper-front").removeClass("cbp-wrapper-back"),g._processStyle(g.transitionByFilter),g._resizeMainContainer(g.transition),setTimeout(function(){g._filterFinish()},400)},_bounceTopInit:function(){var a=this;a._duplicateContent({top:"-100%",opacity:0}),a.transitionByFilter="css",a.$ul.addClass("cbp-wrapper-front")},_bounceTopFilter:function(a,b,c){var d,e,f,g=this;g.$obj.addClass("cbp-no-transition"),"clone"===g.ulHidden?(g.ulHidden="first",d=g.$ulClone,f=g.$ul,e=g.blocksClone):(g.ulHidden="clone",d=g.$ul,f=g.$ulClone,e=g.blocks),b=e.filter(".cbp-item-hidden"),"*"!==c&&(b=b.filter(c),e.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),g.blocksAvailable=e.filter(c),g._layout(),f[g.transition]({top:"-100%",opacity:0}).removeClass("cbp-wrapper-front").addClass("cbp-wrapper-back"),d[g.transition]({top:0,opacity:1}).addClass("cbp-wrapper-front").removeClass("cbp-wrapper-back"),g._processStyle(g.transitionByFilter),g._resizeMainContainer(g.transition),setTimeout(function(){g._filterFinish()},400)},_bounceBottomInit:function(){var a=this;a._duplicateContent({top:"100%",opacity:0}),a.transitionByFilter="css"},_bounceBottomFilter:function(a,b,c){var d,e,f,g=this;g.$obj.addClass("cbp-no-transition"),"clone"===g.ulHidden?(g.ulHidden="first",d=g.$ulClone,f=g.$ul,e=g.blocksClone):(g.ulHidden="clone",d=g.$ul,f=g.$ulClone,e=g.blocks),b=e.filter(".cbp-item-hidden"),"*"!==c&&(b=b.filter(c),e.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")),b.removeClass("cbp-item-hidden"),g.blocksAvailable=e.filter(c),g._layout(),f[g.transition]({top:"100%",opacity:0}).removeClass("cbp-wrapper-front").addClass("cbp-wrapper-back"),d[g.transition]({top:0,opacity:1}).addClass("cbp-wrapper-front").removeClass("cbp-wrapper-back"),g._processStyle(g.transitionByFilter),g._resizeMainContainer(g.transition),setTimeout(function(){g._filterFinish()},400)},_moveLeftInit:function(){var a=this;a._duplicateContent({left:"100%",opacity:0}),a.$ulClone.addClass("no-trans"),a.transitionByFilter="css"},_moveLeftFilter:function(a,b,c){var d,e,f,g=this;"*"!==c&&(b=b.filter(c)),b.removeClass("cbp-item-hidden"),g.$obj.addClass("cbp-no-transition"),"clone"===g.ulHidden?(g.ulHidden="first",d=g.$ulClone,f=g.$ul,e=g.blocksClone):(g.ulHidden="clone",d=g.$ul,f=g.$ulClone,e=g.blocks),e.css("opacity",0),e.addClass("cbp-item-hidden"),g.blocksAvailable=e.filter(c),g.blocksAvailable.css("opacity",1),g.blocksAvailable.removeClass("cbp-item-hidden"),g._layout(),f[g.transition]({left:"-100%",opacity:0}),d.removeClass("no-trans"),"css"===g.transition?(d[g.transition]({left:0,opacity:1}),f.one(g.transitionEnd,function(){f.addClass("no-trans").css({left:"100%",opacity:0}),g._filterFinish()})):d[g.transition]({left:0,opacity:1},function(){f.addClass("no-trans").css({left:"100%",opacity:0}),g._filterFinish()}),g._processStyle(g.transitionByFilter),g._resizeMainContainer(g.transition)},_slideLeftInit:function(){var a=this;a._duplicateContent({}),a.$ul.addClass("cbp-wrapper-front"),a.$ulClone.css("opacity",0),a.transitionByFilter="css"},_slideLeftFilter:function(a,b,c){var d,e,f,g,h=this;h.blocks.show(),h.blocksClone.show(),"*"!==c&&(b=b.filter(c)),b.removeClass("cbp-item-hidden"),h.$obj.addClass("cbp-no-transition"),h.blocks.find(".cbp-item-wrapper").removeClass("cbp-animation-slideLeft-out cbp-animation-slideLeft-in"),h.blocksClone.find(".cbp-item-wrapper").removeClass("cbp-animation-slideLeft-out cbp-animation-slideLeft-in"),h.$ul.css({opacity:1}),h.$ulClone.css({opacity:1}),"clone"===h.ulHidden?(h.ulHidden="first",e=h.blocks,f=h.blocksClone,d=h.blocksClone,h.$ul.removeClass("cbp-wrapper-front"),h.$ulClone.addClass("cbp-wrapper-front")):(h.ulHidden="clone",e=h.blocksClone,f=h.blocks,d=h.blocks,h.$ul.addClass("cbp-wrapper-front"),h.$ulClone.removeClass("cbp-wrapper-front")),d.css("opacity",0),d.addClass("cbp-item-hidden"),h.blocksAvailable=d.filter(c),h.blocksAvailable.css({opacity:1}),h.blocksAvailable.removeClass("cbp-item-hidden"),h._layout(),"css"===h.transition?(e.find(".cbp-item-wrapper").addClass("cbp-animation-slideLeft-out"),f.find(".cbp-item-wrapper").addClass("cbp-animation-slideLeft-in"),g=e.find(".cbp-item-wrapper").last(),g.length?g.one(h.animationEnd,function(){h._filterFinish()}):h._filterFinish()):(e.find(".cbp-item-wrapper").animate({left:"-100%"},400,function(){h._filterFinish()}),f.find(".cbp-item-wrapper").css("left","100%"),f.find(".cbp-item-wrapper").animate({left:0},400)),h._processStyle(h.transitionByFilter),h._resizeMainContainer("animate")},_slideDelayInit:function(){this._wrapperFilterInit()},_slideDelayFilter:function(a,b,c){this._wrapperFilter(a,b,c,"slideDelay",!0)},_3dflipInit:function(){this._wrapperFilterInit()},_3dflipFilter:function(a,b,c){this._wrapperFilter(a,b,c,"3dflip",!0)},_rotateSidesInit:function(){this._wrapperFilterInit()},_rotateSidesFilter:function(a,b,c){this._wrapperFilter(a,b,c,"rotateSides",!0)},_flipOutDelayInit:function(){this._wrapperFilterInit()},_flipOutDelayFilter:function(a,b,c){this._wrapperFilter(a,b,c,"flipOutDelay",!1)},_foldLeftInit:function(){this._wrapperFilterInit()},_foldLeftFilter:function(a,b,c){this._wrapperFilter(a,b,c,"foldLeft",!0)},_unfoldInit:function(){this._wrapperFilterInit()},_unfoldFilter:function(a,b,c){this._wrapperFilter(a,b,c,"unfold",!0)},_scaleDownInit:function(){this._wrapperFilterInit()},_scaleDownFilter:function(a,b,c){this._wrapperFilter(a,b,c,"scaleDown",!0)},_frontRowInit:function(){this._wrapperFilterInit()},_frontRowFilter:function(a,b,c){this._wrapperFilter(a,b,c,"frontRow",!0)},_rotateRoomInit:function(){this._wrapperFilterInit()},_rotateRoomFilter:function(a,b,c){this._wrapperFilter(a,b,c,"rotateRoom",!0)},_wrapperFilterInit:function(){var a=this;a._duplicateContent({}),a.$ul.addClass("cbp-wrapper-front"),a.$ulClone.css("opacity",0),a.transitionByFilter="css"},_wrapperFilter:function(b,c,d,e,f){var g,h,i,j,k=this;if(k.blocks.show(),k.blocksClone.show(),"*"!==d&&(c=c.filter(d)),c.removeClass("cbp-item-hidden"),k.$obj.addClass("cbp-no-transition"),k.blocks.find(".cbp-item-wrapper").removeClass("cbp-animation-"+e+"-out cbp-animation-"+e+"-in cbp-animation-"+e+"-fadeOut").css("style",""),k.blocksClone.find(".cbp-item-wrapper").removeClass("cbp-animation-"+e+"-out cbp-animation-"+e+"-in cbp-animation-"+e+"-fadeOut").css("style",""),k.$ul.css({opacity:1}),k.$ulClone.css({opacity:1}),"clone"===k.ulHidden?(k.ulHidden="first",g=k.blocksClone,k.$ul.removeClass("cbp-wrapper-front"),k.$ulClone.addClass("cbp-wrapper-front")):(k.ulHidden="clone",g=k.blocks,k.$ul.addClass("cbp-wrapper-front"),k.$ulClone.removeClass("cbp-wrapper-front")),h=k.blocksAvailable,g.css("opacity",0),g.addClass("cbp-item-hidden"),k.blocksAvailable=g.filter(d),k.blocksAvailable.css({opacity:1}),k.blocksAvailable.removeClass("cbp-item-hidden"),i=k.blocksAvailable,k._layout(),"css"===k.transition){var l=0,m=0;i.each(function(b,c){a(c).find(".cbp-item-wrapper").addClass("cbp-animation-"+e+"-in").css("animation-delay",m/20+"s"),m++}),h.each(function(b,c){l>=m&&f?a(c).find(".cbp-item-wrapper").addClass("cbp-animation-"+e+"-fadeOut"):a(c).find(".cbp-item-wrapper").addClass("cbp-animation-"+e+"-out").css("animation-delay",l/20+"s"),l++}),j=h.find(".cbp-item-wrapper").first(),j.length?j.one(k.animationEnd,function(){k._filterFinish(),("ie10"===k.browser||"ie11"===k.browser)&&setTimeout(function(){a(".cbp-item-wrapper").removeClass("cbp-animation-"+e+"-in")},300)}):(k._filterFinish(),("ie10"===k.browser||"ie11"===k.browser)&&setTimeout(function(){a(".cbp-item-wrapper").removeClass("cbp-animation-"+e+"-in")},300))}else h.find(".cbp-item-wrapper").animate({left:"-100%"},400,function(){k._filterFinish()}),i.find(".cbp-item-wrapper").css("left","100%"),i.find(".cbp-item-wrapper").animate({left:0},400);k._processStyle(k.transitionByFilter),k._resizeMainContainer("animate")},_filterFinish:function(){var a=this;a.isAnimating=!1,a._triggerEvent("filterFinish"),a.$obj.trigger("filterComplete"+f)},_registerEvent:function(a,b,c){var d=this;d.registeredEvents[a]||(d.registeredEvents[a]=[],d.registeredEvents.push(a)),d.registeredEvents[a].push({func:b,oneTime:c||!1})},_triggerEvent:function(a){var b=this;if(b.registeredEvents[a])for(var c=b.registeredEvents[a].length-1;c>=0;c--)b.registeredEvents[a][c].func.call(b),b.registeredEvents[a][c].oneTime&&b.registeredEvents[a].splice(c,1)},init:function(b,c){var d=a.data(this,"cubeportfolio");if(d)throw new Error("cubeportfolio is already initialized. Please destroy it before initialize again!");d=a.data(this,"cubeportfolio",Object.create(i)),d._main(this,b,c)},destroy:function(c){var d=a.data(this,"cubeportfolio");if(!d)throw new Error("cubeportfolio is not initialized. Please initialize before calling destroy method!");a.isFunction(c)&&d._registerEvent("destroyFinish",c,!0),a.removeData(this,"cubeportfolio"),a.each(d.blocks,function(){a.removeData(this,"transformFn"),a.removeData(this,"cbp-wxh")}),d.$obj.removeClass("cbp cbp-loading cbp-ready cbp-no-transition"),d.$ul.removeClass("cbp-wrapper-front cbp-wrapper-back cbp-wrapper no-trans").removeAttr("style"),d.$obj.removeAttr("style"),d.$ulClone&&d.$ulClone.remove(),d.browser&&d.$obj.removeClass("cbp-"+d.browser),a(b).off("resize"+f),d.lightbox&&d.lightbox.destroy(),d.singlePage&&d.singlePage.destroy(),d.singlePageInline&&d.singlePageInline.destroy(),d.blocks.removeClass("cbp-item-hidden").removeAttr("style"),d.blocks.find(".cbp-item-wrapper").children().unwrap(),d.options.caption&&d._captionDestroy(),d.options.animationType&&("boxShadow"===d.options.animationType&&a(".cbp-animation-boxShadowMask").remove(),d.$obj.removeClass("cbp-animation-"+d.options.animationType)),d._triggerEvent("destroyFinish")},filter:function(b,c,d){var e,f,g,h=d||a.data(this,"cubeportfolio");if(!h)throw new Error("cubeportfolio is not initialized. Please initialize before calling filter method!");b="*"===b||""===b?"*":b,h.isAnimating||h.defaultFilter===b||("ie8"===h.browser||"ie9"===h.browser?h.$obj.removeClass("cbp-no-transition cbp-appendItems-loading"):(h.obj.classList.remove("cbp-no-transition"),h.obj.classList.remove("cbp-appendItems-loading")),h.defaultFilter=b,h.isAnimating=!0,a.isFunction(c)&&h._registerEvent("filterFinish",c,!0),e=h.blocks.filter(".cbp-item-hidden"),f=[],h.singlePageInline&&h.singlePageInline.isOpen?h.singlePageInline.close("promise",{callback:function(){h["_"+h.options.animationType+"Filter"](f,e,b)}}):h["_"+h.options.animationType+"Filter"](f,e,b),h.options.filterDeeplinking&&(g=location.href.replace(/#cbpf=(.*?)([#|?&]|$)/gi,""),location.href=g+"#cbpf="+b,h.singlePage&&h.singlePage.url&&(h.singlePage.url=location.href)))},showCounter:function(b,c){var d=a.data(this,"cubeportfolio");if(!d)throw new Error("cubeportfolio is not initialized. Please initialize before calling showCounter method!");d.elems=b,a.each(b,function(){var b,c=a(this),e=c.data("filter");e="*"===e||""===e?"*":e,b=d.blocks.filter(e).length,c.find(".cbp-filter-counter").text(b)}),a.isFunction(c)&&c.call(d)},appendItems:function(b,c){var d=this,e=a.data(d,"cubeportfolio");if(!e)throw new Error("cubeportfolio is not initialized. Please initialize before calling appendItems method!");e.singlePageInline&&e.singlePageInline.isOpen?e.singlePageInline.close("promise",{callback:function(){i._addItems.call(d,b,c)}}):i._addItems.call(d,b,c)},_addItems:function(b,c){var d,e,f,g,h=a.data(this,"cubeportfolio");a.isFunction(c)&&h._registerEvent("appendItemsFinish",c,!0),h.$obj.addClass("cbp-no-transition cbp-appendItems-loading"),b=a(b).css("opacity",0),b.filter(".cbp-item").wrapInner('<div class="cbp-item-wrapper"></div>'),g=b.filter(h.defaultFilter),h.ulHidden?"first"===h.ulHidden?(b.appendTo(h.$ulClone),h.blocksClone=h.$ulClone.children(),e=h.blocksClone,f=b.clone(),f.appendTo(h.$ul),h.blocks=h.$ul.children()):(b.appendTo(h.$ul),h.blocks=h.$ul.children(),e=h.blocks,f=b.clone(),f.appendTo(h.$ulClone),h.blocksClone=h.$ulClone.children()):(b.appendTo(h.$ul),h.blocks=h.$ul.children(),e=h.blocks),h.options.caption&&(h._captionDestroy(),h._captionInit()),d=h.defaultFilter,h.blocksAvailable=e.filter(d),e.not(".cbp-item-hidden").not(d).addClass("cbp-item-hidden"),"responsive"===h.options.gridAdjustment&&h._responsiveLayout(),h._layout(),h._processStyle(h.transitionByFilter),h._resizeMainContainer("animate");var j=b.filter(".cbp-item-hidden");switch(h.options.animationType){case"flipOut":j.find(".cbp-item-wrapper").addClass("cbp-animation-flipOut-out");break;case"scaleSides":j.find(".cbp-item-wrapper").addClass("cbp-animation-scaleSides-out");break;case"flipBottom":j.find(".cbp-item-wrapper").addClass("cbp-animation-flipBottom-out")}g.animate({opacity:1},800,function(){switch(h.options.animationType){case"bounceLeft":case"bounceTop":case"bounceBottom":h.blocks.css("opacity",1),h.blocksClone.css("opacity",1);break;case"flipOut":case"scaleSides":case"flipBottom":j.css("opacity",1)}}),h.elems&&i.showCounter.call(this,h.elems),setTimeout(function(){h._triggerEvent("appendItemsFinish")},900)},_initSlider:function(){var a=this,b=Object.create(h);b._init(null,a)}};a.fn.cubeportfolio=function(a){var b=arguments;return this.each(function(){if(i[a])return i[a].apply(this,Array.prototype.slice.call(b,1));if("object"!=typeof a&&a)throw new Error("Method "+a+" does not exist on jQuery.cubeportfolio.js");return i.init.apply(this,b)})},a.fn.cubeportfolio.options={defaultFilter:"*",filterDeeplinking:!1,animationType:"fadeOut",gridAdjustment:"default",gapHorizontal:10,gapVertical:10,caption:"pushTop",displayType:"default",displayTypeSpeed:400,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageAnimation:"left",singlePageCallback:function(){},singlePageInlineDelegate:".cbp-singlePageInline",singlePageInlinePosition:"top",singlePageInlineInFocus:!0,singlePageInlineCallback:function(){}}}(jQuery,window,document);

jQuery(document).ready(function($) {
    
    $(window).load(function(){
        $('.text-rotator').each(function(){
            
            var text_rotator_content = $(this).html();
            $(this).empty();
            $(this).html('<div class="rotator-wrap"></div>')
            this_item = $(this).children('.rotator-wrap');
            var text_rotator_content_split = text_rotator_content.split(',');
            var item_size = text_rotator_content_split.length;
            nova_text_rotator(text_rotator_content_split, this_item, item_size);
        });
        
        function nova_text_rotator(item_array, this_item, item_size, my_index){
            
            if(my_index == undefined)
                var my_index = -1;

            my_index++

            if(my_index < item_size)
            {

                this_item.fadeOut(800, function(){
                    this_item.html('<span>'+ item_array[my_index] +'</span>');
                    this_item.fadeIn(800);
                    
                });
            }
            else
            {
                my_index = -1;
            }

            setTimeout(function() {
                 nova_text_rotator(item_array, this_item, item_size, my_index);
            }, 2500);
        }
    });  
});    








    

