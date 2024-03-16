<template>
  <div
    class="rotate-card"
    :class="{ square: type === 'square', circle: type === 'circle' }"
    @mouseleave="reset"
    @mousemove="rotate($event)"
  >
    <div
      class="rotate-card-item"
      :class="{ square: type === 'square', circle: type === 'circle' }"
      ref="target"
    >
      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementTransform } from '@vueuse/motion'
const props = defineProps({
  scale: {
    type: Number,
    default: 15
  },
  type: {
    type: String,
    default: 'square'
  }
})

const target = ref<HTMLElement | null>(null)
const { width, height } = useElementBounding(target)
const { transform } = useElementTransform(target)

const rotate = (event: any) => {
  let X = event.offsetX / width.value
  let Y = event.offsetY / height.value
  let rX = (X - 0.5) * props.scale
  let rY = -(Y - 0.5) * props.scale

  transform.rotateX = rY
  transform.rotateY = rX
}

const init = () => {
  transform.rotateX = 0
  transform.rotateY = 0
  transform.rotateZ = 0
}
init()

const reset = () => {
  transform.rotateX = 0
  transform.rotateY = 0
}
</script>

<style lang="scss">
.rotate-card {
  transform-style: preserve-3d;
  perspective: 700px;
  user-select: none;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  .rotate-card-item {
    display: inline-block;
    transition: transform 0.25s ease-out;
  }
}
.rotate-card.square,
.rotate-card-item.square {
  border-radius: 12px;
  & > * {
    border-radius: 12px;
  }
}
.rotate-card.circle,
.rotate-card-item.square {
  border-radius: 50%;
}
</style>
