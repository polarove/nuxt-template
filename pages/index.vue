<template>
  <section class="px-70px">
    <div class="pt-60px pb-30px">
      <div>不仅仅是组队</div>
      <div class="text-size-[3rem]">Warframe Team</div>
    </div>
    <div><el-button type="primary">开始</el-button></div>
    <el-row class="pt-67px" :gutter="14">
      <el-col :xs="12" :sm="12" :md="8" :lg="4" class="pb-14px">
        <wt-features route="fissure" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="4" class="pb-14px">
        <wt-features route="fissure" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="4" class="pb-14px">
        <wt-features route="fissure" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="4" class="pb-14px">
        <wt-features route="fissure" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="4" class="pb-14px">
        <wt-features route="fissure" />
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: '主页 | warframe-team',
  link: [{ rel: 'shortcut icon', href: './warframe-logo-white.svg' }]
})
</script>

<style lang="scss" scoped></style>
