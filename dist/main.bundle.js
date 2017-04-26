webpackJsonp([2,5],{

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 180;


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(199);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_container_chat_container_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__chat_container_chat_container_component__["a" /* ChatContainerComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_container_chat_container_component__["a" /* ChatContainerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_container_chat_container_component__["a" /* ChatContainerComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "chatComponent", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(285),
        styles: [__webpack_require__(272)]
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_column_chat_column_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_container_chat_container_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_column_chat_column_component__["a" /* ChatColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chat_container_chat_container_component__["a" /* ChatContainerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__["a" /* PushNotificationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatColumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatColumnComponent = (function () {
    function ChatColumnComponent() {
        // this.socket = io();
        //
        // // Get Details
        // Observable.fromEvent(this.socket, 'details')
        //   .subscribe(msg => this.reply(msg))
    }
    ChatColumnComponent.prototype.ngOnInit = function () { };
    return ChatColumnComponent;
}());
ChatColumnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'chat-column',
        template: __webpack_require__(286),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [])
], ChatColumnComponent);

//# sourceMappingURL=chat-column.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Droid+Sans|Oswald|Titillium+Web);", ""]);

// module
exports.push([module.i, "/*\n* Variables\n*/\n.row.no-gutter {\n  margin-left: 0;\n  margin-right: 0; }\n\n.row.no-gutter [class*='col-']:not(:first-child),\n.row.no-gutter [class*='col-']:not(:last-child) {\n  padding-right: 0;\n  padding-left: 0; }\n\n#app-container {\n  margin: 0;\n  padding: 0;\n  height: 90vh;\n  width: 80vw;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: white; }\n\n#app-container-content {\n  height: 100%;\n  width: 100%; }\n\n#chat-column {\n  height: 100% !important; }\n\n#chat-container {\n  height: 100% !important; }\n\n#context-menu {\n  border-radius: 0;\n  position: absolute;\n  display: none;\n  border: 0;\n  list-style-type: none;\n  width: 200px;\n  background-color: white;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  #context-menu label {\n    display: inline-block;\n    width: 100%;\n    font-weight: normal;\n    cursor: pointer; }\n  #context-menu * {\n    text-decoration: none;\n    color: #454545; }\n  #context-menu *:hover {\n    background-color: #03A9F4;\n    color: white !important;\n    cursor: pointer; }\n    #context-menu *:hover a, #context-menu *:hover label {\n      color: white !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Droid+Sans|Oswald|Titillium+Web);", ""]);

// module
exports.push([module.i, "/*\n* Variables\n*/\n#chat-column-header {\n  height: 10%;\n  width: 100%;\n  background: #03A9F4;\n  border-right: 1px solid #FFFFFF;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  #chat-column-header .row {\n    height: 100%;\n    width: 100%; }\n  #chat-column-header .col-sm-2, #chat-column-header .col-sm-4, #chat-column-header .col-sm-6 {\n    height: 100%; }\n\n#dp {\n  margin-top: 5%; }\n\n#display-name, #add-group {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n#display-name {\n  font-size: 1.2em; }\n\n#chat-column-body {\n  height: 90%;\n  background: #FAFAFA; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Droid+Sans|Oswald|Titillium+Web);", ""]);

// module
exports.push([module.i, "/*\n* Variables\n*/\n#chat-container-header {\n  height: 10%;\n  width: 100%;\n  background: #03A9F4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#chat-container-header-content h3 {\n  margin-left: 50px; }\n\n#chat-body {\n  height: 80%;\n  width: 100%;\n  padding: 20px 60px;\n  overflow-y: scroll;\n  background: url(" + __webpack_require__(555) + "); }\n\n#messages {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  overflow: none; }\n\n#chat-sender {\n  height: 10%;\n  width: 100%;\n  background-color: #f5f1ee; }\n  #chat-sender form {\n    height: 100%;\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  #chat-sender md-progress-bar {\n    position: relative;\n    top: -5px; }\n\n#type-message {\n  border: 0;\n  width: 90%;\n  height: 3.5em;\n  border-radius: 5px;\n  padding-left: 15px;\n  word-wrap: break-word;\n  -webkit-box-flex: 8;\n      -ms-flex: 8;\n          flex: 8; }\n\n#send-button, #emoji-tray-button {\n  border: 0;\n  background-color: transparent;\n  color: #313638;\n  font-size: 1.6em;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n#emoji-tray-button {\n  -webkit-box-flex: 0.5;\n      -ms-flex: 0.5;\n          flex: 0.5; }\n\n#type-message:focus, #send-button:focus, #emoji-tray-button:focus {\n  outline: 0; }\n\n.message {\n  display: inline-block;\n  padding: 5px 15px;\n  background-color: white;\n  border-radius: 10px;\n  min-width: 10em;\n  max-width: 50%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  margin: 1px 0; }\n  .message .username {\n    font-size: 0.8em;\n    display: block; }\n  .message .msg {\n    word-wrap: break-word;\n    display: block; }\n\n.message-me {\n  display: inline-block;\n  padding: 5px 15px;\n  background-color: #dcf8c6;\n  border-radius: 10px;\n  min-width: 10em;\n  max-width: 50%;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin: 2px 0; }\n  .message-me .msg {\n    word-wrap: break-word;\n    display: block; }\n\n.message-bot {\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.time {\n  font-size: 0.6em;\n  color: #BDBDBD; }\n\n.image > img {\n  cursor: zoom-in; }\n\n.image > img:-webkit-full-screen {\n  cursor: zoom-out; }\n\n.image > img:-moz-full-screen {\n  cursor: zoom-out; }\n\n.image > img:-ms-fullscreen {\n  cursor: zoom-out; }\n\n.image > img:fullscreen {\n  cursor: zoom-out; }\n\n#emoji-tray {\n  position: absolute;\n  width: 100%;\n  height: 40%;\n  top: 50%;\n  display: none;\n  background: #F5F5F5;\n  overflow-y: scroll;\n  padding-top: 10px; }\n\n#emoji-tray-content {\n  width: 90%;\n  margin: auto; }\n  #emoji-tray-content h4 {\n    padding-left: 2.5px; }\n  #emoji-tray-content .col-sm-1 {\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<!-- <ul id=\"messages\"></ul>\n<form action=\"\">\n  <input id=\"m\" autocomplete=\"off\" type=\"text\" name=\"m\" [(ngModel)]=\"chatinp\" />\n  <button (click)=\"send(chatinp)\">Send</button>\n</form> -->\n\n<md-card id=\"app-container\">\n    <div class=\"row no-gutter\" id=\"app-container-content\">\n      <div class=\"col-md-3\" id=\"chat-column\">\n        <chat-column></chat-column>\n      </div>\n      <div class=\"col-md-9\" id=\"chat-container\">\n        <chat-container></chat-container>\n      </div>\n    </div>\n</md-card>\n\n<md-list id=\"context-menu\">\n  <md-list-item>\n    <input type=\"file\" name=\"file\" id=\"file\" (change)=\"chatComponent.sendImage($event)\" class=\"visuallyhidden\" accept=\"image/*\">\n    <label for=\"file\">UPLOAD PIC</label>\n  </md-list-item>\n  <md-list-item>ITEM</md-list-item>\n  <md-list-item><a href=\"/logout\">LOGOUT</a></md-list-item>\n</md-list>\n"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-column-header\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <img src=\"assets/images/avatar.png\" class=\"img-circle\"  height=\"90%\" alt=\"display picture\" id=\"dp\">\n    </div>\n    <div class=\"col-sm-6\">\n      <div id=\"display-name\">Aravind Vasudevan</div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div id=\"add-group\"><span class=\"glyphicon glyphicon-plus\"></span></div>\n    </div>\n  </div>\n</div>\n\n<div id=\"chat-column-body\"></div>\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-container-header\">\n  <div id=\"chat-container-header-content\">\n    <div class=\"row\">\n      <div class=\"col-sm-10\">\n        <h3>Yabber! - Local IM</h3>\n      </div>\n      <div class=\"col-sm-2\"></div>\n    </div>\n  </div>\n</div>\n<div id=\"chat-body\" (contextmenu)=\"contextmenushow($event)\" (click)=\"contextmenuhide($event)\">\n  <div id=\"messages\" *ngFor=\"let message of messages\">\n    <div class=\"message-me\" *ngIf=\"message.me; else elseBlock\">\n      <span class=\"image\" *ngIf=\"message.image\">\n        <img src=\"{{message.image}}\" class=\"img-responsive\">\n      </span>\n      <span class=\"msg\" *ngIf=\"message.msg\" [innerHTML]=\"message.msg\"></span>\n      <span class=\"time noselect\">{{message.time}}</span>\n    </div>\n    <ng-template #elseBlock>\n    <div class=\"message\">\n      <span class=\"username noselect\">{{message.name}}</span>\n      <span class=\"image\" *ngIf=\"message.image\">\n        <img src=\"{{message.image}}\" class=\"img-responsive\">\n      </span>\n      <span class=\"msg\" *ngIf=\"message.msg\" [innerHTML]=\"message.msg\"></span>\n      <span class=\"time noselect\">{{message.time}}</span>\n    </div>\n    </ng-template>\n  </div>\n</div>\n<div id=\"emoji-tray\">\n  <div id=\"emoji-tray-content\">\n    <h4>Emojis</h4>\n    <div class=\"row\">\n      <div class=\"col-sm-1\" *ngFor=\"let emoji of emojiSet\" [innerHTML]=\"parseEmoji(emoji)\" (click)=\"insertEmoji(emoji)\"></div>\n    </div>\n  </div>\n</div>\n<div id=\"chat-sender\" class=\"noselect\">\n  <form>\n    <button type=\"button\" id=\"emoji-tray-button\" (click)=\"toggleEmojiTray()\"><span class=\"glyphicon glyphicon-sunglasses\"></span></button>\n    <input type=\"text\" name=\"msg\" autocomplete=\"off\" placeholder=\"Type a message\" id=\"type-message\" [(ngModel)]=\"chatmsg\">\n    <button type=\"submit\" id=\"send-button\" (click)=\"send(chatmsg)\"><span class=\"glyphicon glyphicon-chevron-right\"></span></button>\n  </form>\n  <md-progress-bar [mode]=\"progressStatus\" [value]=\"progressSize\"></md-progress-bar>\n</div>\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(181);


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatContainerComponent = (function () {
    function ChatContainerComponent(pushService) {
        this.pushService = pushService;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__();
        this.messages = [];
        this.audio = new Audio('assets/media/chat.mp3');
        this.progressStatus = 'indeterminate';
        this.chatmsg = '';
        this.emojiSet = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '☺️', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '🤤', '😭', '😓', '😪', '😴', '🙄', '🤔', '🤥', '😬', '🤐', '🤢', '🤧', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🖕', '✍️', '🤳', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '👃', '👣', '👁', '👀', '🗣', '👤', '👥', '👶', '👦', '👧', '👨', '👩', '👱‍♀️', '👱', '👴', '👵', '👲', '👳‍♀️', '👳', '👮‍♀️', '👮', '👷‍♀️', '👷', '💂‍♀️', '💂', '🕵️‍♀️', '🕵️', '👩‍⚕️', '👨‍⚕️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎓', '👨‍🎓', '👩‍🎤', '👨‍🎤', '👩‍🏫', '👨‍🏫', '👩‍🏭', '👨‍🏭', '👩‍💻', '👨‍💻', '👩‍💼', '👨‍💼', '👩‍🔧', '👨‍🔧', '👩‍🔬', '👨‍🔬', '👩‍🎨', '👨‍🎨', '👩‍🚒', '👨‍🚒', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍⚖️', '👨‍⚖️', '🤶', '🎅', '👸', '🤴', '👰', '🤵', '👼', '🤰', '🙇‍♀️', '🙇', '💁', '💁‍♂️', '🙅', '🙅‍♂️', '🙆', '🙆‍♂️', '🙋', '🙋‍♂️', '🤦‍♀️', '🤦‍♂️', '🤷‍♀️', '🤷‍♂️', '🙎', '🙎‍♂️', '🙍', '🙍‍♂️', '💇', '💇‍♂️', '💆', '💆‍♂️', '🕴', '💃', '🕺', '👯', '👯‍♂️', '🚶‍♀️', '🚶', '🏃‍♀️', '🏃', '👫', '👭', '👬', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👪', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👦', '👩‍👧', '👩‍👧‍👦', '👩‍👦‍👦', '👩‍👧‍👧', '👨‍👦', '👨‍👧', '👨‍👧‍👦', '👨‍👦‍👦', '👨‍👧‍👧', '👚', '👕', '👖', '👔', '👗', '👙', '👘', '👠', '👡', '👢', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '🌂', '☂️'];
    }
    ChatContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextMenu = $('#context-menu');
        // Chat Messages
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.socket, 'message')
            .subscribe(function (msg) { return _this.reply(msg); });
        if (this.pushService.permission === 'default') {
            this.pushService.requestPermission();
        }
        setTimeout(function () { return _this.progressStatus = 'determinate'; }, 3000);
    };
    ChatContainerComponent.prototype.reply = function (msg) {
        if (this.pushService.permission === 'granted' && !document.hasFocus()) {
            this.pushService.create(msg.name, { body: msg.msg, icon: msg.picture, tag: msg.id }).subscribe(function (res) {
                res['notification']['onclick'] = function () {
                    window.focus();
                    res['notification'].close();
                };
            }, function (err) { return console.log(err); });
        }
        msg.msg = twemoji.parse(msg.msg, function (icon, options, variant) {
            return 'assets/emojis/' + icon + '.svg';
        });
        this.messages.push(msg);
        this.audio.play();
        navigator.vibrate(100);
    };
    ChatContainerComponent.prototype.send = function (msg) {
        if (msg.trim() === '')
            return;
        this.socket.emit('message', msg);
        this.chatmsg = '';
        var escape = document.createElement('textarea');
        escape.textContent = msg.trim();
        var message = {
            msg: twemoji.parse(escape.innerHTML, function (icon, options, variant) {
                return 'assets/emojis/' + icon + '.svg';
            }),
            time: this.formatAMPM(new Date()),
            me: true
        };
        this.messages.push(message);
    };
    ChatContainerComponent.prototype.sendImage = function (e) {
        var _this = this;
        var fileTypes = ['jpg', 'jpeg', 'png'];
        var file = e.target.files[0];
        var stream = ss.createStream();
        var ext = file.name.split('.').pop().toLowerCase();
        if (fileTypes.indexOf(ext) > -1) {
            // upload a file to the server.
            ss(this.socket).emit('image', stream, { name: file.name, size: file.size });
            ss.createBlobReadStream(file).pipe(stream);
            var blobStream = ss.createBlobReadStream(file);
            var tot_1 = 0;
            blobStream.on('data', function (chunk) {
                tot_1 += chunk.length;
                this.progressSize = Math.floor(tot_1 / file.size * 100);
            });
            blobStream.pipe(stream);
        }
        var reader = new FileReader();
        reader.addEventListener("load", function () { return _this.sentImage(reader.result); }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    ChatContainerComponent.prototype.sentImage = function (img) {
        var message = {
            image: img,
            time: this.formatAMPM(new Date()),
            me: true
        };
        this.messages.push(message);
    };
    ChatContainerComponent.prototype.formatAMPM = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ChatContainerComponent.prototype.contextmenushow = function (ev) {
        this.contextMenu.css({
            left: ev.pageX,
            top: ev.pageY
        })
            .hide()
            .slideDown(300);
        return false;
    };
    ChatContainerComponent.prototype.contextmenuhide = function (ev) {
        this.contextMenu.slideUp(300);
    };
    ChatContainerComponent.prototype.toggleEmojiTray = function () {
        $('#emoji-tray').toggle('slide', { direction: 'down' });
    };
    ChatContainerComponent.prototype.parseEmoji = function (emoji) {
        return twemoji.parse(emoji, function (icon, options, variant) {
            return 'assets/emojis/' + icon + '.svg';
        });
    };
    ChatContainerComponent.prototype.insertEmoji = function (emoji) {
        this.chatmsg += emoji;
        $("#type-message").focus();
    };
    return ChatContainerComponent;
}());
ChatContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'chat-container',
        template: __webpack_require__(287),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* PushNotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* PushNotificationsService */]) === "function" && _a || Object])
], ChatContainerComponent);

var _a;
//# sourceMappingURL=chat-container.component.js.map

/***/ })

},[560]);
//# sourceMappingURL=main.bundle.js.map