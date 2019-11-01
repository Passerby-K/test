<template>
    <el-header class="home_header">
        <el-col :span="24">
            <el-row type="flex">
                <el-col :span="3" class="left">
                    <div class="grid-content bg-purple">
                        后台管理系统
                    </div>
                </el-col>
                <el-col :span="22" class="right">
                    <el-row>
                        <el-col :span="22" class="nav_con">
                            <p class="nav">第一项</p>
                            <p class="nav">第二项</p>
                            <p class="nav">第三项</p>
                            <p class="nav">第四项</p>
                            <p class="nav">第五项</p>
                        </el-col>
                        <el-col :span="2" class="login_con">
                            <el-menu
                                class="el-menu-demo"
                                mode="horizontal"
                                background-color="#2185d0"
                                font-size="20px"
                                text-color="#fff"
                                active-text-color="#000">
                                <el-submenu index="1">
                                    <template slot="title">用户名</template>
                                        <el-menu-item index="1-1">退出</el-menu-item>
                                </el-submenu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-header>
</template>

<script>
export default {
   data() {
      return {
      };
    },
}
</script>

<style lang="stylus">
    .home_header
        font-family: PingFang-SC-Regular, 'Microsoft Yahei'
        line-height: header-top-height-s
        height: header-top-height-s !important
        color: black
        background: header-tools-bg;
        padding: 0
        display: flex
        background #2185d0
        .el-row
            height 100%
            align-items center
            .left
                font-size 20px
                font-weight bold
                color white
                text-align center
            .right
                font-size 20px
                color white
                .nav_con
                    display flex
                    align-items center
                    justify-content center
                    .nav
                        padding 0 10px
                        line-height 60px
                .login_con
                    display flex
                    flex-direction row-reverse
                    color red
                    .el-menu-item , .el-submenu__title
                        font-size 20px
</style>