<script setup>
import HomeHero from '@/components/HomeHero.vue';
import Organizations from '@/components/Organizations.vue';
import Contact from '@/components/Contact.vue';
import OrganizationInfo from '@/components/OrgInfo.vue';
import JournalCard from '@/components/JournalCard.vue';
import Stats from '@/components/Stats.vue';
</script>

<template>
    <HomeHero></HomeHero>
    <JournalCard></JournalCard>
    <Stats></Stats>
    <OrganizationInfo></OrganizationInfo>
    <Organizations></Organizations>
    <Contact></Contact>
</template>