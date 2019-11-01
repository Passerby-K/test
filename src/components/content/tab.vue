<template>
    <el-aside class="home_left">
        <el-row>
            <el-col >
            <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            background-color="#ebedf2"
            text-color="#303133"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">表格1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            </el-menu>
        </el-col>
        </el-row>
    </el-aside>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
    .home_left
        width 200px!important
        background #ebedf2
</style>