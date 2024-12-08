<template>
  <header class="flex flex-col gap-5 items-center sticky top-0">
    <div
      class="w-full h-28 flex justify-between items-center pt-8 z-50 bg-white"
    >
      <div class="flex items-center gap-8">
        <img
          src="@/assets/brand/logo.png"
          alt="Logo"
          class="w-[17.5rem] object-contain"
        />
        <div class="flex gap2 bg-gray-tint-1 py-2 px-2 rounded-xl items-center">
          <input
            type="text"
            placeholder="جستجو میان هزاران محصول..."
            class="bg-gray-tint-1 w-96 h-8 focus:border-none focus:outline-none"
          />
          <Icon
            icon="guidance:search"
            class="text-gray-tint-4 cursor-pointer text-xl"
          />
        </div>
      </div>
      <div class="flex items-center justify-center gap-5 h-3/6 my-auto">
        <div class="relative">
          <Icon
            icon="solar:cart-large-outline"
            class="text-4xl cursor-pointer"
          />
          <div
            class="absolute bg-gray-tint-1 flex items-center justify-center rounded-full h-5 w-5 top-[-.3rem] right-[-.4rem] text-orange-brand"
          >
            0
          </div>
          <!--Cart Count -->
        </div>
        <div class="w-[1px] h-full border-dashed border-l-[.15rem]"></div>
        <button
          class="font-RokhSemiBold text-sm border rounded-lg p-3 gap-2 flex items-center justify-between"
        >
          <Icon icon="solar:login-linear" width="20" height="20" />
          <span class="pt-[3px]">ورود | عضویت</span>
        </button>
      </div>
    </div>
    <div
      :class="[
        'h- w-full bg-white transition-transform duration-300 z-40 flex items-center justify-between',
        isHidden ? '-translate-y-[200%]' : 'translate-y-0',
      ]"
    >
      <div class="flex gap-8 items-center">
        <button
          class="bg-orange-brand text-white flex items-center gap-2 rounded-lg p-2"
        >
          <Icon icon="ic:round-menu" width="20" height="20" />
          <span class="pt-[3px]">دسته بندی محصولات</span>
        </button>
        <ul class="flex items-center gap-6">
          <li class="flex items-center gap-1 font-RokhSemiBold cursor-pointer">
            <Icon icon="tabler:flag-filled" width="20" height="20" />
            <span class="pt-[5px] text-xl">برند ها</span>
          </li>

          <li class="flex items-center gap-1 font-RokhSemiBold cursor-pointer">
            <Icon icon="material-symbols:percent" width="20" height="20" />
            <span class="pt-[5px] text-xl">شگفت انگیز ها</span>
          </li>

          <li class="flex items-center gap-1 font-RokhSemiBold cursor-pointer">
            <Icon icon="basil:wallet-solid" width="20" height="20" />
            <span class="pt-[5px] text-xl">پر فروش ها</span>
          </li>

          <li class="flex items-center gap-1 font-RokhSemiBold cursor-pointer">
            <Icon icon="gg:coffee" width="20" height="20" />
            <span class="pt-[5px] text-xl">پیشنهادی</span>
          </li>

          <li class="flex items-center gap-1 font-RokhSemiBold cursor-pointer">
            <Icon icon="mynaui:question" width="20" height="20" />
            <span class="pt-[5px] text-xl">سوالات متداول</span>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-2">
        <button class="flex items-center gap-2 p-2 bg-blue-brand text-white rounded-xl">
            <Icon icon="mdi:ticket-percent" width="20" height="20" />
            <span class="font-RokhSemiBold text-lg pt-[3px]">کد تخفیف</span>
        </button>
        <button class="flex items-center gap-2 p-2 bg-white text-blue-brand rounded-xl border-2 border-blue-brand">
            <Icon icon="mdi:magic" width="20" height="20" />
            <span class="font-RokhSemiBold text-lg pt-[3px]">کد تخفیف</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
  data() {
    return {
      isHidden: false,
      lastScrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }

      this.lastScrollY = currentScrollY;
    },
  },
};
</script>
