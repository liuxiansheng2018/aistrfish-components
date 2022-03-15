'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('@testing-library/jest-dom');

var _react = _interopRequireDefault(require('react'));

var _react2 = require('@testing-library/react');

var _index = _interopRequireDefault(require('./index'));

describe('<Foo />', function () {
  it('render Foo with dumi', function () {
    var msg = 'dumi';
    (0, _react2.render)(
      /*#__PURE__*/ _react.default.createElement(_index.default, {
        title: msg,
      }),
    );
    expect(_react2.screen.queryByText(msg)).toBeInTheDocument();
  });
});
