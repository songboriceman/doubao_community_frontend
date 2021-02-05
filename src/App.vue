<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>

    <div class="container context">
        <router-view :key="this.$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style scoped>
.container {
  min-height: 500px;
}
</style>
