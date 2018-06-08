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
      transactionAdrs: [],
      page: 10,
      index: null,
      show: 'blocks',
      search: '',
      address: ''
    };
    _this.getAllBlocks = _this.getAllBlocks.bind(_assertThisInitialized(_this));
    _this.srchChange = _this.srchChange.bind(_assertThisInitialized(_this));
    _this.search = _this.search.bind(_assertThisInitialized(_this));
    _this.getTransactionsandBalanceofAddress = _this.getTransactionsandBalanceofAddress.bind(_assertThisInitialized(_this));
    return _this;
  } // handling escape close


  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAllBlocks();
      this.getTransactionsandBalanceofAddress();
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
                    blocks: response.data
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
    key: "getTransactionsandBalanceofAddress",
    value: function () {
      var _getTransactionsandBalanceofAddress = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(address) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3001/address/0x000000000000000000000000000000000000000/transactions');

              case 2:
                response = _context3.sent;

                if (response) {
                  console.log(response.data);
                  this.setState({
                    transactionsAdrs: response.data
                  });
                }

              case 4:
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
    key: "srchChange",
    value: function srchChange(e) {
      this.setState({
        search: e.target.value
      });
    }
  }, {
    key: "search",
    value: function search() {
      if (!isNaN(this.state.search) && this.state.search != '') {
        this.getBlocksTransactions(this.state.search);
        this.setState({
          show: 'transactions',
          index: this.state.search
        });
      } else if (this.state.search.length == 40) {
        console.log('Address');
      } else if (this.state.search.length == 64) {
        console.log('txhash');
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
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Index"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Difficulty"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "MinedBy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "BlockDataHash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Nonce"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Date Created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "BlockHash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, this.state.blocks.map(function (block) {
        return parseInt(block.index) <= _this2.state.page ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          key: block,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, block.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
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
            lineNumber: 114
          }
        }, block.transactions.length)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, block.difficulty), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, block.minedBy), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, block.blockDataHash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, block.nonce), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, block.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, block.blockHash)) : null;
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        colSpan: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */], {
        floated: "right",
        pagination: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["b" /* Icon */], {
        name: "chevron left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "1"), this.state.blocks.map(function (block) {
        if (parseInt(block.index) == _this2.state.page) {
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
            as: "a",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            }
          }, block.index + 1); //this.setState({page: this.state.page+10})
        }

        null;
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Menu */].Item, {
        as: "a",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["b" /* Icon */], {
        name: "chevron right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
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
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Transactions for Block: ", this.state.index), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, this.state.transactions.map(function (trans) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          key: trans,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, trans.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, trans.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, trans.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        }, trans.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }, trans.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, trans.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, trans.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, trans.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }, trans.transactionDataHash));
      }))));
      var transactionsAdrs = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          overflow: 'auto',
          'max-width': '100%',
          'margin-top': '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "Transactions on Address: ", this.state.address), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "Fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "Date created"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Data"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "Sender public key"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Data hash"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, this.state.transactions.map(function (trans) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Row, {
          key: trans,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, trans.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, trans.to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, trans.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, trans.fee), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, trans.dateCreated), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }, trans.data), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }, trans.senderPubKey), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        }, trans.transferSuccessful), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["e" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, trans.transactionDataHash));
      }))));
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
        integrity: "sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
        integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'max-width': '97%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        style: {
          'margin-top': '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          height: '6px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        style: {
          'font-family': 'Paytone One',
          'font-size': '40px',
          'height': '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "Mccoin Explorer")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'margin-right': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Input */], {
        fluid: true,
        placeholder: "Search by Block Number/ Address/ TxHash",
        onChange: this.srchChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-3",
        style: {
          'padding': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        secondary: true,
        style: {
          'width': '100%'
        },
        onClick: this.search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, "Search")))))), this.state.show == 'blocks' ? allblocks : transactions));
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
//# sourceMappingURL=4.dafb660532a5692c20bd.hot-update.js.map