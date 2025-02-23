<template>
  <v-navigation-drawer
    v-model:rail="isSidebarOpened"
    :width="240"
    :rail-width="64"
    permanent
    expand-on-hover
    color="surface-light"
    class="sidebar"
    floating
  >
    <v-list>
      <template
        v-for="{ title, path, childList, icon } in items"
        :key="path"
      >
        <v-list-item
          v-if="!childList?.length"
          class="sidebar__item"
          @click="changePage(path)"
        >
          <v-list-item-title>
            <span class="roboto-regular-lg">{{ title }}</span>
          </v-list-item-title>
          <template #prepend>
            <v-icon :size="26">
              {{ icon }}
            </v-icon>
          </template>
        </v-list-item>

        <v-list-group v-else>
          <template #activator="{ props }">
            <v-list-item
              class="sidebar__item sidebar__item_group"
              v-bind="props"
            >
              <v-list-item-title>
                <span class="roboto-regular-lg">{{ title }}</span>
              </v-list-item-title>
              <template #prepend>
                <v-icon :size="26">
                  {{ icon }}
                </v-icon>
              </template>
            </v-list-item>
          </template>

          <v-list-item
            v-for="{ title: childTitle, path: childPath } in childList"
            :key="childPath"
            class="sidebar__sub-item"
            @click="changePage(childPath)"
          >
            <span class="font-inter-regular-md">{{ childTitle }}</span>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { items } from './models';
const isSidebarOpened = defineModel<boolean>({required: true});

const changePage = async(path: string) => {
  await navigateTo(`/${path}`);
};

</script>

<style scoped>
.sidebar .v-list {
  padding-top: 7px;
  padding-bottom: 0px;
}

.sidebar__item {
  grid-template-columns: 46px 1fr 24px;
  padding: 0 18px !important;
}

.sidebar__item,
.sidebar__sub-item {
  opacity: 0.87;
}

.sidebar__item_group ~ :deep(.v-list-group__items) {
  --parent-padding: 38px;
}
</style>
