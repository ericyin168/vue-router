<style lang="scss">
    @import './style.scss';
</style>

<template>
    <header class="header">
        <div class="container">
            <div class="logo">logo</div>

            <k-menu></k-menu>

            <!--<message></message>-->

            <!--退出-->
            <div class="logout">退出登录</div>
        </div>
    </header>
</template>
<script>
import Menu from './menu'
import Message from './message'
export default {
    components:
    {
        'k-menu': Menu,
        Message
    }
}
</script>
