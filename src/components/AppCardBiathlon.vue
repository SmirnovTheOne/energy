<script setup>
import AppSwiper from '@/components/AppSwiper.vue'
// import AppSeparator from '@/components/AppSeparator.vue'
const swiperImages = ['cb-slide', 'base','base']

// const category = 'extreme' // уже использую в App.vue
</script>

<template>
  <section class="swl container">
    <div class="swl-wr">
      <div class="swl-lb">
        <AppSwiper :image-names="swiperImages"/>
      </div>

      <div class="swl-rb">
        <div class="swl-title">Автобиатлон</div>
        <div class="swl-subTitle">
          Построить болид, пройти трассу, поразить мишени и ощутить брызги шампанского на пьедестале
          почета. Слабо?
        </div>
        <div class="swl-desc-wr">
          <div class="swl-desc-1">
            Внимание, задача: команды собирают и тюнингуют свои болиды. Берем настоящие велобаги и
            современные композитные материалы, включаем фантазию, разрабатываем дизайн и получаем
            качественно иной уровень гоночных болидов.
          </div>
          <div class="swl-desc-2">
            Приправим это щепоткой адреналина: оборудуем трассу стрелковыми рубежами и проведем
            гонку по правилам автобиатлона.
          </div>
          <div class="swl-desc-3">
            <span>Бизнес-задача</span>: эмоциональное воодушевление от командной работы, повышение
            уровня мотивации, формирование навыков проектной работы
          </div>
        </div>
        <div class="swl-info-badges">
          <div class="swl-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="swl-badge-img" />
            <span class="swl-badge-text">1,5-2,5</span>
          </div>
          <div class="swl-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="swl-badge-img" />
            <span class="swl-badge-text">20-600</span>
          </div>
          <div class="swl-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="swl-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="swl-badge-img" />
          </div>
        </div>
      </div>
    </div>
<!--    <AppSeparator/>-->
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-card-swiper-left';
</style>
