<template>
  <div class="my-10">
    <CardFollowers />
  </div>
</template>

<script>
import CardFollowers from '@/components/CardFollowers';
export default {
  name: "TopCardComponent",
  components: {
      CardFollowers,
  },
  data() {
      return {
          data: [
              {
                  image: './../assets/images/icon-facebook.svg',
                  handle: '@nathanf',
                  followers: 1987,
                  accumulated: 12,
                  accumulatedColors: 'white'
              },
               {
                  image: './../assets/images/icon-twitter.svg',
                  handle: '@nathanf',
                  followers: 1044,
                  accumulated: 99,
                  accumulatedColors: 'green'
              },
               {
                  image: './../assets/images/icon-instagram.svg',
                  handle: '@realnathanf',
                  followers: '11k',
                  accumulated: 1099,
                  accumulatedColors: 'green'
              },
               {
                  image: './../assets/images/icon-youtube.svg',
                  handle: '@Nathan F.',
                  followers: 8239,
                  accumulated: 144,
                  accumulatedColors: 'red'
              }
          ]
      }
  },
};
</script>

<style lang="scss" scoped>
</style>