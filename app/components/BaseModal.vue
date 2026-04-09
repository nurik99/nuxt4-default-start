<script setup>
const props = defineProps({
  is_close: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['update:is_close', 'is_close'])
const change_status_modal = (val) => {
  emit('update:is_close', val)
}
</script>

<template>
<div>
  <div class="modal_wraper" v-if="!is_close" @click="change_status_modal(true)"></div>
  <div class="modal" v-if="!is_close">
    <div class="modal_left">
      <slot></slot>
    </div>
    <div class="modal_right">
      <svg @click="change_status_modal(true)" class="modal_close" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="-0.5 0 25 25" fill="none">
        <path d="M3 21.32L21 3.32001" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 3.32001L21 21.32" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <img src="@/assets/img/base_modal_bg.jpg" alt="bg modal" loading="lazy">
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.modal {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1500px;
  max-height: 90vh;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  z-index: 11;
  &_wraper {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  &_close {}
  &_left {
    min-width: 500px;
    min-height: 30vh;
    background: white;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
  &_right {
    width: 400px;
    position: relative;
    svg {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 12;
      width: 20px;
      height: 20px;
      transition: .3s linear;
      &:hover {
        cursor: pointer;
        transform: rotate(180deg);
      }
    }
    img {
      display: flex;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
}
</style>
<style lang="scss">
.modal {
  .box {
    padding: 20px;
  }
  .title {
    font-size: 28px;
  }
}
</style>