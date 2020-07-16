function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_course_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/course/course.component */
    "./src/app/components/course/course.component.ts");
    /* harmony import */


    var _services_auth_not_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/auth-not-login.guard */
    "./src/app/services/auth-not-login.guard.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'course',
      component: _components_course_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"],
      canActivate: [_services_auth_not_login_guard__WEBPACK_IMPORTED_MODULE_4__["AuthNotLoginGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'uber';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/main-view/main-view.component */
    "./src/app/components/main-view/main-view.component.ts");
    /* harmony import */


    var _components_main_view_item_text_main_view_item_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/main-view-item-text/main-view-item-text.component */
    "./src/app/components/main-view-item-text/main-view-item-text.component.ts");
    /* harmony import */


    var _components_main_view_item_image_main_view_item_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/main-view-item-image/main-view-item-image.component */
    "./src/app/components/main-view-item-image/main-view-item-image.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_main_view_item_description_calculate_road_main_view_item_description_calculate_road_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/main-view-item-description-calculate-road/main-view-item-description-calculate-road.component */
    "./src/app/components/main-view-item-description-calculate-road/main-view-item-description-calculate-road.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular-material-extensions/google-maps-autocomplete */
    "./node_modules/@angular-material-extensions/google-maps-autocomplete/__ivy_ngcc__/fesm2015/angular-material-extensions-google-maps-autocomplete.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _directives_directions_map_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./directives/directions-map.directive */
    "./src/app/directives/directions-map.directive.ts");
    /* harmony import */


    var _components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/map-view/map-view.component */
    "./src/app/components/map-view/map-view.component.ts");
    /* harmony import */


    var agm_direction__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! agm-direction */
    "./node_modules/agm-direction/__ivy_ngcc__/fesm2015/agm-direction.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_course_course_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/course/course.component */
    "./src/app/components/course/course.component.ts");
    /* harmony import */


    var _components_links_bar_links_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/links-bar/links-bar.component */
    "./src/app/components/links-bar/links-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/auth.interceptor */
    "./src/app/services/auth.interceptor.ts");
    /* harmony import */


    var _components_user_courses_user_courses_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/user-courses/user-courses.component */
    "./src/app/components/user-courses/user-courses.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
        apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiKey,
        libraries: ['places', 'directions']
      }), agm_direction__WEBPACK_IMPORTED_MODULE_22__["AgmDirectionModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatGoogleMapsAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_8__["MainViewComponent"], _components_main_view_item_text_main_view_item_text_component__WEBPACK_IMPORTED_MODULE_9__["MainViewItemTextComponent"], _components_main_view_item_image_main_view_item_image_component__WEBPACK_IMPORTED_MODULE_10__["MainViewItemImageComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_main_view_item_description_calculate_road_main_view_item_description_calculate_road_component__WEBPACK_IMPORTED_MODULE_13__["MainViewItemDescriptionCalculateRoadComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"], _directives_directions_map_directive__WEBPACK_IMPORTED_MODULE_20__["DirectionsMapDirective"], _components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_21__["MapViewComponent"], _components_course_course_component__WEBPACK_IMPORTED_MODULE_25__["CourseComponent"], _components_links_bar_links_bar_component__WEBPACK_IMPORTED_MODULE_26__["LinksBarComponent"], _components_user_courses_user_courses_component__WEBPACK_IMPORTED_MODULE_29__["UserCoursesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"], agm_direction__WEBPACK_IMPORTED_MODULE_22__["AgmDirectionModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatGoogleMapsAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_8__["MainViewComponent"], _components_main_view_item_text_main_view_item_text_component__WEBPACK_IMPORTED_MODULE_9__["MainViewItemTextComponent"], _components_main_view_item_image_main_view_item_image_component__WEBPACK_IMPORTED_MODULE_10__["MainViewItemImageComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_main_view_item_description_calculate_road_main_view_item_description_calculate_road_component__WEBPACK_IMPORTED_MODULE_13__["MainViewItemDescriptionCalculateRoadComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"], _directives_directions_map_directive__WEBPACK_IMPORTED_MODULE_20__["DirectionsMapDirective"], _components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_21__["MapViewComponent"], _components_course_course_component__WEBPACK_IMPORTED_MODULE_25__["CourseComponent"], _components_links_bar_links_bar_component__WEBPACK_IMPORTED_MODULE_26__["LinksBarComponent"], _components_user_courses_user_courses_component__WEBPACK_IMPORTED_MODULE_29__["UserCoursesComponent"]],
          entryComponents: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
            apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiKey,
            libraries: ['places', 'directions']
          }), agm_direction__WEBPACK_IMPORTED_MODULE_22__["AgmDirectionModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatGoogleMapsAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__["AuthInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/course/course.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/course/course.component.ts ***!
    \*******************************************************/

  /*! exports provided: CourseComponent */

  /***/
  function srcAppComponentsCourseCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
      return CourseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../map-view/map-view.component */
    "./src/app/components/map-view/map-view.component.ts");

    var CourseComponent = /*#__PURE__*/function () {
      function CourseComponent(dataService, router) {
        _classCallCheck(this, CourseComponent);

        this.dataService = dataService;
        this.router = router;
        this.displayDirections = true;
      }

      _createClass(CourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.origin = history.state.data.origin;
          this.dest = history.state.data.dest;
          this.course = history.state.data.course;
          this.calculateDistanceAndTime();
          this.course.price = 5;
        }
      }, {
        key: "saveCourse",
        value: function saveCourse() {
          var _this = this;

          this.dataService.createOrUpdate(this.course).subscribe(function (value) {
            _this.router.navigate(['/']).then(function (r) {});
          });
        }
      }, {
        key: "calculateDistanceAndTime",
        value: function calculateDistanceAndTime() {
          var _this2 = this;

          var directionsService = new google.maps.DirectionsService();

          var funn = function funn() {
            return _this2.calculatePrice();
          };

          directionsService.route({
            origin: {
              lat: this.origin.lat,
              lng: this.origin.lng
            },
            destination: {
              lat: this.dest.lat,
              lng: this.dest.lng
            },
            waypoints: [],
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
          }, function (response, status) {
            var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : funn;

            if (status !== 'OK') {
              return;
            } else {
              var directionsData = response.routes[0].legs[0];

              if (!directionsData) {
                return;
              } else {
                document.getElementById('duration').innerHTML = directionsData.duration.text;
                document.getElementById('distance').innerHTML = directionsData.distance.text;
                f();
              }
            }
          });
        }
      }, {
        key: "calculatePrice",
        value: function calculatePrice() {
          var distArr = document.getElementById('distance').innerText.split(" ");
          var distance = Number.parseFloat(distArr[0].replace(',', '.'));

          if (distance > 2) {
            this.course.price = 5 + distance * 2;
          }
        }
      }]);

      return CourseComponent;
    }();

    CourseComponent.ɵfac = function CourseComponent_Factory(t) {
      return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseComponent,
      selectors: [["app-course"]],
      decls: 21,
      vars: 4,
      consts: [[1, "flex-column"], [3, "origin", "destination", "displayDirection"], ["id", "courseInfo"], [1, "nav"], [1, "nav-item"], ["id", "duration"], ["id", "distance"], ["id", "button"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
      template: function CourseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-map-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Czas przejazdu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "D\u0142ugo\u015B\u0107 trasy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cena za przejazd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_button_click_19_listener() {
            return ctx.saveCourse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Zapisz kurs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("origin", ctx.origin)("destination", ctx.dest)("displayDirection", ctx.displayDirections);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.course.price, " z\u0142");
        }
      },
      directives: [_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"]],
      styles: ["div[_ngcontent-%COMP%]{\r\n  background: black;\r\n}\r\n#courseInfo[_ngcontent-%COMP%]{\r\n  height: 35vh;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  font-size: 28px;\r\n  color:white;\r\n  font-family: Bahnschrift;\r\n  text-align: center;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n  padding-top: 100px;\r\n}\r\n#button[_ngcontent-%COMP%]{\r\n  padding-top: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  padding: 1% 6%;\r\n  background: #EDE6E3;\r\n  color: black;\r\n  font-family: Bahnschrift;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  background: #EDE6E3;\r\n  color: black;\r\n  font-family: Bahnschrift;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3QkFBd0I7QUFDMUIiLCJmaWxlIjoiLi4vY29tcG9uZW50cy9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuI2NvdXJzZUluZm97XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG59XHJcbnVsIGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubGl7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnVse1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG5cclxuI2J1dHRvbntcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwYWRkaW5nOiAxJSA2JTtcclxuICBiYWNrZ3JvdW5kOiAjRURFNkUzO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNFREU2RTM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course',
          templateUrl: './course.component.html',
          styleUrls: ['./course.component.css']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["footer"]],
      decls: 12,
      vars: 0,
      consts: [["id", "copyright", 1, "col-lg-12"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wojciech Kozio\u0142");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Aleksander Ciurej");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Micha\u0142 Kubis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA92020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#copyright[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  text-align: center;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  padding-right: 50px;\r\n  font-size: 28px;\r\n  color:white;\r\n  font-family: Bahnschrift;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  font-size: 28px;\r\n  color:white;\r\n  font-family: Bahnschrift;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHdCQUF3QjtBQUMxQiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb3B5cmlnaHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxudWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxucHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main-view/main-view.component */
    "./src/app/components/main-view/main-view.component.ts");
    /* harmony import */


    var _links_bar_links_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../links-bar/links-bar.component */
    "./src/app/components/links-bar/links-bar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["home"]],
      decls: 4,
      vars: 0,
      consts: [["id", "main"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-links-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__["MainViewComponent"], _links_bar_links_bar_component__WEBPACK_IMPORTED_MODULE_2__["LinksBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["#main[_ngcontent-%COMP%]{\r\n  font-family: Bahnschrift;\r\n  font-size: 20px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEI7QUFDRiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW57XHJcbiAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjBweFxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/links-bar/links-bar.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/links-bar/links-bar.component.ts ***!
    \*************************************************************/

  /*! exports provided: LinksBarComponent */

  /***/
  function srcAppComponentsLinksBarLinksBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinksBarComponent", function () {
      return LinksBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var LinksBarComponent = /*#__PURE__*/function () {
      function LinksBarComponent() {
        _classCallCheck(this, LinksBarComponent);

        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faEnvelope = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
      }

      _createClass(LinksBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LinksBarComponent;
    }();

    LinksBarComponent.ɵfac = function LinksBarComponent_Factory(t) {
      return new (t || LinksBarComponent)();
    };

    LinksBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinksBarComponent,
      selectors: [["app-links-bar"]],
      decls: 18,
      vars: 4,
      consts: [["id", "links", 1, "col-lg-12"], ["id", "footer", 1, "row"], [1, "col-sm-3"], ["href", "https://www.instagram.com"], [3, "icon"], ["href", "https://www.gmail.com"], ["href", "https://www.twitter.com"], ["href", "https://www.facebook.com"]],
      template: function LinksBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
      styles: ["div#links[_ngcontent-%COMP%]{\r\n  max-width: 100vw;\r\n  padding-top: 200px;\r\n  padding-bottom: 200px;\r\n  background-color: #EDE6E3;\r\n}\r\ndiv#links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  font-size: 25px;\r\n  height: 100px;\r\n  font-family: Bahnschrift;\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\nul#footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  display: inline;\r\n  width: 100vw;\r\n}\r\na[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  width: 0;\r\n  height: 1px;\r\n  display: block;\r\n  background: black;\r\n  transition: width .8s;\r\n}\r\na[_ngcontent-%COMP%]:hover::after{\r\n  width: 100%;\r\n  transition: width .8s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbGlua3MtYmFyL2xpbmtzLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvbGlua3MtYmFyL2xpbmtzLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I2xpbmtze1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFNkUzO1xyXG59XHJcbmRpdiNsaW5rcyBhe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnVsI2Zvb3RlciBsaXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuYTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC44cztcclxufVxyXG5cclxuYTpob3Zlcjo6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggLjhzO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-links-bar',
          templateUrl: './links-bar.component.html',
          styleUrls: ['./links-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          if (this.formGroup.value.login !== '' && this.formGroup.value.password !== '') {
            this.authService.authenticate({
              login: this.formGroup.value.login,
              password: this.formGroup.value.password
            }).subscribe(function (value) {
              _this3.respond = value;

              if (_this3.respond) {
                location.reload();
              } else {
                document.getElementById('info').style.display = 'block';
                document.getElementById('info').innerHTML = 'Złe hasło lub login';
              }
            });
          } else {
            document.getElementById('info').style.display = 'block';
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["login"]],
      decls: 14,
      vars: 2,
      consts: [["id", "loginMain"], ["id", "loginForm", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "login", "mat-dialog-title", ""], ["type", "text", "id", "login", "formControlName", "login", "placeholder", "Enter Login", 1, "form-control"], ["for", "password", "mat-dialog-title", ""], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "info"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login/E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Has\u0142o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Zaloguj si\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Puste pole");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["div#loginMain[_ngcontent-%COMP%]{\r\n  margin: 10% 20% 0% 20%;\r\n}\r\n#info[_ngcontent-%COMP%]{\r\n  display: none;\r\n  color: red;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjbG9naW5NYWlue1xyXG4gIG1hcmdpbjogMTAlIDIwJSAwJSAyMCU7XHJcbn1cclxuI2luZm97XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-view-item-description-calculate-road/main-view-item-description-calculate-road.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/components/main-view-item-description-calculate-road/main-view-item-description-calculate-road.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: MainViewItemDescriptionCalculateRoadComponent */

  /***/
  function srcAppComponentsMainViewItemDescriptionCalculateRoadMainViewItemDescriptionCalculateRoadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainViewItemDescriptionCalculateRoadComponent", function () {
      return MainViewItemDescriptionCalculateRoadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../map/map.component */
    "./src/app/components/map/map.component.ts");

    var MainViewItemDescriptionCalculateRoadComponent = /*#__PURE__*/function () {
      function MainViewItemDescriptionCalculateRoadComponent() {
        _classCallCheck(this, MainViewItemDescriptionCalculateRoadComponent);
      }

      _createClass(MainViewItemDescriptionCalculateRoadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainViewItemDescriptionCalculateRoadComponent;
    }();

    MainViewItemDescriptionCalculateRoadComponent.ɵfac = function MainViewItemDescriptionCalculateRoadComponent_Factory(t) {
      return new (t || MainViewItemDescriptionCalculateRoadComponent)();
    };

    MainViewItemDescriptionCalculateRoadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainViewItemDescriptionCalculateRoadComponent,
      selectors: [["main-view-item-description-calculate-road"]],
      decls: 2,
      vars: 0,
      template: function MainViewItemDescriptionCalculateRoadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]],
      styles: ["app-map[_ngcontent-%COMP%]{\r\n  height: 480px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbWFpbi12aWV3LWl0ZW0tZGVzY3JpcHRpb24tY2FsY3VsYXRlLXJvYWQvbWFpbi12aWV3LWl0ZW0tZGVzY3JpcHRpb24tY2FsY3VsYXRlLXJvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiLi4vY29tcG9uZW50cy9tYWluLXZpZXctaXRlbS1kZXNjcmlwdGlvbi1jYWxjdWxhdGUtcm9hZC9tYWluLXZpZXctaXRlbS1kZXNjcmlwdGlvbi1jYWxjdWxhdGUtcm9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmFwcC1tYXB7XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewItemDescriptionCalculateRoadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-view-item-description-calculate-road',
          templateUrl: './main-view-item-description-calculate-road.component.html',
          styleUrls: ['./main-view-item-description-calculate-road.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-view-item-image/main-view-item-image.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/main-view-item-image/main-view-item-image.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MainViewItemImageComponent */

  /***/
  function srcAppComponentsMainViewItemImageMainViewItemImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainViewItemImageComponent", function () {
      return MainViewItemImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var MainViewItemImageComponent = /*#__PURE__*/function () {
      function MainViewItemImageComponent() {
        _classCallCheck(this, MainViewItemImageComponent);
      }

      _createClass(MainViewItemImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainViewItemImageComponent;
    }();

    MainViewItemImageComponent.ɵfac = function MainViewItemImageComponent_Factory(t) {
      return new (t || MainViewItemImageComponent)();
    };

    MainViewItemImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainViewItemImageComponent,
      selectors: [["main-view-item-image"]],
      inputs: {
        icon: "icon"
      },
      decls: 1,
      vars: 1,
      consts: [["id", "icon", 3, "icon"]],
      template: function MainViewItemImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jb21wb25lbnRzL21haW4tdmlldy1pdGVtLWltYWdlL21haW4tdmlldy1pdGVtLWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewItemImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-view-item-image',
          templateUrl: './main-view-item-image.component.html',
          styleUrls: ['./main-view-item-image.component.css']
        }]
      }], function () {
        return [];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/main-view-item-text/main-view-item-text.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/main-view-item-text/main-view-item-text.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MainViewItemTextComponent */

  /***/
  function srcAppComponentsMainViewItemTextMainViewItemTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainViewItemTextComponent", function () {
      return MainViewItemTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainViewItemTextComponent = /*#__PURE__*/function () {
      function MainViewItemTextComponent() {
        _classCallCheck(this, MainViewItemTextComponent);
      }

      _createClass(MainViewItemTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainViewItemTextComponent;
    }();

    MainViewItemTextComponent.ɵfac = function MainViewItemTextComponent_Factory(t) {
      return new (t || MainViewItemTextComponent)();
    };

    MainViewItemTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainViewItemTextComponent,
      selectors: [["main-view-item-text"]],
      inputs: {
        title: "title"
      },
      decls: 2,
      vars: 1,
      consts: [["id", "text"]],
      template: function MainViewItemTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
        }
      },
      styles: ["#text[_ngcontent-%COMP%]{\r\n  margin-top: 1pc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbWFpbi12aWV3LWl0ZW0tdGV4dC9tYWluLXZpZXctaXRlbS10ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvbWFpbi12aWV3LWl0ZW0tdGV4dC9tYWluLXZpZXctaXRlbS10ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGV4dHtcclxuICBtYXJnaW4tdG9wOiAxcGM7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewItemTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-view-item-text',
          templateUrl: './main-view-item-text.component.html',
          styleUrls: ['./main-view-item-text.component.css']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/main-view/main-view.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/main-view/main-view.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainViewComponent */

  /***/
  function srcAppComponentsMainViewMainViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainViewComponent", function () {
      return MainViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _main_view_item_image_main_view_item_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../main-view-item-image/main-view-item-image.component */
    "./src/app/components/main-view-item-image/main-view-item-image.component.ts");
    /* harmony import */


    var _main_view_item_text_main_view_item_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../main-view-item-text/main-view-item-text.component */
    "./src/app/components/main-view-item-text/main-view-item-text.component.ts");
    /* harmony import */


    var _main_view_item_description_calculate_road_main_view_item_description_calculate_road_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../main-view-item-description-calculate-road/main-view-item-description-calculate-road.component */
    "./src/app/components/main-view-item-description-calculate-road/main-view-item-description-calculate-road.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_courses_user_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../user-courses/user-courses.component */
    "./src/app/components/user-courses/user-courses.component.ts");

    function MainViewComponent_p_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Witaj, ", ctx_r9.login, " twoje ostatnie kursy:");
      }
    }

    function MainViewComponent_app_user_courses_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-courses", 16);
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r10.login);
      }
    }

    var MainViewComponent = /*#__PURE__*/function () {
      function MainViewComponent(authService, dataService) {
        _classCallCheck(this, MainViewComponent);

        this.authService = authService;
        this.dataService = dataService;
        this.faCar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCar"];
        this.faDollarSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDollarSign"];
        this.faRoute = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRoute"];
      }

      _createClass(MainViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllCoursesByUser();
          this.isLoggedIn();
        }
      }, {
        key: "getAllCoursesByUser",
        value: function getAllCoursesByUser() {
          this.login = this.authService.getLogin();
          this.dataService.getByUser(this.login).subscribe(function (value) {});
        }
      }, {
        key: "shouldShowLogin",
        value: function shouldShowLogin() {
          return this.authService.isLoggedIn();
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          if (!this.authService.isLoggedIn()) {
            document.getElementById('userLoggedDiv').style.display = 'none';
          } else {
            document.getElementById('userNotLoggedDiv').style.display = 'none';
          }
        }
      }]);

      return MainViewComponent;
    }();

    MainViewComponent.ɵfac = function MainViewComponent_Factory(t) {
      return new (t || MainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainViewComponent,
      selectors: [["app-main-view"]],
      decls: 41,
      vars: 5,
      consts: [["id", "mainViewComponent", 1, "container-fluid"], [1, "row"], ["id", "userNotLoggedDiv", 1, "col-lg-4", "col-md-4", "col-sm-4", "col-xl-4"], ["id", "userLoggedDiv", 1, "col-lg-4", "col-md-4", "col-sm-4", "col-xl-4"], [1, "center"], [3, "icon"], ["title", "Przejazdy"], ["id", "border", 1, "col-lg-4", "col-md-4", "col-sm-4", "col-xl-4"], ["title", "O nas"], ["id", "userCourse"], ["class", "userName", 4, "ngIf"], [3, "user", 4, "ngIf"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xl-4"], ["title", "Ostatnie kursy"], [1, "d-flex", "flex-column"], [1, "userName"], [3, "user"]],
      template: function MainViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zaloguj si\u0119 aby przegl\u0105da\u0107 zawarto\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "main-view-item-image", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "main-view-item-text", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Wybierz miejsce docelowe oraz miejsce odbioru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "main-view-item-description-calculate-road");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "main-view-item-image", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "main-view-item-text", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Projekt aplikacji wzorowany na aplikacji Uber. Stworzony na potrzeby zaliczenia projektu.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wykonawcy:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Aleksander Ciurej");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Wojciech Kozio\u0142");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Micha\u0142 Kubis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainViewComponent_p_32_Template, 2, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainViewComponent_app_user_courses_33_Template, 1, 1, "app-user-courses", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "main-view-item-image", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "main-view-item-text", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-user-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldShowLogin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldShowLogin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDollarSign);
        }
      },
      directives: [_main_view_item_image_main_view_item_image_component__WEBPACK_IMPORTED_MODULE_4__["MainViewItemImageComponent"], _main_view_item_text_main_view_item_text_component__WEBPACK_IMPORTED_MODULE_5__["MainViewItemTextComponent"], _main_view_item_description_calculate_road_main_view_item_description_calculate_road_component__WEBPACK_IMPORTED_MODULE_6__["MainViewItemDescriptionCalculateRoadComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _user_courses_user_courses_component__WEBPACK_IMPORTED_MODULE_8__["UserCoursesComponent"]],
      styles: ["div#mainViewComponent[_ngcontent-%COMP%]{\r\n  border-color: black;\r\n  border-style: solid;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n#userLoggedDiv[_ngcontent-%COMP%]{\r\n  height: 85vh;\r\n}\r\n#userNotLoggedDiv[_ngcontent-%COMP%]{\r\n  padding-top: 350px;\r\n  height: 85vh;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n  padding-top: 56px;\r\n  padding-bottom: 100px;\r\n}\r\n#border[_ngcontent-%COMP%]{\r\n  border-right: 1px solid black;\r\n  border-left: 1px solid black;\r\n  position: relative;\r\n}\r\n#userCourse[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.userName[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  padding-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiLi4vY29tcG9uZW50cy9tYWluLXZpZXcvbWFpbi12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjbWFpblZpZXdDb21wb25lbnR7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuI3VzZXJMb2dnZWREaXZ7XHJcbiAgaGVpZ2h0OiA4NXZoO1xyXG59XHJcbiN1c2VyTm90TG9nZ2VkRGl2e1xyXG4gIHBhZGRpbmctdG9wOiAzNTBweDtcclxuICBoZWlnaHQ6IDg1dmg7XHJcbn1cclxuLmNlbnRlcntcclxuICBwYWRkaW5nLXRvcDogNTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbiNib3JkZXJ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3VzZXJDb3Vyc2V7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnVzZXJOYW1le1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-view',
          templateUrl: './main-view.component.html',
          styleUrls: ['./main-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/map-view/map-view.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/map-view/map-view.component.ts ***!
    \***********************************************************/

  /*! exports provided: MapViewComponent */

  /***/
  function srcAppComponentsMapViewMapViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapViewComponent", function () {
      return MapViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var agm_direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! agm-direction */
    "./node_modules/agm-direction/__ivy_ngcc__/fesm2015/agm-direction.js");

    function MapViewComponent_agm_direction_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-direction", 3);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("origin", ctx_r14.origin)("destination", ctx_r14.destination);
      }
    }

    var MapViewComponent = /*#__PURE__*/function () {
      function MapViewComponent() {
        _classCallCheck(this, MapViewComponent);
      }

      _createClass(MapViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MapViewComponent;
    }();

    MapViewComponent.ɵfac = function MapViewComponent_Factory(t) {
      return new (t || MapViewComponent)();
    };

    MapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapViewComponent,
      selectors: [["app-map-view"]],
      inputs: {
        origin: "origin",
        destination: "destination",
        displayDirection: "displayDirection"
      },
      decls: 5,
      vars: 15,
      consts: [[3, "latitude", "longitude", "streetViewControl", "scrollwheel", "disableDefaultUI", "draggable", "mapTypeControl", "fitBounds"], [3, "origin", "destination", 4, "ngIf"], [3, "longitude", "latitude", "agmFitBounds"], [3, "origin", "destination"]],
      template: function MapViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapViewComponent_agm_direction_2_Template, 1, 2, "agm-direction", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "agm-marker", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "agm-marker", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.origin.latitude)("longitude", ctx.origin.longitude)("streetViewControl", false)("scrollwheel", false)("disableDefaultUI", true)("draggable", false)("mapTypeControl", false)("fitBounds", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayDirection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("longitude", ctx.origin.longitude)("latitude", ctx.origin.latitude)("agmFitBounds", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("longitude", ctx.destination.longitude)("latitude", ctx.destination.latitude)("agmFitBounds", true);
        }
      },
      directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmFitBounds"], agm_direction__WEBPACK_IMPORTED_MODULE_3__["ɵa"]],
      styles: ["agm-map[_ngcontent-%COMP%]{\r\n  height: 60vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbWFwLXZpZXcvbWFwLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiIuLi9jb21wb25lbnRzL21hcC12aWV3L21hcC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwe1xyXG4gIGhlaWdodDogNjB2aDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map-view',
          templateUrl: './map-view.component.html',
          styleUrls: ['./map-view.component.css']
        }]
      }], function () {
        return [];
      }, {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        destination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        displayDirection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/map/map.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/map/map.component.ts ***!
    \*************************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_not_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth-not-login.guard */
    "./src/app/services/auth-not-login.guard.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular-material-extensions/google-maps-autocomplete */
    "./node_modules/@angular-material-extensions/google-maps-autocomplete/__ivy_ngcc__/fesm2015/angular-material-extensions-google-maps-autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MapComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.sendData();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Jedziemy!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["pl"];
    };

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(authService, router, authNotLoginGuard) {
        _classCallCheck(this, MapComponent);

        this.authService = authService;
        this.router = router;
        this.authNotLoginGuard = authNotLoginGuard;
        this.markerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adres_poczatkowy = "Skąd:";
        this.adres_koncowy = "Dokąd:";
        this.default_adres = "Twoja lokalizacja jest aktualnie ustawiona"; //---------------------------------------------

        this.origin = {
          lat: 50.024230,
          lng: 20.971066
        };
        this.destination = {
          lat: 50.024230,
          lng: 20.971066
        };
        this.fromInput = false;
        this.destInput = false;
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setCurrentPosition();
          this.course = {
            origin: 'ssss',
            destination: '',
            price: 0,
            userName: ''
          };
        }
      }, {
        key: "sendData",
        value: function sendData() {
          this.authNotLoginGuard.selectedCourse = true;
          this.course.userName = this.authService.getLogin();
          this.router.navigate(['/course'], {
            state: {
              data: {
                origin: this.origin,
                dest: this.destination,
                course: this.course
              }
            }
          }).then(function (r) {});
        }
      }, {
        key: "setCurrentPosition",
        value: function setCurrentPosition() {
          var _this4 = this;

          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this4.origin.lat = position.coords.latitude;
              _this4.origin.lng = position.coords.longitude;
            });
          }
        }
      }, {
        key: "onLocationSelected",
        value: function onLocationSelected(location) {
          this.origin.lat = location.latitude;
          this.origin.lng = location.longitude;
        }
      }, {
        key: "onDestinationLocationSelected",
        value: function onDestinationLocationSelected(location) {
          this.destination.lat = location.latitude;
          this.destination.lng = location.longitude;
        }
      }, {
        key: "onAutocompleteSelected",
        value: function onAutocompleteSelected($event) {
          this.course.origin = $event.formatted_address;
          this.fromInput = true;
        }
      }, {
        key: "onAutocompleteDestinationSelected",
        value: function onAutocompleteDestinationSelected($event) {
          this.course.destination = $event.formatted_address;
          this.destInput = true;
        }
      }, {
        key: "isDisabled",
        value: function isDisabled() {
          return this.fromInput === true && this.destInput === true;
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_not_login_guard__WEBPACK_IMPORTED_MODULE_3__["AuthNotLoginGuard"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      outputs: {
        markerEvent: "markerEvent"
      },
      decls: 6,
      vars: 8,
      consts: [["id", "width"], [1, "autocomplete-container"], [3, "country", "addressLabelText", "placeholderText", "onLocationSelected", "onAutocompleteSelected"], [3, "addressLabelText", "country", "onLocationSelected", "onAutocompleteSelected"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-google-maps-autocomplete", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLocationSelected", function MapComponent_Template_mat_google_maps_autocomplete_onLocationSelected_2_listener($event) {
            return ctx.onLocationSelected($event);
          })("onAutocompleteSelected", function MapComponent_Template_mat_google_maps_autocomplete_onAutocompleteSelected_2_listener($event) {
            return ctx.onAutocompleteSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-google-maps-autocomplete", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLocationSelected", function MapComponent_Template_mat_google_maps_autocomplete_onLocationSelected_4_listener($event) {
            return ctx.onDestinationLocationSelected($event);
          })("onAutocompleteSelected", function MapComponent_Template_mat_google_maps_autocomplete_onAutocompleteSelected_4_listener($event) {
            return ctx.onAutocompleteDestinationSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapComponent_button_5_Template, 2, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("addressLabelText", ctx.adres_poczatkowy)("placeholderText", ctx.default_adres);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addressLabelText", ctx.adres_koncowy)("country", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDisabled());
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatGoogleMapsAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["agm-map[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 480px;\r\n}\r\n\r\n#width[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG59XHJcblxyXG4jd2lkdGh7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_not_login_guard__WEBPACK_IMPORTED_MODULE_3__["AuthNotLoginGuard"]
        }];
      }, {
        markerEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_5_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.openLoginDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zaloguj si\u0119");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.openSignUpDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zarejestruj si\u0119");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wyloguj si\u0119");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(authService, router, dialog) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
      }

      _createClass(NavbarComponent, [{
        key: "openLoginDialog",
        value: function openLoginDialog() {
          this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], {
            height: '400px',
            width: '460px'
          });
        }
      }, {
        key: "openSignUpDialog",
        value: function openSignUpDialog() {
          this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], {
            height: '600px',
            width: '640px'
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.authService.isLoggedIn();
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          this.authService.logout().subscribe(function (value) {
            _this5.router.navigate(['/']).then(function (r) {
              location.reload();
            });
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["navbar"]],
      decls: 8,
      vars: 5,
      consts: [[1, "col-lg-12"], [1, "nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], [1, "nav-link", 3, "click"], ["href", "#", "id", "logoutBtn", 1, "nav-link", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Strona g\u0142\xF3wna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_li_5_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_li_6_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["nav[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  color:white;\r\n  text-decoration: none;\r\n  font-family: Bahnschrift;\r\n  padding: 10px 0px;\r\n  height: 5vh;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n  text-align: center;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  color:white;\r\n}\r\na[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  display: block;\r\n  width: 0;\r\n  height: 1px;\r\n  background: #fff;\r\n  transition: width .8s;\r\n}\r\na[_ngcontent-%COMP%]:hover::after{\r\n  width: 100%;\r\n  transition: width .8s;\r\n}\r\n.nav-link[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICBoZWlnaHQ6IDV2aDtcclxufVxyXG5saXtcclxuICB3aWR0aDogMzAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5he1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5hOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuOHM7XHJcbn1cclxuXHJcbmE6aG92ZXI6OmFmdGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC44cztcclxufVxyXG5cclxuLm5hdi1saW5re1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(authService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          repeatedPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          if (this.formGroup.value.password === this.formGroup.value.repeatedPassword && this.formGroup.value.login !== '' && this.formGroup.value.email !== '') {
            this.authService.createOrUpdate({
              name: this.formGroup.value.login,
              email: this.formGroup.value.email,
              password: this.formGroup.value.password
            }).subscribe(function (value) {
              _this6.respond = value;

              if (_this6.respond.error !== undefined) {
                document.getElementById('info').innerHTML = 'Taki użytkownik już istnieje';
                document.getElementById('info').style.display = 'block';
              } else {
                document.getElementById('info').style.display = 'block';
                document.getElementById('info').innerHTML = 'Pomyślnie zarejestrowano';
                document.getElementById('info').style.color = 'green';
                setTimeout(function () {
                  location.reload();
                }, 2000);
              }
            });
          } else {
            document.getElementById('info').innerHTML = 'Puste pole';
            document.getElementById('info').style.display = 'block';
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["signup"]],
      decls: 21,
      vars: 2,
      consts: [["id", "signUpMain"], ["id", "signUpForm", "mat-dialog-content", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "loginSignUp"], ["type", "text", "id", "loginSignUp", "formControlName", "login", "placeholder", "Wprowad\u017A login", 1, "form-control"], ["for", "emailSignUp"], ["type", "email", "id", "emailSignUp", "formControlName", "email", "aria-describedby", "emailHelp", "placeholder", "Wprowad\u017A email", 1, "form-control"], ["for", "passwordSignUp"], ["type", "password", "id", "passwordSignUp", "formControlName", "password", "placeholder", "Podaj has\u0142o", 1, "form-control"], ["for", "passwordSignUpRepeat"], ["type", "password", "id", "passwordSignUpRepeat", "formControlName", "repeatedPassword", "placeholder", "Powt\xF3rz has\u0142o", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "info"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Adres e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Has\u0142o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Powt\xF3rz has\u0142o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Zarejestruj si\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["div#signUpMain[_ngcontent-%COMP%]{\r\n  margin: 10% 20% 0% 20%;\r\n}\r\n#info[_ngcontent-%COMP%]{\r\n  display: none;\r\n  color: red;\r\n  font-size: 20px;\r\n  margin-top: 20px;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I3NpZ25VcE1haW57XHJcbiAgbWFyZ2luOiAxMCUgMjAlIDAlIDIwJTtcclxufVxyXG4jaW5mb3tcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-courses/user-courses.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/user-courses/user-courses.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserCoursesComponent */

  /***/
  function srcAppComponentsUserCoursesUserCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCoursesComponent", function () {
      return UserCoursesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserCoursesComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Z: ", course_r16.origin, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Do: ", course_r16.destination, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cena przejazdu: ", course_r16.price, "z\u0142 ");
      }
    }

    var UserCoursesComponent = /*#__PURE__*/function () {
      function UserCoursesComponent(dataService) {
        _classCallCheck(this, UserCoursesComponent);

        this.dataService = dataService;
      }

      _createClass(UserCoursesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (this.user == undefined) {
            this.dataService.getAll().subscribe(function (value) {
              return _this7.setCourses(value, 10);
            });
          } else {
            this.dataService.getByUser(this.user).subscribe(function (value) {
              return _this7.setCourses(value, 5);
            });
          }
        }
      }, {
        key: "setCourses",
        value: function setCourses(value, max) {
          this.courses = value;
          this.courses = this.courses.reverse();
          var isMoreThan20 = this.courses.length - max > 0;

          if (isMoreThan20) {
            for (var i = 0; this.courses.length != max; i++) {
              this.courses.pop();
            }
          }
        }
      }]);

      return UserCoursesComponent;
    }();

    UserCoursesComponent.ɵfac = function UserCoursesComponent_Factory(t) {
      return new (t || UserCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    UserCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserCoursesComponent,
      selectors: [["app-user-courses"]],
      inputs: {
        user: "user"
      },
      decls: 3,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [1, "col-6"]],
      template: function UserCoursesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserCoursesComponent_li_2_Template, 7, 3, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["ul[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvdXNlci1jb3Vyc2VzL3VzZXItY291cnNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiIuLi9jb21wb25lbnRzL3VzZXItY291cnNlcy91c2VyLWNvdXJzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-courses',
          templateUrl: './user-courses.component.html',
          styleUrls: ['./user-courses.component.css']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/directions-map.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/directives/directions-map.directive.ts ***!
    \********************************************************/

  /*! exports provided: DirectionsMapDirective */

  /***/
  function srcAppDirectivesDirectionsMapDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionsMapDirective", function () {
      return DirectionsMapDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    var DirectionsMapDirective = /*#__PURE__*/function () {
      function DirectionsMapDirective(gmapsApi) {
        _classCallCheck(this, DirectionsMapDirective);

        this.gmapsApi = gmapsApi;
      }

      _createClass(DirectionsMapDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.drawDirectionsRoute();
        }
      }, {
        key: "drawDirectionsRoute",
        value: function drawDirectionsRoute() {
          var _this8 = this;

          this.gmapsApi.getNativeMap().then(function (map) {
            if (!_this8.directionsRenderer) {
              _this8.directionsRenderer = new google.maps.DirectionsRenderer({
                suppressMarkers: true
              });
            }

            var directionsRenderer = _this8.directionsRenderer;

            if (_this8.showDirection && _this8.destination) {
              var directionsService = new google.maps.DirectionsService();
              directionsRenderer.setMap(map);
              directionsService.route({
                origin: {
                  lat: _this8.origin.latitude,
                  lng: _this8.origin.longitude
                },
                destination: {
                  lat: _this8.destination.latitude,
                  lng: _this8.destination.longitude
                },
                waypoints: [],
                optimizeWaypoints: true,
                travelMode: 'DRIVING'
              }, function (response, status) {
                if (status === 'OK') {
                  var directionsData = response.routes[0].legs[0]; // Get data about the mapped route

                  if (!directionsData) {
                    return;
                  } else {
                    console.log(directionsData.distance.text);
                  }
                } else {
                  console.log('Directions request failed due to ' + status);
                }
              });
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.destination || changes.showDirection) {
            if (changes.showDirection && !changes.showDirection.currentValue) {
              if (this.directionsRenderer !== undefined) {
                // check this value is not undefined
                this.directionsRenderer.setDirections({
                  routes: []
                });
                return;
              }
            } else {
              this.drawDirectionsRoute();
            }
          }
        }
      }]);

      return DirectionsMapDirective;
    }();

    DirectionsMapDirective.ɵfac = function DirectionsMapDirective_Factory(t) {
      return new (t || DirectionsMapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]));
    };

    DirectionsMapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DirectionsMapDirective,
      selectors: [["", "appDirectionsMap", ""]],
      inputs: {
        origin: "origin",
        destination: "destination",
        showDirection: "showDirection"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectionsMapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDirectionsMap]'
        }]
      }], function () {
        return [{
          type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]
        }];
      }, {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        destination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showDirection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-not-login.guard.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/auth-not-login.guard.ts ***!
    \**************************************************/

  /*! exports provided: AuthNotLoginGuard */

  /***/
  function srcAppServicesAuthNotLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthNotLoginGuard", function () {
      return AuthNotLoginGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthNotLoginGuard = /*#__PURE__*/function () {
      function AuthNotLoginGuard(router, authService) {
        _classCallCheck(this, AuthNotLoginGuard);

        this.router = router;
        this.authService = authService;
        this.selectedCourse = false;
      }

      _createClass(AuthNotLoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn() && this.selectedCourse) {
            return true;
          } else {
            this.router.navigate(['']);
          }
        }
      }]);

      return AuthNotLoginGuard;
    }();

    AuthNotLoginGuard.ɵfac = function AuthNotLoginGuard_Factory(t) {
      return new (t || AuthNotLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthNotLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthNotLoginGuard,
      factory: AuthNotLoginGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthNotLoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/auth.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppServicesAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(injector) {
        _classCallCheck(this, AuthInterceptor);

        this.injector = injector;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var auth = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
          request = request.clone({
            setHeaders: {
              'x-auth-token': "".concat(auth.getToken())
            }
          });
          return next.handle(request);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-jwt */
    "./node_modules/angular2-jwt/angular2-jwt.js");
    /* harmony import */


    var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.url = 'https://uber-ac-wk-mk.herokuapp.com/api';
      }

      _createClass(AuthService, [{
        key: "authenticate",
        value: function authenticate(credentials) {
          return this.http.post(this.url + '/user/auth', {
            login: credentials.login,
            password: credentials.password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            if (result && result.token) {
              localStorage.setItem('token', result.token);
              localStorage.setItem('login', credentials.login);
              return true;
            }

            return false;
          }));
        }
      }, {
        key: "createOrUpdate",
        value: function createOrUpdate(credentials) {
          return this.http.post(this.url + '/user/create', credentials);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.http["delete"](this.url + '/user/logout/' + this.currentUser.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            localStorage.removeItem('token');
            localStorage.removeItem('login');
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
          var token = localStorage.getItem('token');

          if (!token) {
            return false;
          }

          return !jwtHelper.isTokenExpired(token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "getLogin",
        value: function getLogin() {
          return localStorage.getItem('login');
        }
      }, {
        key: "currentUser",
        get: function get() {
          var token = this.getToken();

          if (!token) {
            return null;
          }

          return new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]().decodeToken(token);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.url = 'https://uber-ac-wk-mk.herokuapp.com/api';
      }

      _createClass(DataService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.url + '/courses');
        }
      }, {
        key: "getByUser",
        value: function getByUser(userName) {
          return this.http.get(this.url + '/courses/' + userName);
        }
      }, {
        key: "createOrUpdate",
        value: function createOrUpdate(course) {
          return this.http.post("".concat(this.url, "/courses"), course);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiKey: 'AIzaSyBofizu88fnCrnywU1ks1ioo740pE4x-sE'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angular\uber\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map