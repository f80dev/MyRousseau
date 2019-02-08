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
        this.api.raz();
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
    ApiService.prototype.add = function (user, firstname, lastname, modele) {
        if (modele === void 0) { modele = ""; }
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("adduser", "email=" + user + "&firstname=" + firstname + "&lastname=" + lastname + "&modele=" + modele));
    };
    ApiService.prototype.raz = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("raz", "")).subscribe(function () { });
    };
    ApiService.prototype.getcar = function (modele) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getcar", "modele=" + modele));
    };
    ApiService.prototype.login = function (email, password) {
        if (password === void 0) { password = ""; }
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("login", "email=" + email + "&password=" + password));
    };
    ApiService.prototype.getusers = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getusers", ""));
    };
    ApiService.prototype.getappointments = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getappointments", ""));
    };
    ApiService.prototype.addgift = function (user, gift) {
        return this.http.post(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("addgift", "email=" + user), gift);
    };
    ApiService.prototype.getgifts = function (email) {
        if (email == null)
            email = "null";
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_1__["api"])("getgifts", "email=" + email));
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
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"] },
    { path: 'gift', component: _gift_gift_component__WEBPACK_IMPORTED_MODULE_4__["GiftComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'newuser', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_8__["NewUserComponent"] },
    { path: 'start', component: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
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
    function AppComponent(api, userService, router) {
        var _this = this;
        this.api = api;
        this.userService = userService;
        this.router = router;
        this.title = 'my Rousseau Automobile';
        this.login = "login";
        this.api.login(localStorage.getItem("email"), localStorage.getItem("password")).subscribe(function (r) {
            if (r == null)
                _this.router.navigate(["/login"]);
            else {
                userService.init(localStorage.getItem("email"));
                _this.router.navigate(["/main"]);
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "./src/app/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _gift_gift_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gift/gift.component */ "./src/app/gift/gift.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _car_picker_car_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./car-picker/car-picker.component */ "./src/app/car-picker/car-picker.component.ts");
/* harmony import */ var _next_appointment_next_appointment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./next-appointment/next-appointment.component */ "./src/app/next-appointment/next-appointment.component.ts");
/* harmony import */ var _light_profil_light_profil_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./light-profil/light-profil.component */ "./src/app/light-profil/light-profil.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
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
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["MyDashboardComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_13__["ScheduleComponent"],
                _gift_gift_component__WEBPACK_IMPORTED_MODULE_14__["GiftComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_21__["NewUserComponent"],
                _profil_profil_component__WEBPACK_IMPORTED_MODULE_22__["ProfilComponent"],
                _car_picker_car_picker_component__WEBPACK_IMPORTED_MODULE_23__["CarPickerComponent"],
                _next_appointment_next_appointment_component__WEBPACK_IMPORTED_MODULE_24__["NextAppointmentComponent"],
                _light_profil_light_profil_component__WEBPACK_IMPORTED_MODULE_25__["LightProfilComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_26__["TimerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_7__["AmazingTimePickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"]
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"]],
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

module.exports = "Indiquez le modèle de votre véhicule\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    <button mat-raised-button (click)=\"selcar(node)\">{{node.name}}</button>\n  </mat-tree-node>\n\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n"

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
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TREE_DATA = [
    {
        name: 'BMW',
        children: [
            { name: 'Série 5' },
            { name: 'Série 1' },
            { name: 'X5' },
        ]
    }, {
        name: 'Renault',
        children: [
            { name: 'Clio' },
            { name: 'Scénic' },
            { name: 'Kangoo' },
            { name: 'Captur' }
        ]
    },
    {
        name: 'Peugeot',
        children: [
            { name: '308' },
            { name: '208' },
            { name: '508' }
        ]
    }
];
var CarPickerComponent = /** @class */ (function () {
    function CarPickerComponent() {
        this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transformer = function (node, level) {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = function (_, node) { return node.expandable; };
        this.dataSource.data = TREE_DATA;
    }
    CarPickerComponent.prototype.ngOnInit = function () {
    };
    CarPickerComponent.prototype.selcar = function (node) {
        this.onclick.emit({ car: node.name });
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
        __metadata("design:paramtypes", [])
    ], CarPickerComponent);
    return CarPickerComponent;
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

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>\n      <div>Promotions / cadeaux</div>\n      <div class=\"fill\"></div>\n      <div>\n        <button mat-icon-button class=\"more-button\" aria-label=\"Toggle menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </div>\n  </mat-card-header>\n\n  <mat-card-content style=\"overflow: hidden;\">\n\n    <div *ngIf=\"!icon_view\" fxLayout=\"row wrap\">\n        <div class=\"flip-card\" *ngFor=\"let gift of gifts\" style=\"margin-bottom:8px;position:relative;height:400px;width:100%;overflow: hidden;\">\n          <div class=\"flip-card-inner\">\n            <div class=\"flip-card-front\">\n              <img src=\"{{gift.picture}}\" style=\"position:absolute;left:0;top:0;object-fit: cover;\">\n              <div [ngStyle]=\"{'position':'absolute','text-align':'center','left':'20%','top':'15%','width':'60%','font-size':'2.5vmax','color':gift.messageColor}\">\n                {{gift.message}}\n              </div>\n              <button mat-raised-button\n                      style=\"position:absolute;left:35%;top:70%;width:30%;max-width:150px;\"\n                      (click)=\"useGift($event,gift)\">\n                J'en profite\n              </button>\n\n              <div [ngStyle]=\"{'position':'absolute','text-align':'center','left':'45%','top':'82%','width':'10%','font-size':'1.5vmax','color':gift.messageColor}\">\n                <app-timer [end]=\"gift.dtEnd\"></app-timer>\n              </div>\n            </div>\n            <div class=\"flip-card-back\">\n              <div style=\"vertical-align: middle;text-align: center;\">\n                {{gift.manual}}\n              </div>\n            </div>\n          </div>\n\n        </div>\n    </div>\n\n    <mat-selection-list #sel_gift *ngIf=\"icon_view\">\n      <mat-list-option  *ngFor=\"let gift of gifts\">\n        <img mat-list-avatar src=\"{{gift.icon}}\">\n        <span mat-line>{{gift.message}}</span>\n      </mat-list-option>\n    </mat-selection-list>\n\n    <mat-card-actions>\n    </mat-card-actions>\n  </mat-card-content>\n</mat-card>\n\n"

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
    function GiftComponent(api, userService) {
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
                if ((i.dtStart >= _this.dtStart || _this.dtStart == 0) && (i.dtEnd >= _this.dtEnd || _this.dtEnd == 0))
                    _this.gifts.push(i);
            });
        });
    };
    GiftComponent.prototype.useGift = function (evt, gift) {
        var _this = this;
        this.userService.addgift(gift.id).subscribe(function () {
            _this.refresh();
        });
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
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>\n\n    <table style=\"width:100%;margin-bottom: 5vh;\">\n      <tr style=\"vertical-align: middle;\">\n      <td style=\"text-align: left;width:20%;\">\n        <img class=\"avatar\" src=\"{{userService.user.photo}}\">\n      </td>\n      <td style=\"text-align: left;padding:0px;margin:0px;\">\n        <div *ngIf=\"userService.user.cars!=null\">\n          <strong>Ma {{userService.user.cars[0].modele}}</strong><br>\n          {{userService.user.firstname}} {{userService.user.lastname}}\n        </div>\n      </td>\n      <td style=\"text-align:right;font-size: 4.5vw;\">\n        {{userService.user.pts}}\n        <span style=\"font-size: 2.5vw;\">pts</span>&nbsp;\n      </td>\n    </tr></table>\n\n  </mat-card-header>\n\n  <mat-card-content style=\"text-align: center;overflow: hidden;\">\n    <img mat-card-image\n         *ngIf=\"userService.user.cars!=null\"\n         style=\"max-width:700px;\"\n         class=\"image-photo fadein\"\n         src=\"{{userService.user.cars[0].photo}}\"\n         alt=\"My Car\">\n    <p>\n      {{userService.user.message}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n  </mat-card-actions>\n</mat-card>\n"

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
    function LightProfilComponent(userService) {
        this.userService = userService;
    }
    LightProfilComponent.prototype.ngOnInit = function () {
    };
    LightProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-light-profil',
            template: __webpack_require__(/*! ./light-profil.component.html */ "./src/app/light-profil/light-profil.component.html"),
            styles: [__webpack_require__(/*! ./light-profil.component.css */ "./src/app/light-profil/light-profil.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  display:inline-block;\r\n  width: 100%;\r\n}\r\n\r\n.button-identity-provider {\r\n  margin:15px;\r\n  width:150px;\r\n  background-color:lightgrey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <br><br>\n  <img src=\"assets/img/logo-rousseau.png\">\n  <mat-card class=\"app-card\">\n    <mat-card-content>\n      <h1>S'identifier</h1>\n          <br>\n      <button class=\"button-identity-provider\" mat-raised-button >Facebook</button><br>\n      <button class=\"button-identity-provider\"  mat-raised-button>Google</button><br>\n      <button  class=\"button-identity-provider\" mat-raised-button>Linkedin</button><br>\n\n      <br><br>\n      <mat-form-field class=\"example-form-field\">\n        <input matInput type=\"email\" placeholder=\"Votre email\" [(ngModel)]=\"email\">\n        <button mat-button *ngIf=\"email\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearEmail()\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n      <br><br>\n      <mat-form-field *ngIf=\"showPassword && email.length>0\" class=\"example-form-field\">\n        <input name=\"password\" placeholder=\"votre code à 4 chiffres\" [(ngModel)]=\"password\" matInput type=\"password\" [maxlength]=\"4\">\n        <button mat-button *ngIf=\"password\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"password=''\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n\n      <br><br>\n      <button *ngIf=\"email.length>0 && email.split('@').length>1\" mat-raised-button (click)=\"login()\">Login</button>\n\n    </mat-card-content>\n\n  </mat-card>\n\n\n</div>\n"

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
    function LoginComponent(api, router) {
        this.api = api;
        this.router = router;
        this.showPassword = false;
        this.email = "";
        this.password = "";
        this.message = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem("email") || "";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        localStorage.setItem("email", this.email);
        this.api.login(this.email, this.password).subscribe(function (r) {
            if (!_this.showPassword) {
                if (r == null) {
                    _this.router.navigate(['/newuser'], { queryParams: { email: _this.email } });
                }
                else
                    _this.showPassword = true;
            }
            else {
                if (r != null) {
                    localStorage.setItem("password", _this.password);
                    _this.router.navigate(["start"]);
                }
                else {
                    _this.message = "Mot de passe incorrect";
                }
            }
        });
    };
    LoginComponent.prototype.clearEmail = function () {
        this.email = "";
        this.showPassword = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "\n\n<div *ngIf=\"bigScreen\">\n  <table style=\"width: 100%;\">\n    <tr style=\"vertical-align: top;\">\n    <td style=\"width:50%\">\n      <app-light-profil></app-light-profil><br>\n      <app-next-appointment></app-next-appointment>\n    </td>\n      <td>\n        <app-gift></app-gift>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<div *ngIf=\"!bigScreen\">\n  <app-next-appointment></app-next-appointment>\n  <app-light-profil></app-light-profil><br>\n  <app-gift></app-gift>\n</div>\n\n\n\n\n"

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
        this.userService.init(localStorage.getItem("email"));
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

module.exports = "<mat-toolbar *ngIf=\"userService.user.email!=null\"\n             color=\"primary\">\n  <button\n    type=\"button\"\n    aria-label=\"Toggle sidenav\"\n    mat-icon-button\n    (click)=\"drawer.toggle()\"\n    *ngIf=\"isHandset$ | async\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <span class=\"fill-remaining-space\"></span>\n  <button mat-raised-button color=\"primary\" (click)=\"logout()\">Déconnecter</button>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    *ngIf=\"userService.user.email!=null\"\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">\n      <img class=\"main-logo\" src=\"assets/img/logo-rousseau.png\">\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/main\"><mat-icon>dns</mat-icon>&nbsp;&nbsp;Dashboard</a>\n      <a mat-list-item routerLink=\"/schedule\"><mat-icon>schedule</mat-icon>&nbsp;&nbsp;Rendez-vous</a>\n      <a mat-list-item routerLink=\"/gift\"><mat-icon>card_giftcard</mat-icon>&nbsp;&nbsp;Récompenses</a>\n      <a mat-list-item routerLink=\"/catalogue\"><mat-icon>collections</mat-icon>&nbsp;&nbsp;Catalogue</a>\n      <a mat-list-item routerLink=\"/admin\"><mat-icon>build</mat-icon>&nbsp;&nbsp;Admin</a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n"

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
    function MenuComponent(userService, breakpointObserver, router) {
        var _this = this;
        this.userService = userService;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.isHandset$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
            var a = _a[0], b = _a[1];
            return b && a instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
        })).subscribe(function (_) {
            if (_this.drawer != null)
                _this.drawer.close();
        });
    }
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
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<div style=\"text-align: center;width:100%;\">\n  <br><br>\n  <img style=\"display: inline-block\" src=\"assets/img/logo-rousseau.png\"><br><br>\n\n  <mat-card style=\"display:inline-block;max-width: 700px;\">\n    <mat-card-content>\n    <h1>Inscrivez vous</h1>\n\n      <table class=\"example-full-width\" cellspacing=\"30\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input [(ngModel)]=\"email\" matInput placeholder=\"Votre email\">\n            </mat-form-field>\n          </td>\n        </tr>\n\n        <tr>\n        <td>\n          <mat-form-field class=\"example-full-width\">\n          <input [(ngModel)]=\"firstname\" matInput placeholder=\"Votre prénom\">\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input [(ngModel)]=\"lastname\" matInput placeholder=\"Votre nom\">\n        </mat-form-field></td>\n      </tr>\n\n        <tr>\n          <td>\n            <img class=\"avatar\" src=\"./assets/img/avatar.jpg\">\n          </td>\n          <td>\n            <button mat-raised-button>Modifier la photo</button>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <br><br>\n            <app-car-picker (onclick)=\"selcar($event)\"></app-car-picker></td>\n          <td>\n            <img class=\"image-photo\"\n                 *ngIf=\"carPicture.length>0\"\n                 src=\"{{carPicture}}\"\n                 style=\"width:50vw;max-width: 400px\">\n          </td>\n        </tr>\n      </table>\n\n\n    <button mat-raised-button\n            *ngIf=\"firstname!=null && lastname!=null && firstname.length>0 && lastname.length>0\"\n            (click)=\"sendUser()\">\n      Enregistrer\n    </button>\n\n  </mat-card-content>\n</mat-card>\n"

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
        this.carPicture = "";
    }
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.email == "") {
            this.route.queryParams.subscribe(function (params) {
                _this.email = params['email'] || "";
            });
        }
    };
    NewUserComponent.prototype.selcar = function (evt) {
        var _this = this;
        this.modele = evt.car;
        this.api.getcar(this.modele).subscribe(function (c) {
            if (c != null)
                _this.carPicture = c.photo;
        });
    };
    NewUserComponent.prototype.sendUser = function () {
        var _this = this;
        this.api.add(this.email, this.firstname, this.lastname, this.modele).subscribe(function (r) {
            localStorage.setItem("email", _this.email);
            _this.router.navigate(["start"]);
        });
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

module.exports = "<mat-card class=\"app-card\">\n  <mat-card-header>\n    Prochain rendez-vous\n  </mat-card-header>\n  <mat-card-content style=\"text-align: center;\">\n    <br>\n    <div *ngIf=\"appointments.length>0\">\n      {{appointments[0].description}}\n      <button mat-button>Annuler</button>\n    </div>\n    <div *ngIf=\"appointments.length==0\">\n      Aucun rendez-vous plannifié\n    </div>\n    <br>\n    <mat-card-actions>\n      <button color=\"primary\" mat-raised-button>Demander</button>\n    </mat-card-actions>\n  </mat-card-content>\n</mat-card>\n"

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
    function NextAppointmentComponent(userService) {
        this.userService = userService;
        this.appointments = [];
    }
    NextAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getappointments().subscribe(function (r) {
            _this.appointments = r.items;
        });
    };
    NextAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-next-appointment',
            template: __webpack_require__(/*! ./next-appointment.component.html */ "./src/app/next-appointment/next-appointment.component.html"),
            styles: [__webpack_require__(/*! ./next-appointment.component.css */ "./src/app/next-appointment/next-appointment.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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

module.exports = "<p>\n  page-not-found works!\n</p>\n"

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

module.exports = "<p>\n  profil works!\n</p>\n"

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
    function ProfilComponent() {
    }
    ProfilComponent.prototype.ngOnInit = function () {
    };
    ProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(/*! ./profil.component.html */ "./src/app/profil/profil.component.html"),
            styles: [__webpack_require__(/*! ./profil.component.css */ "./src/app/profil/profil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilComponent);
    return ProfilComponent;
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

module.exports = "<mat-card>\r\n  <mat-card-header>Demander un rendez-vous</mat-card-header>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choisir une date\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>&nbsp;&nbsp;\r\n  <input class=\"time-picker\" atp-time-picker value=\"19:00\"/>&nbsp;&nbsp;\r\n  <button mat-raised-button color=\"primary\" (click)=\"askForAppointment()\">Demander</button>\r\n</mat-card>\r\n"

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
    function ScheduleComponent() {
        this.dtSchedule = {};
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent.prototype.askForAppointment = function () {
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
        __metadata("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
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

module.exports = "<span>\n  {{delay}}\n</span>\n\n"

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
/*! exports provided: api, getDelay, reload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelay", function() { return getDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reload", function() { return reload; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

function api(service, param, encode) {
    if (encode === void 0) { encode = true; }
    if (encode)
        param = encodeURI(param);
    return (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].root_api + "/" + service + "?" + param);
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
    UserService.prototype.askforappointment = function (dt) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("askforappointment", "email=" + this.user.email + "&dt=" + dt));
    };
    UserService.prototype.getappointments = function () {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("getappointments", "email=" + this.user.email));
    };
    UserService.prototype.init = function (email, func) {
        var _this = this;
        if (email === void 0) { email = null; }
        if (func === void 0) { func = null; }
        if (email == null)
            email = this.user.email;
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("getuser", "email=" + email)).subscribe(function (r) {
            _this.user = r;
            if (func != null)
                func();
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem("login");
        localStorage.removeItem("email");
        this.user = {};
    };
    UserService.prototype.addgift = function (id) {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])("addgift", "email=" + this.user.email + "&gift=" + id));
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
    domain: "http://localhost:8080"
};
/*
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