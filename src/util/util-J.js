/**
 * @description : AddEventListener 其作用是一个具有兼容性的添加事件的东西
 * @author: yuansudong
 * @param : element => dom 元素
 * @param : type => 事件类型
 * @param : callback => 回调函数 
 * @version: v1.0
 *  
 */
export function AddEventListener(element,type,callback){
    if(element.addEventListener){
        element.addEventListener(type,callback,false);
    }else if(element.attachEvent){
        element.attachEvent('on' + type,callback)
    }
}


/**
 * @description: 用于给某一个元素添加样式
 * @param: ele => 元素 
 * @param: cls => 类样式
 * @author: yuansudong
 * @version: v1.0
 */

export function AddClass(ele, cls) {
    ele.classList.add(cls)
}


/**
 * 
 * @description: RemoveClass 用于向一个 
 * @author: yuansudong
 * @param: ele => dom元素
 * @param: cls => 浏览器样式
 * @version: v1.0 
 */
export function RemoveClass(ele, cls) {
        ele.classList.remove(cls)
}



/**
 * 
 * @description: 该函数用于播放动画
 * @author: yuansudong
 * @param: element => dom元素
 * @
 * @version: 1.0
 */
export function PlayAnimate(element,animateCls) {
        AddClass(element,'animated')
        AddClass(element,animateCls)
        setTimeout(function(){
             RemoveClass(element,'animated')
             RemoveClass(element,animateCls) 
        },2000)
}



function hasClass(ele, cls) {
    return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}


