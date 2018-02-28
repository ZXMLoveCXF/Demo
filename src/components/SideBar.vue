<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航二</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航三</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="4-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="4-4">
        <template slot="title">选项4</template>
        <el-menu-item index="4-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ count }}</span>
    </el-menu-item>
    <el-menu-item index="5" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">{{ name }}</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-setting"></i>
      <span slot="title">{{ age }}</span>
    </el-menu-item>
    <div>{{ doneTodos }}</div>
     <div>{{ doneTodosCount }}</div>
  </el-menu>
</template>

<script>
import { mapMutations, mapState,mapGetters } from "vuex";
export default {
  name: "SideBar",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.$store;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    ...mapState({
      count: 'count',
      name: 'name',
      age: 'age'
    }),
    ...mapGetters({
      doneTodos:'doneTodos',
      doneTodosCount:'doneTodosCount'
    }),
    ...mapMutations({
      add: 'increment'
    })
  }
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>
