<template>
  <div class="container mx-auto">
    <Header />
    <div class="my-10">
      <CardFollowers />
      <CardFollowers />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import CardFollowers from '@/components/CardFollowers';
export default {
  name: "DashboardComponent",
  components: {
    Header,
    CardFollowers
  },
};
</script>

<style lang="scss" scoped>
</style>