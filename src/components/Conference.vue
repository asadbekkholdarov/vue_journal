<script setup>
import Tabs from "primevue/tabs";
import Tab from "primevue/tab";
import TabPanel from "primevue/tabpanel";
import TabPanels from "primevue/tabpanels";
import TabList from "primevue/tablist";
import data from '@/OrgInfo';
import { ref, computed } from 'vue';

const currentPage = ref(1);
const itemsPerPage = 8;

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(data.length / itemsPerPage);
});

const changePage = (page) => {
    currentPage.value = page;
};
</script>

<template>
    <div class="hero-container">
        <div class="hero-content">
            <p>
                <RouterLink to="/">Главная</RouterLink> / <RouterLink to="/">Пресс-служба</RouterLink> / <RouterLink
                    to="/">Конференция</RouterLink>
            </p>
            <h1 class="text-6xl leading-tight">Конференция</h1>

        </div>
    </div>  
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab class="tabs" value="0">Ближайшие конференции</Tab>
                <Tab class="tabs" value="1">Планируемые конференции</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div v-for="item in paginatedData" :key="item.id" class="bg-white shadow-lg rounded-lg p-6">
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
                                        <span class="pr-1 pi pi-map-marker" style="color: #3c4bdc;"></span>{{
                                            item.location
                                        }}
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

                    <!-- Pagination Controls -->
                    <div class="flex justify-end mt-6">
                        <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                            :class="['px-4 py-2 mx-1 rounded-lg', { 'bg-blue-500 text-white': page === currentPage, 'bg-gray-200': page !== currentPage }]">
                            {{ page }}
                        </button>
                    </div>
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
                        velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped>
.tabs {
    color: blue;
}

.hero-container {
    text-align: start;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 4rem;
    background-color: #000000A3;
}

.hero-content {
    color: white;
    text-align: start;
}
</style>
