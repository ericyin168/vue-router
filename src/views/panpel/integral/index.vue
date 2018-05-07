<style lang="scss" scoped>
    main{
        left    : 0;
        top     : 0;
        position: absolute;
        height  : 100%;
        width   : 100%;
        padding-top: 70px;
    }

</style>

<template>
    <main>
        <k-side></k-side>
        <div class="container">
            <router-view></router-view>
        </div>
    </main>
</template>
<script>
import { Side } from 'comp'

export default {
    components:
    {
        'k-side': Side
    }
}
</script>
