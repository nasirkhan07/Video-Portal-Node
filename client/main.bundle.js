webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(71);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    /**
     * CanActivate guard for videos and video screen--to make the site available to authenticated users only
     *
     * @param {ActivatedRouteSnapshot} next
     * @param {RouterStateSnapshot} state
     * @returns
     * @memberof AuthGuardService
     */
    AuthGuardService.prototype.canActivate = function (next, state) {
        // Authenticate the application with all the apps
        var canActivate = !!__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId');
        if (!canActivate) {
            this.router.navigate(['/login']);
        }
        return canActivate;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_user_login_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_list_video_list_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_video_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Services_auth_guard_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_signup_signup_component__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular imports


// Internal imports





/**
 * Main app routing i.e. for root
 * @export
 * @class AppRoutingModule
 */
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: 'videos',
                    pathMatch: 'full',
                },
                {
                    path: 'videos',
                    component: __WEBPACK_IMPORTED_MODULE_3__video_list_video_list_component__["a" /* VideoListComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_5_app_Services_auth_guard_service__["a" /* AuthGuardService */]],
                },
                {
                    path: 'videos/:id',
                    component: __WEBPACK_IMPORTED_MODULE_4__video_video_component__["a" /* VideoComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_5_app_Services_auth_guard_service__["a" /* AuthGuardService */]],
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_2__user_login_user_login_component__["a" /* UserLoginComponent */]
                },
                {
                    path: 'signup',
                    component: __WEBPACK_IMPORTED_MODULE_6_app_signup_signup_component__["a" /* SignupComponent */]
                },
                {
                    path: '**',
                    redirectTo: 'login',
                    pathMatch: "full"
                }
            ], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_Services_auth_guard_service__["a" /* AuthGuardService */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_authentication_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
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
    function AppComponent(authServ, apiService, router) {
        this.authServ = authServ;
        this.apiService = apiService;
        this.router = router;
        //subject for use in takeuntil oeprator for auto unsubscription of observable source
        this.obsCancel = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.loginText = 'Login';
        this.loginLink = "/login";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //on Login/Logout the loginmenu text change
        this.authServ.loginStateChanged.takeUntil(this.obsCancel).subscribe(function (val) {
            if (!!val.success) {
                _this.loginText = "Logout";
                setTimeout(function () {
                    _this.userName = val.user;
                }, 300);
            }
            else {
                _this.loginText = "Login";
            }
        });
        if (!!__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId')) {
            this.loginText = "Logout";
        }
    };
    /**
     * LogOut User
     *
     * @memberof AppComponent
     */
    AppComponent.prototype.loginout = function () {
        var _this = this;
        if (this.loginText == 'Logout') {
            this.authServ.logout().takeUntil(this.obsCancel).subscribe(function (res) {
                _this.apiService.resetSessionId = null;
                __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('sessionId', null);
                __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('user', null);
                _this.userName = null;
                _this.authServ.isLogged = false;
                _this.loginText = "Login";
                _this.router.navigate([_this.loginLink]);
            });
        }
        else {
            this.router.navigate([this.loginLink]);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.obsCancel.next(true);
        this.obsCancel.complete();
        this.obsCancel.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(183),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_rest_endpoint_service__["a" /* RestEndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_rest_endpoint_service__["a" /* RestEndPointService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_login_user_login_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_list_video_list_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_video_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rating_rating_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__star_star_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_Services_authentication_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_Services_video_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__spinner_spinner_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__ = __webpack_require__(67);
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
            __WEBPACK_IMPORTED_MODULE_5__user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__video_video_component__["a" /* VideoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__rating_rating_component__["a" /* RatingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__star_star_component__["a" /* StarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__["a" /* SignupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__rest_endpoint_service__["a" /* RestEndPointService */], __WEBPACK_IMPORTED_MODULE_12_app_Services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_13_app_Services_video_service__["a" /* VideoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = (function () {
    function RatingComponent() {
        this.rate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.stars = [1, 2, 3, 4, 5];
        var count = this.starCount < 0 ? 5 : this.starCount;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    /**
     * Rate Event fire
     *
     * @param {any} star
     * @memberof RatingComponent
     */
    RatingComponent.prototype.onRate = function (star) {
        this.rate.emit(star);
        this.rating = star;
    };
    return RatingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('rating'),
    __metadata("design:type", Number)
], RatingComponent.prototype, "rating", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "starCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "rate", void 0);
RatingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-rating',
        template: __webpack_require__(184),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);

//# sourceMappingURL=rating.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    return SpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('spinnerConfig'),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "spinnerConfig", void 0);
SpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'spinner',
        template: __webpack_require__(186),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarComponent = (function () {
    function StarComponent() {
        this.rate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    StarComponent.prototype.ngOnInit = function () {
    };
    /**
     * Rate Start Event Emit
     *
     * @memberof StarComponent
     */
    StarComponent.prototype.rateStar = function (data) {
        this.rate.emit(this.position);
    };
    return StarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], StarComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], StarComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], StarComponent.prototype, "rate", void 0);
StarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-star',
        template: __webpack_require__(187),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], StarComponent);

