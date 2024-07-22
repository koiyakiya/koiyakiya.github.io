<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-ads-before>
        <vue-kofi uid="koiya" color="#0a0a0a" />
    </template>
    <template #doc-after>
       <Comments />
    </template>
  </Layout>
</template>