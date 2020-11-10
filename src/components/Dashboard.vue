<template>
  <div class="container mx-auto pb-16">
    <Header />
    <TopCard />
    <BottomCard />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TopCard from '@/components/TopCard';
import BottomCard from '@/components/BottomCard';
export default {
  name: "DashboardComponent",
  components: {
    Header,
    TopCard,
    BottomCard
  },
};
</script>

<style lang="css" scoped>
</style>