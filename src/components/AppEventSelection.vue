<script setup>
import TabsContainer from '@/components/TabsContainer.vue'
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
      <TabsContainer />
    </div>
  </section>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-event-selection';
</style>
