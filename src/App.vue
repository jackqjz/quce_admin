<template>
  <div id="app" style="width:100%;height:100%;position:absolute">            
             <transition enter-active-class="animated fadeInLeft " 
             leave-active-class="animated fadeOutLeft"> 
                          <router-view></router-view>
            </transition> 
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function(){
     return {
     }
  },
  created(){
     
  },
  mounted:function(){     

      //console.log(window.UserInstance) 


  }
}
</script>

                 

