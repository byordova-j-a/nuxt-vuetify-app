<template>
  <v-app>
    <EntityAppBar v-model="isNavigationOpen" />
    <EntitySidebar v-model="isNavigationOpen" />
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
const isNavigationOpen = ref(true);

</script>

<style>
html {
  overflow-y: hidden;
}
</style>
