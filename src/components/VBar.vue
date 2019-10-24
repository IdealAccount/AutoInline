<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$store.dispatch('toggleMenu')"></v-app-bar-nav-icon>
    <v-toolbar-title>Справочник сотрудников</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>
