<template>
  <div>
    <v-navigation-drawer
      v-model="$store.state.drawer"
      app
    >
      <v-list dense>
        <!--<v-list-item @click="$router.push('/worker')">-->
          <!--<v-list-item-action>-->
            <!--<v-icon>mdi-home</v-icon>-->
          <!--</v-list-item-action>-->
          <!--<v-list-item-content>-->
            <!--<v-list-item-title>Worker</v-list-item-title>-->
          <!--</v-list-item-content>-->
        <!--</v-list-item>-->
        <v-list-item @click="$router.push('/Employees')">
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