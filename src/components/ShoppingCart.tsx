/*
 * @Author: GKing
 * @Date: 2022-12-05 20:46:09
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-28 16:41:32
 * @Description: 
 * @TODO: 
 */
import React from "react";

// 组件参数
interface Props {

}
// 组件状态
interface State {
    // 下拉菜单打开状态
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    
    render(): React.ReactNode {
        return (
            <div>
                <button>购物车 2 (件)</button>
            </div>
        );
    }
}