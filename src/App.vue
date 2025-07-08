<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppMainBlock from '@/components/AppMainBlock.vue'
import AppManifesto from '@/components/AppManifesto.vue'
import AppEventSelection from '@/components/AppEventSelection.vue'
import AppCardContact from '@/components/AppCardContact.vue'
import AppCardBiathlon from '@/components/AppCardBiathlon.vue'
import AppCardLevel from '@/components/AppCardLevel.vue'
import AppCardRecords from '@/components/AppCardRecords.vue'
import AppCardTeam from '@/components/AppCardTeam.vue'
import AppPlanEvent from '@/components/AppPlanEvent.vue'
import AppClients from '@/components/AppClients.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <img src="@/assets/icons/polygon/h-polygon.svg" alt="Декоративный элемент" class="h-polygon" />
    <!-- Шапка -->
    <AppHeader />
    <!-- Основной контент -->
    <AppMainBlock />
    <!-- Манифест -->
    <AppManifesto />
    <!-- Выбор приключения -->
    <AppEventSelection />
    <!-- Card есть контакт -->
    <AppCardContact />
    <!-- Card автобиатлон -->
    <AppCardBiathlon />
    <!-- Card level up -->
    <AppCardLevel />
    <!-- Card рекорды -->
    <AppCardRecords />
    <!-- Card команда года -->
    <AppCardTeam />
    <!-- Как это работает  -->
    <AppPlanEvent />
    <!-- Клиенты  -->
    <AppClients />
    <!-- Подвал -->
    <AppFooter />
  </div>
</template>

<style>
/* Базовые стили из макета */
</style>
