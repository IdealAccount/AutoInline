<template>
  <v-app>
    <v-bar></v-bar>
    <!--<v-navigation></v-navigation>-->
    <v-content @click="closeMenu">
      <viewport/>
    </v-content>
  </v-app>
</template>

<script>
  import VBar from './components/VBar'
  import VNavigation from './components/VNavigation'
  import Viewport from './views/Viewport'
export default {
  name: "App",
  components: {
    VBar,
    VNavigation,
    Viewport
  },
  methods: {
    closeMenu(event) {
      if (!this.$store.state.drawer) return
      this.$store.dispatch('toggleMenu');
    }
  }
};
</script>
