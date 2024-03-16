<template>
  <nuxt-link :to="route" class="wt-feature-card">
    <article class="item">
      <h2 class="title">{{ title }}</h2>
      <p class="details">{{ details }}</p>
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    details?: string
    route: string
  }>(),
  {
    title: '标题',
    details: '功能详情'
  }
)
</script>

<style lang="scss" scoped>
.wt-feature-card {
  text-decoration: none;
  color: var(--el-text-color-regular);
}
</style>
