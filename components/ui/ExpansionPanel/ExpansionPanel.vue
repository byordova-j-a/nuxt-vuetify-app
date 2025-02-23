<template>
  <v-list
    class="expansion-panel"
    :width="componentProps.width"
  >
    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          class="expansion-panel__activator"
          v-bind="props"
        >
          <v-list-item-title>
            <span class="font-inter-regular-md">{{ componentProps.header }}</span>
          </v-list-item-title>
          <template #prepend>
            <v-icon :size="24">
              {{ componentProps.icon }}
            </v-icon>
          </template>
        </v-list-item>
      </template>

      <v-list-item
        v-for="(item, id) in componentProps.itemList"
        :key="id"
        class="expansion-panel__list-item"
        @click="componentEmits('item-click')"
      >
        <v-list-item-title>
          <span class="font-inter-regular-md">{{ item }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<script setup lang="ts">
import type { TComponentProps, TComponentEmits } from './models';

const componentProps = defineProps<TComponentProps>();
const componentEmits = defineEmits<TComponentEmits>();

</script>

<style scoped>
.expansion-panel {
  border-radius: 10px;
  padding: 0;
}

.expansion-panel__activator {
  border-radius: 10px !important;
  transition-property: border-radius;
  transition-delay: 0.4s;
}

.v-list-group--open .expansion-panel__activator {
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  transition-delay: 0.1s;
}

.expansion-panel__list-item:last-of-type {
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
</style>
