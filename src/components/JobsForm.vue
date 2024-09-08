<template>
    <div class="p-6 max-w-6xl mx-auto">
        <!-- Organizations -->
        <div class="space-y-2 mb-6">
            <h3 class="text-lg font-semibold">Organizations</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Dropdown v-model="form.organization" :options="organizations" optionLabel="name"
                    placeholder="Tashkilotni tanlang" />
                <Dropdown v-model="form.specialization" :options="specializations" optionLabel="name"
                    placeholder="Mutaxassislikni tanlang" />
            </div>
        </div>

        <!-- Shaxsiy Ma'lumotlar -->
        <div class="space-y-2 mb-6">
            <h3 class="text-lg font-semibold">Shaxsiy Ma'lumotlar</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputText v-model="form.firstName" placeholder="Ism" />
                <InputText v-model="form.lastName" placeholder="Familiya" />
                <InputText v-model="form.middleName" placeholder="Sharif" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Calendar v-model="form.birthDay" placeholder="Tug'ilgan kun" />
                <Calendar v-model="form.birthMonth" placeholder="Tug'ilgan oy" />
                <InputText v-model="form.birthYear" placeholder="Tug'ilgan yil" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputText v-model="form.address" placeholder="Yashash manzili" />
                <InputText v-model="form.phoneNumber" placeholder="Telefon raqam" />
                <InputText v-model="form.email" placeholder="Elektron pochta" />
            </div>
        </div>

        <!-- Malumotingiz and Qoshimcha Malumot -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Malumotingiz -->
            <div class="space-y-2">
                <h3 class="text-lg font-semibold">Malumotingiz</h3>
                <div class="space-y-2">
                    <InputText putText v-model="form.education.institution" placeholder="O'qish muassasasi nomi"
                        class="w-full" />
                    <div class="grid grid-cols-2 gap-4">
                        <InputText v-model="form.education.faculty" placeholder="Fakultet" />
                        <InputText v-model="form.education.specialization" placeholder="Mutaxassislik" />
                    </div>
                    <InputText v-model="form.education.endYear" placeholder="Tugallangan yil" />
                </div>
            </div>

            <!-- Qoshimcha Malumot -->
            <div class="space-y-2">
                <h3 class="text-lg font-semibold">Qoshimcha Malumot</h3>
                <div class="space-y-2">
                    <InputText v-model="form.additional.institution" placeholder="O'qish muassasasi nomi"
                        class="w-full" />
                    <InputText v-model="form.additional.specialization" placeholder="Mutaxassislik" class="w-full" />
                    <div class="grid grid-cols-2 gap-4">
                        <InputText v-model="form.additional.endMonth" placeholder="Tugallangan oy" />
                        <InputText v-model="form.additional.endYear" placeholder="Tugallangan yil" />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <!-- Xorijiy tillar -->
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                    <h3 class="text-lg font-semibold">Shaxsiy Ma'lumotlar</h3>
                    <div class="flex flex-col">
                        <Dropdown id="language" v-model="language" optionLabel="label" :options="languages"
                            placeholder="Select a language" />
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-1">
                            <label for="ogzaki" class="block">Ogzaki</label>
                            <Dropdown id="ogzaki" v-model="ogzakiLevel" :options="levels"  optionLabel="label" placeholder="Select level" />
                        </div>
                        <div class="flex-1">
                            <label for="yozma" class="block">Yozma</label>
                            <Dropdown id="yozma" v-model="yozmaLevel" :options="levels" optionLabel="label" placeholder="Select level" />
                        </div>
                        <div class="flex-1">
                            <label for="oqish" class="block">Oqish</label>
                            <Dropdown id="oqish" v-model="oqishLevel" :options="levels" optionLabel="label" placeholder="Select level" />
                        </div>
                    </div>
                </div>
                <!-- Mehnat faoliyati -->
                <div class="space-y-2">
                    <h3 class="text-lg font-semibold">Mehnat faoliyati</h3>
                    <div class="grid grid-cols-2 gap-4 flex flex-col">
                        <InputText v-model="form.work.endMonth" placeholder="Tugallangan oy" />
                        <InputText v-model="form.work.endYear" placeholder="Lavozim" />
                    </div>
                    <div class="grid gap-4 grid-cols-2 gap-4">
                        <div class="flex-1 grid">
                            <label for="boshlangan-oy" class="block">Boshlangan Oy</label>
                            <Dropdown id="boshlangan-oy" v-model="boshlanganOy" optionLabel="label" :options="months" placeholder="Month" />

                        </div>
                        <div class="flex-1 grid">
                            <label for="boshlangan-yil" class="block">Boshlangan Yil</label>
                            <Dropdown id="boshlangan-yil" v-model="boshlanganYil" optionLabel="label" :options="years" placeholder="Year" />
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-1 grid">
                            <label for="tugallangan-oy" class="block">Tugallangan Oy</label>
                            <Dropdown id="tugallangan-oy" v-model="tugallanganOy" optionLabel="label" :options="months"
                                placeholder="Month" />

                        </div>
                        <div class="flex-1 grid">
                            <label for="tugallangan-yil" class="block">Tugallangan Yil</label>
                            <Dropdown id="tugallangan-yil" v-model="tugallanganYil" optionLabel="label" :options="years"
                                placeholder="Year" />
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <!-- Qachon ishga tushasiz and bosh ish orni haqida qayerdan bildingiz -->
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <h3 class="text-lg font-semibold mt-4">Qachon ishga tushasiz</h3>
                    <Calendar v-model="startDate" placeholder="Select a date" />
                </div>
                <div>
                    <h3 class="text-lg font-semibold mt-3">
                        Bosh ish orni haqida qayerdan bildingiz
                    </h3>
                    <Dropdown v-model="source" :options="sources" optionLabel="label" placeholder="Select source" />
                </div>
            </div>

            <!-- Qancha oylik sizni qoniqtiradi and radio buttons -->
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <h3 class="text-lg font-semibold mt-4">Qancha oylik sizni qoniqtiradi</h3>
                    <InputText v-model="desiredSalary" placeholder="Enter amount" />
                </div>
                <div>

                    <div class="flex gap-4 mt-4">
                        <input type="radio" name="" id="">
                        <label for="">Anketadagi barcha malomotlarni haqiqiyligini tasdiqlayman </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <Button label="Yuborish" icon="pi pi-check" type="submit" class="mt-4" @click="onSubmit" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";

