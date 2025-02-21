# element-plus-theme

- 🌈 一套 element-plus 的现代化主题，让 element-plus 更加美观、简约
- 🌙 支持 element-plus 的暗黑主题，以及支持自定义主题色
- 🔨 纯 css 主题，可以轻松用在任意 element-plus 项目中
- 🌍 查看在线演示：http://theme.eleadmin.com

## 使用方法

在自己项目中使用可以复制 `src/styles/element-plus-theme/` 目录中的所有样式，并在 `main.js` 中引入：

```javascript
import './styles/element-plus-theme/index.scss';
```

&emsp;引入之后重新运行项目 `element-plus` 的原本组件样式就焕然一新了，为了达到最佳的样式效果，建议修改 `element-plus` 的默认的一些样式变量，可以复制 `src/styles/variables.scss` 到自己项目中，
并在 `vite.config` 中设置 `scss` 的 `additionalData` ，示例：

```javascript
export default {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variables.scss" as *;`
            }
        }
    }
};
```

## 效果预览

![](https://cdn.eleadmin.com/20200610/pEnvAT1.png)

## 文件说明

```bash
|- element-plus-theme
|    |- autocomplete.scss      # 对 el-autocomplete 组件样式优化
|    |- backtop.scss           # 对 el-backtop 组件样式优化
|    |- card.scss              # 对 el-card 组件样式优化
|    |- cascader.scss          # 对 el-cascader 组件样式优化
|    |- checkbox.scss          # 对 el-checkbox 组件样式优化
|    |- date-picker.scss       # 对 el-date-picker 组件样式优化
|    |- descriptions.scss      # 对 el-descriptions 组件样式优化
|    |- input.scss             # 对 el-input 组件样式优化
|    |- message-box.scss       # 对 ElMessageBox 样式优化
|    |- notification.scss      # 对 ElNotification 样式优化
|    |- popper.scss            # 对 el-popover 和 el-tooltip 组件样式优化
|    |- radio.scss             # 对 el-radio 组件样式优化
|    |- select.scss            # 对 el-select 组件样式优化
|    |- table.scss             # 对 el-table 组件样式优化
|    |- tag.scss               # 对 el-tag 组件样式优化
|    |- tree-select.scss       # 对 el-tree-select 组件样式优化
|    |- tree.scss              # 对 el-tree 组件样式优化
```
