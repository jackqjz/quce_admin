import request from './request'
const UtilToken = require('./util-token')
const UtilTip =  require('./util-tip')
export function login(obj) {   
  let CheckToken = UtilToken.CheckTokenBeforeRequest(obj,true) 
  if (CheckToken.state){
      request.post("/user/user-login",
          JSON.stringify(CheckToken.request)
      ).then(function(res){     
        // 此处编写的是成功的代码
         let obj = UtilToken.CheckDataAfterRequest(res)  
         if (obj != null) {
            // 更新token
         }
      }).catch(function(err){
           UtilTip.Error(err)
      })
  }
}

/**
 * @description: 用于获取UserInfo
 * 
 */
export function GetUserInfo(){

}