const ogzakiLevel = ref("");
const yozmaLevel = ref("");
const oqishLevel = ref("");
const oquvMuassasi = ref("");
const boshlanganOy = ref("");
const boshlanganYil = ref("");
const tugallanganOy = ref("");
const tugallanganYil = ref("");
const startDate = ref(null);
const source = ref(null);
const desiredSalary = ref("");
const selectedOption = ref("");
const languages = ref([
    { label: "English", value: "en" },
    { label: "Russian", value: "ru" },
    { label: "Uzbek", value: "uz" },
]);
const language = ref(null);

const levels = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
];
const level = ref(null)

const months = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" }
];
const month = ref(null)

const years = Array.from({ length: 30 }, (_, i) => ({
    label: (new Date().getFullYear() - i).toString(),
    value: (new Date().getFullYear() - i).toString(),
}));

const sources = [
    { label: "Instagram", value: "instagram" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "Telegram", value: "telegram" },
];
const organizations = ref([
    { name: "Organization 1" },
    { name: "Organization 2" },
]);
const specializations = ref([
    { name: "Specialization 1" },
    { name: "Specialization 2" },
]);

const form = ref({
    organization: null,
    specialization: null,
    firstName: "",
    lastName: "",
    middleName: "",
    birthDay: null,
    birthMonth: null,
    birthYear: "",
    address: "",
    phoneNumber: "",
    email: "",
    education: {
        institution: "",
        faculty: "",
        specialization: "",
        endYear: "",
    },
    work: {
        endMonth: "",
        endYear: "",
    },
    additional: {
        institution: "",
        specialization: "",
        endMonth: "",
        endYear: "",
    },
});

const onSubmit = () => {
    if (validateForm()) {
        console.log("Form submitted:", form.value);
    } else {
        console.log("Validation failed");
    }
};

const validateForm = () => {
    const errors = [];
    if (!form.value.organization) errors.push("Organization is required");
    if (!form.value.firstName) errors.push("First name is required");
    if (!form.value.lastName) errors.push("Last name is required");
    if (
        !form.value.birthDay ||
        !form.value.birthMonth ||
        !form.value.birthYear
    )
        errors.push("Date of birth is required");
    if (!form.value.phoneNumber) errors.push("Phone number is required");
    if (!form.value.email) errors.push("Email is required");
    if (
        !form.value.education.institution ||
        !form.value.education.faculty ||
        !form.value.education.specialization ||
        !form.value.education.endYear
    )
        errors.push("Education information is required");
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
};
</script>

<style scoped></style>
