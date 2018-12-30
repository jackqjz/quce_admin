<template>
  <div id="home">
     <div class="left">   
      <el-menu
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>类别</span>
          </template>
          <el-menu-item index="1-1">
            类别的信息
          </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>类别内容</span>
          </template>
          <el-menu-item index="2-1" @click="RouterTo('/home/category')">
            类别内容的信息
          </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>资源上传</span>
        </template>
        <el-menu-item index="3-1">
          上传图片
        </el-menu-item>
        <el-menu-item index="3-2">
          上传音频
        </el-menu-item>
        <el-menu-item index="3-3">
          上传视频
        </el-menu-item>
     </el-submenu>
      </el-menu>      
    </div> 
     <div class="right">
        <div class="header">
        </div>
        <div class="router-content">
            <transition enter-active-class="animated slideInDown " 
             leave-active-class="animated slideOutUp"> 
                          <router-view></router-view>
            </transition> 
        </div>
     </div>
  </div>
</template>
<script>
export default {
  methods:{
    RouterTo(args){
      this.$router.replace(args)
    },
  }
}
</script>


