<template>
  <div
    class="bg-veryDarkBlueBG my-6 py-8 rounded-md border-t-4 border-facebook text-desaturatedBlueText grid justify-items-center content-center justify-center"
  >
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block">
        <path
          fill="#178FF5"
          d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
        />
      </svg>
      <span class="ml-3">@nathanf</span>
    </div>
    <div class="leading-none my-6 text-center">
      <div class="pb-1 text-whiteText text-6xl font-bold">1987</div>
      <div class="uppercase" style="letter-spacing: 0.3em">followers</div>
    </div>
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-1 inline-block">
        <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
      </svg>
      <span class="text-gray-500 capitalize"> 12 today </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFollowersComponent",
};
</script>

<style lang="scss" scoped>
</style>