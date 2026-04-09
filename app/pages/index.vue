<script setup>
const { locales, setLocale } = useI18n()
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ]
})
const status_modal = ref(true)
const status_modal2 = ref(true)
</script>

<template>
<div class="main_page">
  <button v-for="locale in locales" @click="setLocale(locale.code)">
    {{ locale.name }}
  </button>
  <br>
  <br>
  <div>Example text for test lang: {{$t('welcome')}}</div>
  <br>
  <br>
  <button @click="status_modal = false">
    open modal 1
  </button>
  <button @click="status_modal2 = false">
    open modal 2
  </button>
  <BaseModal v-model:is_close="status_modal"><div class="box"><div class="title">test1</div></div></BaseModal>
  <BaseModal v-model:is_close="status_modal2"><div class="box"><div class="title">test2</div></div></BaseModal>
</div>
</template>

<style scoped lang="scss">
.main_page {
  margin: 0 100px;
}
button {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  margin-top: 20px;
}
div {
  .class {
    color: red;
  }
}
</style>