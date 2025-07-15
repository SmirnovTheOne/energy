<script setup>
import { ref, computed } from 'vue'
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
// Счетчик карточек
let cardNumber = 0
const isMobile = window.innerWidth <= 768
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
// Показывать ли полигоны (4+ карточек)
const showPolygons = computed(() => {
  return visibleCardsCount.value >= 4
})
// Функция для сброса счетчика
const startCards = () => {
  console.log('из App.vue Сброс счетчика карточек')
  cardNumber = 0
}
// Fn для подсчёта общего количества видимых карточек
const visibleCardsCount = computed(() => {
  let count = 0
  if(shouldShowCard('brain')) count++
  if(shouldShowCard('extreme')) count++
  if(shouldShowCard('quest')) count++
  if(shouldShowCard('active')) count += 2
  console.log('из App.vue Всего видимых карточек:', count)
  return count
})
// Функция проверки необходимости разделителя
const needSeparator = () => {
  // Для мобильных
  if (isMobile) return true // Всегда показываем AppSeparator после карточки

  const totalCards = visibleCardsCount.value // получили счётчик карточек
  cardNumber++ // увеличиваю счетчик текущей карточки
  return cardNumber < totalCards && totalCards > 1
}
// Сбрасываем счетчик при первой загрузке
startCards()
</script>

<template>
  <div class="app">
    <img src="@/assets/icons/polygon/h-polygon.svg" alt="Декоративный элемент" class="h-polygon" />
    <img
      v-if="showPolygons"
      src="@/assets/icons/polygon/cb-polygon.svg"
      alt="Декоративный элемент"
      class="cb-polygon"
    />
    <img
      v-if="showPolygons"
      src="@/assets/icons/polygon/cr-polygon.svg"
      alt="Декоративный элемент"
      class="cr-polygon"
    />
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

<style lang="scss">
/* Базовые стили из макета */
@use '@/assets/scss/main.scss';
</style>
