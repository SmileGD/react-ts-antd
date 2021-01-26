// 引入组件的样式
import '../src/styles/index.scss';
// 字体设置
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}