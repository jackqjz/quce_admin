const InvalidToken = "undefined"
export default {
     namespace: true,
     state : {
        token:InvalidToken
     },
     getters:{
        GetToken(state){
            return state.token
        },
        /**
         * @function: TokenIsNotValid 
         * @param: state =>  vuex自带参数 
         * @returns: true => 代表着token是无效的
         * @returns: false =>  代表着token是有效的          
         */  
        TokenIsNotValid(state){
            return state.token  == InvalidToken  
        }
     },
     mutations:{
        SetToken(state,tokens){
            state.token = tokens
        }
     }
}


