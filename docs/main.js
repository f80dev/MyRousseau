(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-content class=\"app-card-content\">\n    My Rousseau Automobile est une maquette partiellement fonctionnelle\n    d'une application de fidélisation destinée au concessionnaire automobile.<br><br>\n    Elle est la propriété de <a href=\"https://f80.fr\" target=\"_blank\">F80</a>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/address/address.component.css":
/*!***********************************************!*\
  !*** ./src/app/address/address.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/address/address.component.html":
/*!************************************************!*\
  !*** ./src/app/address/address.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe #out\r\n        src=\"{{url | safe:'resourceUrl'}}\"\r\n        style=\"width:100%;height:100%;border:none;\"\r\n        >\r\n</iframe>\r\n"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
        this.url = "http://www.rousseau-auto.com/groupe-rousseau/groupe-rousseau.php";
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent.prototype.clearframe = function () {
        //clear(this.out.nativeElement,"//*[@id=\"main-content\"]")
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-icon {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.gift-picture {\r\n  width:50px;\r\n  height:50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"secondary\" (click)=\"raz()\">RAZ</button>\n<button mat-raised-button color=\"secondary\" (click)=\"admin()\">Admin</button>\n\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Rendez-vous\n    </mat-panel-title>\n    <mat-panel-description>\n      Liste des demandes de rendez-vous\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n</mat-expansion-panel>\n\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Utilisateurs\n    </mat-panel-title>\n    <mat-panel-description>\n      Liste des utilisateurs\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <mat-selection-list #sel_users>\n    <mat-list-option *ngFor=\"let user of users\">\n      <mat-icon mat-list-icon>people</mat-icon>\n      {{user.email}} - {{user.fidelity}}\n    </mat-list-option>\n  </mat-selection-list>\n</mat-expansion-panel>\n\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Cadeaux\n    </mat-panel-title>\n    <mat-panel-description>\n      Liste des cadeaux attribuables\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n\n\n    <mat-selection-list #sel_gift>\n      <mat-list-option  *ngFor=\"let gift of gifts\">\n        <img mat-list-avatar src=\"{{gift.picture}}\">\n        <span mat-line>{{gift.message}}</span>\n      </mat-list-option>\n    </mat-selection-list>\n\n</mat-expansion-panel>\n\n<br><br>\n<button mat-raised-button color=\"primary\">Attribuer cadeaux</button>\n\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(api, rooter) {
        this.api = api;
        this.rooter = rooter;
        this.users = [];
        this.gifts = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getusers().subscribe(function (l) {
            _this.users = l.items;
        });
        this.gifts = [
            { message: "des pneus offert", picture: "https://staticjn.1001pneus.fr/images/profils/ProfilsGoogle/ENERGY_SAVER.png" },
            { message: "une vidange offerte", picture: "https://nitifilter.com/wp-content/uploads/2015/08/20952739_l-1288x724.jpg" },
            { message: "une voiture de sport pendant un weekend", picture: "https://www.auto-forever.com/wp-content/uploads/2015/07/Boxster_1996-2002_2-1030x773.jpg" }
        ];
    };
    AdminComponent.prototype.raz = function () {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        this.api.raz();
        location.href = "/login";
    };
    AdminComponent.prototype.admin = function () {
        document.location.href = "http://localhost:8080/_ah/admin";
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ "./src/app/tools.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.add = function (user, firstname, lastname, dtlastnotif, modele) {
        if (modele === void 0) { modele = ""; }
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("adduser", "dtlastnotif=" + dtlastnotif + "&email=" + user + "&firstname=" + firstname + "&lastname=" + lastname + "&modele=" + modele));
    };
    ApiService.prototype.raz = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("raz", "")).subscribe(function () { });
    };
    ApiService.prototype.getcar = function (modele) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getcar", "modele=" + modele));
    };
    ApiService.prototype.login = function (email, password) {
        if (password === void 0) { password = ""; }
        var complete = "";
        if (password != null)
            complete = "&password=" + password;
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("login", "email=" + email + complete));
    };
    ApiService.prototype.getusers = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getusers", ""));
    };
    ApiService.prototype.getappointments = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getappointments", ""));
    };
    ApiService.prototype.getservices = function (modele) {
        if (modele === void 0) { modele = null; }
        if (modele == null)
            return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getservices", ""));
        else
            return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getservices", "modele=" + modele));
    };
    ApiService.prototype.addgift = function (user, gift) {
        return this.http.post(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("addgift", "email=" + user), gift);
    };
    ApiService.prototype.getgifts = function (email) {
        if (email == null)
            email = "null";
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getgifts", "email=" + email));
    };
    ApiService.prototype.loginService = function (service) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["direct_api"])("api/connectTo", "service=" + service + "&domain=" + location.host));
    };
    ApiService.prototype.getmodeles = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getmodeles", ""));
    };
    ApiService.prototype.resend_code = function (email) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("resend_code", "email=" + email));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _gift_gift_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gift/gift.component */ "./src/app/gift/gift.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "./src/app/catalogue/catalogue.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _preferences_preferences_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./preferences/preferences.component */ "./src/app/preferences/preferences.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"] },
    { path: 'schedule/:motif', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"] },
    { path: 'gift', component: _gift_gift_component__WEBPACK_IMPORTED_MODULE_4__["GiftComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'connectTo', redirectTo: "/api/connectTo" },
    { path: 'preferences', component: _preferences_preferences_component__WEBPACK_IMPORTED_MODULE_13__["PreferencesComponent"] },
    { path: 'login/:email/:password', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'login/:email', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"] },
    { path: 'services/:modele', component: _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"] },
    { path: 'newuser', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"] },
    { path: 'catalogue/:url', component: _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_8__["CatalogueComponent"] },
    { path: 'catalogue', component: _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_8__["CatalogueComponent"] },
    { path: 'start', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"] },
    { path: 'share', component: _share_share_component__WEBPACK_IMPORTED_MODULE_10__["ShareComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(api, userService, router, route) {
        this.api = api;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.title = 'my Rousseau Automobile';
        this.login = "login";
    }
    AppComponent.prototype.ngOnInit = function () {
        //if(localStorage.getItem("email")==null)this.router.navigate(["/login"]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "./src/app/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _gift_gift_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gift/gift.component */ "./src/app/gift/gift.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _car_picker_car_picker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./car-picker/car-picker.component */ "./src/app/car-picker/car-picker.component.ts");
/* harmony import */ var _next_appointment_next_appointment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./next-appointment/next-appointment.component */ "./src/app/next-appointment/next-appointment.component.ts");
/* harmony import */ var _light_profil_light_profil_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./light-profil/light-profil.component */ "./src/app/light-profil/light-profil.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "./src/app/catalogue/catalogue.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _preferences_preferences_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./preferences/preferences.component */ "./src/app/preferences/preferences.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["MyDashboardComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_12__["ScheduleComponent"],
                _gift_gift_component__WEBPACK_IMPORTED_MODULE_13__["GiftComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_20__["NewUserComponent"],
                _profil_profil_component__WEBPACK_IMPORTED_MODULE_21__["ProfilComponent"],
                _car_picker_car_picker_component__WEBPACK_IMPORTED_MODULE_22__["CarPickerComponent"],
                _next_appointment_next_appointment_component__WEBPACK_IMPORTED_MODULE_23__["NextAppointmentComponent"],
                _light_profil_light_profil_component__WEBPACK_IMPORTED_MODULE_24__["LightProfilComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_25__["TimerComponent"],
                _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_26__["CatalogueComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_27__["AddressComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_28__["SafePipe"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_29__["ShareComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_31__["ServicesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_33__["WelcomeComponent"],
                _preferences_preferences_component__WEBPACK_IMPORTED_MODULE_37__["PreferencesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_36__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_30__["DeviceDetectorModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_6__["AmazingTimePickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_35__["environment"].production })
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car-picker/car-picker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/car-picker/car-picker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/car-picker/car-picker.component.html":
/*!******************************************************!*\
  !*** ./src/app/car-picker/car-picker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h4>Ajouter un véhicule:</h4>\n\n  <mat-select placeholder=\"Marque\" [(ngModel)]=\"selMarque\" (selectionChange)=\"changeMarque()\">\n    <mat-option *ngFor=\"let m of marques\" [value]=\"m\" style=\"height: 50px;\">\n\n      <table style=\"height: 100%;vertical-align: middle;padding: 0px;margin:0px;\"><tr>\n        <td><img [src]=\"m.icon\" style=\"margin:0px;height:35px;width:35px;\"></td>\n        <td><div style=\"display: inline-block;\">{{m.name}}</div></td>\n      </tr></table>\n\n    </mat-option>\n  </mat-select>\n\n<br>\n\n  <mat-select *ngIf=\"selMarque!=null\" placeholder=\"Reference\" [(ngModel)]=\"selRef\">\n    <mat-option *ngFor=\"let ref of references\" [value]=\"ref.reference\" style=\"height: 50px;\">\n      <table style=\"padding: 0px;margin:0px;\"><tr style=\"vertical-align: top\">\n        <td><img [src]=\"ref.icon\" style=\"object-fit:contain;height:35px;width:45px;\"></td>\n        <td><span>{{ref.reference}}</span></td>\n      </tr></table>\n\n    </mat-option>\n  </mat-select>\n\n<br>\n\n<button *ngIf=\"selRef!=null && selMarque!=null\" mat-button mat-raised-button (click)=\"selCar()\">Confirmer</button>\n</div>\n"

/***/ }),

/***/ "./src/app/car-picker/car-picker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/car-picker/car-picker.component.ts ***!
  \****************************************************/
/*! exports provided: CarPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarPickerComponent", function() { return CarPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarPickerComponent = /** @class */ (function () {
    function CarPickerComponent(api) {
        this.api = api;
        this.marques = [];
        this.references = [];
        this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selMarque = null;
        this.selRef = null;
    }
    CarPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getmodeles().subscribe(function (ms) {
            _this.modeles = ms;
            ms.forEach(function (m) {
                if (_this.marques.indexOf(m.marque) == -1)
                    _this.marques.push(m.marque);
            });
        });
    };
    CarPickerComponent.prototype.changeMarque = function () {
        var _this = this;
        this.selRef = null;
        this.modeles.forEach(function (m) {
            if (m.marque == _this.selMarque)
                _this.references = m.modeles;
        });
    };
    CarPickerComponent.prototype.selCar = function (ref) {
        this.onclick.emit({ car: this.selMarque.name + "/" + this.selRef });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onclick'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CarPickerComponent.prototype, "onclick", void 0);
    CarPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-picker',
            template: __webpack_require__(/*! ./car-picker.component.html */ "./src/app/car-picker/car-picker.component.html"),
            styles: [__webpack_require__(/*! ./car-picker.component.css */ "./src/app/car-picker/car-picker.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CarPickerComponent);
    return CarPickerComponent;
}());



/***/ }),

/***/ "./src/app/catalogue/catalogue.component.css":
/*!***************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/catalogue/catalogue.component.html":
/*!****************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe *ngIf=\"url!=null && url.length>0\"\n        style=\"width:100%;border: None;height:100%;\"\n        [src]=\"url | safe:'resourceUrl'\">\n</iframe>\n"

/***/ }),

/***/ "./src/app/catalogue/catalogue.component.ts":
/*!**************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.ts ***!
  \**************************************************/
/*! exports provided: CatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function() { return CatalogueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogueComponent = /** @class */ (function () {
    function CatalogueComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.url = "https://" + params["url"] + "/";
            if (params["url"] == "faq")
                _this.url = "/faq.html";
            if (params["url"] == "loc")
                _this.url = "https://www.salvaloc.fr/";
        });
    }
    CatalogueComponent.prototype.ngOnInit = function () {
    };
    CatalogueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalogue',
            template: __webpack_require__(/*! ./catalogue.component.html */ "./src/app/catalogue/catalogue.component.html"),
            styles: [__webpack_require__(/*! ./catalogue.component.css */ "./src/app/catalogue/catalogue.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CatalogueComponent);
    return CatalogueComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ConfigService = /** @class */ (function () {
    function ConfigService(location, http) {
        this.location = location;
        this.http = http;
    }
    ConfigService.prototype.logo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfig()];
                    case 1:
                        conf = _a.sent();
                        return [2 /*return*/, Promise.resolve(conf.logo)];
                }
            });
        });
    };
    ConfigService.prototype.init = function () {
        var _this = this;
        this.getConfig().then(function (r) {
            _this.values = r;
        });
    };
    ConfigService.prototype.getConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.config) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.http.get(this.location.prepareExternalUrl('/assets/config.json')).toPromise()];
                    case 1:
                        _a.config = (_b.sent());
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this.config)];
                }
            });
        });
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addressForm\" novalidate>\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Shipping Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Company\" formControlName=\"company\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('required')\">\n              First name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('required')\">\n              Last name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n            <mat-error *ngIf=\"addressForm.controls['address'].hasError('required')\">\n              Address is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!hasUnitNumber\">\n        <div class=\"col\">\n          <button mat-button type=\"button\" (click)=\"hasUnitNumber = !hasUnitNumber\">\n            + Add C/O, Apt, Suite, Unit\n          </button>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"hasUnitNumber\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"City\" formControlName=\"city\">\n            <mat-error *ngIf=\"addressForm.controls['city'].hasError('required')\">\n              City is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-select placeholder=\"State\" formControlName=\"state\">\n              <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                {{ state.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"addressForm.controls['state'].hasError('required')\">\n              State is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-radio-group formControlName=\"shipping\">\n            <mat-radio-button value=\"free\">Free Shipping</mat-radio-button>\n            <mat-radio-button value=\"priority\">Priority Shipping</mat-radio-button>\n            <mat-radio-button value=\"nextday\">Next Day Shipping</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.addressForm = this.fb.group({
            company: null,
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: null,
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)],
            shipping: ['free', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.states = [
            { name: 'Alabama', abbreviation: 'AL' },
            { name: 'Alaska', abbreviation: 'AK' },
            { name: 'American Samoa', abbreviation: 'AS' },
            { name: 'Arizona', abbreviation: 'AZ' },
            { name: 'Arkansas', abbreviation: 'AR' },
            { name: 'California', abbreviation: 'CA' },
            { name: 'Colorado', abbreviation: 'CO' },
            { name: 'Connecticut', abbreviation: 'CT' },
            { name: 'Delaware', abbreviation: 'DE' },
            { name: 'District Of Columbia', abbreviation: 'DC' },
            { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
            { name: 'Florida', abbreviation: 'FL' },
            { name: 'Georgia', abbreviation: 'GA' },
            { name: 'Guam', abbreviation: 'GU' },
            { name: 'Hawaii', abbreviation: 'HI' },
            { name: 'Idaho', abbreviation: 'ID' },
            { name: 'Illinois', abbreviation: 'IL' },
            { name: 'Indiana', abbreviation: 'IN' },
            { name: 'Iowa', abbreviation: 'IA' },
            { name: 'Kansas', abbreviation: 'KS' },
            { name: 'Kentucky', abbreviation: 'KY' },
            { name: 'Louisiana', abbreviation: 'LA' },
            { name: 'Maine', abbreviation: 'ME' },
            { name: 'Marshall Islands', abbreviation: 'MH' },
            { name: 'Maryland', abbreviation: 'MD' },
            { name: 'Massachusetts', abbreviation: 'MA' },
            { name: 'Michigan', abbreviation: 'MI' },
            { name: 'Minnesota', abbreviation: 'MN' },
            { name: 'Mississippi', abbreviation: 'MS' },
            { name: 'Missouri', abbreviation: 'MO' },
            { name: 'Montana', abbreviation: 'MT' },
            { name: 'Nebraska', abbreviation: 'NE' },
            { name: 'Nevada', abbreviation: 'NV' },
            { name: 'New Hampshire', abbreviation: 'NH' },
            { name: 'New Jersey', abbreviation: 'NJ' },
            { name: 'New Mexico', abbreviation: 'NM' },
            { name: 'New York', abbreviation: 'NY' },
            { name: 'North Carolina', abbreviation: 'NC' },
            { name: 'North Dakota', abbreviation: 'ND' },
            { name: 'Northern Mariana Islands', abbreviation: 'MP' },
            { name: 'Ohio', abbreviation: 'OH' },
            { name: 'Oklahoma', abbreviation: 'OK' },
            { name: 'Oregon', abbreviation: 'OR' },
            { name: 'Palau', abbreviation: 'PW' },
            { name: 'Pennsylvania', abbreviation: 'PA' },
            { name: 'Puerto Rico', abbreviation: 'PR' },
            { name: 'Rhode Island', abbreviation: 'RI' },
            { name: 'South Carolina', abbreviation: 'SC' },
            { name: 'South Dakota', abbreviation: 'SD' },
            { name: 'Tennessee', abbreviation: 'TN' },
            { name: 'Texas', abbreviation: 'TX' },
            { name: 'Utah', abbreviation: 'UT' },
            { name: 'Vermont', abbreviation: 'VT' },
            { name: 'Virgin Islands', abbreviation: 'VI' },
            { name: 'Virginia', abbreviation: 'VA' },
            { name: 'Washington', abbreviation: 'WA' },
            { name: 'West Virginia', abbreviation: 'WV' },
            { name: 'Wisconsin', abbreviation: 'WI' },
            { name: 'Wyoming', abbreviation: 'WY' }
        ];
    }
    ContactComponent.prototype.onSubmit = function () {
        alert('Thanks!');
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/gift/gift.component.css":
/*!*****************************************!*\
  !*** ./src/app/gift/gift.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gift/gift.component.html":
/*!******************************************!*\
  !*** ./src/app/gift/gift.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"gifts!=null && gifts.length>0\" class=\"app-card\">\n  <mat-card-header style=\"margin-bottom: 10px;\">\n      Promotions / cadeaux\n  </mat-card-header>\n\n  <mat-card-content class=\"\">\n\n    <div *ngIf=\"!icon_view\" fxLayout=\"row wrap\">\n        <div class=\"flip-card\" *ngFor=\"let gift of gifts\" style=\"margin-bottom:8px;position:relative;height:400px;width:100%;overflow: hidden;\">\n          <div class=\"flip-card-inner\">\n            <div class=\"flip-card-front\">\n              <img src=\"{{gift.picture}}\" style=\"position:absolute;left:0;top:0;object-fit: cover;\">\n              <div [ngStyle]=\"{'position':'absolute','text-align':'center','left':'20%','top':'15%','width':'60%','font-size':'2.5vmax','color':gift.messageColor}\">\n                {{gift.message}}\n              </div>\n              <button mat-raised-button\n                      style=\"position:absolute;left:30%;top:70%;width:40%;font-size:1.5vmax;\"\n                      (click)=\"useGift($event,gift)\">\n                J'en profite\n              </button>\n\n              <div [ngStyle]=\"{'position':'absolute','text-align':'center','left':'35%','top':'82%','width':'30%','font-size':'1.3vmax','color':gift.messageColor}\">\n                Il reste&nbsp;<app-timer [end]=\"gift.dtEnd\"></app-timer>\n              </div>\n            </div>\n            <div class=\"flip-card-back\">\n              <div style=\"vertical-align: middle;text-align: center;\">\n                {{gift.manual}}\n              </div>\n            </div>\n          </div>\n\n        </div>\n    </div>\n\n    <mat-selection-list #sel_gift *ngIf=\"icon_view\">\n      <mat-list-option  *ngFor=\"let gift of gifts\">\n        <img mat-list-avatar src=\"{{gift.icon}}\">\n        <span mat-line>{{gift.message}}</span>\n      </mat-list-option>\n    </mat-selection-list>\n\n    <mat-card-actions>\n    </mat-card-actions>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/gift/gift.component.ts":
/*!****************************************!*\
  !*** ./src/app/gift/gift.component.ts ***!
  \****************************************/
/*! exports provided: GiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftComponent", function() { return GiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _push_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../push-notifications.service */ "./src/app/push-notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GiftComponent = /** @class */ (function () {
    function GiftComponent(_notificationService, snackBar, api, userService) {
        this._notificationService = _notificationService;
        this.snackBar = snackBar;
        this.api = api;
        this.userService = userService;
        this.gifts = [];
        this.dtStart = 0;
        this.dtEnd = 0;
        this.userFilter = "";
        this.icon_view = false;
    }
    GiftComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    GiftComponent.prototype.refresh = function () {
        var _this = this;
        this.api.getgifts(localStorage.getItem("email")).subscribe(function (r) {
            _this.gifts = [];
            r.items.forEach(function (i) {
                if ((i.dtStart >= _this.dtStart || _this.dtStart == 0) && (i.dtEnd >= _this.dtEnd || _this.dtEnd == 0)) {
                    if (_this.userService.user.dtLastNotif < i.dtCreate) {
                        _this._notificationService.generateNotification([{
                                "title": "Promotion",
                                "alertContent": i.message,
                                "icon": i.picture,
                                "tag": "promotion"
                            }]);
                    }
                    _this.gifts.push(i);
                }
            });
        });
    };
    GiftComponent.prototype.useGift = function (evt, gift) {
        var _this = this;
        this.snackBar.open(gift.manual, "", { duration: 5000 });
        setTimeout(function () {
            _this.userService.addgift(gift.id).subscribe(function () {
                _this.refresh();
            });
        }, 2000);
        var elt = evt.target.parentElement.parentElement;
        while (elt.className.indexOf("flip-card-inner") == -1)
            elt = elt.parentElement;
        elt.className += " flip-card-reback";
        //
        // elt.parentElement.parentElement.parentElement.addEventListener("mouseleave",()=>{
        //   elt.parentElement.parentElement.parentElement.parentElement.className="flip-card-inner";
        // });
        // elt.parentElement.parentElement.parentElement.parentElement.addEventListener("tap",()=>{
        //   elt.parentElement.parentElement.parentElement.parentElement.className="flip-card-inner";
        // });
        setTimeout(function () {
            elt.parentElement.parentElement.parentElement.parentElement.className = "flip-card-inner";
        }, 6000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GiftComponent.prototype, "dtStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GiftComponent.prototype, "dtEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GiftComponent.prototype, "userFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GiftComponent.prototype, "icon_view", void 0);
    GiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gift',
            template: __webpack_require__(/*! ./gift.component.html */ "./src/app/gift/gift.component.html"),
            styles: [__webpack_require__(/*! ./gift.component.css */ "./src/app/gift/gift.component.css")]
        }),
        __metadata("design:paramtypes", [_push_notifications_service__WEBPACK_IMPORTED_MODULE_4__["PushNotificationsService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], GiftComponent);
    return GiftComponent;
}());



/***/ }),

/***/ "./src/app/light-profil/light-profil.component.css":
/*!*********************************************************!*\
  !*** ./src/app/light-profil/light-profil.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/light-profil/light-profil.component.html":
/*!**********************************************************!*\
  !*** ./src/app/light-profil/light-profil.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header style=\"margin-left:-10px;\">\n    <table style=\"width:100%;\">\n      <tr style=\"vertical-align: middle;\">\n      <td style=\"text-align: left;\">\n        <img class=\"avatar\" src=\"{{userService.user.photo}}\">\n      </td>\n      <td style=\"text-align: left;padding:0px;margin:0px;\">\n        <div *ngIf=\"userService.user.cars!=null\">\n          <strong>Ma {{userService.user.cars[0].modele}}</strong><br>\n          {{userService.user.firstname}} {{userService.user.lastname}}\n        </div>\n          <app-car-picker *ngIf=\"userService.user.cars==null\" (onclick)=\"selcar($event)\"></app-car-picker>\n      </td>\n      <td style=\"text-align:right;font-size: 4.5vw;\">\n        {{userService.user.pts}}\n        <span style=\"font-size: 2.5vw;\">pts</span>&nbsp;\n      </td>\n    </tr></table>\n  </mat-card-header>\n\n  <mat-card-content class=\"app-card-content\">\n    <div *ngIf=\"userService.user.cars!=null\" style=\"position:relative;width:100%;\">\n      <img\n           style=\"width:100%;max-width:700px;\"\n           src=\"{{userService.user.cars[0].photo}}\"\n           alt=\"My Car\">\n      <div *ngIf=\"userService.user.cars!=null\" style=\"position:absolute;left:90%;top:0px;width:8%;width:50px;\">\n        <button class=\"button-image-toolbar\" mat-icon-button (click)=\"deleteCar()\"><mat-icon>remove_circle</mat-icon></button>\n        <button class=\"button-image-toolbar\" mat-icon-button (click)=\"addcar()\"><mat-icon>add_circle</mat-icon></button>\n        <button class=\"button-image-toolbar\" mat-icon-button (click)=\"takephoto()\"><mat-icon>camera</mat-icon></button>\n      </div>\n    </div>\n    <br>\n    <button *ngIf=\"userService.user.cars!=null\" mat-button mat-raised-button (click)=\"linkServices()\">Services</button>\n    {{userService.user.message}}\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/light-profil/light-profil.component.ts":
/*!********************************************************!*\
  !*** ./src/app/light-profil/light-profil.component.ts ***!
  \********************************************************/
/*! exports provided: LightProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightProfilComponent", function() { return LightProfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightProfilComponent = /** @class */ (function () {
    function LightProfilComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LightProfilComponent.prototype.ngOnInit = function () {
    };
    LightProfilComponent.prototype.selcar = function (evt) {
        var _this = this;
        this.userService.addcar(evt.car).subscribe(function (r) {
            _this.userService.set(r);
        });
    };
    LightProfilComponent.prototype.deleteCar = function () {
        var _this = this;
        this.userService.delcar(0).subscribe(function (r) {
            _this.userService.set(r);
        });
    };
    LightProfilComponent.prototype.linkServices = function () {
        this.router.navigate(["services", this.userService.user.cars[0].modele]);
    };
    LightProfilComponent.prototype.addcar = function () {
    };
    LightProfilComponent.prototype.takephoto = function () {
    };
    LightProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-light-profil',
            template: __webpack_require__(/*! ./light-profil.component.html */ "./src/app/light-profil/light-profil.component.html"),
            styles: [__webpack_require__(/*! ./light-profil.component.css */ "./src/app/light-profil/light-profil.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LightProfilComponent);
    return LightProfilComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.button-identity-provider {\r\n  margin-bottom:15px;\r\n  width:150px;\r\n  background-color:lightgrey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <br><br>\n  <mat-card class=\"app-card\" style=\"margin-top:0\">\n    <mat-card-content *ngIf=\"config.values\">\n      <img *ngIf=\"deviceService.isMobile()\" style=\"width:90%\" src=\"{{config.values.logo}}\">\n      <h1>Se connecter</h1>\n      <h4>via</h4>\n      <button *ngIf=\"config.values.authent.google\"\n              class=\"button-identity-provider\"\n              mat-raised-button\n              (click)=\"loginService('contact')\">\n        Google\n      </button>\n      <br>\n\n      <!--<button class=\"button-identity-provider\" mat-raised-button >Facebook</button><br>-->\n      <button *ngIf=\"config.values.authent.linkedin\"\n              class=\"button-identity-provider\"\n              mat-raised-button\n              (click)=\"loginService('linkedin')\">\n        Linkedin\n      </button>\n\n      <div *ngIf=\"config.values.authent.email\">\n        <br>\n        <h4>ou directement avec</h4>\n        <mat-form-field class=\"example-form-field\">\n          <input matInput type=\"email\" placeholder=\"Votre email\" [(ngModel)]=\"email\" (keypress)=\"keypress($event)\" class=\"input-style\">\n          <button mat-button *ngIf=\"email\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearEmail()\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </mat-form-field>\n\n        <br>\n        <mat-form-field *ngIf=\"showPassword && email!=null && email.length>0\" class=\"input-style\">\n          <input name=\"password\" placeholder=\"votre code à 4 chiffres\"\n                 [(ngModel)]=\"password\" matInput type=\"password\"\n                 [maxlength]=\"4\" (keypress)=\"keypress($event)\">\n          <button mat-button matSuffix mat-icon-button\n                  *ngIf=\"password\"\n                  aria-label=\"Clear\"\n                  (click)=\"password=''\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </mat-form-field>\n\n        <div *ngIf=\"showResendCode\">\n          Votre code est incorrect, Il vous à été envoyé dans votre boite mail<br>\n          <button mat-raised-button\n                  (click)=\"resend_code()\">\n            Renvoyer le code\n          </button>\n          <br>\n        </div>\n\n        <br>\n        <button *ngIf=\"email!=null && email.length>0 && email.split('@').length>1\"\n                mat-raised-button\n                (click)=\"login(true)\">\n          Login\n        </button>\n\n      </div>\n\n\n    </mat-card-content>\n\n  </mat-card>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(deviceService, userService, config, api, router, routes) {
        this.deviceService = deviceService;
        this.userService = userService;
        this.config = config;
        this.api = api;
        this.router = router;
        this.routes = routes;
        this.showPassword = false;
        this.email = "";
        this.password = "";
        this.showResendCode = false;
        this.handleLogin = null;
        config.init();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = localStorage.getItem("email") || this.routes.snapshot.queryParamMap.get("email");
        if (this.email == "null")
            this.email = null;
        this.password = localStorage.getItem("password") || this.routes.snapshot.queryParamMap.get("password");
        if (this.email != null && this.password != null) {
            setTimeout(function () { _this.login(); }, 1000);
        }
    };
    LoginComponent.prototype.login = function (manual) {
        var _this = this;
        if (manual === void 0) { manual = false; }
        localStorage.setItem("email", this.email);
        this.api.login(this.email, this.password).subscribe(function (r) {
            if (!_this.showPassword) {
                if (r == null) {
                    if (manual)
                        _this.router.navigate(['/newuser'], { queryParams: { email: _this.email } });
                }
                else
                    _this.showPassword = true;
            }
            else {
                if (r != null) {
                    clearInterval(_this.handleLogin);
                    localStorage.setItem("password", _this.password);
                    _this.userService.init(_this.email);
                    _this.router.navigate(["start"]);
                }
                else {
                    if (_this.password != null) {
                        _this.showResendCode = true;
                    }
                }
            }
        });
    };
    LoginComponent.prototype.clearEmail = function () {
        this.email = "";
        this.showPassword = false;
    };
    LoginComponent.prototype.keypress = function ($event) {
        if ($event.keyCode == 13) {
            this.login(true);
        }
    };
    LoginComponent.prototype.loginService = function (service) {
        var _this = this;
        debugger;
        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["openGeneral"])(service, location.host).then(function (data) {
            _this.email = data.email;
            _this.password = data.password;
            clearInterval(_this.handleLogin);
            _this.handleLogin = setInterval(function () {
                _this.showPassword = true;
                _this.login();
            }, 1000);
        });
    };
    LoginComponent.prototype.resend_code = function () {
        var _this = this;
        this.api.resend_code(this.email).subscribe(function () {
            _this.showPassword = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-photo {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.identity-card {\r\n  max-width: 500px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bigScreen\">\n  <table style=\"width: 100%;\">\n    <tr style=\"vertical-align: top;\">\n    <td style=\"width:50%\">\n      <app-welcome *ngIf=\"userService.user.connexions!=null && userService.user.connexions.length<3\"></app-welcome>\n      <app-light-profil></app-light-profil><br>\n      <app-next-appointment></app-next-appointment>\n    </td>\n      <td>\n        <app-gift></app-gift>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<div *ngIf=\"!bigScreen\">\n  <app-welcome *ngIf=\"userService.user.connexions!=null && userService.user.connexions.length<3\"></app-welcome>\n  <app-light-profil></app-light-profil><br>\n  <app-next-appointment></app-next-appointment>\n  <app-gift></app-gift>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(bkob, api, userService, router) {
        var _this = this;
        this.api = api;
        this.userService = userService;
        this.router = router;
        this.user = {};
        this.bigScreen = true;
        bkob.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].TabletPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].WebPortrait]).subscribe(function (result) {
            _this.bigScreen = !result.matches;
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.init(localStorage.getItem("email"), function () {
            _this.api.login(localStorage.getItem("email"), localStorage.getItem("password")).subscribe(function (r) {
                if (r == null)
                    _this.router.navigate(["login"]);
            });
        }, function () {
            _this.router.navigate(["login"]);
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.main-logo{\n  height:70%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button\n    type=\"button\"\n    aria-label=\"Toggle sidenav\"\n    mat-icon-button\n    (click)=\"drawer.toggle()\"\n    *ngIf=\"isHandset$ | async\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <span class=\"fill-remaining-space\"></span>\n  <button  *ngIf=\"userService.user!=null && userService.user.email!=null\" mat-raised-button color=\"primary\" (click)=\"logout()\">Déconnecter</button>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\" *ngIf=\"config.values!=null\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\" *ngIf=\"config.values\">\n      <img class=\"main-logo\" src=\"{{config.values.logo}}\">\n    </mat-toolbar>\n    <mat-nav-list>\n      <a *ngIf=\"userService.user==null || userService.user.email==null\" mat-list-item routerLink=\"/login\">\n        <mat-icon>person</mat-icon>\n        &nbsp;&nbsp;Login\n      </a>\n\n      <a *ngIf=\"userService.user!=null && userService.user.email!=null && config.values.menu.dashboard.visible\" mat-list-item routerLink=\"/main\">\n        <mat-icon>dns</mat-icon>\n        &nbsp;&nbsp;Dashboard\n      </a>\n\n      <a *ngIf=\"userService.user!=null && userService.user.email!=null && config.values.menu.schedule.visible\" mat-list-item routerLink=\"/schedule\">\n        <mat-icon>schedule</mat-icon>\n        &nbsp;&nbsp;Rendez-vous\n      </a>\n\n      <a *ngIf=\"userService.user!=null && userService.user.email!=null  && config.values.menu.gift.visible\" mat-list-item routerLink=\"/gift\">\n        <mat-icon>cake</mat-icon>\n        &nbsp;&nbsp;Récompenses\n      </a>\n\n      <a *ngIf=\"config.values.menu.services.visible\" mat-list-item routerLink=\"/services\"><mat-icon>build</mat-icon>&nbsp;&nbsp;Services</a>\n\n      <a *ngIf=\"userService.user!=null && userService.user.email!=null && config.values.menu.profil.visible\" mat-list-item routerLink=\"/preferences\">\n        <mat-icon>settings</mat-icon>\n        &nbsp;&nbsp;Mon profil\n      </a>\n      <br>\n\n      <a mat-list-item routerLink=\"/catalogue/loc\"><mat-icon>collections</mat-icon>&nbsp;&nbsp;Location</a>\n      <a mat-list-item routerLink=\"/contact\"><mat-icon>phone_in_talk</mat-icon>&nbsp;&nbsp;Contacter</a>\n\n      <br>\n      <a mat-list-item routerLink=\"/catalogue/faq\"><mat-icon>help</mat-icon>&nbsp;&nbsp;FAQ</a>\n      <a mat-list-item routerLink=\"/share\"><mat-icon>person_add</mat-icon>&nbsp;&nbsp;Inviter</a>\n      <a mat-list-item routerLink=\"/about\"><mat-icon>account_balance</mat-icon>&nbsp;&nbsp;A propos</a>\n      <br><br><br>\n      <a mat-list-item routerLink=\"/admin\"><mat-icon>build</mat-icon>&nbsp;&nbsp;Admin</a>\n      <a mat-list-item routerLink=\"/catalogue/server.f80.fr\"><mat-icon>build</mat-icon>&nbsp;&nbsp;CRM</a>\n      <div style=\"width:100%;text-align: left;font-size: small;\">&nbsp;&nbsp;&nbsp;version:{{version}}</div>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuComponent = /** @class */ (function () {
    function MenuComponent(config, userService, breakpointObserver, router) {
        var _this = this;
        this.config = config;
        this.userService = userService;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.version = "";
        this.logo = "";
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        config.init();
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.isHandset$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
            var a = _a[0], b = _a[1];
            return b && a instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
        })).subscribe(function (_) {
            if (_this.drawer != null)
                _this.drawer.close();
        });
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.userService.init(localStorage.getItem("email"));
    };
    MenuComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(["/login"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])
    ], MenuComponent.prototype, "drawer", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    MyDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dashboard',
            template: __webpack_require__(/*! ./my-dashboard.component.html */ "./src/app/my-dashboard/my-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./my-dashboard.component.css */ "./src/app/my-dashboard/my-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-user/new-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>\n    <h2>Inscrivez vous</h2>\n  </mat-card-header>\n  <mat-card-content class=\"app-card-content\">\n\n    <app-profil [profil]=\"profil\" (onchange)=\"updateProfil($event)\"></app-profil>\n\n    <br><br>\n\n    <div style=\"display:inline;\" *ngIf=\"message!=''\">\n      <p>{{message}}</p>\n    </div>\n\n\n  </mat-card-content>\n  <mat-card-actions style=\"text-align: center\">\n    <button mat-raised-button\n            *ngIf=\"profil.firstname!=null && profil.lastname!=null && profil.firstname.length>0 && profil.lastname.length>0\"\n            (click)=\"sendUser()\">\n      Enregistrer\n    </button>\n    &nbsp;\n    <button mat-raised-button\n            (click)=\"cancel()\">\n      Annuler\n    </button>\n    <br>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.modele = "";
        this.email = "";
        this.profil = { firstname: "", lastname: "", dtLastModif: 1e9 };
        this.carPicture = "";
        this.message = '';
    }
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.email == "") {
            this.route.queryParams.subscribe(function (params) {
                _this.email = params['email'] || "";
                _this.profil.email = _this.email;
            });
        }
    };
    NewUserComponent.prototype.selcar = function (evt) {
        var _this = this;
        this.modele = evt.car;
        this.api.getcar(evt.car).subscribe(function (c) {
            if (c != null)
                _this.carPicture = c.photo;
        });
    };
    NewUserComponent.prototype.updateProfil = function (p) {
        this.profil = p;
    };
    NewUserComponent.prototype.sendUser = function () {
        var _this = this;
        this.api.add(this.email, this.profil.firstname, this.profil.lastname, this.profil.dtLastModif, this.modele).subscribe(function (r) {
            localStorage.setItem("email", r.email);
            _this.message = "Votre code d'accès vient d'être envoyé sur votre mail. Vérifier votre boite " + _this.email;
            setTimeout(function () {
                _this.router.navigate(["login"], { queryParams: { email: _this.email } });
            }, 2000);
        });
    };
    NewUserComponent.prototype.cancel = function () {
        this.router.navigate(["start"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewUserComponent.prototype, "email", void 0);
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/next-appointment/next-appointment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/next-appointment/next-appointment.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/next-appointment/next-appointment.component.html":
/*!******************************************************************!*\
  !*** ./src/app/next-appointment/next-appointment.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>\n    <span *ngIf=\"appointments!=null && appointments.length==0\">\n      Aucun rendez-vous plannifié\n    </span>\n        <span *ngIf=\"appointments!=null && appointments.length>0\">\n      Votre prochain rendez-vous\n    </span>\n  </mat-card-header>\n  <mat-card-content class=\"app-card-content\">\n      <table>\n      <tr *ngFor=\"let app of appointments\">\n        <td>\n          <button style=\"margin-bottom: 10px;\" mat-icon-button (click)=\"cancelAppointment(app)\"><mat-icon>delete</mat-icon></button>\n        </td>\n        <td>\n          Le {{app.dtStart | date:'shortDate'}} à {{app.dtStart | date:'shortTime'}}<br>\n          <span style=\"font-weight:bold;font-size: small\">{{app.motif}}</span>\n        </td>\n      </tr>\n      </table>\n    <mat-card-actions class=\"app-card-content\" *ngIf=\"appointments!=null && appointments.length==0 && new_button\">\n      <button color=\"primary\" mat-raised-button (click)=\"ask_appointment()\">Nouveau rendez-vous</button>\n    </mat-card-actions>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/next-appointment/next-appointment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/next-appointment/next-appointment.component.ts ***!
  \****************************************************************/
/*! exports provided: NextAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextAppointmentComponent", function() { return NextAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NextAppointmentComponent = /** @class */ (function () {
    function NextAppointmentComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.appointments = [];
        this.count = 1;
        this.new_button = true;
    }
    NextAppointmentComponent.prototype.ngOnInit = function () {
    };
    NextAppointmentComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getappointments().subscribe(function (r) {
                _this.appointments = r.items;
                if (_this.count < _this.appointments.length)
                    _this.appointments = _this.appointments.slice(0, _this.count);
            });
        }, 1000);
    };
    NextAppointmentComponent.prototype.ask_appointment = function () {
        this.router.navigate(["schedule"]);
    };
    NextAppointmentComponent.prototype.cancelAppointment = function (app) {
        var _this = this;
        this.userService.cancelappointments(app.id).subscribe(function (r) {
            _this.appointments = r.items;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NextAppointmentComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NextAppointmentComponent.prototype, "new_button", void 0);
    NextAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-next-appointment',
            template: __webpack_require__(/*! ./next-appointment.component.html */ "./src/app/next-appointment/next-appointment.component.html"),
            styles: [__webpack_require__(/*! ./next-appointment.component.css */ "./src/app/next-appointment/next-appointment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], NextAppointmentComponent);
    return NextAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Cette version est une maquette encore en construction.<br>\n  Cette page n'a pas encore été réalisée\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/preferences/preferences.component.css":
/*!*******************************************************!*\
  !*** ./src/app/preferences/preferences.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preferences/preferences.component.html":
/*!********************************************************!*\
  !*** ./src/app/preferences/preferences.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>Préférences</mat-card-header>\n  <mat-card-content class=\"app-card-content\">\n    <app-profil [profil]=\"userService.user\"\n                (onchange)=\"updateProfil($event)\">\n    </app-profil>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/preferences/preferences.component.ts":
/*!******************************************************!*\
  !*** ./src/app/preferences/preferences.component.ts ***!
  \******************************************************/
/*! exports provided: PreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function() { return PreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _push_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../push-notifications.service */ "./src/app/push-notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreferencesComponent = /** @class */ (function () {
    function PreferencesComponent(_pn, userService, api) {
        this._pn = _pn;
        this.userService = userService;
        this.api = api;
    }
    PreferencesComponent.prototype.updateProfil = function (p) {
        var _this = this;
        var dtLastNotif = 1e9;
        if (p.notif) {
            dtLastNotif = new Date().getTime();
            if (this._pn.isSupported())
                this._pn.requestPermission();
        }
        this.api.add(p.email, p.firstname, p.lastname, dtLastNotif).subscribe(function (r) {
            _this.userService.set(r);
        });
    };
    PreferencesComponent.prototype.ngOnInit = function () {
    };
    PreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preferences',
            template: __webpack_require__(/*! ./preferences.component.html */ "./src/app/preferences/preferences.component.html"),
            styles: [__webpack_require__(/*! ./preferences.component.css */ "./src/app/preferences/preferences.component.css")]
        }),
        __metadata("design:paramtypes", [_push_notifications_service__WEBPACK_IMPORTED_MODULE_3__["PushNotificationsService"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PreferencesComponent);
    return PreferencesComponent;
}());



/***/ }),

/***/ "./src/app/profil/profil.component.css":
/*!*********************************************!*\
  !*** ./src/app/profil/profil.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profil/profil.component.html":
/*!**********************************************!*\
  !*** ./src/app/profil/profil.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"input-style\">\n  <input [(ngModel)]=\"profil.email\" [readonly]=\"true\" matInput placeholder=\"Votre email\">\n</mat-form-field>\n<br>\n<mat-form-field class=\"input-style\">\n  <input [(ngModel)]=\"profil.firstname\" matInput placeholder=\"Votre prénom\"\n         (change)=\"onchange.emit(profil)\">\n</mat-form-field>\n<br>\n<mat-form-field class=\"input-style\">\n  <input [(ngModel)]=\"profil.lastname\" matInput placeholder=\"Votre nom\"\n         (change)=\"onchange.emit(profil)\">\n</mat-form-field>\n<br>\n  <mat-checkbox [(ngModel)]=\"profil.notif\"\n                (change)=\"onchange.emit(profil)\">\n    Notifications\n  </mat-checkbox>\n<br><br>\n\n<img class=\"avatar\" [src]=\"config.values.avatar\">&nbsp;\n\n<button mat-raised-button>Modifier la photo</button>\n"

/***/ }),

/***/ "./src/app/profil/profil.component.ts":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(config) {
        this.config = config;
        this.profil = { email: "", firstname: "", lastname: "" };
        this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProfilComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("profil"),
        __metadata("design:type", Object)
    ], ProfilComponent.prototype, "profil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onchange'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProfilComponent.prototype, "onchange", void 0);
    ProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(/*! ./profil.component.html */ "./src/app/profil/profil.component.html"),
            styles: [__webpack_require__(/*! ./profil.component.css */ "./src/app/profil/profil.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ProfilComponent);
    return ProfilComponent;
}());



/***/ }),

