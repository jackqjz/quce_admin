
import {Notice} from 'iview'

const Title = "网络请求"
const Timeout = 3
export function Error(msg){
     Notice.error(
         {
             title: Title,
             duration: Timeout, 
             desc:msg
         }
     )
}

export  function Info(msg) {
    Notice.info(
        {
            title: Title,
            duration: Timeout, 
            desc:msg
        }
    )
}

export  function Success(msg) {
    Notice.success(
        {
            title: Title,
            duration: Timeout, 
            desc:msg
        }
    )
}


export function Warning(msg) {
    Notice.warning(
        {
            title: Title,
            duration: Timeout, 
            desc:msg
        }
    )
}







