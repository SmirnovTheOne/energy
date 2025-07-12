<script setup>
import AppPlanStep from '@/components/AppPlanStep.vue'
</script>

<template>
  <section class="pe container">
    <div class="pe-wr">
      <div class="pe-head">
        <div class="pe-title">Как это работает</div>
        <div class="pe-desc">
          Мы — «Витязь Групп» — ведущий провайдер России в области командообразующих
          event-активностей. Как стать нашим клиентом?
        </div>
      </div>
      <div class="pe-main">
        <AppPlanStep />
      </div>
      <span class="pe-line"></span>
      <div class="pe-link-wr">
        <a href="#" class="arrow-link">
          <span class="arrow-link-text">заказать заряжающий тимбилдинг</span>
          <span class="arrow-link-text-mob">хочу тимбилдинг!</span>
          <img
            src="@/assets/icons/arrow.svg"
            alt="phone Vityaz Group"
            class="main-link-more-arrow"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-plan-event';
</style>
