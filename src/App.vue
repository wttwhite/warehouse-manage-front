<template>
  <section class="body-all">
    <section class="body-header"></section>
    <section class="body-content">
      <Sidebar />
    </section>
  </section>
</template>

<script>
import Sidebar from '@/components/side-bar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.body-all {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.body-header {
  height: 60px;
  background-color: #f5f5f5;
}
.body-content {
  flex: 1;
  display: flex;
  background-color: #ccc;
}
</style>
