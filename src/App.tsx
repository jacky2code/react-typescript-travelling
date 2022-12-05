/*
 * @Author: GKing
 * @Date: 2022-12-05 17:13:34
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-05 21:02:34
 * @Description: 
 * @TODO: 
 */
import React from 'react';
import robots from './datas/robots.json'
import Robot from './components/Robot';
import styles from './App.module.css';
import logo  from "./assets/images/logo.svg";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo'/>
        <h1>React-Typescript-Traveling</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>

  );
}

export default App; 
