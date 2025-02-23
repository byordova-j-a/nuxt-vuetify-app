<template>
  <div class="page">
    <div class="cards-container">
      <UIExpansionPanel
        :width="474"
        header="Пользователь"
        icon="mdi-account-circle"
        :item-list="['ФИО', 'Контактные данные', 'Личная информация']"
        @click="isModalShowed=true"
      />
      <UIExpansionPanel
        :width="476"
        header="Компания"
        icon="mdi-application-outline"
        :item-list="['Адрес', 'Филиалы', 'Контактная информация']"
        @item-click="isModalShowed=true"
      />
    </div>
    <UIModal v-model="isModalShowed" />
  </div>
</template>
<script setup lang="ts">
const isModalShowed = ref(false);

</script>

<style scoped>
.cards-container {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}

</style>
