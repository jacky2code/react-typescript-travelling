/*
 * @Author: GKing
 * @Date: 2022-12-05 17:31:04
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-05 20:25:43
 * @Description: 机器人组件
 * @TODO:
 */
import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, email } = props;
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);
  const addToCart = () => {
    if(setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>author: {value.username}</p>
      <button onClick={addToCart}>add to cart</button>
    </div>
  );
};

export default Robot;
