<template>
  <div class="flex bg-gray-800 text-white min-h-screen">
    <side-bar></side-bar>
    <div class="w-full">
      <div class="container mx-auto">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue"
export default {
  components: {
    SideBar,
  },
}
</script>
