<template>
     <div :class="[{'left':isLeft },{'right':isRight},'chat-item']"  >
            <div  class="item-content" v-if="isImage">
                 <img  class="head-img"  :src="headImg" alt="" />         
                 <div ref="imgDom" class="img-desc">
                          <div class="background">
                              <img @load="loadFinshed()" :src="contentSrc" alt="">
                          </div>  
                          <div class="anlianTitle" v-if="isAnlianDrawType">
                                {{inputText}}
                          </div>
                          <div class="catTitle" v-if="isCatDrawType">
                               {{inputText}} 
                          </div>
                          <div class="catImg" v-if="isCatDrawType" >
                               <img :src="getSelfImage" alt="">  
                          </div>
                          <div class="frTitle" v-if="isFrDrawType" >
                                {{inputText}}
                          </div>
                          <div class="leftRightBrainTitle" v-if="isLeftRightBrainDrawType">
                                {{inputText}}  
                          </div>
                          <div class="soulTitle" v-if="isSoulDrawType">
                                <img :src="getSelfImage" alt="" >
                          </div>
                          <div class="title2019" v-if="is2019DrawType">
                                {{inputText}}   
                          </div>
                 </div>
            </div>
            <div class="item-content" v-if="isText && isLeft" >
                 <img class="head-img" :src="headImg" alt="" />
                 <div class="text-desc">
                         <p class="text-left">{{contentSrc}}</p>
                 </div>   
            </div>
            <div class="item-content " v-if="isText && isRight">
                     <div class="text-desc">
                         <p class="text-right">{{contentSrc}}</p>
                     </div>
                     <img class="head-img" :src="headImg" alt="" />  
            </div>
     </div>
</template>


<script>
export default {
    data:function(){
        return {
             isShowBtn:false,
             srcContent:"",   
             currentCount : 0,
        }
    },
    props:{
        contentTp:String,
        contentSrc:String,
        direction:String, 
        headImg:String,
        drawType:String,
        inputText:{
            type:String,
            default:"",
        }
    },
    methods:{ 
        draw(){
            console.log(this.$refs.show)
        },
        loadFinshed(){
            this.$emit("domLoaded",this.$refs.imgDom)
        },
        sendEventShare(){
             this.$emit("domLoaded",this.$refs.imgDom)
        }
    },
    mounted:function(){
    },
    computed:{
        getSelfImage:function(){
            return this.$store.state.User.avater
        },
        isAnlianDrawType:function(){          
            return this.drawType == "anlian"   // 暗恋的类型    
        },
        is2019DrawType:function(){
            return this.drawType == "2019"   // 2019的类型
        },
        isLeftRightBrainDrawType:function(){
            return this.drawType == "left_right_brain"   // 左右脑的类型
        },
        isSoulDrawType:function(){
            return this.drawType == "soul"        //  灵魂类型  
        },
        isCatDrawType:function(){
            return this.drawType == "cat"          // 猫类型
        },
        isFrDrawType:function(){
            return this.drawType == "fr"       //  美国队长的类型
        },
        isImage:function(){
            return this.contentTp == "image"
        },
        isText:function(){
            return this.contentTp == "text"
        },
        isLeft:function(){
            return this.direction == "left"
        },
        isRight:function(){
            return this.direction == "right"
        }
    }
}
</script>




