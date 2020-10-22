<template>
  <div class="container mx-auto">
    <Header />
    <TopCard />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TopCard from '@/components/TopCard';
export default {
  name: "DashboardComponent",
  components: {
    Header,
    TopCard
  },
};
</script>

<style lang="scss" scoped>
</style>