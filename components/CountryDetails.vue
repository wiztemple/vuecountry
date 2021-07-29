<template>
  <div>
    <div
      class="justify-end items-center flex bg-black bg-opacity-25 overflow-x-hidden overflow-y-hidden fixed inset-0 z-50"
      role="dialog"
    >
      <transition name="slow-move">
        <div class="md:w-420px md:h-screen h-full bg-white shadow-sm overflow-y-auto">
          <div class="flex justify-between items-center border-b border-gray-100 px-5 py-3">
            <h1 class="font-semibold text-24px">
              Nigeria
            </h1>
            <button type="button" aria-label="Close modal" @click="close">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0607 1.06059L15 0L8.03034 6.96966L1.06069 0L0 1.06059L6.9697 8.0303L0 15L1.06069 16.0606L8.03034 9.09094L15 16.0606L16.0607 15L9.09099 8.0303L16.0607 1.06059Z" fill="#58667E" />
              </svg>
              <span class="text-9px text-variant3">ESC</span>
            </button>
          </div>
          <div class="px-5">
            <div class="flex justify-between items-center pt-6">
              <h1 class="font-semibold text-4xl">
                Nigeria
              </h1>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.0219 17.5109C35.0219 27.183 27.1824 35.0219 17.5109 35.0219C7.84 35.0219 0 27.1852 0 17.5109C0 7.84109 7.83836 0 17.5109 0C27.1797 0 35.0219 7.83836 35.0219 17.5109Z" fill="#1E75BB" />
                <path d="M8.33859 22.5696C5.23617 15.9136 5.09672 8.75005 7.90273 2.82739C3.1482 5.95661 0.00585938 11.3351 0.00585938 17.453C0.00585938 27.1245 7.84313 34.964 17.5168 34.964C17.6896 34.964 17.8586 34.9426 18.0292 34.9383C14.0152 31.5602 10.6327 27.4953 8.34078 22.574" fill="#186DA3" />
                <path d="M27.5521 24.4459C27.4395 25.3761 26.5338 25.5123 26.0925 26.1139C26.2806 27.1683 25.3395 28.8756 26.4059 29.0347C27.4181 29.1868 27.6057 25.9755 27.7616 24.6543C27.6232 24.6521 27.6664 24.4705 27.5521 24.4448" fill="#00A650" />
                <path d="M26.0338 2.14979C25.447 2.59768 24.4046 1.97534 23.8107 1.88182C23.1993 2.13831 22.6563 2.46588 21.9316 2.6119C21.8146 2.91541 21.9552 3.36604 22.0372 3.75815C22.6989 4.16885 23.6073 3.9944 24.5391 3.96706C24.3428 5.01651 24.3986 5.98666 23.6007 6.26174C22.6196 6.59916 21.3191 5.68315 20.2659 5.63666C19.8059 5.7351 19.9263 6.4094 19.4286 6.4701C18.6116 5.96643 17.5692 5.68862 16.9277 5.00995C17.1213 4.7376 17.0748 4.01409 16.8227 3.8626C15.0492 3.77018 13.4857 4.84479 12.13 4.48877C11.961 5.08651 11.4464 5.33479 11.0877 5.74057C11.2605 7.42276 9.35953 7.8444 9.00078 9.18151C8.75633 10.0926 9.24086 11.2481 8.79297 12.3102C9.89219 13.2874 9.95234 15.4421 11.6088 15.6478C12.7206 15.7856 13.6438 15.1884 14.9437 15.0216C15.4435 15.4153 15.5797 15.8977 16.5094 15.6478C16.9906 16.2138 16.3147 17.6734 16.7188 18.2553C17.4801 19.3545 18.0521 20.1234 17.8651 21.4878C17.7869 22.0582 17.3111 22.5679 17.3439 23.1574C17.3674 23.6064 17.747 23.9974 17.8651 24.4076C18.2632 25.8065 18.4032 27.481 19.2191 28.6847C19.2968 29.0024 19.042 28.991 19.1152 29.3098C19.7146 29.773 21.5663 29.47 22.1405 29.1009C23.318 28.3495 23.1085 26.4699 24.2252 25.7639C24.398 25.2394 24.1388 24.8139 24.1235 24.2009C24.4976 23.601 25.179 23.31 25.6865 22.8446C26.1245 21.35 25.2802 20.3646 25.3753 18.8809C26.5779 16.9214 28.5368 15.7172 29.1274 13.1447C28.4742 13.315 27.8132 13.4541 27.1466 13.5614C26.2596 12.6427 25.587 11.5068 24.8541 10.4333C25.0242 8.78721 23.4164 7.85752 23.7057 6.78292C23.9201 6.81245 23.8009 7.17229 24.0169 7.19963C24.462 6.2962 24.7546 8.16596 24.9559 8.55588C25.0357 8.70956 25.3775 8.78995 25.4781 8.9726C25.6132 9.22143 25.4962 9.53698 25.5826 9.80659C25.7926 10.4721 26.5079 10.7664 26.6249 11.4756C26.7245 12.0805 26.5773 12.3266 26.8349 12.6224C28.7927 11.871 30.8495 11.217 31.5277 9.18151C30.9868 8.99174 30.6784 8.57065 30.3787 8.13862C30.1282 8.54823 29.7454 8.82385 29.1269 8.86815C28.8934 7.98877 28.2984 7.47417 28.0845 6.57346C29.006 6.15948 29.1334 7.38885 29.7541 7.61635H30.6931C30.9288 8.18565 31.6715 8.25018 32.4792 8.24909C30.89 5.70666 28.6757 3.59354 26.0338 2.14979Z" fill="#00A650" />
                <path d="M13.59 1.15177C13.3784 1.18185 13.3838 1.43396 13.1716 1.46403C12.5187 1.53185 11.8427 1.16435 11.2931 1.46403C11.3582 2.22255 11.2155 2.77435 11.1914 3.44536C11.9204 4.2088 13.0491 4.03927 13.7973 3.34255C13.7366 3.00349 13.8684 2.85583 13.9012 2.61192C14.646 2.52278 14.7445 1.78396 15.1513 1.36013C15.8234 1.47388 16.0531 1.1463 16.5092 1.04731C17.1906 1.93161 18.4594 2.22474 18.8034 3.44536C18.9417 3.01442 18.8728 2.47521 19.3245 2.61192C18.5912 2.22638 17.0648 1.22286 17.8649 0.316689C18.875 1.05825 19.6313 2.52606 20.4948 3.19981C20.5058 3.17411 20.5315 3.15005 20.5769 3.13255C21.1648 3.49786 20.293 3.50224 20.3691 3.96653C20.7098 3.92661 20.8262 3.66138 21.098 3.54927C21.1172 3.11231 20.5851 3.22716 20.6791 2.71583C21.063 2.40192 21.8396 2.48286 22.2427 2.19411C22.1981 1.93984 22.2041 1.67929 22.2603 1.42734C22.3166 1.17539 22.4219 0.936988 22.5702 0.725752C20.9721 0.254119 19.3147 0.0134277 17.6484 0.0109863C16.2402 0.0109863 14.8812 0.194736 13.5703 0.507549C13.6146 0.685283 13.6299 0.892549 13.5922 1.15177" fill="#00A650" />
              </svg>
            </div>
            <div class="w-60 h-48 bg-red-50 rounded-xl mt-5" />
          </div>
          <div class="md:pt-24 pt-10">
            <div class="flex justify-between items-center border-t border-gray-100 md:px-8 px-5 py-4 hover:bg-whitegrey">
              <span class="text-propgrey font-semibold md:text-base text-sm">Capital</span>
              <span class="font-medium text-variant3 md:text-base text-sm">Abuja</span>
            </div>
            <div class="flex justify-between items-center border-t border-gray-100 md:px-8 px-5 py-4 hover:bg-whitegrey">
              <span class="text-propgrey font-semibold md:text-base text-sm">Demonym</span>
              <span class="font-medium text-variant3 md:text-base text-sm">Nigerian</span>
            </div>
            <div class="flex justify-between items-center border-t border-gray-100 md:px-8 px-5 py-4 hover:bg-whitegrey">
              <span class="text-propgrey font-semibold md:text-base text-sm">Region</span>
              <span class="font-medium text-variant3 md:text-base text-sm">Africa</span>
            </div>
            <div class="flex justify-between items-center border-t border-gray-100 md:px-8 px-5 py-4 hover:bg-whitegrey">
              <span class="text-propgrey font-semibold md:text-base text-sm">Subregion</span>
              <span class="font-medium text-variant3 md:text-base text-sm">West Africa</span>
            </div>
            <div class="flex justify-between items-center border-t border-gray-100 md:px-8 px-5 py-4 hover:bg-whitegrey">
              <span class="text-propgrey font-semibold md:text-base text-sm">Population</span>
              <span class="font-medium text-variant3 md:text-base text-sm">2000000</span>
            </div>
            <div class="flex justify-between items-center border-t border-gray-100 md:px-8 px-5 py-4 hover:bg-whitegrey">
              <span class="text-propgrey font-semibold md:text-base text-sm">Languages</span>
              <span class="font-medium text-variant3 md:text-base text-sm">Igbo,Hausa,Yoruba</span>
            </div>
            <div class="flex justify-between items-center border-t border-gray-100 md:px-8 px-5 py-4 hover:bg-whitegrey">
              <span class="text-propgrey font-semibold md:text-base text-sm">Calling Code(s)</span>
              <span class="font-medium text-variant3 md:text-base text-sm">+234</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="css">
.slow-move {
  animation: slow-move 6s linear;
}
@keyframes slow-move {
  100% {
    transform: translateX(-1000);
  }
  50% {
    transform: translateX(500);
  }
  0% {
    transform: translateX(0);
  }
}
</style>
