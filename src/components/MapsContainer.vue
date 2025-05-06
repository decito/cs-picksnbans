<script setup lang="ts">
import MapCard from '@/components/MapCard.vue'
import { useMapStore } from '@/stores/maps'

const maps = useMapStore()

const vetoMap = (i: number) => {
  if (maps.mapList[i].vetted) return
  maps.markVetted(i)
}
</script>

<template>
  <div
    class="grid max-w-7xl grid-cols-1 grid-rows-2 gap-8 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <MapCard
      v-for="(map, i) in maps.mapList"
      :key="map.id"
      :id="map.id"
      :name="map.name"
      :vetted="map.vetted"
      :picked="map.picked"
      @click="vetoMap(i)"
    />
  </div>
</template>
