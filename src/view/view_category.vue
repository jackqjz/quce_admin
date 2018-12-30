

<template>
        <div class="category">
            <div v-for=" (item,index) in ViewData " :key="index"  class="content-item">
                  <p> 
                      <span>ID标识</span>
                      <span>{{ item.id }}</span> 
                  </p>
                  <p>
                      <span>显示标题</span>
                      <span>{{ item.title }}</span>
                  </p>
                  <p> 
                      <span> 是否显示 </span> 
                      <span>  </span>
                  </p>
                  <p><span> </span></p>
            </div>
        </div>
</template>


<script>
import Axios from "axios"
export default {
    data:function () {
        return {
            ViewData:[], 
        }
    },
    methods:{
        GetServerData() {
            /**
             * 用于向服务器发起数据
             */
            this.$axios.post(
                "/quiz_chat/admin/getcategorys",
            ).then(function(response){
                console.log(response)
            })
        }, 
    },
    created:function(){
    },
    mounted:function(){
        this.$nextTick(function(){        
            this.GetServerData()
        }) 
    }
}
</script>




