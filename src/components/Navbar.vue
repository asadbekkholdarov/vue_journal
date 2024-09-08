<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";

import Dropdown from "primevue/dropdown";
import { RouterLink } from "vue-router";
import logo from "@/assets/journeyLogo.png";

const items = ref([
  {
    label: "Журналы",
    icon: "",
    to: "/",
  },
  {
    label: "Статья",
    icon: "",
    to: "/",
  },
  {
    label: "Авторы",
    icon: "",
    to: "/",
  },
  {
    label: "Пресс-служба",
    icon: "",
    items: [
      {
        label: "Пресс-служба 1",
        icon: "pi pi-bolt",
      },
      {
        label: "Пресс-служба 2",
        icon: "pi pi-bolt",
      },
    ],
  },
  {
    label: "Конференция",
    icon: "",
    to: '/conference'
  },
  {
    label: "Бўш иш ўринлар",
    to: "/jobs",
  },
]);

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Russian", value: "ru" },
  { label: "Uzbek", value: "uz" },
];
</script>

<template>
  <div class="card">
    <Menubar class="shadow-xl" :model="items">
      <template #start>
        <img :src="logo" alt="Logo" />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <RouterLink
          v-if="item.to"
          :to="item.to"
          class="flex items-center"
          v-bind="props.action"
        >
          <span class="m-0">{{ item.label }}</span>
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-0"
          >
            {{ item.shortcut }}
          </span>
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-0': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </RouterLink>
        <a v-else class="flex items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-0">{{ item.label }}</span>
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >
            {{ item.shortcut }}
          </span>
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-0': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText class="input"  placeholder="Поиск" />
          </IconField>
          <Dropdown
            :options="languageOptions"
            option-label="label"
            option-value="value"
            placeholder="Русский"
            class="w-24 langs sm:w-auto"
          />
          <Button
            class="sign_in_btn"
            label="Войти"
            outlined=""
            icon="pi pi-sign-in"
            iconPos="right"
          />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style scoped>
.langs {
  border: none;
}
.card {
  padding: 15px 0;
  background-color: white;
}

Menubar {
  border-radius: 24px;

}

.menu-item {
  margin-right: 0.4rem;
  text-decoration: none;
  color: #333;
}

.menu-item:hover {
  color: #007bff;
}
.sign_in_btn {
  color: #3c4bdc;
  border: 1px solid #3c4bdc;
}

.sign_in_btn:hover {
  background: #3c4bdc;
  color: white;
}
</style>