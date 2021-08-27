"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_Cryptocurrency_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: ['T', 'c', 'h', "l", "o", 't', "v", 'Favorite'],
      items: [],
      perPage: 10,
      currentPage: 1,
      isBusy: true
    };
  },
  watch: {
    locale: function locale(newVal) {
      this.getStocks(newVal);
    }
  },
  mounted: function mounted() {
    this.getStocks(this.locale);
  },
  methods: {
    getStocks: function getStocks(locale) {
      var _this = this;

      this.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('api/getCryptos').then(function (response) {
        _this.items = response.data.results;
        _this.isBusy = false;

        _this.$vs.loading.close();
      });
    }
  },
  rows: function rows() {
    return this.items.length;
  }
});

/***/ }),

/***/ "./resources/js/components/dashboard/Cryptocurrency.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/dashboard/Cryptocurrency.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cryptocurrency_vue_vue_type_template_id_4a4cc598_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html& */ "./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html&");
/* harmony import */ var _Cryptocurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cryptocurrency.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Cryptocurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Cryptocurrency_vue_vue_type_template_id_4a4cc598_lang_html___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cryptocurrency_vue_vue_type_template_id_4a4cc598_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Cryptocurrency.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cryptocurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cryptocurrency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cryptocurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cryptocurrency_vue_vue_type_template_id_4a4cc598_lang_html___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cryptocurrency_vue_vue_type_template_id_4a4cc598_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cryptocurrency_vue_vue_type_template_id_4a4cc598_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/Cryptocurrency.vue?vue&type=template&id=4a4cc598&lang=html& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "m-4 flex justify-center" },
      [
        _c("b-table", {
          attrs: {
            striped: "",
            hover: "",
            id: "my-table",
            "per-page": _vm.perPage,
            "current-page": _vm.currentPage,
            items: _vm.items,
            fields: _vm.fields,
            busy: _vm.isBusy
          },
          on: {
            "update:busy": function($event) {
              _vm.isBusy = $event
            }
          }
        }),
        _vm._v(" "),
        _c("b-pagination", {
          staticStyle: { position: "relative", left: "40%" },
          attrs: {
            "total-rows": _vm.items.length,
            "per-page": _vm.perPage,
            "aria-controls": "my-table",
            "first-number": "",
            "last-number": ""
          },
          model: {
            value: _vm.currentPage,
            callback: function($$v) {
              _vm.currentPage = $$v
            },
            expression: "currentPage"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);