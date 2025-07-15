<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

onMounted(() => {
  const timer = setTimeout(() => {
    closeModal()
  }, 5000)

  return () => clearTimeout(timer)
})
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <img
        src="@/assets/icons/polygon/footer-polygon-mob.svg"
        alt="Декоративный элемент"
        class="f-polygon"
      />

      <button class="close-button" @click="closeModal">
        <img src="@/assets/icons/btn-color-close.svg" alt="Закрыть" />
      </button>

      <h2 class="success-title">Ваша форма успешно отправлена!</h2>
      <h2 class="success-title--mob">Заявка отправлена</h2>

      <p class="success-description">Мы свяжемся с вами в ближайшее время</p>

      <div class="modal-footer">
        <button class="return-button" @click="closeModal">
          <span class="return-btn-text">Вернуться на сайт</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/components/_app-success-form';
</style>
