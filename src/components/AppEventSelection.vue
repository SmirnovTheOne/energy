<script setup>
import TabsContainer from '@/components/TabsContainer.vue'

// Принимаем текущую активную категорию из родителя (App.vue)
const props = defineProps({
  activeCategory: {
    type: String,
    required: true
  }
})

console.log('[AppEventSelection] Получена категория:', props.activeCategory)

// Объявляем событие для изменения категории
const emit = defineEmits(['change-category'])

// Обработчик изменения категории
const handleCategoryChange = (category) => {
  emit('change-category', category) // Пробрасываем событие в родительский компонент
}
</script>

<template>
  <section class="es">
    <div class="es-wr container">
      <div class="es-head">
        <div class="es-title">Выберите ваше приключение</div>
        <div class="es-desc">
          Мы предлагаем разные командообразующие программы, которые могут сплотить вашу команду и
          двигаться к результату еще уверенее!
        </div>
      </div>
      <span class="es-line"></span>
    </div>
    <div class="es-main">
      <TabsContainer
        :active-category="activeCategory"
        @change-category="handleCategoryChange"
      />
    </div>
  </section>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-event-selection';
</style>
