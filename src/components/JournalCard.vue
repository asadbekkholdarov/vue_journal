<script setup>
import { ref, computed } from "vue";
import Image from "primevue/image";
import Button from "primevue/button";
import InputText from "primevue/inputtext"; // Import InputText component for the search field
import data from "@/JournalData";

import "primeicons/primeicons.css"; // Ensure PrimeIcons is included
const itemsToShow = ref(12);
const searchQuery = ref(""); // Reactive variable to hold the search query
const displayedData = computed(() => {
  // Filter data based on search query and limit the number of items shown
  return data
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, itemsToShow.value);
});

const loadMore = () => {
  itemsToShow.value += 12;
};
</script>

<template>
  <h1 class="text-3xl font-bold m-6">Популярные журналы</h1>
  <div class="flex items-center justify-center w-full">
    <div class="relative w-full">
      <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2"></i>
      <InputText 
        v-model="searchQuery"
        placeholder="Поиск по названию"
        class="w-full pl-10 py-2"
      />
    </div>
  </div>
  <div class="max-w-screen-2xl mx-auto bg-white p-6">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="info in displayedData"
        class="rounded-lg shadow-lg m-2 p-2"
        :key="info.id"
      >
        <div class="w-full ml-12 m-auto mb-4">
          <Image
            :src="info.image"
            alt="O'zbekiston Tarixi Jurnali"
            class="w-10 h-64 rounded-t-lg"
          />
        </div>

        <div
          class="flex items-center content-center"
          style="display: flex; justify-content: space-between"
        >
          <span class="text-sm text-teal-600 mb-1">{{ info.header }}</span>
          <span class="text-sm text-teal-600 m-0">
            <span class="pi pi-eye text-sm text-teal-600 mt-1"></span
            >{{ info.views }}</span
          >
        </div>
        <p class="text-lg font-semibold text-gray-900 mb-2">
          {{ info.title }}
        </p>
        <div class="flex justify-between items-center text-sm text-gray-500">
          <div class="flex items-center space-x-2">
            <i class="pi pi-calendar-plus"></i>
            <p>{{ info.date }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <i class="pi pi-arrow-circle-right" style="color: #3c4bdc"></i>
          </div>
        </div>
      </div>
    </div>

    <div v-if="itemsToShow < data.length" class="flex justify-center mt-6">
      <Button
        @click="loadMore"
        label="Подробнее"
        icon="pi pi-arrow-right"
        outlined
        severity="info"
        iconPos="right"
      />
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.left-3 {
  left: 0.8rem; /* Adjust the spacing if needed */
}


.transform {
  transform: translateY(-50%);
}

.w-full {
  width: 95%;
  margin: auto;
}

.pl-10 {
  padding-left: 2.5rem; /* Adjust for icon width + spacing */
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}</style>
