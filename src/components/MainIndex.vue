<template>
<div class="body">
  <el-container>
    <el-header>
      <top-bar></top-bar>
    </el-header>
    <el-container class="el-container">
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</div>

</template>

<script>
  import TopBar from './HelloWorld'
  import SideBar from './SideBar'

  export default {
    components: {
      TopBar,
      SideBar
    }
  }

</script>

<style scoped>
  .el-header {
    padding: 0;
  }
  .body{
      height: 100vh;
      width: 100vw;
  }
.el-container{
    height: 100%;
}
</style>
