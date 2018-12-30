

/**
 * 
 * @description : 用于组织语言包模块 , 组建于18.10.22
 * @copyright: xxxxx
 * @author: yuansudong
 * @version: 1.0
 */
const zh = () => import('./../../language/zh')
const en = () => import('./../../language/en')
export default {
    namespace: true,
    state:{
        local : zh
    },
    getters:{
        GetLangNetworkTitle(state){
              return state.local.network.title
        }  
    },
    mutations:{
        SetLangLocalForEnglish(state) {
            state.local =  en
        },
        SetLangLocalForChinese(state) {
            state.local = ch 
        }
    }
}
 

