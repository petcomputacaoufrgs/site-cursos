/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../norma-wasm/pkg/norma_wasm_bg.js":
/*!******************************************!*\
  !*** ../norma-wasm/pkg/norma_wasm_bg.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"check\": () => (/* binding */ check),\n/* harmony export */   \"compile\": () => (/* binding */ compile),\n/* harmony export */   \"InterpreterHandle\": () => (/* binding */ InterpreterHandle),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbindgen_json_parse\": () => (/* binding */ __wbindgen_json_parse),\n/* harmony export */   \"__wbg_new_693216e109162396\": () => (/* binding */ __wbg_new_693216e109162396),\n/* harmony export */   \"__wbg_stack_0ddaca5d1abfb52f\": () => (/* binding */ __wbg_stack_0ddaca5d1abfb52f),\n/* harmony export */   \"__wbg_error_09919627ac0992f5\": () => (/* binding */ __wbg_error_09919627ac0992f5),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"__wbindgen_rethrow\": () => (/* binding */ __wbindgen_rethrow)\n/* harmony export */ });\n/* harmony import */ var _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./norma_wasm_bg.wasm */ \"../norma-wasm/pkg/norma_wasm_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nfunction start() {\n    _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.start();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} source\n*/\nfunction check(source) {\n    var ptr0 = passStringToWasm0(source, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.check(ptr0, len0);\n}\n\n/**\n* @param {string} source\n* @returns {InterpreterHandle}\n*/\nfunction compile(source) {\n    var ptr0 = passStringToWasm0(source, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.compile(ptr0, len0);\n    return InterpreterHandle.__wrap(ret);\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetInt32Memory0 = new Int32Array(_norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nclass InterpreterHandle {\n\n    static __wrap(ptr) {\n        const obj = Object.create(InterpreterHandle.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_interpreterhandle_free(ptr);\n    }\n    /**\n    * @returns {any}\n    */\n    data() {\n        var ret = _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.interpreterhandle_data(this.ptr);\n        return takeObject(ret);\n    }\n    /**\n    * @returns {any}\n    */\n    instructions() {\n        var ret = _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.interpreterhandle_instructions(this.ptr);\n        return takeObject(ret);\n    }\n    /**\n    * @param {string} value_text\n    */\n    input(value_text) {\n        var ptr0 = passStringToWasm0(value_text, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n        var len0 = WASM_VECTOR_LEN;\n        _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.interpreterhandle_input(this.ptr, ptr0, len0);\n    }\n    /**\n    */\n    reset() {\n        _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.interpreterhandle_reset(this.ptr);\n    }\n    /**\n    * @returns {any}\n    */\n    status() {\n        var ret = _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.interpreterhandle_status(this.ptr);\n        return takeObject(ret);\n    }\n    /**\n    * @returns {any}\n    */\n    runStep() {\n        var ret = _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.interpreterhandle_runStep(this.ptr);\n        return takeObject(ret);\n    }\n    /**\n    * @param {number} max_steps\n    * @returns {any}\n    */\n    runSteps(max_steps) {\n        var ret = _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.interpreterhandle_runSteps(this.ptr, max_steps);\n        return takeObject(ret);\n    }\n}\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_json_parse(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_693216e109162396() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_0ddaca5d1abfb52f(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbg_error_09919627ac0992f5(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _norma_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(arg0, arg1);\n    }\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_rethrow(arg0) {\n    throw takeObject(arg0);\n};\n\n\n});\n\n//# sourceURL=webpack://pinguim-norma/../norma-wasm/pkg/norma_wasm_bg.js?");

/***/ }),

