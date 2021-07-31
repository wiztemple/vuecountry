<template>
  <div class="md:grid grid-cols-2 gap-6 w-full md:space-y-0 space-y-4 mt-5">
    <GridCard v-for="country in countries" :key="country.id" :country-name="country.name" :country-region="country.region" :country-flag="country.flag" />

  </div>
</template>

<script>
export default {
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
};
</script>
