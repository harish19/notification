function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"NotificationContainer":"_styles-module__NotificationContainer__390yT","success":"_styles-module__success__2iiDh","error":"_styles-module__error__3fyPz","notify":"_styles-module__notify__QGAPK","close":"_styles-module__close__2I1sI"};

var Notification = function Notification(_ref) {
  var text = _ref.text,
      type = _ref.type,
      timeStamp = _ref.timeStamp;

  var _useState = React.useState(true),
      showNotify = _useState[0],
      updateNotify = _useState[1];

  function closeNotification() {
    updateNotify(false);
  }

  React.useEffect(function () {
    var removalInterval = timeStamp || 5000;
    setTimeout(function () {
      updateNotify(false);
    }, removalInterval);
  });
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, showNotify ? /*#__PURE__*/React__default.createElement("div", {
    className: styles.NotificationContainer + " " + (type ? styles[type] : "")
  }, " ", text, /*#__PURE__*/React__default.createElement("a", {
    className: styles.close,
    onClick: closeNotification
  }, "X")) : "");
};

exports.Notification = Notification;
//# sourceMappingURL=index.js.map
