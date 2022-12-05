/*
 * @Author: GKing
 * @Date: 2022-12-05 17:31:04
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-05 20:25:43
 * @Description: 机器人组件
 * @TODO: 
 */
import React from "react";
import styles from "./Robot.module.css"

interface RobotProps {
    id: number;
    name: string;
    email: string;
};

const Robot: React.FC<RobotProps> = (props) => {
    const { id, name, email } = props;
    return (
        <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Robot;
