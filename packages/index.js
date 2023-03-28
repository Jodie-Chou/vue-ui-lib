/**
 * 整个包的入口
 * 定义install方法，接收vue作为参数，如果使用use注册插件，则所有的组件都将被注册
 */
import Button from './components/button.vue'
import Dialog from './components/Dialog.vue'
import Input from './components/Input.vue'
import Switch from './components/Switch.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Form from './components/Form.vue'
import FormItem from './components/FormItem.vue'
import './assets/fonts/iconfont.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem
]

const install = (Vue) => {
  // 遍历注册全局组件
  components.forEach(cm => {
    Vue.component(cm.name, cm)
  })
}
// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
