/*
 * @Author: GKing
 * @Date: 2022-12-05 17:13:34
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-05 21:30:28
 * @Description:
 * @TODO:
 */
import React, { useEffect, useState } from "react";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([])

  useEffect(() => {
    document.title = `点击${count}次`
  }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setRobotGallery(data))
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>React-Typescript-Travelling</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotGallery.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
};

export default App;
