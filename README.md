# React-Typtscript-Travelling

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

  
