<script setup>
import { ref } from 'vue'
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
import AppSeparator from '@/components/AppSeparator.vue'

const activeCategory = ref('all') // храним активную категорию

console.log('из App.vue Инициализация. Начальная категория:', activeCategory.value)

// Функция для изменения категории
const setCategory = (category) => {
  console.log('из App.vue из Изменение категории с', activeCategory.value, 'на', category)
  activeCategory.value = category
  // Сбрасываю счётчик карточек при изменении категории
  startCards()
}
// fn проверки на показ карточки
const shouldShowCard = (cardCategory) => {
  const isVisible = activeCategory.value === 'all' || activeCategory.value === cardCategory

  console.log(`из App.vue Чек карточки ${cardCategory}: ${isVisible ? 'show' : 'hide'}`)
  return isVisible
}

// Счетчик для отслеживания порядка карточек
let cardNumber = 0

// Функция для сброса счетчика
const startCards = () => {
  console.log('из App.vue Сброс счетчика карточек')
  cardNumber = 0
}

// Fn для подсчёта общего количества видимых карточек
const countVisibleCards = () => {
  let count = 0
  if(shouldShowCard('brain')) count++ // AppCardContact
  if(shouldShowCard('extreme')) count++ // AppCardBiathlon
  if(shouldShowCard('quest')) count++ // AppCardLevel
  if(shouldShowCard('active')) count +=2 // AppCardRecord & AppCardTeam

  console.log('из App.vue Всего видимых карточек:', count)
  return count
}

// Функция проверки необходимости разделителя
const needSeparator = () => {
  const totalCards = countVisibleCards() // получили счётчик карточек
  cardNumber++ // увеличиваю счетчик текущей карточки

  return cardNumber < totalCards && totalCards > 1
}

// Сбрасываем счетчик при первой загрузке
startCards()
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
    <AppEventSelection
      :active-category="activeCategory"
      @change-category="setCategory"
    />
    <!-- Карточки с условиями отображения -->
    <template v-if="shouldShowCard('brain')">
      <AppCardContact />
      <AppSeparator v-if="needSeparator()" />
    </template>
    <template v-if="shouldShowCard('extreme')">
      <AppCardBiathlon />
      <AppSeparator v-if="needSeparator()" />
    </template>
    <template v-if="shouldShowCard('quest')">
      <AppCardLevel />
      <AppSeparator v-if="needSeparator()" />
    </template>
    <template v-if="shouldShowCard('active')">
      <AppCardRecords />
      <AppSeparator v-if="needSeparator()" />
    </template>
    <template v-if="shouldShowCard('active')">
      <AppCardTeam />
      <AppSeparator v-if="needSeparator()" />
    </template>
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
