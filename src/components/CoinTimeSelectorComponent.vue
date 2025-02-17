<template>
  <select v-model="selectedDays" class="coin-badge" @change="emitSelectedDays">
    <option v-for="(day, index) in days" :key="index" :value="day.value">
      {{ day.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DAYS from '@/models/enums/days'

const days = ref([
  { name: '7 days', value: DAYS.WEEK },
  { name: '30 days', value: DAYS.MONTH },
])

const selectedDays = ref(DAYS.WEEK)

const emit = defineEmits(['days-selected'])

const emitSelectedDays = () => {
  emit('days-selected', selectedDays.value)
}
</script>
