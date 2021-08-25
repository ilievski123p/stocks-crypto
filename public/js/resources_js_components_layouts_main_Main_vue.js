"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layouts_main_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue */ "./resources/js/components/layouts/main/Navbar.vue");
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
      routerTransition: 'none'
    };
  },
  components: {
    Navbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Navbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Navbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-navbar-component */ "./node_modules/vue-navbar-component/dist/vue-navbar.esm.js");
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
    Navbar: vue_navbar_component__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    var _this = this;

    return {
      logo: {// img: require('./assets/logo.png')
      },
      links: [{
        name: 'Store',
        click: function click() {
          return _this.$router.push('/store');
        }
      }, {
        name: 'Gallery',
        click: function click() {
          return _this.$router.push('/gallery');
        }
      }, {
        name: 'About',
        dropdown: [{
          name: 'Our story',
          click: function click() {
            return _this.$router.push('/our-story');
          }
        }, {
          name: 'Contact',
          click: function click() {
            return _this.$router.push('/our-story');
          }
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/components/layouts/main/Main.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/layouts/main/Main.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_baac2da4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=baac2da4& */ "./resources/js/components/layouts/main/Main.vue?vue&type=template&id=baac2da4&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/main/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Main_vue_vue_type_template_id_baac2da4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_baac2da4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/main/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/main/Navbar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/main/Navbar.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_931dce76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=931dce76& */ "./resources/js/components/layouts/main/Navbar.vue?vue&type=template&id=931dce76&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/main/Navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Navbar_vue_vue_type_template_id_931dce76___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navbar_vue_vue_type_template_id_931dce76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/main/Navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layouts/main/Navbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layouts/main/Navbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layouts/main/Main.vue?vue&type=template&id=baac2da4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/layouts/main/Main.vue?vue&type=template&id=baac2da4& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_baac2da4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_baac2da4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_baac2da4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=baac2da4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Main.vue?vue&type=template&id=baac2da4&");


/***/ }),

/***/ "./resources/js/components/layouts/main/Navbar.vue?vue&type=template&id=931dce76&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layouts/main/Navbar.vue?vue&type=template&id=931dce76& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_931dce76___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_931dce76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_931dce76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=template&id=931dce76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Navbar.vue?vue&type=template&id=931dce76&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Main.vue?vue&type=template&id=baac2da4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Main.vue?vue&type=template&id=baac2da4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        _c("transition", { attrs: { name: _vm.routerTransition } }, [
          _c(
            "div",
            [
              _c("navbar"),
              _vm._v(" "),
              _c("router-view", { key: _vm.$route.path, staticClass: "mt-4" })
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Navbar.vue?vue&type=template&id=931dce76&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/main/Navbar.vue?vue&type=template&id=931dce76& ***!
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
  return _c("Navbar", {
    staticClass: "navbar",
    attrs: {
      logo: _vm.logo,
      links: _vm.links,
      darkBackground: true,
      onHover: "slide",
      logoTextClass: "logo-text",
      logoImgClass: "logo-img",
      linkClass: "navbar-link",
      dropdownBackgroundColor: "rgba(0, 0, 0, 0.4)"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-navbar-component/dist/vue-navbar.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-navbar-component/dist/vue-navbar.esm.js ***!
  \******************************************************************/
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
var script = {
  props: ['link', 'dark-background', 'linkClass', 'onHover'],
  methods: {
    buttonClick(button) {
      if (button.click) button.click();
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-navbar-link"
  }, [_c('button', {
    staticClass: "vue-navbar-button",
    class: [_vm.linkClass, {
      'clickable': _vm.link.click,
      'with-background': _vm.link.click && (_vm.onHover === 'slide' || _vm.onHover === 'fade')
    }, _vm.darkBackground ? 'light-text' : 'dark-text'],
    on: {
      "click": function ($event) {
        return _vm.buttonClick(_vm.link);
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.link.name) + "\n  ")]), _vm._v(" "), _vm.link.click ? _c('div', {
    staticClass: "vue-navbar-button-background",
    class: [_vm.darkBackground ? 'light-background' : 'dark-background', {
      'vue-navbar-button-underline': _vm.onHover === 'slide-underline' || _vm.onHover === 'fade-underline',
      'slide-background': _vm.onHover === 'slide' || _vm.onHover === 'slide-underline',
      'fade-background': _vm.onHover === 'fade' || _vm.onHover === 'fade-underline'
    }]
  }) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-f3756172_0", {
    source: "h1[data-v-f3756172],h2[data-v-f3756172],h3[data-v-f3756172],h4[data-v-f3756172],h5[data-v-f3756172],h6[data-v-f3756172],p[data-v-f3756172]{padding:0;margin:0}.light-text[data-v-f3756172]{color:#fefefe}.dark-text[data-v-f3756172]{color:#262626}.light-background[data-v-f3756172]{background-color:#fefefe}.dark-background[data-v-f3756172]{background-color:#262626}.box-shadow[data-v-f3756172]{-webkit-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);-moz-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);box-shadow:2px 2px 3px 0 rgba(0,0,0,.4)}.clickable[data-v-f3756172]{cursor:pointer}.vue-navbar-link[data-v-f3756172]{position:relative;padding:.25em .5em;margin-left:.5em;margin-top:.25em}.vue-navbar-link:hover .with-background.light-text[data-v-f3756172]{color:#262626}.vue-navbar-link:hover .with-background.dark-text[data-v-f3756172]{color:#fefefe}.vue-navbar-button[data-v-f3756172]{border:0;padding:0;font-size:1.2rem;font-weight:500;text-transform:uppercase;background-color:transparent;position:relative;transition:color .5s ease;text-align:right;z-index:1;white-space:nowrap}.vue-navbar-button-background[data-v-f3756172]{position:absolute;border-radius:3px;transition:width .5s ease,opacity .5s ease;left:0}.vue-navbar-button-background[data-v-f3756172]:not(.vue-navbar-button-underline){top:0;height:100%}.vue-navbar-button-underline[data-v-f3756172]{margin-top:2px;height:1px}.slide-background[data-v-f3756172]{width:0%;opacity:1}.vue-navbar-link:hover .slide-background[data-v-f3756172]{width:100%}.fade-background[data-v-f3756172]{width:100%;opacity:0}.vue-navbar-link:hover .fade-background[data-v-f3756172]{opacity:1}@media (min-width:768px){.vue-navbar-button[data-v-f3756172]{font-size:1rem}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-f3756172";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

//
const light = '#fefefe';
const dark = '#262626';
var script$1 = {
  components: {
    Link: __vue_component__
  },
  props: ['links', 'collapsed', 'darkBackground', 'onHover', 'linkClass', 'dropdownBackgroundColor'],
  computed: {
    dropdownBackground() {
      if (this.dropdownBackgroundColor) return this.dropdownBackgroundColor;else if (this.darkBackground) return dark;else return light;
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-navbar-links",
    class: [_vm.collapsed ? 'vue-navbar-links-collapse-view' : 'vue-navbar-links-normal-view']
  }, _vm._l(_vm.links, function (link, index) {
    return _c('div', {
      key: index,
      staticClass: "vue-navbar-link-container"
    }, [_c('Link', {
      attrs: {
        "link": link,
        "darkBackground": _vm.darkBackground,
        "linkClass": _vm.linkClass,
        "onHover": _vm.onHover
      }
    }), _vm._v(" "), link.dropdown ? _c('div', {
      staticClass: "vue-navbar-dropdown-container"
    }, [_c('div', {
      staticClass: "vue-navbar-dropdown box-shadow",
      class: [_vm.darkBackground ? 'dark-background' : 'light-background'],
      style: {
        'background-color': _vm.dropdownBackground
      }
    }, _vm._l(link.dropdown, function (item, index) {
      return _c('Link', {
        key: index,
        attrs: {
          "link": item,
          "linkClass": _vm.linkClass,
          "onHover": _vm.onHover,
          "darkBackground": _vm.darkBackground
        }
      });
    }), 1)]) : _vm._e()], 1);
  }), 0);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-0b274dd2_0", {
    source: "h1[data-v-0b274dd2],h2[data-v-0b274dd2],h3[data-v-0b274dd2],h4[data-v-0b274dd2],h5[data-v-0b274dd2],h6[data-v-0b274dd2],p[data-v-0b274dd2]{padding:0;margin:0}.light-text[data-v-0b274dd2]{color:#fefefe}.dark-text[data-v-0b274dd2]{color:#262626}.light-background[data-v-0b274dd2]{background-color:#fefefe}.dark-background[data-v-0b274dd2]{background-color:#262626}.box-shadow[data-v-0b274dd2]{-webkit-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);-moz-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);box-shadow:2px 2px 3px 0 rgba(0,0,0,.4)}.clickable[data-v-0b274dd2]{cursor:pointer}.vue-navbar-dropdown-container[data-v-0b274dd2]{position:absolute;right:0;height:0;padding:0;overflow:hidden;transition:all .5s ease;transition-property:opacity,padding;opacity:0;z-index:2}.vue-navbar-dropdown-container[data-v-0b274dd2]:hover,.vue-navbar-link-container:hover .vue-navbar-dropdown-container[data-v-0b274dd2]{height:auto;padding:1em;opacity:1}.vue-navbar-dropdown[data-v-0b274dd2]{display:flex;flex-direction:column;align-items:flex-start;margin-top:.1em;padding:1em;border-radius:5px;position:relative}.vue-navbar-links[data-v-0b274dd2]{display:flex}.vue-navbar-links-collapse-view[data-v-0b274dd2]{flex-direction:column;align-items:flex-end}.vue-navbar-link-container[data-v-0b274dd2]{position:relative}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-0b274dd2";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

//
var script$2 = {
  components: {
    Links: __vue_component__$1
  },
  props: ['links', 'collapsed', 'darkBackground', 'onHover', 'linkClass', 'dropdownBackgroundColor'],

  data() {
    return {
      expanded: false
    };
  },

  computed: {
    height() {
      if (!this.collapsed) return 'auto';else if (this.expanded) {
        return this.collapseViewHeight() + 'px';
      } else {
        return '0px';
      }
    }

  },
  methods: {
    collapseViewHeight() {
      return this.$refs.ghostLinks.$el.offsetHeight;
    }

  },

  mounted() {}

};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-navbar-links-container"
  }, [_vm.collapsed ? _c('div', {
    staticClass: "toggle-collapse",
    on: {
      "click": function ($event) {
        _vm.expanded = !_vm.expanded;
      }
    }
  }, _vm._l(3, function (n) {
    return _c('div', {
      key: n,
      staticClass: "line",
      class: [_vm.darkBackground ? 'light-background' : 'dark-background']
    });
  }), 0) : _vm._e(), _vm._v(" "), _c('Links', {
    class: {
      'overflow-hidden': _vm.collapsed && !_vm.expanded
    },
    style: {
      height: _vm.height
    },
    attrs: {
      "links": _vm.links,
      "collapsed": _vm.collapsed,
      "onHover": _vm.onHover,
      "darkBackground": _vm.darkBackground,
      "dropdownBackgroundColor": _vm.dropdownBackgroundColor,
      "linkClass": _vm.linkClass
    }
  }), _vm._v(" "), _c('Links', {
    ref: "ghostLinks",
    staticClass: "ghost",
    attrs: {
      "links": _vm.links,
      "collapsed": true,
      "onHover": _vm.onHover,
      "darkBackground": _vm.darkBackground,
      "dropdownBackgroundColor": _vm.dropdownBackgroundColor,
      "linkClass": _vm.linkClass
    }
  })], 1);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-7ead802f_0", {
    source: "h1[data-v-7ead802f],h2[data-v-7ead802f],h3[data-v-7ead802f],h4[data-v-7ead802f],h5[data-v-7ead802f],h6[data-v-7ead802f],p[data-v-7ead802f]{padding:0;margin:0}.light-text[data-v-7ead802f]{color:#fefefe}.dark-text[data-v-7ead802f]{color:#262626}.light-background[data-v-7ead802f]{background-color:#fefefe}.dark-background[data-v-7ead802f]{background-color:#262626}.box-shadow[data-v-7ead802f]{-webkit-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);-moz-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);box-shadow:2px 2px 3px 0 rgba(0,0,0,.4)}.clickable[data-v-7ead802f]{cursor:pointer}.vue-navbar-links-container[data-v-7ead802f]{display:flex;flex-direction:column;align-items:flex-end;justify-content:center}.ghost[data-v-7ead802f]{position:absolute;visibility:hidden}.overflow-hidden[data-v-7ead802f]{overflow:hidden}.toggle-collapse[data-v-7ead802f]{height:25px;width:25px;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;cursor:pointer;margin:.5em}.line[data-v-7ead802f]{height:3px;border-radius:1px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-7ead802f";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

//
var script$3 = {
  name: 'VueNavbar',
  // vue component name
  components: {
    LinksContainer: __vue_component__$2
  },
  props: {
    logo: {
      type: Object,
      default: {}
    },
    links: {
      type: Array,
      default: []
    },
    darkBackground: {
      type: Boolean,
      default: true
    },
    onHover: {
      type: String,
      default: 'slide' // options: 'slide', 'fade', 'slide-underline', 'fade-underline'

    },
    // classes
    logoTextClass: [String, Array, Object],
    logoImgClass: [String, Array, Object],
    linkClass: [String, Array, Object],
    dropdownBackgroundColor: String
  },
  methods: {
    logoClick() {
      if (this.logo.click) this.logo.click();
    },

    focusNavbar() {
      // to remove hover effect manually on mobile when clicking on navbar
      this.$el.focus();
    }

  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nav', {
    staticClass: "vue-navbar-container",
    on: {
      "click": _vm.focusNavbar
    }
  }, [_c('div', {
    staticClass: "vue-navbar"
  }, [_c('div', {
    staticClass: "vue-navbar-logo-container"
  }, [_c('div', {
    staticClass: "vue-navbar-logo",
    class: [{
      clickable: _vm.logo.click
    }, _vm.darkBackground ? 'light-text' : 'dark-text'],
    on: {
      "click": _vm.logoClick
    }
  }, [_vm.logo.img ? _c('img', {
    staticClass: "vue-navbar-logo-img",
    class: _vm.logoImgClass,
    attrs: {
      "src": _vm.logo.img
    }
  }) : _vm._e(), _vm._v(" "), _vm.logo.text ? _c('h2', {
    class: _vm.logoTextClass
  }, [_vm._v("\n          " + _vm._s(_vm.logo.text) + "\n        ")]) : _vm._e()])]), _vm._v(" "), _c('LinksContainer', {
    staticClass: "normal-view-links",
    attrs: {
      "links": _vm.links,
      "collapsed": false,
      "darkBackground": _vm.darkBackground,
      "onHover": _vm.onHover,
      "linkClass": _vm.linkClass,
      "dropdownBackgroundColor": _vm.dropdownBackgroundColor
    }
  }), _vm._v(" "), _c('LinksContainer', {
    staticClass: "collapse-view-links",
    attrs: {
      "links": _vm.links,
      "collapsed": true,
      "darkBackground": _vm.darkBackground,
      "onHover": _vm.onHover,
      "linkClass": _vm.linkClass,
      "dropdownBackgroundColor": _vm.dropdownBackgroundColor
    }
  })], 1)]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-2e9d90bc_0", {
    source: "h1[data-v-2e9d90bc],h2[data-v-2e9d90bc],h3[data-v-2e9d90bc],h4[data-v-2e9d90bc],h5[data-v-2e9d90bc],h6[data-v-2e9d90bc],p[data-v-2e9d90bc]{padding:0;margin:0}.light-text[data-v-2e9d90bc]{color:#fefefe}.dark-text[data-v-2e9d90bc]{color:#262626}.light-background[data-v-2e9d90bc]{background-color:#fefefe}.dark-background[data-v-2e9d90bc]{background-color:#262626}.box-shadow[data-v-2e9d90bc]{-webkit-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);-moz-box-shadow:2px 2px 3px 0 rgba(0,0,0,.4);box-shadow:2px 2px 3px 0 rgba(0,0,0,.4)}.clickable[data-v-2e9d90bc]{cursor:pointer}.vue-navbar-container[data-v-2e9d90bc]{padding:.75em}.vue-navbar[data-v-2e9d90bc]{display:flex;justify-content:space-between;align-items:stretch}.vue-navbar-logo-container[data-v-2e9d90bc]{display:flex;align-items:flex-start}.vue-navbar-logo[data-v-2e9d90bc]{display:flex;align-items:center}.vue-navbar-logo-img[data-v-2e9d90bc]{height:40px;margin-right:10px}@media (max-width:767px){.normal-view-links[data-v-2e9d90bc]{display:none!important}}@media (min-width:768px){.collapse-view-links[data-v-2e9d90bc]{display:none!important}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-2e9d90bc";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

// Import vue component

const install = function installVueNavbar(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueNavbar', __vue_component__$3);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__$3.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__vue_component__$3);


/***/ })

}]);