define("web/app",["exports","ember","ember/resolver","ember/load-initializers","web/config/environment"],function(e,t,n,a,r){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](i,r["default"].modulePrefix),e["default"]=i}),define("web/components/chat-history",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({chateeUserName:null,historyMessages:[],historyMessage:null,onHistoryMessageChange:function(){this.get("historyMessages").pushObject(this.get("historyMessage")),t["default"].run.later(this,function(){t["default"].$("ul").scrollTop($("ul").prop("scrollHeight"))},10)}.observes("historyMessage")})}),define("web/components/chat-input",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({inputText:null,endOfChat:!1,classNames:["chat-input"],didInsertElement:function(){var e=this;Em.$("input").keydown(function(t){var n=t.which;if(13===n){var a=e.get("inputText");(!Em.isNone(a)||a.trim().length>0)&&(e.sendAction("enterInputText",a),e.set("inputText",null))}}).focus()}})}),define("web/components/chat-random",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({isChatting:!1,isReadyToChat:!1,userName:null,chateeUserName:null,socket:null,classNames:["centered-form"],message:null,historyMessage:null,endOfChat:!1,actions:{readyToChat:function(e){this.setProperties({isReadyToChat:!0,userName:e}),this.get("socket").emit("newUser",e)},sendMessage:function(e){this.set("historyMessage",{message:e,userName:"Me",className:"user-row"}),this.get("socket").emit("message",e)}},didInsertElement:function(){var e=io(),t=this;this.set("socket",e),e.on("startChat",function(e){t.setProperties({isChatting:!0,chateeUserName:e})}).on("message",function(e){t.setProperties({message:e,historyMessage:{message:e,userName:t.get("chateeUserName"),className:"chatee-row"}})}).on("userDisconnected",function(){t.setProperties({historyMessage:{userName:t.get("chateeUserName"),className:"dc-row",isLeaveMsg:!0},endOfChat:!0})})}})}),define("web/components/username-input",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({userName:null,didInsertElement:function(){var e=this;t["default"].$("input").keydown(function(n){var a=n.which;if(13===a){var r=e.get("userName");(!t["default"].isNone(r)||r.trim().length>0)&&e.sendAction("enterUsername",r)}}).focus()}})}),define("web/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("web/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("web/initializers/app-version",["exports","web/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!r){var s=a(i.toString());n["default"].libraries.register(s,t["default"].APP.version),r=!0}}}}),define("web/initializers/export-application-global",["exports","ember","web/config/environment"],function(e,t,n){"use strict";function a(e,a){var r=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[r]&&(window[r]=a)}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("web/router",["exports","ember","web/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("web/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,i=r.content;a.detectNamespace(n);var s;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(s=this.build(a),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=a.cloneNode(this.cachedFragment,!0))):s=this.build(a);var c=a.createMorphAt(s,0,0,n);return a.insertBoundary(s,null),a.insertBoundary(s,0),i(t,c,e,"chat-random"),s}}}())}),define("web/templates/components/chat-history",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("li"),a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode(": ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,i=r.get,s=r.element,c=r.content;a.detectNamespace(n);var d;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(d=this.build(a),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=a.cloneNode(this.cachedFragment,!0))):d=this.build(a);var o=a.childAt(d,[1]),h=a.createMorphAt(o,0,0),l=a.createMorphAt(o,2,2);return s(t,o,e,"bind-attr",[],{"class":i(t,e,"row.className")}),c(t,h,e,"row.userName"),c(t,l,e,"row.message"),d}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("li"),a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode(" has left the chat room.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,i=r.get,s=r.element,c=r.content;a.detectNamespace(n);var d;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(d=this.build(a),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=a.cloneNode(this.cachedFragment,!0))):d=this.build(a);var o=a.childAt(d,[1]),h=a.createMorphAt(o,0,0);return s(t,o,e,"bind-attr",[],{"class":i(t,e,"row.className")}),c(t,h,e,"row.userName"),d}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(n,a,r){var i=a.dom,s=a.hooks,c=s.get,d=s.block;i.detectNamespace(r);var o;a.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(o=this.build(i),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=i.cloneNode(this.cachedFragment,!0))):o=this.build(i);var h=i.createMorphAt(o,0,0,r);return i.insertBoundary(o,0),d(a,h,n,"unless",[c(a,n,"row.isLeaveMsg")],{},e,t),o}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("ul"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},render:function(t,n,a){var r=n.dom,i=n.hooks,s=i.get,c=i.block;r.detectNamespace(a);var d;n.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var o=r.createMorphAt(r.childAt(d,[0]),1,1);return c(n,o,t,"each",[s(n,t,"historyMessages")],{keyword:"row"},e,null),d}}}())}),define("web/templates/components/chat-input",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,i=r.get,s=r.inline;a.detectNamespace(n);var c;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(c=this.build(a),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=a.cloneNode(this.cachedFragment,!0))):c=this.build(a);var d=a.createMorphAt(c,0,0,n);return a.insertBoundary(c,null),a.insertBoundary(c,0),s(t,d,e,"input",[],{type:"text",value:i(t,e,"inputText"),disabled:i(t,e,"endOfChat")}),c}}}())}),define("web/templates/components/chat-random",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,i=r.get,s=r.inline;a.detectNamespace(n);var c;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(c=this.build(a),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=a.cloneNode(this.cachedFragment,!0))):c=this.build(a);var d=a.createMorphAt(c,1,1,n),o=a.createMorphAt(c,3,3,n);return s(t,d,e,"chat-history",[],{historyMessage:i(t,e,"historyMessage")}),s(t,o,e,"chat-input",[],{enterInputText:"sendMessage",endOfChat:i(t,e,"endOfChat")}),c}}}(),t=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          Waiting for more people to connect...\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom;a.detectNamespace(n);var r;return t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(r=this.build(a),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=a.cloneNode(this.cachedFragment,!0))):r=this.build(a),r}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,i=r.inline;a.detectNamespace(n);var s;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(s=this.build(a),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=a.cloneNode(this.cachedFragment,!0))):s=this.build(a);var c=a.createMorphAt(s,1,1,n);return i(t,c,e,"username-input",[],{enterUsername:"readyToChat"}),s}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","vert-centered");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(n,a,r){var i=a.dom,s=a.hooks,c=s.get,d=s.block;i.detectNamespace(r);var o;a.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(o=this.build(i),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=i.cloneNode(this.cachedFragment,!0))):o=this.build(i);var h=i.createMorphAt(i.childAt(o,[1]),1,1);return d(a,h,n,"if",[c(a,n,"isReadyToChat")],{},e,t),o}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},render:function(n,a,r){var i=a.dom,s=a.hooks,c=s.get,d=s.block;i.detectNamespace(r);var o;a.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(o=this.build(i),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=i.cloneNode(this.cachedFragment,!0))):o=this.build(i);var h=i.createMorphAt(o,0,0,r);return i.insertBoundary(o,null),i.insertBoundary(o,0),d(a,h,n,"if",[c(a,n,"isChatting")],{},e,t),o}}}())}),define("web/templates/components/username-input",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Username ");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,i=r.get,s=r.inline;a.detectNamespace(n);var c;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(c=this.build(a),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=a.cloneNode(this.cachedFragment,!0))):c=this.build(a);var d=a.createMorphAt(c,1,1,n);return a.insertBoundary(c,null),s(t,d,e,"input",[],{type:"text",value:i(t,e,"userName")}),c}}}())}),define("web/config/environment",["ember"],function(e){var t="web";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("web/tests/test-helper"):require("web/app")["default"].create({name:"web",version:"0.0.0.7bc143e0"});