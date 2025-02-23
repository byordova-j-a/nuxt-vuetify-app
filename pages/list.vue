<template>
  <div class="page d-flex flex-column justify-space-between">
    <EntityTable
      :current-page="currentPage"
      :items="items"
      :items-per-page="itemsPerPage"
    />
    <v-pagination
      v-if="items.length"
      v-model="currentPage"
      :length="pageAmount"
      :total-visible="5"
      rounded
    />
  </div>
</template>
<script setup lang="ts">
import { EHeaderValue, type TItem } from '~/components/entities/Table/models';

const items = ref<TItem[]>([]);

const itemsPerPage = 4;
const currentPage = ref(1);

const pageAmount = computed(() => Math.ceil(items.value.length / itemsPerPage));

onMounted(() => {
  setTimeout(() => {
    items.value = [
      {[EHeaderValue.NAME]: 'naddme1', [EHeaderValue.ID]:1, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme2', [EHeaderValue.ID]:2, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme3', [EHeaderValue.ID]:3, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme4', [EHeaderValue.ID]:4, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme5', [EHeaderValue.ID]:5, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme6', [EHeaderValue.ID]:6, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme6', [EHeaderValue.ID]:7, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme1', [EHeaderValue.ID]:8, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme2', [EHeaderValue.ID]:9, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme3', [EHeaderValue.ID]:10, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme4', [EHeaderValue.ID]:11, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme5', [EHeaderValue.ID]:12, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme6', [EHeaderValue.ID]:13, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme6', [EHeaderValue.ID]:14, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme1', [EHeaderValue.ID]:15, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme2', [EHeaderValue.ID]:16, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme3', [EHeaderValue.ID]:17, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme4', [EHeaderValue.ID]:18, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme5', [EHeaderValue.ID]:19, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {[EHeaderValue.NAME]: 'naddme6', [EHeaderValue.ID]:20, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone' },
      {name: 'naddme6', [EHeaderValue.ID]:21, [EHeaderValue.EMAIL]: 'edddmail', [EHeaderValue.TELEPHONE]: 'telepdddhone'},
    ];
  },2000);
});

</script>
