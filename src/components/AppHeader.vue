<script setup lang="ts">
import { useMapStore } from '@/stores/maps'
import { useTeamStore } from '@/stores/teams'
import { computed } from 'vue'

const teams = useTeamStore()
const maps = useMapStore()

const pickedMap = computed(() => maps.pickedMapName)
const teamName = computed(() => teams.setTeamTurnName())
</script>

<template>
  <header class="flex flex-col justify-center items-center gap-10">
    <h1 class="flex flex-col lg:flex-row items-center justify-center w-full text-center">
      <input v-model="teams.team1" placeholder="Time 1" class="text-center" />
      <span class="px-8 py-4">vs</span>
      <input v-model="teams.team2" placeholder="Time 2" class="text-center" />
    </h1>
    <div class="md:flex w-full justify-center items-center text-center text-3xl">
      <hr class="grow border-2 border-green-500" />
      <h2 v-if="pickedMap" class="p-4">
        O mapa escolhido foi
        <span class="underline"> {{ pickedMap }}</span>
      </h2>
      <h2 v-else class="p-4">
        É a vez do time
        <span class="underline">{{ teamName }}</span>
        vetar um mapa
      </h2>
      <hr class="grow border-2 border-green-500" />
    </div>
  </header>
</template>
