!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/codebase/",n(n.s=7)}([function(t,e,n){"use strict";var r=function(){function t(){this.webixJet=!0,this._id=webix.uid(),this._events=[],this._subs={},this._data={}}return t.prototype.getRoot=function(){return this._root},t.prototype.destructor=function(){for(var t=this._events,e=t.length-1;e>=0;e--)t[e].obj.detachEvent(t[e].id);for(var n in this._subs){var r=this._subs[n].view;r&&r.destructor()}this._events=this._container=this.app=this._parent=null},t.prototype.setParam=function(t,e,n){var r;this._data[t]!==e&&(this._data[t]=e,this.app.callEvent("app:paramchange",[this,t,e,n])&&n&&this.show(((r={})[t]=e,r)))},t.prototype.getParam=function(t,e){var n=this._data[t];if(void 0!==n||!e)return n;var r=this.getParentView();return r?r.getParam(t,e):void 0},t.prototype.getUrl=function(){return this._url},t.prototype.render=function(t,e,n){var r=this;this._parent=n,e&&(this._index=e[0].index),this._init_url_data(e);var i="string"==typeof(t=t||document.body)?webix.toNode(t):t;return this._container!==i?(this._container=i,this._render(e).then(function(){return r.getRoot()})):this._urlChange(e).then(function(){return r.getRoot()})},t.prototype.getIndex=function(){return this._index},t.prototype.getId=function(){return this._id},t.prototype.getParentView=function(){return this._parent},t.prototype.$$=function(t){if("string"==typeof t){var e=this.getRoot();return e.queryView(function(n){return(n.config.id===t||n.config.localId===t)&&n.$scope===e.$scope},"self")}return t},t.prototype.on=function(t,e,n){var r=t.attachEvent(e,n);return this._events.push({obj:t,id:r}),r},t.prototype.contains=function(t){for(var e in this._subs){var n=this._subs[e].view;if(n===t||n.contains(t))return!0}return!1},t.prototype.getSubView=function(t){var e=this.getSubViewInfo(t);if(e)return e.subview.view},t.prototype.getSubViewInfo=function(t){var e=this._subs[t||"default"];return e?{subview:e,parent:this}:this._parent?this._parent.getSubViewInfo(t):null},t.prototype.getName=function(){return this._name},t.prototype._init_url_data=function(t){t&&t[0]&&(this._data={},webix.extend(this._data,t[0].params,!0)),this._url=t},t}();function i(t){"/"===t[0]&&(t=t.substr(1));for(var e=t.split("/"),n=[],r=0;r<e.length;r++){var i=e[r],o={},s=i.indexOf(":");if(-1===s&&(s=i.indexOf("?")),-1!==s)for(var a=0,u=i.substr(s+1).split(/[\:\?\&]/g);a<u.length;a++){var c=u[a].split("=");o[c[0]]=decodeURIComponent(c[1])}n[r]={page:s>-1?i.substr(0,s):i,params:o,index:r+1}}return n}function o(t){for(var e=[],n=0,r=t;n<r.length;n++){var i=r[n];e.push("/"+i.page);var o=s(i.params);o&&e.push("?"+o)}return e.join("")}function s(t){var e=[];for(var n in t)e.length&&e.push("&"),e.push(n+"="+encodeURIComponent(t[n]));return e.join("")}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(t){function e(e,n){var r=t.call(this)||this;return r.app=e,r._name=n,r._children=[],r}return u(e,t),e.prototype.ui=function(t,e){var n=(e=e||{}).container||t.container,i=this.app.createView(t);return this._children.push(i),i.render(n,null,this),"object"!==(void 0===t?"undefined":a(t))||t instanceof r?i:i.getRoot()},e.prototype.show=function(t,e){var n=this;if(e=e||{},"string"==typeof t){if("/"===t.substr(0,1))return this.app.show(t);if(0===t.indexOf("../")){var r=this.getParentView();return void(r?r.show("./"+t.substr(3),e):this.app.show("/"+t.substr(3)))}0===t.indexOf("./")&&(t=t.substr(2));var s=this.getSubViewInfo(e.target);if(!s)return this.app.show("/"+t);if(s.parent!==this)return s.parent.show(t,e)}var u=i(this.app.getRouter().get());if("object"===(void 0===t?"undefined":a(t)))if(webix.isArray(t)){var c=this._index+t[0];u[c]||(u[c]={}),u[c].page=t[1],t=""}else{var p=[];for(var f in t)p.push(encodeURIComponent(f)+"="+encodeURIComponent(t[f]));t="?"+p.join("&")}if("string"==typeof t){if("?"===t.substr(0,1)){var h=t.indexOf("/"),l=t;h>-1&&(l=t.substr(0,h));var d=i(l);webix.extend(u[this._index-1].params,d[0].params,!0),t=h>-1?t.substr(h+1):""}var v=""===t?u.slice(this._index):i(t),y=null;if(this._index){y=u.slice(0,this._index).concat(v);for(var g=0;g<y.length;g++)y[g].index=g+1;var _=o(y);return this.app.canNavigate(_,this).then(function(t){return null!==t?_!==t?n.app.show(t):n._finishShow(y,t):null})}return this._finishShow(v,"")}},e.prototype.init=function(t,e){},e.prototype.ready=function(t,e){},e.prototype.config=function(){this.app.webix.message("View:Config is not implemented")},e.prototype.urlChange=function(t,e){},e.prototype.destroy=function(){},e.prototype.destructor=function(){this.destroy(),this._destroyKids(),this.app=this._parentFrame=null,this._root.destructor(),t.prototype.destructor.call(this)},e.prototype.use=function(t,e){t(this.app,this,e)},e.prototype.refresh=function(){var t=this;this._destroyKids();var e=[];this._index>1&&(e=i(this.app.getRouter().get()).slice(this._index-1)),this._render(e).then(function(){t._parentFrame.id=t.getRoot().config.id})},e.prototype._render=function(t){var e=this,n=this.config();return n.then?n.then(function(n){return e._render_final(n,t)}):this._render_final(n,t)},e.prototype._render_final=function(t,e){var n,r=this,i=this._container;if(i&&i.$destructed)return Promise.reject("Container destroyed");var o={ui:{}};this.app.copyConfig(t,o.ui,this._subs),this.app.callEvent("app:render",[this,e,o]),o.ui.$scope=this;try{if(i&&i.getParentView){var s=i.getParentView();s&&"multiview"===s.name&&!o.ui.id&&(o.ui.id=i.config.id)}this._root=this.app.webix.ui(o.ui,this._container),this._root.getParentView()&&(this._container=this._root),this._init(this._root,e),n=this._urlChange(e).then(function(){return r.ready(r._root,e)})}catch(t){n=Promise.reject(t)}return n.catch(function(t){return r._initError(r,t)})},e.prototype._init=function(t,e){return this.init(t,e)},e.prototype._urlChange=function(t){var e=this;this.app.callEvent("app:urlchange",[this,t,this._index]);var n=[];for(var r in this._subs){var i=this._renderFrame(r,this._subs[r],t);i&&n.push(i)}return Promise.all(n).then(function(){e.urlChange(e._root,t)})},e.prototype._renderFrame=function(t,e,n){if(e.url){if("string"==typeof e.url){var r=i(e.url);return r.map(function(t){t.index=0}),this._createSubView(e,r)}var o=e.view;return"function"!=typeof e.url||o instanceof e.url||(o=new e.url(this.app,"")),o||(o=e.url),this._renderSubView(e,o,n)}if("default"===t&&n&&n.length>1){var s=n.slice(1);return this._createSubView(e,s)}},e.prototype._initError=function(t,e){return this.app.error("app:error:initview",[e,t]),!0},e.prototype._createSubView=function(t,e){var n=this;return this.app.createFromURL(e,t.view).then(function(r){return n._renderSubView(t,r,e)})},e.prototype._renderSubView=function(t,n,r){var i=this.app.webix.$$(t.id);return n.render(i,r,this).then(function(r){return t.view&&t.view!==n&&t.view.destructor(),t.view=n,t.id=r.config.id,n instanceof e&&(n._parentFrame=t),r})},e.prototype._finishShow=function(t,e){var n;return this._index?(n=this._renderPartial(t.slice(this._index-1)),this.app.getRouter().set(e,{silent:!0}),this.app.callEvent("app:route",[t])):(t.map(function(t){return t.index=0}),n=this._renderPartial([null].concat(t))),n},e.prototype._renderPartial=function(t){return this._init_url_data(t),this._urlChange(t)},e.prototype._destroyKids=function(){for(var t=this._children,e=t.length-1;e>=0;e--)t[e]&&t[e].destructor&&t[e].destructor();this._children=[]},e}(r),p=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(t){function e(e,n,r){var i=t.call(this,e,n)||this;return i._ui=r,i._windows=[],i}return p(e,t),e.prototype.getRoot=function(){if(this.app.config.jet1xMode){var t=this.getParentView();if(t)return t.getRoot()}return this._root},e.prototype.config=function(){return this._ui.$ui||this._ui},e.prototype.destructor=function(){var e=this._ui.$ondestroy;e&&e();for(var n=0,r=this._windows;n<r.length;n++){r[n].destructor()}t.prototype.destructor.call(this)},e.prototype.show=function(e,n){if(0===e.indexOf("/")||0===e.indexOf("./"))return t.prototype.show.call(this,e,n);t.prototype.show.call(this,"../"+e,n)},e.prototype.init=function(){this.app.config.legacyEarlyInit&&this._realInitHandler()},e.prototype.ready=function(){this.app.config.legacyEarlyInit||this._realInitHandler()},e.prototype._realInitHandler=function(){var t=this._ui.$oninit;if(t){var n=this.getRoot();t(n,n.$scope)}var r=this._ui.$onevent;if(r)for(var i in r)this.on(this.app,i,r[i]);var o=this._ui.$windows;if(o)for(var s=0,a=o;s<a.length;s++){var u=a[s];if(u.$ui){var c=new e(this.app,this.getName(),u);c.render(document.body),this._windows.push(c)}else this.ui(u)}},e.prototype._urlChange=function(e){var n=this;return t.prototype._urlChange.call(this,e).then(function(){var t=n._ui.$onurlchange;if(t){var r=n.getRoot();t(e[0].params,e.slice(1),r.$scope)}})},e}(c),h=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(t){function e(e,n,r){var i=t.call(this,e,n)||this;return i._ui=r,i}return h(e,t),e.prototype.config=function(){return this._ui},e}(c),d=n(1),v=n.n(d),y=function(){function t(t,e){var n=this;this.config=e||{},this._prefix=this.config.routerPrefix,void 0===this._prefix&&(this._prefix="!");var r=function(t){};v()(this._prefix+"*",function(){return n._lastUrl="",r(n.get())}),r=t}return t.prototype.set=function(t,e){if(this.config.routes){var n=t.split("?",2);for(var r in this.config.routes)if(this.config.routes[r]===n[0]){t=r+(n.length>1?"?"+n[1]:"");break}}this._lastUrl=t,v.a.navigate(this._prefix+t,e)},t.prototype.get=function(){var t=this._lastUrl||(window.location.hash||"").replace("#"+this._prefix,"");if(this.config.routes){var e=t.split("?",2),n=this.config.routes[e[0]];n&&(t=n+(e.length>1?"?"+e[1]:""))}return t},t}(),g=(n(9),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),_=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(t){function e(e){var n=t.call(this)||this;return n.webix=e.webix||webix,n.config=n.webix.extend({name:"App",version:"1.0",start:"/home"},e,!0),n._name=n.config.name,n._services={},webix.extend(n,webix.EventSystem),n}return _(e,t),e.prototype.getService=function(t){var e=this._services[t];return"function"==typeof e&&(e=this._services[t]=e(this)),e},e.prototype.setService=function(t,e){this._services[t]=e},e.prototype.copyConfig=function(t,e,n){if(t.$ui?t={$subview:new f(this,"",t)}:(t instanceof r||"function"==typeof t&&t.prototype instanceof r)&&(t={$subview:t}),t.$subview)return this.addSubView(t,e,n);for(var i in e=e||(t instanceof Array?[]:{}),t){var o=t[i];"function"==typeof o&&o.prototype instanceof r&&(o={$subview:o}),!o||"object"!==(void 0===o?"undefined":g(o))||o instanceof webix.DataCollection||o instanceof RegExp?e[i]=o:o instanceof Date?e[i]=new Date(o):e[i]=this.copyConfig(o,o instanceof Array?[]:{},n)}return e},e.prototype.getRouter=function(){return this.$router},e.prototype.clickHandler=function(t){if(t){var e=t.target||t.srcElement;if(e&&e.getAttribute){var n=e.getAttribute("trigger");n&&this.trigger(n);var r=e.getAttribute("route");r&&this.show(r)}}},e.prototype.refresh=function(){var t=this._container;this._view._name=webix.uid()+"",this._container=null,this.render(t,i(this.getRouter().get()),this._parent)},e.prototype.loadView=function(t){var e=this,r=this.config.views,i=null;if(""===t)return Promise.resolve(this._loadError("",new Error("Webix Jet: Empty url segment")));try{r&&"string"==typeof(i="function"==typeof r?r(t):r[t])&&(t=i,i=null),i||(t=t.replace(/\./g,"/"),i=n(10)("./"+t))}catch(e){i=this._loadError(t,e)}return i.then||(i=Promise.resolve(i)),i=i.then(function(t){return t.__esModule?t.default:t}).catch(function(n){return e._loadError(t,n)})},e.prototype.createFromURL=function(t,e){var n=this,r=t[0],i=r.page;return e&&e.getName()===i?Promise.resolve(e):this.loadView(r.page).then(function(t){return n.createView(t,i)})},e.prototype.createView=function(t,e){if("function"==typeof t){if(t.prototype instanceof r)return new t(this,e);t=t()}return t instanceof r?t:t.$ui?new f(this,e,t):new l(this,e,t)},e.prototype.show=function(t){return this.$router.get()!==t?this._render(t):Promise.resolve(!0)},e.prototype.canNavigate=function(t,e){var n={url:i(t),redirect:t,confirm:Promise.resolve(!0)};return this.callEvent("app:guard",[t,e||this._view,n])?n.confirm.catch(function(){return n.redirect=null}).then(function(){return n.redirect}):Promise.reject("")},e.prototype.destructor=function(){this._view.destructor()},e.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this.apply(t,e)},e.prototype.apply=function(t,e){this.callEvent(t,e)},e.prototype.action=function(t){return this.webix.bind(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.apply(t,e)},this)},e.prototype.on=function(t,e){this.attachEvent(t,e)},e.prototype.use=function(t,e){t(this,null,e)},e.prototype.error=function(t,e){if(this.callEvent(t,e),this.callEvent("app:error",e),this.config.debug)for(var n=0;n<e.length;n++)if(console.error(e[n]),e[n]instanceof Error){var r=e[n].message;0===r.indexOf("Module build failed")?(r=r.replace(/\x1b\[[0-9;]*m/g,""),document.body.innerHTML="<pre style='font-size:16px; background-color: #ec6873; color: #000; padding:10px;'>"+r+"</pre>"):(r+="<br><br>Check console for more details",webix.message({type:"error",text:r,expire:-1}))}},e.prototype._render=function(t){var e=this;!this.$router&&(webix.attachEvent("onClick",function(t){return e.clickHandler(t)}),t=this._first_start(t));var n="string"==typeof t?t:o(t);return this.canNavigate(n).then(function(t){return null!==t?(e.$router.set(t,{silent:!0}),e._render_stage(t)):null})},e.prototype._render_stage=function(t){var e=this,n="string"==typeof t?i(t):t;return webix.ui.freeze(function(){return e.createFromURL(n,e._view).then(function(t){var r=e._view;return e._view=t,t.render(e._container,n,e._parent).then(function(i){return r&&r!==e._view&&r.destructor(),e._view.getRoot().getParentView()&&(e._container=i),e._root=i,e.callEvent("app:route",[n]),t})}).catch(function(t){e.error("app:error:render",[t])})})},e.prototype._urlChange=function(t){return alert("Not implemented"),Promise.resolve(!0)},e.prototype._first_start=function(t){var e=this;if(this.$router=new(this.config.router||y)(function(t){return setTimeout(function(){e._render(t)},1)},this.config),this._container===document.body&&!1!==this.config.animation){var n=this._container;webix.html.addCss(n,"webixappstart"),setTimeout(function(){webix.html.removeCss(n,"webixappstart"),webix.html.addCss(n,"webixapp")},10)}return t&&1!==t.length||(t=this.$router.get()||this.config.start,this.$router.set(t,{silent:!0})),t},e.prototype._loadError=function(t,e){return this.error("app:error:resolve",[e,t]),{template:" "}},e.prototype.addSubView=function(t,e,n){var i=!0!==t.$subview?t.$subview:null,o=t.name||(i?this.webix.uid():"default");e.id=t.id||"s"+this.webix.uid();var s=n[o]={id:e.id,url:i};return s.url instanceof r&&(s.view=s.url),e},e}(r);(function(){function t(t,e){this.name=e.storeName||e.id+":route",this.cb=t}t.prototype.set=function(t,e){var n=this;webix.storage.session.put(this.name,t),e&&e.silent||setTimeout(function(){return n.cb(t)},1)},t.prototype.get=function(){return webix.storage.session.get(this.name)}})(),function(){function t(t,e){var n=this;this.cb=t,window.onpopstate=function(){return n.cb(n.get())},this.prefix=e.routerPrefix||""}t.prototype.set=function(t,e){var n=this;this.get()!==t&&window.history.pushState(null,null,this.prefix+t),e&&e.silent||setTimeout(function(){return n.cb(t)},1)},t.prototype.get=function(){var t=window.location.pathname.replace(this.prefix,"");return"/"!==t?t:""}}(),function(){function t(t,e){this.path="",this.cb=t}t.prototype.set=function(t,e){var n=this;this.path=t,e&&e.silent||setTimeout(function(){return n.cb(t)},1)},t.prototype.get=function(){return this.path}}();var w=n(6),m=n.n(w);function x(t,e,n){e.urls&&(n=e.urls[n]||n),t.show("./"+n)}var S={good:"check",error:"warning",saving:"refresh fa-spin"},E={good:"Ok",error:"Error",saving:"Connecting..."};function O(t,e,n){for(var r=0;r<n.length;r++)t.setParam(n[r],e[r+1]?e[r+1].page:"")}n.d(e,"d",function(){return $}),n.d(e,"b",function(){return b}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return y});var $={UnloadGuard:function(t,e,n){e.on(t,"app:guard",function(t,r,i){if(r===e||r.contains(e)){var o=n();i.confirm=!1===o?Promise.reject(o):i.confirm.then(function(){return o})}})},Locale:function(t,e,r){var i=(r=r||{}).storage,o=i?i.get("lang")||"en":r.lang||"en",s={_:null,polyglot:null,getLang:function(){return o},setLang:function(e,a){var u=(r.path?r.path+"/":"")+e,c=n(11)("./"+u);c.__esModule&&(c=c.default);var p=s.polyglot=new m.a({phrases:c});p.locale(e),s._=webix.bind(p.t,p),o=e,i&&i.put("lang",o),a||t.refresh()}};t.setService("locale",s),s.setLang(o,!0)},Menu:function(t,e,n){var r=e.$$(n.id||n),i=!1;r.attachEvent("onchange",function(){i||x(e,n,this.getValue())}),r.attachEvent("onafterselect",function(){if(!i){var t=null;r.setValue?t=this.getValue():r.getSelectedId&&(t=r.getSelectedId()),x(e,n,t)}}),e.on(t,"app:route",function(t){var n=t[e.getIndex()];if(n){i=!0;var o=n.page;r.setValue&&r.getValue()!==o?r.setValue(o):r.select&&r.exists(o)&&r.getSelectedId()!==o&&r.select(o),i=!1}})},Theme:function(t,e,n){var r=(n=n||{}).storage,i=r?r.get("theme")||"flat-default":n.theme||"flat-default",o={getTheme:function(){return i},setTheme:function(e,n){for(var o=e.split("-"),s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a].getAttribute("title");u&&(u===e||u===o[0]?s[a].disabled=!1:s[a].disabled=!0)}webix.skin.set(o[0]),webix.html.removeCss(document.body,"theme-"+i),webix.html.addCss(document.body,"theme-"+e),i=e,r&&r.put("theme",e),n||t.refresh()}};t.setService("theme",o),o.setTheme(i,!0)},User:function(t,e,n){var r=(n=n||{}).login||"/login",i=n.logout||"/logout",o=n.afterLogin||t.config.start,s=n.afterLogout||"/login",a=n.ping||3e5,u=n.model,c=n.user,p={getUser:function(){return c},getStatus:function(t){return t?u.status().catch(function(){return null}).then(function(t){c=t}):null!==c},login:function(e,n){return u.login(e,n).then(function(e){if(c=e,!e)throw new Error("Access denied");t.callEvent("app:user:login",[c]),t.show(o)})},logout:function(){return c=null,u.logout().then(function(e){return t.callEvent("app:user:logout",[]),e})}};function f(t,e){t===i?(p.logout(),e.redirect=s):t===r||p.getStatus()||(e.redirect=r)}t.setService("user",p),t.attachEvent("app:guard",function(t,e,n){return void 0===c&&(n.confirm=p.getStatus(!0).then(function(){return f(t,n)})),f(t,n)}),a&&setInterval(function(){return p.getStatus(!0)},a)},Status:function(t,e,n){var r="good",i=0,o=!1,s=n.expire;s||!1===s||(s=2e3);var a=n.texts||E,u=n.icons||S;function c(t){var i=e.$$(n.target);i&&(t||(t="<div class='status_"+r+"'><span class='webix_icon fa-"+u[r]+"'></span> "+a[r]+"</div>"),i.setHTML(t))}function p(){i--,d("good")}function f(t){i--,d("error",t)}function h(t){i++,d("saving"),t&&t.then&&t.then(p,f)}function l(){0===i&&c(" ")}function d(e,n){i<0&&(i=0),"saving"===e?(r="saving",c()):(o="error"===e,0===i&&(r=o?"error":"good",o?t.error("app:error:server",[n.responseText||n]):s&&setTimeout(l,s),c()))}function v(t){var n=webix.dp(t);n&&(e.on(n,"onAfterDataSend",h),e.on(n,"onAfterSaveError",function(t,e,n){return f(n)}),e.on(n,"onAfterSave",p))}"string"==typeof n&&(n={target:n}),t.setService("status",{getStatus:function(){return r},setStatus:d,track:v}),n.remote&&e.on(webix,"onRemoteCall",h),n.ajax&&e.on(webix,"onBeforeAjax",function(t,e,n,r,i,o,s){h(s)}),n.data&&v(n.data)},UrlParam:function(t,e,n){var r=n.route||n;e.on(t,"app:urlchange",function(t,n){e===t&&(O(e,n,r),n.splice(1,r.length))}),e.on(t,"app:paramchange",function(t,n,i,o){if(e===t&&o)for(var s=0;s<r.length;s++)if(r[s]===n)return e.show([s,i]),!1}),O(e,e.getUrl(),r)}};window.Promise||(window.Promise=webix.promise)},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/*!
 * webix-routie - router for Webix-Jet
 * v0.4.0
 * MIT License
 *
 * based on routie - a tiny hash router
 * http://projects.jga.me/routie
 * copyright Greg Allen 2016
 * MIT License
