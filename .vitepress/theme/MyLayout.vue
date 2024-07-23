<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <Kofi username="koiya" backgroundColor="#0f0f0f" hoverBackgroundColor="#161618"/>
      <br>
    </template>
    <template #doc-after>
       <Comments />
    </template>
  </Layout>
</template>