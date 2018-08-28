export const RSA = {
  encrypt:function (publicKey,pass) {
    let rs = new window.RSAKey();
    rs.setPublic(publicKey, "10001");
    return rs.encrypt(pass);
  }
}

export default {
  install(Vue){
    Object.defineProperty(Vue.prototype,'$rsa',{value:RSA})
  }
}
