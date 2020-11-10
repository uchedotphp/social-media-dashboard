<template>
  <div class="h-screen bg-veryDarkBlueTopBGPattern px-8 pt-10 md:px-0">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard';
export default {
  name: 'App',
  components: {
    Dashboard,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
/* - Font size (Overview Card Headings): 14px  */
body {
    background-color: hsl(232, 19%, 15%);
}
</style>
