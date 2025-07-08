<script setup>
import AppSwiper from '@/components/AppSwiper.vue'
const swiperImages = ['base', 'base','base']
</script>

<template>
  <section class="cb">
    <img
      src="@/assets/icons/polygon/cb-polygon.svg"
      alt="Декоративный элемент"
      class="cb-polygon"
    >
    <div class="cb-wr container">
      <div class="cb-lb">
        <AppSwiper :image-names="swiperImages"/>
      </div>

      <div class="cb-rb">
        <div class="cb-title">Автобиатлон</div>
        <div class="cb-subTitle">
          Построить болид, пройти трассу, поразить мишени и ощутить брызги шампанского на пьедестале
          почета. Слабо?
        </div>
        <div class="cb-desc-wr">
          <div class="cb-desc-1">
            Внимание, задача: команды собирают и тюнингуют свои болиды. Берем настоящие велобаги и
            современные композитные материалы, включаем фантазию, разрабатываем дизайн и получаем
            качественно иной уровень гоночных болидов.
          </div>
          <div class="cb-desc-2">
            Приправим это щепоткой адреналина: оборудуем трассу стрелковыми рубежами и проведем
            гонку по правилам автобиатлона.
          </div>
          <div class="cb-desc-3">
            <span>Бизнес-задача</span>: эмоциональное воодушевление от командной работы, повышение
            уровня мотивации, формирование навыков проектной работы
          </div>
        </div>
        <div class="cb-info-badges">
          <div class="cb-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="cb-badge-img" />
            <span class="cb-badge-text">1,5-2,5</span>
          </div>
          <div class="cb-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="cb-badge-img" />
            <span class="cb-badge-text">20-600</span>
          </div>
          <div class="cb-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="cb-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="cb-badge-img" />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-card-biathlon';
</style>
