<script setup>
import { ref } from 'vue';

const props = defineProps({
  activeCategory: String
})
const emit = defineEmits(['change-category'])

console.log('из TabsContainer Получена категория:', props.activeCategory)

import TabButton from './TabButton.vue';

const tabs = [
  { id: 'all', text: 'вce приключения' },
  { id: 'extreme', text: 'экстрим' },
  { id: 'quest', text: 'квест' },
  { id: 'brain', text: 'взрыв мозга' },
  { id: 'active', text: 'актив' },
  { id: 'creative', text: 'креатив' }
]

console.log('из TabsContainer Доступные табы:', tabs)
// const activeTab = ref('all');

// const setActiveTab = (tabId) => {
//   activeTab.value = tabId;
// };

const changeCategory = (category) => {
  console.log(' из TabsContainer Выбрана категория:', category)
  emit('change-category', category)
}

</script>

<template>
  <div class="tabs-container">
    <div class="tabs-inner">
      <TabButton
        v-for="tab in tabs"
        :key="tab.id"
        :text="tab.text"
        :isActive="activeCategory === tab.id"
        @click="changeCategory(tab.id)"
      />
    </div>
  </div>
</template>


