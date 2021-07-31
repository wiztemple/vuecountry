<template>
  <div class="overflow-x-hidden">
    <Banner />
    <div class="md:flex md:px-5 md:pt-20">
      <div class="md:w-2/6">
        <Sidebar />
      </div>
      <div class="md:w-4/6">
        <Countries />
      </div>
    </div>
    <Footer />
    <CountryDetails
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
    }
  },
  // fetch () {
  //   this.$store.dispatch('getCountries')
  // },
  mounted() {
    this.$eventBus.$on('showModal', this.showModal)
    this.$store.dispatch('getCountries')
  },
  beforeDestroy() {
    this.$eventBus.$off('showModal', this.showModal)
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>
