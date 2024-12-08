<template>
  <div class="w-[85%] mx-auto h-[250rem] font-RokhMedium text-brand-black">
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: { HeaderComponent },
};
</script>
