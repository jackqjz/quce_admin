
import store from '../store/index'
import router from '../router/index'
const UtilTip = require("./util-tip.js")
export function CheckTokenBeforeRequest(obj,isLogin) {       
    let retObject = {
        state: false,
        request:{
            token:store.getters.GetToken,
            msg:obj
        }
    }
    if (store.getters.TokenIsNotValid && !isLogin) {
           UtilTip.Warning("你还未登陆,请登陆")
           router.push("/login")    
           return retObject
    }
    retObject.state = true   
    return retObject
}

/**
 * 
 * @description : 在请求之后更新token
 * 
 */
export function UpdateToken(token){
         store.commit("SetToken",token)    
}
export function CheckDataAfterRequest(request) {
    let  obj = JSON.stringify(request.data)    
    if (obj.code == 0) {
        return JSON.stringify(obj.msg)
    }
    UtilTip.Error(obj.desc)
    return null    
}

