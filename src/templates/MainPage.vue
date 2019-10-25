<template>
  <div class="main-page">
    <v-employee-card class="employee-card"/>
    <v-reference class="employee-table"/>
  </div>
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
<style lang="scss">
  .main-page {
    display: flex;
    justify-content: space-evenly;
    max-width: 100%;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    @media (max-width: 1264px) {
      flex-direction: column !important;
      align-items: center;
      .employee {
        &-card {
          margin-bottom: 20px;
          max-width: 380px;
        }
        &-table {
          max-width: 80%;
        }
      }
    }
  }
</style>