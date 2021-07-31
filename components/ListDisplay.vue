<template>
  <div class="pt-5">
    <ListCard v-for="country in countries" :key="country.id" :country-name="country.name" :country-flag="country.flag" />
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
}
</script>
