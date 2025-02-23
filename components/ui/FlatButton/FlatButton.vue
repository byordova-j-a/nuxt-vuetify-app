<template>
  <v-btn
    color="primary-light"
    variant="flat"
    @click="componentEmits('click')"
  >
    <span class="roboto-medium-sm">
      {{ componentProps.text }}
    </span>
  </v-btn>
</template>
<script setup lang="ts">
import type { TComponentEmits, TComponentProps } from './models';

const componentProps = defineProps<TComponentProps>();
const componentEmits = defineEmits<TComponentEmits>();

</script>
