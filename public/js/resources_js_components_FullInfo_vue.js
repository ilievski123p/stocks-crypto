"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_FullInfo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FullInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FullInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _full_info_GraphView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full_info/GraphView.vue */ "./resources/js/components/full_info/GraphView.vue");
/* harmony import */ var _full_info_TableView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full_info/TableView.vue */ "./resources/js/components/full_info/TableView.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    GraphView: _full_info_GraphView_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    TableView: _full_info_TableView_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      ticker: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://api.polygon.io/v1/meta/symbols/' + this.$route.params.code + '/company?&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9').then(function (response) {
      _this.ticker = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/GraphView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/GraphView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      values: [[10, 5, 5, 5], [40, 10, 10, 10], [30, 30, 30, 30], [100, 20, 40, 60]]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/TableView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/TableView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: [],
      fields: [{
        key: 'T',
        label: 'Name',
        sortable: true
      }, {
        key: 'c',
        label: 'Closed Price',
        sortable: true
      }, {
        key: 'h',
        label: 'Highest Price',
        sortable: true
      }, {
        key: 'l',
        label: 'Lowest Price',
        sortable: true
      }, {
        key: 'o',
        label: 'Opened Price',
        sortable: true
      }, {
        key: 't',
        label: 'Start of aggregated window',
        formatter: 'dateFormatter',
        sortable: true,
        sortByFormatted: true,
        filterByFormatted: true
      }, {
        key: 'v',
        label: 'Trading Volume',
        sortable: true
      }],
      perPage: 10,
      currentPage: 1,
      isBusy: true,
      favorites: [],
      filter: null,
      filterOn: [],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc'
    };
  },
  methods: {
    dateFormatter: function dateFormatter(value) {
      var miliseconds = value;
      var dataObject = new Date(miliseconds);
      return dataObject.toLocaleString();
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  computed: {
    rows: function rows() {
      return this.items.length;
    },
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/FullInfo.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/FullInfo.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FullInfo_vue_vue_type_template_id_3c660a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullInfo.vue?vue&type=template&id=3c660a70& */ "./resources/js/components/FullInfo.vue?vue&type=template&id=3c660a70&");
/* harmony import */ var _FullInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/FullInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FullInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FullInfo_vue_vue_type_template_id_3c660a70___WEBPACK_IMPORTED_MODULE_0__.render,
  _FullInfo_vue_vue_type_template_id_3c660a70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FullInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/full_info/GraphView.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/full_info/GraphView.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GraphView_vue_vue_type_template_id_03075cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphView.vue?vue&type=template&id=03075cf2& */ "./resources/js/components/full_info/GraphView.vue?vue&type=template&id=03075cf2&");
/* harmony import */ var _GraphView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphView.vue?vue&type=script&lang=js& */ "./resources/js/components/full_info/GraphView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GraphView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GraphView_vue_vue_type_template_id_03075cf2___WEBPACK_IMPORTED_MODULE_0__.render,
  _GraphView_vue_vue_type_template_id_03075cf2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/full_info/GraphView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/full_info/TableView.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/full_info/TableView.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableView_vue_vue_type_template_id_c16d67f2_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableView.vue?vue&type=template&id=c16d67f2&lang=html& */ "./resources/js/components/full_info/TableView.vue?vue&type=template&id=c16d67f2&lang=html&");
/* harmony import */ var _TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableView.vue?vue&type=script&lang=js& */ "./resources/js/components/full_info/TableView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TableView_vue_vue_type_template_id_c16d67f2_lang_html___WEBPACK_IMPORTED_MODULE_0__.render,
  _TableView_vue_vue_type_template_id_c16d67f2_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/full_info/TableView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FullInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FullInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FullInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FullInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/full_info/GraphView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/full_info/GraphView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GraphView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/GraphView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/full_info/TableView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/full_info/TableView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/TableView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/FullInfo.vue?vue&type=template&id=3c660a70&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FullInfo.vue?vue&type=template&id=3c660a70& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullInfo_vue_vue_type_template_id_3c660a70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullInfo_vue_vue_type_template_id_3c660a70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullInfo_vue_vue_type_template_id_3c660a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FullInfo.vue?vue&type=template&id=3c660a70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FullInfo.vue?vue&type=template&id=3c660a70&");


/***/ }),

/***/ "./resources/js/components/full_info/GraphView.vue?vue&type=template&id=03075cf2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/full_info/GraphView.vue?vue&type=template&id=03075cf2& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphView_vue_vue_type_template_id_03075cf2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphView_vue_vue_type_template_id_03075cf2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphView_vue_vue_type_template_id_03075cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GraphView.vue?vue&type=template&id=03075cf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/GraphView.vue?vue&type=template&id=03075cf2&");


/***/ }),

