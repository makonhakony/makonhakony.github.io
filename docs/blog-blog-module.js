(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "9ilz":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_landing_blog_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-landing/blog-landing.component */ "qxMp");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog//blog.component */ "QtKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _blog_landing_blog_landing_component__WEBPACK_IMPORTED_MODULE_1__["BlogLandingComponent"]
    },
    {
        path: ':slug',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
    },
    {
        path: '**',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
    }
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵfac = function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); };
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "QtKN":
/*!*********************************************!*\
  !*** ./src/app/blog/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");



class BlogComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() { }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 5, vars: 0, consts: [[1, "vw-70"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \n");
    } }, directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxccG9ydGZvbGlvXFxibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ "U4+L":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ "9ilz");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog//blog.component */ "QtKN");
/* harmony import */ var _blog_landing_blog_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-landing/blog-landing.component */ "qxMp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class BlogModule {
}
BlogModule.ɵfac = function BlogModule_Factory(t) { return new (t || BlogModule)(); };
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"], _blog_landing_blog_landing_component__WEBPACK_IMPORTED_MODULE_4__["BlogLandingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyLibModule"]] }); })();


/***/ }),

/***/ "qxMp":
/*!*************************************************************!*\
  !*** ./src/app/blog/blog-landing/blog-landing.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLandingComponent", function() { return BlogLandingComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function BlogLandingComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", page_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", page_r3.route);
} }
const _c0 = function (a0, a1) { return { "justify-content-center flex-wrap": a0, "flex-column align-items-center": a1 }; };
function BlogLandingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Jane's");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BlogLandingComponent_div_0_div_6_Template, 11, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", options_r1.viewClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", options_r1.titleClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, !options_r1.displayInColumn, options_r1.displayInColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx_r0.links$));
} }
class BlogLandingComponent {
    constructor(scully) {
        this.scully = scully;
        this.links$ = this.scully.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(routes => routes.filter((route) => route.route.startsWith('/blog/'))));
        this.respOptions = [
            { viewClasses: 'd-none d-md-flex', displayInColumn: false, titleClasses: 'display-3' },
            { viewClasses: 'd-flex d-md-none', displayInColumn: true, titleClasses: '' }
        ];
    }
}
BlogLandingComponent.ɵfac = function BlogLandingComponent_Factory(t) { return new (t || BlogLandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"])); };
BlogLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogLandingComponent, selectors: [["app-blog-landing"]], decls: 1, vars: 1, consts: [["class", "flex-column align-items-center text-center vw-90 mx-auto", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex-column", "align-items-center", "text-center", "vw-90", "mx-auto", 3, "ngClass"], [1, "mb-5", 3, "ngClass"], [1, "font-weight-bold"], [1, "d-flex", "vw-90", 3, "ngClass"], ["class", "card post-card m-3", 4, "ngFor", "ngForOf"], [1, "card", "post-card", "m-3"], [1, "card-img-top", "bg-dark"], [1, "far", "fa-newspaper", "fa-4x", "m-5", "text-white"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title", "post-title", 3, "title"], [1, "card-text", "post-description", "flex-grow-1"], [1, "btn", "btn-outline-dark", "align-self-center", 3, "routerLink"], [1, "fa-lg", "mr-1", "far", "fa-eye"]], template: function BlogLandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BlogLandingComponent_div_0_Template, 8, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.respOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".post-card[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 360px;\n}\n\n.post-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 20ch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxccG9ydGZvbGlvXFxibG9nLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImJsb2ctbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWNhcmQge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgaGVpZ2h0OiAzNjBweDtcclxufVxyXG5cclxuLnBvc3QtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogMjBjaDtcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map