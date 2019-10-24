<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click=""></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    computed: {
      title() {
        if (!this.$route.name) return 'Справочник сотрудников'
        if (this.$route.name === 'worker') return 'Карточка сотрудника'
        if (this.$route.name === 'reference') return 'Таблица сотрудников'
      }
    }
  }
</script>

<style scoped>

</style>