/***/ "./common.js":
/*!*******************!*\
  !*** ./common.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"saveCode\": () => (/* binding */ saveCode),\n/* harmony export */   \"loadCode\": () => (/* binding */ loadCode),\n/* harmony export */   \"saveCodeHist\": () => (/* binding */ saveCodeHist),\n/* harmony export */   \"loadCodeHist\": () => (/* binding */ loadCodeHist)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n/* harmony import */ var _common_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common_styles.css */ \"./common_styles.css\");\n\n\n\n\nif (typeof WebAssembly.instantiateStreaming === 'function') {\n    let oldInstantiateStreaming = WebAssembly.instantiateStreaming.bind(WebAssembly);\n    WebAssembly.instantiateStreaming = (request, importsObj) => {\n        return oldInstantiateStreaming(request, importsObj).catch(error => {\n            return request\n                .then(response => response.arrayBuffer())\n                .then(bytes => WebAssembly.instantiate(bytes, importsObj));\n        });\n    };\n}\n\nconst init = (() => {\n    let handlers = [];\n\n    function callAllHandlers() {\n        const oldHandlers = handlers;\n        handlers = [];\n        for (const handler of oldHandlers) {\n            handler();\n        }\n    }\n\n    window.addEventListener('load', () => {\n        callAllHandlers();\n    });\n\n    window.addEventListener('DOMContentLoaded', () => {\n        callAllHandlers();\n    });\n\n    return (handler) => {\n        handlers.push(handler);\n\n        if (document.readyState == 'complete') {\n            callAllHandlers();\n        }\n    };\n})();\n\n// Código para verificar se o wasm é suportado]\n// Retirado de https://www.syncfusion.com/faq/how-can-i-check-if-a-browser-supports-webassembly\nconst supported = (() => {\n    try {\n        if (typeof WebAssembly === \"object\"\n            && typeof WebAssembly.instantiate === \"function\")\n        {\n            const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));\n            if (module instanceof WebAssembly.Module)\n                return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;\n        }\n    } catch (e) { }\n    return false;\n})();\n  \nif (!supported) {\n    alert(\"Seu navegador não suporta WebAssembly\\nmude de navegador ou use a versão antiga\");\n}\n\n// Theme\nconst toggleSwitch = document.querySelector('.theme-switch input[type=\"checkbox\"]');\nconst toggleIcon = document.getElementById('toggle-icon');\nfunction switchTheme(e) {\n    if (e.target.checked) {\n        document.documentElement.setAttribute('data-theme', 'dark');\n        toggleIcon.innerHTML = 'dark_mode';\n    }\n    else {\n        document.documentElement.setAttribute('data-theme', 'light');\n        toggleIcon.innerHTML = 'light_mode';\n    }    \n}\ntoggleSwitch.addEventListener('change', switchTheme, false);\n\nconst currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;\nif (currentTheme) {\n    document.documentElement.setAttribute('data-theme', currentTheme);\n\n    if (currentTheme === 'dark') {\n        toggleSwitch.checked = true;\n    }\n}\n\nconst storagePrefix = \"pinguim.norma\";\nconst storageCodeKey = storagePrefix + '.userCode';\nconst storageCodeHistKey = storagePrefix + '.userCodeHistory';\n\n// Local Storage\nconst saveCode = baseText => {\n    localStorage.setItem(storageCodeKey, baseText);\n};\n\nconst loadCode = () => {\n    return localStorage.getItem(storageCodeKey);\n};\n\nconst saveCodeHist = array => {\n    localStorage.setItem(storageCodeHistKey, JSON.stringify(array));\n};\n\nconst loadCodeHist = () => {\n    return JSON.parse(localStorage.getItem(storageCodeHistKey));\n};\n\n\n//# sourceURL=webpack://pinguim-norma/./common.js?");

/***/ }),

