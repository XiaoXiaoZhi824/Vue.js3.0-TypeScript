import { App } from 'vue'
import { registerElementComponent } from './registerElementComponent'

export function globalRegister(app: App): void {
  app.use(registerElementComponent)
}
