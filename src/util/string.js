

export function  GetStringNumber(str){
       let sum = 0
       for (var index = 0; index< str.length; index++){
            sum += str.charCodeAt(index)
       }       
       return sum
}


