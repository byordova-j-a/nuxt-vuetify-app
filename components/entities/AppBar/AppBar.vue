<template>
  <v-app-bar
    flat
    color="primary"
    class="app-bar"
    :height="64"
  >
    <template #prepend>
      <v-btn
        :size="40"
        @click="isNavigationOpen=!isNavigationOpen"
      >
        <v-icon :size="26">
          mdi-menu
        </v-icon>
      </v-btn>
    </template>
    <v-app-bar-title class="roboto-regular-lg">
      {{ pageName }}
    </v-app-bar-title>
    <template #append>
      <EntityAccountMenu header="Мистер Кот" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { headerList, isPagePath } from './models';

const isNavigationOpen = defineModel<boolean>({required:true });

const route = useRoute();


const pageName = computed(() => isPagePath(route.path) ? headerList[route.path] : '');

</script>

<style scoped>
.app-bar :deep(.v-toolbar__prepend) {
  margin-inline-start: 8px;
}
.app-bar :deep(.v-toolbar__append) {
  margin-inline-end: 8px;
}
</style>
