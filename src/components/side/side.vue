<style lang="scss">
    @import './style';
</style>

<template>
    <div class="sidebar">
        <div class="scroll">
            <dl class="module">
                <dt class="name">积分管理</dt>
                <dd>
                    <router-link class="link" to="/integral/integral-manage/business" tag="div">业务类型管理</router-link>
                    <router-link class="link" to="/integral/integral-manage/account" tag="div">积分账户查询</router-link>
                    <router-link class="link" to="/integral/integral-manage/account-flow" tag="div">账户流水查询</router-link>
                </dd>
            </dl>
        </div>
    </div>
</template>
