
import Cookies from 'js-cookie'

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$cookie', {value: Cookies})
  }
}
