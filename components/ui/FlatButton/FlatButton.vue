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
import { type TComponentEmits, type TComponentProps, defaultProps } from './models';

const componentProps = withDefaults(defineProps<TComponentProps>(), defaultProps);
const componentEmits = defineEmits<TComponentEmits>();

</script>
