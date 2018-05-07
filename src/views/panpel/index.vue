<template>
    <div>
        <k-head />
        <router-view></router-view>
    </div>
</template>
<script>
import { Head } from 'comp'
export default {
    components:
    {
        'k-head': Head
    }
}
</script>
