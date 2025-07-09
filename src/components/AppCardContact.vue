<script setup>
import AppSwiper from '@/components/AppSwiper.vue'
// import AppSeparator from '@/components/AppSeparator.vue'
const swiperImages = ['base', 'base', 'base']

// const category = 'brain' // уже использую в App.vue
</script>

<template>
  <section class="swr container">
    <div class="swr-wr">
      <div class="swr-lb">
        <div class="swr-title">Есть контакт!</div>
        <div class="swr-subTitle">
          Помните металлический конструктор из детства? А теперь умножьте размер деталей и масштаб
          эмоции на 150!
        </div>
        <div class="swr-desc-wr">
          <div class="swr-desc-1">
            В вашем распоряжении — самый большой конструктор в России. В ходе игры участникам
            предстоит изучить чертежи, собрать механизмы и выявить принцип взаимодействия элементов
            системы. Результатом работы станет запуск цепной реакции.
          </div>
          <div class="swr-desc-2">
            Игровой процесс позволяет отработать действия команды в условиях изменяющейся внешней
            среды и принимать решения при недостатке информации.
          </div>
          <div class="swr-desc-3">
            <span>Бизнес-задача</span>: развитие навыков сотрудничества, формирование
            ответственности за выполненную работу, осознание себя частью крутой команды.
          </div>
        </div>
        <div class="swr-info-badges">
          <div class="swr-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="swr-badge-img" />
            <span class="swr-badge-text">1,5-2,5</span>
          </div>
          <div class="swr-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="swr-badge-img" />
            <span class="swr-badge-text">20-600</span>
          </div>
          <div class="swr-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="swr-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="swr-badge-img" />
          </div>
        </div>
      </div>
      <div class="swr-rb">
        <AppSwiper :image-names="swiperImages"/>
      </div>
    </div>
<!--    <AppSeparator/>-->
  </section>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-card-swiper-right';
</style>