/***/ "./execution.js":
/*!**********************!*\
  !*** ./execution.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./common.js\");\n/* harmony import */ var norma_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! norma-wasm */ \"../norma-wasm/pkg/norma_wasm_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([norma_wasm__WEBPACK_IMPORTED_MODULE_1__]);\nnorma_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.init)(() => {\n    let interpreter = null;\n    let running = false;\n    let compiled = false;\n    let stepSpeed = 0;\n\n    const source = () => (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.loadCode)();\n    const userInput = document.getElementById('input');\n    const registerX = () => document.getElementById('input').value;\n\n    const reset = () => {\n        interpreter.reset();\n        setInput();\n        cleanHTML();\n        running = false;\n    };\n\n    //---------- ATUALIZA X ON CHANGE ==========\n    userInput.onchange = () => {\n        reset();\n        document.getElementById('reg-value-X').innerHTML = userInput.value\n    }\n\n    //---------- COMPILAR CÓDIGO  ==========\n    const compile = () => {\n        interpreter = null;\n        try {\n            interpreter = norma_wasm__WEBPACK_IMPORTED_MODULE_1__.compile(source());\n            return true;\n        }\n        catch(error) {\n            return false;\n        }\n    }\n\n    //---------- COMPILE TESTE ==========\n    const compileTest = () => {\n        if (!compiled) {\n            compile();\n            setInput();\n            compiled = true;\n            makeTable();\n            makeRegisters();\n        }\n    }\n\n    //---------- INPUT REGISTRADOR X ==========\n    const setInput = () => {\n        interpreter.input(registerX());\n    }\n\n    //---------- RODAR PASSO ==========\n    document.getElementById('step').onclick = () => {\n        compileTest();\n        const status = interpreter.runSteps(1);\n        running = status.running;\n        updateRegisters();\n\n        let line = data();\n        lineHighlight(line['status']['currentLabel']);\n    }\n\n    //---------- UPDATE REGISTERS ==========\n    const updateRegisters = () => {\n        let registers = data();\n        let numPassos = registers['status']['steps'];\n        registers = registers['status']['registers'];\n\n        for(let i in registers) {\n            document.getElementById('reg-value-' + registers[i]['name']).innerHTML = registers[i]['value'];\n            updatePassos(numPassos);\n        }\n        updateSaida();\n    }\n\n    //---------- RODAR N-PASSOS ==========\n    const runSteps = () => {\n        compileTest();\n        interpreter.runSteps(10000);\n    }\n\n    //---------- RODAR TODOS PASSOS ==========\n    document.getElementById('run').onclick = () => {\n        compileTest();\n\n        const tick = () => {\n            if (running) {\n                const status = interpreter.runSteps(stepSpeed ? 1 : 1347);\n                running = status.running;\n                updateRegisters();\n\n                if (running) {\n                    lineHighlight(status.currentLabel);\n                    setTimeout(tick, stepSpeed || 1);\n                } else {\n                    const end = performance.now();\n                }\n            }\n        }\n\n        running = true;\n        const then = performance.now();\n        tick();\n    }\n\n    //---------- RESETAR CÓDIGO ==========\n    document.getElementById('reset').onclick = () => {\n        reset();\n    }\n\n    //---------- ABORTAR PROGRAMA ==========\n    document.getElementById('abort').onclick = () => {\n        running = false;\n    }\n\n    //---------- DADOS DO CÓDIGO ==========\n    const data = () => {\n        compileTest();\n        return interpreter.data();\n    }\n\n    //---------- INSTRUÇÕES DO CÓDIGO ==========\n    const instructions = () => {\n        compileTest();\n        return interpreter.instructions();\n    }\n\n    //---------- STATUS DO CÓDIGO ==========\n    const codeStatus = () => {\n        compileTest();\n        return interpreter.status();\n    }\n\n    //---------- STEP SPEED CONTROL ==========\n    const stepHeader = document.getElementById('step-header');\n    const stepControl = document.getElementById('step-control');\n\n    const renderStepControl = () => {\n        stepSpeed = parseInt(stepControl.value);\n        if (stepSpeed == 0) {\n            stepHeader.innerHTML = 'sem espera';\n        } else {\n            stepHeader.innerHTML = stepSpeed + ' (ms)';\n        }\n    };\n\n    renderStepControl();\n\n    document.getElementById('step-control').onchange = () => {\n        stepSpeed = stepControl.value;\n        renderStepControl();\n    }\n\n    //---------- REGISTRADORES NO HTML ==========\n    const regSection = document.getElementById('registers-section');\n\n    const makeRegisters = () => {\n        let registers = data();\n        registers = registers['status']['registers'];\n\n        for(let i in registers) {\n            const outerDiv = document.createElement('div');\n            outerDiv.id = 'reg-' + registers[i]['name'];\n            outerDiv.className = 'register';\n            regSection.appendChild(outerDiv);\n\n            const innerH3 = document.createElement('h3');\n            const innerDiv = document.createElement('div');\n            innerH3.id = 'reg-name-' + registers[i]['name'];\n            innerDiv.id = 'reg-value-' + registers[i]['name'];\n            innerH3.className = 'register_name';\n            innerDiv.className = 'register_value';\n            innerH3.innerText = registers[i]['name'];\n            innerDiv.innerText = registers[i]['value'];\n            outerDiv.appendChild(innerH3);\n            outerDiv.appendChild(innerDiv);\n        }\n    }\n\n    //---------- TABELA CÓDIGO COMPILADO ==========\n    const tableCode = document.getElementById('table-compiled-program');\n\n    const makeTable = () => {\n        const instList = instructions();\n\n        for(let i in instList) {\n            const newRow = tableCode.insertRow();\n            const stepColumn = newRow.insertCell();\n            const programColumn = newRow.insertCell();\n\n            stepColumn.classList.add(\"step_column\");\n            programColumn.classList.add(\"program_column\");\n\n            stepColumn.innerHTML = instList[i]['label'];\n            programColumn.innerHTML = instList[i]['kind'];\n            newRow.id = instList[i]['label'];\n        }\n    }\n\n    //---------- COMPILAR AO CARREGAR ==========\n    compileTest()\n\n    //---------- HIGHLIGHT LINHA ATUAL ==========\n    let lastLine;\n    if (tableCode.firstElementChild != undefined) {\n        lastLine = tableCode.firstElementChild.firstChild;\n    }\n    if (lastLine) {\n        lastLine.classList.add('line_selected');\n    }\n    let firstLine = lastLine;\n    const lineHighlight = (lineId) => {\n        try {\n            if (lastLine) {\n                lastLine.classList.remove('line_selected')\n            }\n\n            let actualLine = document.getElementById(lineId);\n            actualLine.classList.add('line_selected');\n            lastLine = actualLine;\n       } catch(e) {}\n    }\n\n    //---------- UPDATE NÚMERO DE PASSOS ==========\n    const numPassos = document.getElementById('num-passos');\n    const updatePassos = (num) => numPassos.innerHTML = num;\n\n    //---------- UPDATE SAÍDA ==========\n    const outputSpan = document.getElementById('saida');\n\n    const updateSaida = () => {\n        if(running) {\n            outputSpan.innerHTML = 'Rodando...';\n        } else {\n            let values = data();\n            values = values.status.registers.find(values => values.name == \"Y\");\n            outputSpan.innerHTML = values.value;\n        }\n    }\n\n    //---------- LIMPA HTML QUANDO RESETAR ==========\n    const cleanHTML = () => {\n        numPassos.innerHTML = '0';\n        outputSpan.innerHTML = '';\n        if (lastLine) {\n            lastLine.classList.remove('line_selected');\n            firstLine.classList.add('line_selected');\n            lastLine = firstLine;\n        }\n\n        for (let i in regSection.children) {\n            try {\n                regSection.children[i].lastChild.innerHTML = 0\n            } catch(e) {}\n        }\n        document.getElementById('reg-value-X').innerHTML = userInput.value\n    }\n})\n\n});\n\n//# sourceURL=webpack://pinguim-norma/./execution.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./common_styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./common_styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* PALETTE FOR DARK AND LIGHT MODE */\\n:root {\\n    /* Backgrounds */\\n    --main-background-color: #474744;\\n    --header-background-color: #67B6B6;\\n    --control-buttons-background: #EBEBE3;\\n    --execution-button-background: #C19898;\\n    --textarea-background: transparent;\\n    --register-lighter-background: #DDC6C6;\\n\\n    /* Colors */\\n    --header-font-color: #EBEBE3;\\n    --main-font-color: #EBEBE3;\\n    --control-button-font-color: #121212;\\n    --title-font-color: #EBEBE3;\\n    --details: #2B2B28;\\n    --textarea-scrollbar: #4A4A48;\\n    --code-font-color: rgba(0, 0, 0, 0);\\n    --code-reserved-words: #F84B3C;\\n    --code-built-in-funcs: #F9BC41;\\n    --code-label-color: #8FBF7F;\\n    --code-background-color: #282828;\\n    --code-punctuation: #8FBF7F;\\n    --code-comment-color: #a0a0a0;\\n    --error-font-color: #F84B3C;\\n    --correct-font-color: #8FBF7F;\\n    --highlight-color: #C19898;\\n\\n    /* General colors */\\n    --dark-color: #121212;\\n}\\n  \\n[data-theme=\\\"dark\\\"] {\\n    /* Backgrounds */\\n    --main-background-color: #F3EAE4;\\n    --control-buttons-background: #67B6B6;\\n    --execution-button-background: #B9A1D8;\\n    --textarea-background: transparent;\\n    --register-lighter-background: #DCD3E7;\\n\\n    /* Colors */\\n    --header-font-color: #F5F5F5;\\n    --main-font-color: #121212;\\n    --control-button-font-color: #F5F5F5;\\n    --title-font-color: #67B6B6;\\n    --details: #F7E4D6;\\n    --textarea-scrollbar: #EAD0B7;\\n    --code-font-color: rgba(0, 0, 0, 0);\\n    --code-reserved-words: #9B0511;\\n    --code-built-in-funcs: #B47523;\\n    --code-label-color: #447A59;\\n    --code-background-color: #FBF2D1;\\n    --code-punctuation: #447A59;\\n    --code-comment-color: #585858;\\n    --error-font-color: #9B0511;\\n    --correct-font-color: #447A59;\\n    --highlight-color: #B9A1D8;\\n}\\n\\n\\n/* GENERAL SETTINGS */\\nhtml,\\nbody {\\n\\tmargin: 0;\\n    font-family: 'Poppins', sans-serif;\\n    background-color: var(--main-background-color);\\n    color: var(--main-font-color);\\n}\\n\\n\\n/* WRAPPERS */\\n.flex-box { \\n    display: flex;\\n    margin: 3vh 0;\\n}\\n\\n\\n/* PAGE HEADER */\\n.simulator-title {\\n    font-size: 3rem;\\n    margin: 0;\\n    margin-bottom: 4vh;\\n    padding: 3vmin;\\n    text-align: center;\\n    background-color: var(--header-background-color);\\n    color: var(--header-font-color);\\n}\\n\\n/* THEME SWITCH */\\n.theme-switch {\\n    position: absolute;\\n    top: 2vmin;\\n    right: 2vmin;\\n    width: 3.75rem;\\n    height: 2.125rem;\\n    -webkit-touch-callout: none;\\n    -webkit-user-select: none;\\n    -khtml-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n}\\n\\n.slider {\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    cursor: pointer;\\n    transition: .4s;\\n    background-color: #2B2B28;\\n}\\n  \\n.slider > span {\\n    position: absolute;\\n    bottom: 0.25rem;\\n    left: 0.25rem;\\n    width: 1.625rem;\\n    height: 1.625rem;\\n    content: \\\"\\\";\\n    transition: .4s;\\n}\\n  \\ninput:checked + .slider {\\n    background-color: #DCD3E7;\\n}\\n  \\ninput:checked + .slider > span {\\n    transform: translateX(26px);\\n}\\n\\n.slider.round {\\n    border-radius: 2.125rem;\\n}\\n\\n.selected-bracket {\\n    text-decoration: underline;\\n    font-weight: bold;\\n}\\n\\n.punctuation {\\n    color: var(--code-punctuation);\\n}\\n\\n/* ======> INDEX PAGE <====== */\\n/* DOWNLOAD AND UPLOAD BUTTONS */\\n.download-and-upload-area {\\n    display: flex;\\n}\\n\\n.button-svg {\\n    text-decoration: none;\\n    text-align: center;\\n    margin-left: 2vw;\\n    border-radius: 0.5rem;\\n    border: none;\\n    padding: 0.3rem;\\n    background-color: var(--control-buttons-background);\\n    color: var(--control-button-font-color);\\n}\\n\\n.button-svg svg{\\n    width: 0.9rem;\\n    height: 0.9rem;\\n    fill: var(--control-button-font-color);\\n}\\n\\n\\n/* FILE NAME DISPLAY */\\n#file-chosen{\\n    margin-left: 1rem;\\n}\\n\\n\\n/* TEXTAREA FOR CODE*/\\n.code-highlight {\\n    font-size: 1.06rem;\\n}\\n\\n.code-textarea {\\n    font-size: 1.06rem;\\n    resize: none;\\n    border: none;\\n    padding: 10px;\\n    width: 56vw;\\n    min-height: 40vh;\\n    overflow-y: scroll;\\n    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.25);\\n    color: var(--code-font-color);\\n    background: var(--textarea-background);\\n    caret-color: var(--main-font-color);\\n}\\n\\n.code-textarea::-webkit-scrollbar {\\n    width: 0.5rem;\\n    background-color: var(--textarea-background);\\n}\\n\\n.code-textarea::-webkit-scrollbar-thumb {\\n    border-radius: 1rem;\\n    background-color: var(--textarea-scrollbar);\\n}\\n\\n.highlighting {\\n    font-size: 1.06rem;\\n    width: 56vw;\\n    height: 40vh;\\n    max-height: 40vh;\\n    margin: 0;\\n    padding: 10px;\\n    white-space: pre-wrap; \\n    word-wrap: break-word;\\n    overflow-x: hidden;\\n    overflow-y: scroll;\\n}\\n\\n.front {\\n    position: relative;\\n    z-index: 1;\\n}\\n\\n.behind {\\n    position: absolute;\\n    margin: 0 2vw;\\n    background-clip: padding-box;\\n    background-color: var(--code-background-color);\\n    z-index: 0;\\n}\\n\\n.label {\\n    color: var(--code-label-color);\\n}\\n\\n.reserved {\\n    color: var(--code-reserved-words);\\n}\\n\\n.builtin {\\n    color: var(--code-built-in-funcs);\\n}\\n\\n.comment {\\n    color: var(--code-comment-color);\\n}\\n\\n\\n/* LOG AND EXECUTION AREA */\\n/* Log area */\\n.log-and-execution-area h2 {\\n    margin: 0;\\n    margin-bottom: 0.5rem;\\n    color: var(--title-font-color);\\n}\\n\\n.log-area div {\\n    padding: 0.4rem;\\n    white-space: pre-line;\\n    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.25);\\n}\\n\\n.log-area__errors, .log-area__corrects {\\n    background-color: var(--code-background-color);\\n    padding: 0.6rem;\\n    font-size: 1rem;\\n    color: var(--error-font-color);\\n    min-width: 30vw;\\n    min-height: 10vh;\\n    max-height: 16vh;\\n    overflow-y: scroll;\\n}\\n\\n.log-area__corrects {\\n    color: var(--correct-font-color);\\n}\\n\\n/* Verify and execute code buttons */\\n.button-area {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 3vmin;\\n}\\n\\n.button {\\n    font-size: 24px;\\n    text-decoration: none;\\n    text-align: center;\\n    font-size: 1.2rem;\\n    border: none;\\n    width: 20vw;\\n    margin: 0.5rem 0;\\n    border-radius: 0.5rem;\\n    padding: 1rem 1.5rem;\\n    background-color: var(--execution-button-background);\\n    color: var(--main-font-color);\\n    cursor: pointer;\\n}\\n\\n\\n\\n/* ======> EXECUTION PAGE <====== */\\n/* BACK BUTTON IN EXECUTION PAGE */\\n.back_button {\\n    margin-bottom: 2.5rem;\\n    text-decoration: none;\\n    font-size: 1.5rem;\\n    color: var(--main-font-color);\\n}\\n\\n.back_button svg {\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    fill: var(--execution-button-background);\\n}\\n\\n\\n/* EXECUTION AREA */\\n.execution-area {\\n    display: flex;\\n}\\n\\n.execution-settings {\\n    width: 50vw;\\n    padding: 0 2vmax;\\n}\\n\\n/* INPUT WORD */\\n.input-code {\\n    margin: 1rem 0;\\n}\\n\\n.input_label {\\n    font-size: 1.8rem;\\n}\\n\\n.input_box {\\n    background: var(--code-background-color);\\n    color:var(--main-font-color);\\n    border: none;\\n    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.25);\\n    border-radius: 5px;\\n    padding: 0.3rem;\\n    font-size: 1.1rem;\\n}\\n\\n\\n/* CONTROL BUTTONS */\\n.control_buttons {\\n    display: flex;\\n    margin-bottom: 2.5rem;\\n    flex-wrap: wrap;\\n    width: 100%;\\n}\\n\\n.control_buttons .button{\\n    font-size: 1rem;\\n    margin-right: 1rem;\\n    min-width: 5rem;\\n    width: 7vw;\\n    padding: 0.3rem 0.8rem;\\n}\\n\\n\\n/* COMPILED PROGRAM */\\n.compiled-program {\\n    width: 50vw;\\n    padding: 0 2vmax;\\n}\\n\\n.table-compiled-program {\\n    font-size: 3rem;\\n}\\n\\n\\n/* ======> SETTINGS FOR CELLPHONES <====== */\\n@media screen and (max-device-width:800px) {\\n    .simulator-title {\\n        padding-right: 4rem;\\n        font-size: 1.6rem;\\n    }\\n\\n    .download-and-upload-area {\\n        flex-direction: column;\\n    }\\n\\n    .coding-area {\\n        display: inline;\\n    }\\n\\n    .flex-box {\\n        display: inline;\\n    }\\n\\n    .code-textarea {\\n        width: 86vw;\\n    }\\n\\n    .highlighting {\\n        width: 86vw;\\n    }\\n\\n    .behind {\\n        transform: translate(0, -102%);\\n    }\\n\\n    .execution-area {\\n        display: inline;\\n    }\\n\\n    .execution-settings {\\n        width: 92vw;\\n    }\\n\\n    .log-and-execution-area {\\n        width: 90vw;\\n    }\\n\\n    .button {\\n        font-size: 1.2rem;\\n        width: 70vw;\\n    }\\n\\n    .compiled-program {\\n        width: 92vw;\\n        margin-bottom: 1rem;\\n    }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pinguim-norma/./common_styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    font-size: 15px;\\n}\\n\\n/* LOG AREA */\\n.log-and-execution-area {\\n    width: 40vw;\\n    padding: 2vw;\\n    padding-top: 0;\\n}\\n\\n/* TEXTAREA FOR CODE */\\n.code-textarea {\\n    background: transparent;\\n}\\n\\n.line-column-area, .code-textarea {\\n    margin: 0 2vw;\\n}\\n\\n.line-column-area {\\n    margin-top: 1vh;\\n    font-size: 1.06rem;\\n}\\n\\n.line-column {\\n    font-weight: bold;\\n}\\n\\n/* STEP CONTROL */\\n.step-control {\\n    width: 60%;\\n}\\n\\n/* REGISTERS */\\n.register_section {\\n    margin-top: 2.5rem;\\n}\\n\\n.register_section__registers {\\n    display: flex;\\n    flex-wrap: wrap;\\n}\\n\\n.register {\\n    text-align: center;\\n    min-height: 4rem;\\n    min-width: 3.5rem;\\n    background-color: var(--register-lighter-background);\\n    color: var(--dark-color);\\n    border-radius: 0.6rem;\\n    font-size: 2rem;\\n    margin-right: 1rem;\\n    margin-bottom: 1rem;\\n}\\n\\n.register_name {\\n    background-color: var(--execution-button-background);\\n    color: var(--main-font-color);\\n    margin: 0;\\n    border-radius: 0.6rem 0.6rem 0rem 0rem;\\n    min-height: 1.5rem;\\n    height: 3vmin;\\n    font-size: 1.5rem;\\n}\\n\\n.register_value {\\n    margin-top: 0.5vh;\\n}\\n\\n\\n/* COMPILED CODE */\\ntable, tr, td {\\n    font-family: monospace;\\n    background-color: var(--textarea-background);\\n    color: var(--main-font-color);\\n    border-collapse: collapse;\\n}\\n\\n.line_selected td {\\n    background-color: var(--highlight-color);\\n}\\n\\n.step_column {\\n    padding-left: 8px;\\n    padding-right: 8px;\\n    padding-top: 6px;\\n    padding-bottom: 6px;\\n    width: 4.5rem;\\n    border-top-left-radius: 6px;\\n    border-bottom-left-radius: 6px;\\n}\\n\\n.program_column {\\n    padding-left: 8px;\\n    padding-right: 8px;\\n    padding-top: 6px;\\n    padding-bottom: 6px;\\n    border-top-right-radius: 6px;\\n    border-bottom-right-radius: 6px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pinguim-norma/./styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./common_styles.css":