/***/ "./resources/js/components/full_info/TableView.vue?vue&type=template&id=c16d67f2&lang=html&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/full_info/TableView.vue?vue&type=template&id=c16d67f2&lang=html& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_c16d67f2_lang_html___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_c16d67f2_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_c16d67f2_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableView.vue?vue&type=template&id=c16d67f2&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/TableView.vue?vue&type=template&id=c16d67f2&lang=html&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FullInfo.vue?vue&type=template&id=3c660a70&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FullInfo.vue?vue&type=template&id=3c660a70& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "m-4" }, [
    _vm._v("\r\n\r\n  " + _vm._s(_vm.ticker) + "\r\n"),
    _c(
      "div",
      [
        _c(
          "vs-row",
          { staticClass: "vx-row flex justify-content-between mb-4" },
          [
            _c(
              "b-card",
              {
                staticClass: "mr-4",
                staticStyle: { width: "23%" },
                attrs: { "header-tag": "header", "footer-tag": "footer" }
              },
              [
                _c(
                  "b-card-text",
                  [
                    _c(
                      "vs-row",
                      { staticClass: "flex justify-content-between" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mr-4",
                            staticStyle: { "font-weight": "bold" }
                          },
                          [_vm._v("Country")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticker.country))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "flex justify-content-between" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mr-4",
                            staticStyle: { "font-weight": "bold" }
                          },
                          [_vm._v("Industry")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticker.industry))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "flex justify-content-between" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mr-4",
                            staticStyle: { "font-weight": "bold" }
                          },
                          [_vm._v("Sector")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticker.sector))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "flex justify-content-between" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mr-4",
                            staticStyle: { "font-weight": "bold" }
                          },
                          [_vm._v("Number of employees:")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticker.employees))])
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "flex justify-content-between" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mr-4",
                            staticStyle: { "font-weight": "bold" }
                          },
                          [_vm._v("Phone")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticker.phone))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "flex justify-content-between" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mr-4",
                            staticStyle: { "font-weight": "bold" }
                          },
                          [_vm._v("Address")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticker.hq_address))])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticStyle: { width: "75%" },
                attrs: { "header-tag": "header", "footer-tag": "footer" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function() {
                      return [
                        _c("h6", { staticClass: "mb-0" }, [
                          _c("div", [_vm._v(_vm._s(_vm.ticker.name))])
                        ])
                      ]
                    },
                    proxy: true
                  }
                ])
              },
              [
                _vm._v(" "),
                _c("b-card-text", [
                  _c("div", { staticClass: "w-1/2" }, [
                    _vm._v(_vm._s(_vm.ticker.description))
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "vs-row",
                        { staticClass: "flex justify-content-start" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mr-4",
                              staticStyle: { "font-weight": "bold" }
                            },
                            [_vm._v("Exchange market:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticStyle: { "margin-left": "5%" } }, [
                            _vm._v(_vm._s(_vm.ticker.hq_address))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "flex justify-content-start" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mr-4",
                              staticStyle: { "font-weight": "bold" }
                            },
                            [_vm._v("Symbol:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticStyle: { "margin-left": "10%" } }, [
                            _vm._v(_vm._s(_vm.ticker.symbol))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "flex justify-content-start" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mr-4",
                              staticStyle: { "font-weight": "bold" }
                            },
                            [_vm._v("Exchange Symbol:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticStyle: { "margin-left": "4.8%" } },
                            [_vm._v(_vm._s(_vm.ticker.exchangeSymbol))]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "b-tabs",
          { attrs: { "content-class": "mt-3", align: "center" } },
          [
            _c(
              "b-tab",
              { attrs: { title: "Graph View", active: "" } },
              [_c("graph-view")],
              1
            ),
            _vm._v(" "),
            _c(
              "b-tab",
              { attrs: { title: "Table View" } },
              [_c("table-view")],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mt-4" },
      [
        _c(
          "b-card",
          { staticClass: "mb-4", attrs: { title: "Similar to this:" } },
          [
            _c(
              "b-card-text",
              [
                _c("vs-chip", { attrs: { color: "primary" } }, [
                  _vm._v("Helo ")
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/GraphView.vue?vue&type=template&id=03075cf2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/GraphView.vue?vue&type=template&id=03075cf2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      [
        _c(
          "graph-area",
          {
            attrs: {
              height: 500,
              "axis-full-mode": true,
              shape: "normal",
              opacity: 0.6,
              borderline: true,
              labels: ["1Q", "2Q", "3Q", "4Q"],
              values: _vm.values
            }
          },
          [
            _c("note", { attrs: { text: "Data for the past two months" } }),
            _vm._v(" "),
            _c("legends", {
              attrs: {
                names: [
                  "Lowest Price",
                  "Highest Price",
                  "Closed Price",
                  "Opened Price"
                ]
              }
            }),
            _vm._v(" "),
            _c("guideline", { attrs: { "tooltip-y": true } })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/TableView.vue?vue&type=template&id=c16d67f2&lang=html&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/full_info/TableView.vue?vue&type=template&id=c16d67f2&lang=html& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "m-4" },
      [
        _c(
          "b-input-group",
          { attrs: { size: "sm" } },
          [
            _c("b-form-input", {
              attrs: {
                id: "filter-input",
                type: "search",
                placeholder: "Type to Search"
              },
              model: {
                value: _vm.filter,
                callback: function($$v) {
                  _vm.filter = $$v
                },
                expression: "filter"
              }
            }),
            _vm._v(" "),
            _c(
              "b-input-group-append",
              [
                _c(
                  "b-button",
                  {
                    staticClass: "bg-primary",
                    attrs: { disabled: !_vm.filter },
                    on: {
                      click: function($event) {
                        _vm.filter = ""
                      }
                    }
                  },
                  [_vm._v("Clear")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("b-table", {
          attrs: {
            striped: "",
            hover: "",
            id: "my-table",
            "per-page": _vm.perPage,
            "current-page": _vm.currentPage,
            items: _vm.items,
            fields: _vm.fields,
            filter: _vm.filter,
            "filter-included-fields": _vm.filterOn,
            "sort-by": _vm.sortBy,
            "sort-desc": _vm.sortDesc,
            "sort-direction": _vm.sortDirection
          },
          on: {
            "update:sortBy": function($event) {
              _vm.sortBy = $event
            },
            "update:sort-by": function($event) {
              _vm.sortBy = $event
            },
            "update:sortDesc": function($event) {
              _vm.sortDesc = $event
            },
            "update:sort-desc": function($event) {
              _vm.sortDesc = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "cell(t)",
              fn: function(data) {
                return [
                  _vm._v("\n           " + _vm._s(data.value) + "\n        ")
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("b-pagination", {
          staticClass: "flex justify-content-end",
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