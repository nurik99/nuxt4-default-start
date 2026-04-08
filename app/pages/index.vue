<script setup>
const { locales, setLocale } = useI18n()
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ]
})
console.log('test console for build')
</script>

<template>
<div>
  <button v-for="locale in locales" @click="setLocale(locale.code)">
    {{ locale.name }}
  </button>
  {{$t('welcome')}}
</div>
</template>

<style scoped>

</style>