*/t.exports=function(t,e){var n,i=[],o={},s=t.routie,a=function(t,e){this.name=e,this.path=t,this.keys=[],this.fns=[],this.params={},this.regex=u(this.path,this.keys,!1,!1)};a.prototype.addHandler=function(t){this.fns.push(t)},a.prototype.removeHandler=function(t){for(var e=0,n=this.fns.length;e<n;e++)if(t==this.fns[e])return void this.fns.splice(e,1)},a.prototype.run=function(t){for(var e=0,n=this.fns.length;e<n;e++)if(!1===this.fns[e].apply(this,t))return!1;return!0},a.prototype.match=function(t,e){var n=this.regex.exec(t);if(!n)return!1;for(var r=1,i=n.length;r<i;++r){var o=this.keys[r-1],s="string"==typeof n[r]?decodeURIComponent(n[r]):n[r];o&&(this.params[o.name]=s),e.push(s)}return!0},a.prototype.toURL=function(t){var e=this.path;for(var n in t)e=e.replace("/:"+n,"/"+t[n]);if(-1!=(e=e.replace(/\/:.*\?/g,"/").replace(/\?/g,"")).indexOf(":"))throw new Error("missing parameters for url: "+e);return e};var u=function(t,e,n,r){return t instanceof RegExp?t:(t instanceof Array&&(t="("+t.join("|")+")"),t=t.concat(r?"":"/?").replace(/\/\(/g,"(?:/").replace(/\+/g,"__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(t,n,r,i,o,s){return e.push({name:i,optional:!!s}),n=n||"",(s?"":n)+"(?:"+(s?n:"")+(r||"")+(o||r&&"([^/.]+?)"||"([^/]+?)")+")"+(s||"")}).replace(/([/.])/g,"\\$1").replace(/__plus__/g,"(.+)").replace(/\*/g,"(.*)"),new RegExp("^"+t+"$",n?"":"i"))},c=function(t,e){var n=t.split(" "),r=2==n.length?n[0]:null;t=2==n.length?n[1]:n[0],o[t]||(o[t]=new a(t,r),i.push(o[t])),o[t].addHandler(e)},p=function t(e,n){if("function"==typeof n)c(e,n),t.reload();else if("object"==(void 0===e?"undefined":r(e))){for(var i in e)c(i,e[i]);t.reload()}else void 0===n&&t.navigate(e)};p.lookup=function(t,e){for(var n=0,r=i.length;n<r;n++){var o=i[n];if(o.name==t)return o.toURL(e)}},p.remove=function(t,e){var n=o[t];n&&n.removeHandler(e)},p.removeAll=function(){o={},i=[],n=""},p.navigate=function(t,e){var n=(e=e||{}).silent||!1;n&&v(),setTimeout(function(){window.location.hash=t,n&&setTimeout(function(){d()},1)},1)},p.noConflict=function(){return t.routie=s,p};var f=function(){return window.location.hash.substring(1)},h=function(t,e){var n=[];return e.match(t,n)?!1!==e.run(n)?1:0:-1},l=p.reload=function(){for(var t=f(),e=0,r=i.length;e<r;e++){var o=i[e],s=h(t,o);if(1===s){n=t;break}if(0===s){p.navigate(n,{silent:!0});break}}},d=function(){t.addEventListener?t.addEventListener("hashchange",l,!1):t.attachEvent("onhashchange",l)},v=function(){t.removeEventListener?t.removeEventListener("hashchange",l):t.detachEvent("onhashchange",l)};if(d(),n=f(),e)return p;t.routie=p}(window,!0),t.exports.default=t.exports},function(t,e,n){"use strict";n.r(e),e.default={template:"Start page",css:"webix_shadow_medium app_start"}},function(t,e,n){"use strict";n.r(e);var r=n(0);var i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.config=function(){return{type:"clean",paddingX:5,css:"app_layout",rows:[{paddingX:5,paddingY:10,rows:[{css:"webix_shadow_medium",rows:[{view:"menu",id:"top:menu",css:"app_menu",layout:"x",select:!0,template:"<span class='webix_icon #icon#'></span> #value# ",data:[{value:"Dashboard",id:"start",icon:"wxi-columns"},{value:"Data",id:"data",icon:"wxi-pencil"}]},{type:"clean",cols:[{infoblock:{paddingX:5,paddingY:5,template:function(t,e){return"<div class='infblock'><span>"+curloc.ybalanse+"</span><span>"+acc.balanse+" XDNA</span><div>"}},logo:{template:"<div class='xdna_logo'></div>"}}],css:"webix_header app_header"}]}]},{type:"wide",paddingY:10,paddingX:5,rows:[{$subview:!0}]}]}},e.prototype.init=function(){this.use(r.d.Menu,"top:menu")},e}(r.c);e.default=i},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(0),i=new webix.DataCollection({data:[{id:1,title:"The Shawshank Redemption",year:1994,votes:678790,rating:9.2,rank:1},{id:2,title:"The Godfather",year:1972,votes:511495,rating:9.2,rank:2},{id:3,title:"The Godfather: Part II",year:1974,votes:319352,rating:9,rank:3},{id:4,title:"The Good, the Bad and the Ugly",year:1966,votes:213030,rating:8.9,rank:4},{id:5,title:"My Fair Lady",year:1964,votes:533848,rating:8.9,rank:5},{id:6,title:"12 Angry Men",year:1957,votes:164558,rating:8.9,rank:6}]});var o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.config=function(){return{view:"datatable",autoConfig:!0,css:"webix_shadow_medium"}},e.prototype.init=function(t){t.parse(i)},e}(r.c);e.default=o},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e,n){for(var r in t)i(t,r)&&e.call(n||t,t[r],r,t)}function s(t){t="Warning: "+t,"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(t){}}var a=String.prototype.replace,u=String.prototype.split,c="||||",p=function(t){var e=t%10;return 11!==t&&1===e?0:2<=e&&e<=4&&!(t>=12&&t<=14)?1:2},f={arabic:function(t){if(t<3)return t;var e=t%100;return e>=3&&e<=10?3:e>=11?4:5},bosnian_serbian:p,chinese:function(){return 0},croatian:p,french:function(t){return t>1?1:0},german:function(t){return 1!==t?1:0},russian:p,lithuanian:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=9&&(t%100<11||t%100>19)?1:2},czech:function(t){return 1===t?0:t>=2&&t<=4?1:2},polish:function(t){if(1===t)return 0;var e=t%10;return 2<=e&&e<=4&&(t%100<10||t%100>=20)?1:2},icelandic:function(t){return t%10!=1||t%100==11?1:0},slovenian:function(t){var e=t%100;return 1===e?0:2===e?1:3===e||4===e?2:3}},h={arabic:["ar"],bosnian_serbian:["bs-Latn-BA","bs-Cyrl-BA","srl-RS","sr-RS"],chinese:["id","id-ID","ja","ko","ko-KR","lo","ms","th","th-TH","zh"],croatian:["hr","hr-HR"],german:["fa","da","de","en","es","fi","el","he","hi-IN","hu","hu-HU","it","nl","no","pt","sv","tr"],french:["fr","tl","pt-br"],russian:["ru","ru-RU"],lithuanian:["lt"],czech:["cs","cs-CZ","sk"],polish:["pl"],icelandic:["is"],slovenian:["sl-SL"]};function l(t){var e=function(t){var e={};return o(t,function(t,n){o(t,function(t){e[t]=n})}),e}(h);return e[t]||e[u.call(t,/-/,1)[0]]||e.en}function d(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var v=/\$/g,y="$$",g=/%\{(.*?)\}/g;function _(t,e,n,r){if("string"!=typeof t)throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");if(null==e)return t;var o=t,s=r||g,p="number"==typeof e?{smart_count:e}:e;if(null!=p.smart_count&&o){var h=u.call(o,c);o=function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}(h[function(t,e){return f[l(t)](e)}(n||"en",p.smart_count)]||h[0])}return o=a.call(o,s,function(t,e){return i(p,e)&&null!=p[e]?a.call(p[e],v,y):t})}function b(t){var e=t||{};this.phrases={},this.extend(e.phrases||{}),this.currentLocale=e.locale||"en";var n=e.allowMissing?_:null;this.onMissingKey="function"==typeof e.onMissingKey?e.onMissingKey:n,this.warn=e.warn||s,this.tokenRegex=function(t){var e=t&&t.prefix||"%{",n=t&&t.suffix||"}";if(e===c||n===c)throw new RangeError('"'+c+'" token is reserved for pluralization');return new RegExp(d(e)+"(.*?)"+d(n),"g")}(e.interpolation)}b.prototype.locale=function(t){return t&&(this.currentLocale=t),this.currentLocale},b.prototype.extend=function(t,e){o(t,function(t,n){var i=e?e+"."+n:n;"object"===(void 0===t?"undefined":r(t))?this.extend(t,i):this.phrases[i]=t},this)},b.prototype.unset=function(t,e){"string"==typeof t?delete this.phrases[t]:o(t,function(t,n){var i=e?e+"."+n:n;"object"===(void 0===t?"undefined":r(t))?this.unset(t,i):delete this.phrases[i]},this)},b.prototype.clear=function(){this.phrases={}},b.prototype.replace=function(t){this.clear(),this.extend(t)},b.prototype.t=function(t,e){var n,r,i=null==e?{}:e;if("string"==typeof this.phrases[t])n=this.phrases[t];else if("string"==typeof i._)n=i._;else if(this.onMissingKey){r=(0,this.onMissingKey)(t,i,this.currentLocale,this.tokenRegex)}else this.warn('Missing translation for key: "'+t+'"'),r=t;return"string"==typeof n&&(r=_(n,i,this.currentLocale,this.tokenRegex)),r},b.prototype.has=function(t){return i(this.phrases,t)},b.transformPhrase=function(t,e,n){return _(t,e,n)},t.exports=b},function(t,e,n){"use strict";n.r(e);n(8);var r=n(0),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var o=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o={id:"webix-jet-app",version:"1.1.0",router:r.a,debug:!1,start:"/top/start"};return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,i({},o,n)))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(r.b);e.default=o,webix.ready(function(){return(new o).render()})},function(t,e,n){},function(t,e){var n=webix,r=webix.version.split(".");10*r[0]+1*r[1]<53&&(n.ui.freeze=function(t){var e=t();return e&&e.then?e.then(function(t){return n.ui.$freeze=!1,n.ui.resize(),t}):(n.ui.$freeze=!1,n.ui.resize()),e});var i=n.ui.baselayout.prototype.addView,o=n.ui.baselayout.prototype.removeView,s={addView:function(t,e){if(this.$scope&&this.$scope.webixJet){var n=this.$scope,r={};t=n.app.copyConfig(t,{},r),i.apply(this,[t,e]);var o=function(t){n._renderFrame(t,r[t],n.getUrl()).then(function(){n._subs[t]=r[t]})};for(var s in r)o(s);return t.id}return i.apply(this,arguments)},removeView:function(){if(o.apply(this,arguments),this.$scope&&this.$scope.webixJet){var t=this.$scope._subs;for(var e in t)webix.$$(t[e].id)||delete t[e]}}};n.extend(n.ui.layout.prototype,s,!0),n.extend(n.ui.baselayout.prototype,s,!0),webix.protoUI({name:"jetapp",$init:function(t){this.$app=new this.app(t);var e=webix.uid().toString();t.body={id:e},this.$ready.push(function(){this.$app.render(webix.$$(e))})}},webix.ui.proxy)},function(t,e,n){var r={"./data":5,"./data.js":5,"./start":2,"./start.js":2,"./top":3,"./top.js":3};function i(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=10},function(t,e,n){var r={"./en":4,"./en.js":4};function i(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=11}]);