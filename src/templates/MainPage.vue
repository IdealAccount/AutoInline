<template>
  <v-container class="main-page">
    <v-employee-card/>
    <v-reference/>
  </v-container>
</template>
<script>
  import VEmployeeCard from '../components/VEmployeeCard'
  import VReference from '../components/VReference'
  export default {
    components: {
      VEmployeeCard,
      VReference
    }
  }
</script>
<style>
  .main-page {
    display: flex;
    justify-content: space-between;
  }
</style>