<script setup>
import AppSwiper from '@/components/AppSwiper.vue'

const swiperImages = ['base', 'base','base']
</script>

<template>
  <section class="ct container">
    <div class="ct-wr">
      <div class="ct-lb">
        <div class="ct-title">Команда года</div>
        <div class="ct-subTitle">
          Идеальная возможность для активного отдыха, сплочения и улучшения коммуникации.
        </div>
        <div class="ct-desc-wr">
          <div class="ct-desc-1">
            Команда года – это несложные испытания, понятная механика, объединяющий финал и ничего
            лишнего.
          </div>
          <div class="ct-desc-2">
            Команды пройдут ряд парных испытаний, в которых от каждого участника потребуется
            активность, ловкость и смекалка. Но только слаженная работа всей команды даст
            необходимый результат.
          </div>
          <div class="ct-desc-3">
            <span>Бизнес-задача</span>: эмоциональное воодушевление для создания
            мотивации, осознание себя частью крутой команды.
          </div>
        </div>
        <div class="ct-info-badges">
          <div class="ct-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="ct-badge-img" />
            <span class="ct-badge-text">1,5-2,5</span>
          </div>
          <div class="ct-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="ct-badge-img" />
            <span class="ct-badge-text">20-600</span>
          </div>
          <div class="ct-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="ct-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="ct-badge-img" />
          </div>
        </div>
      </div>

      <div class="ct-rb">
        <AppSwiper :image-names="swiperImages"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-card-team';
</style>
