### eslint-config-afu-base
统一规范校验

#### 使用方式
1、安装依赖
npm i -D eslint-config-afu-base
2、集成统一规则
方式一、在`.eslintrc.js`中添加
```javascript
//.eslintrc.js
module.exports = {
  root: true,
  extends: ['afu-base'],
  // 需要覆盖原有的规则，在rules下添加，若无需覆盖，rules可以为空
  rules: {
    // ...
  }
};
```
方式二、在package.json中添加
```javascript
"eslintConfig": {
  "extends": "afu-base"
}
```

