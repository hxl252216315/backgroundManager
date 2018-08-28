
export const global  = {
  apiBathUrl : "http://192.168.2.91:8181/xcxapi"
}
export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$global', {value: global})
  }
}