/*!***************************!*\
  !*** ./common_styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./common_styles.css */ \"./node_modules/css-loader/dist/cjs.js!./common_styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pinguim-norma/./common_styles.css?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pinguim-norma/./styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pinguim-norma/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "../norma-wasm/pkg/norma_wasm_bg.wasm":
/*!********************************************!*\
  !*** ../norma-wasm/pkg/norma_wasm_bg.wasm ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"f544d8397a9a9a3d6f41\", {\n\t\t\"./norma_wasm_bg.js\": {\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbindgen_json_parse\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_json_parse,\n\t\t\t\"__wbg_new_693216e109162396\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_693216e109162396,\n\t\t\t\"__wbg_stack_0ddaca5d1abfb52f\": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_0ddaca5d1abfb52f,\n\t\t\t\"__wbg_error_09919627ac0992f5\": WEBPACK_IMPORTED_MODULE_0.__wbg_error_09919627ac0992f5,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\t\"__wbindgen_rethrow\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_rethrow\n\t\t}\n\t});\n}\n__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./norma_wasm_bg.js */ \"../norma-wasm/pkg/norma_wasm_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\treturn __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);\n}, 1);\n\n//# sourceURL=webpack://pinguim-norma/../norma-wasm/pkg/norma_wasm_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./execution.js");
/******/ 	
/******/ })()
;