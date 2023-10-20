import styles from './login.module.css';
import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// const [tab1IsVisible, tab1SetIsVisible] = useState(true);
// const [tab2IsVisible, tab2SetIsVisible] = useState(false);
// const [tab3IsVisible, tab3SetIsVisible] = useState(false);
// // let tab1 = document.querySelector('#tab1');
// // let tab2 = document.querySelector('#tab2');
// // let tab3 = document.querySelector('#tab3');
// useEffect(() => {
//   console.log('change!');
// }, [tab1IsVisible, tab2IsVisible, tab3IsVisible]);
export default function Login() {
  return (
    <>
      <h3 className={styles.loginBox}>登入分頁</h3>
      <div className={styles.tabs}>
        <ul>
          <li>
            <Link
              href="#tab1"
              onClick={() => {
                // tab1SetIsVisible(true);
                // tab2SetIsVisible(false);
                // tab3SetIsVisible(false);
              }}
            >
              主頁
            </Link>
          </li>
          <li>
            <Link
              href="#tab2"
              onClick={() => {
                // tab1SetIsVisible(false);
                // tab2SetIsVisible(true);
                // tab3SetIsVisible(false);
              }}
            >
              分頁1
            </Link>
          </li>
          <li>
            <Link
              href="#tab3"
              onClick={() => {
                // tab1SetIsVisible(false);
                // tab2SetIsVisible(false);
                // tab3SetIsVisible(true);
              }}
            >
              分頁2
            </Link>
          </li>
        </ul>
        <div className={styles.contentBox}>
          <div id="tab1">
            <p>主頁面顯示的內容</p>
          </div>
          <div id="tab2">
            <p>頁面1顯示的內容</p>
          </div>
          <div id="tab3">
            <p>頁面2顯示的內容</p>
          </div>
        </div>
      </div>
    </>
  );
}
