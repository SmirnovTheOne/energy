<script setup>
const steps = [
  {
    number: '01.',
    title: 'Вы отправляете заявку на этом сайте'
  },
  {
    number: '02.',
    title: 'С вами связывается наш менеджер и описывает условия подготовки к программе'
  },
  {
    number: '03.',
    title: 'Приключения начинаются!'
  }
]
</script>

<template>
  <div class="plan-steps">
    <div
      class="step"
      v-for="(step, index) in steps"
      :key="index"
      :class="{ 'last-step': index === steps.length - 1 }"
    >
      <div class="step-number">{{ step.number }}</div>
      <div class="step-content">
        <h3 class="step-title">{{ step.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-plan-step';
</style>
