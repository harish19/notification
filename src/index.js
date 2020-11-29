import React,{useState,Fragment,useEffect} from 'react';
import styles from './styles.module.css'

export const Notification = ({ text, type, timeStamp }) => {
  let [showNotify, updateNotify] = useState(true)
  function closeNotification(){
    updateNotify(false);
  }
  useEffect(() => {
    let removalInterval = timeStamp || 5000;
    setTimeout(function(){
      updateNotify(false);
    },removalInterval)
  });

  return (
    <Fragment>
      {showNotify?<div className={`${styles.NotificationContainer} ${type ? styles[type] : ""}`} > {text}<a className={styles.close} onClick={closeNotification}>X</a></div>:""}
    </Fragment>
  );
}
