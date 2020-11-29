import React, { useState, useEffect, Fragment } from 'react';

var styles = {"NotificationContainer":"_styles-module__NotificationContainer__390yT","success":"_styles-module__success__2iiDh","error":"_styles-module__error__3fyPz","notify":"_styles-module__notify__QGAPK","close":"_styles-module__close__2I1sI"};

const Notification = ({
  text,
  type,
  timeStamp
}) => {
  let [showNotify, updateNotify] = useState(true);

  function closeNotification() {
    updateNotify(false);
  }

  useEffect(() => {
    let removalInterval = timeStamp || 5000;
    setTimeout(function () {
      updateNotify(false);
    }, removalInterval);
  });
  return /*#__PURE__*/React.createElement(Fragment, null, showNotify ? /*#__PURE__*/React.createElement("div", {
    className: `${styles.NotificationContainer} ${type ? styles[type] : ""}`
  }, " ", text, /*#__PURE__*/React.createElement("a", {
    className: styles.close,
    onClick: closeNotification
  }, "X")) : "");
};

export { Notification };
//# sourceMappingURL=index.modern.js.map
