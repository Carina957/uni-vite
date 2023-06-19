import { createStore } from 'vuex'
import getters from './getters'

const MODULES = import.meta.glob('./modules/*.js', { eager: true })
const modules = {}

for (const path in MODULES) {
  const module_name = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[module_name] = MODULES[path].default
}
console.log(/modules/, modules)

const store = createStore({
  modules,
  getters,
})

export default store
