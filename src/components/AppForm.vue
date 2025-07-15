<script setup>
import { ref } from 'vue'
import AppSuccessForm from '@/components/AppSuccessForm.vue'

const emit = defineEmits(['close'])
const showSuccess = ref(false)

const closeModal = () => {
  emit('close')
}

const handleSubmit = (e) => {
  e.preventDefault()
  showSuccess.value = true
}
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content" v-if="!showSuccess">
      <button
        class="close-button"
        @click="closeModal"
      >
        <img src="@/assets/icons/btn-color-close.svg" alt="btn-burger" class="btn-burger-img" />
      </button>
      <h2 class="modal-title">Заявка на командную игру</h2>
      <p class="modal-description">Заполните эту форму и мы свяжемся с вами в ближайшее время.</p>
      <p class="modal-description--phone">Мы свяжемся с вами в ближайшее время.</p>

      <form class="form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <div class="input-container">
            <img src="@/assets/icons/modal-user.svg" alt="Имя" class="input-icon">
            <input type="text" id="name" placeholder="Имя" required>
            <span class="gradient-border"></span>
          </div>
        </div>

        <div class="form-group">
          <div class="input-container">
            <img src="@/assets/icons/modal-phone.svg" alt="Телефон" class="input-icon">
            <input type="text" id="phone" placeholder="Телефон" required>
            <span class="gradient-border"></span>
          </div>
        </div>

        <div class="form-group">
          <div class="input-container">
            <img src="@/assets/icons/modal-at.svg" alt="Почта" class="input-icon">
            <input type="text" id="email" placeholder="Почта" required>
            <span class="gradient-border"></span>
          </div>
        </div>

        <p class="form-note">Все поля обязательны для заполнения.</p>

        <div class="modal-footer">
          <button type="submit" class="submit-button">
            <span class="swiper-btn-text">Отправить заявку</span>
          </button>

          <p class="form-agreement">
            Отправляя заявку, вы принимаете <a href="#" class="">условия</a> обработки персональных.
          </p>
        </div>
      </form>
    </div>
    <AppSuccessForm
      v-if="showSuccess"
      @close="closeModal"
    />
  </div>
</template>

<style scoped lang="scss">
@use  '@/assets/scss/components/_app-form';
</style>
