<script setup lang="ts">
import DictionaryView from "@/views/dictionary-view/DictionaryView.vue";
</script>

<template>
  <div class="app">
    <div class="page-wrapper">
      <DictionaryView></DictionaryView>
    </div>
  </div>
</template>

<style scoped lang="less">
.app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  .page-wrapper {
    width: 1080px;
    height: 750px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.05);
  }
}
</style>
