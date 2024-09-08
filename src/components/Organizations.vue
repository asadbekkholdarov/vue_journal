<script setup>
import logo from "@/assets/Ellipse1.png";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
const cards = [
  {
    logo: logo,
    name: "Тошкент Давлат Техника Универ",
    address: "Россия, 119333, г. Москва, ул. Вавилова, 44/2",
    phone: "+7 (499) 658-01-03",
    mobile: "+7 (499) 658-01-03",
    email: "doklady_mathematics@mail.ru",
    website: "http://www.frccc.ru",
    download: "2684-9543 (print)",
  },
  {
    logo: logo,
    name: "Тошкент Давлат Техника Универ",
    address: "Россия, 119333, г. Москва, ул. Вавилова, 44/2",
    phone: "+7 (499) 658-01-03",
    mobile: "+7 (499) 658-01-03",
    email: "doklady_mathematics@mail.ru",
    website: "http://www.frccc.ru",
    download: "2684-9543 (print)",
  },
  {
    logo: logo,
    name: "Тошкент Давлат Техника Универ",
    address: "Россия, 119333, г. Москва, ул. Вавилова, 44/2",
    phone: "+7 (499) 658-01-03",
    mobile: "+7 (499) 658-01-03",
    email: "doklady_mathematics@mail.ru",
    website: "http://www.frccc.ru",
    download: "2684-9543 (print)",
  },
  {
    logo: logo,
    name: "Тошкент Давлат Техника Универ",
    address: "Россия, 119333, г. Москва, ул. Вавилова, 44/2",
    phone: "+7 (499) 658-01-03",
    mobile: "+7 (499) 658-01-03",
    email: "doklady_mathematics@mail.ru",
    website: "http://www.frccc.ru",
    download: "2684-9543 (print)",
  },
];
</script>

<template>
    <h2 class="text-4xl font-bold m-2">Организации</h2>
    <Carousel :value="cards" :numVisible="3" :numScroll="1" circular autoplayInterval="3000">
        <template #item="{ data }">
            <Card class="pl-2" style="width: 30rem;">
                <template #title>
                    <img style="display: inline-block;" :src="data.logo" alt="">
                    <span>{{ data.name }}</span>
                </template>
                <template #content>
                    <p><i class="pi pi-map-marker" style="color: #3C4BDC"></i>{{ data.address }}</p>
                    <p><i class="pi pi-phone" style="color: #3C4BDC"></i>{{ data.phone }}</p>
                    <p><i class="pi pi-mobile" style="color: #3C4BDC"></i>{{ data.mobile }}</p>
                    <p><i class="pi pi-envelope" style="color: #3C4BDC"></i>{{ data.email }}</p>
                    <p><i class="pi pi-globe" style="color: #3C4BDC"></i>{{ data.website }}</p>
                    <p><i class="pi pi-cloud-download" style="color: #3C4BDC"></i>{{ data.download }}</p>
                </template>
            </Card>
        </template>
    </Carousel>
</template>


<style scoped>
section {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}
i {
  margin: 5px;
}
p {
  margin-left: 55px;
}
</style>
