<template>
  <v-data-table
    hide-default-footer
    :headers="headers"
    :items="componentProps.items"
    :height="528"
    :page="componentProps.currentPage"
    class="table"
    :items-per-page="componentProps.itemsPerPage"
    :style="cssVar"
  >
    <template #headers>
      <tr
        class="table__header"
      >
        <th
          v-for="{ value, title, width } in headers"
          :id="value"
          :key="value"
          class="table__header-item"
          :width="width"
        >
          <div class="table__header-item__title roboto-regular-lg">
            {{ title }}
          </div>
        </th>
      </tr>
    </template>
    <template #no-data>
      <span class="roboto-regular-lg">Нет данных</span>
    </template>
    <template #item="{ item }">
      <tr
        class="table__row"
      >
        <td
          v-for="{ value, width } in headers"
          :id="value"
          :key="value"
          class="table__row-item"
          :width="width"
        >
          <div class="table__row-item__text roboto-regular-lg">
            {{ item[value] }}
          </div>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { type TComponentProps, headers, defaultProps } from './models';
import { useTheme } from 'vuetify';

const vTheme = useTheme();

const componentProps = withDefaults(defineProps<TComponentProps>(), defaultProps);

const cssVar = computed(()=> ({'--header-color': vTheme.current.value.colors.primary}));

</script>

<style scoped>
.table {
  border-radius: 10px;
}

.table__header {
  background-color: var(--header-color);
  height: 62px;
  color: white;
}

.table__header-item {
  padding: 0 !important;
  height: 62px !important;
  border-bottom-width: 0px !important;
}

.table__header-item__title {
  padding: 0 0 0 35% !important;
}

.table :deep(tbody) {
  padding: 0 10px !important;
}

.table__row {
  height: 58px;
}

.table__row-item {
  border-bottom-width: 0 !important;
  padding: 0 !important;
}

.table__row-item__text {
  border-bottom: 1px solid #898989 !important;
  padding: 0 0 9px 35%;
  height: 100%;
  display: flex;
  align-items: end;
}


.table__row-item:first-of-type .table__row-item__text,
.table__header-item:first-of-type .table__header-item__title {
  margin-left: 12px;
}

.table__row-item:last-of-type .table__row-item__text,
.table__header-item:last-of-type .table__header-item__title {
  margin-right: 12px;
}
</style>
