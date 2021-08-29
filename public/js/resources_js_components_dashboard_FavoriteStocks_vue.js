"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_FavoriteStocks_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=script&lang=js& ***!
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
      locales: [],
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
      }, 'Full_Info'],
      items: [],
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
  mounted: function mounted() {
    this.getStocks();
  },
  methods: {
    getStocks: function getStocks() {
      var _this = this;

      this.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('api/getFavorites').then(function (response) {
        response.data = response.data.filter(function (x) {
          return x.type == 'stocks';
        });
        response.data.forEach(function (element) {
          _this.items.push(JSON.parse(element.code_full));
        });

        _this.$vs.loading.close();
      });
    },
    openFullInfo: function openFullInfo(row) {
      this.$router.push({
        name: 'full_info',
        params: {
          code: row.item.T
        }
      });
    },
    dateFormatter: function dateFormatter(value) {
      var miliseconds = value;
      var dataObject = new Date(miliseconds);
      return dataObject.toLocaleString();
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    } // handleSearch()
    // {
    //   this.setTimeout(this.filter(),1500)
    // },
    // filter(row)
    // {
    //   if (row.name.contains(this.filter))
    //     return true
    //   else 
    //     return false
    // }

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

/***/ "./resources/js/components/dashboard/FavoriteStocks.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/dashboard/FavoriteStocks.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FavoriteStocks_vue_vue_type_template_id_fc8b51c2_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html& */ "./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html&");
/* harmony import */ var _FavoriteStocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavoriteStocks.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FavoriteStocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FavoriteStocks_vue_vue_type_template_id_fc8b51c2_lang_html___WEBPACK_IMPORTED_MODULE_0__.render,
  _FavoriteStocks_vue_vue_type_template_id_fc8b51c2_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/FavoriteStocks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteStocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FavoriteStocks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteStocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteStocks_vue_vue_type_template_id_fc8b51c2_lang_html___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteStocks_vue_vue_type_template_id_fc8b51c2_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteStocks_vue_vue_type_template_id_fc8b51c2_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/FavoriteStocks.vue?vue&type=template&id=fc8b51c2&lang=html& ***!
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
            },
            {
              key: "cell(Full_Info)",
              fn: function(data) {
                return [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-primary underline hover:cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.openFullInfo(data)
                        }
                      }
                    },
                    [_vm._v("\n              Open Full Info\n            ")]
                  )
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