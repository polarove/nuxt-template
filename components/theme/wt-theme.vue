<template>
  <div @click="toggleTheme($colorMode.value)"></div>
</template>

<script setup lang="ts">
const toggleTheme = (theme: string) => {
  console.log(theme)
}
</script>

<style lang="scss" scoped></style>
