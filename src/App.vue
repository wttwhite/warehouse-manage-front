<template>
  <section class="body-all">
    <section class="body-header"></section>
    <section class="body-content">
      <pageSidebar />
      <router-view />
    </section>
  </section>
</template>

<script>
export default {
  name: 'App'
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
  flex-shrink: 0;
}
.body-content {
  flex: 1;
  display: flex;
}
</style>
