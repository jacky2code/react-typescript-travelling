/*
 * @Author: GKing
 * @Date: 2022-12-05 20:46:09
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-28 16:41:32
 * @Description:
 * @TODO:
 */
import React from "react";

import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";

// 组件参数
interface Props {}
// 组件状态
interface State {
  // 下拉菜单打开状态
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  // * 生命周期第一阶段：初始化
  // 初始化组件 state
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 操作下拉菜单打开/关闭
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cardContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                <FiShoppingCart />
                <span>购物车 {value.shoppingCart.items.length} (件)</span>
              </button>
              <div
                className={styles.cartDropDown}
                // 下拉菜单是否打开
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {value.shoppingCart.items.map((i) => (
                    <li>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}

export default ShoppingCart;
