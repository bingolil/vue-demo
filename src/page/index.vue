<template>
  <section>
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </section>
</template>

<script>
import AppHeader from "./app-header";
import AppFooter from "./app-footer";

export default {
  name: "Index",
  components: { AppHeader, AppFooter }
};
</script>

<style scoped>
</style>

