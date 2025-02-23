<template>
  <v-dialog
    v-model="isModalShowed"
    :max-width="680"
    :height="286"
    persistent
    class="modal"
  >
    <v-card class="modal__card">
      <v-card-text>
        <span class="roboto-regular-sm">
          Banner with two lines of text. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Totam sunt praesentium, perspiciatis... magni. Lorem ipsum dolor sit amet...
        </span>
      </v-card-text>
      <v-card-actions class="modal__card-buttons">
        <UIFlatButton
          text="ok"
          @click="isModalShowed=false"
        />
        <UIFlatButton
          text="отмена"
          @click="isModalShowed=false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const isModalShowed = defineModel<boolean>({required: true});

</script>

<style scoped>
.modal__card {
  border-radius: 10px !important;
}

.modal__card-buttons {
  gap: 21px;
  padding-right: 20px;
}

.v-card-text {
  padding: 16px 8px 0px 16px !important;
  letter-spacing: 0 !important;
}

.v-card-actions {
  padding: 11px 20px;
}

.v-dialog > .v-overlay__content > .v-card {
  box-shadow: none;
}
</style>
