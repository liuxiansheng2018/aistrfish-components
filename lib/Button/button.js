'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

require('antd/dist/antd.css');

function InternalButton(props) {
  return /*#__PURE__*/ _react.default.createElement(
    _antd.Button,
    {
      type: 'primary',
    },
    props.title,
    '89',
  );
}

var _default = InternalButton;
exports.default = _default;
