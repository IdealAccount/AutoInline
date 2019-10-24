<template>
  <div>
    <v-navigation-drawer
      v-model="$store.state.drawer"
      app
    >
      <v-list dense>
        <v-list-item @click="$store.dispatch('toggleMenu')">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Reference</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>