/***/ "./src/app/push-notifications.service.ts":
/*!***********************************************!*\
  !*** ./src/app/push-notifications.service.ts ***!
  \***********************************************/
/*! exports provided: PushNotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsService", function() { return PushNotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PushNotificationsService = /** @class */ (function () {
    function PushNotificationsService() {
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    PushNotificationsService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    PushNotificationsService.prototype.requestPermission = function () {
        var self = this;
        if ('Notification' in window) {
            Notification.requestPermission(function (status) {
                return self.permission = status;
            });
        }
    };
    PushNotificationsService.prototype.create = function (title, options) {
        var self = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (obs) {
            if (!('Notification' in window)) {
                console.log('Notifications are not available in this environment');
                obs.complete();
            }
            if (self.permission !== 'granted') {
                console.log("The user hasn't granted you permission to send push notifications");
                obs.complete();
            }
            var _notify = new Notification(title, options);
            _notify.onshow = function (e) {
                return obs.next({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onclick = function (e) {
                return obs.next({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onerror = function (e) {
                return obs.error({
                    notification: _notify,
                    event: e
                });
            };
            _notify.onclose = function () {
                return obs.complete();
            };
        });
    };
    PushNotificationsService.prototype.generateNotification = function (source) {
        var self = this;
        source.forEach(function (item) {
            var options = {
                body: item.alertContent,
                icon: "../assets/img/bell-icon.png"
            };
            var notify = self.create(item.title, options).subscribe();
        });
    };
    PushNotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PushNotificationsService);
    return PushNotificationsService;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-next-appointment count=\"5\" [new_button]=\"false\"></app-next-appointment>\r\n<mat-card class=\"app-card\">\r\n  <mat-card-header>Demander un rendez-vous</mat-card-header><br>\r\n  <mat-card-content class=\"app-card-content\">\r\n    <mat-form-field class=\"input-style\" style=\"width:140px\">\r\n      <input matInput\r\n             [matDatepicker]=\"picker\"\r\n             [(ngModel)]=\"sch_date\"\r\n             placeholder=\"Choisir une date\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>&nbsp;&nbsp;\r\n    à&nbsp;\r\n    <input class=\"time-picker\"\r\n           [(ngModel)]=\"sch_hour\"\r\n           style=\"width: 75px;\"\r\n           atp-time-picker\r\n           onlyHour=\"false\"\r\n           start='09:30'\r\n           end=\"17:30\"\r\n           local=\"fr\"\r\n           value=\"15:00\"/>\r\n\r\n    &nbsp;pendant:&nbsp;\r\n    <mat-select placeholder=\"Durée\" [(ngModel)]=\"duration\" style=\"width: 75px;\">\r\n      <mat-option [value]=\"15\" active>00:15</mat-option>\r\n      <mat-option [value]=\"30\">00:30</mat-option>\r\n      <mat-option [value]=\"60\">01:00</mat-option>\r\n      <mat-option [value]=\"90\">01:30</mat-option>\r\n      <mat-option [value]=\"120\">02:00</mat-option>\r\n    </mat-select>\r\n\r\n    <br>\r\n\r\n    <mat-form-field style=\"width:80%\" class=\"input-style\">\r\n      <input matInput  [(ngModel)]=\"motif\" placeholder=\"Motif\">\r\n    </mat-form-field>\r\n    <br>\r\n    <button mat-raised-button\r\n            *ngIf=\"motif!=null && motif.length>0\"\r\n            color=\"primary\"\r\n            (click)=\"askForAppointment()\">Demander</button>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(router, userService, route) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.dtSchedule = {};
        this.motif = "";
        this.sch_hour = "15:00";
        this.sch_date = "";
        this.duration = 15;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sch_date = new Date(new Date().getTime() + 1000 * 3600 * 24 * 3).toISOString();
        this.route.params.subscribe(function (params) {
            _this.motif = params["motif"];
        });
    };
    ScheduleComponent.prototype.askForAppointment = function () {
        var _this = this;
        var dt = new Date(this.sch_date);
        dt.setHours(parseInt(this.sch_hour.split(":")[0]));
        this.userService.askforappointment(dt.getTime(), this.motif, this.duration).subscribe(function () {
            _this.router.navigate(["main"]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScheduleComponent.prototype, "dtSchedule", void 0);
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-service {\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n  width:100%;\r\n}\r\n\r\n.image-service:hover {\r\n  -webkit-filter:none;\r\n          filter:none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\" style=\"max-width:1000px;text-align: center\">\n<mat-card-content>\n  <h3 *ngIf=\"modele!=null\">Services disponibles pour votre {{modele}} :</h3>\n  <h3 *ngIf=\"modele==null\">Liste de toutes les prestations disponibles</h3>\n  <div *ngFor=\"let service of services\" style=\"position:relative;width:100%;max-width: 1000px;max-height:400px;display: inline-block;overflow: hidden;\">\n    <img src=\"{{service.photo}}\" class=\"image-service\">\n    <div [ngStyle]=\"{'position':'absolute','text-align':'center','left':'20%','top':'15%','width':'60%','font-size':'2.5vmax','color':'white'}\">\n      {{service.label}}\n    </div>\n    <button mat-raised-button\n            style=\"position:absolute;left:35%;top:70%;width:40%;max-width:200px;\"\n            (click)=\"rendezVous(service)\">\n      Rendez-vous\n    </button>\n\n  </div>\n</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(api, router, route) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.services = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.modele = params["modele"];
            _this.api.getservices(_this.modele).subscribe(function (r) {
                _this.services = r;
            });
        });
    };
    ServicesComponent.prototype.rendezVous = function (service) {
        this.router.navigate(["schedule", service.label]);
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/share/share.component.css":
/*!*******************************************!*\
  !*** ./src/app/share/share.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/share.component.html":
/*!********************************************!*\
  !*** ./src/app/share/share.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>\n    <mat-card-title>Personne a ajouter</mat-card-title>\n    <mat-card-subtitle>\n      Gagner 10 pts de fidélité en invitant quelqu'un a rejoindre My Rousseau Automobile\n    </mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content class=\"app-card-content\">\n    <mat-form-field style=\"min-width:200px;width: 40%;\">\n      <input matInput class=\"input-style\" [(ngModel)]=\"firstname\" placeholder=\"Son prenom (optionnel)\">\n    </mat-form-field>\n    &nbsp;\n\n    <mat-form-field style=\"min-width:200px;width: 40%;\">\n      <input matInput class=\"input-style\" [(ngModel)]=\"email\" placeholder=\"Son email\">\n    </mat-form-field>\n    <br>\n\n    <button mat-raised-button (click)=\"sendInvitation()\">Inviter</button>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/*!******************************************!*\
  !*** ./src/app/share/share.component.ts ***!
  \******************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShareComponent = /** @class */ (function () {
    function ShareComponent(snackBar, userService, router) {
        this.snackBar = snackBar;
        this.userService = userService;
        this.router = router;
        this.email = "";
        this.firstname = "";
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent.prototype.sendInvitation = function () {
        var _this = this;
        if (this.email.length > 0) {
            this.userService.share(this.email, this.firstname).subscribe(function (r) {
                _this.firstname = "";
                _this.email = "";
                _this.snackBar.open(r.message, "", { duration: 5000 });
                _this.router.navigate(["main"]);
            });
        }
    };
    ShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/share/share.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/timer/timer.component.css":
/*!*******************************************!*\
  !*** ./src/app/timer/timer.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timer/timer.component.html":
/*!********************************************!*\
  !*** ./src/app/timer/timer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{delay}}\n\n"

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        var _this = this;
        this.label = "";
        this.end = 0;
        this.server = null;
        this.noSecond = false;
        this.onlyPositif = false;
        this.handle = null;
        this.delay = "";
        this.handle = setInterval(function () {
            _this.refresh();
        }, 1000);
    }
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent.prototype.refresh = function () {
        if (this.end < new Date().getTime()) {
            if (this.handle != null) {
                clearInterval(this.handle);
                this.handle = null;
            }
        }
        else {
            if (!this.onlyPositif || this.end > new Date().getTime()) {
                var out = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["getDelay"])(this.end, "fr", "jours", this.server);
                if (this.noSecond)
                    out = out.split(":")[0];
                if (this.label != "")
                    this.delay = this.label + " " + out;
                else
                    this.delay = out;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("label"),
        __metadata("design:type", String)
    ], TimerComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("end"),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "end", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("server"),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "server", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("noSecond"),
        __metadata("design:type", Boolean)
    ], TimerComponent.prototype, "noSecond", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("onlyPositif"),
        __metadata("design:type", Boolean)
    ], TimerComponent.prototype, "onlyPositif", void 0);
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/tools.ts":
/*!**************************!*\
  !*** ./src/app/tools.ts ***!
  \**************************/
/*! exports provided: api, direct_api, openGeneral, getDelay, reload, clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direct_api", function() { return direct_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openGeneral", function() { return openGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelay", function() { return getDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reload", function() { return reload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

function api(service, param, encode) {
    if (encode === void 0) { encode = true; }
    if (encode)
        param = encodeURI(param);
    return (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].root_api + "/" + service + "?" + param);
}
function direct_api(service, param, encode) {
    if (encode === void 0) { encode = true; }
    if (encode)
        param = encodeURI(param);
    return (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain + "/" + service + "?" + param);
}
function openGeneral(item, domain) {
    return new Promise(function (resolve, reject) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain + "/api/connectTo?service=" + item + "&domain=" + domain;
        var hwnd = window.open(url, "Login", "menubar=0,status=0,height=600,titlebar=0,width=400");
        window.addEventListener("message", function (event) {
            clearInterval(hTimer);
            resolve(event.data);
        }, false);
        var hTimer = setInterval(function () {
            if (hwnd.location.href != null && hwnd.location.href.indexOf("email") > -1) {
                var pos = hwnd.location.href.indexOf("email=");
                var email = hwnd.location.href.substr(pos + 6, hwnd.location.href.indexOf("&", pos) - pos - 6);
                var password = hwnd.location.href.substr(hwnd.location.href.indexOf("&", pos) + 10);
                hwnd.close();
                clearInterval(hTimer);
                resolve({ email: email, password: password });
            }
        }, 1000);
        // hwnd.addEventListener("unload",(event)=>{
        //   var obj={email:localStorage.getItem("email"),password:localStorage.getItem("password")};
        // })
    });
}
function getDelay(dtStart, lang, label_day, serverNow) {
    if (lang === void 0) { lang = "en"; }
    if (label_day === void 0) { label_day = "jours"; }
    if (serverNow === void 0) { serverNow = null; }
    if (dtStart == undefined)
        return "";
    if (serverNow == null)
        serverNow = new Date().getTime();
    var delay = Math.abs(dtStart - serverNow);
    if (delay > 24 * 3600 * 1000) {
        var nbJours = Math.trunc(delay / (24 * 3600 * 1000));
        return nbJours + " " + label_day;
    }
    if (lang == undefined)
        lang = "fr";
    var affichage = new Date(delay).toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    if (affichage.indexOf("00:") == 0)
        affichage = affichage.split(":")[1] + ":" + affichage.split(":")[2];
    else
        affichage = affichage.split(":")[0] + "h" + affichage.split(":")[1];
    return affichage;
}
function reload() {
    document.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain;
}
function clear(elt, xpath) {
    var doc = elt.contentDocument;
    var to_keep = doc.querySelector(xpath);
    to_keep.parentElement.childNodes.forEach(function (n) {
        if (n != to_keep)
            n.style.display = "none";
    });
}


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./src/app/tools.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = {};
    }
    UserService.prototype.askforappointment = function (dt, motif, duration) {
        if (motif === void 0) { motif = ""; }
        if (duration === void 0) { duration = 30; }
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("askforappointment", "durationInMin=" + duration + "&email=" + this.user.email + "&dt=" + dt + "&motif=" + motif));
    };
    UserService.prototype.getappointments = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("getappointments", "email=" + this.user.email));
    };
    UserService.prototype.init = function (email, func_sucess, func_failed) {
        var _this = this;
        if (email === void 0) { email = null; }
        if (func_sucess === void 0) { func_sucess = null; }
        if (func_failed === void 0) { func_failed = null; }
        if (email == null)
            email = this.user.email;
        if (email == null) {
            if (func_failed != null)
                func_failed();
        }
        else {
            return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("getuser", "email=" + email)).subscribe(function (r) {
                _this.set(r);
                if (func_sucess != null)
                    func_sucess();
            });
        }
    };
    UserService.prototype.set = function (r) {
        if (r == null)
            return;
        if (!r.hasOwnProperty("dtLastNotif"))
            r.dtLastNotif = 1e9;
        r.notif = (r.dtLastNotif != 1e9);
        this.user = r;
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem("login");
        localStorage.removeItem("email");
        this.user = {};
    };
    UserService.prototype.addgift = function (id) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("addgift", "email=" + this.user.email + "&gift=" + id));
    };
    UserService.prototype.share = function (email, firstname) {
        if (firstname === void 0) { firstname = ""; }
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("share", "email=" + this.user.email + "&dest=" + email + "&firstname=" + firstname));
    };
    UserService.prototype.addcar = function (car) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("addcar", "email=" + this.user.email + "&modele=" + car));
    };
    UserService.prototype.cancelappointments = function (id) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("cancelappointments", "email=" + this.user.email + "&appointment=" + id));
    };
    UserService.prototype.delcar = function (index) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("delcar", "email=" + this.user.email + "&index=" + index));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>\n    <h2>\n      Bonjour {{userService.user.firstname}}\n    </h2>\n  </mat-card-header>\n  <mat-card-content class=\"app-card-content\">\n    Bienvenue dans votre Espace Client,  My Rousseau Automobile\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(userService) {
        this.userService = userService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    root_api: "http://localhost:8080/_ah/api/rousseau/v1",
    domain: "http://localhost:8080",
    version: "0.0.1"
};
/*
root_api:"https://rousseauautomobile.appspot.com/_ah/api/rousseau/v1",
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hhoareau\IdeaProjects\myRousseauAuto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map