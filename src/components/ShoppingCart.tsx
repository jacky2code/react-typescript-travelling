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

// 组件参数
interface Props {}
// 组件状态
interface State {
  // 下拉菜单打开状态
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={styles.cardContainer}>
        <button
          className={styles.button}
          onClick={() => {
            // 操作下拉菜单打开/关闭
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          购物车 2 (件)
        </button>
        <div
          className={styles.cartDropDown}
        // 下拉菜单是否打开
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
