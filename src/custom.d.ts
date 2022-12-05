/*
 * @Author: GKing
 * @Date: 2022-12-05 18:33:57
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-05 21:48:41
 * @Description: CSS 声明
 * @TODO: 
 */

// CSS 声明    
declare module "*.css" {
    const css: { [key: string]: string };
    export default css;
}