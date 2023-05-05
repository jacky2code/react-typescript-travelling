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
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }

      setLoading(false);
    };
    fetchData();
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
      {(!error || error !== "") && <div>网站错误：{error}</div>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
