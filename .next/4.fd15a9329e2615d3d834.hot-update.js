webpackHotUpdate(4,{

/***/ "./node_modules/react-loader-spinner/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js"), __webpack_require__("./node_modules/prop-types/index.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/audio.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/ball-triangle.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/bars.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/circles.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/grid.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/hearts.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/oval.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/puff.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/rings.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/tail-spin.js"), __webpack_require__("./node_modules/react-loader-spinner/dist/loading/three-dots.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'), require('./loading/audio'), require('./loading/ball-triangle'), require('./loading/bars'), require('./loading/circles'), require('./loading/grid'), require('./loading/hearts'), require('./loading/oval'), require('./loading/puff'), require('./loading/rings'), require('./loading/tail-spin'), require('./loading/three-dots'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes, global.audio, global.ballTriangle, global.bars, global.circles, global.grid, global.hearts, global.oval, global.puff, global.rings, global.tailSpin, global.threeDots);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _propTypes, _audio, _ballTriangle, _bars, _circles, _grid, _hearts, _oval, _puff, _rings, _tailSpin, _threeDots) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Loader = function (_React$Component) {
        _inherits(Loader, _React$Component);

        function Loader() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, Loader);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.svg = function (type, visible) {
                if (type === 'Audio') {
                    return (0, _audio.audio)(_this.props);
                } else if (type === 'Ball-Triangle') {
                    return (0, _ballTriangle.ballTrangle)(_this.props);
                } else if (type === 'Bars') {
                    return (0, _bars.bars)(_this.props);
                } else if (type === 'Circles') {
                    return (0, _circles.circles)(_this.props);
                } else if (type === 'Grid') {
                    return (0, _grid.grid)(_this.props);
                } else if (type === 'Hearts') {
                    return (0, _hearts.hearts)(_this.props);
                } else if (type === 'Oval') {
                    return (0, _oval.oval)(_this.props);
                } else if (type === 'Puff') {
                    return (0, _puff.puff)(_this.props);
                } else if (type === 'Rings') {
                    return (0, _rings.rings)(_this.props);
                } else if (type === 'TailSpin') {
                    return (0, _tailSpin.tailSpin)(_this.props);
                } else if (type === 'ThreeDots') {
                    return (0, _threeDots.threeDots)(_this.props);
                }

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Loading...Please Wait'
                    ),
                    _react2.default.createElement(
                        'small',
                        null,
                        _react2.default.createElement(
                            'i',
                            null,
                            'Note:No specfic svg type exist'
                        )
                    )
                );
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Loader, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    color = _props.color,
                    type = _props.type,
                    height = _props.height,
                    width = _props.width;

                var style = {
                    fill: color,
                    height: height,
                    width: width
                };
                return _react2.default.createElement(
                    'div',
                    null,
                    this.svg(type)
                );
            }
        }]);

        return Loader;
    }(_react2.default.Component);

    Loader.propTypes = {
        color: _propTypes2.default.string,
        type: _propTypes2.default.string,
        height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    };
    Loader.defaultProps = {
        color: 'blue',
        type: 'audio',
        height: 80,
        width: 80,
        visible: true
    };
    exports.default = Loader;
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/audio.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.audio = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.audio = audio;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function audio(svg) {
        return _react2.default.createElement(
            "svg",
            { height: svg.height, width: svg.width, fill: svg.color, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg" },
            _react2.default.createElement(
                "g",
                { transform: "matrix(1 0 0 -1 0 80)" },
                _react2.default.createElement(
                    "rect",
                    { width: "10", height: "20", rx: "3" },
                    _react2.default.createElement("animate", { attributeName: "height",
                        begin: "0s", dur: "4.3s",
                        values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "rect",
                    { x: "15", width: "10", height: "80", rx: "3" },
                    _react2.default.createElement("animate", { attributeName: "height",
                        begin: "0s", dur: "2s",
                        values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "rect",
                    { x: "30", width: "10", height: "50", rx: "3" },
                    _react2.default.createElement("animate", { attributeName: "height",
                        begin: "0s", dur: "1.4s",
                        values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "rect",
                    { x: "45", width: "10", height: "30", rx: "3" },
                    _react2.default.createElement("animate", { attributeName: "height",
                        begin: "0s", dur: "2s",
                        values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear",
                        repeatCount: "indefinite" })
                )
            )
        );
    };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/ball-triangle.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.ballTriangle = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ballTrangle = ballTrangle;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function ballTrangle(svg) {
        return _react2.default.createElement(
            "svg",
            { height: svg.height, width: svg.width, stroke: svg.color, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg" },
            _react2.default.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                _react2.default.createElement(
                    "g",
                    { transform: "translate(1 1)", strokeWidth: "2" },
                    _react2.default.createElement(
                        "circle",
                        { cx: "5", cy: "50", r: "5" },
                        _react2.default.createElement("animate", { attributeName: "cy",
                            begin: "0s", dur: "2.2s",
                            values: "50;5;50;50",
                            calcMode: "linear",
                            repeatCount: "indefinite" }),
                        _react2.default.createElement("animate", { attributeName: "cx",
                            begin: "0s", dur: "2.2s",
                            values: "5;27;49;5",
                            calcMode: "linear",
                            repeatCount: "indefinite" })
                    ),
                    _react2.default.createElement(
                        "circle",
                        { cx: "27", cy: "5", r: "5" },
                        _react2.default.createElement("animate", { attributeName: "cy",
                            begin: "0s", dur: "2.2s",
                            from: "5", to: "5",
                            values: "5;50;50;5",
                            calcMode: "linear",
                            repeatCount: "indefinite" }),
                        _react2.default.createElement("animate", { attributeName: "cx",
                            begin: "0s", dur: "2.2s",
                            from: "27", to: "27",
                            values: "27;49;5;27",
                            calcMode: "linear",
                            repeatCount: "indefinite" })
                    ),
                    _react2.default.createElement(
                        "circle",
                        { cx: "49", cy: "50", r: "5" },
                        _react2.default.createElement("animate", { attributeName: "cy",
                            begin: "0s", dur: "2.2s",
                            values: "50;50;5;50",
                            calcMode: "linear",
                            repeatCount: "indefinite" }),
                        _react2.default.createElement("animate", { attributeName: "cx",
                            from: "49", to: "49",
                            begin: "0s", dur: "2.2s",
                            values: "49;5;27;49",
                            calcMode: "linear",
                            repeatCount: "indefinite" })
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/bars.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.bars = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.bars = bars;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function bars(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.height, height: svg.width, fill: svg.color, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg" },
            _react2.default.createElement(
                "rect",
                { y: "10", width: "15", height: "120", rx: "6" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0.5s", dur: "1s",
                    values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "y",
                    begin: "0.5s", dur: "1s",
                    values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: "30", y: "10", width: "15", height: "120", rx: "6" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0.25s", dur: "1s",
                    values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "y",
                    begin: "0.25s", dur: "1s",
                    values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: "60", width: "15", height: "140", rx: "6" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0s", dur: "1s",
                    values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "y",
                    begin: "0s", dur: "1s",
                    values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: "90", y: "10", width: "15", height: "120", rx: "6" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0.25s", dur: "1s",
                    values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "y",
                    begin: "0.25s", dur: "1s",
                    values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: "120", y: "10", width: "15", height: "120", rx: "6" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0.5s", dur: "1s",
                    values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "y",
                    begin: "0.5s", dur: "1s",
                    values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                    repeatCount: "indefinite" })
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/circles.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.circles = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.circles = circles;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function circles(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 135 135", xmlns: "http://www.w3.org/2000/svg", fill: svg.color },
            _react2.default.createElement(
                "path",
                { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" },
                _react2.default.createElement("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    from: "0 67 67",
                    to: "-360 67 67",
                    dur: "2.5s",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "path",
                { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" },
                _react2.default.createElement("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    from: "0 67 67",
                    to: "360 67 67",
                    dur: "8s",
                    repeatCount: "indefinite" })
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/grid.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.grid = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.grid = grid;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function grid(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 105 105", fill: svg.color },
            _react2.default.createElement(
                "circle",
                { cx: "12.5", cy: "12.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fillOpacity",
                    begin: "0s", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "12.5", cy: "52.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "100ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "52.5", cy: "12.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "300ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "52.5", cy: "52.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "600ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "92.5", cy: "12.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "800ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "92.5", cy: "52.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "400ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "12.5", cy: "92.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "700ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "52.5", cy: "92.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "500ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "92.5", cy: "92.5", r: "12.5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "200ms", dur: "1s",
                    values: "1;.2;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/hearts.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.hearts = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.hearts = hearts;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function hearts(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", fill: svg.color },
            _react2.default.createElement(
                "path",
                { d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z", attributeName: "fill-opacity", from: "0", to: ".5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "0s", dur: "1.4s",
                    values: "0.5;1;0.5",
                    calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "path",
                { d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z", attributeName: "fill-opacity", from: "0", to: ".5" },
                _react2.default.createElement("animate", { attributeName: "fill-opacity",
                    begin: "0.7s", dur: "1.4s",
                    values: "0.5;1;0.5",
                    calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/oval.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.oval = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.oval = oval;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function oval(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", stroke: svg.color },
            _react2.default.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                _react2.default.createElement(
                    "g",
                    { transform: "translate(1 1)", strokeWidth: "2" },
                    _react2.default.createElement("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: "18" }),
                    _react2.default.createElement(
                        "path",
                        { d: "M36 18c0-9.94-8.06-18-18-18" },
                        _react2.default.createElement("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            from: "0 18 18",
                            to: "360 18 18",
                            dur: "1s",
                            repeatCount: "indefinite" })
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/puff.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.puff = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.puff = puff;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function puff(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: svg.color },
            _react2.default.createElement(
                "g",
                { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
                _react2.default.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "1" },
                    _react2.default.createElement("animate", { attributeName: "r",
                        begin: "0s", dur: "1.8s",
                        values: "1; 20",
                        calcMode: "spline",
                        keyTimes: "0; 1",
                        keySplines: "0.165, 0.84, 0.44, 1",
                        repeatCount: "indefinite" }),
                    _react2.default.createElement("animate", { attributeName: "strokeOpacity",
                        begin: "0s", dur: "1.8s",
                        values: "1; 0",
                        calcMode: "spline",
                        keyTimes: "0; 1",
                        keySplines: "0.3, 0.61, 0.355, 1",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "1" },
                    _react2.default.createElement("animate", { attributeName: "r",
                        begin: "-0.9s", dur: "1.8s",
                        values: "1; 20",
                        calcMode: "spline",
                        keyTimes: "0; 1",
                        keySplines: "0.165, 0.84, 0.44, 1",
                        repeatCount: "indefinite" }),
                    _react2.default.createElement("animate", { attributeName: "strokeOpacity",
                        begin: "-0.9s", dur: "1.8s",
                        values: "1; 0",
                        calcMode: "spline",
                        keyTimes: "0; 1",
                        keySplines: "0.3, 0.61, 0.355, 1",
                        repeatCount: "indefinite" })
                )
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/rings.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.rings = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.rings = rings;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function rings(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", stroke: svg.color },
            _react2.default.createElement(
                "g",
                { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
                _react2.default.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    _react2.default.createElement("animate", { attributeName: "r",
                        begin: "1.5s", dur: "3s",
                        values: "6;22",
                        calcMode: "linear",
                        repeatCount: "indefinite" }),
                    _react2.default.createElement("animate", { attributeName: "stroke-opacity",
                        begin: "1.5s", dur: "3s",
                        values: "1;0", calcMode: "linear",
                        repeatCount: "indefinite" }),
                    _react2.default.createElement("animate", { attributeName: "stroke-width",
                        begin: "1.5s", dur: "3s",
                        values: "2;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    _react2.default.createElement("animate", { attributeName: "r",
                        begin: "3s", dur: "3s",
                        values: "6;22",
                        calcMode: "linear",
                        repeatCount: "indefinite" }),
                    _react2.default.createElement("animate", { attributeName: "strokeOpacity",
                        begin: "3s", dur: "3s",
                        values: "1;0", calcMode: "linear",
                        repeatCount: "indefinite" }),
                    _react2.default.createElement("animate", { attributeName: "strokeWidth",
                        begin: "3s", dur: "3s",
                        values: "2;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "8" },
                    _react2.default.createElement("animate", { attributeName: "r",
                        begin: "0s", dur: "1.5s",
                        values: "6;1;2;3;4;5;6",
                        calcMode: "linear",
                        repeatCount: "indefinite" })
                )
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/tail-spin.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.tailSpin = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.tailSpin = tailSpin;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function tailSpin(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" },
            _react2.default.createElement(
                "defs",
                null,
                _react2.default.createElement(
                    "linearGradient",
                    { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
                    _react2.default.createElement("stop", { stopColor: svg.color, stopOpacity: "0", offset: "0%" }),
                    _react2.default.createElement("stop", { stopColor: svg.color, stopOpacity: ".631", offset: "63.146%" }),
                    _react2.default.createElement("stop", { stopColor: svg.color, offset: "100%" })
                )
            ),
            _react2.default.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                _react2.default.createElement(
                    "g",
                    { transform: "translate(1 1)" },
                    _react2.default.createElement(
                        "path",
                        { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: "url(#a)", strokeWidth: "2" },
                        _react2.default.createElement("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            from: "0 18 18",
                            to: "360 18 18",
                            dur: "0.9s",
                            repeatCount: "indefinite" })
                    ),
                    _react2.default.createElement(
                        "circle",
                        { fill: "#fff", cx: "36", cy: "18", r: "1" },
                        _react2.default.createElement("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            from: "0 18 18",
                            to: "360 18 18",
                            dur: "0.9s",
                            repeatCount: "indefinite" })
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loading/three-dots.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/cjs/react.development.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.threeDots = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.threeDots = threeDots;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function threeDots(svg) {
        return _react2.default.createElement(
            "svg",
            { width: svg.width, height: svg.height, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: svg.color },
            _react2.default.createElement(
                "circle",
                { cx: "15", cy: "15", r: "15" },
                _react2.default.createElement("animate", { attributeName: "r", from: "15", to: "15",
                    begin: "0s", dur: "0.8s",
                    values: "15;9;15", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "fillOpacity", from: "1", to: "1",
                    begin: "0s", dur: "0.8s",
                    values: "1;.5;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "60", cy: "15", r: "9", attributeName: "fillOpacity", from: "1", to: "0.3" },
                _react2.default.createElement("animate", { attributeName: "r", from: "9", to: "9",
                    begin: "0s", dur: "0.8s",
                    values: "9;15;9", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "fillOpacity", from: "0.5", to: "0.5",
                    begin: "0s", dur: "0.8s",
                    values: ".5;1;.5", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "105", cy: "15", r: "15" },
                _react2.default.createElement("animate", { attributeName: "r", from: "15", to: "15",
                    begin: "0s", dur: "0.8s",
                    values: "15;9;15", calcMode: "linear",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "fillOpacity", from: "1", to: "1",
                    begin: "0s", dur: "0.8s",
                    values: "1;.5;1", calcMode: "linear",
                    repeatCount: "indefinite" })
            )
        );
    }
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/react-loader-spinner/dist/index.js");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loader_spinner__ = __webpack_require__("./node_modules/react-loader-spinner/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loader_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loader_spinner__);

var _jsxFileName = "C:\\Users\\Kim\\Desktop\\Next2\\pages\\index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      blocks: [],
      transactions: [],
      transactionAdrs: [],
      transactionHash: [],
      page: 10,
      index: null,
      show: 'blocks',
      search: '',
      address: '',
      safebalance: '',
      confirmedbalance: '',
      pendingbalance: '',
      hash: ''
    };
    _this.getAllBlocks = _this.getAllBlocks.bind(_assertThisInitialized(_this));
    _this.srchChange = _this.srchChange.bind(_assertThisInitialized(_this));
    _this.search = _this.search.bind(_assertThisInitialized(_this));
    _this.getTransactionsandBalanceofAddress = _this.getTransactionsandBalanceofAddress.bind(_assertThisInitialized(_this));
    _this.getTransactionbyHash = _this.getTransactionbyHash.bind(_assertThisInitialized(_this));
    return _this;
  } // handling escape close


  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAllBlocks();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "getAllBlocks",
    value: function () {
      var _getAllBlocks = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3001/blocks/');

              case 2:
                response = _context.sent;

                if (response) {
                  this.setState({
                    blocks: response.data,
                    show: 'blocks'
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getAllBlocks() {
        return _getAllBlocks.apply(this, arguments);
      };
    }()
  }, {
    key: "getBlocksTransactions",
    value: function () {
      var _getBlocksTransactions = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(index) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(index);
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3001/blocks/' + index);

              case 3:
                response = _context2.sent;

                if (response) {
                  this.setState({
                    transactions: response.data[0].transactions
                  });
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getBlocksTransactions(_x) {
        return _getBlocksTransactions.apply(this, arguments);
      };
    }()
  }, {
    key: "getTransactionsandBalanceofAddress",
    value: function () {
      var _getTransactionsandBalanceofAddress = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(address) {
        var response, balance;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3001/address/' + address + '/transactions');

              case 2:
                response = _context3.sent;

                if (response) {
                  console.log(response.data);
                  this.setState({
                    transactionAdrs: response.data
                  });
                }

                _context3.next = 6;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3001/address/' + address + '/balance');

              case 6:
                balance = _context3.sent;

                if (balance) {
                  console.log(balance.data);
                  this.setState({
                    safebalance: balance.data.safeBalance,
                    confirmedbalance: balance.data.confirmedBalance,
                    pendingbalance: balance.data.pendingBalance,
                    address: address
                  });
                }

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getTransactionsandBalanceofAddress(_x2) {
        return _getTransactionsandBalanceofAddress.apply(this, arguments);
      };
    }()
  }, {
    key: "getTransactionbyHash",
    value: function () {
      var _getTransactionbyHash = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(txhash) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3001/transactions/' + txhash);

              case 2:
                response = _context4.sent;

                if (response) {
                  console.log(response.data);
                  this.setState({
                    transactionHash: response.data
                  });
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getTransactionbyHash(_x3) {
        return _getTransactionbyHash.apply(this, arguments);
      };
    }()
  }, {
    key: "srchChange",
    value: function srchChange(e) {
      this.setState({
        search: e.target.value
      });
    }
  }, {
    key: "search",
    value: function search() {
      if (!isNaN(this.state.search) && this.state.search != '' && this.state.search.length != 41) {
        this.getBlocksTransactions(this.state.search);
        this.setState({
          show: 'transactions',
          index: this.state.search
        });
      } else if (this.state.search.length == 40 || this.state.search.length == 41) {
        this.getTransactionsandBalanceofAddress(this.state.search);
        this.setState({
          show: 'transactionsAdrs'
        });
      } else if (this.state.search.length == 64) {
        this.getTransactionbyHash(this.state.search);
        this.setState({
          show: 'transactionsHash',
          hash: this.state.search
        });
      } else if (this.state.search == '') {
        alert('Fill out search box');
      } else {
        console.log('Error');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var allblocks = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%',
          'margin-top': '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Index"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Difficulty"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "MinedBy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "BlockDataHash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Nonce"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Date Created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "BlockHash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, this.state.blocks.map(function (block) {
        return parseInt(block.index) <= _this2.state.page ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          key: block.index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, block.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          style: {
            color: '#3498db'
          },
          onClick: function onClick() {
            _this2.setState({
              index: block.index,
              show: 'transactions'
            });

            _this2.getBlocksTransactions(block.index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, block.transactions.length)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, block.difficulty), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, block.minedBy), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, block.blockDataHash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, block.nonce), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, block.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, block.blockHash)) : null;
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        colSpan: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */], {
        floated: "right",
        pagination: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["b" /* Icon */], {
        name: "chevron left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "1"), this.state.blocks.map(function (block) {
        if (parseInt(block.index) == _this2.state.page) {
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
            as: "a",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            }
          }, block.index + 1); //this.setState({page: this.state.page+10})
        }

        null;
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["b" /* Icon */], {
        name: "chevron right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }))))))));
      var transactions = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%',
          'margin-top': '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Transactions for Block: ", this.state.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, this.state.transactions.map(function (trans) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          }
        }, trans.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, trans.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, trans.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        }, trans.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          }
        }, trans.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, trans.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, trans.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, trans.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, trans.transactionDataHash));
      }))));
      var transactionsAdrs = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          'margin-top': '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, "Address: ", this.state.address), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "Safe balance: ", this.state.safebalance), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, "Confirmed balance: ", this.state.confirmedbalance), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, "Pending balance: ", this.state.pendingbalance), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, this.state.transactionAdrs.map(function (trans) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          }
        }, trans.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          }
        }, trans.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          }
        }, trans.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          }
        }, trans.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        }, trans.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }, trans.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        }, trans.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          }
        }, trans.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          }
        }, trans.transactionDataHash));
      })))));
      var transactionsbyhash = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          'margin-top': '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, "Transaction Hash: ", this.state.hash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, this.state.transactionHash.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, this.state.transactionHash.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, this.state.transactionHash.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, this.state.transactionHash.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, this.state.transactionHash.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, this.state.transactionHash.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, this.state.transactionHash.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, this.state.transactionHash.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, this.state.transactionHash.transactionDataHash))))));
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
        integrity: "sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
        integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'max-width': '97%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        style: {
          'margin-top': '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          height: '6px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        onClick: this.getAllBlocks,
        style: {
          'font-family': 'Paytone One',
          'font-size': '40px',
          'height': '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, "Mccoin Explorer")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'margin-right': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Input */], {
        fluid: true,
        placeholder: "Search by Block Number/ Address/ TxHash",
        onChange: this.srchChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-3",
        style: {
          'padding': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        secondary: true,
        style: {
          'width': '100%'
        },
        onClick: this.search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, "Search")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_loader_spinner___default.a, {
        type: "Circles",
        color: "#somecolor",
        height: 80,
        width: 80,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }), this.state.show == 'blocks' ? allblocks : this.state.show == 'transactions' ? transactions : this.state.show == 'transactionsAdrs' ? transactionsAdrs : transactionsbyhash));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\Kim\\Desktop\\Next2\\pages\\index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.fd15a9329e2615d3d834.hot-update.js.map