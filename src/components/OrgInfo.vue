<script setup>
import { ref } from "vue";
import data from "@/OrgInfo";
import Button from "primevue/button";
const itemsToShow = ref(12);
const displayedData = ref(data.slice(0, itemsToShow.value));

const loadMore = () => {
  itemsToShow.value += 12;
  displayedData.value = data.slice(0, itemsToShow.value);
};
</script>

<template>
  <div class="max-w-screen-2xl mx-auto bg-white p-6">
    <h1 class="font-bold text-3xl mb-4">  Планируемые конференции</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="item in displayedData"
        :key="item.id"
        class="bg-white shadow-lg rounded-lg p-6"
      >
        <!-- Date -->
        <div class="flex inline p-2 space-x-2 mb-4">
          <p class="text-sm text-gray-600 bg-gray-200 p-1 rounded-lg">
            <span class="pi pi-calendar bg-gray-200"></span>{{ item.date }}
          </p>
        </div>

        <!-- Title and Description -->
        <div class="mb-4">
          <p class="text-lg font-semibold text-gray-900">
            {{ item.title }}
          </p>
        </div>

        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <p class="text-sm text-gray-600">
              <span class="pr-1 pi pi-map-marker" style="color: #3c4bdc;"></span>{{ item.location }}
            </p>
          </div>

          <div class="flex items-center space-x-2">
            <p class="text-sm text-gray-600">
              <span class="pr-1 pi pi-envelope" style="color: #3c4bdc"></span>{{ item.email }}
            </p>
          </div>

          <div class="flex items-center space-x-2">
            <p class="text-sm text-gray-600">
              <span class="pr-1 pi pi-phone" style="color: #3c4bdc;"></span>{{ item.phone }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="itemsToShow < data.length" class="flex justify-center mt-6">
      <Button @click="loadMore" label="Все конференции" icon="pi pi-arrow-right" outlined severity="info" iconPos="right" />

    </div>
  </div>
</template>

<style scoped>
</style>
