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
    items.value = Array.from({ length: 60 }).reduce<TItem[]>((accumulator,_item, key) => {
      const phoneNumber = `${key + 1}`.padStart(2, '0');

      accumulator.push({
        [EHeaderValue.NAME]: 'name' + (key + 1),
        [EHeaderValue.ID]: key + 1,
        [EHeaderValue.EMAIL]: 'email' + (key + 1) + '@mail.com',
        [EHeaderValue.TELEPHONE]: `0-0${phoneNumber}-${phoneNumber}0-00-${phoneNumber}`,
      });

      return accumulator;
    },[]);
  },2000);
});

</script>
