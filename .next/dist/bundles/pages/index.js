module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loader_spinner__ = __webpack_require__("react-loader-spinner");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loader_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loader_spinner__);

var _jsxFileName = "C:\\Users\\Kim\\Desktop\\Next2\\pages\\index.js";

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
      hash: '',
      load: true
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
                    show: 'blocks',
                    load: false
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
                    transactions: response.data[0].transactions,
                    load: false
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
                    transactionAdrs: response.data,
                    load: false
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
          index: this.state.search,
          load: true
        });
      } else if (this.state.search.length == 40 || this.state.search.length == 41) {
        this.getTransactionsandBalanceofAddress(this.state.search);
        this.setState({
          show: 'transactionsAdrs',
          load: true
        });
      } else if (this.state.search.length == 64) {
        this.getTransactionbyHash(this.state.search);
        this.setState({
          show: 'transactionsHash',
          hash: this.state.search,
          load: true
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
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Index"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Difficulty"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "MinedBy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "BlockDataHash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Nonce"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "Date Created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, "BlockHash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, this.state.blocks.map(function (block) {
        return parseInt(block.index) <= _this2.state.page ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
          key: block.index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, block.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          style: {
            color: '#3498db'
          },
          onClick: function onClick() {
            _this2.setState({
              index: block.index,
              show: 'transactions',
              load: true
            });

            _this2.getBlocksTransactions(block.index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, block.transactions.length)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, block.difficulty), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, block.minedBy), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, block.blockDataHash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, block.nonce), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, block.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, block.blockHash)) : null;
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        colSpan: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Menu"], {
        floated: "right",
        pagination: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Menu"].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Icon"], {
        name: "chevron left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Menu"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "1"), this.state.blocks.map(function (block) {
        if (parseInt(block.index) == _this2.state.page) {
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Menu"].Item, {
            as: "a",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            }
          }, block.index + 1); //this.setState({page: this.state.page+10})
        }

        null;
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Menu"].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Icon"], {
        name: "chevron right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
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
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "Transactions for Block: ", this.state.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, this.state.transactions.map(function (trans) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          }
        }, trans.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, trans.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, trans.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, trans.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, trans.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, trans.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, trans.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }, trans.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }, trans.transactionDataHash));
      }))));
      var transactionsAdrs = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          'margin-top': '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, "Address: ", this.state.address), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, "Safe balance: ", this.state.safebalance), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "Confirmed balance: ", this.state.confirmedbalance), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Pending balance: ", this.state.pendingbalance), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, this.state.transactionAdrs.map(function (trans) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        }, trans.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }, trans.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        }, trans.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          }
        }, trans.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          }
        }, trans.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          }
        }, trans.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          }
        }, trans.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }, trans.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          }
        }, trans.transactionDataHash));
      })))));
      var transactionsbyhash = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          'margin-top': '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, "Transaction Hash: ", this.state.hash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, this.state.transactionHash.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, this.state.transactionHash.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, this.state.transactionHash.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, this.state.transactionHash.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, this.state.transactionHash.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, this.state.transactionHash.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, this.state.transactionHash.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, this.state.transactionHash.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, this.state.transactionHash.transactionDataHash))))));
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
        integrity: "sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
        integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'max-width': '97%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        style: {
          'margin-top': '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          height: '6px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
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
          lineNumber: 312
        }
      }, "Mccoin Explorer")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'margin-right': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Input"], {
        fluid: true,
        placeholder: "Search by Block Number/ Address/ TxHash",
        onChange: this.srchChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-3",
        style: {
          'padding': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Button"], {
        secondary: true,
        style: {
          'width': '100%'
        },
        onClick: this.search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, "Search")))))), this.state.show == 'blocks' ? allblocks : this.state.show == 'transactions' ? transactions : this.state.show == 'transactionsAdrs' ? transactionsAdrs : transactionsbyhash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, this.state.load ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_loader_spinner___default.a, {
        type: "TailSpin",
        color: "gray",
        height: 50,
        width: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }) : null));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loader-spinner":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map