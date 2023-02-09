import { App } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import * as ElementPlusIcons from '@element-plus/icons-vue'

const elementComponents = [ElButton]

export function registerElementComponent(app: App): void {
  for (const component of elementComponents) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIcons)) {
    app.component(key, component)
  }
}
