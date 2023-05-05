# React-Typescript-Travelling

## React with Typescript

Create react project with typescript like this:

```bash
npx create-react-app react-ts-travelling --template typescript
```

- tsconfig.json introduction

  ```json
  {
    "compilerOptions": {
      "noImplicitAny": false, //不需要显式的声明变量的类型 any
      "target": "es5", // 编译后的目标 JS 版本
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true, // 允许混合编译 JS 文件
      "skipLibCheck": true,
      "esModuleInterop": true, // 允许使用 commonJs 的方式 import 默认文件
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "esnext", // 配置代码的模块系统
      "moduleResolution": "node", // 编译器工作方式，import json 文件必须打开下面2项
      "resolveJsonModule": true,
      "isolatedModules": true, // 编译器将每个文件作为单独的模块使用
      "noEmit": true, // 发生错误时，编译器不要生成 JS 代码
      "jsx": "react", // 允许编译器支持编译的 react 代码
      "plugins": [
        {
          "name": "typescript-plugin-css-modules"
        }
      ]
    },
    "include": [
      "src"
    ]
  }
  ```

- Old react-javascript project exchange to react-typescript project

  ```bash
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```

  Change all the .js file to .tsx file, and import React 

  ```tsx
  import React from 'react';
  ```



## Thinking in React

### React history



### React success reason



### Thinking in React

Modules in React

- CSS module setting

  Create custom.d.ts file in src folder and declare css

  ```typescript
  // CSS 声明    
  declare module "*.css" {
      const css: { [key: string]: string };
      export default css;
  }
  ```

  Chang all the *.css name to *.module.css

  Use css module like this:

  ```tsx
  import styles from './App.module.css';
  ```

  Install css module dependencies for dev

  ```bash
  npm install typescript-plugin-css-modules --save-dev
  ```

  Check the package.json

  ```json
  "devDependencies": {
    "typescript-plugin-css-modules": "^4.1.1"
  }
  ```

  Setting this module in tsconfig.json

  ```json
  "plugins": [
    {
      "name": "typescript-plugin-css-modules"
    }
  ]
  ```

- Setting VSCode for Typescript code hits

  Create .vscode folder int the project root folder and add the settings.json file

  ```json
  {
      "typescript.tsdk": "node_modules/typescript/lib",
      "typescript.enablePromptUseWorkspaceTsdk": true
  }
  ```

- Load assets such as images, icons, and fonts

  add assets folder in src folder, include images, icons and fonts

  Font-face the font file in index.css

  ```css
  @font-face {
    font-family: Slidefu;
    src: local('Slidefu'), url(./assets/fonts/Slidefu-Regular-2.ttf) format('truetype');
  }
  ```

  Use the font int App.module.css

  ```css
  h1 {
    font-family: 'Slidefu';
    font-size: 72px;
  }
  ```

  App.tsx

  ```tsx
  <h1>React-Typescript-Travelling</h1>
  ```

  <img src="https://markdown-res.oss-cn-hangzhou.aliyuncs.com/mdImgs/2022/12/05/20221205222500.png" alt="image-20221205222457714" style="zoom:50%;" />




- Components Demo

  ```typescript
  import React from "react";
  
  const Robot = () => {
    return <></>;
  };
  export default Robot;
  ```

  Each coms transfer datas with porps, like this:

  FC: functional component 函数式组件

  ```tsx
  interface RobotProps {
      id: number;
      name: string;
      email: string;
  };
  const Robot : React.FC<RobotProps> = (props) => {
    const {id, name, email} = props;
    return (
    	<div>
      </div>
    );
  }
  ```

  
#### State & Props

- State and Props 区别

  props 是组件对外的接口，而state是组件对内的接口；props 用于组件间数据传递，而state 用于组件内部的数据传递

  ```typescript
  // 组件参数
  interface Props {}
  // 组件状态
  interface State {
    // 下拉菜单打开状态
    isOpen: boolean;
  }
  ```

  

- 初始化

  构建函数 constructor 是唯一可以初始化state的地方

  ```tsx
  // * 生命周期第一阶段：初始化
  // 初始化组件 state
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  ```

  

- state 正确的打开方式

  state 是私有的，可以认为state 是组件的‘私有属性’

  用 setState() 修改 state

  ```tsx
  onClick={() => {
      // 操作下拉菜单打开/关闭
      this.setState({ isOpen: !this.state.isOpen });
    }}
  ```

  
  
- State 的更新是异步的

  调用 setState后，state不会立刻改变，是异步操作；不要依赖当前的State，计算下个State

- Props

  本质上，props就是传入函数的参数，是从传入组件内部的数据。更准确的说，是从父组件传递向子组件的数据。  

- Props 用法

  ```tsx
  <div className={styles.robotList}>
          {robots.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
  ```

  

  
