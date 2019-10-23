<template>
  <v-app>
    <v-navigation></v-navigation>
    <v-bar></v-bar>
    <v-content @click="closeMenu">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import VBar from './components/VBar'
  import VNavigation from './components/VNavigation'
export default {
  name: "App",
  components: {
    VBar,
    VNavigation
  },
  data: () => ({
  }),
  methods: {
    closeMenu(event) {
      console.log(event.target)
      if (!this.$store.state.drawer) return
      this.$store.dispatch('toggleMenu');
    }
  }
};
</script>
