<template>
  <div>
    <h1 class="capitalize font-bold text-whiteText text-2xl md:text-4xl">
      social media dashboard
    </h1>
    <div
      class="flex flex-col md:flex-row md:justify-between capitalize text-sm md:text-lg text-desaturatedBlueText font-semibold"
    >
      <div class="self-start md:self-center">total followers: 23,004</div>
      <hr class="bg-darkGrayishBlueText my-6" />
      <div class="flex justify-between">
        <span class="self-center text-whiteText">dark mode</span>
        <span class="ml-6 self-center">
          <button
            @click="dark = !dark"
            class="bg-gradient-to-r from-toggleDarkFrom to-toggleDarkTo w-16 rounded-2xl outline-none focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="[dark ? 'float-left' : 'float-right']"
              class="ionicon h-8"
              viewBox="0 0 512 512"
            >
              <title>Ellipse</title>
              <path
                d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      dark: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>