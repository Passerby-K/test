<template>
    <div class="home_container">
        <headd></headd>
        <div class="home_tain">
            <homeTab></homeTab>
			<div>
				<router-view></router-view>
			</div>
        </div>
    </div>
</template>

<script>
import headd from '@/components/common/header'
import homeTab from '@/components/common/tab'
export default {
    components: {
        headd,
        homeTab
    }

}
</script>

<style lang="stylus">
    .home_container
        height calc(100vh)
        display: flex
        flex-direction column
        .home_tain
            height 100%
            display flex

</style>