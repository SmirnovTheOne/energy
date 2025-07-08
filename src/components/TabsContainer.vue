<script setup>
import { ref } from 'vue';
import TabButton from './TabButton.vue';

const tabs = ref([
  { id: 'all', text: 'вce приключения' },
  { id: 'extreme', text: 'экстрим' },
  { id: 'quest', text: 'квест' },
  { id: 'brain', text: 'взрыв мозга' },
  { id: 'active', text: 'актив' },
  { id: 'creative', text: 'креатив' }
]);

const activeTab = ref('all');

const setActiveTab = (tabId) => {
  activeTab.value = tabId;
  // Здесь можно добавить дополнительную логику при переключении табов
};
</script>

<template>
  <div class="tabs-container">
    <div class="tabs-inner">
      <TabButton
        v-for="tab in tabs"
        :key="tab.id"
        :text="tab.text"
        :isActive="activeTab === tab.id"
        @click="setActiveTab(tab.id)"
      />
    </div>
  </div>
</template>


