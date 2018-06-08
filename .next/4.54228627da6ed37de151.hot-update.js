webpackHotUpdate(4,{

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
      page: 10,
      index: null,
      show: 'blocks'
    };
    _this.getAllBlocks = _this.getAllBlocks.bind(_assertThisInitialized(_this));
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
                  //console.log(response.data);
                  this.setState({
                    blocks: response.data
                  });
                  console.log(this.state.blocks[0]);
                  console.log(this.state.blocks[0].index);
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
                  console.log(response.data[index].transactions);
                  this.setState({
                    transactions: response.data[index].transactions
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var allblocks = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Index"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Difficulty"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "MinedBy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "BlockDataHash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Nonce"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Date Created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "BlockHash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.state.blocks.map(function (block) {
        return parseInt(block.index) <= _this2.state.page ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          key: block,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, block.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          style: {
            color: '#3498db'
          },
          onClick: function onClick() {
            _this2.setState({
              show: 'transactions'
            });

            _this2.getBlocksTransactions(block.index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, block.transactions.length)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, block.difficulty), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, block.minedBy), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, block.blockDataHash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, block.nonce), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, block.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, block.blockHash)) : null;
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        colSpan: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */], {
        floated: "right",
        pagination: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["b" /* Icon */], {
        name: "chevron left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "1"), this.state.blocks.map(function (block) {
        if (parseInt(block.index) == _this2.state.page) {
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
            as: "a",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          }, block.index + 1); //this.setState({page: this.state.page+10})
        }

        null;
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["b" /* Icon */], {
        name: "chevron right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })))))));
      var transactions = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        style: {
          'max-width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, this.state.transactions.map(function (trans) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          key: trans,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, trans.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, trans.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, trans.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, trans.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, trans.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, trans.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, trans.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, trans.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, trans.transactionDataHash));
      })));
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
        integrity: "sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
        integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'max-width': '97%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        style: {
          'margin-top': '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          height: '6px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        style: {
          'font-family': 'Paytone One',
          'font-size': '40px',
          'height': '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Mccoin Explorer")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'margin-right': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Input */], {
        fluid: true,
        placeholder: "Search...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-3",
        style: {
          'padding': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        secondary: true,
        style: {
          'width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Search")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, this.state.show == 'blocks' ? allblocks : transactions)));
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
//# sourceMappingURL=4.54228627da6ed37de151.hot-update.js.map