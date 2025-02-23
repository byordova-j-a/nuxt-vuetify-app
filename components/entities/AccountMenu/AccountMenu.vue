<template>
  <v-menu
    v-model="isMenuOpened"
    content-class="account-menu"
    :width="169"
    :height="232"
    :offset="[2, -7]"
    :close-on-content-click="false"
  >
    <template #activator="{props}">
      <img
        class="account-menu__activator"
        v-bind="props"
        src="~/assets/img/Pusheen.jpg"
        alt="Pusheen"
      >
    </template>
    <v-card class="account-menu__card">
      <v-card-title class="account-menu__card-title">
        <span class="roboto-regular-lg">
          {{ componentProps.header }}
        </span>
      </v-card-title>
      <v-card-text>
        <v-list class="account-menu__card-list">
          <v-list-item
            v-for="{id, title, icon, onClick} in items"
            :key="id"
            class="roboto-regular-lg"
            @click="onClick"
          >
            <v-list-item-title>
              <span class="roboto-regular-lg">
                {{ title }}
              </span>
            </v-list-item-title>
            <template #append>
              <v-icon :size="20">
                {{ icon }}
              </v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="account-menu__card-button"
          height="48"
          width="100%"
        >
          <span class="roboto-regular-lg">
            Выход
          </span>
          <template #append>
            <div
              class="arrow"
            />
          </template>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import { type TComponentProps, settingsPath } from './models';

const componentProps = defineProps<TComponentProps>();

const isMenuOpened = ref(false);
const theme = useTheme();
const route = useRoute();

const toggleTheme = () => {
  theme.global.name.value = (theme.global.current.value.dark ? 'light' : 'dark') + '-theme';
};

const changePage = async() => {
  if (route.path === settingsPath) {
    return;
  }

  await navigateTo(settingsPath); isMenuOpened.value = false;
};

const items = [
  {
    id: 'settings',
    title: 'Настройки',
    icon: 'mdi-cog',
    onClick: changePage,
  },
  {
    id: 'theme',
    title: 'Тема',
    icon: 'mdi-theme-light-dark',
    onClick: toggleTheme,
  },
];

</script>

<style scoped>
:deep(.account-menu) {
  border-radius: 10px !important;
}

.account-menu__activator {
  border-radius: 50%;
  object-fit: cover;
  height: 40px;
  width: 40px;
}

:deep(.account-menu .v-card) {
  overflow: hidden !important;
}

.account-menu__card {
  box-shadow: 0px 4px 4px #00000040 !important;
}

.account-menu__card-title {
  padding: 19px 16px 0;
  box-sizing: content-box;
  height: 28px;
}

.v-card-text {
  padding: 6px 0 0 0 !important;
  height: 137px;
  border-bottom: solid 1px #C7C7C7;
}

:deep(.account-menu .v-list) {
  padding: 0;
}

.account-menu__card-list :deep(.v-list-item) {
  min-height: 28px;
  padding: 5px 23px 5px 16px !important;
  grid-template-columns: max-content 1fr 20px;
}

.account-menu__card-list :deep(.v-list-item-title) {
  height: 28px;
  display: flex;
  align-items: center;
}

.v-card-actions {
  min-height: 48px;
  padding: 0;
}

.v-card-actions .account-menu__card-button {
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  padding: 7px 16px 13px;
  text-transform: unset !important;
  justify-content: space-between;
  grid-template-areas: "content append" !important;
  grid-template-columns: min-content min-content;
}
.arrow {
  width: 27px;
  height: 16px;
  background-color: currentColor;
  mask: url(~/assets/img/Arrow.svg);
}
</style>