//# sourceMappingURL=star.component.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestEndPointService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestEndPointService = (function () {
    function RestEndPointService() {
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].baseUrl;
        this.activeSessionId = null;
    }
    Object.defineProperty(RestEndPointService.prototype, "login", {
        /**
         * Getter for Login api
         *
         * @readonly
         * @memberof RestEndPointService
         */
        get: function () {
            return this.baseUrl + "/user/auth";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestEndPointService.prototype, "newUser", {
        /**
         * getter for new user Add
         *
         * @readonly
         * @memberof RestEndPointService
         */
        get: function () {
            return this.baseUrl + "/user/new";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestEndPointService.prototype, "logout", {
        /**
        * Getter for Logout api
        *
        * @readonly
        * @memberof RestEndPointService
        */
        get: function () {
            var sessionid = { sessionid: __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId') }.sessionid;
            return !!sessionid ? this.baseUrl + "/user/logout?sessionId=" + sessionid : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Getter function for fetching Videos Api
    *
    * @readonly
    * @memberof RestEndPointService
    */
    RestEndPointService.prototype.getvideos = function (lmt, skp) {
        if (lmt === void 0) { lmt = 10; }
        if (skp === void 0) { skp = 0; }
        var _a = { sessionid: __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId'), limit: lmt, skip: skp }, sessionid = _a.sessionid, skip = _a.skip, limit = _a.limit;
        return !!sessionid ? this.baseUrl + "/videos?sessionId=" + sessionid + "&skip=" + skip + "&limit=" + limit : null;
    };
    /**
    * Getter function for fetching single Video Api
    *
    * @readonly
    * @memberof RestEndPointService
    */
    RestEndPointService.prototype.getVideo = function (vidid) {
        var _a = { sessionid: __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId'), videoid: vidid }, sessionid = _a.sessionid, videoid = _a.videoid;
        return !!sessionid ? this.baseUrl + "/video?sessionId=" + sessionid + "&videoId=" + videoid : null;
    };
    Object.defineProperty(RestEndPointService.prototype, "rateVideo", {
        /**
         * Getter function for Rating single Video Api
         *
         * @readonly
         * @memberof RestEndPointService
         */
        get: function () {
            var sessionid = { sessionid: __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId') }.sessionid;
            return !!sessionid ? this.baseUrl + "/video/ratings?sessionId=" + sessionid : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestEndPointService.prototype, "updateSessionId", {
        /**
         * Setter function for updating inmemory session id--should be removed after use of cookie--to do
         *
         * @readonly
         * @memberof RestEndPointService
         */
        set: function (id) {
            this.activeSessionId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestEndPointService.prototype, "resetSessionId", {
        /**
        * Reset function for updating inmemory session id--should be removed after use of cookie--to do
        *
        * @readonly
        * @memberof RestEndPointService
        */
        set: function (id) {
            this.activeSessionId = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestEndPointService.prototype, "sessionId", {
        /**
         * Getter for session id
         *
         * @readonly
         * @memberof RestEndPointService
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestEndPointService.prototype, "user", {
        /**
         * Getter for username
         *
         * @readonly
         * @memberof RestEndPointService
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('user');
        },
        enumerable: true,
        configurable: true
    });
    return RestEndPointService;
}());
RestEndPointService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RestEndPointService);

//# sourceMappingURL=rest-endpoint.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".navbar-login\r\n{\r\n    width: 305px;\r\n    padding: 10px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.navbar-login-session\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 0px;\r\n    padding-top: 0px;\r\n}\r\n\r\n.icon-size\r\n{\r\n    font-size: 87px;\r\n}\r\na:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.dropdown{\r\n    background-color: white;\r\n\r\n}\r\n.navbar-nav{\r\n    background-clip: border-box;\r\n}\r\n\r\n.dropdown:hover{\r\n    background-color:grey;    \r\n}\r\n\r\n.navbar-fixed-top{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.r-container{\r\n    position: relative;\r\n    top: 75px;\r\n}\r\n\r\n.navbar-right{\r\n    width:30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "body\r\n{\r\n    background-color: #1b1b1b;\r\n    padding-top: 40px;\r\n}\r\n.form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin:100px;\r\n    margin-top:190px;\r\n    margin-left:200px;\r\n  }\r\n\r\n.input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n}\r\n.form-control:focus\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.fullscreen_bg {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    /* background-image: url('http://i.imgur.com/aFs5QmP.jpg'); */\r\n    /* background-repeat:repeat; */\r\n  }\r\n\r\n\r\n  /* Bordered form */\r\nform {\r\n    border: 3px solid #f1f1f1;\r\n}\r\n\r\n/* Full-width inputs */\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Avatar image */\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add padding to containers */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n        display: block;\r\n        float: none;\r\n    }\r\n    .cancelbtn {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.panel-default{\r\n    width: 120%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes spinner {\r\n  to {\r\n    transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spinner {\r\n  to {\r\n    transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.spinner {\r\n  content: '';\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-top: -15px;\r\n  margin-left: -15px;\r\n  border-radius: 50%;\r\n  border: 1px solid #ccc;\r\n  border-top-color: #07d;\r\n  -webkit-animation: spinner .6s linear infinite;\r\n          animation: spinner .6s linear infinite;\r\n  z-index: 10;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".star {\r\n      color: #efefef;\r\n      cursor: pointer;\r\n      font-size: 2rem;\r\n      transition: color .4s ease-in-out;\r\n    }\r\n    .star.active {\r\n      color: #FFD600;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/* Bordered form */\r\nform {\r\n    border: 3px solid #f1f1f1;\r\n}\r\n\r\n/* Full-width inputs */\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Avatar image */\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add padding to containers */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n        display: block;\r\n        float: none;\r\n    }\r\n    .cancelbtn {\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".video-container{\r\n/* margin-bottom: 20px; */\r\nmargin-bottom: 35px;\r\n}\r\n\r\n.video-container a{\r\n    display: inline-block;\r\n    max-height: 50px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    width: 20em;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n}\r\n\r\nspan{\r\n     display: inline-block;\r\n    max-height: 50px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    width: 20em;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n    font-size: 12px;\r\n}\r\n\r\n.spinner-container {\r\n    position: absolute;\r\n    left:45%;\r\n    top:50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".video-container{\r\nmax-width: 80%;\r\nmax-height:80%;\r\n}\r\n\r\n.video-container a{\r\n    display: block;\r\n}\r\n\r\nspan{\r\n     display: inline-block;\r\n     font-size: 12px;\r\n}\r\n.vid-list-container{\r\n        height: 800px;\r\n    overflow: auto;\r\n}\r\n.spinner-container {\r\n    position: absolute;\r\n    left:45%;\r\n    top:50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            </button>\n        <a href=\"#\" class=\"navbar-brand\">\n            <strong>\n                Crossover Video Portal\n            </strong>\n        </a>\n    </div>\n    <div class=\"container\">\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a routerLink=\"/videos\">\n                <strong> See All Videos </strong>    \n                </a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"userName\" class=\"greet\">\n                    <a>\n             <b>     Hi , {{userName | uppercase}}</b>\n                   </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a (click)=\"loginout()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <span class=\"glyphicon glyphicon-user\"></span> \n                        <strong>{{loginText}}</strong>\n                        <!-- <span class=\"glyphicon glyphicon-chevron-down\"></span> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"r-container\">\n    <router-outlet>\n    </router-outlet>\n</div>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"stars\">\n      <app-star\n        *ngFor=\"let star of stars\"\n        [active]=\"star <= rating\"\n        (rate)=\"onRate($event)\"\n        [position]=\"star\"\n      >\n      </app-star>\n    </div>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div id=\"fullscreen_bg\" class=\"fullscreen_bg\"></div>\n<div class=\"form-signin\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <h3 class=\"text-center\">\n              Create Account </h3>\n            <form #sform=\"ngForm\">\n\n              <div class=\"\">\n                <label><b>Username</b></label>\n                <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" [(ngModel)]=\"userCreds.username\" required>\n                <label><b>Password</b></label>\n                <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"userCreds.password\" name=\"psw\" required>\n\n                <button type=\"submit\" [disabled]=\"sform.invalid\" (click)=\"signup()\">Sign Up</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" [ngStyle] = \"spinnerConfig\"></div>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<span class=\"star\" [class.active]=\"active\" (click)=\"rateStar($event)\">&#9733;</span>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<form #lform=\"ngForm\">\n\n  <div class=\"container\">\n    <p *ngIf=\"loginErrMsg\" class=\"danger\" [style.color]=\"'red'\">\n      {{loginErrMsg}}\n    </p>\n    <label><b>Username</b></label>\n    <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" [(ngModel)]=\"userCreds.username\" required>\n\n    <label><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"userCreds.password\" name=\"psw\" required>\n\n    <button type=\"submit\" [disabled]=\"lform.invalid\" (click)=\"login()\">Login</button>\n    <input type=\"checkbox\" checked=\"checked\"> Remember me\n  </div>\n\n  <div class=\"container\" style=\"background-color:#f1f1f1\">\n    <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n    <span class=\"psw\"> Dont have Account?  <a routerLink=\"/signup\"> <strong> Create New Account</strong> </a> </span>\n  </div>\n</form>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"videos\" class='container-fluid' id=\"content-container\" #container>\n    <div *ngFor=\"let video of videos\" class='video-container col-md-3 col-sm-4 col-xs-12'>\n        <a [routerLink]=\"'/videos/'+video._id\" [title]=\"video?.description\" dir=\"ltr\">\n            {{video?.name}}</a>\n        <video (click)=\"normalizeVideoPlay(video)\" id=\"{{video?._id}}\" #vid width=\"75%\" height=\"80%\" preload=\"none\" [poster]=\"'/posters/'+video?.url?.slice(video?.url.indexOf('/')+1,video?.url?.lastIndexOf('.'))+'.gif'\"\n            controls (play)=\"normalizeVideoPlay(video)\">\n            <source [src]=\"'/'+video?.url\" type=\"video/mp4\">\n        </video>\n        <app-rating (rate)=\"rateVideo(video?._id, $event)\" [rating]=\"average(video?.ratings)\" [starCount]=\"average(video?.ratings)\">\n        </app-rating>\n        <span>\n            {{video?.description}}\n        </span>\n\n    </div>\n    <div class=\"spinner-container\" *ngIf=\"lazyLoading\">\n        <spinner>\n        </spinner>\n    </div>\n\n</div>\n<div class=\"spinner-container\" *ngIf=\"isLoading\">\n    <spinner>\n    </spinner>\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div  class='col-md-offset-1 col-md-8'>\n  <div class='video-container'>\n    <a hred=\"#\" [title]=\"video?.description\" dir=\"ltr\">\n            {{video?.name}}</a>\n    <video *ngIf=\"video\" (click)=\"togglePlay(video)\" id=\"{{video?._id}}\" #vid width=\"100%\" height=\"100%\"\n     [poster]=\"'/posters/'+video?.url?.slice(video?.url.indexOf('/')+1,video?.url?.lastIndexOf('.'))+'.gif'\"\n      autoplay controls>\n      <source [src]=\"'/'+video?.url\" type=\"video/mp4\">\n      <!-- <source src=\"movie.ogg\" type=\"video/ogg\"> Your browser does not support the video tag. -->\n    </video>\n    <app-rating *ngIf=\"video\" [rating]=\"average(video?.ratings)\" (rate)=\"rateVideo(video?._id, $event)\" [starCount]=\"average(video?.ratings)\">\n    </app-rating>\n    <span>\n            {{video?.description}}\n        </span>\n    <!-- <button type=\"button\" (click)=\"toggleDesc(video)\" > {{ video.height=='20px'?'Show More':'Show Less'}}</button> -->\n  </div>\n</div>\n<div class='vid-list-container col-md-3'>\n  <div *ngFor=\"let video of videos\" class='col-md-12'>\n    <a [routerLink]=\"'/videos/'+video._id\" [title]=\"video?.description\" dir=\"ltr\">\n            {{video?.name}}</a>\n    <video #vids width=\"75%\" height=\"80%\" preload=\"none\" \n    (play)=\"router.navigate(['/videos/'+video?._id])\"\n    [poster]=\"'/posters/'+video?.url?.slice(video?.url.indexOf('/')+1,video?.url?.lastIndexOf('.'))+'.gif'\"\n    controls>\n      <source [src]=\"'/'+video?.url\" type=\"video/mp4\">\n      <!-- <source src=\"movie.ogg\" type=\"video/ogg\"> Your browser does not support the video tag. -->\n    </video>\n    <app-rating [rating]=\"average(video?.ratings)\" (rate)=\"rateVideo(video?._id, $event)\" [starCount]=\"average(video?.ratings)\">\n    </app-rating>\n    <span>\n            {{video?.description}}\n        </span>\n    <!-- <button type=\"button\" (click)=\"toggleDesc(video)\" > {{ video.height=='20px'?'Show More':'Show Less'}}</button> -->\n\n  </div>\n   <div class=\"spinner-container\" *ngIf=\"isMultiLoading\">\n        <spinner>\n        </spinner>\n    </div>\n</div>\n\n <div class=\"spinner-container\" *ngIf=\"isLoading\">\n        <spinner>\n        </spinner>\n    </div>"

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, apiService) {
        var _this = this;
        this.http = http;
        this.apiService = apiService;
        this.loginStateChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.isLoggedIn = false;
        this.userCreds = null;
        /**
         * Login user http api
         *
         * @memberof AuthenticationService
         */
        this.login = function (credentials) {
            _this.userCreds = credentials;
            return _this.http.post(_this.apiService.login, credentials);
        };
        /**
         * Logout user http api
         *
         * @memberof AuthenticationService
         */
        this.logout = function () {
            if (!!__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId')) {
                return _this.http.get(_this.apiService.logout);
            }
        };
        /**
         * http api for creating new user
         *
         * @memberof AuthenticationService
         */
        this.createAccount = function (creds) {
            return _this.http.post(_this.apiService.newUser, creds);
        };
    }
    Object.defineProperty(AuthenticationService.prototype, "isLogged", {
        /**
         * isUserLogged in getter
         *
         * @readonly
         * @memberof AuthenticationService
         */
        get: function () {
            return this.isLoggedIn;
        },
        /**
         * isUserLogged in setter
         *
         * @memberof AuthenticationService
         */
        set: function (value) {
            this.isLoggedIn = true;
        },
        enumerable: true,
        configurable: true
    });
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rest_endpoint_service__["a" /* RestEndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_endpoint_service__["a" /* RestEndPointService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoService = (function () {
    function VideoService(http, apiService) {
        var _this = this;
        this.http = http;
        this.apiService = apiService;
        this.scrollUnsub = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        /**
         * Get Multiple Videos http api
         *
         * @memberof VideoService
         */
        this.getVideos = function (lmt, skp) {
            if (lmt === void 0) { lmt = 10; }
            if (skp === void 0) { skp = 0; }
            if (!!__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId')) {
                return _this.http.get(_this.apiService.getvideos(lmt, skp));
            }
        };
        /**
         * Get Single Video http api
         *
         * @memberof VideoService
         */
        this.getVideo = function (vidid) {
            if (!!!!__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId') && !!_this.apiService.getVideo(vidid)) {
                return _this.http.get(_this.apiService.getVideo(vidid));
            }
        };
    }
    /**
     * Rate Video http api
     *
     * @param {{ videoId: string, rating: string }} ratingObj
     * @returns
     * @memberof VideoService
     */
    VideoService.prototype.rateVideo = function (ratingObj) {
        if (!!!!__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('sessionId') && !!this.apiService.rateVideo) {
            return this.http.post(this.apiService.rateVideo, ratingObj);
        }
    };
    return VideoService;
}());
VideoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__["a" /* RestEndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__["a" /* RestEndPointService */]) === "function" && _b || Object])
], VideoService);

var _a, _b;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_authentication_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(apiService, router, authService) {
        this.apiService = apiService;
        this.router = router;
        this.authService = authService;
        this.userCreds = {
            username: null,
            password: null
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (!!this.userCreds.username && !!this.userCreds.password) {
            this.authService.createAccount(this.userCreds).subscribe(function (res) {
                if (res.status == 200) {
                    alert('User created successfully, Please login');
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(185),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__["a" /* RestEndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__["a" /* RestEndPointService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_authentication_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLoginComponent = (function () {
    function UserLoginComponent(apiService, router, authService) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.authService = authService;
        this.obsCancel = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.userCreds = {
            username: null,
            password: null
        };
        this.loginErrMsg = null;
        /**
         * User Login Api
         *
         * @memberof UserLoginComponent
         */
        this.login = function () {
            _this.authService.login(_this.userCreds).takeUntil(_this.obsCancel).subscribe(function (res) {
                if (!!(JSON.parse(res._body).error)) {
                    _this.loginErrMsg = JSON.parse(res._body).error;
                    return;
                }
                if (!!res && !!res._body && !!(JSON.parse(res._body).sessionId)) {
                    _this.loginErrMsg = null;
                    __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('sessionId', JSON.parse(res._body).sessionId);
                    __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('user', JSON.parse(res._body).username);
                    _this.apiService.updateSessionId = JSON.parse(res._body).sessionId;
                    _this.authService.isLogged = true;
                    _this.authService.loginStateChanged.next({ success: true, user: JSON.parse(res._body).username });
                    _this.router.navigate(['/videos']);
                }
            }, function (err) {
            });
        };
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.ngOnDestroy = function () {
        this.obsCancel.next(true);
        this.obsCancel.complete();
        this.obsCancel.unsubscribe();
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__(188),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_endpoint_service__["a" /* RestEndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_endpoint_service__["a" /* RestEndPointService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], UserLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_video_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_throttleTime__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_Services_authentication_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var VideoListComponent = (function () {
    function VideoListComponent(apiService, router, vidServ, authServ, route) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.vidServ = vidServ;
        this.authServ = authServ;
        this.route = route;
        this.videos = [];
        this.isLoading = false;
        this.lazyVals = { lmt: 10, skip: 0 };
        this.obsCancel = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.lazyLoading = false;
        /**
         * Average for use in rating component[star]
         *
         * @memberof VideoListComponent
         */
        this.average = function (input) {
            if (input instanceof Array) {
                return input.reduce(function (fst, scnd) { return fst + scnd; }) / input.length;
            }
        };
        /**
         *
         *Function to fetch videos
         * @memberof VideoListComponent
         */
        this.fecthVideos = function (lazy) {
            if (lazy === void 0) { lazy = false; }
            _this.isLoading = true;
            var time = 0;
            if (lazy) {
                _this.lazyLoading = true;
                time = 250;
                // this.obsCancel.next(true);
                // this.obsCancel = new Subject();
                // this.lazyVals = { lmt: this.lazyVals.lmt - 10, skip: this.lazyVals.lmt - 10 };
            }
            _this.vidServ.getVideos(_this.lazyVals.lmt, _this.lazyVals.skip)
                .debounceTime(time)
                .takeUntil(_this.obsCancel).subscribe(function (vids) {
                _this.isLoading = false;
                if (!!vids) {
                    if (lazy && _this.videos instanceof Array) {
                        _this.lazyLoading = false;
                        _this.videos = _this.videos.concat(JSON.parse(vids._body).data.map(function (e) { return (__assign({}, e, { paused: false, height: '20px' })); }));
                    }
                    else {
                        _this.videos = JSON.parse(vids._body).data.map(function (e) { return (__assign({}, e, { paused: false, height: '20px' })); });
                    }
                }
            }, function (err) { return _this.isLoading = false; }, function () { return _this.isLoading = false; });
        };
        /**
         * LazyLoad handler function--assigned to  window scroll event
         *
         * @memberof VideoListComponent
         */
        this.lazyLoadVids = function () {
            if (window.location.hash.lastIndexOf('/') != 1) {
                return;
            }
            var cheight = _this.container.nativeElement.offsetHeight;
            var yoffst = window.pageYOffset;
            var y = yoffst + window.innerHeight;
            if (y >= cheight) {
                _this.lazyVals = { lmt: _this.lazyVals.lmt + 10, skip: _this.lazyVals.lmt };
                _this.fecthVideos(true);
            }
        };
        this.ngOnDestroy = function () {
            _this.obsCancel.next(true);
            _this.obsCancel.complete();
            _this.obsCancel.unsubscribe();
            if (_this.onscrollSub)
                _this.onscrollSub.unsubscribe();
        };
        this.vidServ.scrollUnsub.subscribe(function (val) {
            if (val) {
                __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].fromEvent(window, 'scroll').subscribe(function (res) {
                });
            }
        });
    }
    /**
     *
     * Play/pause sync
     * @param {Video} video
     * @memberof VideoListComponent
     */
    VideoListComponent.prototype.normalizeVideoPlay = function (video) {
        this.videoelems.filter(function (ve) {
            return ve.nativeElement.id !== video._id;
        }).forEach(function (ee) { return ee.nativeElement.pause(); });
        this.videoelems.find(function (v) { return v.nativeElement.id == video._id; }).nativeElement.play();
    };
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //onscroll event assignement for lazy loading of videos
        this.onscrollSub = __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].fromEvent(window, 'scroll').takeUntil(this.obsCancel).debounceTime(300).subscribe(function (res) {
            _this.lazyLoadVids();
        });
        if (this.apiService.sessionId != 'null') {
            this.authServ.loginStateChanged.next({ success: true, user: this.apiService.user });
            this.fecthVideos();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    /**
     * Function to rate video--used as output
     *
     * @param {any} videoid
     * @param {any} rating
     * @memberof VideoListComponent
     */
    VideoListComponent.prototype.rateVideo = function (videoid, rating) {
        var _this = this;
        this.vidServ.rateVideo({ videoId: videoid, rating: rating }).takeUntil(this.obsCancel).subscribe(function (res) {
            _this.fecthVideos();
        });
    };
    return VideoListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('container'),
    __metadata("design:type", Object)
], VideoListComponent.prototype, "container", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChildren */])("vid"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* QueryList */]) === "function" && _a || Object)
], VideoListComponent.prototype, "videoelems", void 0);
VideoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-list',
        template: __webpack_require__(189),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__["a" /* RestEndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_rest_endpoint_service__["a" /* RestEndPointService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_video_service__["a" /* VideoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10_app_Services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_Services_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], VideoListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_endpoint_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_video_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoComponent = (function () {
    function VideoComponent(router, route, apiService, vidServ) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.vidServ = vidServ;
        this.isLoading = false;
        this.isMultiLoading = false;
        this.obsCancel = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        /**
         * fetch Videos function
         *
         * @memberof VideoComponent
         */
        this.fecthVideos = function () {
            _this.isMultiLoading = true;
            _this.vidServ.getVideos().takeUntil(_this.obsCancel).subscribe(function (vids) {
                _this.isMultiLoading = false;
                if (!!vids) {
                    _this.videos = JSON.parse(vids._body).data.map(function (e) { return (__assign({}, e, { paused: false, height: '20px' })); });
                }
            }, function (err) { return _this.isMultiLoading = false; }, function () { return _this.isMultiLoading = false; });
        };
        /**
         *
         *Fetch Video Function
         * @memberof VideoComponent
         */
        this.fecthVideo = function (id) {
            _this.vidServ.getVideo(id).takeUntil(_this.obsCancel).subscribe(function (res) {
                if (!!res) {
                    _this.video = JSON.parse(res._body).data;
                }
            });
        };
        /**
         *
         *Average for Rating Star caculation
         * @memberof VideoComponent
         */
        this.average = function (input) {
            if (input instanceof Array) {
                return input.reduce(function (fst, scnd) { return fst + scnd; }) / input.length;
            }
        };
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.onscroll = null;
        //Routing parameter get and video fetch
        this.route.params.subscribe(function (val) {
            _this.vidServ.scrollUnsub.next(true);
            if (_this.apiService.sessionId != 'null') {
                _this.video = null;
                _this.isMultiLoading = true;
                _this.vidServ.getVideo(val.id).takeUntil(_this.obsCancel).subscribe(function (res) {
                    _this.isMultiLoading = false;
                    if (!!res) {
                        _this.video = JSON.parse(res._body).data;
                    }
                }, function (err) { return _this.isMultiLoading = false; }, function () { return _this.isMultiLoading = false; });
                _this.isLoading = true;
                _this.vidServ.getVideos().takeUntil(_this.obsCancel).subscribe(function (vids) {
                    _this.isLoading = false;
                    if (!!vids) {
                        _this.videos = JSON.parse(vids._body).data.map(function (e) { return (__assign({}, e, { paused: false, height: '20px' })); }).filter(function (v) { return v._id != val.id; });
                    }
                }, function (err) { return _this.isLoading = false; }, function () { return _this.isLoading = false; });
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    /**
     *
     *Video Play/pause toggle
     * @param {any} video
     * @memberof VideoComponent
     */
    VideoComponent.prototype.togglePlay = function (video) {
        if (this.videoelem.nativeElement.paused) {
            this.videoelem.nativeElement.play();
        }
        else {
            this.videoelem.nativeElement.pause();
        }
    };
    /**
     *
     * Rate Video Function
     * @param {any} videoid
     * @param {any} rating
     * @memberof VideoComponent
     */
    VideoComponent.prototype.rateVideo = function (videoid, rating) {
        var _this = this;
        this.vidServ.rateVideo({ videoId: videoid, rating: rating }).takeUntil(this.obsCancel).subscribe(function (res) {
            _this.fecthVideo(videoid);
        });
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        this.obsCancel.next(true);
        this.obsCancel.complete();
        this.obsCancel.unsubscribe();
    };
    return VideoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])("vid"),
    __metadata("design:type", Object)
], VideoComponent.prototype, "videoelem", void 0);
VideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video',
        template: __webpack_require__(190),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__rest_endpoint_service__["a" /* RestEndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_endpoint_service__["a" /* RestEndPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_video_service__["a" /* VideoService */]) === "function" && _d || Object])
], VideoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=video.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3001'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[240]);
//# sourceMappingURL=main.bundle.js.map