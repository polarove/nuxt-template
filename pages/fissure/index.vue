<template>
  <div v-for="fissure in fissures">
    {{ fissure.node }}
  </div>
</template>

<script setup lang="ts">
import { API } from '~/constants'
import { ElMessage } from 'element-plus'
import type { Fissure } from '~/types/fissure'
import { LANGUAGE, PLATFORM } from '~/enums'
useHead({
  title: '裂缝 | warframe-team',
  link: [{ rel: 'shortcut icon', href: './fissure-logo-white.svg' }]
})
const fissures = ref<Fissure[]>([])
const initData = (
  platform: PLATFORM = PLATFORM.PC,
  language: LANGUAGE = LANGUAGE.ZH
) => {
  useFetch(API.concat('/').concat(platform).concat('/').concat('fissures'), {
    query: { language }
  })
    .then((res) => {
      if (res.error.value) {
        console.error(res.error.value?.cause)
        return Promise.reject(`[请求失败]: ${res.error.value?.data.error}`)
      } else return Promise.resolve(res.data as Ref<Fissure[]>)
    })
    .then((res) => (fissures.value = res.value))
    .catch((err) => ElMessage.error(err))
}
initData()

useHead({
  title: '裂缝 | warframe-team'
})
</script>

<style lang="scss" scoped></style>
